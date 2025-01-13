# VitalSync

By Team CodeSnorters

VitalSync is a *Real-Time Personalized Health Advisory System* designed to transform real-time health data into actionable, personalized recommendations. Leveraging the high-performance streaming capabilities of the *Pathway* framework, VitalSync integrates advanced *RAG (Retrieval-Augmented Generation)* pipelines and real-time data ingestion to revolutionize proactive healthcare.

---

## ✨ Features

- *Real-Time Data Processing*: Seamless ingestion and processing of real-time health data from multiple sources like wearables, fitness trackers, and external APIs.
- *Dynamic RAG Pipelines*: Enhanced recommendations through integration with up-to-date health guidelines and external knowledge.
- *Personalized Insights*: Generate individualized health recommendations that adapt to user metrics in near real-time.
- *User-Friendly Dashboard: Intuitive and responsive interface built with **React*, ensuring accessibility for all users.
- *Agentic Features *: Auto-prioritize alerts based on real time data.
- *Supports multiple devices*: Can be paired with multiple devices like Apple Watch, Fitbit Watch, Boat Ring, Oura Ring, Smart Apps like Fitbit App, Apple Smart App etc.  

---

## 🎥 Video Demonstration

Here’s a video walkthrough of VitalSync’s key features and functionalities:

<video controls>
  <source src="./packages/demonstration.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## 🛠️ Installation and Setup

### Prerequisites

Ensure the following tools are installed on your system:

- *Python 3.10* and *venv* (for non-Docker setup)

### Clone the Repository

bash
git clone https://github.com/AaryanNarayani/VitalSync.git
cd VitalSync


### Environment Variables

Create a .env file in the root directory and add the following configurations:

env
DATABASE_URL='postgres://dburl'
JWT_SECRET='jwtsecret'
// To send emails 
EMAIL_USER='server@gmail.com' 
EMAIL_PASSWORD='app_password'
// Google Oauth
CLIENT_URL="http://localhost:5173"
CLIENT_ID="google Oauth client ID"
CLIENT_SECRET="google Oauth client secret"


---
# Cloning and Setup Instructions

  

## Step 1: Clone the Repository

Run the following command to clone the repository:

```bash

git clone https://github.com/AaryanNarayani/Quarks.git

```

  

## Step 2: Navigate to the Desired Service

Choose the service you want to run and navigate to its directory:

```bash

cd app/{server} # For the backend server

cd app/{sim-client} # For the simulation client

cd app/{client} # For the web client

cd app/{mobile} # For the mobile client

```

  

## Step 3: Install Dependencies

Install the required dependencies for the selected service:

```bash

npm install

```

  

## Step 4: Run or Build the Service

- To run the service locally:

```bash

npm run dev

```

- To build the service for production:

```bash

npm run build

```

  

## Step 5: Additional Command for Mobile Service

If you are working with the mobile client, use the following command to run it on an Android emulator or device:

```bash

npm run android

```

---

## 📊 Data Sources

- *Wearables & Fitness Trackers*: Mock data (heart rate, steps, SpO₂, calories burned).
- *Fitness Tracking Apps*: Daily activity logs, exercise records, or sleep statistics.
- *External APIs*:
  - *Weather Data*: [OpenWeatherMap](https://openweathermap.org/)
  - *Air Quality*: [IQAir](https://www.iqair.com/)
  - *Nutrition Info*: [Edamam](https://developer.edamam.com/)

---

## 📊 Methodology

1. *Data Ingestion*:
   - Real-time ingestion of health metrics and external data using *Pathway*’s streaming pipelines.
   - Automated updates every 5 minutes for news and other APIs.

2. *RAG Pipeline*:
   - Uses Pathway’s *LLM-app* for dynamic retrieval and generation of health insights.
   - Incorporates knowledge from research papers, guidelines, and peer-reviewed publications.

3. *Personalization*:
   - Combines user metrics with RAG-based recommendations for actionable insights.
   - Adjusts recommendations in near real-time.

4. *Dashboard*:
   - Visualizes user data and recommendations on an interactive *React* interface.

---

## 🔠 Usage

1. *Connect Data Sources*:
   - Integrate wearables, fitness trackers, or upload mock datasets.

2. *Interactive Dashboard*:
   - View personalized health metrics and insights on the web interface.

3. *Agentic RAG (Optional)*:
   - Automate decision-making and recommendation strategies based on real-time events.

---

## 🎯 Deliverables

- *Prototype*: Real-time health advisory system with dynamic updates and personalized recommendations.
- *GitHub Repository*: Structured codebase with setup instructions.
- *Demo Video*: Showcase of live data ingestion and recommendations.
- *Presentation*: Overview of system architecture and real-world applications.

---

## 📚 Resources

- [Pathway Documentation](https://pathway.com/developers/user-guide/introduction/welcome)
- [OpenAI API](https://openai.com/api/)
- [Streamlit Documentation](https://docs.streamlit.io/)
- [Docker Guide](https://docs.docker.com/)

---

## 💡 Inspiration

VitalSync is built on the vision of making proactive healthcare accessible to all. By leveraging cutting-edge AI and real-time data processing, we aim to bridge the gap between health metrics and actionable insights.

---

## 📧 Contact

For queries or contributions, reach out to:

- *Email*: AaryanNarayani2004@gmail.com
- *GitHub*: https://github.com/AaryanNarayani/VitalSync
