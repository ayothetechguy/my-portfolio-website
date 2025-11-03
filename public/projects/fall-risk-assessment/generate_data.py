import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import random

np.random.seed(42)
random.seed(42)

def generate_fall_risk_data(n_patients=1000):
    """Generate synthetic elderly care data for fall risk assessment"""
    
    data = []
    
    for patient_id in range(1, n_patients + 1):
        # Demographics
        age = np.random.randint(65, 95)
        gender = random.choice(['Male', 'Female'])
        
        # Physical factors
        bmi = np.random.normal(27, 4.5)
        bmi = max(18, min(40, bmi))  # Clip to realistic range
        
        # Mobility & Balance (0-10 scale, lower = worse)
        gait_speed = np.random.normal(5, 2)
        gait_speed = max(0, min(10, gait_speed))
        
        balance_score = np.random.normal(5, 2.5)
        balance_score = max(0, min(10, balance_score))
        
        # Muscle strength (0-10 scale)
        muscle_strength = np.random.normal(5, 2)
        muscle_strength = max(0, min(10, muscle_strength))
        
        # Medical history
        previous_falls = np.random.poisson(1.5)
        previous_falls = min(10, previous_falls)  # Cap at 10
        
        num_medications = np.random.poisson(5)
        num_medications = min(15, num_medications)  # Cap at 15
        
        # Specific risk medications
        takes_sedatives = random.choice([0, 1])
        takes_blood_pressure_meds = random.choice([0, 1])
        
        # Chronic conditions
        has_arthritis = random.choice([0, 1])
        has_osteoporosis = random.choice([0, 1])
        has_parkinsons = random.choice([0, 1])
        has_diabetes = random.choice([0, 1])
        
        # Vision & Cognitive
        vision_impairment = random.choice([0, 1])
        cognitive_score = np.random.normal(7, 2)  # 0-10, higher = better
        cognitive_score = max(0, min(10, cognitive_score))
        
        # Environmental factors
        uses_walking_aid = random.choice([0, 1])
        lives_alone = random.choice([0, 1])
        home_hazards = np.random.randint(0, 8)  # Number of hazards
        
        # Activity level (0-10, higher = more active)
        activity_level = np.random.normal(5, 2)
        activity_level = max(0, min(10, activity_level))
        
        # Calculate ground truth fall risk
        risk_score = calculate_risk_score(
            age, gait_speed, balance_score, muscle_strength,
            previous_falls, num_medications, takes_sedatives,
            has_arthritis, has_osteoporosis, has_parkinsons,
            vision_impairment, cognitive_score, uses_walking_aid,
            home_hazards, activity_level
        )
        
        # Risk category
        if risk_score < 30:
            risk_category = 'Low'
        elif risk_score < 60:
            risk_category = 'Medium'
        else:
            risk_category = 'High'
        
        # Simulate actual fall in next 6 months (based on risk)
        fall_probability = risk_score / 100
        fall_probability = fall_probability * 0.8  # Scale to realistic rate
        actual_fall = 1 if random.random() < fall_probability else 0
        
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

def calculate_risk_score(age, gait_speed, balance_score, muscle_strength,
                        previous_falls, num_medications, takes_sedatives,
                        has_arthritis, has_osteoporosis, has_parkinsons,
                        vision_impairment, cognitive_score, uses_walking_aid,
                        home_hazards, activity_level):
    """Calculate fall risk score (0-100)"""
    
    score = 0
    
    # Age factor (0-15 points)
    if age >= 85:
        score += 15
    elif age >= 80:
        score += 12
    elif age >= 75:
        score += 8
    else:
        score += 5
    
    # Mobility factors (0-30 points)
    score += (10 - gait_speed) * 1.5  # Slower gait = higher risk
    score += (10 - balance_score) * 1.5  # Poor balance = higher risk
    score += (10 - muscle_strength) * 1.0  # Weak muscles = higher risk
    
    # Fall history (0-15 points)
    score += previous_falls * 3
    
    # Medications (0-10 points)
    score += min(num_medications * 0.5, 8)
    if takes_sedatives:
        score += 5
    
    # Chronic conditions (0-15 points)
    score += has_arthritis * 3
    score += has_osteoporosis * 4
    score += has_parkinsons * 6
    
    # Vision & Cognitive (0-10 points)
    score += vision_impairment * 4
    score += (10 - cognitive_score) * 0.6
    
    # Environmental (0-5 points)
    score += uses_walking_aid * 2
    score += home_hazards * 0.5
    
    # Protective factors (reduce risk)
    score -= activity_level * 0.3
    
    # Cap at 0-100
    return max(0, min(100, score))

if __name__ == "__main__":
    print("🏥 Generating Fall Risk Assessment Dataset...")
    
    # Generate datasets
    train_data = generate_fall_risk_data(800)
    test_data = generate_fall_risk_data(200)
    
    # Save to CSV
    train_data.to_csv('data/fall_risk_train.csv', index=False)
    test_data.to_csv('data/fall_risk_test.csv', index=False)
    
    print(f"✅ Training data: {len(train_data)} patients")
    print(f"✅ Test data: {len(test_data)} patients")
    print(f"\n📊 Risk Distribution:")
    print(train_data['risk_category'].value_counts())
    print(f"\n📈 Actual Fall Rate: {train_data['actual_fall_6months'].mean()*100:.1f}%")
    print(f"\n💾 Data saved to data/ directory")
