const TECH_ITEMS = [
  "Python",
  "PySpark",
  "Apache Spark",
  "Databricks",
  "Delta Lake",
  "Azure ADF",
  "Airflow",
  "Kafka",
  "LLMs",
  "RAG Pipelines",
  "LangChain",
  "Vector Search",
  "BERT",
  "MLflow",
  "Medallion Architecture",
  "SQL",
  "GCP",
  "AWS",
  "Tableau",
  "Power BI",
  "Unity Catalog",
  "Data Mesh",
];

export default function Ticker() {
  const items = [...TECH_ITEMS, ...TECH_ITEMS];
  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {items.map((t, i) => (
          <div key={i} className="ticker-item">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
