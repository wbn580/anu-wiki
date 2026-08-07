---
slug: anu-语言学专业语料库资源访问权限与使用方法
title: "ANU Linguistics: Corpus Resource Access Permissions and Usage Guide"
description: "The linguistics program at the Australian National University (ANU) hosts one of the largest corpus resource clusters in the Southern Hemisphere, with more than 120 accessible corpora spanning 47 language varieties from Old English to contemporary Australian Aboriginal languages. According to the 2024 QS World University Rankings by Subject, ANU linguistics ranks 26th globally, and research output in corpus linguistics accounts for 38% of the discipline's total【QS, 20…"
lang: en
language: en
category: "general"
pubDatetime: '2026-03-15T19:50:11Z'
publishDate: '2026-03-15T19:50:11Z'
readingTime: 15
tags: ["featured"]
hideFromHome: true
ogImage: "https://img.anu.wiki/留学/单校wiki/anu-语言学专业语料库资源访问权限与使用方法-2026-1880x1253.jpg"
---

ANU's linguistics program hosts one of the largest corpus resource clusters in the Southern Hemisphere, with access to more than 120 corpora covering 47 language varieties, from Old English to contemporary Australian Aboriginal languages. According to the 2024 QS World University Rankings by Subject, ANU linguistics ranks 26th globally, and corpus linguistics research accounts for 38% of the discipline's total output【QS, 2024, QS World University Rankings by Subject】. In 2025, after the Australian Research Council (ARC) classified corpus linguistics as a "national key research infrastructure" category, ANU systematically reorganised access to its on-campus corpora and added remote access channels for 12 restricted databases. Drawing on the Linguistics Digital Resources Guide published by the ANU Library in March 2025 and official documents from ANU Information Technology Services, this article sets out the access tiers for corpus resources, how to use them on campus and remotely, and common workflows.

## Corpus Resource Tiers and the Access System

Corpus resources for ANU linguistics are divided into three access tiers: **Open Access**, **Campus Network** and **Restricted Access**. According to ANU Library data from January 2025, of the 127 corpora accessible university-wide, 41 (32.3%) are open access, 53 (41.7%) are campus-network, and 33 (26.0%) are restricted【ANU Library, 2025, Linguistics Digital Resources Guide】.

### Open Access Corpora

Open-access corpora can be used without an ANU account. They mainly include internationally standard corpora such as the **British National Corpus (BNC)**, the **Corpus of Contemporary American English (COCA)** and the **International Corpus of English (ICE)**. These are linked directly from the "External Resources" page on the ANU linguistics department website, though ANU's internal mirror site loads 2.3 times faster than the external sources (based on ANU network performance tests from October 2024).

### Campus Network Corpora

Campus-network corpora require connecting to the ANU campus network (including the eduroam wireless network or residential wired networks). Resources in this tier include the **Australian National Corpus (AusNC)**, the **Corpus of Oz Early English (COOEE)** and the **Monash Corpus of Spoken English**. Access requires identity verification through the ANU single sign-on (SSO) system, which automatically recognises IP address ranges. To use them off campus, you must first establish a VPN connection to the ANU campus network.

### Restricted Access Corpora

Restricted corpora require a separate permission application and typically involve unpublished fieldwork data or commercially licensed corpora. For example, the **Aboriginal Languages of Australia Corpus** contains transcribed recordings of 23 Aboriginal languages; applications must submit a research plan to the research ethics committee of ANU's School of Anthropology and Linguistics. Approval takes 10 to 15 business days, and successful applicants receive 12 months of access【ANU College of Arts and Social Sciences, 2024, Research Data Access Policy】.

## VPN Connection and Remote Access Setup

For users off campus, remote access to campus-network and restricted corpora must go through the **ANU Virtual Private Network (VPN)** service. ANU Information Technology Services offers two VPN protocols — AnyConnect and OpenVPN — suited to different operating systems.

### AnyConnect Setup Steps

AnyConnect is ANU's recommended VPN solution and supports Windows, macOS, iOS and Android. Users download the Cisco AnyConnect client from the ANU software portal and connect to `vpn.anu.edu.au`, logging in with ANU unified authentication (Uni ID + password + multi-factor authentication). Once connected, your IP address will show as an ANU campus network range (130.56.x.x or 149.171.x.x), granting full access to campus-network resources.

### OpenVPN Setup and Use Cases

OpenVPN suits Linux systems or research scenarios that need a more stable connection. ANU provides configuration file templates that users import into an OpenVPN client and authenticate with their credentials. According to ANU Information Technology Services statistics for 2024, OpenVPN's average connection latency is 42 ms — 18 ms lower than AnyConnect — making it well suited to bulk downloads of large corpora【ANU Information Technology Services, 2024, VPN Performance Report】.

### Connection Testing and Troubleshooting

After connecting, users can confirm their IP address by visiting `http://whatismyip.anu.edu.au`. Common faults include multi-factor authentication timeouts (the connection drops automatically if verification is not completed within 60 seconds) and DNS resolution failures. Solutions include clearing the local DNS cache (`ipconfig /flushdns` on Windows, `sudo killall -HUP mDNSResponder` on macOS) or switching VPN server nodes.

## The On-Campus Corpus Server and Command-Line Tools

ANU's linguistics department maintains a dedicated corpus server, `corpus.anu.edu.au`, offering both a **command-line interface** and a **web interface**. The server stores complete copies of 18 large corpora, with a total storage capacity of 4.7 TB.

### SSH Access and Query Languages

Postgraduates and staff with an ANU computing account can log in to the server over SSH. Common query tools include **CQP (Corpus Query Processor)** and the command-line version of **AntConc**. CQP supports regular-expression queries — for example, retrieving all inflected forms of the verb "run" uses the syntax `[word="run" & pos="V.*"]`. Server logs show that part-of-speech-tagged combined searches were the most common query pattern in Q3 2024, accounting for 34% of all queries.

### Local Downloads and Usage Restrictions

Some datasets in restricted corpora may be downloaded to a local computer, but must comply with the **data usage agreement**. For example, downloaded copies of the Australian National Corpus must be deleted within 90 days and must not be used for commercial purposes. Downloads are done through the SFTP service on `corpus.anu.edu.au`, with a maximum download speed of 100 Mbps. For datasets larger than 10 GB, the system automatically packages the data and sends a download link to the ANU email address.

### Server Maintenance and Scheduling

The server undergoes routine maintenance every Wednesday from 2:00 to 6:00 a.m. (Australian Eastern Standard Time). Users can schedule batch queries with `cron` jobs, and the system emails the results when they complete. In 2024 the server had an average uptime of 99.3%, with total unplanned downtime across the year kept under 24 hours.

## Corpus Analysis Software and API Integration

ANU holds **campus licences** for several corpus analysis tools for linguistics students, including AntConc, WordSmith Tools and Sketch Engine. The software can be obtained directly through the ANU software portal or the corpus server.

### Installing and Configuring AntConc Locally

AntConc version 4.2 is pre-installed on 48 workstations in the linguistics department's computer labs. Individual users can download the installer from the ANU software portal; after installation, the corpus file paths must be added to the software's working directory. Key features supported by AntConc include word frequency lists, collocation analysis and n-gram extraction. For Chinese corpora, make sure the encoding is set to UTF-8, otherwise the text will display as garbled characters.

### Sketch Engine Cloud Access

Sketch Engine is the online corpus analysis platform ANU subscribes to, supporting advanced features such as **Word Sketch**, **Thesaurus** and **Concordance**. After logging in via SSO, ANU users can access more than 600 built-in corpora, including ANU's exclusive **Australian English Web Corpus** (containing 1.2 billion words). The platform also offers an API, allowing users to run batch analyses in Python or R. For cross-border tuition payments, some study-abroad families use specialist channels such as [Flywire tuition payments](https://go.compares.cheap/flywire-edu-payments-2376?p=anu-wiki/articles/anu-%E8%AA%9E%E8%A8%80%E5%AD%B8%E5%B0%88%E6%A5%AD%E8%AA%9E%E6%96%99%E5%BA%AB%E8%B3%87%E6%BA%90%E8%A8%AA%E5%95%8F%E6%AC%8A%E9%99%90%E8%88%87%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95) to settle foreign exchange.

### R and Python Interfaces

For researchers who need custom analysis, ANU provides campus mirrors of the **corpora** and **quanteda** R packages that install 4 times faster than the official CRAN repository. Python users can use the `nltk` and `spaCy` libraries, with pre-trained Australian English models available from the ANU mirror. ANUSA (the ANU Students' Association) runs corpus programming workshops twice per semester; 127 people took part in 2024, 68% of them linguistics postgraduates.

## Search Limits and Data Export Rules

ANU sets clear rules on search frequency and export volumes for corpus data, designed to **prevent server overload** and **protect data copyright**. Breaches may lead to access being suspended.

### Search Frequency Limits

Automated search requests to open-access and campus-network corpora are limited to 60 per minute. Users who need scripted batch queries must apply to ANU Information Technology Services; if approved, the limit is raised to 300 requests per minute. In 2024, 47 such applications were received and 39 were approved.

### Export Formats and Volume

Exported corpus data supports CSV, TXT and JSON formats. A single export is capped at 100,000 rows; anything larger must be exported in batches. Files exported from restricted corpora are automatically watermarked with the user ID and export timestamp to trace data leaks. In 2024, ANU reported no corpus data leak incidents.

### Citation and Acknowledgement Requirements

Research published using ANU corpus resources must acknowledge "Australian National University Corpus Facilities" and the specific corpus name in the acknowledgements section. The ANU linguistics department recommends the citation format: "[Corpus name], [version number], Australian National University, [year of access]." Failing to cite properly may result in restricted future access.

## Special Corpora and Application Process

ANU holds several **exclusive or rare corpus resources** that require additional review for access. The most notable are the Papua New Guinea Languages Corpus and the Australian Sign Language (Auslan) Corpus.

### Papua New Guinea Languages Corpus

This corpus contains parallel texts in 14 Papua New Guinean languages, totalling around 8 million words. It was built jointly by ANU's Pacific Studies school and the University of Papua New Guinea. Access applications must submit a research plan explaining how the data will be used. Approval is handled by the research committee of ANU's School of Anthropology and Linguistics, and only 20 access slots are opened each year.

### Australian Sign Language Corpus

The Auslan Corpus contains 2,400 hours of signed-language video material that has been motion-captured and annotated. Access is provided through a dedicated platform run by ANU's Centre for Disability Research, with video streams encrypted over HTTPS. Applicants must complete an online training module (about 3 hours) covering data privacy and ethical use standards. In 2024, 56 researchers were granted access.

### Application Process and Timeline

The standard process for applying to restricted corpora is: complete the ANU Data Access Request Form (Form DA-2025) and submit it to the linguistics department data manager. Review proceeds in three stages: administrative review (2 business days), academic review (5 business days) and ethics review (3 to 8 business days). The total approval cycle is 10 to 15 business days; urgent applications (e.g., PhD thesis deadlines) can be expedited to 5 business days.

## FAQs and Technical Support

The ANU linguistics department offers several technical support channels, including an **online knowledge base**, **email support** and **drop-in consultations**.

### Online Knowledge Base

The department maintains a wiki knowledge base (`linguistics-wiki.anu.edu.au`) with more than 200 articles on corpus access and use. Common issues covered include VPN connection failures, corpus index errors and query syntax errors. The knowledge base is updated quarterly; 18 new tutorials on advanced CQP queries were added in Q4 2024.

### Email Support and Response Times

The support email is `linguistics-support@anu.edu.au`, with an average response time of 4 hours during working hours. For urgent issues (such as server outages), emails marked "URGENT" receive a reply within 1 hour. In 2024 the team received 1,203 support emails, 72% of which were resolved with the first reply.

### Drop-in Consultations and Workshops

The department offers drop-in consultations every Tuesday and Thursday from 2:00 to 4:00 p.m. in Room 1.28 of the Baldessin Precinct Building. No appointment is needed — just bring your device. In addition, corpus usage workshops run twice per semester; the first workshop of 2025 is scheduled for March 17, on the theme "collocation analysis with AntConc".

## FAQ

### Q1: Do I have to use a VPN to access ANU corpora off campus?

Yes. All campus-network and restricted corpora must be accessed through the ANU VPN when off campus. Open-access corpora can be reached directly, although ANU's mirror site loads 2.3 times faster than external sources. After connecting to the VPN, your IP address must show as an ANU campus range (130.56.x.x or 149.171.x.x) for access to work.

### Q2: Can corpus data be downloaded to a personal computer?

Some corpora allow downloads, subject to the data usage agreement. Open-access corpora generally have no download limits; campus-network corpora such as the Australian National Corpus require downloaded copies to be deleted within 90 days; restricted corpora need a separate application for downloads. A single export is capped at 100,000 rows; anything larger must be exported in batches.

### Q3: How long does it take to get access to restricted corpora?

The standard approval cycle is 10 to 15 business days, split into administrative review (2 days), academic review (5 days) and ethics review (3 to 8 days). Urgent applications can be expedited to 5 business days. You will need to submit a research plan and the ANU Data Access Request Form (Form DA-2025). The Papua New Guinea Languages Corpus opens only 20 access slots per year.

## References

- QS, 2024, QS World University Rankings by Subject — Linguistics
- ANU Library, 2025, Linguistics Digital Resources Guide
- ANU College of Arts and Social Sciences, 2024, Research Data Access Policy
- ANU Information Technology Services, 2024, VPN Performance Report
- UNILINK, 2025, ANU Linguistics Resource Database
