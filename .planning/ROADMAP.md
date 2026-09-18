# Roadmap: Google Cloud Customer Engineer Preparation

## Overview

A 6-month preparation program that builds GCP knowledge from zero to CE-interview-ready. **Single source of truth for month-by-month priorities:** `docs/plan/MASTER_PLAN.md`.

**Credential path (locked):** Complete **Associate Cloud Engineer exam guide curriculum** as the breadth syllabus — **do not sit the ACE exam.** Then sit **Professional Cloud Architect (PCA)**. **CKAD is out of scope for now** (user decision). Then: portfolio **P1**, **Vertex AI portfolio P2**, interview prep.

## Phases

**Phase Numbering:** Integer phases (1, 2, 3) plus **2.5** between 2 and 3.

- [ ] **Phase 1: GCP Foundation** — GCP mental model from an AWS perspective; core services hands-on
- [ ] **Phase 2: GCP breadth (ACE curriculum, no ACE exam)** — Full ACE exam guide / Udemy ACE path for coverage; timed practice for self-check only; **no ACE registration**
- [ ] **Phase 2.5: PCA Certification** — Pass **Professional Cloud Architect**
- [ ] **Phase 3: Portfolio P1** — One documented GCP architecture project (GKE/Cloud Run + data); **no CKAD** in this plan
- [ ] **Phase 4: AI/ML & Cloud Next '25 + Portfolio P2** — Vertex AI, Gemini, Next announcements; customer-scenario AI demo
- [ ] **Phase 5: CE Interview Preparation** — STAR bank, resume/LinkedIn, AWS→GCP narrative, mocks

## Phase Details

### Phase 1: GCP Foundation
**Goal:** Operate confidently in GCP using core services; understand how GCP differs from AWS  
**Depends on:** Nothing  
**Requirements:** FOUND-01 … FOUND-10  
**Success Criteria:**
  1. Can explain GCP resource hierarchy, IAM inheritance, service accounts without notes
  2. Can create/configure Compute Engine, VPC, Cloud SQL, Cloud Storage via gcloud
  3. Can map major AWS services to GCP equivalents and state key differences
  4. 20+ hours Cloud Skills Boost labs documented
  5. Can query BigQuery and position it vs. other data services  
**Plans:** TBD

### Phase 2: GCP breadth (ACE curriculum, no ACE exam)
**Goal:** Cover the full **ACE exam guide** scope as structured learning; **do not** take the ACE exam. Use practice exams only to find gaps.  
**Depends on:** Phase 1  
**Requirements:** ACE-01 … ACE-09 (as study units, not exam booking)  
**Success Criteria:**
  1. Finished ACE-aligned course path (e.g. Udemy ACE + Skills Boost labs per guide)
  2. Optional: timed practice sets at target score — **self-assessment only**
  3. Can deploy/manage GKE (Autopilot and Standard) from CLI; basic Terraform for CE, VPC, IAM
  4. **No** Associate Cloud Engineer certificate (by design)  
**Plans:** TBD

### Phase 2.5: PCA Certification
**Goal:** Earn **Professional Cloud Architect** — primary external credential for this plan  
**Depends on:** Phase 2  
**Requirements:** Official PCA guide + Skills Boost; see **`docs/plan/pca-exam-prep.md`** (new syllabus case studies, format 60Q/2h, topic weights from community — verify against Google docs)  
**Success Criteria:**
  1. PCA exam passed (book after Phase 2 breadth is solid; voucher programs e.g. Get Certified worth checking)  
**Plans:** TBD

### Phase 3: Portfolio P1
**Goal:** One documented enterprise-style GCP project (hands-on evidence beyond PCA)  
**Depends on:** Phase 2.5  
**Success Criteria:**
  1. P1: README + architecture diagram + repo/demo + security/cost notes  
**Plans:** TBD

### Phase 4: AI/ML & Cloud Next '25 + Portfolio P2
**Goal:** CE-level Vertex AI / Gemini depth + **Portfolio P2**  
**Depends on:** Phase 3  
**Requirements:** AIML-01 … AIML-07  
**Success Criteria:**
  1. Whiteboard-level Vertex AI end-to-end
  2. Working Vertex AI + Gemini artifact (portfolio-ready)
  3. Next ’25 themes and customer relevance
  4. Short competitive pitch vs AWS/Azure on AI  
**Plans:** TBD

### Phase 5: CE Interview Preparation
**Goal:** STAR, resume, AWS→GCP story, mocks  
**Depends on:** Phase 4  
**Requirements:** INTV-01 … INTV-07  
**Success Criteria:** (unchanged — 7–10 STAR stories, presentation, resume, mock, migration narrative)  
**Plans:** TBD

## Progress

**Execution order:** 1 → 2 → 2.5 → 3 → 4 → 5

| Phase | Status | Completed |
|-------|--------|-----------|
| 1. GCP Foundation | Not started | - |
| 2. Breadth (ACE curriculum, no exam) | Not started | - |
| 2.5 PCA | Not started | - |
| 3. Portfolio P1 | Not started | - |
| 4. AI/ML + P2 | Not started | - |
| 5. CE Interview | Not started | - |

---

*Synced with `docs/plan/MASTER_PLAN.md` — 2026-03-30: CKAD removed from plan; resume = SWE + technical customer lead*
