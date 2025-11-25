'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const sampleProjects = [
  {
    id: 'emergency-wait-prediction',
    number: '01',
    title: 'Emergency Department Wait Time Prediction',
    category: 'Healthcare AI',
    shortDesc: 'AI-powered system predicting A&E wait times with 94.95% accuracy using LightGBM.',
    description: 'AI-powered system predicting A&E wait times using LightGBM with 94.95% accuracy. Features real-time patient check-in, interactive visualizations, and clinical decision support with MAE of just 12.06 minutes.',
    image: '/projects/emergency-wait-1.png',
    fallbackGradient: 'from-blue-500 to-cyan-500',
    techStack: ['Python', 'LightGBM', 'Streamlit', 'Pandas', 'Plotly', 'Scikit-learn'],
    metrics: { main: '94.95%', label: 'Accuracy' },
    liveDemo: 'https://emergency-wait-prediction-fsydtkbx5toyvfyvwctder.streamlit.app/',
    github: 'https://github.com/ayoolumi/emergency-wait-prediction',
    huggingface: 'https://huggingface.co/datasets/ayoolumi/emergency-wait-prediction',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" className="fill-teal-500/20" />
        <path d="M16 8v8l6 4" className="stroke-teal-600" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `This project develops an intelligent machine learning system designed to predict emergency department wait times in real-time. The system leverages historical patient data, staffing levels, and temporal patterns to provide accurate wait time estimates, helping both patients and healthcare administrators make informed decisions.

Emergency departments are high-pressure environments where timely information can significantly impact patient experience and operational efficiency. By implementing predictive analytics, this solution bridges the gap between uncertainty and informed decision-making.

The system features an interactive Streamlit dashboard that allows real-time predictions, patient check-in simulation, and visual exploration of factors affecting wait times. Built with scalability in mind, the solution can be adapted to different healthcare settings and integrated into existing hospital management systems.

Key deliverables include a trained LightGBM model achieving 94.95% accuracy with MAE of 12.06 minutes, comprehensive exploratory data analysis, feature importance insights, and a deployed web application for clinical use.`,

      problemStatement: `Emergency departments worldwide face mounting pressure from increasing patient volumes, staff shortages, and resource constraints. Across Scotland and the UK, A&E waiting times have reached critical levels, with patients routinely waiting 4+ hours for treatment.

The challenges are multi-faceted:

For Patients:
• Anxiety and frustration from unknown wait times
• Decisions to leave before being seen (potentially dangerous)
• Difficulty planning for family members or caregivers
• Negative perception of healthcare quality

For Healthcare Providers:
• Inability to predict demand surges
• Suboptimal staff allocation
• Overcrowding leading to corridor care
• Difficulty meeting government waiting time targets

The Cost:
• Emergency care is expensive - each avoidable A&E visit costs the healthcare system approximately £150-300
• Staff burnout from unpredictable workloads
• Negative patient outcomes from delayed treatment

Without accurate prediction tools, hospitals operate reactively rather than proactively, leading to inefficiencies and poor patient experiences.`,

      previousGaps: `Previous approaches to emergency department wait time prediction have significant limitations:

Simple Averaging Methods:
• Using historical averages fails to account for real-time conditions
• Cannot adapt to sudden changes in occupancy or staffing
• Provides same estimate regardless of patient acuity

Basic Queueing Theory:
• Assumes patients are served in order (not true in triage-based systems)
• Doesn't capture the complexity of emergency care pathways
• Ignores the non-linear relationship between occupancy and wait time

Existing Technology Gaps:
• Most hospital systems display static wait times (updated hourly at best)
• No integration of real-time factors like current staffing or bed availability
• Lack of patient-facing tools for transparency
• Minimal use of machine learning in operational settings

Research vs Reality:
• Academic studies exist but rarely deployed in clinical practice
• Models trained on single hospitals don't generalize well
• Limited consideration of temporal patterns (time of day, day of week, seasonal trends)
• Patient history and behavioral factors often ignored

This project addresses these gaps by developing a machine learning model that captures complex, non-linear relationships and provides real-time, patient-specific predictions incorporating medical history, arrival circumstances, and department conditions.`,

      aimsObjectives: `Primary Aim:
Develop and deploy a machine learning system that accurately predicts emergency department wait times, improving patient experience and supporting clinical decision-making.

Specific Objectives:

1. Model Accuracy: Achieve over 90% prediction accuracy on unseen test data, outperforming simple baseline methods

2. Feature Analysis: Identify and rank the most significant factors influencing wait times to provide actionable insights for hospital managers

3. Patient History Integration: Incorporate patient medical history, previous admissions, chronic conditions, and behavioral factors into predictions

4. Interactive Dashboard: Create a user-friendly Streamlit web application featuring:
   • Real-time wait time predictions
   • Patient check-in simulation
   • Visual analytics and trend exploration
   • Feature importance explanations

5. Temporal Pattern Discovery: Uncover patterns related to time of day, day of week, and seasonal variations to support staff scheduling

6. Model Interpretability: Ensure predictions are explainable, not black-box, so clinical staff can trust and understand the system

7. Scalable Framework: Design the solution to be adaptable to different hospital settings with minimal retraining

8. Comprehensive Documentation: Provide complete documentation enabling other healthcare data scientists to replicate and extend the work`,

      datasets: `The project utilizes a synthetic dataset of 100,000 patient records spanning 4 years (2021-2024), carefully generated to mirror realistic emergency department patterns in Scottish healthcare settings.

Dataset Specifications:
• Total Records: 100,000
• Time Period: January 2021 - December 2024
• Features: 67 columns (after feature engineering)
• File Format: CSV
• Available on Hugging Face: huggingface.co/datasets/ayoolumi/emergency-wait-prediction

Complete Feature Categories:

Temporal Features:
• arrival_date, arrival_time, arrival_hour, day_of_week, month, year, season, is_weekend

Patient Demographics:
• patient_id, patient_age, patient_gender

Arrival Information:
• arrival_mode (Walk-in, Family/Friend, Ambulance-Emergency, Ambulance-Non-Emergency, MECS, Police, GP Referral)
• triage_category (1-5, where 1=critical)
• chief_complaint (Chest Pain, Abdominal Pain, Fracture, Breathing Difficulty, etc.)

Patient History:
• previous_admissions (0-20+)
• months_since_last_visit (0-48, 999=first visit)
• has_chronic_condition (Yes/No)
• chronic_condition_type (Diabetes, Heart Disease, Asthma, COPD, etc.)
• is_registered_patient (Yes/No)
• mental_health_flag (Yes/No)

Department Status:
• department_occupancy (40-100%)
• staff_on_duty (8-20)
• patients_waiting (0-50)
• beds_available (0-30)

Target Variable:
• wait_time_minutes (10-300+)`,

      methodology: `The project follows a structured data science methodology across six phases:

Phase 1: Data Generation & Preprocessing
• Synthetic data generation with realistic healthcare patterns
• Handling missing values and outliers
• Feature engineering (extracting temporal features)
• Encoding categorical variables (one-hot encoding)
• Feature scaling for numerical variables
• Train/test split (80/20) with temporal awareness

Phase 2: Exploratory Data Analysis
• Distribution analysis of wait times across patient segments
• Correlation analysis between all features and target
• Patient history impact analysis
• Arrival mode comparison and prioritization effects
• Temporal pattern visualization (hourly, daily, seasonal)
• Peak demand period identification

Phase 3: Feature Engineering
• Creating interaction features (occupancy × time of day)
• Patient risk scoring based on history and condition
• Arrival urgency composite score
• Time-based cyclical encoding
• 67 total features after engineering

Phase 4: Model Development
• Baseline models: Simple average, Linear Regression
• Advanced models tested: Random Forest, Gradient Boosting, XGBoost, LightGBM
• Cross-validation (5-fold) for robust evaluation

Phase 5: Hyperparameter Tuning
• GridSearchCV for systematic parameter optimization
• LightGBM selected as best performer
• Optimization metrics: R² score and MAE

Phase 6: Model Evaluation & Deployment
• Final evaluation on held-out test set
• Achieved 94.95% accuracy with 12.06 minutes MAE
• Streamlit web application deployment
• Model serialization using joblib`,

      findings: `Model Performance Comparison:

Linear Regression: R²=0.62, MAE=28.4 mins
Random Forest: R²=0.89, MAE=15.2 mins
Gradient Boosting: R²=0.92, MAE=13.8 mins
XGBoost: R²=0.93, MAE=12.9 mins
LightGBM: R²=0.9495, MAE=12.06 mins ✓ Best

LightGBM achieved the best performance with 94.95% accuracy and Mean Absolute Error of just 12.06 minutes.

Feature Importance Rankings:
1. Department Occupancy (28%)
2. Time of Arrival - Hour (18%)
3. Triage Category (15%)
4. Patients Waiting (10%)
5. Arrival Mode (8%)
6. Previous Admissions (6%)
7. Staff on Duty (5%)
8. Has Chronic Condition (4%)
9. Beds Available (3%)
10. Other Factors (3%)

Key Insights:

Temporal Patterns:
• Peak Hours: 10 AM - 2 PM and 6 PM - 10 PM show longest wait times
• Worst Day: Mondays have 23% longer average waits than Sundays
• Seasonal Effect: Winter months (Dec-Feb) show 18% longer waits

Occupancy Threshold Discovery:
• Wait times increase linearly until 75% occupancy
• Above 75%, wait times increase exponentially
• At 90%+ occupancy, average wait exceeds 2 hours
• Critical threshold identified at 85% occupancy`,

      limitations: `Data Limitations:

1. Synthetic Data: While carefully generated to reflect realistic patterns, the model has not been validated on actual hospital data due to data access constraints.

2. Single Department Configuration: The model is trained for a specific A&E setup. Different hospitals may require retraining.

3. Scottish Context: Patterns generated reflect Scottish healthcare settings and may not directly transfer to other regions.

Model Limitations:

4. External Factors Not Captured:
   • Major incidents (large accidents, disease outbreaks)
   • Staff sickness or unexpected absences
   • Equipment failures or maintenance
   • Weather events impacting arrivals

5. Static Staffing Assumption: Model uses staffing levels at time of arrival, but shift changes during a patient's wait are not captured.

Deployment Limitations:

6. No Live Integration: Current system operates on historical/simulated data, not connected to live hospital systems.`,

      recommendations: `Data Enhancements:

1. Real Hospital Data Validation: Partner with healthcare providers to validate and refine the model using actual A&E data.

2. Multi-Site Data: Expand training data to include multiple hospitals across different regions.

Technical Improvements:

3. Real-Time Integration: Develop APIs to connect with hospital management systems.

4. Deep Learning Exploration: Test LSTM or Transformer models for complex temporal dependencies.

Product Development:

5. Patient-Facing Mobile App: Develop mobile application allowing patients to check wait times and pre-register.

6. Predictive Staffing Tool: Use demand forecasting to help managers create optimal staff schedules.`,

      dashboard: `Overview:
The project features a comprehensive Streamlit-based web application serving as the primary interface between the predictive model and end users.

Key Features:

1. Patient Check-In Simulator
• Input patient details (age, arrival mode, complaint, history, etc.)
• Instant wait time prediction with confidence range
• Visual explanation of factors affecting the prediction

2. Real-Time Department Overview
• Current occupancy gauge visualization
• Patients waiting by triage category (color-coded)
• Staff on duty indicator
• Live wait time estimates by category

3. Analytics Dashboard
• Historical trends (daily, weekly, monthly, yearly)
• Peak hours heatmap
• Seasonal patterns visualization

4. Predictive Insights Panel
• Feature importance chart (interactive)
• "What-if" scenario analysis
• Demand forecasting

Technical Implementation:
• Frontend: Streamlit
• Visualizations: Plotly
• Model Serving: Joblib, Scikit-learn
• Deployment: Streamlit Cloud`,

      deliverables: `This project produces the following usable products and assets:

1. Trained Machine Learning Model
• LightGBM model with 94.95% accuracy
• MAE of 12.06 minutes
• Model Card with performance documentation

2. Complete Dataset
• 100,000 records with 67 features
• Available on Hugging Face
• Data Dictionary included

3. Interactive Web Application
• Streamlit Dashboard - Fully functional
• Live Demo on Streamlit Cloud
• Complete source code on GitHub

4. Analysis & Reports
• EDA Notebook
• Model Comparison Report
• Feature Importance Analysis

Deployment Locations:
• Dataset: huggingface.co/datasets/ayoolumi/emergency-wait-prediction
• Code: github.com/ayoolumi/emergency-wait-prediction
• Live Demo: Streamlit Cloud
• Portfolio: ayofemimelehon.com/portfolio`
    }
  },
  {
    id: 'pneumonia-detection',
    number: '02',
    title: 'AI-Powered Pneumonia Detection System',
    category: 'Medical Imaging',
    shortDesc: 'Deep learning chest X-ray analysis system achieving 85.58% diagnostic accuracy using ResNet-18 CNN.',
    description: 'Deep learning chest X-ray analysis system with automated risk assessment and PDF reporting achieving 85.58% accuracy using ResNet-18 CNN architecture with PyTorch.',
    image: '/projects/pneumonia-detection-1.png',
    fallbackGradient: 'from-rose-500 to-orange-500',
    techStack: ['PyTorch', 'ResNet-18', 'CNN', 'Streamlit', 'OpenCV', 'Torchvision'],
    metrics: { main: '85.58%', label: 'Accuracy' },
    liveDemo: 'https://pneumonia-detection-system-l7hrqe7jvf7rwjzwtctgjm.streamlit.app/',
    github: 'https://github.com/ayoolumi/pneumonia-detection-system',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="4" width="16" height="20" rx="2" className="stroke-rose-600 fill-rose-500/10" strokeWidth="2" />
        <path d="M12 10h8M12 14h8M12 18h4" className="stroke-rose-500" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="22" r="6" className="fill-white stroke-rose-600" strokeWidth="2" />
        <path d="M22 19v6M19 22h6" className="stroke-rose-600" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `This project develops a deep learning system for automated pneumonia detection from chest X-rays, providing rapid screening support for radiologists and clinicians.

The system uses a ResNet-18 Convolutional Neural Network trained on thousands of chest X-ray images to distinguish between normal lungs and those showing signs of pneumonia. It provides instant diagnostic predictions with confidence scores.

Key features include an intuitive Streamlit interface for image upload, real-time classification, and automated PDF report generation for clinical documentation.`,

      problemStatement: `Pneumonia is a leading cause of death worldwide, particularly among children and the elderly. Early and accurate diagnosis is crucial for effective treatment.

Challenges:
• Manual chest X-ray interpretation is time-consuming and requires expertise
• Radiologist shortages in many healthcare settings
• Delayed diagnosis can lead to worse patient outcomes
• High workload leads to potential diagnostic errors
• Rural and underserved areas lack specialist coverage

The need for AI-assisted screening tools has never been greater, especially in resource-limited settings where expert radiologists are scarce.`,

      previousGaps: `Existing CAD (Computer-Aided Detection) systems often have limitations:

• Lack explainability - clinicians don't understand why a diagnosis was made
• High false positive rates leading to unnecessary follow-up
• Not designed for clinical workflow integration
• Require expensive proprietary hardware
• Limited accessibility for smaller healthcare facilities
• No automated reporting capabilities

This project addresses these gaps by providing an accessible, web-based solution with clear confidence scores and automated documentation.`,

      aimsObjectives: `Primary Aim:
Develop an accessible AI system for pneumonia detection from chest X-rays with high diagnostic accuracy.

Objectives:
1. Achieve over 85% diagnostic accuracy on test data
2. Provide confidence scores with each prediction
3. Generate automated PDF reports for clinical documentation
4. Create user-friendly interface suitable for clinical use
5. Ensure fast inference time (<1 second per image)
6. Build accessible web-based deployment`,

      datasets: `Training Data:
• Chest X-ray dataset with 5,863 images
• Classes: Normal and Pneumonia
• Source: Kaggle Chest X-Ray Images dataset
• Split: Training, Validation, and Test sets

Data Preprocessing:
• Image resizing to 224x224 pixels
• Normalization using ImageNet statistics
• Data augmentation (rotation, flipping, brightness adjustment)
• Class balancing techniques applied`,

      methodology: `Model Development:

1. Architecture Selection:
• ResNet-18 chosen for balance of accuracy and speed
• Pre-trained on ImageNet for transfer learning
• Final layer modified for binary classification

2. Training Process:
• Fine-tuning with learning rate scheduling
• Cross-entropy loss function
• Adam optimizer
• Early stopping to prevent overfitting

3. Data Augmentation:
• Random horizontal flips
• Random rotation (±10 degrees)
• Brightness and contrast adjustments
• Normalization

4. Evaluation:
• Accuracy, Sensitivity, Specificity metrics
• Confusion matrix analysis
• ROC curve and AUC calculation`,

      findings: `Model Performance:

• Overall Accuracy: 85.58%
• Model Architecture: ResNet-18 CNN
• Inference Time: ~0.3 seconds per image
• Sensitivity: 92% (high detection of pneumonia cases)
• Specificity: 78% (good normal case identification)

Key Insights:
• Transfer learning from ImageNet significantly improved performance
• Data augmentation helped reduce overfitting
• Model performs well on both clear and borderline cases
• Confidence scores correlate well with diagnostic certainty`,

      limitations: `Current Limitations:

1. Binary classification only - does not differentiate between bacterial and viral pneumonia
2. Performance may vary on X-rays from different equipment/manufacturers
3. Requires clinical validation before real-world deployment
4. Does not detect other lung conditions
5. Trained primarily on adult chest X-rays
6. Cannot replace expert radiologist interpretation`,

      recommendations: `Future Improvements:

1. Extend to multi-class classification (bacterial vs viral pneumonia)
2. Add Grad-CAM visualizations for explainability
3. Include other lung condition detection
4. Validate on pediatric chest X-rays
5. Conduct clinical trial for regulatory approval
6. Integrate with PACS systems for seamless workflow`,

      dashboard: `Streamlit Application Features:

1. Image Upload
• Drag-and-drop or file browser upload
• Supports common image formats (PNG, JPG, JPEG)

2. Instant Analysis
• Real-time prediction display
• Confidence score visualization
• Clear Normal/Pneumonia classification

3. PDF Report Generation
• Automated clinical report creation
• Includes patient information fields
• Downloadable documentation

4. User Interface
• Clean, intuitive design
• Mobile-responsive layout
• Clear visual feedback`,

      deliverables: `Project Outputs:

1. Trained Model
• ResNet-18 CNN with 85.58% accuracy
• Saved model weights for deployment

2. Web Application
• Streamlit-based interface
• Live demo on Streamlit Cloud
• Source code on GitHub

3. Documentation
• Model training notebook
• Performance metrics report
• User guide

Deployment:
• Live Demo: Streamlit Cloud
• Code: github.com/ayoolumi/pneumonia-detection-system`
    }
  },
  {
    id: 'mental-health-forecasting',
    number: '03',
    title: 'Mental Health Service Demand Forecasting',
    category: 'Healthcare Analytics',
    shortDesc: 'ARIMA-based forecasting system analyzing 1.97M+ records across Scotland\'s 14 health boards.',
    description: 'Time series forecasting system predicting mental health service demand across all 14 Scottish health boards using ARIMA modeling. Analyzes 1,970,620 records from 2019-2024 with ~925 daily presentations.',
    image: '/projects/mental-health-1.png',
    fallbackGradient: 'from-emerald-500 to-teal-500',
    techStack: ['Python', 'ARIMA', 'Statsmodels', 'Pandas', 'Plotly', 'Streamlit'],
    metrics: { main: '1.97M+', label: 'Records' },
    liveDemo: 'https://mental-health-demand-forecasting-mypuyyylxp3fcubj8dddlb.streamlit.app/',
    github: 'https://github.com/ayoolumi/mental-health-demand-forecasting',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path d="M4 24 L10 18 L16 22 L22 12 L28 16" className="stroke-emerald-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="10" cy="18" r="2" className="fill-emerald-500" />
        <circle cx="16" cy="22" r="2" className="fill-emerald-500" />
        <circle cx="22" cy="12" r="2" className="fill-emerald-500" />
      </svg>
    ),
    details: {
      introduction: `This project develops a comprehensive time series forecasting system to predict mental health service demand across all 14 Scottish territorial health boards.

Using ARIMA (AutoRegressive Integrated Moving Average) models with seasonal decomposition, the system analyzes historical patterns in mental health presentations to forecast future demand, enabling better resource planning and service delivery.

The analysis covers 1,970,620 records spanning 2019-2024, with an average of 925 presentations per day across Scotland. This represents one of the most comprehensive mental health demand analyses conducted for the Scottish healthcare system.`,

      problemStatement: `Mental health services across Scotland face increasing pressure:

• Rising demand post-COVID with limited resources
• Difficulty predicting demand fluctuations
• Staff scheduling challenges
• Long waiting times for mental health support
• Uneven distribution of resources across health boards
• Seasonal variations not well understood

Without accurate forecasting, health boards struggle to allocate staff and resources effectively, leading to longer wait times and poorer patient outcomes.`,

      previousGaps: `Previous approaches to mental health demand forecasting had limitations:

• Simple trend analysis without seasonal decomposition
• No consideration of external factors (COVID, policy changes)
• Regional variations not captured
• Short-term forecasts only
• No interactive visualization tools
• Limited integration with planning systems`,

      aimsObjectives: `Objectives:

1. Analyze demand patterns across all 14 Scottish health boards
2. Identify seasonal and trend components
3. Develop accurate ARIMA forecasting models
4. Create interactive visualization dashboard
5. Enable scenario planning for resource allocation
6. Provide health board comparison tools`,

      datasets: `Data Source: Public Health Scotland

Dataset Specifications:
• Total Records: 1,970,620
• Time Period: 2019-2024
• Health Boards: 14 territorial boards
• Average Daily Presentations: 925
• Frequency: Monthly aggregated data

Features Include:
• Presentation counts by health board
• Referral sources
• Age group breakdowns
• Service types
• Waiting time categories`,

      methodology: `Analysis Approach:

1. Data Collection & Cleaning
• Public Health Scotland data extraction
• Missing value handling
• Outlier detection and treatment
• COVID period adjustment

2. Exploratory Analysis
• Trend identification
• Seasonal pattern detection
• Health board comparison
• Year-over-year analysis

3. Time Series Decomposition
• Trend component extraction
• Seasonal component identification
• Residual analysis

4. ARIMA Modeling
• Stationarity testing (ADF test)
• Parameter selection (ACF/PACF analysis)
• Model fitting for each health board
• Cross-validation

5. Forecasting
• 12-month ahead predictions
• Confidence interval calculation
• Scenario modeling`,

      findings: `Key Findings:

Temporal Patterns:
• Strong seasonal patterns with peaks in January and September
• Significant COVID-19 impact (2020-2021 disruption)
• Recovery trajectory varies by health board

Regional Variations:
• Greater Glasgow & Clyde: Highest volume
• Highland and Islands: Highest per-capita rate
• Significant variation in growth rates between boards

Trends:
• Overall 15% increase in demand from 2019 to 2024
• Youth mental health presentations growing fastest
• Post-pandemic demand exceeds pre-pandemic levels`,

      limitations: `Limitations:

1. Historical data may not fully reflect post-pandemic patterns
2. Does not account for policy changes or service restructuring
3. Limited to aggregate demand (not individual-level)
4. External factors (economic conditions) not modeled
5. Assumes historical patterns continue`,

      recommendations: `Recommendations:

1. Integrate with workforce planning systems
2. Add external variables (economic indicators, policy changes)
3. Develop early warning system for demand spikes
4. Create health board-specific staffing recommendations
5. Regular model retraining with new data`,

      dashboard: `Dashboard Features:

1. Health Board Overview
• Interactive Scotland map
• Demand comparison across boards
• Trend visualization

2. Time Series Analysis
• Historical patterns by board
• Seasonal decomposition charts
• Year-over-year comparison

3. Forecasting Panel
• 12-month demand predictions
• Confidence intervals
• Scenario planning tools

4. Comparative Analysis
• Board-to-board comparison
• Per-capita normalization
• Growth rate analysis`,

      deliverables: `Deliverables:

1. ARIMA models for all 14 health boards
2. Historical data analysis (1.97M+ records)
3. Interactive Streamlit dashboard
4. Forecasting and scenario planning tools
5. Complete source code on GitHub

Live Demo: Streamlit Cloud
Code: github.com/ayoolumi/mental-health-demand-forecasting`
    }
  },
  {
    id: 'fall-risk-assessment',
    number: '04',
    title: 'AI-Powered Fall Risk Assessment',
    category: 'Healthcare AI',
    shortDesc: 'ML model predicting fall risk in elderly patients with 79.5% accuracy and AUC of 0.856.',
    description: 'Machine learning system for predicting fall risk in elderly patients using logistic regression. Achieves 79.5% accuracy with AUC 0.856, sensitivity 80.8%, and specificity 77.1%.',
    image: '/projects/fall-risk-1.png',
    fallbackGradient: 'from-purple-500 to-pink-500',
    techStack: ['Python', 'Logistic Regression', 'Scikit-learn', 'Streamlit', 'Pandas'],
    metrics: { main: '0.856', label: 'AUC-ROC' },
    liveDemo: 'https://fall-risk-assessment-lnvjtegpsewdkd5khtsfmk.streamlit.app/',
    github: 'https://github.com/ayoolumi/fall-risk-assessment',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="8" r="4" className="fill-purple-500/30 stroke-purple-600" strokeWidth="2" />
        <path d="M16 12v8M12 16h8M10 24l6-4 6 4" className="stroke-purple-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    details: {
      introduction: `Falls are a leading cause of injury and death among elderly populations. This project develops an AI-powered risk assessment tool to identify patients at high risk of falling, enabling preventive interventions.

The system uses logistic regression to analyze 20 patient features including age, medical history, mobility status, and medication use to generate a fall risk score. This enables healthcare providers to prioritize patients for fall prevention programs.`,

      problemStatement: `Falls among the elderly represent a major healthcare challenge:

• Falls are the leading cause of injury in people over 65
• One in three adults over 65 falls each year
• Fall-related injuries cost the NHS billions annually
• Many falls are preventable with early intervention
• Current risk assessment tools are often subjective and inconsistent`,

      previousGaps: `Existing fall risk assessment approaches have limitations:

• Subjective clinical judgment varies between assessors
• Paper-based scoring systems are time-consuming
• Limited use of machine learning in clinical settings
• No integration with electronic health records
• Lack of continuous risk monitoring`,

      aimsObjectives: `Objectives:

1. Develop ML model with AUC > 0.80 for fall risk prediction
2. Identify key modifiable and non-modifiable risk factors
3. Create user-friendly clinical assessment interface
4. Provide interpretable risk scores for clinicians
5. Enable targeted intervention recommendations`,

      datasets: `Dataset Features (20 columns):

Demographics: Age, Gender
Medical History: Previous falls, Chronic conditions, Medications
Physical Assessment: Balance score, Gait speed, Grip strength
Cognitive: Mental status score
Environmental: Home hazards assessment
Functional: Activities of daily living score

Target: Fall within 12 months (Yes/No)`,

      methodology: `Development Process:

1. Data preprocessing and feature engineering
2. Logistic regression model selection (interpretability priority)
3. Feature importance analysis
4. Threshold optimization for sensitivity/specificity balance
5. Cross-validation for robust evaluation
6. Streamlit dashboard development`,

      findings: `Model Performance:

• Accuracy: 79.5%
• AUC-ROC: 0.856
• Sensitivity: 80.8% (correctly identifies high-risk patients)
• Specificity: 77.1% (correctly identifies low-risk patients)

Top Risk Factors:
1. Previous fall history
2. Balance score
3. Medication count (polypharmacy)
4. Age
5. Gait speed`,

      limitations: `• Model trained on specific population demographics
• Requires clinical validation before deployment
• Does not capture all environmental factors
• Static assessment (point-in-time prediction)
• Requires accurate input data from clinical assessment`,

      recommendations: `• Validate on larger, diverse populations
• Integrate with EHR systems for automated data input
• Develop intervention recommendation engine
• Add continuous monitoring capabilities
• Create mobile app for home assessments`,

      dashboard: `Dashboard Features:

• Patient risk assessment form
• Instant risk score calculation
• Risk factor breakdown visualization
• Intervention recommendations
• Patient report generation`,

      deliverables: `• Logistic regression model (79.5% accuracy)
• 20-feature risk assessment framework
• Streamlit web application
• GitHub repository with full code
• Model documentation and user guide`
    }
  },
  {
    id: 'social-isolation-detection',
    number: '05',
    title: 'Social Isolation Detection System',
    category: 'Social Care AI',
    shortDesc: 'ML system detecting social isolation risk in elderly populations for proactive care intervention.',
    description: 'Machine learning classification system for detecting social isolation risk in elderly populations. Focuses on enabling proactive social care intervention through risk scoring and pattern analysis.',
    image: '/projects/social-isolation-1.png',
    fallbackGradient: 'from-amber-500 to-yellow-500',
    techStack: ['Python', 'Machine Learning', 'Streamlit', 'Pandas', 'Scikit-learn', 'Plotly'],
    metrics: { main: 'Elderly', label: 'Care Focus' },
    liveDemo: 'https://social-isolation-detection-u8bhpjruedwd3yf2295kqt.streamlit.app/',
    github: 'https://github.com/ayoolumi/social-isolation-detection',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="12" r="5" className="fill-amber-500/30 stroke-amber-600" strokeWidth="2" />
        <circle cx="8" cy="22" r="3" className="fill-amber-400/30 stroke-amber-500" strokeWidth="1.5" />
        <circle cx="24" cy="22" r="3" className="fill-amber-400/30 stroke-amber-500" strokeWidth="1.5" />
        <path d="M16 17v3M11 19l3 2M21 19l-3 2" className="stroke-amber-600" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `Social isolation among elderly populations is a significant public health concern linked to increased mortality, cognitive decline, and poor mental health outcomes.

This project develops an AI-powered detection system to identify individuals at risk of social isolation, enabling social care teams to provide timely interventions and support services.`,

      problemStatement: `Social isolation affects millions of elderly individuals:

• Over 1 million older people in the UK report being chronically lonely
• Social isolation increases mortality risk by 26%
• Linked to increased dementia risk and depression
• Difficult to identify using traditional methods
• Often goes undetected until crisis point`,

      previousGaps: `Current approaches to identifying social isolation:

• Rely on self-reporting (often under-reported)
• No systematic screening in social care
• Limited use of data-driven approaches
• Reactive rather than proactive identification
• No integration of multiple risk factors`,

      aimsObjectives: `Objectives:

1. Develop ML classification model for isolation risk
2. Identify key indicators of social isolation
3. Enable proactive social care intervention
4. Create accessible screening tool
5. Support resource allocation for outreach services`,

      datasets: `Risk Factor Categories:

• Demographics: Age, living situation, marital status
• Social Activity: Contact frequency, group participation
• Health: Mobility limitations, chronic conditions
• Technology: Digital connectivity, phone usage
• Environment: Transportation access, neighborhood type
• Life Events: Recent bereavement, retirement`,

      methodology: `Development Process:

1. Risk factor identification from literature review
2. Synthetic data generation reflecting real patterns
3. Multiple classifier comparison
4. Feature importance analysis
5. Risk score calibration
6. Interactive dashboard development`,

      findings: `Key Risk Indicators:

1. Living alone (strongest predictor)
2. Mobility limitations
3. Recent bereavement
4. Low contact frequency with family/friends
5. Lack of group activity participation
6. Transportation barriers`,

      limitations: `• Model based on synthetic data
• Requires validation with social care data
• Cultural factors may affect indicators
• Privacy considerations for data collection
• Risk of stigmatization`,

      recommendations: `• Partner with social care agencies for validation
• Integrate with existing care management systems
• Develop intervention matching based on risk factors
• Add longitudinal monitoring capabilities
• Create community outreach prioritization tools`,

      dashboard: `Features:

• Individual risk assessment
• Population-level screening
• Risk factor visualization
• Intervention recommendations
• Outreach prioritization lists`,

      deliverables: `• ML classification model
• Risk scoring framework
• Streamlit web application
• Social care integration guide
• Complete source code`
    }
  },
  {
    id: 'covid-impact-analysis',
    number: '06',
    title: 'COVID Healthcare Impact Analysis',
    category: 'Healthcare Analytics',
    shortDesc: 'Comprehensive analytics dashboard analyzing COVID-19 impact on Scottish healthcare services 2020-2024.',
    description: 'Population health analytics dashboard examining COVID-19 impact on healthcare services across Scotland with interactive visualizations and trend analysis spanning 2020-2024.',
    image: '/projects/covid-healthcare-1.png',
    fallbackGradient: 'from-indigo-500 to-blue-500',
    techStack: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'Data Analysis'],
    metrics: { main: '2020-24', label: 'Analysis Period' },
    liveDemo: 'https://covid-healthcare-impact-4hxqzrr79raja5c5v9cvba.streamlit.app/',
    github: 'https://github.com/ayoolumi/covid-healthcare-impact',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" className="stroke-indigo-600 fill-indigo-500/10" strokeWidth="2" />
        <circle cx="16" cy="16" r="4" className="fill-indigo-500" />
        <path d="M16 6v4M16 22v4M6 16h4M22 16h4" className="stroke-indigo-600" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 9l3 3M20 20l3 3M9 23l3-3M20 12l3-3" className="stroke-indigo-400" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `The COVID-19 pandemic had unprecedented effects on healthcare systems worldwide. This project provides a comprehensive analysis of how the pandemic impacted Scottish healthcare services from 2020 to 2024.

The interactive dashboard visualizes trends in hospital admissions, A&E attendances, elective procedures, and waiting times, enabling understanding of disruption patterns and recovery trajectories.`,

      problemStatement: `The pandemic significantly disrupted healthcare services:

• Cancelled elective surgeries and procedures
• Reduced A&E attendances (avoidance behavior)
• Transformed service delivery models
• Increased waiting lists
• Staff redeployment and burnout
• Long-term impacts on population health`,

      previousGaps: `Early pandemic analyses were limited:

• Focused primarily on COVID cases/deaths
• Did not examine broader healthcare system impacts
• Limited regional breakdown
• Short-term focus only
• No interactive exploration tools`,

      aimsObjectives: `Objectives:

1. Quantify service disruption across multiple metrics
2. Identify most affected service areas
3. Track recovery trajectories over time
4. Enable regional comparison
5. Create interactive exploration dashboard`,

      datasets: `Data Sources: Public Health Scotland

Metrics Analyzed:
• Hospital admissions (emergency and elective)
• A&E attendances and waiting times
• Outpatient appointments
• Diagnostic procedures
• Treatment times
• Workforce data`,

      methodology: `Analysis Approach:

1. Multi-source data integration
2. Pre-pandemic baseline establishment (2019)
3. Disruption period analysis (2020-2021)
4. Recovery period tracking (2022-2024)
5. Statistical comparison testing
6. Interactive visualization development`,

      findings: `Key Findings:

Service Disruption:
• Elective procedures dropped 70% during first lockdown
• A&E attendances fell 40% but acuity increased
• Outpatient activity reduced by 50%

Recovery Patterns:
• Emergency services recovered fastest
• Elective surgery backlog persists
• Some services transformed to digital/remote
• Significant regional variation in recovery rates`,

      limitations: `• Data quality issues during pandemic period
• Difficulty separating COVID effects from other factors
• Ongoing impacts may not be fully captured
• Changes in coding/recording practices`,

      recommendations: `• Continue monitoring recovery metrics
• Develop early warning indicators for future disruptions
• Analyze long-term population health impacts
• Share insights with health board planners`,

      dashboard: `Dashboard Features:

• Timeline visualization of key events
• Service area comparison charts
• Regional breakdown maps
• Recovery tracker
• Year-over-year comparisons
• Trend analysis tools`,

      deliverables: `• Comprehensive data analysis
• Interactive Streamlit dashboard
• Trend visualizations
• Recovery metrics framework
• Complete source code`
    }
  },
  {
    id: 'nhs-data-pipeline',
    number: '07',
    title: 'NHS Data Integration Pipeline',
    category: 'Data Engineering',
    shortDesc: 'Automated ETL pipeline for integrating and processing NHS healthcare data sources.',
    description: 'Automated ETL (Extract, Transform, Load) pipeline for integrating multiple NHS data sources. Features data validation, quality checks, and standardized output formats for analytics.',
    image: '/projects/nhs-pipeline-1.png',
    fallbackGradient: 'from-slate-600 to-gray-500',
    techStack: ['Python', 'ETL', 'Pandas', 'SQL', 'Streamlit'],
    metrics: { main: 'ETL', label: 'Pipeline' },
    liveDemo: 'https://nhs-data-integration-pipeline-awass8hapyas6weebsey6n.streamlit.app/',
    github: 'https://github.com/ayoolumi/nhs-data-integration-pipeline',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="8" height="8" rx="1" className="fill-slate-500/30 stroke-slate-600" strokeWidth="1.5" />
        <rect x="20" y="6" width="8" height="8" rx="1" className="fill-slate-500/30 stroke-slate-600" strokeWidth="1.5" />
        <rect x="12" y="18" width="8" height="8" rx="1" className="fill-slate-600/50 stroke-slate-700" strokeWidth="1.5" />
        <path d="M8 14v2a2 2 0 002 2h4M24 14v2a2 2 0 01-2 2h-4" className="stroke-slate-500" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `Healthcare data often exists in silos across multiple systems and formats. This project develops an automated ETL pipeline to integrate diverse NHS data sources into a unified, analytics-ready format.

The pipeline handles data extraction from multiple sources, applies transformations and quality checks, and loads clean data into standardized formats for downstream analysis.`,

      problemStatement: `NHS data integration challenges:

• Multiple source systems with different formats
• Inconsistent data quality across sources
• Manual data processing is time-consuming
• Lack of standardized data models
• Delayed availability of integrated data
• Limited data validation processes`,

      previousGaps: `Current data integration approaches:

• Heavy reliance on manual processing
• Limited automation in data pipelines
• Inconsistent quality checking
• No standardized transformation rules
• Poor documentation of data lineage`,

      aimsObjectives: `Objectives:

1. Automate data extraction from multiple sources
2. Implement standardized transformation rules
3. Build comprehensive data validation checks
4. Create reusable pipeline components
5. Provide monitoring and logging capabilities`,

      datasets: `Data Sources Integrated:

• Hospital activity data
• A&E statistics
• Waiting time records
• Patient demographics
• Geographic reference data

Output Formats:
• Cleaned CSV files
• Standardized schemas
• Analytics-ready datasets`,

      methodology: `Pipeline Architecture:

1. Extract: Connect to multiple data sources
2. Validate: Check data quality at ingestion
3. Transform: Apply standardization rules
4. Quality Check: Post-transformation validation
5. Load: Output to target formats
6. Log: Record all pipeline activities`,

      findings: `Pipeline Capabilities:

• Processes multiple NHS data sources
• Automated quality checks
• Standardized output formats
• Logging and monitoring
• Reusable components
• Error handling and recovery`,

      limitations: `• Currently handles batch processing only
• Limited to specific NHS data formats
• Requires configuration for new sources
• No real-time streaming capability`,

      recommendations: `• Add streaming data support
• Expand source connectors
• Implement data catalog integration
• Add automated scheduling
• Build data lineage tracking`,

      dashboard: `Dashboard Features:

• Pipeline status monitoring
• Data quality metrics
• Processing logs viewer
• Source/target configuration
• Error tracking and alerts`,

      deliverables: `• Complete ETL pipeline code
• Data validation framework
• Streamlit monitoring dashboard
• Configuration templates
• Documentation and guides`
    }
  },
  {
    id: 'executive-sales-dashboard',
    number: '08',
    title: 'Executive Sales Dashboard',
    category: 'Business Analytics',
    shortDesc: 'Business intelligence dashboard with £6.39M revenue tracking, £30.57M pipeline, and 18.9% win rate analysis.',
    description: 'Comprehensive business analytics dashboard for executive sales reporting. Tracks £6.39M revenue, £30.57M pipeline, 18.9% win rate, and £17K average deal size with interactive visualizations.',
    image: '/projects/executive-bi-1.png',
    fallbackGradient: 'from-green-500 to-emerald-500',
    techStack: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'Business Intelligence'],
    metrics: { main: '£6.39M', label: 'Revenue' },
    liveDemo: 'https://executive-sales-dashboard-9ekb6dle3k5apgaf5d6puu.streamlit.app/',
    github: 'https://github.com/ayoolumi/executive-sales-dashboard',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="16" width="5" height="10" className="fill-green-500/50" />
        <rect x="11" y="12" width="5" height="14" className="fill-green-500/70" />
        <rect x="18" y="8" width="5" height="18" className="fill-green-600/80" />
        <rect x="25" y="4" width="5" height="22" className="fill-green-600" />
        <path d="M4 28h26" className="stroke-green-700" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: `This project demonstrates business analytics capabilities through an executive sales dashboard. The dashboard provides C-suite level insights into sales performance, pipeline health, and team productivity.

While my primary focus is healthcare AI, this project showcases transferable data analysis and visualization skills applicable across industries.`,

      problemStatement: `Sales executives need clear visibility into:

• Revenue performance vs targets
• Pipeline health and conversion rates
• Team and individual performance
• Deal size and win rate trends
• Forecast accuracy`,

      previousGaps: `Traditional sales reporting challenges:

• Static reports that quickly become outdated
• Limited drill-down capabilities
• No real-time data access
• Poor visualization of trends
• Siloed metrics across systems`,

      aimsObjectives: `Objectives:

1. Create executive-level KPI dashboard
2. Visualize sales pipeline and funnel
3. Enable team performance comparison
4. Provide trend analysis and forecasting
5. Design mobile-responsive interface`,

      datasets: `Metrics Tracked:

• Total Revenue: £6.39M
• Pipeline Value: £30.57M
• Win Rate: 18.9%
• Average Deal Size: £17K
• Deals by stage, rep, and region`,

      methodology: `Dashboard Development:

1. KPI identification and definition
2. Data model design
3. Visualization selection
4. Interactive filter implementation
5. Performance optimization
6. User testing and refinement`,

      findings: `Dashboard Insights:

• Revenue distribution by region and product
• Pipeline stage conversion rates
• Top performers and coaching opportunities
• Seasonal trends in deal flow
• Forecast vs actual comparison`,

      limitations: `• Based on sample/synthetic data
• Single-currency focus (GBP)
• No CRM integration
• Manual data refresh`,

      recommendations: `• Add CRM integration (Salesforce, HubSpot)
• Implement automated data refresh
• Add predictive forecasting
• Create mobile app version`,

      dashboard: `Dashboard Features:

• Executive KPI cards
• Pipeline funnel visualization
• Revenue trend charts
• Team leaderboard
• Deal detail drill-down
• Filter by date, rep, region`,

      deliverables: `• Complete Streamlit dashboard
• Interactive visualizations
• Sample dataset
• Source code on GitHub
• Documentation`
    }
  }
];

type Project = typeof sampleProjects[0];

function ProjectDetailModal({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: Project | null; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  if (!project) return null;

  const sections = [
    { id: 'introduction', title: '1. Project Introduction', content: project.details.introduction, icon: '📋' },
    { id: 'problem', title: '2. Problem Statement', content: project.details.problemStatement, icon: '⚠️' },
    { id: 'gaps', title: '3. Previous Gaps in the Field', content: project.details.previousGaps, icon: '🔍' },
    { id: 'aims', title: '4. Aims and Objectives', content: project.details.aimsObjectives, icon: '🎯' },
    { id: 'datasets', title: '5. Datasets Used', content: project.details.datasets, icon: '📊' },
    { id: 'methodology', title: '6. Methodology', content: project.details.methodology, icon: '⚙️' },
    { id: 'findings', title: '7. Findings', content: project.details.findings, icon: '💡' },
    { id: 'limitations', title: '8. Limitations', content: project.details.limitations, icon: '📌' },
    { id: 'recommendations', title: '9. Recommendations for Future Work', content: project.details.recommendations, icon: '🚀' },
    { id: 'dashboard', title: '10. Interactive Dashboard & Frontend', content: project.details.dashboard, icon: '🖥️' },
    { id: 'deliverables', title: '11. Expected Deliverables', content: project.details.deliverables, icon: '🎁' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`sticky top-0 z-10 bg-gradient-to-r ${project.fallbackGradient} rounded-t-3xl p-8 text-white`}>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                {project.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
              <p className="text-white/90 text-lg max-w-3xl">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12 max-h-[70vh] overflow-y-auto">
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${project.fallbackGradient} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                        {section.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                          {section.title}
                        </h3>
                        <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </div>
                      </div>
                    </div>
                    {index < sections.length - 1 && (
                      <div className="ml-16 mt-8 border-b border-slate-100" />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-slate-200">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 min-w-[200px] px-6 py-4 bg-gradient-to-r ${project.fallbackGradient} text-white rounded-xl font-semibold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] px-6 py-4 bg-slate-900 text-white rounded-xl font-semibold text-center hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState<Project>(sampleProjects[0]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50' 
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/Head.jpg"
                  alt="Ayoolumi Melehon"
                  className="relative w-10 h-10 rounded-full object-cover border-2 border-white shadow-lg"
                />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-teal-600 group-hover:to-blue-600 transition-all">
                AYOOLUMI MELEHON
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Portfolio', 'Services', 'Experience'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className={`relative font-medium text-sm py-2 transition-colors ${
                    item === 'Portfolio' 
                      ? 'text-teal-600' 
                      : 'text-slate-600 hover:text-teal-600'
                  }`}
                >
                  {item}
                  {item === 'Portfolio' && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-blue-500" />
                  )}
                </Link>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>

            <button 
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="md:hidden pb-4 border-t border-slate-200 bg-white"
            >
              <div className="flex flex-col space-y-2 pt-4">
                {['Home', 'About', 'Portfolio', 'Services', 'Experience'].map((item) => (
                  <Link 
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className={`py-3 px-4 rounded-xl font-medium transition-all ${
                      item === 'Portfolio'
                        ? 'text-teal-600 bg-teal-50'
                        : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Main Content - Split Layout */}
      <div className="pt-16 min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Sticky Image */}
        <div className="lg:w-1/2 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] bg-slate-100 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full h-64 lg:h-full relative"
            >
              {/* Gradient Fallback */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activeProject.fallbackGradient}`} />
              
              {/* Project Screenshot */}
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              
              {/* Overlay with project info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3">
                    {activeProject.category}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-2">{activeProject.title}</h2>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-teal-400">{activeProject.metrics.main}</div>
                    <div className="text-white/70">{activeProject.metrics.label}</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side - Scrollable Projects */}
        <div className="lg:w-1/2 bg-white">
          {/* Header */}
          <div className="p-8 lg:p-12 border-b border-slate-100">
            <div className="flex items-center gap-2 text-teal-600 text-sm font-medium mb-2">
              <span className="w-8 h-0.5 bg-teal-500" />
              What I Build
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Healthcare AI<br />Solutions
            </h1>
            <p className="text-slate-600">
              Transforming complex healthcare data into actionable insights through machine learning and predictive analytics.
            </p>
            
            {/* Stats Bar */}
            <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-slate-100">
              <div>
                <div className="text-2xl font-bold text-teal-600">8</div>
                <div className="text-sm text-slate-500">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-600">94.95%</div>
                <div className="text-sm text-slate-500">Top Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-600">1.97M+</div>
                <div className="text-sm text-slate-500">Records Analyzed</div>
              </div>
            </div>
          </div>

          {/* Projects List */}
          <div className="divide-y divide-slate-100">
            {sampleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveProject(project)}
                className={`p-8 lg:p-12 cursor-pointer transition-all duration-300 ${
                  activeProject.id === project.id 
                    ? 'bg-teal-50/50' 
                    : 'hover:bg-slate-50'
                }`}
              >
                {/* Teal line indicator */}
                <div className={`h-0.5 mb-6 transition-all duration-300 ${
                  activeProject.id === project.id 
                    ? 'bg-gradient-to-r from-teal-500 to-blue-500 w-full' 
                    : 'bg-slate-200 w-16'
                }`} />

                <div className="flex items-start gap-6">
                  {/* Number */}
                  <div className="text-slate-300 font-bold text-lg">
                    /{project.number}
                  </div>

                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeProject.id === project.id 
                      ? 'bg-teal-100' 
                      : 'bg-slate-100'
                  }`}>
                    {project.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      activeProject.id === project.id 
                        ? 'text-teal-600' 
                        : 'text-slate-900'
                    }`}>
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {project.shortDesc}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-400 rounded text-xs font-medium">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          openProjectModal(project);
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all"
                      >
                        View Details
                      </motion.button>
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 bg-slate-100 hover:bg-teal-500 hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all"
                        title="Live Demo"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all"
                        title="Source Code"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="p-8 lg:p-12 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
            <h3 className="text-2xl font-bold mb-3">Interested in Working Together?</h3>
            <p className="text-teal-100 mb-6">
              Let&apos;s discuss how I can help with your healthcare data challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact"
                className="px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition"
              >
                Get in Touch
              </Link>
              <a 
                href="https://github.com/ayoolumi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition"
              >
                View GitHub
              </a>
            </div>
          </div>

          {/* Footer */}
          <footer className="p-8 lg:p-12 bg-slate-900 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <img
                  src="/Head.jpg"
                  alt="Ayoolumi Melehon"
                  className="w-10 h-10 rounded-full object-cover border-2 border-teal-500"
                />
                <span className="font-bold">Ayoolumi Melehon</span>
              </div>
              <div className="flex gap-4">
                <a href="mailto:ayoolumimelehon@gmail.com" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/ayoolumi-melehon-b63237179/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/ayoolumi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://huggingface.co/ayoolumi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition">
                  <span className="text-sm font-bold">🤗</span>
                </a>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-6 pt-6 text-center text-slate-500 text-sm">
              © 2025 Ayoolumi Melehon | Edinburgh, Scotland | MSc AI • CompTIA Data+
            </div>
          </footer>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
}