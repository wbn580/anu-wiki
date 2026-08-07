---
slug: how-to-activate-your-anu-student-email-and-install-microsoft-office-365-on-your
title: "How to Activate Your ANU Student Email and Install Microsoft Office 365 on Your Devices"
description: "The Australian National University (ANU) provides every enrolled student with a lifetime `@anu.edu.au` email account and authorises free installation of Microsoft Office 365 ProPlus during their studies. According to ANU Information Technology Services (ITS, 2024), more than 98% of official course notices and administrative matters are distributed through this email system, and students who have not activated their accounts are on average delayed…"
category: "How"
pubDatetime: '2026-04-19T19:57:14Z'
publishDate: '2026-04-19T19:57:14Z'
readingTime: 3
tags: ["featured"]
lang: en
language: en

ogImage: "https://img.anu.wiki/留学/单校wiki/how-to-activate-your-anu-student-email-and-install-microsoft-office-365-on-your-2026-1880x1253.jpg"
---

The Australian National University (ANU) provides every enrolled student with a lifetime `@anu.edu.au` email account and authorises free installation of Microsoft Office 365 ProPlus during their studies. According to ANU Information Technology Services (ITS, 2024), more than 98% of official course notices and administrative matters are distributed through this email system, and students who have not activated their accounts receive key enrolment information an average of 3.2 business days late. ANU's Campus Agreement with Microsoft also covers 8 desktop applications including Word, Excel and PowerPoint, allowing students to install them on up to 5 devices at the same time. Given that ANU ranked 34th in the 2024 QS World University Rankings and was the first university in the Group of Eight (Go8) to complete a full Microsoft 365 migration across its IT infrastructure, mastering account activation and software deployment has become the first technical hurdle of a new student's enrolment.

## Activating your ANU student email account

### Getting your initial credentials and unified identity authentication

After a new student completes course enrolment and pays the first tuition instalment, the ANU Admissions Office sends a system email titled "Your ANU IT Account Credentials" to the personal email address provided in the application within 24 to 48 hours. The email contains a **Uniform Resource Identifier (URI) link** pointing to the ANU identity management system (IDM). Students must click the link within 72 hours of receiving the email to set an initial password. The password must be at least 12 characters long and include at least three of the following: uppercase letters, lowercase letters, digits and special symbols. Under ANU's cybersecurity policy (2023), the system forces **multi-factor authentication (MFA)** after the first login, usually via Microsoft Authenticator or SMS verification codes.

### Signing in to your mailbox via Outlook Web App

Once identity activation is complete, students can open `outlook.office.com` in a browser and sign in with their full email address (in the format `[uniID]@anu.edu.au`) and the password they just set. ANU uses an **Exchange Online hosted solution**, with an initial mailbox storage quota of 50 GB and an attachment size limit of 25 MB. After signing in, the interface automatically shows the official ANU calendar, including key academic dates (semester start dates, exam weeks, fee deadlines). If the credentials email has not arrived after 48 hours, students can log in to the ANU self-service portal (`services.anu.edu.au`) and submit a ticket; the average response time is 1.7 business days (ITS, 2024).

## Installing Microsoft Office 365 ProPlus

### Checking licence coverage and system requirements

The Office 365 subscription provided by ANU is an **A3 education edition (Education E3)** covering the full suite of desktop, mobile and web apps. Desktop support covers Windows 10/11 (64-bit) and macOS 11 (Big Sur) or later; mobile support covers iOS 14 and Android 8.0 and above. Each student can install on **5 Windows/Mac devices** and 5 mobile devices simultaneously. Note that the licence ends when the student graduates, though read-only access to already-installed apps remains — you just cannot edit or create new documents.

### Downloading the installer from the ANU software portal

Installation files must come from ANU's official software distribution platform, not the public Microsoft website. Go to `software.anu.edu.au` and sign in with your ANU unified identity (uniID and password). Under the "Microsoft Office" category, select "Office 365 ProPlus"; the system automatically detects your operating system version and offers the matching 64-bit installer. No product key is needed during installation, because **the licence is bound at the ANU tenant level**, and the installer verifies your student identity automatically over the university network. After installation, sign in with your `@anu.edu.au` email address when first launching any Office app to complete activation. If installation fails, common causes include the system not being updated to the latest patches or remnants of an older Office version (such as 2016); run Microsoft's official uninstall tool "SetupProd_OffScrub" first.

## Setting up mobile devices and multi-device sync

### iOS and Android setup

On mobile, students need to download the "Microsoft 365 (Office)" app from the official app store. After installing, tap "Sign in" and enter your ANU email address; the system redirects you to ANU's **Azure AD sign-in page**. Because of the MFA policy, the first mobile sign-in requires approving a notification in your registered authenticator app. Once signed in, the app automatically syncs files from OneDrive for Business and provides 1 TB of cloud storage (ANU's enterprise quota). When paying tuition across borders, some families use dedicated channels such as [Flywire tuition payments](https://go.compares.cheap/flywire-edu-payments-2376?p=anu-wiki/articles/how-to-activate-your-anu-student-email-and-install-microsoft-office-365-on-your) to handle currency conversion, ensuring that fund arrival times do not hold up the account activation process.

### Outlook mail and calendar sync

When configuring a native mail client on mobile, ANU recommends the official Outlook app over the system's built-in mail program, because the **Exchange ActiveSync protocol** can trigger security restrictions on non-Microsoft clients, delaying mail sync by more than 15 minutes. In the Outlook app, choose the "Exchange" account type and the server address is auto-filled as `outlook.office365.com`. Calendar sync is on by default, so ANU academic calendar events (lectures, tutorials, for example) appear in your personal schedule automatically. To add the ANU shared calendar manually, enter the sharing link for `calendar@anu.edu.au`.

## Troubleshooting common activation and installation issues

### Account lockout and password reset

Entering the wrong password 5 times in a row locks the account for 30 minutes. During this time, students cannot sign in to any ANU system, including email, Wattle (the learning management system) and library resources. To unlock, go to `password.anu.edu.au` and use **security questions** or a reset link sent to your backup email. ANU ITS (2024) statistics show that about 12% of activation failures stem from students not setting their initial password within 72 hours, causing the credentials link to expire. In such cases, contact the ITS Service Desk (phone: +61 2 6125 4321) to have the link manually regenerated; processing takes about 4 hours.

### Handling Office activation error codes

If Office shows "unlicensed product" or error code 0xC004F074 after installation, it usually means **the tenant licence has not synced**. The fix: quit all Office apps, open "Command Prompt (Admin)" and run `cd C:\Program Files\Microsoft Office\Office16`, then `cscript ospp.vbs /dstatus` to check the current licence status. If it shows "LICENSE_STATUS: NOT ACTIVATED", run `cscript ospp.vbs /act` to force reactivation. If that still fails, make sure the device is connected to the ANU network (including VPN), because some licence verifications rely on the university's IP range.

## Keeping your account secure and compliant

### Mail forwarding and aliases

ANU allows students to forward `@anu.edu.au` mail automatically to a personal address (such as Gmail or Outlook.com), but note that forwarding **sensitive information (such as transcripts and visa documents)** may breach ANU's data classification policy (2023). To set it up: sign in to Outlook Web App → Settings → Mail → Forwarding. Students can also apply for up to 3 email aliases (such as `firstname.lastname@anu.edu.au`) for different purposes (academic contact, club matters, etc.). Aliases share the same inbox as the primary address and cannot be signed into separately.

### Account retention after graduation

Under ANU's information technology use policy (2024), after graduation the `@anu.edu.au` mailbox keeps **12 months** of read-only access. During this period, students can export email data (using Outlook's .pst export feature) and OneDrive files. The Office 365 desktop licence ends on graduation day, but Office on the web can still view saved documents. Twelve months after graduation the account is deleted entirely and all data becomes unrecoverable. Students are advised to start migrating academic materials to personal cloud storage or local drives 6 months before graduation.

## FAQ

### Q1: How long does it take to activate an ANU student email account?

From receiving the credentials email to completing the first sign-in takes about 15 minutes on average, including setting the password and configuring MFA. If the credentials link has expired, you need to contact ITS to have it regenerated, which can stretch the total time to 4 to 6 hours. ANU ITS (2024) data shows that activation requests peak in the two weeks before the semester starts, exceeding 800 per day.

### Q2: Can I still use the Office 365 desktop apps after graduation?

No. On graduation day, ANU's A3 education licence ends. The desktop Office apps enter "reduced functionality mode", allowing only viewing and printing, not editing or creating new files. Before graduating, students can download files to a local drive via `portal.office.com`, or subscribe to a personal Office 365 plan (the family plan costs about RMB 498 per year) to keep using the software.

### Q3: If I cannot sign in to Wattle or the university VPN, is it related to email activation?

Yes. Wattle, the VPN and email all share the same ANU unified identity system (Active Directory). If email sign-in fails (wrong password or a locked account, for instance), the other systems fail in sync. The fix is to reset the password first at `password.anu.edu.au`, wait 10 minutes for synchronisation, then try signing in to Wattle or the VPN again.

## References

- Australian National University Information Technology Services (ITS). 2024. *ANU IT Account Activation and Support Statistics*.
- Australian National University. 2023. *ANU Data Classification and Handling Policy*.
- Australian National University. 2024. *Information Technology Use Policy for Students*.
- Microsoft Corporation. 2024. *Microsoft 365 Education E3 Licensing Guide for Higher Education Institutions*.
- Unilink Education. 2024. *ANU Student IT Onboarding Database (Internal Reference)*.
