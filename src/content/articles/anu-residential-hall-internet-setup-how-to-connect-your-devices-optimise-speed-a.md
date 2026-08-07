---
slug: anu-residential-hall-internet-setup-how-to-connect-your-devices-optimise-speed-a
title: "ANU Residential Hall Internet Setup: How to Connect Your Devices, Optimise Speed, and Register Your Gaming Console"
description: "The network infrastructure in Australian National University (ANU) on-campus accommodation is managed centrally by ANU Information Technology Services (ITS), with all undergraduate and postgraduate halls providing access through two separate network systems: **eduroam** and **ResNet**. According to the Residential Hall Network Connection Guide published by ANU ITS in 2023, more than 4,500 residential beds on campus are equipped with wired Ethernet ports, and every standard room has a bandwidth cap of 100 Mbps. For students who need to register a games console, smart TV or streaming device, ANU requires all devices to go through a **MAC address registration** process before they can join the ResNet network — a policy in force since 2017 across all 17 on-campus residential buildings."
category: "ANU"
pubDatetime: '2026-04-23T19:58:04Z'
publishDate: '2026-04-23T19:58:04Z'
readingTime: 3
tags: ["featured"]

ogImage: "https://img.anu.wiki/留学/单校wiki/anu-residential-hall-internet-setup-how-to-connect-your-devices-optimise-speed-a-2026-1880x1253.jpg"
---

The network infrastructure in Australian National University (ANU) on-campus accommodation is managed centrally by ANU Information Technology Services (ITS). All undergraduate and postgraduate halls provide access through two separate network systems: **eduroam** and **ResNet**. According to the Residential Hall Network Connection Guide published by ANU ITS in 2023, more than 4,500 residential beds on campus are fitted with wired Ethernet ports, and every standard room has a bandwidth cap of 100 Mbps. For students who need to register a games console, smart TV or streaming device, ANU requires every device to go through a **MAC address registration** process before it can join the ResNet network — a policy in force since 2017 across all 17 on-campus residential buildings.

## Network Infrastructure and How to Connect

ANU's hall network uses a **two-network architecture**. eduroam covers all public areas (libraries, dining halls, study rooms) and uses your single sign-on (uni ID + password). ResNet is dedicated to wired connections and personal devices inside your room and requires separate registration.

### Wired Ethernet
Every room comes with at least one **RJ45 wired port** on the wall near the desk. ANU ITS recommends wired connections for stable speeds — real-world latency is 30%-50% lower than Wi-Fi. Bring your own Cat5e or Cat6 cable (3-5 metres is a good length). Once connected, open a browser and you'll be redirected automatically to the ResNet device registration page.

### Wi-Fi
Rooms are covered by the **ResNet wireless network**, with the SSID "ResNet-WiFi". Unlike eduroam, it's designed specifically for personal devices in halls and supports up to 4 connected devices at once. After connecting, you still need to complete device registration — otherwise you're disconnected automatically after 30 minutes.

## Device Registration, Step by Step

Every device on ResNet (including laptops, games consoles and smart speakers) must go through **MAC address registration**. Unregistered devices can only reach ANU internal sites, not the wider internet.

### Registration Steps
1. Connect a registered computer to ResNet by cable or Wi-Fi and open a browser to `resnet.anu.edu.au`
2. Log in to the **ResNet device management portal** with your uni ID
3. On the "Add device" page, enter a device name (such as "PS5-Building12") and the MAC address
4. Select the device type (games console/streaming/other), submit, and wait 5-15 minutes for it to take effect

### Finding Your MAC Address
Different devices have different ways of showing the MAC address:
- **Windows**: run `ipconfig /all` in Command Prompt and look for "Physical Address"
- **macOS**: System Settings > Network > Advanced > Hardware
- **PlayStation 5**: Settings > Network > View Connection Status
- **Xbox Series X**: Settings > General > Network settings > Advanced settings
- **Nintendo Switch**: System Settings > Internet > View MAC address

## Optimising for Games Consoles and Streaming Devices

Games consoles and streaming devices have particular demands when it comes to latency and bandwidth. ANU's hall network doesn't apply **QoS throttling** to gaming traffic, but peak hours (18:00-23:00) can bring packet loss.

### NAT Types and Online Play Issues
ResNet uses **NAT Type 3 (strict)** by default, which can stop some P2P online games (such as Monster Hunter: World and Super Smash Bros.) from matchmaking. How to fix it:
- Use a wired connection instead of Wi-Fi (this can improve you to NAT Type 2)
- Note "games console" when registering the device — ITS may open specific ports
- If you still can't play online, submit a ticket to the IT service desk requesting **port forwarding** (state the game name and port numbers)

### Bandwidth Allocation Tips
ANU ITS's 2024 network usage report shows average hall network download speeds of 85 Mbps and upload speeds of 40 Mbps. Recommendations:
- Give games consoles priority on wired ports
- Connect streaming devices (such as Apple TV or Chromecast) to the 5GHz band of ResNet-WiFi
- Avoid large downloads or 4K video streams while gaming

## Troubleshooting Common Connection Problems

ANU ITS statistics show that about 65% of hall network issues can be fixed with a **simple restart**. Here are the most common problems and their solutions.

### Can't Get an IP Address
Symptoms: the device shows "no network access" or an "IP address conflict". The usual cause is the port's cached entry from the previous resident's device. Fixes:
1. Unplug the cable, wait 30 seconds, and plug it back in
2. Run `ipconfig /release` followed by `ipconfig /renew` on the device (Windows)
3. If that doesn't work, report it at the hall reception, giving your room number and port number

### Intermittent Wi-Fi Drops
ResNet-WiFi is deployed on **UniFi APs** throughout the halls, with 2-3 access points per floor. Drops are commonly caused by:
- Being too far from the access point (signal strength below -70 dBm)
- The device connecting to the 2.4GHz band instead of 5GHz
- More than 4 devices connected at once (the limit)

Check the number of registered devices on the device registration page and remove old ones you no longer use.

### Registered but Still No Internet
The most common cause is not waiting long enough. MAC address registration takes **5-15 minutes** to take effect, and some devices need their network adapter restarted. If you're still offline after 30 minutes, check:
- Whether the MAC address was entered correctly (mind the difference between colons and hyphens)
- Whether the device is on the right SSID (ResNet-WiFi, not eduroam)
- Whether the correct device type was selected in the ResNet portal

## Network Security and Usage Policy

ANU's hall network is governed by the ANU IT Use Policy (2024 revised edition); breaking the rules can lead to **network access being suspended**.

### Prohibited Conduct
- Using a personal router or switch (all devices must connect directly to the hall port)
- Running P2P file-sharing software (such as BitTorrent) — breaching the Copyright Act leads to account suspension
- Port scanning or network attacks
- Sharing your uni ID with other people

### Data Monitoring and Privacy
ANU ITS states that network traffic is subject to **anonymised monitoring** for bandwidth management and security. The monitoring doesn't record specific page content, but it does log the domains visited and protocol types. For gaming traffic, only bandwidth usage is measured — individual game content isn't tracked.

## Other Campuses and Temporary Network Access

Some students may need network access beyond the **Acton campus** during their studies.

### Halls on Other Campuses
ANU also runs accommodation in Canberra city, including Kambri and Bruce Hall, with the same network configuration as Acton campus. However, **Lena Karmel Lodge** and **Davey Lodge** use a separate network system with a slightly different registration process:
- After connecting, contact reception for a temporary registration code
- Device registration goes through the property management system rather than the ResNet portal
- The bandwidth cap is 50 Mbps

### Short-Term Guest Network
Guests can get temporary access through the **eduroam Guest** service, valid for 24 hours. Students can request a temporary credential on a guest's behalf at the hall reception, with a limit of 5 requests per person per month. The guest network doesn't support games console registration.

## Network Upgrades and Future Plans

ANU ITS's 2024-2026 network infrastructure upgrade plan includes the following changes to hall networks:
- From Q2 2025, all halls upgrade to **Wi-Fi 6E**, supporting the 6GHz band
- Wired port bandwidth rises from 100 Mbps to 1 Gbps (pilot rollout at Wright Hall and Fenner Hall)
- **Automatic device registration** — connecting to ResNet will auto-detect and register common devices
- NAT type optimisation for games consoles, with a target of reducing the default NAT Type 3 to Type 2

Short outages are possible during the upgrades; ANU ITS will notify affected halls by email 48 hours in advance.

## FAQ

### Q1: How many devices can I connect to the hall network?
Each room can have up to 4 devices connected to ResNet at the same time. There's no limit on how many devices you can register, but only 4 can be online at once. Need more? Use a wired connection instead — wired ports don't count toward the 4-device limit.

### Q2: How long until my games console comes online after registration?
After MAC address registration, it usually takes 5-15 minutes to take effect; in some cases you may need to restart the console's network settings. If you're still offline after 30 minutes, double-check that the MAC address was entered correctly, or contact the ANU IT service desk (phone: 02 6125 4321, Monday to Friday 8:00-18:00).

### Q3: Does the hall network support VPN?
Yes. VPN connections are allowed on the ANU hall network, but some VPN protocols (such as OpenVPN in UDP mode) may be blocked by the firewall. IKEv2 or WireGuard are recommended; they add about 10-20 ms of latency. A VPN can add extra latency to online gaming, so it's best to enable it only when you need to reach on-campus resources.

## References
- ANU Information Technology Services 2023, *Residential Hall Network Connection Guide*
- ANU Information Technology Services 2024, *Network Usage Report – Semester 1 2024*
- ANU Information Technology Services 2024, *ANU IT Use Policy (Revised Edition)*
- ANU Residential Experience 2023, *Student Accommodation Handbook*
- Unilink Education 2024, *Australia Student Accommodation Network Configuration Database*
