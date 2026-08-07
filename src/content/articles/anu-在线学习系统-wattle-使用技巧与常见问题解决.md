---
slug: anu-在线学习系统-wattle-使用技巧与常见问题解决
title: "ANU Wattle (Online Learning System): Usage Tips and Troubleshooting"
description: "ANU's online learning system **Wattle** (Web Access to Teaching & Learning Environment) is the official learning management system (LMS) deployed by the Australian National University (ANU) since 2012, custom-built on the open-source Moodle platform. As of Semester 1 2025, Wattle hosts online teaching resources for more than 25,000 enrolled students and over 1,800 courses, with around 1.2 million page views per day [ANU IT Services, 2024, Wattle Platform Annual Report]. During the COVID-19 pandemic (2020–2022), the system transformed from a supplementary tool into core teaching infrastructure, and it remains the default entry point for ANU's blended learning, covering the full workflow of course material distribution, assignment submission, group collaboration, online quizzes and grade publication. For new and continuing students in 2025, mastering Wattle's core operations and troubleshooting methods is directly tied to course participation and academic progress."
category: "general"
pubDatetime: '2026-03-02T19:47:25Z'
publishDate: '2026-03-02T19:47:25Z'
readingTime: 12
tags: ["featured"]

ogImage: "https://img.anu.wiki/留学/单校wiki/anu-在线学习系统-wattle-使用技巧与常见问题解决-2026-1880x1253.jpg"
---

ANU's online learning system **Wattle** (Web Access to Teaching & Learning Environment) is the official learning management system (LMS) deployed by the Australian National University (ANU) since 2012, custom-built on the open-source Moodle platform. As of Semester 1 2025, Wattle hosts online teaching resources for more than 25,000 enrolled students and over 1,800 courses, with around 1.2 million page views per day [ANU IT Services, 2024, Wattle Platform Annual Report]. During the COVID-19 pandemic (2020–2022), the system transformed from a supplementary tool into core teaching infrastructure, and it remains the default entry point for ANU's blended learning, covering the full workflow of course material distribution, assignment submission, group collaboration, online quizzes and grade publication. For new and continuing students in 2025, mastering Wattle's core operations and troubleshooting methods is directly tied to course participation and academic progress.

## Logging in and account setup

Wattle uses ANU's Unified Authentication system for login. Accounts use the student number format (uXXXXXXX), and passwords are synchronised with the ANU email (Microsoft 365). First-time login requires completing multi-factor authentication (MFA) setup; the Microsoft Authenticator app is recommended.

### **Login portal** and browser compatibility

Wattle's official URL is `wattle.anu.edu.au`. The system fully supports mainstream browsers (Chrome 112+, Firefox 110+, Edge 110+, Safari 16+). According to test data from ANU's Digital Literacy team in 2024, **Chrome** loads pages on Wattle about 18% faster than Safari and has the best compatibility with the H5P interactive content embedded in Moodle. Internet Explorer or outdated Safari versions (below 15) are not recommended, as they can cause file upload failures or quiz submission errors.

### **Account passwords** and MFA issues

Passwords must be changed every 180 days and can be reset self-service through the ANU Identity Manager. If you lose your MFA device, contact the ANU Service Desk (phone 02 6125 4321) or submit a ticket online; the average response time is 2.4 hours [ANU Service Desk, 2024, Incident Resolution Metrics]. Registering a backup device (such as a spare phone or hardware security key) in advance is recommended.

## Course page navigation and personalisation

Each course has its own space on Wattle, organised by semester by default. The course home page typically contains five sections: "Announcements", "Course outline", "Weekly learning modules", "Assignments" and "Discussion forums".

### **Dashboard** and notification management

After logging in you will see your personal Dashboard, which shows activity summaries for all your enrolled courses. You can adjust the frequency of push notifications via "Settings > Notification preferences" in the top right. By default, Wattle sends an email for every forum post, which can mean 30–80 emails a day. It is recommended to change forum-post notifications to "daily digest" or "off", keeping instant alerts only for "assignment deadlines" and "grade releases".

### **Sidebar** and resource search

The "Navigation" sidebar on the left of the course page contains links such as "My courses", "Calendar" and "Private files". The "Calendar" feature can sync to Google Calendar or Outlook, showing assignment deadlines and quiz times across all courses. According to ANU Student Experience Survey 2024 data, students who **use the calendar sync feature** submit assignments on time at a rate 12.3 percentage points higher than those who do not [ANU Centre for Learning & Teaching, 2024, Student Engagement Survey Report].

## Assignment submission and Turnitin similarity checks

Wattle integrates the Turnitin originality-checking tool as a core part of enforcing ANU's academic integrity policy. All written assignments (essays, reports) must be submitted through Turnitin.

### **File upload** formats and size limits

Supported formats include PDF, DOCX, XLSX, PPTX and ZIP, with a maximum file size of **100 MB**. Files that exceed this limit (such as videos or large datasets) must be uploaded to ANU CloudStor (the campus cloud storage based on ownCloud), with the share link pasted into the Wattle assignment area. In Semester 2 2024, ANU handled more than 4,300 submission failures caused by oversized files, 68% of which could be resolved by compressing the PDF or splitting the ZIP [ANU IT Services, 2024, Wattle Support Case Analysis].

### Interpreting **Turnitin similarity** reports

A similarity report is usually generated within 15–30 minutes of submission. ANU's academic integrity guidelines recommend that assignments with a **Similarity Index** above 25% be manually reviewed by the course convenor. Note that Turnitin cannot detect paraphrasing of diagrams, code or non-English sources, so students must still ensure their own referencing is correct. If you spot an error after submitting, you can resubmit before the deadline — the system overwrites the previous version (only the last submission is kept).

## Online quizzes and time-limit management

Wattle supports a range of question types (multiple choice, fill-in-the-blank, short answer, matching), and most quizzes have time limits and a single-submission limit.

### Things to know about **timed quizzes**

Quiz timing starts when you click "Start attempt". If you close the browser or lose your connection mid-quiz, the timer does not pause. ANU revised its *Online Quiz Technical Incident Handling Procedure* in 2023, which states that if a submission fails due to a network outage, students must provide a screenshot of their **ISP or campus Wi-Fi connection logs** to the course convenor within 24 hours as evidence. In Semester 1 2024, ANU received 247 quiz technical incident appeals, of which 82 (about 33%) were rejected for lack of log evidence.

### **Secure browser** and LockDown Browser

Some high-stakes quizzes (such as final exams or qualifying tests) require Respondus LockDown Browser, which locks the screen and disables copy-paste and external applications. Turn off your VPN before installing, otherwise installation may fail. Public computers in ANU Library's 24-hour study spaces (such as Hancock Library) come with the software pre-installed.

## Group collaboration and discussion forum features

The "Groups" feature in Wattle lets lecturers divide students into groups, each with its own file-sharing area and forum. The feature is used in more than 90% of ANU's team-based project courses (such as ENGN2226 Systems Engineering Project).

### **Forum participation** and marking criteria

Some courses count forum posts toward the continuous assessment mark (usually 5%–15% of the final grade). ANU Academic Board 2024 guidelines are clear that forum posts must meet the "**substantive contribution**" standard: a single post of at least 50 characters that cites course materials or external sources. Replying with only "I agree" or copying others' content earns no marks. Students can use Wattle's "forum subscription" feature to follow replies on specific topics.

### **Group file sharing** and version control

The group file area supports drag-and-drop uploads, but has no version history. Group members are advised to include the date and version number in file names (e.g. `Report_v2_20250301.docx`). For collaborative editing, syncing files to SharePoint or OneDrive in ANU Office 365 is recommended rather than relying on Wattle's private file system.

## Mobile access and offline study

Wattle has no standalone mobile app, but it can be accessed through a mobile browser (Chrome or Safari). After the responsive design update in 2024, compatibility with screens larger than 6.0 inches improved to 95%.

### **Mobile browser** optimisation tips

On Android devices, "Add to Home Screen" for the Wattle page creates an app-like shortcut that can receive push notifications. iOS users need to enable "Allow Cross-Website Tracking" in Safari to load embedded videos (such as Echo360 recordings) properly. According to ANU Digital Learning team testing in 2024, the **mobile** file upload success rate is about 92%, lower than the 98% on desktop, so submitting assignments from a computer before the deadline is recommended.

### **Offline access** limitations

Wattle does not support a fully offline mode. Users can manually download course PDFs and slides, but interactive content (such as H5P exercises) and quizzes require an internet connection. All 7 ANU Library branches offer Wi-Fi and public computers, of which Hancock Library and Chifley Library are open 24 hours.

## Common error codes and technical support

Wattle can hit performance bottlenecks during peak periods (week 1, week 7 and exam weeks of each semester). ANU's IT team upgraded the server cluster in 2024, keeping 99.9% of page loads under 3 seconds.

### **Error 403** and permission issues

A "403 Forbidden" error usually means you do not have access to that course page. There are three common causes: you have not completed course enrolment in ISIS (ANU's student information system); the course is not yet open (the lecturer has set a release date); or the semester has ended (the course has been archived). Check your enrolment status in ISIS, or contact the course administrator to request access.

### **File upload failures** and cache clearing

If you get a "Server Error" or "File not saved" when uploading, try clearing your browser cache and cookies first, then attempt the submission in incognito mode. If the problem persists, switch networks (for example from campus Wi-Fi to mobile data). Of the 1,200 Wattle tickets handled by the ANU Service Desk in 2024, around 45% could be resolved with the steps above [ANU IT Services, 2024, Wattle Support Case Analysis].

### Handling **grade display issues**

If the scores in the Wattle Gradebook do not match what your lecturer has published, first check whether the "Feedback" area of the assignment contains the marking criteria. If you are still in doubt, raise an objection through Wattle's "grade appeal" function within **14 calendar days** of the grade being released; after that, the appeal portal closes automatically.

## FAQ

### Q1: What should I do if I cannot log in to Wattle?

First check whether your password has expired (it must be changed every 180 days) and reset it via the ANU Identity Manager. If you still cannot log in, try clearing your browser cache or using incognito mode. If the error says "Account locked", you have entered the wrong password too many times — wait 15 minutes before retrying, or contact the ANU Service Desk (phone 02 6125 4321). 2024 data shows that around 73% of login issues can be resolved within 10 minutes by resetting the password.

### Q2: Which time zone do Wattle assignment deadlines use?

All deadlines use **Australian Eastern Standard Time (AEST, UTC+10)** and do not adjust for daylight saving. During daylight saving (October to April), the actual deadline is 3 hours earlier than Beijing time. It is recommended to manually convert deadlines to your local time in the Wattle calendar to avoid misjudging them. ANU handled 56 late-submission appeals caused by time-zone confusion in 2024, of which 39 were rejected.

### Q3: How do I view archived past courses on Wattle?

Around 30 days after the semester ends, courses are automatically moved to the "Archived courses" area. Click the "Show all courses (including archived)" link on the dashboard, or find them under "Course management" in the "My courses" sidebar. Assignments and forum content in archived courses are read-only and cannot be modified or resubmitted. If you need to download course materials, save them before the semester ends.

## References

- ANU IT Services 2024, *Wattle Platform Annual Report*
- ANU Service Desk 2024, *Incident Resolution Metrics*
- ANU Centre for Learning & Teaching 2024, *Student Engagement Survey Report*
- ANU Academic Integrity Office 2024, *Online Assessment Guidelines*
- Unilink Education 2024, *ANU Student Digital Experience Database*
