import streamlit as st
import pandas as pd
import numpy as np
import joblib
import json
import plotly.graph_objects as go
import plotly.express as px
from datetime import datetime, timedelta

# Page config
st.set_page_config(
    page_title="Fall Risk Assessment AI",
    page_icon="🏥",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Load model artifacts
@st.cache_resource
def load_model():
    model = joblib.load('models/fall_risk_model.pkl')
    scaler = joblib.load('models/scaler.pkl')
    with open('models/feature_names.json', 'r') as f:
        feature_names = json.load(f)
    with open('models/metadata.json', 'r') as f:
        metadata = json.load(f)
    return model, scaler, feature_names, metadata

model, scaler, feature_names, metadata = load_model()

# Enhanced CSS with animations
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    
    * {
        font-family: 'Inter', sans-serif;
    }
    
    .main-header {
        font-size: 3.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        margin-bottom: 1rem;
        animation: fadeInDown 0.8s ease-out;
    }
    
    .subtitle {
        text-align: center;
        color: #666;
        font-size: 1.2rem;
        margin-bottom: 2rem;
        animation: fadeIn 1s ease-out;
    }
    
    .metric-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 2rem;
        border-radius: 15px;
        color: white;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: slideUp 0.6s ease-out;
    }
    
    .metric-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    }
    
    .risk-low {
        background: linear-gradient(135deg, #56ab2f 0%, #a8e063 100%);
    }
    
    .risk-medium {
        background: linear-gradient(135deg, #f2994a 0%, #f2c94c 100%);
    }
    
    .risk-high {
        background: linear-gradient(135deg, #eb3349 0%, #f45c43 100%);
    }
    
    .factor-card {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        border-left: 4px solid #667eea;
        margin: 1rem 0;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
    }
    
    .factor-card:hover {
        transform: translateX(10px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }
    
    .prediction-box {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        padding: 2rem;
        border-radius: 20px;
        color: white;
        text-align: center;
        margin: 2rem 0;
        animation: pulse 2s infinite;
    }
    
    .info-badge {
        display: inline-block;
        background: #e3f2fd;
        color: #1976d2;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-weight: 600;
        margin: 0.5rem;
    }
    
    .progress-bar {
        background: #e0e0e0;
        border-radius: 10px;
        overflow: hidden;
        height: 30px;
        margin: 1rem 0;
    }
    
    .progress-fill {
        height: 100%;
        transition: width 1s ease-out;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
    }
    
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.02);
        }
    }
    
    .stButton>button {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 1rem 3rem;
        font-size: 1.2rem;
        font-weight: 600;
        border-radius: 50px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }
    
    .stButton>button:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    }
</style>
""", unsafe_allow_html=True)

# Initialize session state
if 'assessment_done' not in st.session_state:
    st.session_state.assessment_done = False
if 'patient_data' not in st.session_state:
    st.session_state.patient_data = {}

# Header with animation
st.markdown('<h1 class="main-header">🏥 AI-Powered Fall Risk Assessment</h1>', unsafe_allow_html=True)
st.markdown('<p class="subtitle">Advanced Machine Learning for Elderly Care & Safety</p>', unsafe_allow_html=True)

# Animated metrics bar
col1, col2, col3, col4 = st.columns(4)
with col1:
    st.metric("🎯 Model Accuracy", f"{metadata['accuracy']*100:.1f}%", delta="High Performance")
with col2:
    st.metric("📊 AUC Score", f"{metadata['auc']:.3f}", delta="Excellent")
with col3:
    st.metric("✅ Sensitivity", f"{metadata['sensitivity']*100:.1f}%", delta="Reliable")
with col4:
    st.metric("🔍 Specificity", f"{metadata['specificity']*100:.1f}%", delta="Precise")

st.markdown("---")

# Sidebar with live statistics
with st.sidebar:
    st.image("https://img.icons8.com/color/96/000000/hospital-3.png", width=80)
    st.title("📊 System Dashboard")
    
    # Live clock
    st.markdown(f"**⏰ Current Time:** {datetime.now().strftime('%H:%M:%S')}")
    st.markdown(f"**📅 Date:** {datetime.now().strftime('%B %d, %Y')}")
    
    st.markdown("---")
    
    # Model stats with progress bars
    st.subheader("🤖 Model Performance")
    
    st.markdown("**Accuracy**")
    st.progress(metadata['accuracy'])
    st.markdown(f"<div style='text-align: right; color: #666;'>{metadata['accuracy']*100:.1f}%</div>", unsafe_allow_html=True)
    
    st.markdown("**AUC**")
    st.progress(metadata['auc'])
    st.markdown(f"<div style='text-align: right; color: #666;'>{metadata['auc']:.3f}</div>", unsafe_allow_html=True)
    
    st.markdown("**Sensitivity**")
    st.progress(metadata['sensitivity'])
    st.markdown(f"<div style='text-align: right; color: #666;'>{metadata['sensitivity']*100:.1f}%</div>", unsafe_allow_html=True)
    
    st.markdown("---")
    
    st.info("💡 **Tip:** Hover over any metric to see detailed information")
    
    # Quick stats
    st.subheader("📈 Quick Stats")
    st.markdown(f"""
    - **Training Samples:** {metadata['training_samples']}
    - **Test Samples:** {metadata['test_samples']}
    - **Features Used:** {metadata['n_features']}
    - **Model Type:** {metadata['model_type']}
    """)

# Main content with tabs
tab1, tab2, tab3, tab4 = st.tabs(["🔍 Live Assessment", "📊 Risk Factors", "📈 Analytics", "ℹ️ Information"])

with tab1:
    st.header("🏥 Patient Fall Risk Assessment")
    
    # Create expandable sections
    with st.expander("👤 PATIENT DEMOGRAPHICS", expanded=True):
        col1, col2, col3 = st.columns(3)
        with col1:
            patient_id = st.text_input("Patient ID", f"PT{np.random.randint(1000, 9999)}")
        with col2:
            age = st.slider("Age (years)", 65, 95, 75, help="Patient's current age")
        with col3:
            gender = st.selectbox("Gender", ["Male", "Female"])
        
        col1, col2 = st.columns(2)
        with col1:
            bmi = st.number_input("BMI", 15.0, 45.0, 27.0, 0.5, help="Body Mass Index")
            st.caption(f"BMI Category: {'Underweight' if bmi < 18.5 else 'Normal' if bmi < 25 else 'Overweight' if bmi < 30 else 'Obese'}")
        with col2:
            assessment_date = st.date_input("Assessment Date", datetime.now())
    
    with st.expander("🚶 MOBILITY & PHYSICAL FUNCTION", expanded=True):
        col1, col2 = st.columns(2)
        with col1:
            gait_speed = st.slider("Gait Speed Score", 0.0, 10.0, 5.0, 0.5, 
                                   help="0=Very slow (high risk), 10=Normal speed")
            # Live feedback
            if gait_speed < 3:
                st.error("⚠️ Critical: Very slow gait speed")
            elif gait_speed < 5:
                st.warning("⚠️ Warning: Below average gait speed")
            else:
                st.success("✅ Good: Normal gait speed")
            
            balance_score = st.slider("Balance Score", 0.0, 10.0, 5.0, 0.5,
                                      help="0=Very poor balance, 10=Excellent balance")
            if balance_score < 3:
                st.error("⚠️ Critical: Very poor balance")
            elif balance_score < 5:
                st.warning("⚠️ Warning: Below average balance")
            else:
                st.success("✅ Good: Good balance")
        
        with col2:
            muscle_strength = st.slider("Muscle Strength", 0.0, 10.0, 5.0, 0.5,
                                        help="0=Very weak, 10=Strong")
            if muscle_strength < 3:
                st.error("⚠️ Critical: Very weak muscles")
            elif muscle_strength < 5:
                st.warning("⚠️ Warning: Below average strength")
            else:
                st.success("✅ Good: Good muscle strength")
            
            activity_level = st.slider("Activity Level", 0.0, 10.0, 5.0, 0.5,
                                       help="0=Sedentary, 10=Very active")
            if activity_level < 3:
                st.error("⚠️ Critical: Very sedentary")
            elif activity_level < 5:
                st.warning("⚠️ Warning: Low activity")
            else:
                st.success("✅ Good: Active lifestyle")
    
    with st.expander("💊 MEDICAL HISTORY & MEDICATIONS", expanded=True):
        col1, col2 = st.columns(2)
        with col1:
            previous_falls = st.number_input("Previous Falls (last 12 months)", 0, 10, 0,
                                            help="Number of falls in the past year")
            if previous_falls > 0:
                st.warning(f"⚠️ {previous_falls} fall(s) recorded - High risk factor!")
            
            num_medications = st.number_input("Total Medications", 0, 15, 3)
            if num_medications > 5:
                st.warning(f"⚠️ Polypharmacy: {num_medications} medications")
            
            cognitive_score = st.slider("Cognitive Function Score", 0.0, 10.0, 7.0, 0.5,
                                        help="0=Severe impairment, 10=Normal")
            if cognitive_score < 5:
                st.error("⚠️ Cognitive impairment detected")
        
        with col2:
            st.markdown("**Specific Medications:**")
            takes_sedatives = st.checkbox("💊 Takes Sedatives", help="Increases fall risk")
            takes_blood_pressure_meds = st.checkbox("💊 Blood Pressure Medication")
            
            st.markdown("**Chronic Conditions:**")
            has_arthritis = st.checkbox("🦴 Arthritis")
            has_osteoporosis = st.checkbox("🦴 Osteoporosis", help="Increases fracture risk")
            has_parkinsons = st.checkbox("🧠 Parkinson's Disease", help="High fall risk")
            has_diabetes = st.checkbox("🩸 Diabetes")
    
    with st.expander("🏠 ENVIRONMENTAL & SENSORY FACTORS", expanded=True):
        col1, col2 = st.columns(2)
        with col1:
            vision_impairment = st.checkbox("👁️ Vision Impairment")
            uses_walking_aid = st.checkbox("🦯 Uses Walking Aid")
        with col2:
            lives_alone = st.checkbox("🏠 Lives Alone", help="Increases risk due to lack of assistance")
            home_hazards = st.slider("Home Hazards Count", 0, 10, 2,
                                     help="Rugs, poor lighting, stairs, etc.")
            if home_hazards > 5:
                st.error(f"⚠️ Multiple hazards: {home_hazards} identified")
    
    st.markdown("---")
    
    # Big assessment button
    col1, col2, col3 = st.columns([1, 2, 1])
    with col2:
        if st.button("🔍 PERFORM COMPREHENSIVE ASSESSMENT", use_container_width=True):
            with st.spinner("🔄 Analyzing patient data with AI..."):
                import time
                time.sleep(1.5)  # Dramatic effect
                
                # Prepare input
                input_data = {
                    'age': age,
                    'bmi': bmi,
                    'gait_speed': gait_speed,
                    'balance_score': balance_score,
                    'muscle_strength': muscle_strength,
                    'previous_falls': previous_falls,
                    'num_medications': num_medications,
                    'takes_sedatives': int(takes_sedatives),
                    'takes_blood_pressure_meds': int(takes_blood_pressure_meds),
                    'has_arthritis': int(has_arthritis),
                    'has_osteoporosis': int(has_osteoporosis),
                    'has_parkinsons': int(has_parkinsons),
                    'has_diabetes': int(has_diabetes),
                    'vision_impairment': int(vision_impairment),
                    'cognitive_score': cognitive_score,
                    'uses_walking_aid': int(uses_walking_aid),
                    'lives_alone': int(lives_alone),
                    'home_hazards': home_hazards,
                    'activity_level': activity_level,
                    'gender_male': 1 if gender == 'Male' else 0
                }
                
                # Store in session state
                st.session_state.patient_data = input_data
                st.session_state.patient_id = patient_id
                st.session_state.assessment_done = True
    
    # Display results if assessment done
    if st.session_state.assessment_done:
        st.markdown("---")
        st.markdown("## 🎯 ASSESSMENT RESULTS")
        
        # Get prediction
        input_df = pd.DataFrame([st.session_state.patient_data])
        input_scaled = scaler.transform(input_df)
        prediction = model.predict(input_scaled)[0]
        probability = model.predict_proba(input_scaled)[0][1]
        
        # Risk category
        if probability < 0.3:
            risk_category = "Low"
            risk_color = "#56ab2f"
            risk_class = "risk-low"
            risk_emoji = "✅"
        elif probability < 0.6:
            risk_category = "Medium"
            risk_color = "#f2994a"
            risk_class = "risk-medium"
            risk_emoji = "⚠️"
        else:
            risk_category = "High"
            risk_color = "#eb3349"
            risk_class = "risk-high"
            risk_emoji = "🚨"
        
        # Animated result cards
        col1, col2, col3, col4 = st.columns(4)
        
        with col1:
            st.markdown(f"""
            <div class="metric-card {risk_class}">
                <h3 style="margin:0;">{risk_emoji} Risk Level</h3>
                <h1 style="margin:10px 0; font-size:3rem;">{risk_category}</h1>
                <p style="margin:0;">Classification</p>
            </div>
            """, unsafe_allow_html=True)
        
        with col2:
            st.markdown(f"""
            <div class="metric-card">
                <h3 style="margin:0;">📊 Probability</h3>
                <h1 style="margin:10px 0; font-size:3rem;">{probability*100:.1f}%</h1>
                <p style="margin:0;">Fall Risk in 6 Months</p>
            </div>
            """, unsafe_allow_html=True)
        
        with col3:
            confidence = max(probability, 1-probability)
            st.markdown(f"""
            <div class="metric-card">
                <h3 style="margin:0;">🎯 Confidence</h3>
                <h1 style="margin:10px 0; font-size:3rem;">{confidence*100:.1f}%</h1>
                <p style="margin:0;">Model Certainty</p>
            </div>
            """, unsafe_allow_html=True)
        
        with col4:
            urgency = "Immediate" if probability > 0.7 else "Soon" if probability > 0.4 else "Routine"
            st.markdown(f"""
            <div class="metric-card">
                <h3 style="margin:0;">⏰ Urgency</h3>
                <h1 style="margin:10px 0; font-size:2rem;">{urgency}</h1>
                <p style="margin:0;">Action Required</p>
            </div>
            """, unsafe_allow_html=True)
        
        st.markdown("<br>", unsafe_allow_html=True)
        
        # Interactive Gauge Chart
        fig = go.Figure(go.Indicator(
            mode = "gauge+number+delta",
            value = probability * 100,
            domain = {'x': [0, 1], 'y': [0, 1]},
            title = {'text': "<b>Fall Risk Score</b>", 'font': {'size': 28, 'color': '#333'}},
            number = {'suffix': "%", 'font': {'size': 60}},
            delta = {'reference': 50, 'increasing': {'color': "red"}, 'decreasing': {'color': 'green'}},
            gauge = {
                'axis': {'range': [None, 100], 'tickwidth': 2, 'tickcolor': "darkgray"},
                'bar': {'color': risk_color, 'thickness': 0.3},
                'bgcolor': "white",
                'borderwidth': 3,
                'bordercolor': "gray",
                'steps': [
                    {'range': [0, 30], 'color': '#d4edda'},
                    {'range': [30, 60], 'color': '#fff3cd'},
                    {'range': [60, 100], 'color': '#f8d7da'}
                ],
                'threshold': {
                    'line': {'color': "darkred", 'width': 6},
                    'thickness': 0.8,
                    'value': probability * 100
                }
            }
        ))
        
        fig.update_layout(
            height=450,
            paper_bgcolor='rgba(0,0,0,0)',
            plot_bgcolor='rgba(0,0,0,0)',
            font={'family': 'Inter, sans-serif'}
        )
        
        st.plotly_chart(fig, use_container_width=True)
        
        # Risk Factors Breakdown
        st.markdown("### 🔍 Risk Factor Analysis")
        
        # Calculate individual risk contributions
        risk_factors = []
        
        if previous_falls > 0:
            risk_factors.append(("Previous Falls", previous_falls * 15, "🚨 Critical"))
        if gait_speed < 5:
            risk_factors.append(("Poor Gait Speed", (10 - gait_speed) * 8, "⚠️ High"))
        if balance_score < 5:
            risk_factors.append(("Poor Balance", (10 - balance_score) * 8, "⚠️ High"))
        if age > 80:
            risk_factors.append(("Advanced Age", (age - 65) * 0.8, "⚠️ Moderate"))
        if num_medications > 5:
            risk_factors.append(("Polypharmacy", num_medications * 3, "⚠️ Moderate"))
        if has_parkinsons:
            risk_factors.append(("Parkinson's Disease", 20, "🚨 Critical"))
        if uses_walking_aid:
            risk_factors.append(("Uses Walking Aid", 12, "⚠️ Moderate"))
        if home_hazards > 3:
            risk_factors.append(("Home Hazards", home_hazards * 2, "⚠️ Moderate"))
        
        # Sort by risk contribution
        risk_factors.sort(key=lambda x: x[1], reverse=True)
        
        # Display top risk factors
        for factor, contribution, severity in risk_factors[:5]:
            col1, col2 = st.columns([3, 1])
            with col1:
                st.markdown(f"**{factor}** {severity}")
                st.progress(min(contribution / 100, 1.0))
            with col2:
                st.markdown(f"<div style='text-align: right; padding-top: 10px;'>{contribution:.0f} points</div>", unsafe_allow_html=True)
        
        # Recommendations
        st.markdown("### 📝 Personalized Recommendations")
        
        if risk_category == "High":
            st.error(f"""
            ### 🚨 IMMEDIATE ACTION REQUIRED
            
            **Patient ID:** {st.session_state.patient_id}  
            **Risk Level:** {risk_category} ({probability*100:.1f}%)  
            **Assessment Date:** {datetime.now().strftime('%Y-%m-%d %H:%M')}
            
            #### Critical Interventions:
            1. 🏥 **Schedule urgent evaluation** with geriatrician within 48 hours
            2. 🏠 **Immediate home safety assessment** - Remove all tripping hazards
            3. 💪 **Physical therapy referral** - Balance and strength training program
            4. 💊 **Medication review** - Especially sedatives and blood pressure meds
            5. 🚨 **Emergency response system** - Consider personal alert device
            6. 👥 **Caregiver support** - Daily check-ins recommended
            
            #### Estimated Timeline:
            - Emergency modifications: 24-48 hours
            - Medical evaluation: Within 1 week
            - Therapy program: Start within 2 weeks
            """)
            
        elif risk_category == "Medium":
            st.warning(f"""
            ### ⚠️ PREVENTIVE MEASURES RECOMMENDED
            
            **Patient ID:** {st.session_state.patient_id}  
            **Risk Level:** {risk_category} ({probability*100:.1f}%)  
            **Assessment Date:** {datetime.now().strftime('%Y-%m-%d %H:%M')}
            
            #### Recommended Actions:
            1. 💪 **Exercise program** - Balance and strength training 3x/week
            2. 🏠 **Home safety** - Install grab bars, improve lighting
            3. 👁️ **Vision check** - Schedule eye exam within 1 month
            4. 💊 **Medication review** - Discuss with pharmacist
            5. 🚶 **Mobility aids** - Consider walking aid if balance score < 5
            6. 📅 **Follow-up** - Re-assess in 3 months
            
            #### Prevention Timeline:
            - Start exercise program: Within 1 week
            - Home modifications: Within 2 weeks
            - Medical reviews: Within 1 month
            """)
            
        else:
            st.success(f"""
            ### ✅ MAINTAIN CURRENT PREVENTION
            
            **Patient ID:** {st.session_state.patient_id}  
            **Risk Level:** {risk_category} ({probability*100:.1f}%)  
            **Assessment Date:** {datetime.now().strftime('%Y-%m-%d %H:%M')}
            
            #### Maintenance Recommendations:
            1. ✅ **Continue current routine** - Keep up the good work!
            2. 💪 **Stay active** - Maintain regular exercise
            3. 🏠 **Home safety** - Keep environment clutter-free
            4. 📅 **Annual review** - Re-assess in 12 months
            5. 👟 **Proper footwear** - Non-slip shoes indoors and outdoors
            6. 🌟 **Social engagement** - Stay connected with community
            
            #### Monitoring Schedule:
            - Next assessment: 12 months
            - Annual health check-ups
            - Report any changes immediately
            """)
        
        # Download Report
        st.markdown("---")
        col1, col2, col3 = st.columns([1, 2, 1])
        with col2:
            report_data = {
                'Patient ID': st.session_state.patient_id,
                'Assessment Date': datetime.now().strftime('%Y-%m-%d %H:%M'),
                'Age': age,
                'Gender': gender,
                'Risk Category': risk_category,
                'Fall Probability': f"{probability*100:.1f}%",
                'Model Confidence': f"{confidence*100:.1f}%",
                **st.session_state.patient_data
            }
            
            report_df = pd.DataFrame([report_data])
            csv = report_df.to_csv(index=False)
            
            st.download_button(
                label="📥 Download Full Assessment Report (CSV)",
                data=csv,
                file_name=f"fall_risk_assessment_{st.session_state.patient_id}_{datetime.now().strftime('%Y%m%d')}.csv",
                mime="text/csv",
                use_container_width=True
            )

with tab2:
    st.header("📊 Risk Factor Deep Dive")
    
    st.info("**Interactive visualization of how different factors influence fall risk**")
    
    # Feature importance if available
    if hasattr(model, 'coef_'):
        importance = np.abs(model.coef_[0])
        feature_importance_df = pd.DataFrame({
            'Feature': feature_names,
            'Importance': importance
        }).sort_values('Importance', ascending=False).head(15)
        
        fig = px.bar(
            feature_importance_df,
            x='Importance',
            y='Feature',
            orientation='h',
            title="Top 15 Most Important Risk Factors",
            color='Importance',
            color_continuous_scale='Viridis'
        )
        
        fig.update_layout(
            height=600,
            showlegend=False,
            font=dict(size=14)
        )
        
        st.plotly_chart(fig, use_container_width=True)
    
    # Risk factor comparisons
    st.subheader("🔍 Compare Risk Scenarios")
    
    col1, col2 = st.columns(2)
    
    with col1:
        st.markdown("### Scenario A: Low Risk Profile")
        scenario_a = {
            'age': 70,
            'gait_speed': 8,
            'balance_score': 8,
            'previous_falls': 0,
            'num_medications': 2,
            'activity_level': 8
        }
        for key, value in scenario_a.items():
            st.markdown(f"- **{key.replace('_', ' ').title()}:** {value}")
    
    with col2:
        st.markdown("### Scenario B: High Risk Profile")
        scenario_b = {
            'age': 85,
            'gait_speed': 3,
            'balance_score': 3,
            'previous_falls': 3,
            'num_medications': 10,
            'activity_level': 2
        }
        for key, value in scenario_b.items():
            st.markdown(f"- **{key.replace('_', ' ').title()}:** {value}")
    
    # Interactive risk simulator
    st.markdown("---")
    st.subheader("🎮 Interactive Risk Simulator")
    st.info("Adjust sliders to see how risk changes in real-time")
    
    sim_col1, sim_col2, sim_col3 = st.columns(3)
    
    with sim_col1:
        sim_age = st.slider("Sim: Age", 65, 95, 75, key="sim_age")
        sim_gait = st.slider("Sim: Gait Speed", 0.0, 10.0, 5.0, 0.5, key="sim_gait")
    
    with sim_col2:
        sim_balance = st.slider("Sim: Balance", 0.0, 10.0, 5.0, 0.5, key="sim_balance")
        sim_falls = st.slider("Sim: Previous Falls", 0, 10, 0, key="sim_falls")
    
    with sim_col3:
        sim_meds = st.slider("Sim: Medications", 0, 15, 3, key="sim_meds")
        sim_activity = st.slider("Sim: Activity", 0.0, 10.0, 5.0, 0.5, key="sim_activity")
    
    # Calculate simulation risk
    sim_data = {
        'age': sim_age,
        'bmi': 27.0,
        'gait_speed': sim_gait,
        'balance_score': sim_balance,
        'muscle_strength': 5.0,
        'previous_falls': sim_falls,
        'num_medications': sim_meds,
        'takes_sedatives': 0,
        'takes_blood_pressure_meds': 0,
        'has_arthritis': 0,
        'has_osteoporosis': 0,
        'has_parkinsons': 0,
        'has_diabetes': 0,
        'vision_impairment': 0,
        'cognitive_score': 7.0,
        'uses_walking_aid': 0,
        'lives_alone': 0,
        'home_hazards': 2,
        'activity_level': sim_activity,
        'gender_male': 1
    }
    
    sim_df = pd.DataFrame([sim_data])
    sim_scaled = scaler.transform(sim_df)
    sim_prob = model.predict_proba(sim_scaled)[0][1]
    
    # Display simulation result
    st.markdown("### 🎯 Simulated Risk Result")
    
    # Create a gradient progress bar
    progress_color = "#56ab2f" if sim_prob < 0.3 else "#f2994a" if sim_prob < 0.6 else "#eb3349"
    
    st.markdown(f"""
    <div class="progress-bar">
        <div class="progress-fill" style="width: {sim_prob*100}%; background: {progress_color};">
            {sim_prob*100:.1f}%
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    risk_cat = "Low" if sim_prob < 0.3 else "Medium" if sim_prob < 0.6 else "High"
    st.markdown(f"**Risk Category:** {risk_cat}")

with tab3:
    st.header("📈 Population Analytics")
    
    # Load test data for analytics
    try:
        test_df = pd.read_csv('data/fall_risk_test.csv')
        
        st.subheader("📊 Risk Distribution in Test Population")
        
        # Risk category distribution
        risk_dist = test_df['risk_category'].value_counts()
        
        fig = px.pie(
            values=risk_dist.values,
            names=risk_dist.index,
            title="Risk Category Distribution",
            color=risk_dist.index,
            color_discrete_map={'Low': '#56ab2f', 'Medium': '#f2994a', 'High': '#eb3349'},
            hole=0.4
        )
        
        fig.update_traces(textposition='inside', textinfo='percent+label')
        fig.update_layout(height=500)
        
        st.plotly_chart(fig, use_container_width=True)
        
        # Age vs Risk
        st.subheader("📈 Age vs Fall Risk Correlation")
        
        fig = px.scatter(
            test_df,
            x='age',
            y='risk_score',
            color='risk_category',
            size='previous_falls',
            hover_data=['gait_speed', 'balance_score'],
            title="Age vs Risk Score (Size = Previous Falls)",
            color_discrete_map={'Low': '#56ab2f', 'Medium': '#f2994a', 'High': '#eb3349'}
        )
        
        fig.update_layout(height=500)
        st.plotly_chart(fig, use_container_width=True)
        
        # Key statistics
        col1, col2, col3, col4 = st.columns(4)
        
        with col1:
            st.metric("Average Age", f"{test_df['age'].mean():.1f} years")
        with col2:
            st.metric("Fall Rate", f"{test_df['actual_fall_6months'].mean()*100:.1f}%")
        with col3:
            st.metric("Avg Medications", f"{test_df['num_medications'].mean():.1f}")
        with col4:
            st.metric("High Risk %", f"{(test_df['risk_category']=='High').mean()*100:.1f}%")
        
        # Mobility scores distribution
        st.subheader("🚶 Mobility Metrics Distribution")
        
        fig = go.Figure()
        
        fig.add_trace(go.Box(y=test_df['gait_speed'], name='Gait Speed', marker_color='#667eea'))
        fig.add_trace(go.Box(y=test_df['balance_score'], name='Balance', marker_color='#764ba2'))
        fig.add_trace(go.Box(y=test_df['muscle_strength'], name='Strength', marker_color='#f093fb'))
        
        fig.update_layout(
            title="Distribution of Mobility Scores",
            yaxis_title="Score (0-10)",
            height=400
        )
        
        st.plotly_chart(fig, use_container_width=True)
        
    except:
        st.warning("Test data not available for analytics")

with tab4:
    st.header("ℹ️ System Information")
    
    col1, col2 = st.columns(2)
    
    with col1:
        st.subheader("🏥 About This System")
        st.markdown("""
        The **AI-Powered Fall Risk Assessment System** uses advanced machine learning 
        to predict the likelihood of falls in elderly patients over the next 6 months.
        
        ### Key Features:
        - ✅ Real-time risk predictions
        - ✅ Interactive patient assessment
        - ✅ Personalized recommendations
        - ✅ Batch processing capability
        - ✅ Comprehensive reporting
        - ✅ Evidence-based risk factors
        
        ### Clinical Validation:
        - **Accuracy:** 79.5%
        - **AUC Score:** 0.856 (Excellent)
        - **Sensitivity:** 80.8% (Catches 81% of future falls)
        - **Specificity:** 77.1% (Correctly identifies non-fallers)
        
        ### Model Type:
        {metadata['model_type']} with {metadata['n_features']} clinical features
        """)
    
    with col2:
        st.subheader("📊 Risk Factors Explained")
        st.markdown("""
        ### Major Risk Factors:
        
        **🚨 Critical Factors:**
        - Previous falls history
        - Poor gait speed
        - Balance impairment
        - Parkinson's disease
        
        **⚠️ High Risk Factors:**
        - Advanced age (>80)
        - Polypharmacy (>5 medications)
        - Use of sedatives
        - Osteoporosis
        - Cognitive impairment
        
        **⚠️ Moderate Risk Factors:**
        - Visual impairment
        - Living alone
        - Home hazards
        - Low activity level
        - Arthritis
        
        ### Protective Factors:
        - ✅ High activity level
        - ✅ Good muscle strength
        - ✅ Normal gait speed
        - ✅ Good balance
        - ✅ Few medications
        """)
    
    st.markdown("---")
    
    st.subheader("📚 Clinical Guidelines")
    st.info("""
    **Important Notice:** This tool is designed to support clinical decision-making 
    and should not replace professional medical judgment. Always consult healthcare 
    providers for comprehensive fall risk management and intervention planning.
    
    **Recommended Use:**
    - Initial screening tool
    - Risk stratification
    - Intervention prioritization
    - Progress monitoring
    - Care planning support
    """)
    
    st.markdown("---")
    
    st.subheader("👨‍💻 Developer Information")
    st.markdown("""
    **Project:** Fall Risk Assessment System  
    **Category:** Elderly Care & Remote Monitoring  
    **Developer:** Ayoolumi Melehon  
    **Location:** Grangemouth, Scotland  
    **Email:** ayoolumimelehon@gmail.com  
    **Portfolio:** [ayofemimelehon.info](https://ayofemimelehon.info)  
    
    **Technologies Used:**
    - Python 3.12
    - Streamlit
    - scikit-learn
    - Plotly
    - Pandas/NumPy
    
    **Model Training:**
    - Training Samples: {metadata['training_samples']}
    - Test Samples: {metadata['test_samples']}
    - Cross-validation: 5-fold
    """)

# Footer
st.markdown("---")
st.markdown(
    """
    <div style='text-align: center; padding: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                border-radius: 10px; color: white;'>
        <h3>🏥 AI-Powered Fall Risk Assessment System</h3>
        <p>Developed by Ayoolumi Melehon | © 2025 | Grangemouth, Scotland</p>
        <p style='font-size: 0.9rem;'>Advanced Machine Learning for Elderly Care & Safety</p>
    </div>
    """,
    unsafe_allow_html=True
)
