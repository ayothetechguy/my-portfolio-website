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
    shortDesc: 'AI-powered system predicting A&E wait times with 85.67% accuracy using Gradient Boosting.',
    description: 'AI-powered system predicting A&E wait times using Gradient Boosting with 85.67% accuracy. Features real-time patient check-in, interactive visualizations, and clinical decision support.',
    image: '/projects/nhs-ae-prediction-1.png',
    fallbackGradient: 'from-blue-500 to-cyan-500',
    techStack: ['Python', 'Scikit-learn', 'Gradient Boosting', 'Streamlit', 'Pandas', 'Plotly'],
    metrics: { main: '85.67%', label: 'Accuracy' },
    liveDemo: 'https://emergency-wait-prediction.streamlit.app',
    github: 'https://github.com/ayoolumi/emergency-wait-prediction',
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

Key deliverables include a trained Gradient Boosting model achieving 85.67% accuracy, comprehensive exploratory data analysis, feature importance insights, and a deployed web application for clinical use.`,

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

1. Model Accuracy: Achieve over 80% prediction accuracy (R² score) on unseen test data, outperforming simple baseline methods

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
• Average Daily Patients: ~68
• Features: 29 columns
• File Format: CSV
• File Size: ~25 MB

Complete Feature List (29 Columns):

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

Patient Status:
• mobility_status (Mobile, Limited Mobility, Immobile)
• has_allergies (Yes/No)
• language_barrier (Yes/No)
• accompanied_by (Alone, Family Member, Friend, Carer, etc.)

Department Status:
• department_occupancy (40-100%)
• staff_on_duty (8-20)
• patients_waiting (0-50)
• beds_available (0-30)

Target Variable:
• wait_time_minutes (10-300+)

Data Generation Methodology:
• Temporal patterns reflect known A&E trends (busier evenings, winter peaks)
• Wait times correlate realistically with occupancy, triage, staffing, and patient factors
• Includes COVID-period effects (2021-2022) with elevated volumes
• Patient history factors influence wait times realistically
• Distribution mirrors published healthcare statistics

Data Availability:
• Hugging Face: huggingface.co/datasets/ayoolumi/emergency-wait-prediction
• GitHub: github.com/ayoolumi/emergency-wait-prediction`,

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
• Correlation analysis between all 28 features and target
• Patient history impact analysis
• Arrival mode comparison and prioritization effects
• Temporal pattern visualization (hourly, daily, seasonal)
• Peak demand period identification
• Statistical testing for significant relationships

Phase 3: Feature Engineering
• Creating interaction features (occupancy × time of day)
• Patient risk scoring based on history and condition
• Arrival urgency composite score
• Time-based cyclical encoding
• Lag features for department status

Phase 4: Model Development
• Baseline models: Simple average, Linear Regression
• Advanced models tested: Random Forest, Gradient Boosting, XGBoost, LightGBM, SVR
• Cross-validation (5-fold) for robust evaluation
• Stratified sampling to maintain temporal distribution

Phase 5: Hyperparameter Tuning
• GridSearchCV for systematic parameter optimization
• Parameters: n_estimators, max_depth, learning_rate, min_samples_split, subsample
• Optimization metrics: R² score and MAE
• Early stopping to prevent overfitting

Phase 6: Model Evaluation & Deployment
• Final evaluation on held-out test set
• Metrics: R² Score, MAE, RMSE, MAPE, residual analysis
• Feature importance extraction using SHAP values
• Error analysis by patient segment
• Streamlit web application deployment
• Model serialization using joblib
• API development for integration capabilities`,

      findings: `Model Performance Comparison:

Linear Regression: R²=0.62, MAE=28.4 mins, RMSE=35.2 mins
Random Forest: R²=0.81, MAE=19.8 mins, RMSE=24.6 mins
Gradient Boosting: R²=0.8567, MAE=17.6 mins, RMSE=21.9 mins ✓ Best
XGBoost: R²=0.84, MAE=18.2 mins, RMSE=22.8 mins
LightGBM: R²=0.83, MAE=18.9 mins, RMSE=23.4 mins

Gradient Boosting achieved the best performance with 85.67% accuracy and Mean Absolute Error of 17.6 minutes.

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
• Weekend Effect: Saturdays show unique pattern - fewer but more severe cases

Patient History Impact:
• Patients with 5+ previous admissions wait 12% longer (complex cases)
• Chronic condition patients wait 8% longer on average
• Mental health flagged patients wait 15% longer
• Language barrier patients wait 10% longer

Arrival Mode Impact:
• Ambulance Emergency: Fastest treatment (triage priority)
• Walk-in: Longest average wait
• GP Referral: 20% shorter wait than walk-in (pre-assessed)
• Police arrivals: Variable depending on situation

Occupancy Threshold Discovery:
• Wait times increase linearly until 75% occupancy
• Above 75%, wait times increase exponentially
• At 90%+ occupancy, average wait exceeds 2 hours
• Critical threshold identified at 85% occupancy`,

      limitations: `Data Limitations:

1. Synthetic Data: While carefully generated to reflect realistic patterns, the model has not been validated on actual hospital data due to data access constraints. Real-world performance may differ.

2. Single Department Configuration: The model is trained for a specific A&E setup. Different hospitals with varying layouts, specialties, or patient populations may require retraining.

3. Historical Period: 4 years of data may not capture longer-term trends or rare events that occur less frequently.

4. Scottish Context: Patterns generated reflect Scottish healthcare settings and may not directly transfer to other regions or countries.

Model Limitations:

5. External Factors Not Captured:
   • Major incidents (large accidents, disease outbreaks)
   • Staff sickness or unexpected absences
   • Equipment failures or maintenance
   • Nearby hospital closures affecting demand
   • Weather events impacting arrivals

6. Static Staffing Assumption: Model uses staffing levels at time of arrival, but shift changes during a patient's wait are not captured.

7. Patient Complexity Simplification: While we include chronic conditions and history, the full complexity of individual patient needs cannot be fully represented.

8. Language & Communication: Language barrier flag is binary; degree of barrier and interpreter availability not modeled.

Deployment Limitations:

9. No Live Integration: Current system operates on historical/simulated data, not connected to live hospital systems.

10. Single Output: Predicts wait time only, not other useful metrics like treatment duration, admission probability, or discharge time.

11. No Feedback Loop: Model doesn't learn from prediction errors in real-time; requires periodic retraining.`,

      recommendations: `Data Enhancements:

1. Real Hospital Data Validation: Partner with healthcare providers to validate and refine the model using actual A&E data through appropriate governance frameworks and data sharing agreements.

2. Multi-Site Data: Expand training data to include multiple hospitals across different regions, enabling a more generalizable model.

3. Additional Features: Incorporate weather data, local events calendar, public health alerts, and real-time traffic data.

Technical Improvements:

4. Real-Time Integration: Develop APIs to connect with hospital management systems, pulling live occupancy, staffing, and queue data.

5. Deep Learning Exploration: Test LSTM or Transformer models to capture complex temporal dependencies over longer periods.

6. Ensemble Methods: Combine multiple models (stacking) for improved robustness and accuracy.

7. Uncertainty Quantification: Provide confidence intervals with predictions, not just point estimates.

Product Development:

8. Patient-Facing Mobile App: Develop mobile application allowing patients to check wait times, pre-register, and receive notifications.

9. Predictive Staffing Tool: Use demand forecasting to help managers create optimal staff schedules weeks in advance.

10. Alert System: Automatic notifications when predicted demand exceeds capacity thresholds.

Research Directions:

11. Equity Analysis: Investigate whether wait times vary by patient demographics and identify potential biases.

12. Intervention Impact: Model how changes (adding staff, opening beds) would affect wait times.

13. Multi-Output Prediction: Extend to predict treatment time, admission likelihood, and discharge time.`,

      dashboard: `Overview:
The project features a comprehensive Streamlit-based web application serving as the primary interface between the predictive model and end users. The dashboard is designed for both clinical staff and administrative users.

Key Features:

1. Patient Check-In Simulator
• Input patient details (age, arrival mode, complaint, history, etc.)
• Instant wait time prediction with confidence range
• Visual explanation of factors affecting the prediction
• Risk flagging for complex patients

2. Real-Time Department Overview
• Current occupancy gauge visualization
• Patients waiting by triage category (color-coded)
• Staff on duty indicator
• Beds available tracker
• Live wait time estimates by category

3. Analytics Dashboard
• Historical trends (daily, weekly, monthly, yearly)
• Peak hours heatmap
• Seasonal patterns visualization
• Year-over-year comparison
• Patient volume forecasting

4. Predictive Insights Panel
• Feature importance chart (interactive)
• "What-if" scenario analysis
• Demand forecasting for next 4-8 hours

5. Patient History Lookup
• Search by patient ID
• View previous visits and wait times
• Chronic condition summary
• Risk profile visualization

6. Administrative Tools
• Staffing recommendations based on predicted demand
• Alert thresholds configuration
• Historical performance reports
• Data export functionality (CSV, PDF)
• Model performance monitoring

Technical Implementation:
• Frontend: Streamlit
• Visualizations: Plotly, Altair
• Model Serving: Joblib, Scikit-learn
• Data Processing: Pandas, NumPy
• Deployment: Streamlit Cloud

User Roles & Access:
• Reception Staff: Patient check-in, wait estimates
• Clinical Staff: Check-in, department overview, patient lookup
• Department Manager: Full analytics, staffing tools, reports
• Administrator: All features + system configuration + data export`,

      deliverables: `This project produces the following usable products and assets:

1. Trained Machine Learning Model
• gradient_boosting_model.joblib - Serialized trained model
• Model Card - Documentation of performance, limitations, usage
• Feature Pipeline - Preprocessing pipeline for new data

2. Complete Dataset
• emergency_wait_data.csv - 100,000 records, 29 features
• Data Dictionary - Detailed description of all columns
• Data Generation Scripts - Python scripts to generate similar data
• Sample Subsets - Smaller datasets for testing (1K, 10K records)

3. Interactive Web Application
• Streamlit Dashboard - Fully functional web application
• Live Demo - Deployed on Streamlit Cloud
• Source Code - Complete application code
• User Guide - Documentation for end users

4. Analysis & Reports
• EDA Notebook - Jupyter notebook with full exploratory analysis
• Model Comparison Report - Performance metrics across all models
• Feature Importance Analysis - SHAP-based feature explanations
• Executive Summary - Non-technical overview for stakeholders

5. Technical Documentation
• README.md - Project overview and quick start guide
• Installation Guide - Step-by-step setup instructions
• API Documentation - Endpoints and integration guide
• Architecture Diagram - System design overview

6. Reproducibility Package
• requirements.txt - Python dependencies
• environment.yml - Conda environment file
• Docker Container - Containerized application
• Training Scripts - Scripts to retrain model on new data

7. Presentation Materials
• Project Slides - PowerPoint/PDF presentation
• Demo Video - 5-minute walkthrough of the dashboard
• Poster - A1 research poster format

Deployment Locations:
• Dataset: huggingface.co/datasets/ayoolumi/emergency-wait-prediction
• Model: huggingface.co/ayoolumi/emergency-wait-gb-model
• Code: github.com/ayoolumi/emergency-wait-prediction
• Live Demo: emergency-wait-prediction.streamlit.app
• Portfolio: ayofemimelehon.com/portfolio`
    }
  },
  {
    id: 'patient-readmission-risk',
    number: '02',
    title: 'Patient Readmission Risk Prediction',
    category: 'Predictive Analytics',
    shortDesc: 'ML model predicting 30-day hospital readmission risk with AUC-ROC of 0.847.',
    description: 'Machine learning model predicting 30-day hospital readmission risk with 82.3% accuracy. Identifies high-risk patients for targeted interventions and care management.',
    image: '/projects/readmission-risk.png',
    fallbackGradient: 'from-purple-500 to-pink-500',
    techStack: ['Python', 'XGBoost', 'Random Forest', 'Streamlit', 'SHAP', 'PostgreSQL'],
    metrics: { main: '0.847', label: 'AUC-ROC' },
    liveDemo: 'https://readmission-risk.streamlit.app',
    github: 'https://github.com/ayoolumi/readmission-risk',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="10" height="10" className="fill-purple-500/30" />
        <rect x="12" y="12" width="10" height="10" className="fill-purple-600/50" />
        <circle cx="22" cy="22" r="6" className="fill-purple-500/20 stroke-purple-600" strokeWidth="2" />
      </svg>
    ),
    details: {
      introduction: 'Hospital readmissions within 30 days of discharge represent a significant burden on healthcare systems. This project develops a predictive machine learning system to identify patients at high risk of readmission.',
      problemStatement: 'Unplanned hospital readmissions affect approximately 1 in 7 patients in the UK, with significant costs and negative impacts on patient wellbeing.',
      previousGaps: 'Traditional readmission risk assessment relies on clinical judgment or simple scoring systems with limited predictive accuracy. Many existing models lack interpretability.',
      aimsObjectives: '1. Develop a machine learning model achieving AUC-ROC over 0.80\n2. Identify modifiable risk factors for targeted interventions\n3. Create interpretable predictions using SHAP values\n4. Build a user-friendly clinical decision support dashboard',
      datasets: 'The project uses a synthetic dataset of 50,000+ patient discharge records including demographics, admission details, clinical data, medication information, and previous healthcare utilization.',
      methodology: 'The project employs data engineering, feature selection, model comparison (Logistic Regression, Random Forest, XGBoost), hyperparameter optimization, and SHAP-based interpretation.',
      findings: '1. XGBoost achieved AUC-ROC of 0.847 and precision of 78.2%\n2. Top risk factors: previous admissions, length of stay, comorbidity index\n3. 42% of readmissions occurred within first 10 days post-discharge',
      limitations: '1. Synthetic data requires validation on real data\n2. Model predicts any-cause readmission rather than condition-specific\n3. Limited capture of social determinants of health',
      recommendations: '1. Conduct prospective validation study\n2. Develop FHIR-compatible APIs for EHR integration\n3. Create condition-specific models for heart failure, COPD, diabetes',
      dashboard: 'Interactive Streamlit dashboard with patient risk scoring, cohort analysis, and intervention recommendation engine.',
      deliverables: 'Trained XGBoost model, 50K+ record dataset, interactive dashboard, SHAP interpretability tools, and comprehensive documentation.'
    }
  },
  {
    id: 'mental-health-forecasting',
    number: '03',
    title: 'Mental Health Service Demand Forecasting',
    category: 'Time Series',
    shortDesc: 'ARIMA-based forecasting system predicting mental health service demand across Scottish health boards.',
    description: 'Time series forecasting system predicting mental health service demand across Scottish health boards using ARIMA modeling with seasonal decomposition.',
    image: '/projects/mental-health-1.png',
    fallbackGradient: 'from-emerald-500 to-teal-500',
    techStack: ['Python', 'Statsmodels', 'ARIMA', 'Pandas', 'Plotly', 'Streamlit'],
    metrics: { main: '14', label: 'Health Boards' },
    liveDemo: 'https://mental-health-forecasting.streamlit.app',
    github: 'https://github.com/ayoolumi/mental-health-forecasting',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path d="M4 24 L10 18 L16 22 L22 12 L28 16" className="stroke-emerald-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="10" cy="18" r="2" className="fill-emerald-500" />
        <circle cx="16" cy="22" r="2" className="fill-emerald-500" />
        <circle cx="22" cy="12" r="2" className="fill-emerald-500" />
      </svg>
    ),
    details: {
      introduction: 'This project develops a time series forecasting system to predict mental health service demand across all 14 Scottish health boards, enabling better resource planning and service delivery.',
      problemStatement: 'Mental health services face increasing demand with limited resources. Without accurate forecasting, health boards struggle to allocate staff and resources effectively.',
      previousGaps: 'Previous approaches used simple trend analysis without accounting for seasonality, external factors, or regional variations in demand patterns.',
      aimsObjectives: '1. Develop accurate demand forecasts for each health board\n2. Identify seasonal patterns and trends\n3. Create interactive visualization dashboard\n4. Enable scenario planning for resource allocation',
      datasets: 'Public Health Scotland mental health statistics covering referrals, waiting times, and service utilization across all 14 territorial health boards from 2015-2024.',
      methodology: 'Time series analysis using ARIMA with seasonal decomposition, trend analysis, and cross-validation for model selection. Interactive Streamlit dashboard for visualization.',
      findings: '1. Strong seasonal patterns identified with peaks in January and September\n2. COVID-19 significantly impacted referral patterns\n3. Regional variation in demand growth rates',
      limitations: '1. Historical data may not reflect post-pandemic patterns\n2. Does not account for policy changes or service restructuring\n3. Limited to aggregate demand, not individual-level prediction',
      recommendations: '1. Integrate with workforce planning systems\n2. Add external variables (economic indicators, policy changes)\n3. Develop alert system for unusual demand spikes',
      dashboard: 'Interactive dashboard with health board comparison, seasonal decomposition, demand forecasting, and scenario planning tools.',
      deliverables: 'ARIMA models for 14 health boards, historical data analysis, interactive dashboard, and forecasting tools.'
    }
  },
  {
    id: 'pneumonia-detection',
    number: '04',
    title: 'AI-Powered Pneumonia Detection System',
    category: 'Medical Imaging',
    shortDesc: 'Deep learning chest X-ray analysis system achieving 85.58% diagnostic accuracy using ResNet-18.',
    description: 'Deep learning chest X-ray analysis system with automated risk assessment and PDF reporting achieving 85.58% accuracy using ResNet-18 CNN.',
    image: '/projects/pneumonia-detection-1.png',
    fallbackGradient: 'from-rose-500 to-orange-500',
    techStack: ['Python', 'PyTorch', 'ResNet-18', 'Streamlit', 'OpenCV', 'ReportLab'],
    metrics: { main: '85.58%', label: 'Accuracy' },
    liveDemo: 'https://pneumonia-detection.streamlit.app',
    github: 'https://github.com/ayoolumi/pneumonia-detection',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="4" width="16" height="20" rx="2" className="stroke-rose-600 fill-rose-500/10" strokeWidth="2" />
        <path d="M12 10h8M12 14h8M12 18h4" className="stroke-rose-500" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="22" r="6" className="fill-white stroke-rose-600" strokeWidth="2" />
        <path d="M22 19v6M19 22h6" className="stroke-rose-600" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: 'This project develops a deep learning system for automated pneumonia detection from chest X-rays, providing rapid screening support for radiologists and clinicians.',
      problemStatement: 'Pneumonia diagnosis from chest X-rays requires expert radiologists and can be time-consuming. Delayed diagnosis can lead to worse patient outcomes.',
      previousGaps: 'Existing CAD systems often lack explainability, have high false positive rates, or are not designed for clinical workflow integration.',
      aimsObjectives: '1. Achieve over 85% diagnostic accuracy\n2. Provide confidence scores and visual explanations\n3. Generate automated PDF reports\n4. Create user-friendly clinical interface',
      datasets: 'Chest X-ray dataset with 5,863 images (Normal and Pneumonia classes) from Kaggle, with additional validation on external datasets.',
      methodology: 'Transfer learning with ResNet-18 pretrained on ImageNet, fine-tuned for binary classification. Data augmentation and class balancing applied.',
      findings: '1. Achieved 85.58% accuracy on test set\n2. Sensitivity of 92% for pneumonia detection\n3. Mean inference time of 0.3 seconds per image',
      limitations: '1. Binary classification only (no differentiation of pneumonia types)\n2. Performance may vary on different X-ray equipment\n3. Requires clinical validation before deployment',
      recommendations: '1. Extend to multi-class classification (bacterial vs viral)\n2. Add Grad-CAM visualizations for explainability\n3. Conduct clinical trial for regulatory approval',
      dashboard: 'Streamlit application with image upload, instant diagnosis, confidence scores, and PDF report generation.',
      deliverables: 'Trained ResNet-18 model, image preprocessing pipeline, interactive web app, and automated reporting system.'
    }
  },
  {
    id: 'covid-impact-analysis',
    number: '05',
    title: 'COVID-19 Healthcare Impact Analysis',
    category: 'Population Health',
    shortDesc: 'Comprehensive analysis of pandemic impact across Scotland\'s 14 health boards.',
    description: 'Population health analytics examining COVID-19 impact on healthcare services across all 14 Scottish health boards with interactive visualizations.',
    image: '/projects/covid-impact.png',
    fallbackGradient: 'from-indigo-500 to-blue-500',
    techStack: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'GeoPandas', 'Altair'],
    metrics: { main: '14', label: 'Health Boards' },
    liveDemo: 'https://covid-impact-analysis.streamlit.app',
    github: 'https://github.com/ayoolumi/covid-impact-analysis',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" className="stroke-indigo-600 fill-indigo-500/10" strokeWidth="2" />
        <circle cx="16" cy="16" r="4" className="fill-indigo-500" />
        <path d="M16 6v4M16 22v4M6 16h4M22 16h4" className="stroke-indigo-600" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 9l3 3M20 20l3 3M9 23l3-3M20 12l3-3" className="stroke-indigo-400" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    details: {
      introduction: 'This project analyzes the impact of COVID-19 on healthcare services across Scotland, examining trends in hospital admissions, waiting times, and service disruption.',
      problemStatement: 'The pandemic significantly disrupted healthcare services. Understanding these impacts is crucial for recovery planning and future pandemic preparedness.',
      previousGaps: 'Early analyses focused on COVID cases/deaths without examining broader healthcare system impacts or regional variations.',
      aimsObjectives: '1. Quantify service disruption across health boards\n2. Identify most affected service areas\n3. Track recovery trajectories\n4. Create interactive dashboard for stakeholders',
      datasets: 'Public Health Scotland datasets including hospital admissions, A&E attendances, elective procedures, and waiting times from 2019-2024.',
      methodology: 'Comparative analysis of pre-pandemic, pandemic, and recovery periods. Statistical testing for significance. Geographic visualization of regional variations.',
      findings: '1. Elective procedures dropped 70% during first lockdown\n2. A&E attendances fell 40% but acuity increased\n3. Significant regional variation in recovery rates',
      limitations: '1. Data quality issues during pandemic period\n2. Difficulty separating COVID effects from other factors\n3. Ongoing impacts may not be fully captured',
      recommendations: '1. Continue monitoring recovery metrics\n2. Develop early warning indicators for future disruptions\n3. Share insights with health board planners',
      dashboard: 'Geographic visualization, time series analysis, service area comparison, and recovery tracking dashboard.',
      deliverables: 'Complete data analysis, interactive maps, trend visualizations, and recovery metrics dashboard.'
    }
  },
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

          {/* Coming Soon */}
          <div className="p-8 lg:p-12 bg-slate-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-slate-900">More Projects Coming Soon</div>
                <div className="text-sm text-slate-500">5 additional healthcare AI projects in development</div>
              </div>
            </div>
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
              </div>
            </div>
            <div className="border-t border-slate-800 mt-6 pt-6 text-center text-slate-500 text-sm">
              © 2025 Ayoolumi Melehon | Edinburgh/Stirling, Scotland
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