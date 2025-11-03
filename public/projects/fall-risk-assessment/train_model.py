import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score
import joblib
import json

def prepare_features(df):
    """Prepare features for modeling"""
    
    feature_cols = [
        'age', 'bmi', 'gait_speed', 'balance_score', 'muscle_strength',
        'previous_falls', 'num_medications', 'takes_sedatives',
        'takes_blood_pressure_meds', 'has_arthritis', 'has_osteoporosis',
        'has_parkinsons', 'has_diabetes', 'vision_impairment',
        'cognitive_score', 'uses_walking_aid', 'lives_alone',
        'home_hazards', 'activity_level'
    ]
    
    X = df[feature_cols]
    
    # One-hot encode gender if needed
    if 'gender' in df.columns:
        gender_dummies = pd.get_dummies(df['gender'], prefix='gender')
        X = pd.concat([X, gender_dummies], axis=1)
    
    return X, feature_cols

def train_models(X_train, y_train, X_test, y_test):
    """Train multiple models and compare"""
    
    models = {
        'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
        'Gradient Boosting': GradientBoostingClassifier(n_estimators=100, random_state=42),
        'Logistic Regression': LogisticRegression(max_iter=1000, random_state=42)
    }
    
    results = {}
    
    for name, model in models.items():
        print(f"\n🤖 Training {name}...")
        model.fit(X_train, y_train)
        
        # Predictions
        y_pred = model.predict(X_test)
        y_pred_proba = model.predict_proba(X_test)[:, 1]
        
        # Metrics
        accuracy = model.score(X_test, y_test)
        auc = roc_auc_score(y_test, y_pred_proba)
        
        results[name] = {
            'model': model,
            'accuracy': accuracy,
            'auc': auc,
            'predictions': y_pred
        }
        
        print(f"✅ Accuracy: {accuracy:.3f}")
        print(f"✅ AUC: {auc:.3f}")
    
    return results

if __name__ == "__main__":
    print("🏥 Fall Risk Assessment - Model Training")
    print("=" * 50)
    
    # Load data
    print("\n📂 Loading data...")
    train_df = pd.read_csv('data/fall_risk_train.csv')
    test_df = pd.read_csv('data/fall_risk_test.csv')
    
    # Prepare features
    print("🔧 Preparing features...")
    X_train, feature_cols = prepare_features(train_df)
    X_test, _ = prepare_features(test_df)
    
    y_train = train_df['actual_fall_6months']
    y_test = test_df['actual_fall_6months']
    
    # Scale features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    # Train models
    results = train_models(X_train_scaled, y_train, X_test_scaled, y_test)
    
    # Select best model
    best_model_name = max(results, key=lambda x: results[x]['auc'])
    best_model = results[best_model_name]['model']
    
    print(f"\n🏆 Best Model: {best_model_name}")
    print(f"   Accuracy: {results[best_model_name]['accuracy']:.3f}")
    print(f"   AUC: {results[best_model_name]['auc']:.3f}")
    
    # Detailed classification report
    print(f"\n📊 Classification Report:")
    print(classification_report(y_test, results[best_model_name]['predictions']))
    
    # Feature importance (for tree-based models)
    if hasattr(best_model, 'feature_importances_'):
        feature_importance = pd.DataFrame({
            'feature': X_train.columns,
            'importance': best_model.feature_importances_
        }).sort_values('importance', ascending=False)
        
        print(f"\n📈 Top 10 Most Important Features:")
        print(feature_importance.head(10).to_string(index=False))
    
    # Save model and scaler
    print(f"\n💾 Saving model and scaler...")
    joblib.dump(best_model, 'models/fall_risk_model.pkl')
    joblib.dump(scaler, 'models/scaler.pkl')
    
    # Save feature names
    with open('models/feature_names.json', 'w') as f:
        json.dump(list(X_train.columns), f)
    
    # Save model metadata
    metadata = {
        'model_type': best_model_name,
        'accuracy': float(results[best_model_name]['accuracy']),
        'auc': float(results[best_model_name]['auc']),
        'n_features': len(X_train.columns),
        'training_samples': len(X_train),
        'feature_names': list(X_train.columns)
    }
    
    with open('models/metadata.json', 'w') as f:
        json.dump(metadata, f, indent=2)
    
    print("\n✅ Model training complete!")
    print("📁 Files saved:")
    print("   - models/fall_risk_model.pkl")
    print("   - models/scaler.pkl")
    print("   - models/feature_names.json")
    print("   - models/metadata.json")
