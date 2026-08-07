---
slug: anu-research-data-management-best-practices-storage-solutions-backup-protocols-a
title: "ANU Research Data Management Best Practices: Storage Solutions, Backup Protocols, and Ethics Compliance for Your Thesis"
description: "The Australian National University (ANU) released its Research Data Management Policy in 2023, requiring all research data to be retained for at least 5 years, with some sensitive data kept for up to 15 years. Under the Australian Research Council (ARC) Research Integrity Framework (2022), doctoral theses involving human participants, animal experiments, or cultural heritage data must..."
category: "ANU"
pubDatetime: '2026-04-15T19:56:31Z'
publishDate: '2026-04-15T19:56:31Z'
readingTime: 3
tags: ["featured"]

ogImage: "https://img.anu.wiki/留学/单校wiki/anu-research-data-management-best-practices-storage-solutions-backup-protocols-a-2026-1880x1299.jpg"
---

The Australian National University (ANU) released its Research Data Management Policy in 2023, which requires all research data to be retained for at least 5 years — and some sensitive data for up to 15 years. Under the Australian Research Council's (ARC) Research Integrity Framework (2022), theses involving human participants, animal experiments, or cultural heritage data must obtain ethics approval before data collection begins, and data storage must comply with the Australian Code for the Responsible Conduct of Research (2018 revision). For ANU graduate students, understanding these requirements is not just an academic obligation — it is a critical step toward avoiding data loss, thesis delays, or ethics violations.

## Storage Solutions: Combining Local and Cloud

ANU offers graduate students a range of officially supported storage options spanning both local and cloud environments. **ANU Research Data Storage** is the core solution, offering a free quota (typically 50–100GB, with extensions available on request) and supporting SMB and WebDAV protocols, making it well suited to day-to-day syncing. For large-scale datasets (such as remote sensing imagery or genomic data), **ANU HPC (high-performance computing cluster)** provides high-performance storage accessible through NCI (National Computational Infrastructure), with quotas that can reach the terabyte scale.

### Local Storage and Mobile Devices

**External hard drives** are the common choice for offline backups, and SSDs are recommended over HDDs to reduce the risk of physical damage. ANU IT Services recommends keeping at least two drives: one for your working copy and another for regular backups. Encryption is mandatory — use BitLocker (Windows) or FileVault (macOS) for full-disk encryption so that a lost or stolen device cannot leak your data.

### Cloud Syncing and Collaboration

**ANU OneDrive** (provided through Office 365) is the officially recommended cloud sync tool, with version history and shared-permission controls. Note, however, that OneDrive syncs to personal devices by default; for sensitive data (such as medical records), use the encrypted channel of **ANU Research Data Storage** instead. For cross-institution collaboration, **Dropbox Business** or **Google Drive** can also be used, but you must ensure the data never leaves Australia (especially when ethics-related data is involved).

## Backup Protocols: The 3-2-1 Rule and Automation

Backup sits at the heart of data management, and ANU's data management guidelines explicitly require the **3-2-1 backup strategy**: keep 3 copies of your data, stored on 2 different types of media, with 1 copy stored off-site. For thesis data, this means: 1 working copy (local hard drive), 1 local backup (a second drive or NAS), and 1 off-site backup (ANU cloud storage or an external server).

### Backup Frequency and Automation

**Daily incremental backups** are ideal, but you should run a full backup at least once a week. ANU provides **rsync** and **Rclone** script templates that automatically sync local data to Research Data Storage. Schedule them with **Cron Job** (Linux) or **Task Scheduler** (Windows) so no manual step is ever missed. If you use LaTeX or MATLAB, back up the entire project folder rather than just the final files.

### Version Control and History Recovery

**Git** is an effective tool for managing text-based data (such as code and thesis drafts), and ANU GitHub Enterprise offers private repositories. For non-text data (such as images and Excel files), **ZFS snapshots** or **Time Machine** (macOS) can preserve historical versions. Note that version control is not a substitute for backup — your Git repository itself also needs an off-site backup.

## Ethics Compliance: Key Steps Before Data Collection

The ANU Human Research Ethics Committee (HREC) requires that research involving human participants be approved before any data is collected. Your **ethics approval number** must be recorded in the metadata of your data files, and data storage must comply with the Privacy Act (1988) and the Code for the Responsible Conduct of Research. Collecting data without approval can result in your thesis being rejected or your research being terminated.

### Informed Consent and De-identification

Your **informed consent form** must clearly state how long data will be stored, how widely it will be shared, and how it will be de-identified. ANU templates require participants to consent to their de-identified data being used in future research. De-identification involves removing direct identifiers such as names, addresses, and student IDs, and applying **k-anonymity** or **differential privacy** techniques to indirect identifiers (such as date of birth or postcode). De-identified data can be stored on ANU Research Data Storage, but the raw data must be kept encrypted on a local device.

### Sensitive Data and Export Controls

Data involving national security, trade secrets, or Indigenous cultural heritage is governed by the **Defence Trade Controls Act** (2012) and the **Aboriginal Cultural Heritage Act** (2006). ANU requires such data to be stored in a **Secure Compute Environment (SCE)**, accessible only to authorised personnel via VPN. Cross-border transfers require an export permit from the Australian Government, and cloud services hosted outside Australia (such as AWS's Singapore region) must not be used.

## Data Organisation and Naming Conventions

Good file naming and directory structure significantly improve retrieval efficiency. ANU's Research Office recommends using the **ISO 8601 date format** (YYYY-MM-DD) and a **project abbreviation** as prefixes, for example: `2024-09-15_PhD-Exp1_Data_v1.csv`. Avoid special characters (`/ \ : * ? " < > |`) and replace spaces with underscores.

### Directory Hierarchy Design

A **three-tier structure** is recommended: project name → experiment/chapter → file type. For example: `/Thesis_Data/Chapter3_Survey/Raw_Responses/`. A **README file** should sit in the root directory explaining the data sources, variable definitions, and ethics approval number. For long-term projects, maintain a **Data Dictionary** documenting the meaning and units of each field to reduce confusion later on.

### Metadata Standards

ANU recommends the **Dublin Core** or **DataCite** metadata schemas to record title, creator, date, description, rights, and other information. For social science data, **DDI (Data Documentation Initiative)** is the industry standard. Metadata can be embedded in file properties (such as Excel's document properties) or stored separately as XML files.

## Data Sharing and Long-term Preservation

ANU requires all data related to a doctoral thesis to be retained for **at least 5 years** after the degree is awarded, and encourages sharing it publicly through **ANU Data Commons** or **Figshare**. Before sharing, make sure the data is de-identified, participant consent has been obtained, and there are no copyright or patent conflicts. **Data citation** can boost your academic impact — ANU Data Commons assigns a DOI to every dataset so others can cite it easily.

### Choosing a Data Repository

**ANU Data Commons** is the first choice, offering 2TB of free storage with version control and access statistics. For very large datasets (>50GB), **NCI Data Collection** is an option, but you will need to apply for a project quota. **Figshare** and **Zenodo** are general-purpose alternatives, but check that they meet ANU's ethics requirements (for example, Figshare's servers are in the EU, so GDPR compliance needs to be assessed).

### Data Licensing and Copyright

Public data should carry a **Creative Commons** licence (such as CC BY 4.0), which clearly permits reuse by others provided they give attribution. If your data contains third-party content (such as maps or images), you need copyright permission. ANU Library offers a **copyright advisory** service to help you judge what falls within fair use.

## Developing a Data Management Plan (DMP)

ANU requires all research projects to submit a **Data Management Plan (DMP)** before they begin, especially projects funded by the ARC or NHMRC. The DMP must describe the data types, storage location, backup frequency, ethics compliance measures, and sharing strategy. ANU uses **DMPTool** (provided by the Australian Research Data Commons, ARDC) as its official template.

### Key Elements of a DMP

- **Data description**: format, size, and expected growth rate.
- **Storage and backup**: specify the storage systems used (such as ANU Research Data Storage) and backup protocols (such as the 3-2-1 rule).
- **Ethics and legal compliance**: record your ethics approval number, privacy protections, and export control requirements.
- **Sharing and preservation**: the datasets you plan to make public, DOI assignment, and retention periods (at least 5 years).
- **Roles and responsibilities**: designate a data steward (usually the doctoral student themselves) and a supervisor oversight role.

The DMP must be updated every year; if the scope of the research changes (for example, adding a new collaborator or modifying the experimental design), it must be resubmitted to the ANU Research Office.

## Data Security and Access Control

ANU's cyber security policy requires all research data to be encrypted both in transit and at rest. **Transport layer encryption** (TLS 1.2 or higher) protects data uploaded to the cloud; **encryption at rest** (AES-256) protects local drives and servers. Access control is enforced through the **ANU identity management system**, so only authorised people can read or write sensitive data.

### Setting Access Permissions

The **principle of least privilege** should apply to all data: grant users only the minimum access they need to do their work. For shared folders, **role-based access control (RBAC)** is recommended — for example, read-only access for collaborators, read/write access for team members, and administrator rights for your supervisor. Review permission lists regularly and remove access for people who have left or graduated.

### Physical Security

Devices that hold data (such as external drives and laptops) should be kept in a locked office or laboratory. ANU provides a **safe storage service** for physical backup media (such as tapes or hard drives), available on request from IT Services. Avoid storing data on public computers or unencrypted USB flash drives.

## FAQ

### Q1: How long do I need to keep my thesis data?

Under ANU's 2023 Research Data Management Policy, data related to a doctoral thesis must be retained for at least 5 years. If the data involves human participants, clinical trials, or Indigenous cultural heritage, the retention period can extend to 15 years. The clock starts from the date your degree is conferred, and once the period expires, data may only be destroyed with approval from the ethics committee.

### Q2: My hard drive failed — how can I recover my data?

If you followed the 3-2-1 backup strategy, you can restore from your local backup or a cloud copy. ANU Research Data Storage keeps 30 days of version history, so you can roll back to any point in time. If you have no backup, you can contact ANU IT Services to attempt data recovery (success rate about 60–80%), but it costs money (about 100–500 AUD per attempt). It is a good idea to test your recovery process once a month.

### Q3: Can I store ANU data on Baidu Netdisk or Tencent Cloud?

No. ANU's data security policy prohibits storing research data on cloud services located outside Australia, especially when ethics-related or sensitive data is involved. Baidu Netdisk's servers are in China and fall under the People's Republic of China Cyber Security Law, so ANU cannot guarantee data privacy. Compliant alternatives include ANU OneDrive, ANU Research Data Storage, or Google Drive (provided the data is stored in an Australian data centre).

## References
- Australian National University. 2023. *Research Data Management Policy*.
- Australian Research Council. 2022. *Research Integrity Framework*.
- National Health and Medical Research Council. 2018. *Australian Code for the Responsible Conduct of Research*.
- Office of the Australian Information Commissioner. 1988. *Privacy Act 1988*.
- Unilink Education. 2024. *ANU Graduate Data Management Survey Database*.
