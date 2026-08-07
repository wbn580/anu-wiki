---
slug: anu-gis-software-access-how-to-download-arcgis-pro-and-qgis-with-your-student-li
title: "ANU GIS Software Access: How to Download ArcGIS Pro and QGIS with Your Student Licence and Enrol in Training Courses"
description: "The Australian National University (ANU) offers current students free or discounted access to a range of geographic information system (GIS) software, covering the industry-standard tool ArcGIS Pro and the open-source platform QGIS. According to the 2024 Student Software Catalogue published by ANU Information Technology Services, every enrolled student can obtain a free annual ArcGIS Pro student licence through the ArcGIS Online portal; the licence includes the fu..."
category: "ANU"
pubDatetime: '2026-05-01T19:59:27Z'
publishDate: '2026-05-01T19:59:27Z'
readingTime: 3
tags: ["featured"]

ogImage: "https://img.anu.wiki/留学/单校wiki/anu-gis-software-access-how-to-download-arcgis-pro-and-qgis-with-your-student-li-2026-1880x1253.jpg"
---

The Australian National University (ANU) provides current students with free or discounted access to a range of geographic information system (GIS) software, covering the industry-standard tool ArcGIS Pro and the open-source platform QGIS. According to the 2024 Student Software Catalogue published by ANU Information Technology Services, every enrolled student can obtain a free annual ArcGIS Pro student licence through the ArcGIS Online portal; the licence includes the full suite of spatial analysis, 3D visualisation, and data management capabilities. In addition, the GIS training courses jointly offered by the ANU Fenner School of Environment & Society and the College of Science accommodate more than 200 students per semester, with content ranging from foundational cartography to advanced spatial statistics. As demand for geospatial technology in environmental science, public policy, and urban planning grows by about 18% in Australia (2023 Australian Geospatial Industry Report), mastering these tools has become a direct path for ANU students to strengthen their academic competitiveness and employability.

## How to Activate Your ANU ArcGIS Pro Licence

ANU has an institutional education agreement with Esri Australia that allows current students to activate a personal licence through the **ArcGIS Online** platform. Students must register an ArcGIS account using their university-assigned email address (`uXXXXXXX@anu.edu.au`). After logging in, the "ArcGIS Pro" entry appears under the "Licenses" tab on the "My Settings" page. Click "Authorize" and enter the authorisation code provided by ANU (available from the ANU IT Service Desk or your college course coordinator) to complete the licence binding. The licence is valid for **12 months** and must be re-verified against student status each year in the Esri Australia education portal. According to Esri's 2023 Education Licensing Documentation, the licence ANU students receive is "Student Trial Plus" level, functionally identical to the commercial Advanced tier with no features removed.

### Installation and System Requirements

ArcGIS Pro supports **Windows 10/11 64-bit** operating systems only; macOS and Linux users must run it through a virtual machine or Boot Camp. The ANU IT Service Desk recommends students have at least **8GB RAM** (16GB recommended) and a dedicated graphics card to handle large raster and vector datasets smoothly. The installer is approximately 3.5GB and can be downloaded from the "My Esri" download page on the Esri website; an internet connection must remain active during installation to complete licence verification. If installation fails, ANU students can contact the IT Service Desk (phone: 02 6125 4321) for remote assistance.

## QGIS as an Open-Source Alternative and ANU Support

QGIS, as open-source GIS software, requires no licence fee and can be freely downloaded and installed by all ANU students. QGIS supports **Windows, macOS, and Linux** across all platforms; the installer is about 1.2GB, and the long-term release (LTR) can be obtained from qgis.org. In the ANU Fenner School's GIS courses, roughly 35% of assignments explicitly require QGIS (2024 Fenner School course outline statistics), because it complements ArcGIS Pro in **raster calculation, plugin extensions**, and Python scripting automation. Students can obtain a localised QGIS training manual (PDF, about 120 pages) through ANU's Research School of Earth Sciences; the manual is updated every semester and covers the complete workflow from data import to map publication.

### QGIS Plugins and Integration with ANU Data Sources

The ANU Library maintains a **GeoNetwork** instance providing more than 500 spatial datasets (including the Australian Bureau of Statistics' population grids and CSIRO's soil type maps), which can be connected directly through QGIS's "OGC Web Services" plugin. Students simply add the WMS/WFS URL (`https://geoserver.anu.edu.au/geoserver/wms`) in QGIS to load campus-level data in real time. An internal test by the ANU Geospatial Information Centre in 2023 showed that QGIS 3.28 loaded layers from this data source about 15% faster than ArcGIS Pro, largely thanks to QGIS's optimisation of the open-source protocol stack.

## GIS Training Course Enrolment and Credit Arrangements

ANU offers at least 3 GIS-related courses each semester, covering **undergraduate and postgraduate** levels. Undergraduate courses include ENVS1006 (GIS Fundamentals, 6 units) and ENVS2005 (Spatial Analysis, 6 units); the postgraduate course ENVS6001 (Advanced GIS Applications, 6 units) requires a final project based on a real research problem. Enrolment works like any other ANU course: add the course through the **ISIS** system during the enrolment period (usually weeks 1-2 of each semester). Course capacity is limited — ENVS1006 is capped at 120 students per semester, and actual enrolment for 2024 S1 was 117, close to full. Students must complete ENVS1006 before enrolling in ENVS2005; this prerequisite is explicitly noted in the ANU Programs and Courses catalogue.

### Short Workshops and Certificate Courses

In addition to credit-bearing courses, the ANU **Centre for Learning and Teaching** runs 4 free GIS workshops each semester, 3 hours each, with topics such as "Introduction to QGIS Cartography" and "Spatial Statistics in ArcGIS Pro". No advance registration is required — students simply bring a laptop. Completing all 4 workshops earns an ANU participation certificate, which is recognised by some employers on Australian geospatial recruitment platforms (such as GIS Jobs Australia). The 4 workshops in 2024 S1 averaged 35 attendees each, with about 60% from environmental science and the rest from social sciences and engineering.

## Licence Renewal and Post-Graduation Access

Once ANU students leave the university after graduation, their ArcGIS Pro student licence automatically expires. However, Esri offers a **graduate discounted licence** (about AUD 150 per year) that can be purchased through the Esri Australia education store. QGIS, being open source, remains free to use after graduation, and all QGIS project files (`.qgs` format) created while at ANU still open normally after you graduate. ANU recommends students export all ArcGIS Pro projects to **file geodatabase** (`.gdb`) or **Shapefile** format before graduating to ensure data compatibility. According to the ANU 2023 graduate survey, about 22% of respondents used QGIS in their first job after graduation, versus 12% for ArcGIS Pro, reflecting the growing adoption of open-source software in small and medium enterprises.

### Cross-Platform Data Migration Advice

Students planning to switch from ArcGIS Pro to QGIS should note the differences in **symbology systems**: ArcGIS Pro layer files (`.lyrx`) cannot be imported directly into QGIS; use Esri's "Export to SLD" tool to convert them to Styled Layer Descriptor (SLD) format. The ANU Fenner School provides a *Cross-Platform Migration Guide* (2024 update) that details 12 common conversion issues and their solutions, such as adjusting attribute table encoding (UTF-8 vs. GBK). The guide can be downloaded from the Fenner School's Moodle page without any separate application.

## Hardware and Network Requirements

Running GIS software places clear demands on computer performance. The ANU IT Service Desk recommends students use machines that meet the **ANU recommended laptop specifications**: an Intel i7 or AMD Ryzen 7 processor or better, an SSD of at least 512GB, and a dedicated graphics card (NVIDIA GTX 1650 or equivalent). Public computers in all campus libraries and labs come pre-installed with ArcGIS Pro 3.2 and QGIS 3.28, and students can check real-time availability of machines (about 200 in total) through the **ANU Lab Finder** website. For networking, use the campus wired network or eduroam Wi-Fi when processing large raster datasets to avoid timeouts caused by insufficient bandwidth. A 2024 traffic analysis by the ANU Network Operations Centre found that GIS software accounts for about 1.8% of total campus traffic during peak hours (2-4pm).

## Common Problems and Troubleshooting

The main issues ANU students encounter when using GIS software are **licence activation failures** and **plugin conflicts**. Licence activation failures are usually caused by the account not being linked to the ANU organisation ID; students should select "Sign in with your university credentials" on the Esri login page rather than entering their email and password directly. Plugin conflicts commonly occur in QGIS when multiple versions of map service plugins (such as OpenLayers and QuickMapServices) are installed at once — keeping only one active plugin is recommended. The ANU IT Service Desk maintains a **GIS Troubleshooting Wiki** (login with your university account) documenting solutions to 23 known issues, with an average resolution time of 2-3 business days.

### Data Storage and Backup

GIS project files tend to be large (a single project can reach 10GB). ANU provides students with **OneDrive for Business** storage of 1TB, but it is recommended to keep active projects on a local SSD and sync only final outputs to the cloud. Fenner School lab computers back up automatically to the ANU **Research Data Storage** system at 3am daily; students' personal computers require a self-managed backup strategy. In 2023, the ANU Data Management Office recorded 7 GIS-related data loss incidents, 5 of which resulted from failure to back up in time — a reminder to copy critical data regularly to external hard drives or campus network storage.

## FAQ

### Q1: Can ANU students use the full features of ArcGIS Pro for free?
Yes. The "Student Trial Plus" licence that ANU students activate through ArcGIS Online is functionally identical to the commercial Advanced tier, with no feature restrictions. The licence is valid for 12 months and must be re-verified against student status annually in the student portal. According to Esri's 2023 education licensing documentation, the licence includes 10 extension modules such as 3D Analyst and Spatial Analyst, with a total commercial value exceeding AUD 5,000 per year.

### Q2: Can I install ArcGIS Pro on a Mac?
Not directly. ArcGIS Pro supports Windows 10/11 64-bit systems only. Mac users can run Windows through virtual machine software (such as Parallels Desktop 19) or use the Windows computers in ANU public labs. QGIS, by contrast, has native macOS support and can be downloaded and installed directly from qgis.org. The ANU IT Service Desk recommends Mac students prioritise QGIS for coursework to save the time spent configuring a virtual machine.

### Q3: Do the GIS course workshops require advance registration?
No. The free GIS workshops run by the ANU Centre for Learning and Teaching require no advance registration — students just bring a laptop. The 4 workshops in 2024 S1 averaged 35 attendees each, with seats allocated first come, first served. The workshop schedule can be found on the ANU Events Calendar, usually published in week 1 of each semester. Completing all 4 workshops earns an ANU participation certificate, which is recognised in some GIS job listings.

## References
- Esri 2023, Education Licensing Documentation
- Geospatial Industry Association of Australia 2023, Geospatial Industry in Australia Report
- Australian National University Information Technology Services 2024, Student Software Catalogue
- Australian National University Fenner School of Environment & Society 2024, Course Outlines for ENVS1006, ENVS2005, ENVS6001
- Unilink Education 2024, University GIS Resource Database
