---
slug: anu-研究数据存储与备份规范避免论文灾难的实用方案
title: "Research Data Storage and Backup Standards at ANU: Practical Ways to Avoid a Thesis Disaster"
description: "The ANU Research Data Management Policy, released in 2023, explicitly requires all research data to be retained for at least 5 years, with data from some funded projects kept for up to 15 years. According to a 2024 internal audit by ANU Information Technology Services (ITS), the university records an average of 12 incidents a year in which postgraduate students lose thesis data through improper storage, and about 40% of these cases cannot be recovered for lack of backups. For students aged 18 to 30 at a critical stage of their academic careers…"
category: "general"
pubDatetime: '2026-03-01T19:47:16Z'
publishDate: '2026-03-01T19:47:16Z'
readingTime: 13
tags: ["featured"]
lang: en
language: en

ogImage: "https://img.anu.wiki/留学/单校wiki/anu-研究数据存储与备份规范避免论文灾难的实用方案-2026-1880x1253.jpg"
---

The ANU *Research Data Management Policy*, released in 2023, explicitly requires all research data to be retained for at least 5 years, with data from some funded projects kept for up to 15 years. According to a 2024 internal audit by ANU Information Technology Services (ITS), the university records an average of 12 incidents a year in which postgraduate students lose thesis data through improper storage, and about 40% of these cases cannot be recovered because there was no backup. For ANU students aged 18 to 30 who are at a critical stage of their academic careers, understanding and following the university's research data storage and backup standards is a basic safeguard against thesis disasters and a foundation for keeping research outputs usable over the long term.

## Data storage tiers and division of responsibility

ANU uses a three-tier data storage architecture that divides research data into **temporary workspaces**, **project storage**, and **long-term archives**. Each tier has different storage media, access permissions, and retention periods, and students need to pick the right location for where their data is in its lifecycle.

### Temporary workspace: the default for day-to-day work

Temporary workspace includes personal computer hard drives, local lab servers, and university-allocated cloud storage such as Microsoft OneDrive for Business (1 TB capacity). ANU ITS rules say this tier is only for **draft data being actively worked on** and must not be the sole home of a final dataset. According to the 2023 ANU research data management training manual, about 65% of data loss incidents happen in temporary workspaces, caused by hardware failure, accidental deletion, or expired accounts.

### Project storage: a controlled collaboration space

For course projects and theses, ANU offers the **Research Data Storage Service (RDSS)**, which allocates 500 GB by default per project and can be expanded to 5 TB on application. RDSS uses RAID 6 redundancy and provides daily incremental backups plus weekly full backups, with backups retained for 90 days. Students apply through their supervisor or college, and approval typically takes 3 to 5 business days.

## Backup strategy: the 3-2-1 rule in practice at ANU

The ANU research data management policy explicitly recommends the **3-2-1 backup rule**: keep 3 copies of your data, on 2 different types of storage media, with at least 1 copy stored off site. The university's 2024 *Data Backup Best Practice Guide* notes that students who rely on a single backup method (such as an external hard drive alone) have a recovery success rate of **under 20%** after data loss.

### Combining local and cloud backups

For local backups, the guide recommends an **encrypted external solid-state drive (SSD)** of at least 256 GB, fully encrypted with BitLocker (Windows) or FileVault (macOS). For cloud backup, ANU works with the Australian Research Data Commons (ARDC) to give postgraduate students access to **Research Data Australia's** archiving service, which supports automatic sync and version control. ITS recommends running a local-plus-cloud double backup after every completed data analysis stage.

### Version control and data integrity checks

For frequently edited thesis drafts or code, ANU recommends the **Git version control system**, with a self-hosted GitLab instance (gitlab.anu.edu.au). According to ANU's 2023 digital literacy survey, students who use version control are 82% less likely to lose data through accidental mistakes during thesis writing. In addition, all critical data files should have **SHA-256 checksums** generated after backup to verify data integrity and catch silent corruption.

## Data classification and handling sensitive information

ANU classifies research data into four levels — public, internal, controlled, and restricted — each with different storage and transfer requirements. ANU Research Ethics Committee data for 2024 shows that about 15% of postgraduate theses involve controlled or restricted data (such as human subject information or trade secrets), and mishandling it can breach Australia's *Privacy Act 1988* and the *Australian Code for the Responsible Conduct of Research 2018*.

### Encryption and isolation of sensitive data

For data containing personally identifiable information (PII) or health information, ANU requires storage in an **encrypted container** (such as VeraCrypt) or the university's **Secure Data Storage Service**. This service runs in a secure server room on the Canberra campus, uses AES-256 encryption, and requires two-factor authentication (2FA) for access. Data must be transferred over SFTP or HTTPS; sending it as unencrypted email attachments is prohibited.

### De-identification and anonymisation

Before data is shared or archived long term, the ANU Research Ethics Committee requires sensitive data to be **de-identified**. Free tools provided by the university include ARX (open-source data anonymisation software) and sdcMicro (an R language package). According to 2023 ANU research data management training cases, proper de-identification can cut re-identification risk to below 0.5%, but the process must still be documented in the data management plan (DMP).

## Writing and submitting a Data Management Plan (DMP)

Since 2022, ANU has required all postgraduate students to submit a **Data Management Plan (DMP)** within 6 weeks of their confirmation of candidature, completed online through the university's DMP tool (DMPTool@ANU). The plan must specify data types, storage locations, backup frequency, sharing permissions, and retention periods. ANU Graduate School statistics for 2024 show that students who submit a DMP have one-third the rate of data problems before their thesis defence compared with students who do not.

### Core DMP elements and template

The ANU DMP template includes the following mandatory fields: project title and description, data collection methods, expected data volume (in TB), storage and backup plan, data sharing and publication plan, and ethics and legal compliance statement. For projects involving international collaboration, the compliance basis for cross-border data transfer must also be noted, such as equivalence determinations under Australia's *Privacy Act* or the EU *General Data Protection Regulation* (GDPR).

### Common mistakes and the revision process

According to the ANU Office of Research Data Management's 2023 compilation of common questions, about 70% of first DMP drafts have issues such as choosing the wrong storage tier or describing backup frequency too vaguely. Students can submit a revision request through their supervisor or the college data manager within 30 days of submission, without going through the full approval process again.

## Data sharing and long-term archiving

After completing the thesis, ANU requires final datasets to be archived in **ANU Data Commons** (the university's institutional repository) or **Research Data Australia** (the national platform). Archived data must include a metadata description file using Dublin Core or DataCite standards. Under ANU's 2024 open access policy, publicly funded research data must be made openly accessible within 12 months of the paper's publication, unless there are ethical or commercial restrictions.

### Data citation and DOI allocation

Datasets archived in ANU Data Commons receive a **Digital Object Identifier (DOI)**, making them directly citable in papers. According to the ANU Library's 2023 data citation guide, correctly citing the original dataset can boost a paper's citation rate by about 25%. Students must include the DOI and access conditions in the "Data Availability Statement" of their thesis.

### Disposal after the retention period

For data that has reached its retention period and no longer needs to be kept, ANU offers two disposal options: **secure deletion** (through the university IT department's erasure service) or **transfer to the National Archives**. Physical media holding sensitive data (such as hard drives and optical discs) must be destroyed through ANU-authorised destruction services, with a certificate of destruction issued.

## Common failure scenarios and emergency recovery

Even though following the standards greatly reduces risk, ANU ITS still recommends that students know the **emergency recovery process**. In 2023 the university handled 43 data recovery requests with a success rate of about 78%. The unsuccessful cases were mostly data that had been overwritten or physical media that was severely damaged.

### Hardware failure: damaged or lost hard drives

If a local hard drive develops a physical fault, stop powering it on immediately and contact ANU ITS or an authorised data recovery provider (such as Canberra-based Data Rescue Australia). According to ANU 2023 service records, mechanical hard drive recovery costs range from A$500 to A$2,000, and SSDs cost more because the damage is often at chip level. For a lost encrypted drive, the leak risk is low because the data is encrypted, but the university security office should still be notified.

### Accidental deletion and ransomware attacks

For accidentally deleted files, ANU RDSS offers **90-day snapshot recovery** that students can restore themselves through the web interface. If you are hit by a ransomware attack, disconnect from the network immediately and report it to ITS. ANU's 2024 cybersecurity report shows that no ransomware attack against postgraduate research data has succeeded at the university in the past two years, but the annual growth rate of such attacks across global higher education is 37%.

## FAQ

### Q1: What backup tools do ANU postgraduate students use most?

ANU ITS recommends combining **OneDrive for Business** (automatic sync of personal files) with the **Research Data Storage Service (RDSS)** (redundant backup for project data). According to a 2024 ANU digital tools usage survey, about 82% of postgraduate students use OneDrive and 55% use RDSS. For code, **GitLab@ANU** has a 31% usage rate. All of these tools are protected by 2FA login.

### Q2: How many years must I keep my thesis data?

The ANU research data management policy requires general research data to be kept for at least **5 years**. For projects funded by the Australian Research Council (ARC) or the National Health and Medical Research Council (NHMRC), the retention period is **15 years**. Data involving human subjects or clinical trials is kept for the period specified in the ethics committee approval, usually 7 to 15 years. The retention period runs from the date data collection is completed.

### Q3: What happens if I forget to move my data before graduating?

After graduation, ANU student accounts are deactivated **90 days** after the degree is conferred, and data in OneDrive and RDSS is then deleted. ITS advises students to migrate important data to personal long-term storage or archive it in ANU Data Commons at least **6 weeks** before graduating. According to ANU's 2023 graduate data access report, about 8% of graduates lost data because they did not transfer it in time, and about half of those cases were recoverable within 30 days by contacting the college data manager.

## References

- Australian National University. 2023. *Research Data Management Policy*.
- ANU Information Technology Services. 2024. *Internal Audit Report: Data Storage and Backup*.
- ANU Office of Research Data Management. 2023. *Data Backup Best Practice Guide*.
- Australian Research Council. 2018. *Australian Code for the Responsible Conduct of Research*.
- Unilink Education. 2024. *ANU Postgraduate Academic Resources Database*.
