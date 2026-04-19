import Nav from "./components/Nav";
import HeroCanvas from "./components/HeroCanvas";
import RevealObserver from "./components/RevealObserver";
import Ticker from "./components/Ticker";

export default function Home() {
  return (
    <>
      <Nav />
      <RevealObserver />

      {/* HERO */}
      <section id="hero">
        <HeroCanvas />
        <div className="hero-meta">
          <span>
            Data Engineer · Data Scientist · AI Systems · Los Angeles, CA
          </span>
          <span className="ucla-badge">
            <span className="ucla-dot" />
            UCLA Anderson
          </span>
        </div>
        <h1 className="hero-name">
          <span>SHREYANS</span>
          <em>SATPATHY</em>
        </h1>
        <div className="hero-bottom">
          <p className="hero-tagline">
            <strong>Architecting data platforms</strong> that power AI-driven
            systems and enable real-world business decisions at scale.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-solid">
              Get In Touch
            </a>
            <a href="#experience" className="btn">
              View My Work
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-label">01 — About</div>
        <h2 className="section-title reveal">Who I Am</h2>
        <div className="about-grid">
          <div>
            <p className="about-pull reveal reveal-delay-1">
              Bridging the gap between
              <br />
              <em>raw data</em> and
              <br />
              strategic, AI-enabled outcomes.
            </p>
            <div className="about-stats reveal reveal-delay-2">
              <div className="stat-card">
                <div className="num">$1.6M</div>
                <div className="label">Annual cost savings delivered</div>
              </div>
              <div className="stat-card">
                <div className="num">91%</div>
                <div className="label">ML clustering accuracy</div>
              </div>
              <div className="stat-card">
                <div className="num">40%</div>
                <div className="label">Reduction in claims lifecycle</div>
              </div>
              <div className="stat-card">
                <div className="num">20+</div>
                <div className="label">Data sources unified in lakehouse</div>
              </div>
            </div>
          </div>
          <div>
            <p className="about-bio reveal reveal-delay-2">
              <strong>Shreyans Satpathy</strong> is a data engineer specializing
              in building scalable data platforms that power AI-driven systems
              and decision-making. With experience at{" "}
              <strong>Mercedes-Benz</strong>, he has architected lakehouse
              solutions on Azure and Databricks to unify complex data ecosystems
              and enable real-world business impact.
              <br />
              <br />
              Currently pursuing a{" "}
              <strong>Master&apos;s in Business Analytics at UCLA Anderson</strong>,
              he focuses on bridging the gap between data engineering and
              strategic, AI-enabled outcomes. He is also actively working with{" "}
              <strong>UCLA Health</strong> on architecting data platforms for
              AI/ML medical devices and venture capital research.
            </p>
            <div className="about-edu reveal reveal-delay-3">
              <div className="edu-item">
                <div>
                  <div className="edu-school">
                    UCLA Anderson School of Management
                  </div>
                  <div className="edu-degree">
                    Master of Science, Business Analytics
                  </div>
                </div>
                <div className="edu-year">2025–2026</div>
              </div>
              <div className="edu-item">
                <div>
                  <div className="edu-school">
                    Vellore Institute of Technology
                  </div>
                  <div className="edu-degree">
                    B.Tech, Computer Science Engineering
                  </div>
                </div>
                <div className="edu-year">2019–2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-label">02 — Experience</div>
        <h2 className="section-title reveal">Where I&apos;ve Built</h2>
        <div className="exp-list">
          <div className="exp-card reveal">
            <div className="exp-left">
              <div className="exp-company">Mercedes-Benz R&amp;D</div>
              <div className="exp-period">AUG 2023 – AUG 2025</div>
              <div className="exp-location">Bengaluru, India</div>
            </div>
            <div className="exp-right">
              <div className="exp-role">Data Science Engineer</div>
              <ul className="exp-bullets">
                <li>
                  Architected <strong>FACTS</strong>, a unified field quality
                  analytics platform consolidating warranty data from 10+
                  sources into a single lakehouse, delivering{" "}
                  <strong>$1.6M in annual cost savings</strong> and reducing
                  claims lifecycle time by 40%.
                </li>
                <li>
                  Built a <strong>RAG-based Workshop Co-Pilot</strong> using
                  Databricks Vector Search, hybrid retrieval (semantic +
                  keyword), and Unity Catalog metadata filtering, enabling
                  technicians to query historical repair data in real-time.
                </li>
                <li>
                  Developed <strong>auto-clustering pipelines</strong> for
                  multilingual workshop claims using LLM-driven text
                  translation and fine-tuned BERT; achieved{" "}
                  <strong>91% clustering accuracy</strong> across 6 languages.
                </li>
                <li>
                  Implemented <strong>ML classification models</strong> on
                  warranty claims to auto-identify Top Issues and Severity
                  levels, enabling proactive quality containment and
                  prioritized root-cause investigation.
                </li>
                <li>
                  Designed <strong>A/B experiments</strong> benchmarking GenAI
                  vs. legacy rule-based systems for anomaly detection,
                  achieving 91% accuracy in identifying defect patterns and
                  fraud anomalies.
                </li>
                <li>
                  Engineered end-to-end <strong>Medallion Architecture</strong>{" "}
                  pipelines (Silver → Gold → Platinum) on Databricks + Azure
                  Data Factory, processing millions of warranty records with
                  optimized Spark jobs.
                </li>
              </ul>
              <div className="exp-tag-row">
                <span className="exp-tag">Databricks</span>
                <span className="exp-tag">Delta Lake</span>
                <span className="exp-tag">Azure ADF</span>
                <span className="exp-tag">RAG</span>
                <span className="exp-tag">BERT</span>
                <span className="exp-tag">PySpark</span>
                <span className="exp-tag">MLflow</span>
                <span className="exp-tag">Tableau</span>
              </div>
              <div className="sub-role">
                <div className="sub-role-title">
                  Also as: Data Engineering Intern (Jan–Aug 2023)
                </div>
                <ul className="exp-bullets">
                  <li>
                    Optimized data ingestion using parallelized API calls on
                    Spark, <strong>reducing pipeline runtime by 90%</strong>{" "}
                    for downstream ML models.
                  </li>
                  <li>
                    Built data quality validation frameworks catching logic and
                    schema issues pre-production;{" "}
                    <strong>reduced pipeline failure rates by 30%</strong>.
                  </li>
                  <li>
                    Re-architected semantic models with supplier analytics
                    teams, improving dashboard latency and data accuracy for
                    reporting layers.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="exp-card reveal reveal-delay-1">
            <div className="exp-left">
              <div className="exp-company">UCLA Biodesign &amp; BCG</div>
              <div className="exp-period">2025 – PRESENT</div>
              <div className="exp-location">Los Angeles, CA</div>
            </div>
            <div className="exp-right">
              <div className="exp-role">
                Graduate Student Researcher, Data Platforms
              </div>
              <ul className="exp-bullets">
                <li>
                  Conducting EDA on investment trends and operational costs,
                  identifying key correlations between funding stages and AI
                  adoption rates to support strategic recommendations.
                </li>
                <li>
                  Working part-time with <strong>UCLA Health</strong> to
                  architect a data platform consolidating use-cases around
                  AI/ML medical devices and venture capital funding research.
                </li>
              </ul>
              <div className="exp-tag-row">
                <span className="exp-tag">Data Platforms</span>
                <span className="exp-tag">GCP</span>
                <span className="exp-tag">Python</span>
                <span className="exp-tag">EDA</span>
                <span className="exp-tag">Forecasting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* STACK */}
      <section id="stack">
        <div className="section-label">03 — Stack</div>
        <h2 className="section-title reveal">Tools of the Trade</h2>
        <Ticker />

        <div className="cert-row reveal">
          <div className="cert-card">
            <div className="cert-icon">◈</div>
            <div className="cert-info">
              <div className="cert-name">
                Databricks Certified Data Engineer Professional
              </div>
              <div className="cert-issuer">Databricks · Professional</div>
            </div>
            <div className="cert-pill">Certified</div>
          </div>
          <div className="cert-card">
            <div className="cert-icon">◈</div>
            <div className="cert-info">
              <div className="cert-name">
                Databricks Certified Data Analyst Associate
              </div>
              <div className="cert-issuer">Databricks · Associate</div>
            </div>
            <div className="cert-pill">Certified</div>
          </div>
        </div>

        <div className="stack-grid">
          <div className="stack-cat reveal">
            <div className="stack-cat-name">Languages &amp; Platforms</div>
            <div className="stack-tags">
              <span className="stack-tag">Python</span>
              <span className="stack-tag">SQL</span>
              <span className="stack-tag">PySpark</span>
              <span className="stack-tag">Apache Spark</span>
              <span className="stack-tag">Databricks</span>
              <span className="stack-tag">
                Azure (ADF, Synapse, ADLS Gen2)
              </span>
              <span className="stack-tag">GCP</span>
              <span className="stack-tag">AWS</span>
            </div>
          </div>
          <div className="stack-cat reveal reveal-delay-1">
            <div className="stack-cat-name">Data Engineering</div>
            <div className="stack-tags">
              <span className="stack-tag">ETL / ELT</span>
              <span className="stack-tag">Apache Airflow</span>
              <span className="stack-tag">Kafka</span>
              <span className="stack-tag">Hadoop</span>
              <span className="stack-tag">Medallion Architecture</span>
              <span className="stack-tag">Data Lakehouse</span>
              <span className="stack-tag">Data Mesh</span>
              <span className="stack-tag">Delta Lake</span>
            </div>
          </div>
          <div className="stack-cat reveal reveal-delay-2">
            <div className="stack-cat-name">AI / ML</div>
            <div className="stack-tags">
              <span className="stack-tag">LLMs</span>
              <span className="stack-tag">RAG Pipelines</span>
              <span className="stack-tag">LangChain</span>
              <span className="stack-tag">Vector Search</span>
              <span className="stack-tag">BERT Fine-Tuning</span>
              <span className="stack-tag">Scikit-learn</span>
              <span className="stack-tag">MLflow</span>
              <span className="stack-tag">Forecasting</span>
            </div>
          </div>
          <div className="stack-cat reveal reveal-delay-3">
            <div className="stack-cat-name">Analytics &amp; Tools</div>
            <div className="stack-tags">
              <span className="stack-tag">Tableau</span>
              <span className="stack-tag">Power BI</span>
              <span className="stack-tag">A/B Testing</span>
              <span className="stack-tag">Experimentation</span>
              <span className="stack-tag">Git / CI/CD</span>
              <span className="stack-tag">REST APIs</span>
              <span className="stack-tag">Unity Catalog</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* BLOG */}
      <section id="blog">
        <div className="section-label">04 — Writing</div>
        <h2 className="section-title reveal">Thinking Out Loud</h2>
        <div className="blog-grid">
          {[
            "https://www.linkedin.com/embed/feed/update/urn:li:share:7414035193327489024?collapsed=1",
            "https://www.linkedin.com/embed/feed/update/urn:li:share:7402109010587324416?collapsed=1",
            "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7376895590602969088?collapsed=1",
          ].map((src, i) => (
            <div
              key={src}
              className={`blog-card reveal${
                i === 1 ? " reveal-delay-1" : i === 2 ? " reveal-delay-2" : ""
              }`}
            >
              <div className="blog-card-header">
                <span className="blog-card-dot" />
                <span className="blog-card-label">
                  LinkedIn · Shreyans Satpathy
                </span>
              </div>
              <div className="blog-card-body">
                <iframe
                  src={src}
                  allowFullScreen
                  scrolling="no"
                  title="Embedded LinkedIn post"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <div id="resume">
        <div className="reveal">
          <h2 className="resume-title">
            Want the
            <br />
            full picture?
          </h2>
          <p className="resume-sub">
            Download my resume for a complete overview of my experience,
            education, and technical skills.
          </p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="btn btn-solid reveal reveal-delay-2"
          style={{ fontSize: "0.85rem", padding: "1rem 2.5rem" }}
        >
          Download Resume →
        </a>
      </div>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-label">05 — Contact</div>
        <div className="contact-grid">
          <div>
            <h2 className="contact-big reveal">
              Let&apos;s
              <br />
              Build
              <br />
              <em>Together.</em>
            </h2>
            <p className="contact-sub reveal reveal-delay-1">
              Open to data engineering, data science and AI platform roles.
              Always happy to connect, collaborate, or just talk data.
            </p>
          </div>
          <div className="contact-links reveal reveal-delay-2">
            <a href="mailto:shreyans12@g.ucla.edu" className="contact-link">
              <div>
                <div className="contact-link-label">Email</div>
                <div className="contact-link-val">shreyans12@g.ucla.edu</div>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ssatpat/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div>
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-val">linkedin.com/in/ssatpat</div>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span>
          © 2026 <em>Shreyans Satpathy</em>
        </span>
        <span>
          Architecting Data Platforms for <em>AI</em> Systems
        </span>
      </footer>
    </>
  );
}
