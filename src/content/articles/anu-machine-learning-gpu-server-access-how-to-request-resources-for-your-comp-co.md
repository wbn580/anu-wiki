---
slug: anu-machine-learning-gpu-server-access-how-to-request-resources-for-your-comp-co
title: "ANU Machine Learning GPU Server Access: How to Request Resources for Your COMP Course Project and Usage Quotas"
description: "ANU provides students in computer science (COMP) courses with dedicated machine learning GPU server access to support deep learning model training and compute-intensive projects. As of 2024, the GPU cluster jointly managed by ANU Information Technology Services (ITS) and the College of Engineering, Computing and Cybernetics (CECS) includes more than 120 NVIDIA GPUs (including V100, A100..."
category: "ANU"
pubDatetime: '2026-05-11T20:01:27Z'
publishDate: '2026-05-11T20:01:27Z'
readingTime: 3
tags: ["featured"]

ogImage: "https://img.anu.wiki/留学/单校wiki/anu-machine-learning-gpu-server-access-how-to-request-resources-for-your-comp-co-2026-1880x1253.jpg"
---

The Australian National University (ANU) provides students in computer science (COMP) courses with dedicated **machine learning GPU server** access to support deep learning model training and compute-intensive projects. As of 2024, the GPU cluster jointly managed by ANU Information Technology Services (ITS) and the College of Engineering, Computing and Cybernetics (CECS) includes more than **120 NVIDIA GPUs** (including V100, A100, and RTX 4090 models), available on request to around **3,500** enrolled COMP course students across the university [ANU ITS 2024, High-Performance Computing Resource Allocation Report]. With demand for GPU compute in Semester 1 2025 COMP courses (such as COMP4670 Deep Learning and COMP6710 Advanced Machine Learning) up about 35% year-on-year, understanding the resource request process and quota management mechanism is essential to completing course projects on time. Based on official ANU documentation and the latest 2024-2025 policies, this article systematically covers the GPU server access application steps, quota limits, and common questions.

## Eligibility and Course Binding

**GPU server access** is not open to all ANU students — it is strictly tied to specific COMP course projects. Under ANU CECS policy, only students enrolled in the following course types can apply: COMP4670 (Deep Learning), COMP6710 (Advanced Machine Learning), COMP6320 (Computer Vision), and certain HDR (Higher Degree Research) projects approved by the course coordinator. 2024 data shows that around **78%** of GPU resource applications came from COMP4670 and COMP6710, with the remainder from research projects [ANU CECS 2024, Course Resource Allocation Report].

### Course Project Pre-Registration

Students must complete project pre-registration through the course Wattle page by week 2 of semester. Pre-registration requires submitting a project description, the expected GPU usage (in GPU hours), and the required GPU model (V100 or A100). The course coordinator reviews and allocates the initial quota by week 3. Students who do not complete pre-registration cannot access the GPU cluster.

### Special Channel for Research Projects

HDR students (PhD or research master's) can submit a **continuing access application** through their supervisor, valid for one semester (about 20 weeks). Such applications must include a research ethics approval number (where human data is involved) and a justification of compute resource needs. In 2024, HDR applications received an average approved quota of **2,400 GPU hours** — 6 times the average course project quota of 400 GPU hours.

## Resource Request Process

**GPU resource requests** are submitted through the ANU Research Computing Portal (https://rescomp.anu.edu.au), which integrates cluster access, quota management, and job submission. The whole process has four stages, and from account activation to running a job typically takes 3-5 business days.

### Step 1: Account Activation

Students log in to the Portal using their ANU unified identity (Uni ID) and must agree to the *ANU High-Performance Computing Usage Agreement* on first login. The agreement explicitly prohibits using GPU resources for cryptocurrency mining, unauthorised commercial computing, or model training that violates Australian export control regulations. After activation, the system generates an SSH key pair for subsequent server logins.

### Step 2: Project Quota Application

In the "Resource Allocation" module of the Portal, students fill in the project name (matching the Wattle pre-registration), the required GPU model, and the expected usage duration. The system automatically suggests quota caps based on course type: COMP4670 course projects default to a cap of **500 GPU hours**, and COMP6710 to **400 GPU hours**. Applications above the cap require additional justification, such as models with more than 1 billion parameters or training data larger than 100GB.

### Step 3: Job Submission and Monitoring

Once approved, students submit training tasks through the SLURM job scheduler. Each job can request 1-4 GPUs, with a maximum single run time of **48 hours**. Job status can be checked in real time via the Portal or the command-line tool `squeue`. 2024 data shows that around **62%** of jobs completed within 24 hours, with average queue times ranging from 12 minutes (off-peak) to 2.5 hours (during exam weeks).

## Quota Management and Limits

**Usage quotas** are the core mechanism of ANU GPU cluster management, designed to allocate limited resources fairly. Quotas are divided into three tiers: course quota, semester quota, and cluster-wide quota. Exceeding quota limits causes jobs to be terminated automatically, and consumed GPU hours cannot be recovered.

### Course Quota

Each COMP course has an independent quota pool. In Semester 1 2025, for example, the COMP4670 course total quota was **12,000 GPU hours**, shared by around 120 students. That means an average of 100 GPU hours per student, though additional resources can be requested with pre-registration justification. The course coordinator re-evaluates quota allocation in week 6 of semester and adjusts remaining resources based on usage.

### Semester Quota

Each student can consume at most **1,500 GPU hours** per semester (including course and research projects). Applications above this cap must be submitted to the ITS Resource Committee for approval, with a review cycle of 5-10 business days. In 2024, only **8%** of students hit the semester quota cap, most of them HDR students.

### Cluster-Wide Quota

The entire GPU cluster has a monthly total quota of **45,000 GPU hours**, shared by all courses and research projects. ITS dynamically adjusts each course's quota pool based on historical usage patterns. For example, in August 2024 (the end-of-semester peak) cluster utilisation reached **94%**, and ITS temporarily increased the COMP4670 quota by 20% to meet demand [ANU ITS 2024, Monthly GPU Utilization Report].

## Available GPU Models and Performance Differences

The ANU GPU cluster offers three main models: NVIDIA V100 (32GB HBM2), A100 (40GB HBM2e), and RTX 4090 (24GB GDDR6X). The model choice directly affects training speed and the maximum model size that can be handled. 2024 benchmarks show that the A100 is **1.8x** faster than the V100 in mixed-precision training, while the RTX 4090 is **1.4x** faster than the V100 in single-precision tasks, but its smaller memory limits its use on large models [ANU CECS 2024, GPU Benchmark Report].

### V100: The General-Purpose Choice

The V100 is the most numerous model in the cluster (about 60 cards), suitable for most course projects. Its 32GB memory supports training models with up to 1 billion parameters (such as ResNet-152 and BERT-base). V100 queue times are usually the shortest, averaging **8 minutes** off-peak.

### A100: For High-Performance Needs

The A100 (about 30 cards) is designed for large-scale training, with 40GB of memory supporting models with up to 3 billion parameters (such as GPT-2-large). A100 queue times are longer, averaging **35 minutes** off-peak and potentially exceeding 3 hours during exam weeks. It is recommended to request the A100 only when a model cannot be trained on the V100.

### RTX 4090: Fast Iteration

The RTX 4090 (about 30 cards) suits small-batch, rapid experiments, but its 24GB memory limits use on large datasets or high-resolution images. RTX 4090 jobs are limited to **24 hours** per run (lower than the 48 hours of the V100 and A100), and it does not support NVLink multi-card communication.

## Common Errors and Troubleshooting

When **using GPU servers**, students often see jobs fail due to configuration errors or insufficient resources. ANU ITS statistics show that around **23%** of first-time jobs in 2024 were terminated because of environment configuration issues. Below are three frequent errors and their solutions.

### CUDA Version Mismatch

The top cause of job failure is a mismatch between the CUDA version required by the code and the cluster environment. The cluster has CUDA 12.1 installed by default, but some course templates (such as the COMP4670 PyTorch examples) require CUDA 11.8. Students need to add the `module load cuda/11.8` command to their job submission scripts. ITS provides a pre-configured Anaconda environment with both CUDA 11.8 and 12.1, switchable via `conda activate pytorch-cuda118`.

### Out-of-Memory (OOM)

GPU memory overflow (OOM) during training is the most common runtime error. 2024 data shows **37%** of jobs were automatically terminated for insufficient memory. Solutions include reducing the batch size, using gradient accumulation, or enabling mixed-precision training (AMP). ITS recommends adding `--batch-size 16` and `--amp` flags to job scripts as default configuration.

### Insufficient Storage Quota

Each student has a **50GB** storage quota in both the cluster home directory (`/home/`) and the project directory (`/projects/`). Large datasets (such as ImageNet, about 150GB) must be stored in the shared `/scratch/` directory (quota 500GB), but that directory is automatically cleaned every 30 days. Students need to copy datasets to `/scratch/` in their job scripts and clean up temporary files after training completes.

## End-of-Semester Resource Recovery and Renewal

**Resource recovery** begins in week 12 of each semester, when ITS terminates all unfinished course project jobs and reclaims unused GPU hour quotas. Reclaimed resources are reallocated to research projects to keep compute capacity available during the break. 2024 data shows that GPU hours recovered in week 12 accounted for about **15%** of the semester's total quota.

### Saving Project Data

Students must migrate trained models, logs, and code from the cluster home directory to personal storage or ANU-provided cloud storage (such as ANU OneDrive, with a 1TB quota) before week 12. ITS does not keep data for more than 30 days after the semester ends. In 2024, around **5%** of students lost training results because they did not migrate their data in time.

### Renewal Applications

Students who need GPU access over the break (such as HDR students or extended projects) must submit a renewal application before week 10 of semester. The renewal application must include a project progress report and a timeline of remaining work. In 2024, the renewal approval rate was **72%**, with an average additional quota of **800 GPU hours** approved.

## FAQ

### Q1: How long after applying do I get GPU server access?

Account activation usually takes 1-2 business days. Once the project quota application is approved, students can download the private key in the "SSH Keys" module of the Portal and log in to the cluster immediately. 2024 data shows the average time from application submission to first successful job submission was **3.8 business days**, with 95% of applications completed within 5 business days.

### Q2: Can I apply for more after my GPU usage quota runs out?

Yes. Students can submit an "additional quota request" through the Portal, which requires detailed justification (such as a model that has not yet converged or a test set that has not been fully evaluated). The additional quota cap is **50%** of the initial quota, with an approval cycle of 2-5 business days. In 2024, about **18%** of course project students applied for additional quota, and 76% were approved.

### Q3: Can I train models on my personal computer instead of using the cluster?

Yes, but be aware of the performance limits of personal computers. ANU ITS recommends considering a personal computer (such as one with an RTX 3060 or better GPU) only when the model has fewer than 500 million parameters and the training data is under 10GB. For COMP4670 and COMP6710 course projects, around **65%** of model training requires cluster-level GPU resources [ANU CECS 2024, Course Resource Survey].

## References

- ANU Information Technology Services. 2024. High-Performance Computing Resource Allocation Report.
- ANU College of Engineering, Computing and Cybernetics. 2024. Course Resource Allocation Report.
- ANU Information Technology Services. 2024. Monthly GPU Utilization Report (August 2024).
- ANU College of Engineering, Computing and Cybernetics. 2024. GPU Benchmark Report (V100 vs A100 vs RTX 4090).
- UNILINK Education. 2024. ANU Computing Resource Access Guide (Internal Database).
