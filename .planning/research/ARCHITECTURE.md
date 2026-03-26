# Architecture: GCP ACE + CE Interview Study Path

**Domain:** Cloud Certification + Pre-Sales Technical Role Preparation
**Researched:** 2026-03-26
**Overall Confidence:** HIGH (official Google sources + community verification)

---

## Study Path Architecture Overview

The preparation splits into two parallel tracks that share a common foundation:

```
FOUNDATION (Weeks 1-4)
  GCP Core Services + IAM + Networking + gcloud CLI
        |
        v
ACE TRACK (Weeks 5-12)          CE TRACK (Weeks 5-24)
  Exam-format drilling            Solution design + AI/ML
  Practice tests                  Customer scenario practice
  Hands-on labs                   Whiteboard presentations
        |                               |
        v                               v
  ACE EXAM (June 2026)       CE APPLICATION (Sept 2026)
```

The two tracks are NOT sequential — ACE preparation IS CE preparation. Every lab, every Qwiklabs badge, every architecture diagram built for ACE reinforces CE interview readiness.

---

## Phase 1: Foundation — GCP Fundamentals (Weeks 1-4, March-April 2026)

### Goal
Build mental model of GCP from an AWS practitioner's perspective. Learn the vocabulary, hierarchy, and service landscape before drilling exam topics.

### Learning Order (dependencies matter)

```
1. GCP Resource Hierarchy (Org → Folder → Project → Resource)
   └── Dependency: everything else assumes you understand this
2. IAM (roles, policies, service accounts)
   └── Dependency: Compute, Networking, Storage all gate on IAM
3. VPC Networking (subnets, firewall rules, routing)
   └── Dependency: Compute instances live inside VPCs
4. Compute Engine (VMs, instance groups, autoscaling)
   └── Dependency: Most solution architectures start here
5. Cloud Storage (buckets, object lifecycle, access control)
   └── Dependency: Used by almost every other service
6. Cloud SQL + basic BigQuery
   └── Dependency: Storage layer for most app architectures
```

### AWS-to-GCP Translation Map (leverage existing knowledge)

| AWS Service | GCP Equivalent | Key Differences |
|-------------|---------------|-----------------|
| EC2 | Compute Engine | GCP has Spot VMs (not Spot Instances), live migration |
| S3 | Cloud Storage | Storage classes: Standard, Nearline, Coldline, Archive |
| RDS | Cloud SQL | Also: AlloyDB (Postgres-compatible, AI-optimized) |
| DynamoDB | Firestore / Bigtable | Firestore=doc store, Bigtable=wide-column at scale |
| Lambda | Cloud Functions / Cloud Run | Cloud Run is container-native, serverless |
| EKS | GKE (Google Kubernetes Engine) | Autopilot mode simplifies ops |
| SQS/SNS | Pub/Sub | Unified push/pull messaging |
| CloudFormation | Terraform / Config Connector | Google recommends Terraform |
| CloudWatch | Cloud Monitoring + Cloud Logging | Ops Agent replaces legacy agents |
| IAM | Cloud IAM | GCP uses resource hierarchy inheritance |
| Route53 | Cloud DNS | Similar |
| CloudFront | Cloud CDN | Similar |
| Direct Connect | Cloud Interconnect | Dedicated + Partner options |
| VPN Gateway | Cloud VPN | HA VPN (99.99% SLA) preferred |

### Primary Resources — Phase 1

1. **Google Cloud Skills Boost: Cloud Engineer Learning Path**
   - URL: https://www.cloudskillsboost.google/paths/11
   - Format: Free with credits; courses + Qwiklabs labs
   - Start here — official, current, aligned to ACE exam

2. **"Google Cloud Fundamentals: Core Infrastructure" (Coursera/Skills Boost)**
   - Part of the Cloud Engineer path
   - ~8 hours; covers hierarchy, IAM, compute, storage, networking

3. **AWS-to-GCP Service Mapping Reference**
   - URL: https://github.com/milanm/Cloud-Product-Mapping
   - Use as quick lookup, not primary study material

### Milestone: End of Week 4
- [ ] Can explain GCP resource hierarchy without notes
- [ ] Can configure IAM roles and service accounts via gcloud CLI
- [ ] Can create VPC, subnets, firewall rules from scratch
- [ ] Completed "Google Cloud Fundamentals: Core Infrastructure" course

---

## Phase 2: ACE Exam Preparation — Deep Dive (Weeks 5-10, April-May 2026)

### Goal
Cover all five ACE exam sections at exam depth. Mix video instruction, Qwiklabs hands-on, and practice questions in rotation.

### ACE Exam Section Breakdown (official weights)

| Section | Weight | Key Topics |
|---------|--------|-----------|
| 1. Setting up cloud solution environment | ~20% | Billing, IAM, org policies, quotas, APIs |
| 2. Planning and configuring a cloud solution | ~17.5% | Compute/storage/network selection decisions |
| 3. Deploying and implementing a cloud solution | ~25% | GKE, Cloud Run, Terraform, VPC peering, Cloud SQL |
| 4. Ensuring successful operation | ~20% | Monitoring, logging, autoscaling, snapshots, GKE ops |
| 5. Configuring access and security | ~17.5% | IAM policies, service accounts, custom roles |

Section 3 (Deploying) has the highest weight — prioritize hands-on labs here.

### Study Rotation Per Week

```
Monday/Tuesday:    Video lecture on 1-2 topics (Udemy or Skills Boost)
Wednesday/Thursday: Qwiklabs hands-on labs for same topics
Friday:            Practice questions on that week's topics (50-60 Qs)
Weekend:           Review weak areas + document learnings
```

### Primary Resources — Phase 2

1. **Udemy: "Google Certified Associate Cloud Engineer 2025"**
   - URL: https://www.udemy.com/course/google-cloud-associate-cloud-engineer-certification/
   - Highest enrollment on Udemy (400,000+ students), regularly updated
   - Buy during a Udemy sale (~$15-20); do NOT pay full price
   - 250+ lectures, 16+ hours, demo-heavy

2. **Google Cloud Skills Boost (Qwiklabs)**
   - URL: https://www.cloudskillsboost.google/paths/11
   - Complete the full Cloud Engineer learning path
   - Focus on skill badges: each badge = exam-relevant lab cluster
   - Use free monthly credits or buy a subscription ($29/month)

3. **"Preparing for Your Associate Cloud Engineer Journey" (official course)**
   - URL: https://www.skills.google/course_templates/77
   - Google's own exam-prep course — use in final 2 weeks before exam

4. **ExamTopics: Associate Cloud Engineer**
   - URL: https://www.examtopics.com/exams/google/associate-cloud-engineer/
   - Free access to 186 real community-reported questions
   - Read the discussion threads — they explain why wrong answers are wrong
   - Caution: some answers in the community are disputed; verify against docs

5. **Whizlabs: GCP ACE Practice Tests**
   - URL: https://www.whizlabs.com/blog/gcp-associate-cloud-engineer-exam-questions/
   - 50 free questions; paid option for full sets
   - Strong explanation quality per community feedback

6. **Udemy Practice Exams: "GCP ACE 2025 Practice Exams - 1500 Qs"**
   - URL: https://www.udemy.com/course/gcp-associate-cloud-engineer-2025-practice-exams-1500-qs/
   - Use in weeks 9-10 for high-volume drilling

### gcloud CLI Proficiency Targets (exam requires CLI knowledge)

```bash
# Must be fluent with these patterns:
gcloud compute instances create / describe / list
gcloud container clusters create / get-credentials / delete
gcloud iam roles create / copy / describe
gcloud projects add-iam-policy-binding
gcloud storage buckets create / cp / lifecycle
gcloud sql instances create / export
gcloud monitoring alerts create
gcloud logging read / sinks create
kubectl get pods / services / deployments
kubectl apply -f manifest.yaml
terraform init / plan / apply
```

### Milestone: End of Week 8
- [ ] Completed full Cloud Engineer learning path on Skills Boost
- [ ] Scoring 70%+ on practice exams consistently
- [ ] Can deploy a 3-tier web app on GCP from memory (VM + Cloud SQL + Load Balancer)
- [ ] Understand every IAM concept in Section 5

---

## Phase 3: ACE Exam Final Sprint (Weeks 11-12, May-June 2026)

### Goal
Identify and close remaining weak spots. Simulate exam conditions. Book and pass the exam.

### Final Sprint Protocol

```
Week 11:
  - Full practice exam (50 Qs, timed, no notes): target 80%+
  - Review every missed question with official docs
  - Focus on weakest section from practice results
  - Complete "Preparing for Your Associate Cloud Engineer Journey" course

Week 12:
  - Two more timed full practice exams (aim for 85%+)
  - Read official ACE exam guide one final time:
    https://cloud.google.com/learn/certification/guides/cloud-engineer/
  - No new topics — reinforce and consolidate only
  - Book exam at: https://webassessor.com/googlecloud ($200 USD)
```

### Exam Logistics
- Format: 50-60 multiple choice questions, 2 hours
- Passing score: ~70-75% (aim for 80%+ on practice before booking)
- Remote proctored or in-person at test center
- Results: immediate pass/fail; certificate in ~7 days
- Target exam date: First two weeks of June 2026

### Milestone: ACE Certification Passed (June 2026)
- [ ] ACE certificate received
- [ ] Add to LinkedIn and resume immediately
- [ ] Begin documenting GCP project for CE portfolio

---

## Phase 4: CE Interview Preparation — Technical Depth (Weeks 13-20, July-August 2026)

### Goal
Elevate from "exam knowledge" to "customer-facing solution expertise." The CE interview tests ability to design architectures, explain tradeoffs, and handle customer objections — not just recall facts.

### CE Interview Structure (verified from Glassdoor + community sources)

The Google Cloud CE interview typically has 4-5 rounds:

| Round | Format | What It Tests |
|-------|--------|--------------|
| 1. Recruiter screen | 30 min phone | Background fit, role understanding |
| 2. Technical round | 60 min | GCP service knowledge, architecture questions |
| 3. Consultation round | 60 min | Case-study scenarios, customer problem-solving |
| 4. Presentation round | 60 min | 7-slide technical solution presentation + Q&A |
| 5. Behavioral / Googliness | 45 min | Leadership, collaboration, customer empathy |

The presentation round is the most differentiating — prepare a real solution you designed or a simulated CE scenario.

### GCP AI/ML Deep Dive (CE differentiator — not on ACE exam)

CE candidates in 2026 must be fluent in Google's AI stack. This is the primary differentiator from a generic cloud engineer.

```
Study order for AI/ML:
1. Gemini models (1.5 Pro, 2.0 Flash, 2.5 Pro) — what each is optimized for
2. Vertex AI platform — model training, fine-tuning, deployment
3. Vertex AI Agent Builder — build RAG apps, no-code agent creation
4. Agent Development Kit (ADK) — open-source agent framework (announced Next '25)
5. Agent2Agent (A2A) protocol — multi-agent collaboration standard
6. BigQuery ML — SQL-native ML for data engineers
7. Document AI — document understanding/extraction
8. Looker + Data Studio — BI and visualization layer
```

Key Google Cloud Next '25 announcements to know:
- Gemini 2.5 Pro/Flash on Vertex AI (thinking models, low latency)
- Ironwood TPU (7th gen, 5x compute, inference-optimized)
- ADK (Agent Development Kit) — open-source, Google-backed
- A2A Protocol — agent-to-agent communication standard
- Generative media models across all modalities (image, video, audio, music)

Resources for AI/ML:
- Google Cloud Blog Next '25 wrap-up: https://cloud.google.com/blog/topics/google-cloud-next/google-cloud-next-2025-wrap-up
- Vertex AI documentation: https://cloud.google.com/vertex-ai/docs
- Vertex AI Agent Builder docs: https://cloud.google.com/agent-builder

### Solution Architecture Practice

Practice whiteboarding these common CE scenario types:

1. **Infrastructure modernization**: Move a monolithic on-prem app to GCP. What services? What migration path?
2. **Data platform modernization**: Replace on-prem data warehouse with BigQuery. How to migrate? Governance?
3. **AI/ML use case**: Customer wants to build a RAG chatbot on their internal docs. Architect using Vertex AI + Agent Builder.
4. **Cost optimization**: Customer's GCP bill is too high. Diagnose and recommend.
5. **Security & compliance**: Enterprise customer with strict data residency requirements in Korea. How to configure GCP?
6. **Hybrid connectivity**: Customer has on-prem systems that need to connect to GCP securely. VPN vs. Interconnect?

For each scenario, structure your answer as:
```
1. Clarify requirements (ask 2-3 scoping questions)
2. Propose architecture (draw diagram, name services)
3. Justify tradeoffs (why this service over that one)
4. Address risks/pitfalls proactively
5. Discuss pricing model
```

### Behavioral Interview Preparation (STAR format)

Prepare 5-6 stories from current/past experience using STAR (Situation, Task, Action, Result):

| Story Theme | Relevance to CE Role |
|-------------|---------------------|
| Technical troubleshooting with a customer | Customer-facing problem solving |
| Explaining complex technical concept to non-technical stakeholder | Communication skills |
| Managing a difficult customer escalation | Customer empathy + resilience |
| Cross-functional project (India/US/Korea experience) | Collaboration, global mindset |
| Leading a customer through a technical migration | Solution ownership |
| Turning a skeptical customer into an advocate | Consultative selling mindset |

### Milestone: End of Week 20 (mid-August 2026)
- [ ] Can whiteboard 6 canonical CE scenarios fluently
- [ ] Deep knowledge of Vertex AI, Gemini, Agent Builder
- [ ] 6 STAR stories documented and rehearsed
- [ ] CE presentation deck drafted (7 slides on a real or simulated solution)
- [ ] Completed mock interview with a friend or coach

---

## Phase 5: Application + Final Polish (Weeks 21-24, August-September 2026)

### Goal
Submit polished application, ace the interview.

### Application Preparation

1. **Resume**: Tailor for CE role — emphasize customer-facing technical work, not coding
   - Lead with: "Solutions Engineer with GCP-certified cloud expertise"
   - Add ACE certification with badge link
   - Frame AWS experience as cross-platform competency, not a gap
   - Quantify customer impact (300+ enterprise users, 0-to-production launches)

2. **LinkedIn**: Add ACE certification, update headline, add GCP project links

3. **Portfolio project**: Have at least one public GCP project on GitHub (see Hands-On Projects below)

4. **Job description mapping**: When a JD posts, map each requirement to a specific STAR story or technical skill you can demonstrate

### CE Application Timing
- Google Korea CE roles post on https://careers.google.com (search: "Customer Engineer" + "Korean")
- Target application window: early September 2026
- ACE certification in hand makes the technical screen much smoother

---

## Hands-On Projects (build throughout, not just at end)

These projects serve dual purpose: reinforce ACE exam topics + build CE interview portfolio.

### Project 1: 3-Tier Web Application on GCP (Weeks 5-7)
**What to build:** Web app with Compute Engine (or Cloud Run) + Cloud SQL + Cloud Load Balancer
**Skills demonstrated:** Compute, networking, database, autoscaling
**ACE sections covered:** 3.1, 3.4, 4.4
**Deliverable:** GitHub repo with Terraform IaC + architecture diagram

### Project 2: GKE Containerized Deployment (Weeks 8-10)
**What to build:** Containerize an existing app, deploy to GKE Autopilot, set up horizontal autoscaling
**Skills demonstrated:** Docker, GKE, Artifact Registry, Cloud Deploy
**ACE sections covered:** 3.2, 4.2
**Deliverable:** GitHub repo + Kubernetes manifests + CI/CD pipeline

### Project 3: Serverless Data Pipeline (Weeks 11-14)
**What to build:** Pub/Sub → Cloud Functions → BigQuery pipeline for streaming event data
**Skills demonstrated:** Pub/Sub, serverless compute, BigQuery, Cloud Monitoring alerts
**ACE sections covered:** 3.3, 3.4, 4.6
**Deliverable:** GitHub repo + architecture diagram + cost analysis

### Project 4: RAG Chatbot on Vertex AI Agent Builder (Weeks 15-18, CE-specific)
**What to build:** Upload internal documents to Agent Builder, create a no-code RAG Q&A bot, expose via Cloud Run
**Skills demonstrated:** Vertex AI, Agent Builder, Cloud Run, GCP AI/ML ecosystem
**CE relevance:** Direct demo of a top 2026 customer use case
**Deliverable:** Live demo + architecture diagram + slide deck explaining the solution

Project 4 is the most valuable for CE interviews — it shows hands-on AI/ML on GCP, which is the current market priority.

---

## Resource Master List

### Official Google Resources
- ACE Certification page: https://cloud.google.com/learn/certification/cloud-engineer
- ACE Exam Guide (full topics): https://cloud.google.com/learn/certification/guides/cloud-engineer/
- Cloud Engineer Learning Path: https://www.cloudskillsboost.google/paths/11
- Exam Prep Course: https://www.skills.google/course_templates/77
- Google Cloud Next '25 wrap-up: https://cloud.google.com/blog/topics/google-cloud-next/google-cloud-next-2025-wrap-up
- Vertex AI docs: https://cloud.google.com/vertex-ai/docs
- Exam registration: https://webassessor.com/googlecloud

### Third-Party Courses
- Udemy ACE course (best for video learning): https://www.udemy.com/course/google-cloud-associate-cloud-engineer-certification/
- Udemy ACE practice exams 1500 Qs: https://www.udemy.com/course/gcp-associate-cloud-engineer-2025-practice-exams-1500-qs/

### Practice Exam Platforms
- ExamTopics (free, community-verified): https://www.examtopics.com/exams/google/associate-cloud-engineer/
- Whizlabs (strong explanations): https://www.whizlabs.com/blog/gcp-associate-cloud-engineer-exam-questions/

### CE Interview Resources
- CE interview process breakdown: https://www.practiceinterviews.com/blog/understanding-the-customer-engineer-interview-process-at-google
- Google CE interview questions: https://www.interviews.chat/questions/google-customer-engineer
- Google careers Korea CE roles: https://careers.google.com

### Reference
- AWS to GCP service mapping: https://github.com/milanm/Cloud-Product-Mapping
- AWS to GCP migration guide: https://cloud.google.com/blog/products/infrastructure-modernization/aws-to-google-cloud-migration-guides

---

## Confidence Assessment

| Area | Confidence | Basis |
|------|------------|-------|
| ACE exam topic coverage | HIGH | Official Google exam guide (verified) |
| Study resource recommendations | HIGH | Community consensus + enrollment data |
| CE interview structure | MEDIUM | Glassdoor reports + community forums (not official) |
| GCP AI/ML landscape | HIGH | Official Google Cloud Next '25 blog |
| Timeline feasibility | MEDIUM | 3-month ACE is aggressive but achievable with consistent daily study |
| AWS-to-GCP mappings | HIGH | Official Google migration docs |
