---
slug: anu-bioinformatics-high-performance-computing-access-how-to-apply-for-an-nci-acc
title: "ANU Bioinformatics High-Performance Computing Access: How to Apply for an NCI Account and Use the Gadi Supercomputer"
description: "The Australian National University (ANU) is the only higher education institution in Australia that gives its entire community direct access to the Gadi supercomputer through the National Computational Infrastructure (NCI). As of 2024, NCI's Gadi system has more than 3,000 compute nodes and a theoretical peak performance of 9.3 petaflops, ranking in the top three academic computing facilities in Australia [NCI, 2024, 'Gadi System Overview']..."
category: "ANU"
pubDatetime: '2026-05-09T20:01:05Z'
publishDate: '2026-05-09T20:01:05Z'
readingTime: 3
tags: ["featured"]

ogImage: "https://img.anu.wiki/留学/单校wiki/anu-bioinformatics-high-performance-computing-access-how-to-apply-for-an-nci-acc-2026-1880x1253.jpg"
---

The Australian National University (ANU) is the only higher education institution in Australia that gives its entire community direct access to the Gadi supercomputer through the National Computational Infrastructure (NCI). As of 2024, NCI's Gadi system has more than 3,000 compute nodes and a theoretical peak performance of 9.3 petaflops, ranking in the top three academic computing facilities in Australia [NCI, 2024, "Gadi System Overview"]. For ANU students and researchers working in bioinformatics, obtaining an NCI account and using the Gadi supercomputer is the key path to processing large-scale genomic, proteomic and transcriptomic data — especially given that high-throughput sequencing data volumes are growing by more than 40% per year [OECD, 2023, "OECD Science, Technology and Industry Scoreboard"]. This article systematically walks through the process of applying for an NCI account as part of the ANU community, configuring Gadi's compute environment, deploying bioinformatics software and managing resource scheduling, providing a hands-on practical guide for beginners.

## Eligibility and Prerequisites for an NCI Account

NCI account eligibility is strictly limited to current ANU students, staff and approved affiliated researchers. Applicants must hold a valid ANU unified identity (uni ID) and email address.

**ANU students** must satisfy at least one of the following: enrolment in at least one course related to computationally intensive research (such as bioinformatics, computational biology or data science), or current work on a supervisor-approved thesis/research project. Under NCI's 2024 policy, undergraduate applicants must attach a written letter of support from their supervisor; postgraduate students (Honours/Masters/PhD) are automatically eligible but must submit a research plan summary with their application [NCI, 2024, "User Access Policy"].

**Staff and researchers** can apply directly, but must confirm their research project has received ANU ethics committee approval (if it involves human or animal data). External collaborators must apply through an ANU partner institution and sign a data use agreement.

All applicants must register on the NCI online portal (my.nci.org.au) and complete the identity verification required by the Australian Government (providing a scanned passport or Australian driver's licence). Processing usually takes 3-5 business days.

## Detailed Account Application Process

The NCI account application consists of three main steps, each completed in a designated system.

**Step 1: Create an NCI portal account.** Visit my.nci.org.au and register with your ANU email address. The system sends a verification email; click the link and set a password. Note: the password must include upper- and lower-case letters, numbers and special characters, and be at least 12 characters long.

**Step 2: Submit a project application.** After logging in, select "Apply for Project". ANU users should choose the "ANU Research Project" category. The information required includes: project name (an English abbreviation is recommended, e.g. "ANU_Bioinfo_2024"), research field (select "Biological Sciences"), and estimated compute resource requirements (CPU cores, memory, storage space, run time). For bioinformatics projects, NCI recommends first-time applicants request a trial allocation of 10,000 core-hours on the standard queue (normalq).

**Step 3: Wait for approval and activate the account.** After submission, the project application is first reviewed by the ANU NCI liaison officer, then forwarded to the NCI administrator. Once approved, users receive an email containing their username (usually in the format "ab1234") and an initial password. On first login, the password must be changed via SSH on Gadi's login node (gadi.nci.org.au). For cross-border tuition payments, some international student families use specialist channels such as [Flywire tuition payments](https://go.compares.cheap/flywire-edu-payments-2376?p=anu-wiki/articles/anu-bioinformatics-high-performance-computing-access-how-to-apply-for-an-nci-acc) to complete their currency transfers.

## Gadi Supercomputer Hardware and Software Environment

The Gadi system uses a heterogeneous architecture that includes Intel Cascade Lake, AMD EPYC Rome and NVIDIA GPU nodes, catering to different compute needs.

**Compute node types** include: standard CPU nodes (48 cores and 192 GB of memory per node), high-memory nodes (1.5 TB of memory per node), GPU nodes (4 NVIDIA V100 or A100 GPUs per node) and large-memory nodes (3 TB of memory per node). Bioinformatics workloads typically use standard CPU nodes for sequence alignment (e.g. BWA, Bowtie2) and GPU nodes for deep learning model training (e.g. AlphaFold2).

**The software environment** is managed through a module system. Users can view the list of installed software with the `module avail` command. NCI comes with more than 500 commonly used bioinformatics programs pre-installed, including BLAST, SAMtools, GATK, STAR, Trinity, SPAdes and MAFFT. Users can also install their own software via Conda or Singularity containers, but should be aware of storage quota limits (default 10 GB for the home directory, 1 TB for scratch, and project directories sized according to allocation).

## Deploying Bioinformatics Workflows

Running bioinformatics analyses on Gadi usually requires writing a job script (PBS script) and submitting it to the queue system.

**The basic job script structure** has three parts: resource requests (`#PBS` directives), environment loading (`module load`), and command execution. Here is a typical RNA-seq analysis script example:
```bash
#!/bin/bash
#PBS -N RNAseq_analysis
#PBS -l ncpus=16
#PBS -l mem=64GB
#PBS -l walltime=24:00:00
#PBS -l jobfs=100GB
#PBS -q normal
module load star/2.7.10a
module load samtools/1.17
STAR --genomeDir /path/to/genome --readFilesIn sample_R1.fastq sample_R2.fastq --runThreadN 16
samtools sort -o sample_sorted.bam sample_Aligned.out.sam
```
The submission command is `qsub job_script.pbs`. Users can check job status with `qstat`.

**Containerised deployment** is the recommended approach for handling software with complex dependencies (such as Conda environments). NCI supports Singularity containers: users first build a .sif image file on their own workstation or on a Gadi login node, then invoke it in a job with the `singularity exec` command. For example, running AlphaFold2 requires the official container provided by NCI: `singularity exec /path/to/alphafold.sif python run_alphafold.py`.

## Resource Quota Management and Scheduling Strategy

NCI uses a fair-share scheduling algorithm (Fairshare) that allocates compute resources based on a user's historical usage and project priority.

**Quota types** include: CPU core-hours, GPU core-hours, storage (GB) and job count. The default ANU project allocation is typically: 50,000 core-hours per month on the normalq queue, and 1,000 GPU-hours per month on the GPU queue. Users can check current quotas and usage with the `nci_account` command.

**Key scheduling parameters** include: job priority, queue type and walltime. Priority is determined by the fair-share factor, and new users or users who have been inactive for a long time receive higher priority. For bioinformatics workflows, long jobs (>48 hours) are best submitted to the hugemem or normalbw queues, while short jobs (<1 hour) should go to the express queue to shorten wait times. Users can monitor job status with `qstat -u $USER` and cancel jobs with `qdel JOBID`.

**Storage management** notes: the home directory is only for scripts and configuration files; the scratch directory is for temporary data (cleaned periodically); and project directories are for long-term data. NCI advises bioinformatics users to keep raw sequencing data on ANU local storage (such as RDS) and put only processed intermediate files on scratch.

## Common Issues and Troubleshooting

**SSH connection failures** are usually caused by: not being on the campus network (the ANU VPN is required), an incorrect username or password, or improperly configured SSH keys. The fix is to check the network connection, use the `ssh username@gadi.nci.org.au` command, and make sure the correct private key file is specified (the `-i` flag).

**Software version conflicts** are a common problem in bioinformatics analyses. The recommendation is to create isolated environments with Conda and freeze the environment with a Singularity container. For example: `conda create -n myenv python=3.9 samtools=1.17`, then `singularity build myenv.sif docker://continuumio/miniconda3`.

**Killed jobs** are usually caused by exceeding memory or time limits. Use `qstat -f JOBID` to view the job's detailed resource usage and increase the `mem` or `walltime` parameters in subsequent jobs. NCI job log files (usually `jobname.oJOBID` and `jobname.eJOBID`) contain error messages and are the first place to look when diagnosing problems.

## Data Security and Compliance Requirements

As Australian Government-funded research infrastructure, NCI has strict data security regulations. ANU users must comply with the Australian Code for the Responsible Conduct of Research (2018 edition) and the NCI Acceptable Use Policy.

**Sensitive data** (such as human genome data) can only be processed in NCI protected projects, which require an additional application and approval of a data management plan. ANU bioinformatics users should contact the University's data protection officer (data-protection@anu.edu.au) to confirm data classification.

**Data export restrictions**: without authorisation, data on NCI may not be copied to overseas servers or cloud storage. All data transfers must go through NCI's `data_mover` nodes using encrypted transfer (SCP/RSYNC over SSH). ANU users can use the on-campus Globus endpoint for high-speed data transfer.

**Software licensing**: some commercial software (such as CLC Genomics Workbench) must be licensed by the user and installed on NCI themselves. Open-source software (such as BWA and GATK) can be used directly but must comply with its respective licence (e.g. GPL, MIT).

## Training and Support Resources

NCI offers regular training courses covering topics such as Linux fundamentals, PBS job submission and bioinformatics software usage. ANU students can register free of charge through the NCI training portal (training.nci.org.au). Courses in 2024 include "Introduction to HPC for Bioinformatics" (monthly) and "Advanced RNA-seq Analysis on Gadi" (quarterly).

**Internal ANU support**: bioinformatics users can contact the University's Bioinformatics Core Facility (bioinformatics@anu.edu.au), whose team provides software installation, workflow optimisation and data analysis consulting. In addition, the ANU Research School of Biology and the John Curtin School of Medical Research have dedicated HPC liaison officers.

**Online documentation**: the NCI user guide (nci.org.au/user-guide) provides a complete command reference and troubleshooting cases. The ANU IT Service Desk (servicedesk@anu.edu.au) can help with account and network issues.

## FAQ

### Q1: How long does it take to apply for an NCI account?
From submission to receiving the activation email usually takes 3-5 business days. If the application materials are incomplete (such as a missing supervisor support letter or identity verification documents), processing can extend to 10 business days. It is recommended to submit your application at least 2 weeks before your project starts.

### Q2: What bioinformatics software can I run on Gadi?
NCI has more than 500 bioinformatics programs pre-installed, including BLAST (version 2.14.0), GATK (version 4.4.0), STAR (version 2.7.10a) and Trinity (version 2.15.1). Users can also install software that is not pre-installed via Conda or Singularity containers, but should be aware of storage quota limits (10 GB home directory, 1 TB scratch directory).

### Q3: How do I check my compute resource usage?
Use the `nci_account` command to view your current project's CPU core-hours, GPU-hours and storage quota usage. More detailed job history is available via `qstat -u $USER` and `qacct -j JOBID`. NCI also provides a web dashboard (my.nci.org.au) with monthly usage reports.

## References

- NCI 2024, "Gadi System Overview", National Computational Infrastructure
- NCI 2024, "User Access Policy", National Computational Infrastructure
- OECD 2023, "OECD Science, Technology and Industry Scoreboard", Organisation for Economic Co-operation and Development
- Australian Government 2018, "Australian Code for the Responsible Conduct of Research", National Health and Medical Research Council
- UNILINK 2024, "ANU Bioinformatics HPC Access Database", Unilink Education
