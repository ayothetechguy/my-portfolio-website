import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score, accuracy_score
import joblib
import json

def prepare_features(df):
    """Prepare features for modeling - EXCLUDE risk_score to avoid leakage"""
    
    feature_cols = [
        'age', 'bmi', 'gait_speed', 'balance_score', 'muscle_strength',
        'previous_falls', 'num_medications', 'takes_sedatives',
        'takes_blood_pressure_meds', 'has_arthritis', 'has_osteoporosis',
        'has_parkinsons', 'has_diabetes', 'vision_impairment',
        'cognitive_score', 'uses_walking_aid', 'lives_alone',
        'home_hazards', 'activity_level'
    ]
    
    X = df[feature_cols].copy()
    
    # Add gender encoding
    if 'gender' in df.columns:
        X['gender_male'] = (df['gender'] == 'Male').astype(int)
    
    return X, feature_cols

def train_models(X_train, y_train, X_test, y_test):
    """Train multiple models and compare"""
    
    models = {
        'Random Forest': RandomForestClassifier(
            n_estimators=200, 
            max_depth=10,
            min_samples_split=10,
            random_state=42,
            class_weight='balanced'
        ),
        'Gradient Boosting': GradientBoostingClassifier(
            n_estimators=200,
            max_depth=5,
            learning_rate=0.1,
            random_state=42
        ),
        'Logistic Regression': LogisticRegression(
            max_iter=2000,
            random_state=42,
            class_weight='balanced',
            C=0.1
        )
    }
    
    results = {}
    
    for name, model in models.items():
        print(f"\n🤖 Training {name}...")
        model.fit(X_train, y_train)
        
        # Predictions
        y_pred = model.predict(X_test)
        y_pred_proba = model.predict_proba(X_test)[:, 1]
        
        # Metrics
        accuracy = accuracy_score(y_test, y_pred)
        auc = roc_auc_score(y_test, y_pred_proba)
        
        # Confusion matrix
        tn, fp, fn, tp = confusion_matrix(y_test, y_pred).ravel()
        sensitivity = tp / (tp + fn) if (tp + fn) > 0 else 0
        specificity = tn / (tn + fp) if (tn + fp) > 0 else 0
        
        results[name] = {
            'model': model,
            'accuracy': accuracy,
            'auc': auc,
            'sensitivity': sensitivity,
            'specificity': specificity,
            'predictions': y_pred,
            'probabilities': y_pred_proba
        }
        
        print(f"✅ Accuracy: {accuracy:.3f}")
        print(f"✅ AUC: {auc:.3f}")
        print(f"✅ Sensitivity (Recall): {sensitivity:.3f}")
        print(f"✅ Specificity: {specificity:.3f}")
    
    return results

if __name__ == "__main__":
    print("🏥 Fall Risk Assessment - Model Training (FIXED)")
    print("=" * 60)
    
    # Load data
    print("\n📂 Loading data...")
    train_df = pd.read_csv('data/fall_risk_train.csv')
    test_df = pd.read_csv('data/fall_risk_test.csv')
    
    print(f"   Training samples: {len(train_df)}")
    print(f"   Test samples: {len(test_df)}")
    print(f"   Fall rate (train): {train_df['actual_fall_6months'].mean()*100:.1f}%")
    print(f"   Fall rate (test): {test_df['actual_fall_6months'].mean()*100:.1f}%")
    
    # Prepare features
    print("\n🔧 Preparing features...")
    X_train, feature_cols = prepare_features(train_df)
    X_test, _ = prepare_features(test_df)
    
    y_train = train_df['actual_fall_6months']
    y_test = test_df['actual_fall_6months']
    
    print(f"   Features: {len(X_train.columns)}")
    
    # Scale features
    print("\n⚖️  Scaling features...")
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    # Train models
    results = train_models(X_train_scaled, y_train, X_test_scaled, y_test)
    
    # Select best model (by AUC)
    best_model_name = max(results, key=lambda x: results[x]['auc'])
    best_model = results[best_model_name]['model']
    
    print(f"\n{'='*60}")
    print(f"🏆 BEST MODEL: {best_model_name}")
    print(f"{'='*60}")
    print(f"   Accuracy: {results[best_model_name]['accuracy']:.3f}")
    print(f"   AUC: {results[best_model_name]['auc']:.3f}")
    print(f"   Sensitivity: {results[best_model_name]['sensitivity']:.3f}")
    print(f"   Specificity: {results[best_model_name]['specificity']:.3f}")
    
    # Detailed classification report
    print(f"\n📊 Detailed Classification Report:")
    print(classification_report(
        y_test, 
        results[best_model_name]['predictions'],
        target_names=['No Fall', 'Fall']
    ))
    
    # Confusion Matrix
    cm = confusion_matrix(y_test, results[best_model_name]['predictions'])
    print(f"\n📈 Confusion Matrix:")
    print(f"                Predicted")
    print(f"              No Fall  Fall")
    print(f"Actual No Fall   {cm[0][0]:4d}   {cm[0][1]:4d}")
    print(f"       Fall      {cm[1][0]:4d}   {cm[1][1]:4d}")
    
    # Feature importance (for tree-based models)
    if hasattr(best_model, 'feature_importances_'):
        feature_importance = pd.DataFrame({
            'feature': X_train.columns,
            'importance': best_model.feature_importances_
        }).sort_values('importance', ascending=False)
        
        print(f"\n🔍 Top 10 Most Important Features:")
        print(feature_importance.head(10).to_string(index=False))
    
    # Save model and scaler
    print(f"\n💾 Saving model artifacts...")
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
        'sensitivity': float(results[best_model_name]['sensitivity']),
        'specificity': float(results[best_model_name]['specificity']),
        'n_features': len(X_train.columns),
        'training_samples': len(X_train),
        'test_samples': len(X_test),
        'feature_names': list(X_train.columns)
    }
    
    with open('models/metadata.json', 'w') as f:
        json.dump(metadata, f, indent=2)
    
    print("\n✅ Model training complete!")
    print("📁 Files saved:")
    print("   ✓ models/fall_risk_model.pkl")
    print("   ✓ models/scaler.pkl")
    print("   ✓ models/feature_names.json")
    print("   ✓ models/metadata.json")
    
    print(f"\n🎯 Model is ready for deployment!")
