# Google Cloud Customer Engineer Preparation

## What This Is

A comprehensive study and preparation program for Dohyun Chung to transition from AWS/SaaS background to Google Cloud Customer Engineer at Google Korea. Covers GCP technical knowledge using the **Associate Cloud Engineer exam guide as the breadth syllabus (ACE exam not taken)**, **Professional Cloud Architect** certification as the primary credential, Google Cloud Next '25 announcements, and CE-specific interview preparation.

**Master plan (execution order, monthly timeline, weekly rhythm):** [`docs/plan/MASTER_PLAN.md`](../docs/plan/MASTER_PLAN.md)

**Resume source of truth:** [`scripts/resume.html`](../scripts/resume.html) — update planning docs when titles or roles change.

## Core Value

Master Google Cloud services deeply enough to confidently demonstrate technical expertise and customer-facing solution design in the CE interview process.

## Requirements

### Validated

(None yet — ship to validate)

### Active

**Technical foundation**

- [ ] Complete understanding of GCP core services (Compute, Storage, Networking, Databases)
- [ ] Deep knowledge of GCP AI/ML services (Vertex AI, Gemini, Agent Builder)
- [ ] Mastery of Google Cloud Next '25 announcements and new technologies
- [ ] Complete **ACE exam guide curriculum** (Udemy / Skills Boost / practice sets for **gap checks only**) — **do not register for the ACE exam**
- [ ] Pass **Professional Cloud Architect (PCA)** exam — *primary Google Cloud credential for this plan*
- [ ] Build hands-on GCP project(s) with short architecture write-ups (customer-scenario oriented, not exam-only)
- [ ] Map existing AWS experience to GCP equivalents (service mapping + migration talking points)
- [ ] **CKAD:** not in scope for this preparation window — **deferred** (user decision; revisit only if priorities change)

**CE application (beyond certification)**

- [ ] Resume and LinkedIn aligned to CE language: pre-sales, demos, PoC, enterprise architecture, technical trust
- [ ] STAR / behavioral stories for customer-facing technical work (`docs/study/interview-star-stories.md`)
- [ ] Practice CE-specific scenarios: whiteboard architecture, technical + stakeholder angles
- [ ] Read and internalize `docs/study/ce-prep-beyond-certification.md` (KR CE profile patterns + checklist)

### Out of Scope

- **SRE-level** Kubernetes/GKE cluster administration — CE needs design-level GKE/app-on-K8s literacy (CKAD-level concepts help); deep day-2 ops optional
- **Leetcode-style** coding interview prep — CE is not SWE; solution design and customer scenarios first
- **Multi-cloud as primary study track** — GCP ecosystem remains the focus; AWS background is a narrative asset, not a parallel cert chase

**Credential note:** **ACE** is study syllabus only. **PCA** is the target exam. **CKAD** is **not** being pursued in this plan — many KR CEs list it, but it is optional/future-only.

## Context

**Current Background (see `scripts/resume.html`):**
- B.A. Computer Science & Sociology, NYU (Dec 2023)
- **Software Engineer & Technical Customer Lead** (Kiss Products, Apr 2024–present): PIM / Enterprise Retail OS on **AWS & Snowflake**, 300+ enterprise users; prior **Front-end Engineer & Product Manager** (24/7 Teach), **Front-end Engineer Intern** (SkyIT)
- **Software engineering delivery:** multi-tenant architecture, end-to-end development, API design, launch — combined with **customer-facing** technical lead and cross-border coordination (India, US, Korea)
- Bilingual Korean (Native) / English (Fluent) · Based in Seoul, South Korea

**Strengths for CE Role:**
- Hands-on **engineering** plus primary technical contact for enterprise users (aligns with CE’s technical depth + customer trust)
- Customer-facing troubleshooting, root-cause analysis, translating requirements to specs and solutions
- Multi-stakeholder management across cultures and time zones
- Zero-to-production SaaS launch and crisis recovery (e.g. D-30 launch)

**Gaps to Address:**
- No GCP hands-on experience (AWS-based background)
- No cloud certifications yet
- Limited knowledge of Google's AI/ML ecosystem (Gemini, Vertex AI)
- No familiarity with Google Cloud Next '25 announcements
- Need to understand Google CE role expectations vs. current Solutions Engineer positioning

**Observed KR CE profiles (public LinkedIn-style samples, March 2026):**  
Several current Google Korea Cloud Customer Engineers **do not list Associate Cloud Engineer**. Patterns include long tenure with enterprise pre-sales + GKE (legacy vendor certs), or **Professional Cloud Architect + CKAD** with software/cloud transitions, or **AWS-heavy background + GCP PCA**. **CKAD in particular is very common** across KR CE profiles — consistent with GKE-heavy customer work and **possible org-level encouragement or support** for the exam. This does **not** define official hiring policy. **Chosen path:** learn breadth via **ACE curriculum**, certify with **PCA** (not ACE). Detail: `docs/study/ce-prep-beyond-certification.md`, `docs/plan/MASTER_PLAN.md`.

**Target Timeline:**
- **End of May 2026:** **PCA** exam (~2-month prep window from late March)
- **June 2026:** Apply to Google Cloud CE (Google Korea) shortly after PCA result

## Constraints

- **Timeline**: ACE-scope study + PCA sprint through **May 2026**; **CKAD / second portfolio** may slip to post-application if needed
- **Learning Style**: Explanation + Quiz verification + Documentation of all studied content
- **Language**: Study materials in English, communication in Korean
- **Focus**: Google Cloud ecosystem only — no multi-cloud distraction

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| **ACE exam not taken**; **ACE curriculum** for breadth; **PCA** as certification | Aligns with KR CE profiles (PCA common); avoids duplicate Associate credential; measurable syllabus + architecture exam | **Adopted** |
| Study Google Cloud Next '25 content as priority | Latest announcements show current GCP direction and CE talking points | -- Pending |
| Quiz-based learning verification | Active recall is more effective than passive reading | -- Pending |
| Prioritize CE-ready narrative (PoC, architecture, AI/data) alongside certs | Public CE profiles emphasize customer outcomes and domains more than ACE specifically | -- Pending |
| **CKAD deferred** — not part of current prep | User choice; focus is PCA + CE narrative + GCP evidence | **Adopted** |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check -- still the right priority?
3. Audit Out of Scope -- reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-30 — resume-aligned background (SWE + technical customer lead); CKAD deferred*
