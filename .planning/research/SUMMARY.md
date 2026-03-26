# Research Summary: GCP ACE Certification + CE Interview Preparation

**Domain:** Cloud Certification + Pre-Sales Technical Role (Customer Engineer)
**Researched:** 2026-03-26
**Overall confidence:** HIGH

## Executive Summary

Dohyun's preparation path has a clear two-track structure that converges at the CE application in September 2026. The ACE certification (June 2026) is the first gate and serves as both a credential and a structured forcing function for building GCP knowledge from scratch. The ACE exam is achievable in 3 months of consistent daily study (1-2 hours/day) given a strong CS background and existing cloud experience with AWS.

The CE role at Google is fundamentally a pre-sales technical consultant role — not a systems administrator or SRE. This shapes how to prioritize study: solution design, customer scenario practice, and GCP AI/ML fluency matter more than memorizing obscure CLI flags. The interview includes a technical presentation round where candidates present a real or simulated solution to a mock customer panel, which is the highest-signal differentiator.

Google Cloud Next '25 announcements (Gemini 2.5, Vertex AI Agent Builder, ADK, A2A protocol, Ironwood TPU) define the current GCP direction and will be live talking points in any 2026 CE interview. Deep familiarity with the AI/ML stack is no longer optional — it is the primary differentiator Google Cloud CEs are expected to sell and support.

Dohyun's AWS background is an asset, not a liability. Most GCP services have direct AWS equivalents and the conceptual knowledge transfers. The gaps are GCP-specific: resource hierarchy, Pub/Sub vs. SQS nuances, GKE Autopilot, AlloyDB, and the Vertex AI ecosystem. These are learnable in the 6-month window.

## Key Findings

**Stack:** Google Cloud Skills Boost (Qwiklabs) + Udemy ACE course + ExamTopics practice questions + Vertex AI docs for CE depth

**Architecture:** Foundation first (IAM + Networking + Compute), then ACE exam drilling, then CE-specific AI/ML and solution design practice

**Critical pitfall:** Treating ACE prep as purely theoretical. The exam is heavily practical — candidates who only watch videos without doing Qwiklabs labs consistently under-perform. Every major topic requires hands-on confirmation.

## Implications for Roadmap

Based on research, suggested phase structure:

1. **Foundation** (Weeks 1-4) — GCP mental model from AWS perspective
   - Addresses: resource hierarchy, IAM, VPC networking, core services
   - Avoids: starting ACE drilling before understanding the platform vocabulary
   - No GCP experience means a 1-week orientation before exam content

2. **ACE Deep Dive** (Weeks 5-10) — Section-by-section exam preparation
   - Addresses: all 5 ACE exam sections, gcloud CLI, Terraform, GKE, monitoring
   - Avoids: cramming everything at the end
   - Section 3 (Deploying, 25% weight) gets most lab time

3. **ACE Final Sprint** (Weeks 11-12) — Practice exams + exam booking
   - Addresses: weak spot identification, exam simulation
   - Avoids: booking before hitting 80%+ on timed practice exams

4. **CE Technical Depth** (Weeks 13-20) — AI/ML stack + solution design
   - Addresses: Vertex AI, Gemini, Agent Builder, ADK, whiteboard scenarios
   - Avoids: entering CE interview with only ACE-level GCP knowledge
   - This phase is the heaviest CE-specific investment

5. **Application Polish** (Weeks 21-24) — Resume, portfolio, interview rehearsal
   - Addresses: final presentation prep, resume tailoring, job application
   - Avoids: submitting cold without rehearsed STAR stories

**Phase ordering rationale:**
- Foundation before ACE: cannot drill exam scenarios without understanding GCP model
- ACE before CE depth: certification provides structured learning scaffold AND credential
- Hands-on projects run throughout all phases, not as a final phase
- AI/ML (CE differentiator) deferred until after ACE because it is not on the ACE exam and would split focus prematurely

**Research flags for phases:**
- Phase 4 (CE Technical Depth): Vertex AI Agent Builder is changing rapidly — needs verification of current capabilities closer to interview time
- Phase 5 (Application): Google Korea CE job postings are sporadic; monitor careers.google.com starting August 2026
- Phase 2 (ACE Deep Dive): ExamTopics community answers are sometimes wrong — always verify disputed answers against official docs

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| ACE exam content | HIGH | Official Google exam guide is authoritative and current |
| Study resource quality | HIGH | Udemy enrollment data + community consensus across multiple sources |
| CE interview structure | MEDIUM | Based on Glassdoor reports and community accounts, not official Google docs |
| GCP AI/ML landscape | HIGH | Official Google Cloud Next '25 blog and Vertex AI docs |
| Timeline feasibility | MEDIUM | 3 months for ACE is achievable but requires 1-2 hours/day consistently |
| AWS-to-GCP mapping | HIGH | Official Google migration documentation |

## Gaps to Address

- Google Korea CE team-specific interview nuances: no verified data on whether the Korea CE interview differs from global CE process
- Professional certification path post-ACE: not researched (out of scope per PROJECT.md)
- Current Vertex AI Agent Builder capabilities need verification at time of Phase 4 (product changes rapidly)
- Exact scoring threshold for ACE pass: Google does not publish the passing score; community estimates 70-75% with recommendation to target 80%+ on practice
