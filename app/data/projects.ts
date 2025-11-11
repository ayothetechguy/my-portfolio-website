// app/data/projects.ts
export interface Project {
  id: string;
  title: string;
  category: 'Product Analytics' | 'ML & AI' | 'Workforce Analytics' | 'Data Engineering' | 'Operational Analytics' | 'Research';
  shortDescription: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  videoUrl?: string;
  screenshots: string[];
  features: string[];
  learnings: string[];
  completionDate: string;
}

export const projects: Project[] = [
  {
    id: 'mental-health-demand-forecasting',
    title: 'Mental Health Service Demand Forecasting',
    category: 'ML & AI',
    shortDescription: 'Time series forecasting system predicting mental health service demand across Scottish health boards using ARIMA modeling with interactive Streamlit dashboard.',
    problem: 'Scottish health boards struggle to anticipate mental health service demand, leading to inadequate resource allocation, long wait times, and crisis-driven care. Traditional planning methods lack predictive capability for seasonal patterns and trend changes.',
    solution: 'Developed ARIMA time series forecasting models analyzing 6 years of synthetic mental health presentation data (2019-2024) across 14 Scottish health boards. Built interactive Streamlit dashboard with multi-board comparison, seasonal decomposition, and demographic breakdowns enabling proactive capacity planning.',
    impact: 'Enables evidence-based resource allocation with 3-6 month advance forecasting. System identifies seasonal peaks, board-specific trends, and demographic patterns, supporting strategic planning for mental health services across Scotland. Provides actionable insights for staffing, budgeting, and service expansion decisions.',
    techStack: ['Python', 'Pandas', 'Statsmodels', 'ARIMA', 'Streamlit', 'Plotly', 'Time Series Forecasting', 'Healthcare Analytics'],
    githubUrl: 'https://github.com/ayothetechguy/mental-health-demand-forecasting',
    liveDemoUrl: 'https://mental-health-demand-forecasting-mypuyyylxp3fcubj8dddlb.streamlit.app',
    videoUrl: '',
    screenshots: [
      '/projects/mental-health-1.png',
      '/projects/mental-health-2.png',
      '/projects/mental-health-3.png',
      '/projects/mental-health-4.png'
    ],
    features: [
      'ARIMA time series forecasting with automated parameter selection',
      'Multi-health board comparison across 14 Scottish NHS boards',
      'Seasonal decomposition showing trend, seasonality, and residuals',
      'Interactive 3-6 month demand forecasts with confidence intervals',
      'Demographic breakdown by age group and sex',
      'COVID-19 impact analysis showing pandemic effects on presentations',
      'Board-specific trend analysis identifying growth patterns',
      'Historical data visualization with monthly aggregations',
      'Year-over-year comparison charts',
      'Interactive filtering by health board, time period, and demographics',
      'Synthetic dataset generation with realistic healthcare patterns',
      'Comprehensive data quality validation',
      'Professional healthcare-themed UI with gradient designs',
      'Export capabilities for forecast data and visualizations'
    ],
    learnings: [
      'ARIMA models effectively capture seasonal patterns in healthcare demand data',
      'Mental health service utilization shows strong seasonal variations requiring trend-seasonal decomposition',
      'COVID-19 created structural breaks in historical patterns requiring careful model calibration',
      'Synthetic data generation must preserve realistic correlations between demographics and service use',
      'Health board-specific models perform better than single national model due to regional variation',
      'Interactive dashboards enable stakeholders to explore forecasts across multiple dimensions',
      'Time series forecasting provides actionable 3-6 month planning horizon for healthcare services',
      'Statsmodels ARIMA implementation works well for univariate healthcare demand forecasting',
      'Python 3.12/3.13 compatibility required careful dependency management for scipy and statsmodels'
    ],
    completionDate: '2025'
  },
  {
    id: 'fall-risk-assessment',
    title: 'Fall Risk Assessment System',
    category: 'ML & AI',
    shortDescription: 'AI-powered elderly care system predicting fall risk in next 6 months using machine learning (85.6% AUC). Interactive dashboard with real-time assessments and personalized recommendations.',
    problem: 'Falls are the leading cause of injury-related deaths among elderly people (65+). Healthcare providers struggle to identify high-risk patients early, and manual risk assessments are time-consuming and inconsistent.',
    solution: 'Developed a machine learning system using Logistic Regression analyzing 20+ clinical factors (mobility, medications, fall history, environmental hazards) to predict fall probability. Built premium interactive Streamlit dashboard with real-time risk assessment, animated visualizations, and evidence-based intervention recommendations.',
    impact: 'Enables preventive care targeting with 79.5% accuracy. Early identification can prevent falls costing $50,000+ per incident. System provides immediate risk stratification (Low/Medium/High) with personalized action plans and timelines.',
    techStack: ['Python', 'Streamlit', 'Scikit-learn', 'Logistic Regression', 'Plotly', 'Pandas', 'NumPy', 'Machine Learning', 'Healthcare Analytics'],
    githubUrl: 'https://github.com/ayothetechguy/fall-risk-assessment',
    liveDemoUrl: 'https://fall-risk-assessment-lnvjtegpsewdkd5khtsfmk.streamlit.app/',
    videoUrl: '',
    screenshots: [
      '/projects/fall-risk-1.png',
      '/projects/fall-risk-2.png',
      '/projects/fall-risk-3.png',
      '/projects/fall-risk-4.png'
    ],
    features: [
      'Logistic Regression model with 79.5% accuracy and 85.6% AUC score',
      '80.8% sensitivity (catches 81% of people who will fall)',
      '77.1% specificity (correctly identifies non-fallers)',
      'Real-time fall risk prediction analyzing 20+ clinical factors',
      'Interactive patient assessment with live feedback and warnings',
      'Animated risk visualization with gauge charts and progress bars',
      'Personalized intervention recommendations with detailed timelines',
      'Risk factor importance analysis and contribution breakdown',
      'Interactive risk simulator for testing "what-if" scenarios',
      'Population analytics with charts showing risk distributions',
      'Batch processing capability for multiple patients',
      'Downloadable CSV assessment reports with full patient data',
      'Premium UI with animations, gradients, and professional medical design',
      'Mobile-responsive dashboard with sidebar statistics'
    ],
    learnings: [
      'Synthetic healthcare data must have realistic correlations between risk factors for accurate model training',
      'Logistic Regression chosen over Random Forest for better interpretability in clinical settings',
      'Feature importance visualization helps clinicians understand and trust AI predictions',
      'Interactive dashboards with live feedback improve user experience and data quality',
      'Healthcare ML applications require clear communication of uncertainty and confidence levels',
      'Model explainability is critical for clinical adoption and stakeholder buy-in',
      'Premium UI/UX with animations significantly increases user engagement and satisfaction'
    ],
    completionDate: '2025'
  },
  {
    id: 'social-isolation-detection',
    title: 'Social Isolation Detection System',
    category: 'ML & AI',
    shortDescription: 'AI-powered elderly care monitoring system detecting social isolation patterns using Isolation Forest anomaly detection with real-time alerts.',
    problem: 'Social isolation among elderly residents in care facilities often goes unnoticed until serious mental/physical health consequences occur. Manual monitoring of 100+ residents is impossible, and subtle behavioral changes indicating isolation are easily missed.',
    solution: 'Built an anomaly detection system using Isolation Forest algorithm analyzing 11 daily activity metrics (phone calls, visitors, activities, movement patterns) to automatically identify residents showing isolation patterns. Interactive dashboard provides real-time risk scoring (0-100) and alerts for care staff.',
    impact: 'Enables early intervention for at-risk residents with automated daily monitoring. System identifies 41% of isolated residents and provides actionable alerts, reducing caregiver workload while improving resident wellbeing through timely intervention.',
    techStack: ['Python', 'Scikit-learn', 'Isolation Forest', 'Streamlit', 'Pandas', 'Plotly', 'Machine Learning', 'Anomaly Detection'],
    githubUrl: 'https://github.com/ayothetechguy/social-isolation-detection',
    liveDemoUrl: 'https://social-isolation-detection-u8bhpjruedwd3yf2295kqt.streamlit.app/',
    videoUrl: '',
    screenshots: [
      '/projects/social-isolation-1.png',
      '/projects/social-isolation-2.png',
      '/projects/social-isolation-3.png',
      '/projects/social-isolation-4.png'
    ],
    features: [
      'Isolation Forest anomaly detection with 11 activity features',
      'Automated isolation risk scoring (0-100 scale) for 100 residents',
      'Real-time dashboard with facility-wide monitoring',
      'Individual resident tracking with 90-day timeline visualization',
      'High-risk alert system (>70 score) for immediate intervention',
      'Activity pattern analysis: phone calls, visitors, group activities',
      'Behavioral trend detection showing gradual isolation over time',
      'Feature importance analysis (visitors 19.6%, social time 15.1%)',
      'Interactive date filtering and resident selection',
      'Facility-wide trend analytics with aggregated metrics',
      'Risk category breakdown (Low/Medium/High) with pie charts',
      'Movement and sleep pattern monitoring',
      'Premium UI with gradient designs and animated visualizations'
    ],
    learnings: [
      'Isolation Forest excels at detecting gradual behavioral changes vs sudden anomalies',
      'Anomaly detection achieves 53% accuracy - realistic for subtle patterns in complex human behavior',
      'Visitors (19.6%) and social interaction time (15.1%) are strongest isolation predictors',
      'Synthetic data generation requires realistic correlations between activities (low visitors → low social time)',
      'Healthcare monitoring systems need actionable thresholds (score >70) not just predictions',
      'Interactive dashboards must balance comprehensive data with caregiver time constraints',
      'Feature engineering from temporal patterns (7-day trends) improves clinical usefulness'
    ],
    completionDate: '2025'
  },
  {
    id: 'executive-sales-dashboard',
    title: 'Executive Sales Dashboard',
    category: 'Operational Analytics',
    shortDescription: 'Interactive business intelligence dashboard providing C-suite executives with real-time sales insights, pipeline analytics, and team performance metrics.',
    problem: 'Executive teams lack unified visibility into sales performance across regions, products, and teams. Manual reporting is time-consuming and provides outdated insights, making strategic decision-making difficult.',
    solution: 'Built an interactive Streamlit dashboard with real-time KPI tracking, revenue trend analysis, pipeline health monitoring, and team performance leaderboards. Includes dynamic filtering by year, quarter, month, region, category, and sales rep with YoY comparison capabilities.',
    impact: 'Enables data-driven executive decision-making with instant access to key metrics. Automated reporting saves 15+ hours weekly and provides strategic insights for resource allocation and performance management.',
    techStack: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'Business Intelligence', 'Data Visualization'],
    githubUrl: 'https://github.com/ayothetechguy/executive-sales-dashboard',
    liveDemoUrl: 'https://executive-sales-dashboard-9ekb6dle3k5apgaf5d6puu.streamlit.app/',
    videoUrl: '',
    screenshots: [
      '/projects/executive-bi-1.png',
      '/projects/executive-bi-2.png',
      '/projects/executive-bi-3.png',
      '/projects/executive-bi-4.png'
    ],
    features: [
      'Real-time KPI dashboard with revenue, pipeline, win rate, and average deal size',
      'Year-over-year revenue comparison with growth percentage tracking',
      'Interactive filtering by year, quarter, month, region, category, and sales rep',
      'Revenue trend visualization with monthly time series analysis',
      'Sales pipeline funnel showing stage-by-stage conversion',
      'Regional performance breakdown with horizontal bar charts',
      'Team performance leaderboard with revenue and deal count metrics',
      'Product performance analysis with category mix visualization',
      'Quarterly revenue tracking with comparative bar charts',
      'Top 8 sales performers ranked by total revenue',
      'Recent closed deals table with export functionality',
      'CSV data export for filtered datasets',
      'Premium gradient UI with color-coded metrics',
      'Multi-tab interface for organized insights'
    ],
    learnings: [
      'Executive dashboards require clear hierarchy with KPIs prominently displayed at top',
      'Color gradients and visual hierarchy guide attention to critical metrics',
      'Interactive filters enable self-service analytics for different stakeholder needs',
      'Tabbed interface organizes complex data without overwhelming users',
      'YoY comparisons provide context that raw numbers lack',
      'Export functionality is essential for executives who want deeper analysis',
      'Professional UI design increases dashboard adoption and credibility with C-suite'
    ],
    completionDate: '2025'
  },
  {
    id: 'nhs-data-integration-pipeline',
    title: 'NHS Data Integration Pipeline',
    category: 'Data Engineering',
    shortDescription: 'Multi-source healthcare data integration system with ETL pipeline architecture, star schema modeling, and NHS data standards compliance (620k records, 207MB).',
    problem: 'NHS Trusts have patient data scattered across multiple isolated systems (PAS, EHR, LIMS, Appointments) that do not communicate. Clinicians lack complete patient journey visibility, and analysts cannot perform system-wide analysis for service improvement.',
    solution: 'Designed and built comprehensive ETL pipeline integrating 4 NHS source systems into unified star schema data warehouse. System handles multi-format data (CSV, JSON), validates NHS-specific standards (Modulus 11 check digits, ICD-10 codes), and implements GDPR-compliant architecture with data quality framework.',
    impact: 'Demonstrates capabilities directly applicable to analyzing Scotland\'s Unscheduled Care Data Mart (UCD) for patient pathway optimization. Architecture supports 620,320 records with <2hr processing time, 99.5% data quality target, and complete audit trail for healthcare analytics and research.',
    techStack: ['Python', 'Pandas', 'DuckDB', 'SQL', 'ETL', 'Data Modeling', 'Star Schema', 'NHS Standards', 'Data Quality', 'GDPR', 'Healthcare Analytics'],
    githubUrl: 'https://github.com/ayothetechguy/nhs-data-integration-pipeline',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: [],
    features: [
      'Multi-source data extraction from 4 NHS clinical systems',
      'Star schema dimensional warehouse with fact and dimension tables',
      'Valid NHS number generation using Modulus 11 algorithm',
      'ICD-10 diagnosis coding and clinical terminology standards',
      'Data quality validation framework with healthcare-specific rules',
      'GDPR-compliant design with pseudonymization and audit trails',
      'Synthetic data generation: 50k patients, 100k encounters, 350k lab results, 120k appointments',
      'Realistic healthcare data patterns with intentional quality issues',
      'Five-layer architecture: Source → Staging → Processing → Warehouse → Presentation',
      'Handles multiple data formats (CSV for structured, JSON for clinical notes)',
      'Scottish healthcare demographics and geographic data',
      'Performance targets: <2hr processing, 10M+ records daily capacity',
      'Complete documentation of data dictionary and quality rules',
      'ETL pipeline design ready for Apache Airflow orchestration'
    ],
    learnings: [
      'Healthcare data integration requires deep understanding of clinical workflows and terminology standards',
      'Star schema dimensional modeling dramatically simplifies complex patient pathway analytics queries',
      'NHS number validation with Modulus 11 algorithm essential for data quality in UK healthcare systems',
      'Synthetic data generation must preserve realistic correlations between clinical variables',
      'GDPR compliance requires pseudonymization strategy, not just encryption',
      'Data quality framework must balance completeness checks with realistic missing data patterns',
      'Multi-format data handling (CSV, JSON) required for different NHS system characteristics',
      'Five-layer architecture provides clear separation of concerns for maintainability and testing',
      'Documentation of data lineage and transformation logic critical for healthcare audit requirements'
    ],
    completionDate: '2025'
  },
  {
    id: 'nhs-ae-wait-time-prediction',
    title: 'NHS A&E Wait Time Prediction System',
    category: 'ML & AI',
    shortDescription: 'AI-powered Emergency Department wait time prediction using Gradient Boosting (85.67% accuracy) with interactive patient check-in dashboard.',
    problem: 'Emergency department patients lack visibility into expected wait times, leading to anxiety and poor resource allocation decisions.',
    solution: 'Developed a machine learning system using Gradient Boosting to predict A&E wait times based on current occupancy, arrival patterns, triage priority, and staffing levels.',
    impact: 'Enables hospitals to provide accurate wait time estimates to patients and optimize ED resource allocation based on predicted demand.',
    techStack: ['Python', 'Scikit-learn', 'Gradient Boosting', 'Streamlit', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/ayothetechguy/nhs-ae-wait-time-prediction',
    liveDemoUrl: 'https://nhs-ae-wait-time-prediction-9uyjkafyedjzusxntahzmo.streamlit.app',
    videoUrl: '',
    screenshots: ['/projects/nhs-ae-prediction-1.png'],
    features: [
      'Gradient Boosting model with 85.67% prediction accuracy (R² score)',
      'Real-time wait time estimation based on 13 predictive features',
      'Interactive patient check-in simulation with digital ticket generation',
      'Department status dashboard showing occupancy, queue position, and staffing'
    ],
    learnings: [
      'Synthetic healthcare data generation must reflect realistic ED patterns',
      'Feature engineering from time-based and occupancy data improved model accuracy',
      'Patient-facing interfaces require clear communication of uncertainty in predictions'
    ],
    completionDate: '2024'
  },
  {
    id: 'automated-reporting',
    title: 'Automated Reporting System',
    category: 'Data Engineering',
    shortDescription: 'Scheduled reporting system that generates and distributes analytics reports via email.',
    problem: 'Analysts spend hours each week manually creating and distributing the same reports to stakeholders.',
    solution: 'Built a Python-based system that queries databases, generates PDF reports using ReportLab, and emails them to stakeholders on a schedule.',
    impact: 'Eliminated 10+ hours of manual reporting work weekly and ensured consistent delivery.',
    techStack: ['Python', 'ReportLab', 'SQL', 'Pandas', 'Schedule', 'SMTP'],
    githubUrl: '',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: ['/projects/auto-reporting-1.png'],
    features: [
      'Scheduled report generation',
      'PDF report creation with charts',
      'Email distribution with attachments',
      'Error handling and logging'
    ],
    learnings: [
      'Robust error handling is critical for automated systems',
      'PDF generation requires careful formatting for readability',
      'Stakeholder buy-in requires consistent quality and timing'
    ],
    completionDate: '2023'
  },
  {
    id: 'pneumonia-detection-system',
    title: 'AI-Powered Pneumonia Detection System',
    category: 'ML & AI',
    shortDescription: 'Deep learning chest X-ray analysis system with automated risk assessment and PDF reporting (85.58% accuracy using ResNet-18).',
    problem: 'Healthcare providers need rapid, accurate pneumonia screening from chest X-rays, but manual analysis is time-consuming and requires specialist expertise. Patients also need comprehensive risk assessment based on clinical symptoms.',
    solution: 'Developed an AI-powered diagnostic system using PyTorch ResNet-18 CNN for chest X-ray classification, integrated with clinical risk scoring algorithm and automated PDF report generation with visualizations.',
    impact: 'Provides instant pneumonia detection with 85.58% accuracy, comprehensive patient risk assessment, and professional medical reports - enabling faster clinical decision-making and improved patient care workflows.',
    techStack: ['Python', 'PyTorch', 'Streamlit', 'ReportLab', 'Matplotlib', 'ResNet-18', 'Computer Vision', 'Deep Learning'],
    githubUrl: 'https://github.com/ayothetechguy/pneumonia-detection-system',
    liveDemoUrl: 'https://ayothetechguy-pneumonia-detection-system.streamlit.app',
    videoUrl: '',
    screenshots: [
      '/projects/pneumonia-detection-1.png',
      '/projects/pneumonia-detection-2.png',
      '/projects/pneumonia-detection-3.png'
    ],
    features: [
      'ResNet-18 CNN trained for binary classification (Normal vs Pneumonia)',
      'Real-time chest X-ray analysis with confidence scoring',
      'Clinical risk assessment algorithm based on patient symptoms and medical history',
      'Automated PDF report generation with colorful charts and visualizations',
      'Interactive patient data entry with comprehensive symptom tracking',
      'Cloud-deployed model hosting using Google Drive integration',
      'Beautiful medical-grade UI with professional design'
    ],
    learnings: [
      'Deep learning model deployment requires careful handling of large model files (used Google Drive hosting)',
      'Medical AI applications need explainable predictions and confidence scores for clinical trust',
      'Combining ML predictions with rule-based clinical assessment provides comprehensive patient evaluation',
      'UI/UX design for healthcare applications requires clarity and professional medical aesthetics',
      'Python 3.13 compatibility issues with PyTorch required version management during deployment'
    ],
    completionDate: '2025'
  }
];

export function getProjectsByCategory(category: Project['category']) {
  return projects.filter(project => project.category === category);
}

export function getProjectById(id: string) {
  return projects.find(project => project.id === id);
}

export function getCategories() {
  return Array.from(new Set(projects.map(p => p.category)));
}