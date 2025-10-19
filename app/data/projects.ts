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
    id: 'user-activation-dashboard',
    title: 'User Activation & Retention Dashboard',
    category: 'Product Analytics',
    shortDescription: 'Interactive dashboard tracking user activation metrics, cohort retention, and feature adoption patterns for SaaS products.',
    problem: 'Product teams struggle to understand which user behaviors lead to activation and long-term retention, making it difficult to optimize onboarding flows.',
    solution: 'Built a comprehensive Streamlit dashboard that visualizes activation funnels, cohort retention curves, and feature adoption heatmaps using synthetic SaaS data.',
    impact: 'Enables product managers to identify drop-off points in user journeys and make data-driven decisions about feature prioritization.',
    techStack: ['Python', 'Streamlit', 'Pandas', 'Altair', 'SQL'],
    githubUrl: 'https://github.com/ayothetechguy/activation-dashboard',
    liveDemoUrl: 'https://activation-dashboard.streamlit.app',
    videoUrl: '',
    screenshots: ['/projects/activation-dashboard-1.png', '/projects/activation-dashboard-2.png'],
    features: [
      'Activation funnel analysis with conversion rates',
      'Cohort retention curves with time-based segmentation',
      'Feature adoption heatmaps',
      'Interactive filtering by user segment'
    ],
    learnings: [
      'Cohort analysis requires careful date handling and SQL window functions',
      'Visualization choice dramatically impacts stakeholder understanding',
      'Synthetic data generation must reflect realistic user behavior patterns'
    ],
    completionDate: '2024'
  },
  {
    id: 'skills-gap-mapper',
    title: 'Digital Capability Gap Mapper',
    category: 'Workforce Analytics',
    shortDescription: 'ML-powered system identifying skills gaps across organizational teams with predictive capability scoring.',
    problem: 'Organizations lack visibility into workforce digital capabilities, making it difficult to plan training programs and identify succession risks.',
    solution: 'Developed a classification model using survey data to predict capability levels, coupled with an interactive dashboard showing skills heatmaps and gap analysis.',
    impact: 'Helps L&D teams prioritize training investments and identify at-risk teams with low digital maturity.',
    techStack: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'Random Forest'],
    githubUrl: 'https://github.com/ayothetechguy/skills-gap-mapper',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: ['/projects/skills-gap-1.png'],
    features: [
      'Random Forest classification for capability prediction',
      'Team-level skills heatmaps',
      'Gap prioritization matrix',
      'Training ROI estimation'
    ],
    learnings: [
      'Survey data requires extensive cleaning and categorical encoding',
      'Model interpretability is critical for HR stakeholder buy-in',
      'Capability frameworks must align with organizational taxonomy'
    ],
    completionDate: '2024'
  },
  {
    id: 'anomaly-detection-system',
    title: 'KPI Anomaly Detection System',
    category: 'ML & AI',
    shortDescription: 'Automated monitoring system using Isolation Forest to detect unusual patterns in business KPIs.',
    problem: 'Manual monitoring of dozens of KPIs is time-consuming and often misses subtle anomalies until they become major issues.',
    solution: 'Implemented Isolation Forest algorithm to automatically flag anomalous KPI values, with customizable sensitivity and alert thresholds.',
    impact: 'Reduces monitoring time by 80% and catches anomalies 2-3 days earlier than manual review.',
    techStack: ['Python', 'Scikit-learn', 'Isolation Forest', 'Pandas', 'Streamlit'],
    githubUrl: 'https://github.com/ayothetechguy/kpi-anomaly-detection',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: ['/projects/anomaly-detection-1.png'],
    features: [
      'Automated anomaly scoring using Isolation Forest',
      'Historical anomaly timeline visualization',
      'Customizable sensitivity thresholds',
      'Email alert integration'
    ],
    learnings: [
      'Isolation Forest works well for multivariate KPI monitoring',
      'Feature scaling is critical for anomaly detection accuracy',
      'False positive management requires domain-specific tuning'
    ],
    completionDate: '2024'
  },
  {
    id: 'event-data-warehouse',
    title: 'Mini Event Data Warehouse',
    category: 'Data Engineering',
    shortDescription: 'Star schema data warehouse built with dbt and DuckDB for efficient analytics on event-based data.',
    problem: 'Raw event logs are difficult to query efficiently, and analysts struggle with complex joins for common analytics questions.',
    solution: 'Designed and implemented a star schema warehouse using dbt for transformations and DuckDB as the analytics engine.',
    impact: 'Query performance improved by 10x, and analysts can now self-serve analytics without data engineering support.',
    techStack: ['dbt', 'DuckDB', 'SQL', 'Python'],
    githubUrl: 'https://github.com/ayothetechguy/event-warehouse',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: ['/projects/warehouse-schema.png'],
    features: [
      'Star schema design with fact and dimension tables',
      'Incremental dbt models for efficient updates',
      'Data quality tests and documentation',
      'SQL-based analytics layer'
    ],
    learnings: [
      'Star schema dramatically simplifies analytics queries',
      'dbt testing framework catches data quality issues early',
      'DuckDB is surprisingly fast for medium-scale analytics'
    ],
    completionDate: '2024'
  },
  {
    id: 'behavioral-simulation',
    title: 'Behavioral Simulation Using Census Data',
    category: 'Research',
    shortDescription: 'Agent-based modeling research exploring education-employment relationships using UK Census microdata.',
    problem: 'Understanding complex relationships between education, employment, and demographics requires modeling individual-level behaviors.',
    solution: 'Developed agent-based simulation using UK Census data to model employment transitions based on educational attainment and demographic factors.',
    impact: 'Dissertation research providing insights into labor market dynamics and educational policy impacts.',
    techStack: ['Python', 'Mesa', 'Pandas', 'Statistical Modeling'],
    githubUrl: '',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: ['/projects/simulation-1.png'],
    features: [
      'Agent-based modeling framework',
      'Census microdata integration',
      'Employment transition probability modeling',
      'Visualization of population dynamics'
    ],
    learnings: [
      'Agent-based models require careful calibration with real data',
      'Census microdata has complex sampling weights',
      'Simulation validation is critical for credible research'
    ],
    completionDate: '2025'
  },
  {
    id: 'churn-prediction',
    title: 'Customer Churn Prediction with What-If Scenarios',
    category: 'Product Analytics',
    shortDescription: 'ML-powered churn prediction model with interactive scenario planning for subscription businesses.',
    problem: 'Subscription businesses need to identify at-risk customers early and understand which interventions are most effective at preventing churn.',
    solution: 'Built a Random Forest classification model to predict churn probability, integrated with a Streamlit interface allowing users to test "what-if" scenarios (e.g., discounts, feature access).',
    impact: 'Enables customer success teams to proactively target high-risk accounts and quantify the expected impact of retention strategies.',
    techStack: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'Plotly'],
    githubUrl: '',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: ['/projects/churn-prediction-1.png'],
    features: [
      'Churn probability scoring for individual customers',
      'Feature importance visualization',
      'Interactive what-if scenario testing',
      'Segment-level churn analysis'
    ],
    learnings: [
      'Class imbalance requires SMOTE or weighted models',
      'Feature engineering from behavioral data is critical',
      'Stakeholders value interpretability over marginal accuracy gains'
    ],
    completionDate: '2024'
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
    id: 'feedback-topic-modeler',
    title: 'Feedback Topic Modeler & Summarizer',
    category: 'ML & AI',
    shortDescription: 'NLP pipeline that automatically categorizes and summarizes customer feedback using topic modeling.',
    problem: 'Companies receive thousands of customer feedback messages monthly, making manual categorization and theme identification impossible.',
    solution: 'Implemented LDA topic modeling combined with zero-shot classification to automatically group feedback into themes and generate executive summaries.',
    impact: 'Reduced feedback analysis time from weeks to hours, surfacing actionable insights for product and support teams.',
    techStack: ['Python', 'Scikit-learn', 'NLTK', 'Hugging Face Transformers', 'Streamlit'],
    githubUrl: '',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: ['/projects/topic-modeler-1.png'],
    features: [
      'Automated topic extraction using LDA',
      'Sentiment analysis per topic',
      'Executive summary generation',
      'Trend analysis over time'
    ],
    learnings: [
      'Topic modeling requires extensive text preprocessing',
      'Combining unsupervised and supervised NLP improves results',
      'Domain-specific stopword lists are essential'
    ],
    completionDate: '2024'
  },
  {
    id: 'survey-analytics-pipeline',
    title: 'Survey Analytics Pipeline (Quantitative + NLP)',
    category: 'Workforce Analytics',
    shortDescription: 'End-to-end pipeline for processing employee surveys, combining quantitative analysis with qualitative text analytics.',
    problem: 'HR teams struggle to extract meaningful insights from employee surveys that combine Likert-scale questions with open-ended responses.',
    solution: 'Built an automated pipeline that processes survey data, calculates engagement scores, performs sentiment analysis on text responses, and generates visualizations.',
    impact: 'Transforms raw survey data into actionable insights within 24 hours, enabling faster response to employee concerns.',
    techStack: ['Python', 'Pandas', 'NLTK', 'Power BI', 'SQL'],
    githubUrl: '',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: ['/projects/survey-pipeline-1.png'],
    features: [
      'Automated data cleaning and validation',
      'Engagement score calculation with benchmarking',
      'Sentiment analysis on open-ended responses',
      'Demographic segmentation and drill-downs'
    ],
    learnings: [
      'Survey data quality issues are common and need robust handling',
      'Combining quant and qual insights provides richer narratives',
      'Anonymization is critical for sensitive HR analytics'
    ],
    completionDate: '2024'
  },
  {
    id: 'procurement-analytics',
    title: 'Procurement & Stock Analytics Dashboard',
    category: 'Operational Analytics',
    shortDescription: 'Operational dashboard tracking procurement efficiency, supplier performance, and inventory optimization.',
    problem: 'Procurement teams lacked visibility into supplier performance, stock levels, and purchase order discrepancies.',
    solution: 'Designed Power BI dashboard integrating PO, GRN, and invoice data with automated 3-way match validation and supplier scorecards.',
    impact: 'Reduced invoice discrepancies by 40% and improved stock visibility, enabling better cash flow management.',
    techStack: ['Power BI', 'SQL', 'Excel', 'Python'],
    githubUrl: '',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: ['/projects/procurement-dashboard-1.png'],
    features: [
      'Supplier performance scorecards',
      '3-way match validation (PO-GRN-Invoice)',
      'Stock level alerts and reorder recommendations',
      'Procurement cycle time analysis'
    ],
    learnings: [
      'Operational dashboards need real-time or near-real-time updates',
      'Data quality at source is critical for reliable analytics',
      'Stakeholder collaboration ensures dashboard adoption'
    ],
    completionDate: '2023'
  },
  {
    id: 'financial-operations-platform',
    title: 'Integrated Financial Operations Platform',
    category: 'Operational Analytics',
    shortDescription: 'Comprehensive analytics platform integrating financial reporting, reconciliation, and audit trail management.',
    problem: 'Finance teams were using disconnected spreadsheets for reporting, reconciliation, and audit preparation, leading to errors and inefficiencies.',
    solution: 'Built a centralized platform with automated data pipelines, reconciliation checks, and audit-ready reporting templates.',
    impact: 'Month-end close time reduced by 50%, with improved accuracy and full audit trail documentation.',
    techStack: ['Python', 'Excel VBA', 'SQL', 'Power BI'],
    githubUrl: '',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: ['/projects/financial-platform-1.png'],
    features: [
      'Automated month-end reconciliation',
      'Multi-source data integration',
      'Audit trail with version control',
      'Executive financial reporting dashboards'
    ],
    learnings: [
      'Financial data requires rigorous validation and controls',
      'Automation must preserve audit trail for compliance',
      'Change management is critical for finance system adoption'
    ],
    completionDate: '2023'
  },
  {
    id: 'ab-test-analyzer',
    title: 'A/B Test Analyzer & Power Calculator',
    category: 'Product Analytics',
    shortDescription: 'Statistical toolkit for designing, analyzing, and interpreting A/B tests with confidence.',
    problem: 'Product teams run A/B tests but struggle with proper sample size calculation, statistical significance interpretation, and multiple testing corrections.',
    solution: 'Created a Streamlit app with power calculators, sequential testing support, and automated result interpretation with practical recommendations.',
    impact: 'Improved experiment quality and reduced false positives through proper statistical methodology.',
    techStack: ['Python', 'SciPy', 'Streamlit', 'Statsmodels'],
    githubUrl: '',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: ['/projects/ab-test-1.png'],
    features: [
      'Sample size calculator with power analysis',
      'Statistical significance testing (t-test, chi-square)',
      'Bayesian A/B test analysis',
      'Sequential testing support'
    ],
    learnings: [
      'Proper experimental design prevents invalid conclusions',
      'Bayesian methods provide more intuitive probability statements',
      'Multiple testing corrections are essential for validity'
    ],
    completionDate: '2024'
  },
  {
    id: 'predictive-risk-models',
    title: 'Predictive Risk Models (Healthcare)',
    category: 'ML & AI',
    shortDescription: 'Classification models predicting health outcomes including diabetes risk and A&E wait time predictions.',
    problem: 'Healthcare providers need early identification of high-risk patients and better resource allocation for emergency departments.',
    solution: 'Developed gradient boosting models using clinical and demographic data to predict diabetes risk and emergency wait times.',
    impact: 'Enables preventive care targeting and improved ED resource planning.',
    techStack: ['Python', 'XGBoost', 'Scikit-learn', 'SHAP', 'Streamlit'],
    githubUrl: '',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: ['/projects/health-risk-1.png'],
    features: [
      'Diabetes risk prediction with feature importance',
      'A&E wait time forecasting',
      'SHAP explainability for clinical trust',
      'Risk stratification dashboards'
    ],
    learnings: [
      'Healthcare ML requires explainability for clinical adoption',
      'Dealing with missing data is critical in health records',
      'Model fairness across demographic groups must be validated'
    ],
    completionDate: '2024'
  },
  {
    id: 'analytics-workspace',
    title: 'Analytics Workspace Application',
    category: 'Data Engineering',
    shortDescription: 'Self-service analytics platform allowing non-technical users to upload data and generate insights.',
    problem: 'Business users rely on analysts for basic data exploration and reporting, creating bottlenecks.',
    solution: 'Built a Streamlit application where users upload CSV/Excel files and automatically get descriptive statistics, visualizations, and data quality reports.',
    impact: 'Democratized data access and reduced analyst workload by 30% for routine requests.',
    techStack: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'DuckDB'],
    githubUrl: '',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: ['/projects/analytics-workspace-1.png'],
    features: [
      'Multi-format data upload (CSV, Excel, JSON)',
      'Automated exploratory data analysis',
      'Interactive visualization builder',
      'Data quality profiling'
    ],
    learnings: [
      'User-friendly interfaces require extensive input validation',
      'Self-service tools need good documentation and examples',
      'Performance optimization is critical for large file handling'
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
    id: 'education-microdata-explorer',
    title: 'Education/Employment Microdata Explorer',
    category: 'Research',
    shortDescription: 'Interactive tool for exploring relationships in UK Census microdata between education and employment outcomes.',
    problem: 'Researchers and policymakers need accessible tools to explore complex relationships in census microdata without advanced statistical software.',
    solution: 'Created an interactive Streamlit dashboard allowing users to filter, visualize, and analyze education-employment patterns across demographics.',
    impact: 'Makes census insights accessible to non-technical stakeholders and supports evidence-based policy discussions.',
    techStack: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Statistical Analysis'],
    githubUrl: '',
    liveDemoUrl: '',
    videoUrl: '',
    screenshots: ['/projects/microdata-explorer-1.png'],
    features: [
      'Interactive demographic filtering',
      'Cross-tabulation visualizations',
      'Employment outcome distributions by education level',
      'Geographic analysis capabilities'
    ],
    learnings: [
      'Census data requires careful handling of sampling weights',
      'Interactive exploration reveals insights missed in static reports',
      'Privacy protection is paramount when working with microdata'
    ],
    completionDate: '2024'
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

// Helper function to get projects by category
export function getProjectsByCategory(category: Project['category']) {
  return projects.filter(project => project.category === category);
}

// Helper function to get project by ID
export function getProjectById(id: string) {
  return projects.find(project => project.id === id);
}

// Get all unique categories
export function getCategories() {
  return Array.from(new Set(projects.map(p => p.category)));
}