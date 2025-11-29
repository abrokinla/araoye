import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Project } from "@/components/projects-section";

export const webDevProjects: Project[] = [
  {
    title: "Vibrafit",
    description: "A fitness application for personalized workout plans, progress tracking, and connecting with trainers.",
    image: PlaceHolderImages.find(p => p.id === 'web-dev-1')!,
    tags: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    sourceUrlFrontend: "https://github.com/abrokinla/vibrafit_frontend.git",
    sourceUrlBackend: "https://github.com/abrokinla/vibrafit.git",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Warehouse Inventory Management System",
    description: "A backend-focused system for managing warehouse inventory, featuring real-time tracking, reporting, task management, and an automated reorder scheduler.",
    image: PlaceHolderImages.find(p => p.id === 'web-dev-2')!,
    tags: ["Django", "HTML", "CSS", "JavaScript", "Redux", "Celery"],
    liveUrl: "#",
    sourceUrl: "https://github.com/abrokinla/souk-inventory-api.git",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const dataAnalysisProjects: Project[] = [
  {
    title: "SEO on Product Data using NLP",
    description: "Leveraged Natural Language Processing techniques in Python to analyze and optimize product data for search engines.",
    image: PlaceHolderImages.find(p => p.id === 'data-analysis-1')!,
    tags: ["Python", "NLP", "SEO", "Pandas"],
    insightsUrl: "https://drive.google.com/file/d/1vxKBlnBCGCr4wGR_SZGywddO5Bfa6C-v/view?usp=drive_link",
    sourceUrl: "https://github.com/abrokinla/seo_product_data_optimization.git",
  },
  {
    title: "Marketing Campaign Analysis",
    description: "Utilized SQL to query and analyze large datasets from marketing campaigns to measure ROI and customer engagement.",
    image: PlaceHolderImages.find(p => p.id === 'data-analysis-2')!,
    tags: ["SQL", "Data Analysis", "Marketing"],
    insightsUrl: "https://drive.google.com/file/d/1ap8MgV4op49K4sTpZ4oPTAtQhrlm9l1Q/view?usp=drive_link",
    sourceUrl: "https://github.com/abrokinla/marketing-campaign-sql.git",
  },
  {
    title: "EDA on Marketing Campaign",
    description: "Conducted Exploratory Data Analysis using Python to uncover trends and insights from marketing campaign data.",
    image: PlaceHolderImages.find(p => p.id === 'data-analysis-3')!,
    tags: ["Python", "EDA", "Matplotlib", "Seaborn", "DateUtil (Parser)"],
    insightsUrl: "https://docs.google.com/presentation/d/1xRZYrX2qMY2nbPpdKn6EisfpP1BZgLCG/edit?usp=sharing&ouid=110244683498875122035&rtpof=true&sd=true",
    sourceUrl: "https://github.com/abrokinla/eda_marketing_campaign_analysis_python.git",
  },
  {
    title: "NovaStores Supermarket Dashboard",
    description: "Cleaned, transformed, and modeled supermarket data using Power Query, then built an insightful Power BI dashboard to track sales and performance.",
    image: PlaceHolderImages.find(p => p.id === 'data-analysis-4')!,
    tags: ["Power BI", "Power Query", "Data Modeling"],
    insightsUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Marketing Sales Excel Dashboard",
    description: "Used Excel Power Query and Power Pivot for data cleaning, transformation, and modeling, creating a dynamic dashboard with Pivot Tables to visualize marketing and sales trends.",
    image: PlaceHolderImages.find(p => p.id === 'data-analysis-5')!,
    tags: ["Excel", "Power Query", "Power Pivot", "Pivot Tables", "Data Visualization"],
    insightsUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Adidas US Sales Analysis",
    description: "Developed a Power BI dashboard to analyze Adidas sales data in the US, leveraging Power Query for data cleaning and modeling.",
    image: PlaceHolderImages.find(p => p.id === 'data-analysis-6')!,
    tags: ["Power BI", "Power Query", "Sales Analysis"],
    insightsUrl: "#",
    sourceUrl: "#",
  },
];

export const dataScienceProjects: Project[] = [
  {
    title: "Credit Risk Assessment Model",
    description: "Developed a machine learning model to assess credit risk, helping financial institutions make more informed lending decisions.",
    image: PlaceHolderImages.find(p => p.id === 'data-science-1')!,
    tags: ["Python", "Scikit-learn", "Risk Analysis", "Finance"],
    liveUrl: "https://araoyecreditrisk.streamlit.app/",
    sourceUrl: "https://github.com/abrokinla/Credit_Risk_Assessment_Model.git",
  },
  {
    title: "Academic Risk Predictor",
    description: "Built a model using psychosocial factors to predict academic risk, enabling early intervention for students.",
    image: PlaceHolderImages.find(p => p.id === 'data-science-2')!,
    tags: ["Python", "Machine Learning", "Education"],
    liveUrl: "#",
    sourceUrl: "https://github.com/abrokinla/AcademicRiskPredictor.git",
  },
  {
    title: "Domain-Specific Chatbot API",
    description: "Created a conversational AI using Flask and OpenAI's API, trained on domain-specific data to provide expert answers.",
    image: PlaceHolderImages.find(p => p.id === 'data-science-3')!,
    tags: ["Flask", "OpenAI API", "NLTK", "Keras"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Mall Customer Segmentation",
    description: "Applied unsupervised learning techniques to segment mall customers based on their purchasing behavior, providing valuable marketing insights.",
    image: PlaceHolderImages.find(p => p.id === 'data-science-4')!,
    tags: ["Python", "Clustering", "Scikit-learn", "Marketing"],
    liveUrl: "#",
    sourceUrl: "#",
  },
];
