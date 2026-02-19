---
title: "NIS2 Compliance: A Practical Guide for Essential and Important Entities (Part 1)"
description: "Understand NIS2 requirements, applicability, and how to build a compliance roadmap for your organization."
date: 2026-02-10
author: Metis GRC Team
category: NIS2
locale: en
---

*Part 1 of 2 — Scope, applicability, and the obligations that drive real work.*

Europe’s digital economy runs on invisible dependencies: shared cloud platforms, managed service providers, domain infrastructure, logistics APIs, and industrial OT networks that never stop. When one link fails, the impact rarely stays local. That is the risk model behind **NIS2**—the EU’s updated cybersecurity directive designed to strengthen resilience across critical sectors and their supply chains.

NIS2 is often described as “a tougher version of NIS.” That’s true, but incomplete. The meaningful shift is this: **resilience becomes a governance obligation**, not just a security program goal. Leaders are expected to oversee cyber risk the way they oversee financial, operational, and legal risk—through decisions, investment, and evidence.

This two-part guide focuses on what practitioners need most: clarity on **who is in scope**, **what is required**, and what to do **first**.


## What NIS2 is (and what it isn’t)

**NIS2 (Directive (EU) 2022/2555)** sets EU-wide requirements for:
- cybersecurity risk-management measures,
- incident reporting, and
- oversight and enforcement for in-scope organizations.

It is **not** a technical standard like ISO 27001 or a framework like NIST CSF. Instead, it’s a **legal baseline** that Member States transpose into national law—meaning details can vary slightly by country, but the minimum expectations are anchored at EU level.

---
## Step 1: Determine if you’re in scope

NIS2 scope is driven primarily by two variables:
1) **Sector:** Are you in one of the covered critical sectors?
2) **Size:** Are you at least medium-sized (by EU definitions), unless an exception applies?

In addition, NIS2 introduces categorization:
- **Essential entities**
- **Important entities**

Both must meet core obligations, but **supervision and enforcement intensity differs** (more on that in Part 2).

### The “default” rule: sector + size

As a rule, NIS2 applies to **medium and large** organizations in covered sectors. Medium and large are generally aligned to EU thresholds (e.g., employees and turnover/balance sheet).

**Practical interpretation:** if you’re a mid-sized or large organization in a covered sector, assume you are in scope unless you have strong evidence otherwise.

### The “regardless of size” exceptions (the ones teams miss)

Even if you are small, NIS2 can apply when you provide services that are foundational to the Internet and digital trust. Examples include:
- public electronic communications networks/services,
- DNS service providers,
- TLD name registries,
- trust service providers,
- domain name registration services.

**Why this matters:** many organizations assume size is a safe harbor. For certain services, it isn’t.

### Essential vs Important: why the label matters

Both categories must implement risk-management measures and report significant incidents. The key operational difference tends to be:
- **Essential entities**: more proactive oversight potential (audits, inspections, supervisory measures).
- **Important entities**: more ex post supervision in many national implementations.

**Practical takeaway:** design your compliance program as if you’ll be audited—because incidents can trigger scrutiny regardless of category.

---

## Step 2: Understand the obligations that create real work

NIS2 obligations tend to fall into five buckets:
1) governance and accountability,
2) risk-management measures,
3) incident reporting,
4) supply chain security,
5) administrative readiness and evidence.

### 1) Governance and accountability: cybersecurity becomes a management duty

NIS2 places responsibility on the **management body** to:
- approve cybersecurity risk-management measures,
- oversee implementation, and
- ensure training is in place so leaders can make informed decisions.

**What changes in practice**
- You need a clear operating model: who owns decisions, who reports, who escalates, and how risks are accepted.
- Training becomes part of compliance—not optional “awareness.”

### 2) Risk-management measures: what NIS2 expects you to be able to do

NIS2 sets a minimum list of measures that must be “appropriate and proportionate.” In plain terms, organizations must demonstrate capability across:

- **Risk analysis and security policies** (knowing what you protect and why)
- **Incident prevention, detection, and response**
- **Business continuity** (backups, disaster recovery, crisis management)
- **Supply-chain security** (not just questionnaires—governance and controls)
- **Secure development and vulnerability handling** (where relevant)
- **Testing and assurance** (audits, exercises, technical tests)
- **Training and cyber hygiene**
- **Cryptography and encryption** (where appropriate)
- **Identity and access management**, including MFA/strong authentication where appropriate
- **Secure communications** (as relevant to your services)

**Practical takeaway:** NIS2 does not mandate specific tools, but it does require outcomes you can evidence.

### 3) Incident reporting: the clock starts when you become “aware”

NIS2 formalizes reporting timelines that many organizations underestimate until they run a live incident:

- **Early warning within 24 hours** of awareness
- **Notification within 72 hours** with an initial assessment
- **Updates** when relevant / upon request
- **Final report within one month** (or progress reporting if the incident is ongoing)

**Practical takeaway:** if your organization cannot triage and classify incidents quickly (and consistently), the reporting process will fail under pressure.

### 4) Supply chain: compliance expands beyond your perimeter

NIS2 makes supply-chain security explicit. That means:
- identifying critical suppliers and service providers,
- implementing security requirements in contracts,
- monitoring performance and risk,
- ensuring incident cooperation and reporting pathways.

**A reality check:** many “your incident” events begin as “their incident.” NIS2 pushes accountability upstream.

### 5) Administrative readiness: know your authority and your reporting channel

NIS2 expects organizations to be identifiable to national authorities and to have clear points of contact for incident reporting and coordination.

**Practical takeaway:** even a technically strong program can fail compliance if reporting pathways, ownership, and entity records are unclear.

---

## What to do next (preview of Part 2)

If Part 1 answers “Am I in scope and what is required?”, Part 2 answers the operational question: **How do we implement NIS2 in a way that is defensible, efficient, and measurable?**

Part 2 will cover:
- enforcement reality and fines (at a practical level),
- a phased compliance roadmap (0–4 weeks, 30–90 days, 3–12 months),
- a supervisor-ready evidence pack,
- common pitfalls and how to avoid them.

---

## References

- [NIS2 Directive — European Commission](https://digital-strategy.ec.europa.eu/en/policies/nis2-directive) — Official policy overview, scope, and implementation timeline.
- [Directive (EU) 2022/2555 — EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2555) — Full legal text of the NIS2 Directive.
- [ENISA Threat Landscape](https://www.enisa.europa.eu/publications) — Annual threat reports from the EU Agency for Cybersecurity.


---

*Ready to assess your NIS2 applicability? [Start with Metis GRC](/product/nis2).*
