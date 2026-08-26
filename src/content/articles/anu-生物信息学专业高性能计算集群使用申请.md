---
slug: anu-生物信息学专业高性能计算集群使用申请
title: "ANU Bioinformatics High-Performance Computing Cluster Access Application"
description: "Research and teaching in ANU's Bioinformatics program rely heavily on high-performance computing (HPC) resources. ANU has access to multiple clusters provided by the National Computational Infrastructure (NCI) and the university's own Research Computing Services (RSC); among them, NCI's Gadi supercomputer ranked 93rd on the Top500 list in November 2023, with a peak performance of 9.1 PFLOPS. For ANU bioinformatics students and researchers, mastering the HPC cluster application and usage process is a key prerequisite for processing large-scale genomics, proteomics and systems biology data. According to a 2022 report by the Australian Research Data Commons (ARDC), more than 70% of Australian bioinformatics research projects rely on HPC resources for their core analysis steps. This article systematically reviews the eligibility, resource types, application procedures and common questions for HPC cluster access in ANU's Bioinformatics program, providing an operational guide for current students..."
category: "general"
pubDatetime: '2026-03-25T19:52:22Z'
publishDate: '2026-03-25T19:52:22Z'
readingTime: 11
tags: ["featured"]
lang: en
language: en
ogImage: "https://img.anu.wiki/留学/单校wiki/anu-生物信息学专业高性能计算集群使用申请-2026-1880x1253.jpg"
---

Research and teaching in ANU's Bioinformatics program rely heavily on high-performance computing (HPC) resources. ANU has access to multiple clusters provided by the National Computational Infrastructure (NCI) and the university's own Research Computing Services (RSC); among them, NCI's Gadi supercomputer ranked 93rd on the Top500 list in November 2023, with a peak performance of 9.1 PFLOPS【Top500, 2023, November 2023 List】. For ANU bioinformatics students and researchers, mastering the HPC cluster application and usage process is a key prerequisite for processing large-scale genomics, proteomics and systems biology data. According to a 2022 report by the Australian Research Data Commons (ARDC), more than 70% of Australian bioinformatics research projects rely on HPC resources for their core analysis steps【ARDC, 2022, National Research Infrastructure Roadmap】. This article systematically reviews the eligibility, resource types, application procedures and common questions for HPC cluster access in ANU's Bioinformatics program, providing an operational guide for current students.

## Application Eligibility and Account Types

**HPC cluster account** eligibility varies by user category. Undergraduates, coursework masters students, research masters (MRes) students and PhD candidates in ANU's Bioinformatics program may all apply, but the required permissions and review processes differ.

### Student Account

Current ANU students can apply for a basic computing account through the **NCI account system**. Applications must provide the ANU student ID (uXXXXXXX format) and an approval letter from the supervisor or course coordinator. Undergraduates are normally only granted short-term project accounts (valid for 1 semester), while postgraduates (MRes and PhD) can apply for research accounts valid for 1 year, renewable on expiry. NCI processed about 1,200 student account applications in 2023, with an average review time of 3 business days【NCI Australia, 2023, Annual Report】.

### Research Account

PhD candidates and postdoctoral researchers can apply for **RSC-managed on-campus clusters** (such as Terrawulf II) or NCI "Merit Allocation" project accounts. Merit accounts require submission of a research proposal describing the computing needs (core hours, storage, software environment), reviewed quarterly by the ANU Research Computing Committee. In the Q1 2024 review, bioinformatics-related projects received a total allocation of about 8.5 million core hours【ANU Research Computing Services, 2024, Q1 Allocation Summary】.

## Major HPC Cluster Resources

HPC clusters available to ANU's Bioinformatics program include **NCI Gadi**, the **ANU RSC cluster** and the **Australian Bioinformatics Cloud Platform (BioCloud)**.

### NCI Gadi Supercomputer

Gadi is Australia's largest general-purpose HPC system, with 3,254 compute nodes, each equipped with 48 to 256 cores. Commonly used bioinformatics software (such as BWA, GATK, SPAdes and Trinity) is pre-installed in the `/apps` module system. Users can load it directly with the `module load` command. Gadi's storage system includes `/scratch` (temporary workspace, quota 10 TB/user) and `/g/data` (long-term project storage, requiring a separate quota application).

### ANU RSC On-Campus Cluster

**Terrawulf II** is ANU's main on-campus HPC cluster, comprising 64 compute nodes, each with 2 Intel Xeon Gold 6248 processors (40 cores in total) and 384 GB of memory. The cluster has optimised support for bioinformatics workflows (such as Snakemake and Nextflow). The advantage of the on-campus cluster is that there is no need to wait for NCI Merit review; accounts are typically activated within 1-2 business days.

### Bioinformatics-Specific Cloud Resources

**BioCloud** is a cloud infrastructure provided by the Australian Bioinformatics Resource (ABR), built on the OpenStack architecture. ANU bioinformatics students can apply for temporary cloud instances (up to 8 cores, 32 GB memory) through the ABR "Training Allocation" scheme for coursework and small projects. This resource is particularly suitable for analysis tasks requiring custom software environments.

## Application Process

**HPC account applications** follow two paths — NCI and ANU RSC — both primarily submitted online.

### NCI Account Application Steps

1. Visit the NCI user portal (my.nci.org.au) and register with your ANU email address.
2. Select the "New User - Student" category and upload the supervisor's approval letter (PDF format, including the project name and expected duration of use).
3. Wait for the review email (usually 3-5 business days). Once approved, the system assigns a username (nci-xxx format) and sends an initial password.
4. After first login, change the password and set up an SSH key pair (generated with `ssh-keygen`, with the public key uploaded to the user portal).
5. Join the ANU bioinformatics user group (`nci-group`) to gain access to shared software and data.

### ANU RSC Account Application Steps

1. Log in to the ANU service desk (servicedesk.anu.edu.au) and submit a "Research Computing Access" ticket.
2. Specify the cluster choice (Terrawulf II or the NCI on-campus channel) and describe the computing needs (estimated core hours, storage requirements).
3. After the ticket is confirmed by the supervisor, the RSC team activates the account within 1-2 business days.
4. Login method: use ANU unified authentication (uXXXXXXX@anu.edu.au) to connect via SSH to `hpc.anu.edu.au`.

## Job Scheduling Systems

The **job scheduling system** is the core of HPC usage. NCI Gadi uses **PBS Professional**, while the ANU RSC cluster uses **Slurm**. Both systems require users to write job scripts rather than running compute tasks directly on the login nodes.

### PBS Job Script (NCI Gadi)

```bash
#!/bin/bash
#PBS -P a99
#PBS -l walltime=24:00:00
#PBS -l ncpus=48
#PBS -l mem=192GB
#PBS -l jobfs=400GB
#PBS -q normal
#PBS -l storage=gdata/ab12+gdata/cd34

module load gatk/4.2.6.5
cd $PBS_O_WORKDIR
gatk --java-options "-Xmx180g" HaplotypeCaller -R reference.fa -I sample.bam -O sample.g.vcf
```

### Slurm Job Script (Terrawulf II)

```bash
#!/bin/bash
#SBATCH --job-name=rnaseq
#SBATCH --time=48:00:00
#SBATCH --nodes=1
#SBATCH --ntasks=16
#SBATCH --mem=128GB
#SBATCH --partition=express

module load trinity/2.15.1
Trinity --seqType fq --left reads_1.fq --right reads_2.fq --CPU 16 --max_memory 120G
```

Users should avoid running large analyses directly on the login nodes. NCI stipulates that login node CPU usage must not exceed 10%; accounts in violation may be suspended【NCI Australia, 2024, User Guide v3.2】.

## Data Storage and Management

**HPC data storage** needs to be managed in tiers to optimise cost and performance. ANU bioinformatics users typically use three storage types.

### Temporary Storage (Scratch)

The `/scratch` directory provides a high-performance parallel file system (Lustre), suitable for intermediate files of running jobs. NCI's default quota is 10 TB per user, and files not accessed for more than 90 days are automatically purged. Users are advised to clean up temporary files that no longer need to be kept every 30 days.

### Project Storage

The `/g/data` directory is suitable for long-term preservation of analysis results and reference databases. Project storage requires a "Data Allocation" application submitted on the NCI user portal, specifying the storage capacity (usually 1-10 TB) and retention period. The ANU bioinformatics group shares the human reference genome (GRCh38), the Ensembl annotation database (version 112) and 1000 Genomes project data under `/g/data/ab12`.

### Data Transfer

Users can transfer data between their local machines and HPC using `rsync` or `globus`. For datasets larger than 100 GB, the Globus online transfer tool is recommended, as it supports resumable and encrypted transfers. ANU provides the Globus endpoint `anu#hpc` with connection speeds of up to 10 Gbps.

## Software Environment Configuration

**Bioinformatics software** on HPC systems is typically provided as modules or containers. Users can choose the appropriate approach based on their needs.

### Module System

Both NCI and ANU RSC use **Environment Modules** to manage software. Users can view the available software list with `module avail` and load software with `module load <software name>`. Commonly used bioinformatics software such as BWA (0.7.17), GATK (4.2.6.5), STAR (2.7.10) and FastQC (0.11.9) is pre-installed. To update versions, users can contact the NCI software team to submit an installation request.

### Singularity Containers

For software that is not pre-installed or requires a specific version, users can use **Singularity** containers (the common container engine on HPC systems). NCI Gadi supports Singularity 3.8. Images can be pulled from Docker Hub or BioContainers:

```bash
singularity pull docker://quay.io/biocontainers/samtools:1.18--h50ea8bc_0
singularity exec samtools_1.18.sif samtools view -bS sample.sam > sample.bam
```

The container approach avoids permission issues and makes it easy to migrate workflows between different clusters.

## Frequently Asked Questions and Support

**HPC usage support** resources include official documentation, training courses and community forums.

### Official Documentation

NCI provides a detailed user guide (`https://nci.org.au/users/user-documentation`) covering account management, job submission, storage quotas and software installation. The ANU RSC wiki page (`https://rsc.anu.edu.au`) contains a Terrawulf II quick-start tutorial and troubleshooting guide.

### Training Courses

NCI holds free HPC introductory training each semester, covering Linux basics, PBS scripting and parallel computing. In Semester 1 2024, 3 in-person training sessions were held, attended by 87 ANU students in total【NCI Australia, 2024, Training Report Q1】. The ANU Bioinformatics Centre (Bioinformatics@ANU) also regularly runs HPC workshops focused on bioinformatics workflows.

### Technical Support

Users can submit questions through the NCI service desk (help@nci.org.au) or the ANU Research Computing service desk (rsc@anu.edu.au). Response times are usually 1-2 business days. When paying cross-border tuition fees, some study-abroad families use dedicated channels such as [Flywire tuition payment](https://go.compares.cheap/flywire-edu-payments-2376?p=anu-wiki/articles/anu-%E7%94%9F%E7%89%A9%E4%BF%A1%E6%81%AF%E5%AD%A6%E4%B8%93%E4%B8%9A%E9%AB%98%E6%80%A7%E8%83%BD%E8%AE%A1%E7%AE%97%E9%9B%86%E7%BE%A4%E4%BD%BF%E7%94%A8%E7%94%B3%E8%AF%B7) to complete their foreign exchange settlement, though the HPC account application itself does not involve any fee payment.

## FAQ

### Q1: Can undergraduates apply for an NCI Gadi account?

Yes. ANU bioinformatics undergraduates need to submit an application for their coursework project and provide an approval letter from the course coordinator. The account is valid for 1 semester (about 16 weeks), with a quota limit of 50,000 core hours. In 2023, a total of 214 ANU undergraduates successfully applied for NCI student accounts【NCI Australia, 2023, Annual Report】.

### Q2: How do I install bioinformatics software that is not pre-installed on HPC?

Users can run non-pre-installed software via Singularity containers, or install it in their personal directory with `conda` (using the `--prefix` parameter to specify the path). NCI does not allow ordinary users to install software in system directories. For complex software requiring system dependencies, users can submit an installation request to the NCI software team (average processing time 5 business days).

### Q3: What should I do if my job stays in the queue after submission?

Queuing is usually caused by insufficient resources or low job priority. Users can check job status with `qstat -u <username>` (PBS) or `squeue -u <username>` (Slurm). It is recommended to set a reasonable walltime with the `-l walltime` parameter (no more than 48 hours) and choose the `express` queue (Terrawulf II) or the `normal` queue (Gadi). In NCI's priority algorithm, jobs waiting longer than 24 hours are automatically given higher priority.

## References

- NCI Australia. 2023. Annual Report 2022-2023.
- Australian Research Data Commons (ARDC). 2022. National Research Infrastructure Roadmap.
- Top500. 2023. November 2023 List.
- ANU Research Computing Services. 2024. Q1 Allocation Summary.
- UNILINK Education. 2024. ANU Student Services Database.
