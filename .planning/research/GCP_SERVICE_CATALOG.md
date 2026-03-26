# Google Cloud Platform Service Catalog

**Project:** Google Cloud Customer Engineer Preparation
**Researched:** 2026-03-26
**Overall Confidence:** HIGH — sourced from official Google Cloud documentation, official AWS-to-GCP comparison docs, and Google Cloud Next '25 announcements

---

## How to Use This Document

Each service entry includes:
- **What it does** — one-line description
- **When to use it** — decision trigger
- **AWS equivalent** — for faster mental mapping from existing AWS background
- **CE Priority** — P1 (must know deeply), P2 (solid working knowledge), P3 (conceptual awareness)

**Priority logic for CE role:**
- P1 = Appears in most enterprise customer conversations; you will demo, troubleshoot, or architect with it
- P2 = Commonly referenced in solution design; you need to explain it clearly and map it to customer problems
- P3 = Niche or advanced; awareness sufficient for CE interviews

---

## Category 1: Compute

The "what runs your code" layer. CEs spend significant time helping customers choose the right compute surface.

| Service | What It Does | When to Use It | AWS Equivalent | CE Priority |
|---------|-------------|----------------|----------------|-------------|
| **Compute Engine (GCE)** | IaaS virtual machines — Linux/Windows, custom machine types, GPUs/TPUs | Lift-and-shift migrations; workloads needing OS-level control; legacy enterprise apps | EC2 | P1 |
| **Google Kubernetes Engine (GKE)** | Managed Kubernetes — auto-upgrades, Autopilot mode, integrated with Google services | Containerized microservices; teams already on Docker/Kubernetes; stateful workloads needing orchestration | EKS | P1 |
| **Cloud Run** | Fully managed serverless container platform — scales to zero, pay per request | Stateless APIs, web services, event-driven microservices; no Kubernetes operational overhead needed | App Runner / Fargate | P1 |
| **Cloud Functions (Gen 2)** | Functions-as-a-Service — event-driven, single-purpose | Lightweight event triggers, glue code between services, webhooks, automation tasks | Lambda | P1 |
| **App Engine** | PaaS — deploy code, Google manages infrastructure, fast cold starts | Legacy App Engine apps; simple web apps; teams wanting zero infrastructure concern | Elastic Beanstalk | P2 |
| **Batch** | Managed batch job scheduling without managing clusters | Scientific computing, rendering, financial risk calculations, large-scale data processing | AWS Batch | P2 |
| **VMware Engine** | Run VMware workloads natively on Google Cloud hardware | Customers in active VMware migration preserving existing investments | VMware Cloud on AWS | P2 |
| **Bare Metal Solution** | Dedicated physical servers in Google Cloud facilities | Oracle/SAP workloads with strict licensing or latency requirements | EC2 Bare Metal | P2 |
| **Cloud TPU** | Google's custom ML accelerator chips (Ironwood = 7th gen, announced Cloud Next '25) | Large-scale ML model training; cost-effective GPU alternative for TensorFlow/JAX workloads | AWS Trainium / Inferentia | P2 |
| **AI Hypercomputer** | Supercomputer-style architecture combining TPUs, GPUs, and fast networking | Frontier model training; very large LLM inference workloads | No direct equivalent | P2 |

**CE Decision Framework — Compute:**
```
Need full OS control?           → Compute Engine
Need container orchestration?  → GKE (Autopilot for simplicity, Standard for control)
Stateless containers?          → Cloud Run (preferred modern default)
Short event-driven functions?  → Cloud Functions (Gen 2)
Code only, zero infra concern? → App Engine (legacy) or Cloud Run (modern)
```

---

## Category 2: Storage

The "where data lives" layer. Customers confuse storage types frequently — CEs clarify which surface fits which workload.

| Service | What It Does | When to Use It | AWS Equivalent | CE Priority |
|---------|-------------|----------------|----------------|-------------|
| **Cloud Storage** | Object storage — any file type, unlimited scale, multiple storage classes in one bucket | Backups, media, data lake, ML training data, static website hosting, archival | S3 | P1 |
| **Persistent Disk** | Block storage attached to VMs — standard HDD or SSD, zonal or regional | Boot disks, database volumes on Compute Engine VMs | EBS | P1 |
| **Hyperdisk** | High-performance block storage — higher IOPS/throughput than Persistent Disk, independently scalable | High-performance databases (Oracle, SQL Server), latency-sensitive workloads | EBS io2 Block Express | P2 |
| **Filestore** | Managed NFS file servers — shared POSIX file system for multiple VMs | Shared file storage for HPC clusters, media workflows, enterprise apps needing NFS | EFS | P2 |
| **Parallelstore** | High-throughput distributed parallel file system for AI/ML | Parallel training jobs needing fast shared storage; feeds GPUs/TPUs faster than NFS | FSx for Lustre | P2 |
| **Backup and DR Service** | Centralized backup management for GCP workloads | Enterprise backup policies, compliance, disaster recovery for VMs and databases | AWS Backup | P2 |

**Cloud Storage Classes — important for cost optimization conversations:**

| Class | Use Case | Min Storage Duration |
|-------|----------|---------------------|
| Standard | Frequently accessed data | None |
| Nearline | Access ~once/month | 30 days |
| Coldline | Access ~once/quarter | 90 days |
| Archive | Access ~once/year | 365 days |

> CE talking point: All classes live in the same bucket — no separate "Glacier" service. Lifecycle policies auto-transition objects. This is architecturally simpler than AWS.

---

## Category 3: Databases

GCP has the broadest managed database portfolio of any cloud. CEs must help customers select the right database for their workload type.

| Service | What It Does | When to Use It | AWS Equivalent | CE Priority |
|---------|-------------|----------------|----------------|-------------|
| **Cloud SQL** | Managed relational DB — MySQL, PostgreSQL, SQL Server | Standard OLTP; migrating from on-prem MySQL/PostgreSQL; enterprise apps with familiar SQL | RDS | P1 |
| **AlloyDB for PostgreSQL** | Fully managed PostgreSQL-compatible DB — 4x faster than standard PostgreSQL, columnar engine built in | High-performance PostgreSQL; analytics + OLTP hybrid (HTAP); AI applications with pgvector | Aurora PostgreSQL | P1 |
| **Cloud Spanner** | Globally distributed, horizontally scalable relational DB — ANSI SQL, 99.999% SLA, unlimited scale | Global financial transactions, gaming leaderboards, global inventory; workloads outgrowing single-region SQL | No direct equivalent (partial: Aurora Global) | P1 |
| **Firestore** | Serverless document-oriented NoSQL — real-time sync, offline support | Mobile and web apps, user profiles, real-time collaboration, event data | DynamoDB (partial) | P1 |
| **Bigtable** | Petabyte-scale, low-latency wide-column NoSQL | Time-series data, IoT sensors, AdTech, financial tick data; millions of reads/writes per second | DynamoDB (partial) | P2 |
| **Memorystore for Redis** | Fully managed Redis — in-memory cache and message broker | Session caching, real-time leaderboards, rate limiting, pub/sub | ElastiCache for Redis | P1 |
| **Memorystore for Valkey** | Managed Valkey (open-source Redis fork) | Same as Redis Memorystore; cost-optimized post-Redis license change | ElastiCache for Valkey | P2 |
| **Datastore** | Legacy NoSQL document DB (predecessor to Firestore) | Existing legacy apps; Firestore in Datastore mode for backwards compatibility | DynamoDB | P3 |

**CE Database Decision Framework:**
```
Need SQL + familiar tooling?           → Cloud SQL
Need SQL + extreme scale / global?     → Cloud Spanner
Need PostgreSQL + high performance?    → AlloyDB
Need document / mobile / web?          → Firestore
Need time-series / IoT / AdTech?       → Bigtable
Need in-memory cache?                  → Memorystore (Redis)
```

---

## Category 4: Networking

GCP's networking is architecturally differentiated from AWS. The global VPC is the headline differentiator. CEs explain these differences in nearly every enterprise architecture conversation.

| Service | What It Does | When to Use It | AWS Equivalent | CE Priority |
|---------|-------------|----------------|----------------|-------------|
| **Virtual Private Cloud (VPC)** | Software-defined private network — global by default, subnets are regional, one VPC spans all regions | Foundation for all GCP workloads; network isolation and segmentation | VPC (AWS is regional only) | P1 |
| **Cloud Load Balancing** | Global and regional load balancers — HTTP(S), TCP, UDP, SSL; all managed, no instances to run | Distribute traffic across backends; global anycast IP; integrates with CDN and Armor | ELB / ALB / NLB | P1 |
| **Cloud CDN** | Content delivery network on Google's own global edge | Serve static assets, reduce origin load, accelerate APIs globally | CloudFront | P1 |
| **Cloud DNS** | Managed authoritative DNS — programmable, 100% uptime SLA | DNS hosting for all GCP domains; public and private zones | Route 53 | P1 |
| **Cloud Armor** | DDoS protection and WAF — OWASP Top 10, adaptive protection, rate limiting | Protect public-facing applications; geographic restrictions; mitigate L3-L7 attacks | AWS Shield + WAF | P1 |
| **Cloud Interconnect** | Dedicated high-bandwidth link to GCP — Dedicated (10/100 Gbps) or Partner Interconnect | Enterprises migrating large datasets; latency-sensitive hybrid workloads | Direct Connect | P1 |
| **Cloud VPN** | Encrypted IPsec VPN tunnel over the internet to GCP | Secure connectivity for smaller deployments; supplement to Interconnect; remote offices | AWS VPN | P1 |
| **Network Connectivity Center** | Hub-and-spoke network connecting on-prem + cloud + edge | Complex hybrid/multi-cloud transit routing simplification | AWS Transit Gateway | P2 |
| **Cloud NAT** | Managed Network Address Translation — outbound internet without public IPs | VMs in private subnets needing internet egress (updates, APIs) | AWS NAT Gateway | P2 |
| **Cloud WAN** | Google's private global backbone made available to enterprises (announced Cloud Next '25) | Enterprise WAN replacement; ultra-low latency across continents | AWS Cloud WAN | P2 |
| **Private Service Connect** | Private connectivity to Google services within VPC | Keep Google API traffic off public internet; PCI/HIPAA compliance | AWS PrivateLink | P2 |
| **Shared VPC** | Share a single VPC across multiple GCP projects | Multi-team enterprise environments; centralized networking governance | AWS Resource Access Manager | P2 |
| **VPC Service Controls** | Security perimeter around GCP APIs — prevent data exfiltration | High-security environments, compliance, insider threat prevention | No direct equivalent | P2 |

**CE Networking Differentiator (mandatory talking point):**
> AWS VPCs are regional. GCP VPCs are global. A single GCP VPC spans all regions — no peering required. Subnets are regional within that global VPC. This eliminates multi-region VPC peering sprawl and simplifies enterprise network design significantly.

---

## Category 5: AI / Machine Learning

GCP's strongest competitive differentiation vs. AWS and Azure in 2025-2026. This is P1 for CE interviews — Google's AI leadership is the primary reason enterprises evaluate GCP.

| Service | What It Does | When to Use It | AWS Equivalent | CE Priority |
|---------|-------------|----------------|----------------|-------------|
| **Vertex AI** | Unified ML platform — train, deploy, monitor models; access 200+ foundation models including Gemini | End-to-end ML workflows; MLOps pipelines; fine-tuning foundation models; model serving at scale | SageMaker | P1 |
| **Gemini on Vertex AI** | Google's frontier multimodal LLM — Gemini 2.5 Pro / 2.5 Flash; text, code, image, audio, video | Enterprise LLM applications; RAG; chatbots; code generation; document understanding | Bedrock (Claude / Titan) | P1 |
| **Vertex AI Agent Builder** | Build enterprise AI agents — RAG search, conversational agents, multi-agent orchestration | Enterprise chatbots grounded in company data; document Q&A; customer service automation | Bedrock Agents | P1 |
| **Vertex AI Search** | AI-powered semantic search over enterprise data | Replace keyword search; document discovery; website search; ground agents in internal data | Amazon Kendra | P1 |
| **Vertex AI Studio** | Web UI to prompt, tune, and test Gemini models | Rapid prototyping; non-developer users; prompt engineering; model evaluation | Bedrock Playground | P1 |
| **Agentspace** | Enterprise AI agent hub — discover, create, and deploy AI agents across an organization | Enterprise-wide AI agent adoption; internal productivity; knowledge management | No direct equivalent | P1 |
| **Agent Development Kit (ADK)** | Open-source framework (Python, Java, Go) for building multi-agent systems — 7M+ downloads | Developers building sophisticated agentic workflows; agent-to-agent coordination via A2A protocol | Bedrock Agent SDK | P2 |
| **Vertex AI Agent Engine** | Managed runtime for deploying AI agents in production — sessions, memory bank, evaluation (GA 2025) | Productionizing agents with session management and long-term memory | No direct equivalent | P2 |
| **Vertex AI Pipelines** | Managed ML pipeline orchestration (Kubeflow-based) | Automated model retraining, feature engineering, batch inference pipelines | SageMaker Pipelines | P2 |
| **Vertex AI Feature Store** | Centralized feature management — online and offline serving | Consistent features across training and inference; reduce feature duplication | SageMaker Feature Store | P2 |
| **AutoML** | No-code/low-code model training — image, text, tabular, video | Business analysts training custom models; fast prototyping without ML expertise | SageMaker Autopilot | P2 |
| **Vision AI (Cloud Vision API)** | Pre-trained image recognition — OCR, object detection, face detection, label detection | Add vision capabilities without ML expertise; document digitization; content moderation | Rekognition | P2 |
| **Natural Language AI** | Pre-trained NLP — sentiment, entity recognition, content classification | Analyze customer feedback; classify documents; extract information from text | Comprehend | P2 |
| **Speech-to-Text** | Convert audio to text — 125+ languages, streaming and batch | Voice transcription, call center analytics, accessibility | Transcribe | P2 |
| **Text-to-Speech** | Convert text to natural-sounding audio — WaveNet, Neural2, Journey voices | Voice assistants, accessibility features, IVR systems | Polly | P2 |
| **Translation AI** | Neural machine translation — 100+ language pairs | Localization, multilingual customer support, document translation | Translate | P2 |
| **Document AI** | Extract structured data from documents — invoices, contracts, forms, identity documents | Accounts payable automation, KYC/compliance, loan processing | Textract | P2 |
| **Contact Center AI (CCAI)** | AI for call centers — virtual agents, agent assist, conversation analytics | Modernize contact centers; reduce handle time; improve agent productivity | Amazon Connect AI | P2 |
| **Imagen** | Text-to-image and image editing generative AI model | Image generation, creative tooling, product photography, marketing assets | Titan Image Generator | P2 |
| **Veo** | Video generation AI model | Marketing content generation, video production, creative workflows | Nova Reel | P2 |
| **Lyria** | Generative AI model for music creation (added to Vertex AI at Cloud Next '25) | Creative applications, background music generation | No direct equivalent | P3 |

**Google Cloud Next '25 AI Highlights (CE must know):**
- Gemini 2.5 Pro available in public preview on Vertex AI
- Gemini 2.5 Flash (low latency / cost-optimized) coming to Vertex AI
- Ironwood TPU (7th gen) — 5x peak compute, 6x HBM vs prior generation
- ADK downloaded 7M+ times; now supports Go in addition to Python and Java
- Agent Engine sessions and memory bank reached General Availability
- Managed MCP (Model Context Protocol) support coming to Pub/Sub and Looker
- 229 total announcements at Next '25 — most AI-dense Cloud Next ever

---

## Category 6: Security

Security questions appear in almost every enterprise architecture conversation. CE must be fluent in GCP's security model and differentiate it from AWS.

| Service | What It Does | When to Use It | AWS Equivalent | CE Priority |
|---------|-------------|----------------|----------------|-------------|
| **Identity and Access Management (IAM)** | Fine-grained access control — who can do what on which resource | Foundation of all GCP security; every deployment starts here | AWS IAM | P1 |
| **Cloud Audit Logs** | Immutable audit trail — admin activity, data access, system events, policy denied | Compliance, forensics, security investigations | CloudTrail | P1 |
| **Cloud KMS** | Managed encryption key management — software and HSM-backed keys | Encrypt data with customer-managed keys; CMEK compliance requirements | AWS KMS | P1 |
| **Secret Manager** | Store and access secrets — API keys, passwords, certificates with version control | Avoid hardcoded credentials; rotation automation; access auditing | Secrets Manager | P1 |
| **Security Command Center (SCC)** | Centralized security posture management — vulnerability detection, misconfiguration alerts, threat intelligence | Enterprise CSPM; compliance reporting; unified risk visibility | GuardDuty + Security Hub | P1 |
| **Cloud Armor** | DDoS protection and WAF at the edge — OWASP Top 10, adaptive DDoS, rate limiting | Protect public-facing apps; geographic restrictions; L3-L7 attack mitigation | AWS Shield + WAF | P1 |
| **VPC Service Controls** | Data exfiltration prevention via API perimeters | Regulated industries; prevent insider threats; data loss prevention | No direct AWS equivalent | P1 |
| **Identity-Aware Proxy (IAP)** | Context-aware access proxy — verify identity and device before granting access | Replace VPN for internal web apps; zero-trust access to GCP resources | AWS Verified Access | P2 |
| **Google Security Operations (Chronicle)** | Cloud-native SIEM + SOAR — AI-powered threat detection, investigation, response at petabyte scale | Enterprise SOC modernization; replace legacy SIEM; 2025 Gartner SIEM Leader | Security Lake + OpenSearch | P2 |
| **Google Unified Security** | Integrated platform combining threat intelligence, SIEM, cloud security, enterprise browsing (announced Next '25) | Single pane of glass for all enterprise security signals | No direct equivalent | P2 |
| **Assured Workloads** | Compliance controls for regulated industries — FedRAMP, HIPAA, ITAR, IL4/IL5 | Government, healthcare, financial services with strict regulatory requirements | AWS GovCloud / Outposts | P2 |
| **Binary Authorization** | Deploy-time container security — require signed images before deployment | Secure software supply chain; prevent unauthorized container deployments | No direct equivalent | P2 |
| **Workload Identity Federation** | Federate external identities to GCP without service account keys | CI/CD pipelines (GitHub Actions, etc.) accessing GCP; eliminate long-lived credentials | IAM Roles for Web Identity | P2 |
| **Certificate Authority Service** | Managed private CA — issue TLS certificates at scale | Enterprise PKI; mTLS for microservices; replace on-prem CA | AWS Private CA | P2 |
| **Access Transparency** | Logs of when Google staff access customer data | Regulated industries requiring cloud provider access visibility | No direct equivalent | P2 |

---

## Category 7: Data Analytics

GCP's data analytics stack is one of its clearest competitive advantages. BigQuery is frequently the #1 reason enterprises choose GCP over AWS.

| Service | What It Does | When to Use It | AWS Equivalent | CE Priority |
|---------|-------------|----------------|----------------|-------------|
| **BigQuery** | Serverless data warehouse — petabyte-scale SQL analytics, built-in ML, auto-scaling, no cluster management | Enterprise analytics, data lakehouse, ad-hoc analysis; any structured data analytics at scale | Redshift + Athena | P1 |
| **BigQuery ML** | Run ML models in BigQuery with SQL syntax | Data analysts doing ML without Python; fast prototyping on existing warehouse data | SageMaker + Redshift ML | P1 |
| **Looker** | Enterprise BI and semantic data modeling platform — LookML, governed metrics | Governed analytics, embedded dashboards, executive reporting, data democratization | QuickSight | P1 |
| **Looker Studio** | Free self-service data visualization (formerly Data Studio) | Quick dashboards, report sharing, marketing analytics; non-technical users | QuickSight (free tier) | P1 |
| **Pub/Sub** | Fully managed message queue and event streaming — at-least-once delivery, global scale | Event ingestion, microservice decoupling, IoT data streams, real-time analytics pipelines | SNS + SQS / Kinesis | P1 |
| **Dataflow** | Serverless Apache Beam stream and batch processing | ETL pipelines, real-time streaming analytics, data transformation before landing in BigQuery | Kinesis Data Analytics / Glue ETL | P1 |
| **Dataproc** | Managed Hadoop/Spark/Flink/Presto clusters | Existing Spark/Hadoop workloads; lift-and-shift from on-prem Hadoop | EMR | P2 |
| **Dataproc Serverless** | Run Spark jobs without managing clusters — now native in BigQuery (GA 2025) | Same as Dataproc but zero infrastructure management; pay per job | EMR Serverless | P2 |
| **Cloud Data Fusion** | Managed ETL platform — visual pipeline builder, 150+ connectors | Non-technical data engineers; enterprise ETL migrations from Informatica/Talend | Glue Studio | P2 |
| **Dataplex** | Intelligent data fabric — unified governance, data quality, data lineage across lakes and warehouses | Data mesh architectures; centralized data governance across multiple storage systems | AWS Lake Formation | P2 |
| **Cloud Composer** | Managed Apache Airflow — workflow orchestration | Complex multi-step data pipelines; scheduling ML training runs; dependency management | MWAA (Managed Airflow) | P2 |
| **Dataform** | SQL-based data transformation in BigQuery — dbt-equivalent, native to BigQuery | Data transformation, testing, and documentation within BigQuery | Glue (partial) | P2 |
| **Analytics Hub** | Data exchange — publish and subscribe to analytics datasets across organizations | Monetize data, share datasets, public data marketplace | AWS Data Exchange | P3 |

**BigQuery CE Talking Points:**
1. Serverless — no clusters to provision or manage; pay for bytes scanned
2. Separation of compute and storage — scale each independently
3. Built-in ML — run TensorFlow/XGBoost models from SQL
4. BigQuery Omni — query data in AWS S3 or Azure Blob Storage without moving it
5. Real-time ingestion — direct Pub/Sub-to-BigQuery subscription with no code
6. Managed disaster recovery is now GA with continuous near-real-time replication

---

## Category 8: DevOps / CI-CD / Developer Tools

| Service | What It Does | When to Use It | AWS Equivalent | CE Priority |
|---------|-------------|----------------|----------------|-------------|
| **Cloud Build** | Serverless CI/CD — build, test, deploy on push trigger | All CI/CD pipelines on GCP; integrates with GitHub, Bitbucket, Cloud Source Repositories | CodeBuild | P1 |
| **Artifact Registry** | Universal artifact storage — Docker images, Maven, npm, Python packages, Helm charts | Store and manage all build artifacts; replaced Container Registry | ECR + CodeArtifact | P1 |
| **gcloud CLI** | Primary command-line interface for all GCP services | All scripted automation, IaC scripting, administrative tasks | AWS CLI | P1 |
| **Cloud Shell** | Browser-based terminal — persistent 5 GB home directory, gcloud pre-installed | Quick GCP management without local setup; demos; labs; interview prep | CloudShell | P1 |
| **Terraform on GCP** | HashiCorp Terraform GCP provider — industry-standard IaC | Enterprise IaC standard for GCP; used in virtually all production GCP deployments | CloudFormation / Terraform on AWS | P1 |
| **Cloud Deploy** | Managed continuous delivery to GKE, Cloud Run, GCE with progressive rollout | Canary and blue/green deployments; GitOps delivery pipelines | CodeDeploy | P2 |
| **Cloud Source Repositories** | Private Git hosting on GCP | Mirror GitHub/Bitbucket; simple internal repos | CodeCommit | P2 |
| **Cloud Trace** | Distributed tracing across microservices | Latency analysis; find bottlenecks in distributed systems | AWS X-Ray | P2 |
| **Cloud Profiler** | Continuous production profiling — CPU, memory, heap with low overhead | Performance optimization in production | CodeGuru Profiler | P2 |
| **Error Reporting** | Automatically detect, deduplicate, and group application errors | Monitor application health; alert on new error types | CloudWatch + X-Ray | P2 |
| **Deployment Manager** | Google's native IaC using YAML/Jinja/Python templates | Legacy GCP-native IaC; Terraform is preferred for new projects | CloudFormation | P3 |

---

## Category 9: Serverless / Application Platform

| Service | What It Does | When to Use It | AWS Equivalent | CE Priority |
|---------|-------------|----------------|----------------|-------------|
| **Cloud Run** | Fully managed serverless container platform — auto-scale to zero, per-request billing | Modern primary serverless choice for containerized workloads; APIs, web apps, event processing | App Runner / Fargate | P1 |
| **Cloud Run Jobs** | Run containerized batch jobs to completion — not for serving requests | Data processing, nightly batch jobs, ML batch inference | AWS Batch / Fargate Tasks | P1 |
| **Cloud Functions (Gen 2)** | Event-driven serverless functions — built on Cloud Run under the hood | Short-lived triggers, lightweight event handlers, integrations | Lambda | P1 |
| **Workflows** | Serverless workflow orchestration — call APIs, branch, retry, pass state | Orchestrate sequences of GCP services; replace glue code; business process automation | Step Functions | P2 |
| **Eventarc** | Event routing — trigger serverless workloads from GCP service events or custom sources | Route Audit Log events, Pub/Sub messages, HTTP events to Cloud Run or Workflows | EventBridge | P2 |
| **App Engine Standard** | Fully managed PaaS — language runtimes managed by Google, fast cold starts | Existing App Engine apps; simple web apps with unpredictable traffic | Elastic Beanstalk | P2 |
| **App Engine Flexible** | PaaS with custom Docker containers — more control than Standard | Custom runtimes; long-running background tasks; less cold start sensitivity | Elastic Beanstalk | P2 |
| **Apigee** | Full-featured enterprise API management — API monetization, developer portal, analytics | Large enterprise API programs; API monetization; advanced traffic management | API Gateway + custom tooling | P2 |
| **API Gateway** | Lightweight managed API gateway for Cloud Functions and Cloud Run | Expose backend services as managed APIs; auth, rate limiting, monitoring for smaller deployments | API Gateway | P2 |
| **Firebase** | Mobile and web app backend platform — auth, database, hosting, functions, analytics | Mobile app backends, web apps, rapid prototyping; integrates with GCP services | Amplify | P2 |

---

## Category 10: Management, Monitoring, and Governance

| Service | What It Does | When to Use It | AWS Equivalent | CE Priority |
|---------|-------------|----------------|----------------|-------------|
| **Cloud Monitoring** | Metrics, dashboards, and alerting across GCP and hybrid workloads | Monitor all GCP services; custom dashboards; threshold alerts | CloudWatch Metrics | P1 |
| **Cloud Logging** | Centralized log management — auto-collects from GCP services, Log Analytics for SQL queries over logs | Debugging, audit, compliance, log-based metrics | CloudWatch Logs | P1 |
| **Cloud Audit Logs** | Admin Activity, Data Access, System Event, and Policy Denied logs — immutable | Compliance, forensics, change tracking | CloudTrail | P1 |
| **Cloud Billing** | Cost management — budgets, alerts, export to BigQuery for deep analysis | Cost optimization conversations; showback/chargeback for enterprises | AWS Cost Explorer + Budgets | P1 |
| **Resource Manager** | Org > Folder > Project hierarchy — policy inheritance, IAM at scale | Enterprise governance; organize resources by team/environment/business unit | AWS Organizations | P1 |
| **Operations Suite (formerly Stackdriver)** | Unified observability — Monitoring + Logging + Trace + Profiler + Error Reporting | Full observability stack for any GCP or hybrid workload | CloudWatch suite | P1 |
| **Cloud Asset Inventory** | Inventory of all GCP resources across an organization | Security audits, compliance scans, cost analysis, drift detection | AWS Config | P2 |
| **Recommender** | AI-powered recommendations — right-size VMs, idle resources, security findings | Cost optimization; identify wasted spend | Trusted Advisor + Compute Optimizer | P2 |
| **Policy Intelligence** | Recommendations for IAM policies and firewall rules — identify over-permissioning | Least-privilege enforcement; security posture improvement | IAM Access Analyzer | P2 |

---

## Priority Learning Order for CE Role

Based on frequency in enterprise customer conversations and CE interview emphasis:

### Tier 1 — Master First (ACE Exam Core, Weeks 1-4)
1. **IAM + Resource Manager** — Every GCP conversation touches access control and project hierarchy
2. **Compute Engine + GKE + Cloud Run** — Compute decision framework is asked in every architecture discussion
3. **Cloud Storage** — Foundation of data architecture; needed by nearly every other service
4. **Cloud SQL + Spanner** — Most common database questions; Spanner is a unique GCP differentiator
5. **VPC + Cloud Load Balancing + Cloud DNS + Cloud Armor** — Networking basics for enterprise
6. **BigQuery** — Google's strongest data differentiator; comes up in nearly every data conversation
7. **Pub/Sub + Dataflow** — Backbone of event-driven and real-time analytics architectures
8. **Cloud Monitoring + Cloud Logging + Cloud Audit Logs** — Observability and compliance baseline

### Tier 2 — Build Depth (CE Differentiation, Weeks 5-8)
9. **Vertex AI + Gemini on Vertex AI** — AI/ML is the #1 CE differentiator in 2025-2026
10. **Vertex AI Agent Builder + Agentspace** — Fastest-growing enterprise AI use case right now
11. **AlloyDB** — High-performance PostgreSQL; increasingly common in enterprise migrations
12. **Cloud Armor + Security Command Center + VPC Service Controls** — Enterprise security conversations
13. **Cloud Interconnect + Cloud VPN** — Hybrid connectivity for enterprise migrations
14. **Looker** — BI/analytics conversations with data teams
15. **Cloud Build + Artifact Registry + Cloud Deploy** — DevOps/IaC conversations
16. **Secret Manager + Cloud KMS** — Security conversations with compliance-conscious customers

### Tier 3 — Round Out Knowledge (Weeks 9-12)
17. **Bigtable + Firestore + Memorystore** — Database portfolio completeness
18. **Document AI + Vision AI + NLP APIs** — Pre-built AI use cases for non-ML customers
19. **Dataproc + Cloud Composer** — Data engineering conversations with Spark/Airflow teams
20. **Apigee** — API management for enterprise customers with API programs
21. **Google Security Operations (Chronicle)** — Security-focused enterprise customers
22. **VMware Engine** — Migration customers coming from VMware environments
23. **Cloud WAN + Network Connectivity Center** — Advanced networking for large enterprises

---

## AWS-to-GCP Quick Reference Cheat Sheet

| Category | AWS Service | GCP Equivalent | Key Difference |
|----------|-------------|----------------|----------------|
| Virtual Machines | EC2 | Compute Engine | GCP allows custom CPU/RAM combinations; no predefined sizes required |
| Kubernetes | EKS | GKE | GKE invented Kubernetes; Autopilot mode eliminates node management |
| Serverless Containers | Fargate / App Runner | Cloud Run | Cloud Run scales to zero; more feature-rich than App Runner |
| Serverless Functions | Lambda | Cloud Functions Gen 2 | GCP Gen 2 runs on Cloud Run; similar capabilities |
| PaaS | Elastic Beanstalk | App Engine | App Engine predates AWS; Cloud Run is the modern choice |
| Object Storage | S3 | Cloud Storage | GCP has one bucket with multiple storage classes; no separate Glacier |
| Block Storage | EBS | Persistent Disk / Hyperdisk | Hyperdisk is GCP's high-performance tier |
| File Storage | EFS | Filestore | Both POSIX-compliant managed NFS |
| HPC File Storage | FSx for Lustre | Parallelstore | Both for AI/ML training data parallel access |
| Managed SQL | RDS | Cloud SQL | Both support MySQL, PostgreSQL, SQL Server |
| High-Perf PostgreSQL | Aurora | AlloyDB | AlloyDB claims 4x faster than standard PostgreSQL |
| Global Relational DB | Aurora Global (async) | Cloud Spanner | Spanner is truly globally consistent with synchronous replication |
| Document NoSQL | DynamoDB | Firestore | Firestore = document-oriented; stronger mobile/web SDK support |
| Wide-Column NoSQL | DynamoDB | Bigtable | Bigtable optimized for time-series and IoT; different data model |
| In-Memory Cache | ElastiCache | Memorystore | Both Redis-compatible managed services |
| Data Warehouse | Redshift | BigQuery | BigQuery is serverless; Redshift requires cluster provisioning |
| Message Queue | SQS / SNS | Pub/Sub | Pub/Sub combines both; global, ordered delivery option available |
| Stream Processing | Kinesis Data Analytics | Dataflow | Dataflow uses Apache Beam; unified stream + batch API |
| Managed Spark | EMR | Dataproc | Both managed; Dataproc Serverless now native in BigQuery |
| ETL Visual Tool | Glue Studio | Cloud Data Fusion | Both visual ETL; Data Fusion has 150+ connectors |
| BI / Dashboards | QuickSight | Looker + Looker Studio | Looker has LookML semantic layer; more enterprise-grade |
| AI Platform | SageMaker | Vertex AI | Vertex AI has first-party Gemini; deeper foundation model integration |
| Foundation Models | Bedrock (third-party) | Vertex AI Model Garden | GCP has Gemini as Google's own model; AWS uses third-party models |
| AI Agents | Bedrock Agents | Vertex AI Agent Builder | Both launched 2024; Google's ADK is open source with 7M+ downloads |
| DNS | Route 53 | Cloud DNS | Both managed authoritative DNS |
| CDN | CloudFront | Cloud CDN | Cloud CDN runs on Google's own global network; integrated with LB |
| Load Balancer | ALB / NLB / ELB | Cloud Load Balancing | GCP offers global anycast LB natively; single global IP for all regions |
| DDoS + WAF | Shield + WAF | Cloud Armor | Cloud Armor integrated with LB; adaptive DDoS protection |
| Dedicated Network | Direct Connect | Cloud Interconnect | Both 1/10/100 Gbps options |
| VPN | AWS VPN | Cloud VPN | Similar IPsec VPN; both HA options |
| Private Endpoints | PrivateLink | Private Service Connect | Similar private API access within VPC |
| Network Hub | Transit Gateway | Network Connectivity Center | Both hub-and-spoke multi-VPC models |
| IAM | AWS IAM | Cloud IAM | GCP IAM has finer-grained resource-level control; Org Policy adds hierarchy |
| Key Management | AWS KMS | Cloud KMS | Both support CMEK; GCP has HSM option (Cloud HSM) |
| Secrets | Secrets Manager | Secret Manager | Nearly identical; both support rotation |
| SIEM | Security Lake + OpenSearch | Google Security Operations | Chronicle is purpose-built on Google's infrastructure; Gartner Leader 2025 |
| CSPM | Security Hub | Security Command Center | SCC integrates Google's threat intelligence directly |
| CI Build | CodeBuild | Cloud Build | Both serverless; Cloud Build integrates natively with GCP IAM |
| Artifact Storage | ECR + CodeArtifact | Artifact Registry | Artifact Registry is universal across all artifact types |
| IaC (Native) | CloudFormation | Deployment Manager | Both superseded by Terraform in enterprise practice |
| IaC (Industry) | Terraform AWS Provider | Terraform GCP Provider | Terraform is the de facto standard for both |
| Monitoring | CloudWatch | Cloud Monitoring | Both full-featured; GCP has built-in Kubernetes metrics |
| Logging | CloudWatch Logs | Cloud Logging | Both centralized; Cloud Logging has Log Analytics (SQL over logs) |
| Audit Trail | CloudTrail | Cloud Audit Logs | Both immutable; GCP has Access Transparency for Google staff access |
| Cost Management | Cost Explorer + Budgets | Cloud Billing + Recommender | GCP exports billing to BigQuery; richer custom analysis |
| Org Governance | AWS Organizations | Resource Manager | GCP uses Org > Folder > Project; cleaner hierarchy |

---

## Sources

- [Google Cloud Products Official Catalog](https://cloud.google.com/products)
- [AWS, Azure, and GCP Service Comparison — Official Google Docs](https://docs.cloud.google.com/docs/get-started/aws-azure-gcp-service-comparison)
- [Associate Cloud Engineer Certification Guide](https://cloud.google.com/learn/certification/cloud-engineer)
- [Google Cloud Next 2025 Wrap-Up Blog](https://cloud.google.com/blog/topics/google-cloud-next/google-cloud-next-2025-wrap-up)
- [5 Key AI Announcements from Google Cloud Next 2025](https://sada.com/blog/5-key-ai-announcements-from-google-cloud-next-2025/)
- [Vertex AI Agent Builder Overview](https://docs.cloud.google.com/agent-builder/overview)
- [When to Use GKE vs Cloud Run — Google Cloud Blog](https://cloud.google.com/blog/products/containers-kubernetes/when-to-use-google-kubernetes-engine-vs-cloud-run-for-containers)
- [Google Security Operations SIEM Overview](https://docs.cloud.google.com/chronicle/docs/overview)
- [BigQuery Analytics Overview](https://docs.cloud.google.com/bigquery/docs/query-overview)
- [How to Map AWS Services to GCP Equivalents](https://oneuptime.com/blog/post/2026-02-17-how-to-map-aws-services-to-gcp-equivalents-during-cloud-migration/view)
