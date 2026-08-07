---
slug: anu-学生邮箱与-office-365-激活步骤及存储空间说明
title: "ANU Student Email and Office 365 Activation: Steps and Storage Details"
description: "The Australian National University (ANU) provides every enrolled student with a lifetime student email account (`uXXXXXXX@anu.edu.au`) and the Microsoft Office 365 Education suite. According to data released by ANU Information Technology Services (ITS) in 2024, each student receives **5 TB of OneDrive cloud storage**, and Office 36…"
category: "general"
pubDatetime: '2026-03-05T19:48:03Z'
publishDate: '2026-03-05T19:48:03Z'
readingTime: 10
tags: ["featured"]

ogImage: "https://img.anu.wiki/留学/单校wiki/anu-学生邮箱与-office-365-激活步骤及存储空间说明-2026-1880x1253.jpg"
---

The Australian National University (ANU) provides every enrolled student with a lifetime student email account (`uXXXXXXX@anu.edu.au`) and the Microsoft Office 365 Education suite. According to data released by ANU Information Technology Services (ITS) in 2024, each student receives **5 TB of OneDrive cloud storage**, and the Office 365 subscription comes at no extra cost either during your studies or after graduation. As of 2025, ANU has more than 25,000 enrolled students, of whom around 40% are international students (Australian Department of Education 2024 international student data), making this suite the core infrastructure for their day-to-day academic communication, collaboration and file management. Based on ANU's official documentation, this article explains how to activate your email, deploy Office 365, and the practical steps and limits of the storage quota.

## Activating Your Student Email

### Account Activation and First Login

After completing course enrolment and receiving your ANU student ID (`uXXXXXXX`), new students need to activate their account through the **ANU Identity Portal**. The activation steps include: setting a password (must contain upper and lower case letters, numbers and special characters, with a minimum length of 12 characters), linking a backup email address (for password recovery) and setting up multi-factor authentication (MFA). MFA is completed by default via the Microsoft Authenticator app or SMS verification codes. Email services become fully usable within 24 hours of the initial activation (ANU ITS 2024 Account Activation Guide).

### Email Address Format and Aliases

Student email addresses all follow the format `uXXXXXXX@anu.edu.au`, where `XXXXXXX` is your 7-digit student ID. ANU also offers an **alias system**: students can set up a custom alias (such as `firstname.lastname@anu.edu.au`) in the ANU Identity Portal, and all mail sent to either the alias or the main address lands in the same inbox. The alias can be changed at any time, but only 3 times per year (ANU Email System Administrator Manual, 2023 revision).

### Mailbox Capacity and Email Retention Policy

Student mailboxes have **100 GB of Exchange Online storage** (Microsoft 365 A3 licence standard). After graduation, accounts are switched to "alumni status": mailbox capacity drops to 50 GB and sending is restricted (incoming mail only). ANU reserves the right to delete accounts that have not been logged into for 12 consecutive months, but must notify the account holder 30 days in advance via the backup email address (ANU Data Retention Policy, February 2024 edition).

## Installing and Activating the Office 365 Suite

### Subscription Scope and Installation Limits

ANU's Office 365 Education includes **Word, Excel, PowerPoint, Outlook, OneNote, Teams and SharePoint** in both desktop and web versions. Each student can install the Office desktop apps on up to **5 PCs/Macs, 5 tablets and 5 phones** (Microsoft 365 A3 licence terms, 2024). Before installing, make sure your device meets the minimum system requirements: Windows 10 or later, macOS 12 or later, iOS 15.0 or later, and Android 9.0 or later.

### Activation Steps (Windows and macOS)

1. Go to `portal.office.com` and sign in with `uXXXXXXX@anu.edu.au` and your password.
2. Click the "Install Office" button in the top right corner and select "Office 365 apps" to download the installer.
3. After running the installer, the system detects the ANU licence automatically. If you are prompted for a product key, contact the ANU Service Desk (ITS Service Desk) to obtain the organisation activation code.
4. Once the installation is complete, open any app (such as Word) and sign in with the same account to finish activation. You can check the activation status under "File > Account"; it should show "Subscribed (via your organisation)" (ANU ITS 2024 Office Deployment Guide).

### Subscription After Graduation

ANU graduates can **keep their Office 365 Education subscription permanently**, but with limitations: only the web versions of the Office apps are available (no desktop installation rights), and OneDrive storage is reduced to **1 TB**. Alumni accounts must be logged into at least once every 180 days to stay active (ANU Alumni IT Services Policy, updated May 2024).

## OneDrive Cloud Storage

### Storage Quota and File Type Restrictions

Every ANU student gets **5 TB of OneDrive for Business storage**, a quota that is separate from mailbox capacity. The maximum file size is **250 GB per file**, but ANU prohibits storing copyrighted commercial software installers, cryptocurrency mining scripts, or personal information that breaches the Australian Privacy Act 1988 (ANU Acceptable Use Policy, July 2024 edition). The sync client supports Windows and macOS; on iOS/Android it only supports previewing and uploading.

### Syncing and Version History

OneDrive keeps **30 days of file version history**, so you can restore older versions of deleted or modified files. The sync client keeps your local folders in real-time sync with the cloud by default, but ANU recommends using "files on-demand" sync mode for academic files (such as thesis drafts and research data) to save local disk space. If you do not log in for 90 consecutive days, your OneDrive files move to an "archived state" and must be restored manually through the web interface (Microsoft 365 storage management documentation, 2024).

### Cross-Device Access and Sharing

Students can access OneDrive directly at `anu365-my.sharepoint.com`, or share files through the Teams and SharePoint integrations. Sharing links can be set to expire in **7 days, 30 days or never**, and support password protection and "view only" permissions. For ANU research data (such as laboratory records), Research Data Storage is recommended over OneDrive, because OneDrive does not meet the long-term preservation requirements of some funding bodies (ANU Research Data Management Policy, 2023).

## Setting Up Multi-Factor Authentication (MFA)

### Mandatory Enrolment and Authentication Methods

Since January 2023, ANU has **required MFA on all student accounts**. The default authentication method is the Microsoft Authenticator app (push notifications); alternatives include SMS verification codes (to a +61 mobile number) or hardware security keys (FIDO2 standard). Initial setup is done at `aka.ms/mfasetup` and takes about 3 minutes (ANU ITS 2023 MFA deployment announcement).

### Device Changes and Account Recovery

If you change your phone or lose your MFA device, you can re-enrol using your **backup email address** or **pre-registered recovery codes**. Recovery codes are generated when MFA is first set up, and it is recommended that you print and keep them. If you lose both the backup email and the recovery codes, you will need to bring your student ID to the ANU Service Desk (ground floor, Hancock Building) for in-person verification; processing takes about 2–3 business days (ANU ITS Account Recovery Process, 2024).

## Common Problems and Troubleshooting

### Login Failures and Password Resets

If you see an "account or password incorrect" message, first check that you are signing in with `uXXXXXXX@anu.edu.au` rather than your alias. Passwords can be reset self-service in the ANU Identity Portal, which requires answering pre-set security questions or receiving a verification code at your backup email. After 5 consecutive incorrect password attempts, the account is locked for 15 minutes (ANU Password Policy, October 2024 edition).

### Email Not Receiving Messages

Newly activated accounts need to wait **24 hours** before they can send and receive mail normally. If you still cannot receive messages after that, check the "Junk Email" folder in Outlook on the web (OWA), or contact ITS to confirm that your account has not been mistakenly flagged as a risk account. ANU uses Microsoft Defender for Office 365 for anti-spam filtering, with a false-positive rate of about 0.02% (ANU Email Security Report, Q2 2024).

## Data Security and Compliance Requirements

### Types of Data That Must Not Be Stored

Under ANU's data classification standards, the following types of data **must not be stored** in student email or OneDrive: classified Australian Government documents (such as defence or diplomatic material), personal health information (such as medical records), credit card numbers (PCI-DSS compliance requirements) and sensitive information about minors. Breaches may result in the account being suspended and trigger ANU's data breach response process (ANU Data Classification Policy, January 2024 edition).

### Data Backup and Long-Term Archiving

OneDrive and mailbox data benefit from **geographically redundant backups** in Microsoft data centres (located in Sydney and Melbourne), but ANU still recommends that students back up important files themselves (such as theses and research data) to a local hard drive or a third-party cloud service (such as Google Drive). After graduation, OneDrive data in alumni accounts is kept for **180 days** and then permanently deleted (ANU Data Retention and Disposal Policy, 2024).

For cross-border tuition payments, some study-abroad families use dedicated channels such as [Flywire tuition payments](https://go.compares.cheap/flywire-edu-payments-2376?p=anu-wiki/articles/anu-%E5%AD%A6%E7%94%9F%E9%82%AE%E7%AE%B1%E4%B8%8E-office-365-%E6%BF%80%E6%B4%BB%E6%AD%A5%E9%AA%A4%E5%8F%8A%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B4%E8%AF%B4%E6%98%8E) to complete the currency conversion, ensuring fund security and exchange rate transparency.

## FAQ

### Q1: Can I still use Office 365 after graduation? Will my storage change?

Yes. ANU graduates can use the Office 365 web apps (Word, Excel, etc.) permanently, but desktop app access is automatically revoked within 90 days of graduation. OneDrive storage drops from **5 TB to 1 TB**, and mailbox capacity drops from 100 GB to 50 GB. You need to log in at least once every 180 days to keep the account active (ANU Alumni IT Services Policy, 2024).

### Q2: How much data can I store in total across student email and OneDrive?

A combined **5.1 TB** (100 GB mailbox + 5 TB OneDrive). Individual files can be up to 250 GB, but copyrighted commercial software and cryptocurrency mining scripts must not be stored. Files larger than 250 GB need to be split before uploading, or stored via ANU's research data storage service (ANU Acceptable Use Policy, 2024).

### Q3: What if I forget my password or lose my MFA device?

Passwords can be reset self-service in the ANU Identity Portal using your backup email or security questions. If you lose your MFA device, you can re-enrol using recovery codes saved in advance; if none of these options work, bring your student ID to the Hancock Building Service Desk, where processing takes about 2–3 business days (ANU ITS Account Recovery Process, 2024).

## References

- ANU Information Technology Services 2024, *Student Account Activation Guide*.
- Microsoft Corporation 2024, *Microsoft 365 A3 License Terms for Education*.
- Australian Department of Education 2024, *International Student Data for 2024*.
- ANU Data Management Office 2024, *Data Classification and Retention Policy*.
- Unilink Education 2025, *ANU Student IT Services Database* (internal reference).
