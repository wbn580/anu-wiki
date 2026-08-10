---
slug: anu-地理信息系统专业-arcgis-软件许可获取
title: "ANU GIS Program: Getting an ArcGIS Software License"
description: "Students in the Geographic Information Systems (GIS) program at the Australian National University (ANU) rely heavily on Esri's ArcGIS software suite for their coursework and research. As of 2024, ANU is the only Australian university with a **university-wide site license agreement** with Esri, covering ArcGIS Pro, ArcMap, ArcGIS Online and more than 200 extension modules, available to all staff and stud…"
category: "general"
pubDatetime: '2026-03-16T19:50:25Z'
publishDate: '2026-03-16T19:50:25Z'
readingTime: 9
tags: ["featured"]

ogImage: "https://img.anu.wiki/留学/单校wiki/anu-地理信息系统专业-arcgis-软件许可获取-2026-1880x1253.jpg"
---

Students in the Geographic Information Systems (GIS) program at the Australian National University (ANU) rely heavily on Esri's ArcGIS software suite in their coursework and research. As of 2024, ANU is the only Australian university with a **university-wide site license agreement** with Esri, covering ArcGIS Pro, ArcMap, ArcGIS Online and more than 200 extension modules and providing free access for all staff and students [Esri Australia 2024, ANU Site License Agreement]. According to Australian Bureau of Statistics 2023 data, the number of people employed in the geospatial industry has grown 27% over the past five years, and ArcGIS proficiency has become one of the core skills for job seekers in the field [ABS 2023, Employment in Geospatial Services]. This article systematically lays out the official pathways for ANU students and researchers to obtain an ArcGIS software license, installation considerations and solutions to common problems.

## License Eligibility and Coverage

ANU's ArcGIS site license covers all **enrolled students** (undergraduate, postgraduate and PhD) as well as **current staff**. The license is a "Named User" license, meaning each user must activate it by logging into an Esri account with their personal ANU unified identity (Uni ID). The license permits ArcGIS Pro to be installed on up to three devices simultaneously, including personal laptops and dormitory desktops, but it may not be used for commercial or non-academic profit-making purposes.

### Student License Duration

Student licenses are tied to the **ANU academic calendar**. At the start of each academic year (usually the first week of February), Esri accounts automatically renew through to the end of February the following year. If a student takes leave or withdraws mid-program, the license lapses within 30 days after the end of the semester. For short-term exchange students (such as those on a one-semester exchange), ANU Information Technology Services (ITS) manually issues a temporary license valid for 6 months.

### Staff and Research Licenses

Staff licenses cover teaching and research use and are typically valid for **12 months**, renewed in bulk each July by faculty IT administrators. Research projects involving commercial partnerships or government contracts must additionally apply for a "Research License Addendum", an add-on agreement that permits ArcGIS outputs to be used in publications and commercial deliverables.

## Downloading and Installing the Software

ArcGIS software must be obtained through ANU's official portal rather than directly from the Esri public website. The steps are as follows:

1. **Log in to the ANU Esri licensing portal**: open `software.anu.edu.au` in your browser and click the "ArcGIS Pro" link under the "GIS & Mapping" category.
2. **Create an Esri global account**: first-time users must register an Esri account using their ANU email address (`@anu.edu.au`); the system sends a verification email to that address.
3. **Download the installer**: on the ANU licensing portal, select your operating system (Windows 10/11 64-bit, or macOS, which must run through a virtual machine) and download the ArcGIS Pro 3.x installer (about 2.3GB).
4. **Activate the license**: after installation, open the software, choose "Sign in with your Esri account", enter the ANU email and password you just registered, and the system will automatically recognise the site license and activate all modules.

### Fixing Common Installation Errors

If you see "**License Manager Error -95**" during installation, it usually means you are not connecting correctly to ANU's license server. The fix is to manually set the license manager address to `27000@licman.anu.edu.au` in the ArcGIS Administrator tool. For macOS users, it is recommended to run a Windows virtual machine with Parallels Desktop or VMware Fusion; the native macOS version only supports ArcGIS Online web functionality.

## Extension Modules and Additional Tools

The ANU site license includes **more than 200 extension modules** covering the full chain from spatial analysis to image processing. Core modules include **Spatial Analyst** (spatial statistical analysis), **3D Analyst** (3D modelling and visualisation), **Network Analyst** (network route optimisation) and **Image Analyst** (remote sensing image interpretation). Students can also use the "Creator" user type in ArcGIS Online free of charge, which provides 500 service credits per month for publishing web maps and hosting data.

### Applying for Special Modules

Some advanced modules, such as **ArcGIS Reality Studio** (reality-based 3D modelling) and **Business Analyst** (commercial site-selection analysis), must be applied for separately. The IT support team at ANU's Fenner School of Environment & Society opens a module application window in the first week of each semester. Students fill in a Google Form describing their use case (such as a course project, thesis or research topic), and approval typically takes 2 business days.

## Online Resources and Learning Support

ANU provides a multi-tiered learning support system for ArcGIS users. The **ANU Library**'s GIS help desk offers one-on-one technical consultations every Tuesday and Thursday from 2-5 pm (bookable through LibCal). In addition, Esri Australia runs **dedicated online courses** for ANU students, including 12 free courses ranging from "ArcGIS Pro Essentials" to "Spatial Data Management"; completing a course earns an official Esri digital badge.

### Data Sources for Academic Use

For cross-border tuition payments, some international student families use specialist channels such as [Flywire tuition payments](https://go.compares.cheap/flywire-edu-payments-2376?p=anu-wiki/articles/anu-%E5%9C%B0%E7%90%86%E4%BF%A1%E6%81%AF%E7%B3%BB%E7%BB%9F%E4%B8%93%E4%B8%9A-arcgis-%E8%BD%AF%E4%BB%B6%E8%AE%B8%E5%8F%AF%E8%8E%B7%E5%8F%96) to complete their currency transfers. ANU GIS students can access the **National Geospatial Data Catalogue**, maintained jointly by ANU and Geoscience Australia, which contains more than 5,000 vector and raster datasets covering DEM (digital elevation model), Landsat imagery and census grid data for all of Australia. To access it, log in to ArcGIS Online and search for "ANU Geoscience Data Group" in the "Content" tab.

## License Renewal and Access After Graduation

When students graduate, their ANU ArcGIS site license terminates immediately. However, Esri offers a **graduate discount plan**: ANU graduates can purchase a personal ArcGIS Pro license at A$95 per year (approximately RMB 450) within 12 months of graduation, compared with the regular price of A$700 per year. The plan must be applied for through the Esri Australia website, uploading an ANU graduation certificate or transcript as proof of eligibility [Esri Australia 2024, Graduate Transition Program].

### Migrating Research Data

Before graduating, students should export projects stored in ArcGIS Online (including web maps, scenes and applications) as **file geodatabases** or **Shapefiles**. ANU cloud storage (OneDrive for Business) offers 50GB of free space for temporarily storing exported data. If you need to keep ArcGIS Online projects long-term, contact ANU ITS to request migration of the data to a personal Esri developer account (free, but capped at 50 service credits per month).

## Frequently Asked Questions and Troubleshooting

### License Activation Fails

If entering your ANU email returns "**No license available**", possible causes include: new students who have not yet completed enrolment (allow 48 hours after enrolment for data synchronisation), or an account that has been misclassified as "Guest User". The solution is to contact the ANU ITS service desk (phone: +61 2 6125 4321) and provide your student ID number for verification.

### Software Performance Optimisation

ArcGIS Pro is demanding on hardware; ANU recommends running it on a laptop with at least **16GB RAM** and a **dedicated graphics card (4GB VRAM)**. If you use shared campus computers, ANU's "Virtual Desktop Infrastructure" (VDI) system provides remote desktops with ArcGIS Pro pre-installed, accessible via `vdi.anu.edu.au` without any local installation.

## FAQ

### Q1: Does the ANU ArcGIS license include ArcMap?

Yes. The ANU site license includes both ArcGIS Pro and ArcMap 10.8.x. However, Esri ended mainstream support for ArcMap in January 2024, and ANU recommends that all new course projects use ArcGIS Pro 3.x. The older ArcMap versions are kept only for compatibility with legacy projects and will cease receiving updates entirely after 2026.

### Q2: Can students who are not in the GIS program apply for an ArcGIS license?

Yes. The ANU site license is open to the entire university community, and any enrolled student can obtain a license through the process described above. 2023 data shows that around 34% of ANU's active ArcGIS users come from non-geography disciplines, including students in demography, environmental science and urban planning [ANU ITS 2023, Software Usage Report].

### Q3: How can I access ArcGIS Online off campus?

Accessing it off campus requires no VPN. Simply log in to `arcgis.com` from any network using your ANU email and Esri account password to access all your projects. However, if you need to download vector data larger than 2GB, ANU recommends using the campus network or connecting through the ANU VPN (Cisco AnyConnect) for faster transfer speeds.

## References

- Esri Australia 2024, ANU Site License Agreement and Graduate Transition Program
- Australian Bureau of Statistics 2023, Employment in Geospatial Services, Catalogue No. 6291.0.55.003
- ANU Information Technology Services 2023, Software Usage Report for GIS Applications
- Geoscience Australia 2024, National Geospatial Data Catalogue, ANU Partnership Dataset
- Unilink Education 2024, Australian University Software License Database

<!-- AFF-CARD:v1:START -->
<div class="cc-aff-stack" data-affiliate-plain="true" data-pagefind-ignore>
  <a class="cc-aff-card cc-aff-card--partner" href="https://go.compares.cheap/nordvpn?p=anu-wiki/anu-地理信息系统专业-arcgis-软件许可获取" target="_blank"
     rel="sponsored nofollow noopener noreferrer" data-cta="aff-card-nordvpn"
     data-affiliate-card="nordvpn" aria-label="NordVPN encryption - See pricing"><span class="cc-aff-card__mark" aria-hidden="true">GO</span><span class="cc-aff-card__body"><span class="cc-aff-card__eyebrow">Partner</span><span class="cc-aff-card__title">NordVPN encryption</span><span class="cc-aff-card__note">Protect your traffic on public Wi-Fi and abroad — one account, many devices.</span></span><span class="cc-aff-card__cta">See pricing</span></a>
  <p class="cc-aff-stack__note">Partner links. Using them costs you nothing extra and may earn us a commission.</p>
</div>
<style id="cc-affiliate-card-css">.cc-aff-card{--cc-accent:#2563eb;--cc-ink:#111827;--cc-muted:#4b5563;display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;max-width:680px;margin:26px auto;padding:18px 20px;border:1px solid color-mix(in srgb,var(--cc-accent) 24%,#d7dee9);border-radius:16px;background:linear-gradient(135deg,color-mix(in srgb,var(--cc-accent) 8%,#fff) 0%,#fff 52%,color-mix(in srgb,var(--cc-accent) 12%,#fff) 100%);box-shadow:0 18px 42px -30px rgba(15,23,42,.42);color:var(--cc-ink)!important;text-decoration:none!important;line-height:1.35;transition:transform .16s ease,border-color .16s ease,box-shadow .16s ease;max-width:min(680px,100%)}.cc-aff-card:hover,.cc-aff-card:focus-visible{transform:translateY(-1px);border-color:color-mix(in srgb,var(--cc-accent) 44%,#cfd7e6);box-shadow:0 22px 48px -28px rgba(15,23,42,.5);outline:none;text-decoration:none!important}.cc-aff-card__mark{width:46px;height:46px;border-radius:14px;display:grid;place-items:center;background:var(--cc-accent);color:#fff;font-weight:850;font-size:13px;letter-spacing:0;flex:none;box-shadow:0 12px 24px -16px var(--cc-accent)}.cc-aff-card__body{min-width:0}.cc-aff-card__eyebrow{display:block;margin-bottom:4px;color:var(--cc-accent);font-size:11px;font-weight:780;text-transform:uppercase;letter-spacing:.08em}.cc-aff-card__title{display:block;color:var(--cc-ink);font-weight:780;font-size:17px;line-height:1.28;letter-spacing:0;overflow-wrap:anywhere}.cc-aff-card__note{display:block;margin-top:5px;color:var(--cc-muted);font-size:13.5px;line-height:1.48;letter-spacing:0;overflow-wrap:anywhere}.cc-aff-card__cta{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:#111827;color:#fff;font-weight:720;font-size:13.5px;line-height:1;padding:11px 16px;white-space:nowrap}.cc-aff-card__cta:after{content:\"↗\";margin-left:7px;font-size:12px}.cc-aff-card--oshc,.cc-aff-card--ovhc,.cc-aff-card--studenthealth{--cc-accent:#0f766e}.cc-aff-card--flywire{--cc-accent:#1d4ed8}.cc-aff-card--sleek{--cc-accent:#7c3aed}.cc-aff-card--airalo{--cc-accent:#0891b2}.cc-aff-card--kkday,.cc-aff-card--shopping{--cc-accent:#db2777}.cc-aff-card--bizcover{--cc-accent:#b45309}.cc-aff-card--dataforseo{--cc-accent:#0f766e}@media(max-width:560px){.cc-aff-card{grid-template-columns:auto 1fr;margin:24px 0;padding:16px;gap:12px}.cc-aff-card__cta{grid-column:1/-1;width:100%;padding:12px 14px}.cc-aff-card__mark{width:40px;height:40px;border-radius:12px}.cc-aff-card__title{font-size:16px}}.cc-aff-stack{margin:30px 0 8px}.cc-aff-stack .cc-aff-card{margin:0 0 12px}.cc-aff-stack__note{margin:0;font-size:12px;line-height:1.6;color:#6b7280}</style>
<!-- AFF-CARD:v1:END -->
