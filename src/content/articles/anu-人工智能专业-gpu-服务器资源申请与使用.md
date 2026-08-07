---
slug: anu-人工智能专业-gpu-服务器资源申请与使用
title: "ANU AI Programs: Applying for and Using GPU Server Resources"
description: "Postgraduate students and senior undergraduates in artificial intelligence programs at the Australian National University (ANU) usually need to apply for on-campus GPU computing resources when completing coursework or research projects. The **National Computational Infrastructure (NCI)**, run jointly by ANU Information Technology Services (ITS) and the College of Engineering, Computing and Cybernetics (CECC), together with local clusters, provides the core computing power for AI research on campus. According to ANU's 2024 Research Computing Services Annual Repo..."
category: "general"
pubDatetime: '2026-03-27T19:52:43Z'
publishDate: '2026-03-27T19:52:43Z'
readingTime: 12
tags: ["featured"]

ogImage: "https://img.anu.wiki/留学/单校wiki/anu-人工智能专业-gpu-服务器资源申请与使用-2026-1880x1253.jpg"
---

Postgraduate students and senior undergraduates in artificial intelligence programs at the Australian National University (ANU) usually need to apply for on-campus GPU computing resources when completing coursework or research projects. The **National Computational Infrastructure (NCI)**, operated jointly by ANU Information Technology Services (ITS) and the College of Engineering, Computing and Cybernetics (CECC), together with local clusters, provides the core computing power for AI research on campus. According to ANU's 2024 Research Computing Services Annual Report, more than 72% of registered AI-related research projects on campus rely on NCI or college-level GPU clusters for model training. In addition, 2023 data released by the Australian Research Council (ARC) shows that ANU's GPU compute consumption in machine learning and computer vision ranks in the top three among Australian universities. This article systematically walks through ANU's on-campus GPU resource application process, quota rules, usage guidelines, and common questions for current students.

## Resource Types and Access Levels

ANU offers AI students three tiers of GPU computing resources: the **NCI national facility**, the **CECC college cluster**, and **course-specific queues**. NCI's Gadi supercomputer is equipped with more than 4,000 NVIDIA V100 and A100 GPUs and is open to research institutions across Australia; ANU students can obtain project allocations through their supervisors. The local clusters run by CECC (such as Obelix and Triton) mainly serve the college's courses and thesis projects, providing about 120 RTX 6000 and A5000 GPUs. In addition, specific courses such as COMP4670 (Deep Learning) set up temporary queues offering about 2,000 GPU-hours of free quota per semester.

### Applying for an NCI Account

Students first register a personal account on the NCI website, verifying their identity with an ANU email address (@anu.edu.au). After registering, a supervisor must submit a **project proposal** as the project leader, specifying the GPU types needed, the expected usage duration, and the scale of computation. NCI reviews proposals quarterly, with a standard processing time of 4 to 6 weeks. Once approved, your account is added to the project group and you can SSH into the Gadi login nodes.

### Accessing the College Cluster

Access to the CECC cluster is managed directly by the college IT administrators. Students fill in the CECC Computing Resource Application Form, stating their course code or research topic. Review is usually completed within 3 business days. The cluster login node addresses, SSH key setup instructions, and Slurm job submission templates are all included in the approval email.

## GPU Quotas and Billing Rules

ANU manages GPU resources through a combination of **quotas and metered billing**. NCI project quotas are calculated in GPU-hours: a standard project receives a base quota of 50,000 GPU-hours per year, and anything beyond that must be topped up through additional applications or by purchasing Service Units (SUs). 1 SU is roughly equal to 1 GPU-hour, and the price varies by GPU model: V100 GPUs cost 0.12 AUD/SU and A100 GPUs 0.24 AUD/SU (NCI 2024 rate schedule).

### Free Course Quotas

Each semester, ANU provides **course-specific free quotas** to students enrolled in AI-related courses. Taking COMP4670 as an example, each student gets 500 GPU-hours of free quota per semester, usable only in the course-designated queue. Anything beyond that must come from your personal or your supervisor's project quota.

### Overuse and Suspension

When your account's GPU-hour usage reaches 90% of the quota, the system automatically sends an email reminder. At 100%, job submissions are suspended until the quota refreshes or you top up. Jobs already running are not affected during the suspension, but no new jobs can be submitted. Quota refresh cycles: NCI projects refresh quarterly, course queues once per semester.

## Submitting Jobs and the Scheduling System

All of ANU's GPU clusters use the **Slurm job scheduler** for resource management. Students submit batch scripts through Slurm, specifying the number and type of GPUs, runtime, and partition. NCI's Gadi cluster uses the PBS Professional scheduler, whose syntax differs slightly from Slurm's but follows the same core logic.

### Common Slurm Commands

- `sbatch jobscript.sh`: submit a job script
- `squeue -u $USER`: check your queue status
- `scancel job_id`: cancel a specified job
- `sinfo`: view node status and available GPUs across partitions

### Example Job Script

Here is a standard script template for submitting a PyTorch training job on 1 V100 GPU running for 8 hours:

```bash
#!/bin/bash
#SBATCH --job-name=my_training
#SBATCH --partition=gpu
#SBATCH --gres=gpu:1
#SBATCH --time=08:00:00
#SBATCH --mem=32GB
#SBATCH --output=output_%j.log

module load python/3.9
source activate my_env
python train.py
```

### Job Priority and Queuing

The cluster dynamically adjusts priority based on a user's historical usage, project urgency, and current load. Newly submitted jobs enter the **fair-share queue** by default, and priority increases linearly with waiting time. Urgent jobs can apply for a high-priority queue, but the supervisor must provide a written justification, and a single application cannot exceed 48 hours.

## Data Storage and Transfer

GPU workloads usually involve large datasets, and ANU provides a tiered storage setup. **NCI project storage** (/scratch) offers 10 TB of free space per project, suitable for temporary storage of training data and model checkpoints. Long-term storage uses NCI's **Mass Data Store** (MDS), billed at 0.02 AUD/GB/year. The CECC cluster provides each user with a 500 GB Home directory; anything beyond that must be cleaned up or migrated.

### Data Transfer Tools

On the campus network, `rsync` or `scp` are recommended for data transfer. For datasets larger than 50 GB, use the **Globus** online transfer service, which supports resumable transfers and automatic verification. When downloading datasets from outside, avoid campus Wi-Fi — use a wired connection or download directly on a login node for more stable transfers.

### Data Security and Backups

All GPU clusters prohibit storing sensitive personal information or unauthorised data. NCI snapshots project storage weekly and retains backups for 14 days. The CECC cluster offers no automatic backup, so students must sync important code and results to off-cluster storage themselves (such as ANU OneDrive or GitHub).

## Common Errors and Troubleshooting

Students often run into failed jobs or poor performance when using GPU resources. Here are the three most frequent errors and how to fix them.

### Out-of-Memory Errors

Error messages usually contain `CUDA out of memory`. Solutions include reducing the batch size, enabling gradient accumulation, or requesting more GPU memory (for example, moving from a V100 16GB to an A100 40GB). In the Slurm script, you can cap memory explicitly with `#SBATCH --mem=64GB`.

### Driver and CUDA Version Mismatches

The clusters come with multiple CUDA versions preinstalled; students must load the version they need with `module load cuda/11.8`. If you use PyTorch, install a precompiled build that matches the cluster's CUDA version (for example, `pip install torch==2.0.1+cu118`) to avoid runtime dynamic compilation errors.

### Jobs Killed by Timeouts

Slurm jobs have strict time limits. If a training script cannot finish within the time specified by the `--time` parameter, the job is automatically terminated. Add checkpoint-saving logic to your script so training can resume from a checkpoint. You can also split long tasks into several short ones and submit them as a job array.

## Remote Desktop and Visualisation

Some AI projects need a graphical interface for data visualisation or model debugging. ANU GPU clusters can be accessed through **remote desktop** or **Jupyter Notebook**. NCI's Gadi system offers VDI (Virtual Desktop Infrastructure): students can launch a VNC-based remote desktop session from the NCI portal, supporting visualisation tools such as TensorBoard and Matplotlib.

### JupyterHub Deployment

The CECC cluster runs a JupyterHub service that students can access directly from a browser. After logging in, you can select a GPU kernel and allocate compute resources. Each user can run at most two Jupyter sessions at a time, and each session lasts up to 12 hours. Sessions idle for more than 30 minutes are disconnected automatically.

### X11 Forwarding

For lightweight visualisation needs, you can enable X11 forwarding over SSH: `ssh -X user@gadi.nci.org.au`. This approach is sensitive to network latency, however, and is unsuitable for rendering large-scale 3D graphics or real-time video streams.

## End-of-Semester Resource Cleanup

At the end of each semester, ANU performs a **cleanup and quota reset** on the GPU clusters. All jobs in course-specific queues are cancelled automatically, and unused free quotas are cleared. Temporary files in NCI project storage (/scratch) are deleted periodically, with a retention deadline typically 14 days after the semester ends.

### Data Migration Tips

At least two weeks before the semester ends, migrate important data from the clusters to personal storage or off-campus cloud storage. A good approach is to package with `tar` and transfer with `rsync` to ANU OneDrive (1 TB capacity, free for current students). For thesis-related code and experiment results, back them up to a private GitHub repository as well.

### Quota Renewal and Extensions

If you need to keep using GPU resources during the break, your supervisor can submit a **quota renewal application** to NCI, describing the holiday research plan and expected usage. Renewal applications must be submitted 10 business days before the semester ends; late submissions automatically join the next quarter's queue.

## FAQ

### Q1: How long does it take for an ANU AI student to get GPU resources?

From submitting the NCI account registration to actually receiving GPU access, the standard cycle is **4 to 6 weeks**: about 1 week for account review and about 3 to 5 weeks for the supervisor's project proposal review. The CECC college cluster is faster, usually **3 business days**. Start the application at least 6 weeks before your course begins so your job submissions aren't delayed.

### Q2: After the free GPU quota runs out, how can I keep using GPUs?

There are two ways to continue after the free quota is exhausted. First, your supervisor can top up your NCI account from their project quota at a cost of **0.12 to 0.24 AUD per GPU-hour** (depending on the GPU model). Second, you can apply for extra quota from the course teaching team — once per course per semester, capped at **2,000 GPU-hours**. Anything beyond that must be purchased as compute units out of pocket.

### Q3: How can I avoid my training jobs being interrupted on ANU GPU clusters?

The key measures are: save a checkpoint every **5 to 10 epochs** in your training script; set the job's time parameter to **1.5 times** your estimated training time; and use Slurm job arrays to split long tasks into subtasks of no more than **4 hours** each. Also avoid submitting large training jobs in the last two weeks of semester, when cluster load is high and the chance of jobs being preempted rises by about **30%**.

## References

- NCI Australia. 2024. *NCI Gadi User Guide and Service Rate Schedule*.
- Australian National University, Information Technology Services. 2024. *Research Computing Services Annual Report*.
- Australian Research Council. 2023. *Research Infrastructure Investment and Usage Data for Machine Learning*.
- ANU College of Engineering, Computing and Cybernetics. 2024. *CECC Computing Cluster User Manual*.
- Unilink Education. 2024. *ANU Computing Resource Application Database* (internal reference).
