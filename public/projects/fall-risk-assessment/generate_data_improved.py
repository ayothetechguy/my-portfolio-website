import pandas as pd
import numpy as np
import random

np.random.seed(42)
random.seed(42)

def generate_fall_risk_data(n_patients=1000):
    """Generate synthetic elderly care data with realistic correlations"""
    
    data = []
    
    for patient_id in range(1, n_patients + 1):
        # Demographics
        age = np.random.randint(65, 95)
        gender = random.choice(['Male', 'Female'])
        
        # Initialize risk factors with correlations
        
        # Age strongly correlates with other factors
        age_factor = (age - 65) / 30  # 0 to 1 scale
        
        # Physical factors (worse with age)
        bmi = np.random.normal(27, 4.5)
        bmi = max(18, min(40, bmi))
        
        gait_speed = np.random.normal(7 - age_factor * 4, 1.5)
        gait_speed = max(0, min(10, gait_speed))
        
        balance_score = np.random.normal(7 - age_factor * 4, 1.5)
        balance_score = max(0, min(10, balance_score))
        
        muscle_strength = np.random.normal(7 - age_factor * 3, 1.5)
        muscle_strength = max(0, min(10, muscle_strength))
        
        # Previous falls (very strong predictor)
        # Those with poor mobility have more falls
        mobility_risk = (10 - gait_speed) + (10 - balance_score)
        previous_falls = np.random.poisson(mobility_risk / 4)
        previous_falls = min(10, previous_falls)
        
        # Medications (more with age and conditions)
        num_medications = np.random.poisson(3 + age_factor * 4)
        num_medications = min(15, num_medications)
        
        # Risk medications (more likely with more meds)
        takes_sedatives = 1 if random.random() < (num_medications / 20) else 0
        takes_blood_pressure_meds = 1 if random.random() < (num_medications / 15) else 0
        
        # Chronic conditions (increase with age)
        has_arthritis = 1 if random.random() < (0.3 + age_factor * 0.4) else 0
        has_osteoporosis = 1 if random.random() < (0.2 + age_factor * 0.3) else 0
        has_parkinsons = 1 if random.random() < (0.05 + age_factor * 0.15) else 0
        has_diabetes = 1 if random.random() < 0.25 else 0
        
        # Vision & Cognitive (worse with age)
        vision_impairment = 1 if random.random() < (0.2 + age_factor * 0.3) else 0
        cognitive_score = np.random.normal(8 - age_factor * 3, 1.5)
        cognitive_score = max(0, min(10, cognitive_score))
        
        # Environmental
        uses_walking_aid = 1 if (gait_speed < 5 or balance_score < 5 or previous_falls > 2) else 0
        lives_alone = 1 if random.random() < 0.4 else 0
        
        # Home hazards (more if poor mobility)
        base_hazards = 2 + (10 - gait_speed) * 0.5
        home_hazards = int(np.random.poisson(base_hazards))
        home_hazards = min(10, home_hazards)
        
        # Activity level (protective, decreases with age/poor health)
        activity_level = np.random.normal(
            8 - age_factor * 3 - (has_arthritis * 1) - (has_parkinsons * 2),
            1.5
        )
        activity_level = max(0, min(10, activity_level))
        
        # CALCULATE FALL PROBABILITY (THIS IS THE KEY!)
        fall_probability = calculate_fall_probability(
            age, gait_speed, balance_score, muscle_strength,
            previous_falls, num_medications, takes_sedatives,
            has_arthritis, has_osteoporosis, has_parkinsons,
            vision_impairment, cognitive_score, uses_walking_aid,
            home_hazards, activity_level, lives_alone
        )
        
        # Actual fall outcome
        actual_fall = 1 if random.random() < fall_probability else 0
        
        # Calculate risk score (for display only, not for training)
        risk_score = fall_probability * 100
        
        # Risk category
        if risk_score < 30:
            risk_category = 'Low'
        elif risk_score < 60:
            risk_category = 'Medium'
        else:
            risk_category = 'High'
        
        data.append({
            'patient_id': f'PT{patient_id:04d}',
            'age': age,
            'gender': gender,
            'bmi': round(bmi, 1),
            'gait_speed': round(gait_speed, 1),
            'balance_score': round(balance_score, 1),
            'muscle_strength': round(muscle_strength, 1),
            'previous_falls': previous_falls,
            'num_medications': num_medications,
            'takes_sedatives': takes_sedatives,
            'takes_blood_pressure_meds': takes_blood_pressure_meds,
            'has_arthritis': has_arthritis,
            'has_osteoporosis': has_osteoporosis,
            'has_parkinsons': has_parkinsons,
            'has_diabetes': has_diabetes,
            'vision_impairment': vision_impairment,
            'cognitive_score': round(cognitive_score, 1),
            'uses_walking_aid': uses_walking_aid,
            'lives_alone': lives_alone,
            'home_hazards': home_hazards,
            'activity_level': round(activity_level, 1),
            'risk_score': round(risk_score, 1),
            'risk_category': risk_category,
            'actual_fall_6months': actual_fall
        })
    
    return pd.DataFrame(data)

def calculate_fall_probability(age, gait_speed, balance_score, muscle_strength,
                               previous_falls, num_medications, takes_sedatives,
                               has_arthritis, has_osteoporosis, has_parkinsons,
                               vision_impairment, cognitive_score, uses_walking_aid,
                               home_hazards, activity_level, lives_alone):
    """
    Calculate realistic fall probability using logistic-like function
    Returns probability between 0 and 1
    """
    
    # Base risk
    risk_score = 0
    
    # Age (0-20 points)
    risk_score += (age - 65) * 0.5
    
    # Mobility & Balance (STRONGEST PREDICTORS) (0-40 points)
    risk_score += (10 - gait_speed) * 2.5
    risk_score += (10 - balance_score) * 2.5
    risk_score += (10 - muscle_strength) * 1.0
    
    # Previous falls (VERY STRONG PREDICTOR) (0-30 points)
    risk_score += previous_falls * 5
    
    # Medications (0-15 points)
    risk_score += num_medications * 0.8
    risk_score += takes_sedatives * 8
    
    # Chronic conditions (0-20 points)
    risk_score += has_arthritis * 4
    risk_score += has_osteoporosis * 6
    risk_score += has_parkinsons * 10
    
    # Sensory & Cognitive (0-10 points)
    risk_score += vision_impairment * 5
    risk_score += (10 - cognitive_score) * 0.5
    
    # Environmental (0-10 points)
    risk_score += uses_walking_aid * 3
    risk_score += home_hazards * 0.8
    risk_score += lives_alone * 2
    
    # Protective factor
    risk_score -= activity_level * 1.5
    
    # Convert to probability using logistic function
    # Center around 50 and scale
    probability = 1 / (1 + np.exp(-(risk_score - 50) / 15))
    
    return probability

if __name__ == "__main__":
    print("🏥 Generating IMPROVED Fall Risk Assessment Dataset...")
    print("=" * 60)
    
    # Generate datasets
    train_data = generate_fall_risk_data(800)
    test_data = generate_fall_risk_data(200)
    
    # Save to CSV
    train_data.to_csv('data/fall_risk_train.csv', index=False)
    test_data.to_csv('data/fall_risk_test.csv', index=False)
    
    print(f"✅ Training data: {len(train_data)} patients")
    print(f"✅ Test data: {len(test_data)} patients")
    
    print(f"\n📊 Risk Distribution:")
    print(train_data['risk_category'].value_counts().sort_index())
    
    print(f"\n📈 Fall Statistics:")
    print(f"   Training fall rate: {train_data['actual_fall_6months'].mean()*100:.1f}%")
    print(f"   Test fall rate: {test_data['actual_fall_6months'].mean()*100:.1f}%")
    
    # Show correlation between risk score and falls
    fall_rate_by_risk = train_data.groupby('risk_category')['actual_fall_6months'].mean()
    print(f"\n🎯 Fall Rate by Risk Category:")
    for category, rate in fall_rate_by_risk.items():
        print(f"   {category:8s}: {rate*100:5.1f}%")
    
    # Feature correlations with falls
    print(f"\n🔍 Top Features Correlated with Falls:")
    numeric_cols = train_data.select_dtypes(include=[np.number]).columns
    correlations = train_data[numeric_cols].corr()['actual_fall_6months'].sort_values(ascending=False)
    print(correlations.head(10).to_string())
    
    print(f"\n💾 Data saved to data/ directory")
