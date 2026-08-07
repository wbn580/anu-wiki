---
slug: anu-digital-humanities-python-workshop-series-registration-links-prerequisites-a
title: "ANU Digital Humanities Python Workshop Series: Registration Links, Prerequisites, and Project Examples"
description: "The **Digital Humanities Python Workshop Series** run by the College of Arts and Social Sciences at the Australian National University (ANU) since 2019 has become the university's core interdisciplinary computational skills training program. According to ANU's Digital…"
category: "ANU"
pubDatetime: '2026-05-06T20:00:31Z'
publishDate: '2026-05-06T20:00:31Z'
readingTime: 3
tags: ["featured"]

ogImage: "https://img.anu.wiki/留学/单校wiki/anu-digital-humanities-python-workshop-series-registration-links-prerequisites-a-2026-1880x1253.jpg"
---

The **Digital Humanities Python Workshop Series** run by the College of Arts and Social Sciences at the Australian National University (ANU) since 2019 has become the university's core interdisciplinary computational skills training program. According to the 2024 annual report from the ANU Digital Humanities Hub, the series attracted more than 420 registered participants in 2023, spanning every academic level from first-year undergraduates to PhD researchers. The workshops are designed around the Digital Humanities Infrastructure White Paper published by the Australian Research Council (ARC) in 2022, which notes that only about 18% of humanities researchers in Australia have basic programming skills — while that figure already exceeds 35% among UK and US peers. This gap directly drove ANU to embed Python programming modules into its course system, aiming to bridge the skills divide between the humanities and computational science.

## Workshop Structure and Registration Process

The series runs one round in **Semester 1** and one round in **Semester 2** each year; each round consists of 8 standalone modules of 3 hours each. Registration goes through the official Eventbrite page of the ANU Digital Humanities Hub, typically opening in week 2 before the semester starts. According to 2024 data from the ANU Student Administration Office, all 8 modules of Semester 1 2024 filled within 48 hours of registration opening, with an average waitlist of 37 people.

### Registration Links and Timing

Registration links are published centrally on the "Workshops" subpage of the ANU Digital Humanities Hub website, and pushed via the college mailing list and the ANU student portal (ISIS). Registration for Semester 1 2025 is expected to open at 9:00 am (AEDT) on Monday 10 February 2025. Each module costs AUD 15, covering venue and material costs; current ANU students get the full amount waived with their student card.

### Module Choice and Certification

Participants can take individual modules or complete all 8 to earn the "Digital Humanities Python Fundamentals" completion certificate. 2023 data shows that 34% of participants — about 143 people — completed all modules and earned the certificate. The certificate is jointly accredited by the ANU Digital Humanities Hub and the Australasian Association for Digital Humanities (AADH).

## Prerequisite Knowledge Requirements

The series has clear but lenient **prerequisite** requirements. The official guide states that no programming experience is needed, but basic computer operation skills (such as file management and browser use) are expected. In a 2024 survey, 75% of participants said they had "no programming background at all" before joining, while 22% had "very little experience with Python or other languages".

### Recommended Preparation

The official recommendation is to complete two free online courses first: Codecademy's "Learn Python 3" introductory module (about 4 hours) and ANU's "Digital Humanities: An Introduction" MOOC (via edX, about 6 hours). Both are self-paced with no deadlines.

### Technical Environment Setup

Participants must bring their own laptop with Python 3.9 or later and a Jupyter Notebook environment installed. The workshops provide a detailed installation guide PDF (about 12 pages), sent with the registration confirmation email. 2024 data shows about 92% of participants completed their environment setup before the first workshop.

## Project Examples and Outcomes

The core of the series is **project-based learning** — participants complete a micro-project after each module. These projects span several digital humanities subfields, including text analysis, network analysis, and geographic information system (GIS) applications.

### Text Analysis Project: 19th-Century Australian Newspaper Corpus

In the "Text Mining and NLP" module, participants use Python's `NLTK` and `spaCy` libraries to run frequency analysis on about 5,000 articles from 19th-century Australian newspapers drawn from the Trove database (the National Library of Australia's digital newspaper archive). A typical finding: the term "gold rush" appeared 4.7 times more frequently between 1851 and 1860 than in the decade on either side. The dataset, provided by the ANU Digital Humanities Hub, is 2.3GB.

### Network Analysis Project: Enlightenment-Era Letter Networks

In the "Network Analysis and Visualisation" module, participants use the `NetworkX` library to analyse a dataset of correspondence between Enlightenment-era European intellectuals. The dataset, provided by the Stanford University Libraries digital humanities project, contains metadata for more than 60,000 letters. Participants compute centrality metrics in the network and generate interactive network graphs. In the autumn semester of 2023, a PhD student used this project to uncover a previously under-studied female correspondent whose betweenness centrality ranked in the top 5%.

### Geospatial Project: The Evolution of Canberra's Historic Buildings

In the "GIS and Python" module, participants use `GeoPandas` and `Folium`, combining the ANU campus GIS database with data from the ACT Government Open Data Portal, to map the spatial evolution of Canberra's city-centre historic buildings from 1913 to 2023. The project requires processing latitude/longitude data for more than 200 building points and producing an animated timeline map.

## Teaching Team and Academic Background

The teaching team is made up of postdoctoral researchers and senior lecturers from the **ANU Digital Humanities Hub**. Lead instructor Dr. Emily Chen (Deputy Director of the Digital Humanities Hub) holds a PhD in computational linguistics and, in 2023, published a paper on Python applications in literary research (in the journal *Digital Scholarship in the Humanities*, Vol. 38, Issue 2). The teaching assistant team usually consists of 5-7 postgraduate students from the School of Computing and the humanities.

### Mentoring and One-on-One Support

Each workshop module has at least 2 teaching assistants, keeping the participant-to-mentor ratio at 15:1 or better. In the 2024 evaluation, participants rated "mentor responsiveness" at 4.6/5.0 (based on ANU's internal teaching evaluation system, with 287 valid responses collected).

### Cross-College Collaboration

The workshop series is part of ANU's **Computational Humanities Initiative**, jointly funded by the College of Arts and Social Sciences and the College of Engineering and Computer Science. In 2023, the two colleges allocated AUD 125,000 to the project, for cloud computing resources (AWS Credits) and teaching assistant salaries.

## Academic Calendar and Scheduling

The workshop series strictly follows the ANU **academic calendar**, avoiding exam weeks and major holidays. The Semester 1 2025 workshop schedule: modules 1-4 run Tuesdays 3:00-6:00 pm in weeks 3-6 of semester; modules 5-8 run in the same time slot in weeks 8-11.

### Coordinating Clashes with Coursework

Since the workshops are not for-credit courses, ANU allows participants to apply for an "Academic Activity Conflict Waiver" when workshops clash with their main courses; the waiver must be signed by an academic adviser in the student's college. In 2024, 23 participants applied for the waiver.

### Vacation Modules

A condensed round with 4 core modules runs over two weeks each July (winter term) and December (summer term). Winter-term enrolment typically runs about 40% lower than spring, yet the certificate completion rate is 15 percentage points higher.

## Tools and Resource Support

The workshops provide a range of **open-source tools** and computing resources. All teaching materials (including Jupyter Notebook files, datasets, and slides) are distributed and version-controlled via ANU's GitLab instance (gitlab.anu.edu.au).

### Cloud Computing Resources

For projects needing large-scale computation (such as processing text corpora over 10GB), the workshops give each participant AUD 50 in AWS cloud credits, valid until the end of semester. In 2023, 68 participants used the credits, consuming an average of AUD 32 each.

### Data Storage and Sharing

Completed project code and data can be uploaded to the ANU Research Data Commons platform, funded by the Australian Research Data Commons (ARDC), offering long-term storage and DOI assignment services. As of 2024, more than 120 project datasets from the workshop series have been publicly released on the platform.

## Interdisciplinary Applications and Career Development

The workshops were designed to give humanities scholars **transferable computational skills**, and their reach now extends beyond academic research. According to a 2024 tracking survey by the ANU Career Development Centre, about 41% of participants mentioned Python skills in job or internship interviews within 6 months of completing the series, and 17% of participants landed roles directly related to data analysis.

### Industry Partners

The workshops have partnerships with the National Library of Australia, the National Archives of Australia, and Canberra-based tech companies (such as ReadCloud). These organisations provide real case data for the workshops and regularly send representatives to the project showcase sessions after each module.

### Academic Publishing Support

The series also offers an add-on service: for academic papers produced from workshop projects, the ANU Digital Humanities Hub provides language editing and formatting support. In 2023, three papers based on workshop projects were accepted by peer-reviewed journals, one of them published in *Digital Humanities Quarterly*, Vol. 17, Issue 4.

## FAQ

### Q1: How much does it cost to attend the ANU Digital Humanities Python Workshop Series?

For current ANU students, all 8 modules cost AUD 0 (verified with your student email at registration). For external participants, a single module costs AUD 15, and the full set of 8 modules costs AUD 100 (about RMB 470, at October 2024 exchange rates). 2024 data shows external participants made up 8% of total registrations — about 34 people.

### Q2: Does the completion certificate help with postgraduate or job applications?

The certificate is issued jointly by the ANU Digital Humanities Hub and AADH and is a non-credit credential. According to 2024 internal statistics from the ANU Admissions Office, applicants holding the certificate were about 12 percentage points more likely to be admitted to humanities postgraduate programs than applicants without it. On the job market, the Australian Public Service Commission lists it as one of the "supplementary digital skills credentials".

### Q3: If I miss the registration window, can I still join?

Registration for each module closes 48 hours before the workshop starts. After that, the waitlist is activated in registration order. In Semester 1 2024, the waitlist activation rate was 23% — 1 in 4 waitlisted people eventually got a place. In addition, recordings of all modules are uploaded to the ANU Echo360 platform on the 5th business day after the workshop, free for all staff and students.

## References

- ANU Digital Humanities Hub 2024, *Annual Report on Computational Skills Training*.
- Australian Research Council 2022, *Digital Humanities Infrastructure White Paper*.
- Australasian Association for Digital Humanities 2023, *AADH Certification Standards for Non-Credit Workshops*.
- ANU Student Administration Office 2024, *Workshop Registration and Attendance Statistics*.
- Unilink Education 2024, *ANU Digital Humanities Program Database*.
