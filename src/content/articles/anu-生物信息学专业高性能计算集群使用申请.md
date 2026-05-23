---
title: "ANU 生物信息学专业高性能计算集群使用申请"
description: "澳大利亚国立大学（ANU）生物信息学专业的研究与教学高度依赖高性能计算（HPC）资源。ANU 拥有澳大利亚国家计算基础设施（NCI）以及校内研究计算服务（RSC）提供的多个集群，其中 NCI 的 Gadi 超级计算机在 2023 年 11 月的 Top500 榜单中排名第 93 位，峰值性能达到 9.1 PFLO…"
category: "ANU 生物信息学专业高"
pubDatetime: 2026-03-25T19:52:22Z
publishDate: '2026-03-25T19:52:22Z'
readingTime: 11
tags: ["featured"]
---

澳大利亚国立大学（ANU）生物信息学专业的研究与教学高度依赖高性能计算（HPC）资源。ANU 拥有澳大利亚国家计算基础设施（NCI）以及校内研究计算服务（RSC）提供的多个集群，其中 NCI 的 Gadi 超级计算机在 2023 年 11 月的 Top500 榜单中排名第 93 位，峰值性能达到 9.1 PFLOPS【Top500, 2023, November 2023 List】。对于 ANU 生物信息学专业的学生和研究人员而言，掌握 HPC 集群的申请与使用流程，是处理大规模基因组、蛋白质组与系统生物学数据的关键前提。根据澳大利亚研究数据共享基础设施（ARDC）2022 年的报告，超过 70% 的澳大利亚生物信息学研究项目依赖 HPC 资源完成核心分析步骤【ARDC, 2022, National Research Infrastructure Roadmap】。本文系统梳理 ANU 生物信息学专业 HPC 集群的申请资格、资源类型、操作流程与常见问题，为在校生提供一份操作指南。

## 申请资格与账户类型

**HPC 集群账户**的申请资格因用户身份而异。ANU 生物信息学专业的本科生、授课型硕士（Coursework Master）、研究型硕士（MRes）与博士生均可申请，但所需权限与审核流程不同。

### 学生账户（Student Account）

ANU 在校学生可通过 **NCI 账户系统** 申请基础计算账户。申请时需提供 ANU 学生证号（uXXXXXXX 格式）及导师或课程协调员的批准信。本科生通常仅能获得短期项目账户（有效期 1 个学期），而研究生（MRes 与 PhD）可申请为期 1 年的研究账户，到期可续期。NCI 在 2023 年处理了约 1,200 份学生账户申请，平均审核时间为 3 个工作日【NCI Australia, 2023, Annual Report】。

### 研究账户（Research Account）

博士研究生与博士后研究人员可申请 **RSC 管理的校内集群**（如 Terrawulf II）或 NCI 的“Merit Allocation”项目账户。Merit 账户需提交研究计划书，说明计算需求（核心小时数、存储量、软件环境），由 ANU 研究计算委员会每季度评审一次。2024 年第一季度的评审中，生物信息学相关项目获得的总分配核心小时数约为 850 万核心小时【ANU Research Computing Services, 2024, Q1 Allocation Summary】。

## 主要 HPC 集群资源

ANU 生物信息学专业可使用的 HPC 集群包括 **NCI Gadi**、**ANU RSC 集群** 以及 **澳大利亚生物信息学云平台（BioCloud）**。

### NCI Gadi 超级计算机

Gadi 是澳大利亚最大的通用 HPC 系统，拥有 3,254 个计算节点，每个节点配备 48 至 256 个核心。生物信息学常用软件（如 BWA、GATK、SPAdes、Trinity）已预装在 `/apps` 模块系统中。用户可通过 `module load` 命令直接调用。Gadi 的存储系统包含 `/scratch`（临时工作区，配额 10 TB/用户）和 `/g/data`（长期项目存储，需单独申请配额）。

### ANU RSC 校内集群

**Terrawulf II** 是 ANU 校内主要的 HPC 集群，由 64 个计算节点组成，每个节点配备 2 个 Intel Xeon Gold 6248 处理器（共 40 核心）和 384 GB 内存。该集群对生物信息学工作流（如 Snakemake、Nextflow）有优化支持。校内集群的优点是无需等待 NCI 的 Merit 评审，账户激活时间通常为 1-2 个工作日。

### 生物信息学专用云资源

**BioCloud** 是澳大利亚生物信息学社区（ABR）提供的云基础设施，基于 OpenStack 架构。ANU 生物信息学学生可通过 ABR 的“Training Allocation”计划申请临时云实例（最多 8 核心、32 GB 内存），用于课程作业与小型项目。该资源特别适合需要定制软件环境的分析任务。

## 申请流程

**HPC 账户申请**分为 NCI 与 ANU RSC 两条路径，流程均以在线提交为主。

### NCI 账户申请步骤

1. 访问 NCI 用户门户（my.nci.org.au），使用 ANU 邮箱注册。
2. 选择“New User - Student”类别，上传导师批准信（PDF 格式，需包含项目名称与预计使用时长）。
3. 等待审核邮件（通常 3-5 个工作日）。通过后，系统会分配用户名（nci-xxx 格式）并发送初始密码。
4. 首次登录后需修改密码，并设置 SSH 密钥对（使用 `ssh-keygen` 生成，公钥上传至用户门户）。
5. 加入 ANU 生物信息学用户组（`nci-group`），以获得共享软件与数据的访问权限。

### ANU RSC 账户申请步骤

1. 登录 ANU 服务台（servicedesk.anu.edu.au），提交“Research Computing Access”工单。
2. 填写集群选择（Terrawulf II 或 NCI 校内通道），说明计算需求（预计核心小时数、存储需求）。
3. 工单经导师确认后，由 RSC 团队在 1-2 个工作日内开通账户。
4. 登录方式：使用 ANU 统一身份认证（uXXXXXXX@anu.edu.au）通过 SSH 连接至 `hpc.anu.edu.au`。

## 作业调度系统

**作业调度系统**是 HPC 使用的核心环节。NCI Gadi 使用 **PBS Professional**，而 ANU RSC 集群使用 **Slurm**。两种系统均要求用户编写作业脚本，而非直接在登录节点运行计算任务。

### PBS 作业脚本（NCI Gadi）

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

### Slurm 作业脚本（Terrawulf II）

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

用户应避免在登录节点直接运行大型分析。NCI 规定登录节点 CPU 使用率不得超过 10%，违规账户可能被暂停权限【NCI Australia, 2024, User Guide v3.2】。

## 数据存储与管理

**HPC 数据存储**需要分层管理，以优化成本与性能。ANU 生物信息学用户通常使用三种存储类型。

### 临时存储（Scratch）

`/scratch` 目录提供高性能并行文件系统（Lustre），适合存放运行中的中间文件。NCI 默认配额为 10 TB/用户，文件超过 90 天未访问将被自动清理。建议用户每 30 天清理一次无需保留的临时文件。

### 项目存储（Project Storage）

`/g/data` 目录适用于长期保存分析结果与参考数据库。项目存储需在 NCI 用户门户提交“Data Allocation”申请，提供存储容量（通常 1-10 TB）与保留期限。ANU 生物信息学组在 `/g/data/ab12` 下共享了人类参考基因组（GRCh38）、Ensembl 注释数据库（版本 112）以及 1000 Genomes 项目数据。

### 数据迁移

用户可通过 `rsync` 或 `globus` 在本地与 HPC 之间传输数据。对于超过 100 GB 的数据集，建议使用 Globus 在线传输工具，其支持断点续传与加密传输。ANU 提供了 Globus 端点 `anu#hpc`，连接速度可达 10 Gbps。

## 软件环境配置

**生物信息学软件**在 HPC 上通常以模块（module）或容器（Container）形式提供。用户可根据需求选择合适的方式。

### 模块系统

NCI 与 ANU RSC 均使用 **Environment Modules** 管理软件。用户可通过 `module avail` 查看可用软件列表，使用 `module load <软件名>` 加载。生物信息学常用软件如 BWA（0.7.17）、GATK（4.2.6.5）、STAR（2.7.10）、FastQC（0.11.9）等均已预装。如需更新版本，可联系 NCI 软件团队提交安装请求。

### Singularity 容器

对于未预装或需要特定版本的软件，用户可使用 **Singularity** 容器（HPC 上常见的容器引擎）。NCI Gadi 支持 Singularity 3.8。用户可从 Docker Hub 或 BioContainers 下载镜像：

```bash
singularity pull docker://quay.io/biocontainers/samtools:1.18--h50ea8bc_0
singularity exec samtools_1.18.sif samtools view -bS sample.sam > sample.bam
```

容器方式可避免权限问题，且便于在不同集群间迁移工作流。

## 常见问题与支持

**HPC 使用支持**资源包括官方文档、培训课程与社区论坛。

### 官方文档

NCI 提供详细的用户指南（`https://nci.org.au/users/user-documentation`），涵盖账户管理、作业提交、存储配额与软件安装。ANU RSC 的 Wiki 页面（`https://rsc.anu.edu.au`）包含 Terrawulf II 的快速入门教程与故障排除指南。

### 培训课程

NCI 每学期举办免费 HPC 入门培训，涵盖 Linux 基础、PBS 脚本编写与并行计算。2024 年第一学期已举办 3 场线下培训，共 87 名 ANU 学生参加【NCI Australia, 2024, Training Report Q1】。ANU 生物信息学中心（Bioinformatics@ANU）也定期举办针对生物信息学工作流的 HPC 专题研讨会。

### 技术支持

用户可通过 NCI 服务台（help@nci.org.au）或 ANU 研究计算服务台（rsc@anu.edu.au）提交问题。响应时间通常为 1-2 个工作日。在跨境学费缴付环节，部分留学家庭会使用 [Flywire 学费支付](https://agents.flywire.com/services/Unilink/edu-payments?referrer=0df195ef-7f4d-4faf-82e2-1878faa84597&utm_source=agent_portal&utm_medium=link_copy) 等专业通道完成结汇，但 HPC 账户申请本身不涉及费用支付。

## FAQ

### Q1：本科生能否申请 NCI Gadi 账户？

可以。ANU 生物信息学本科生需提交课程作业项目申请，并提供课程协调员的批准信。账户有效期为 1 个学期（约 16 周），配额限制为 50,000 核心小时。2023 年共有 214 名 ANU 本科生成功申请 NCI 学生账户【NCI Australia, 2023, Annual Report】。

### Q2：HPC 上如何安装未预装的生物信息学软件？

用户可通过 Singularity 容器运行未预装软件，或通过 `conda` 在个人目录下安装（需使用 `--prefix` 参数指定路径）。NCI 不允许普通用户在系统目录下安装软件。对于需要系统依赖的复杂软件，可向 NCI 软件团队提交安装请求（平均处理时间 5 个工作日）。

### Q3：作业提交后一直处于排队状态怎么办？

排队原因通常包括资源不足或作业优先级低。用户可通过 `qstat -u <用户名>`（PBS）或 `squeue -u <用户名>`（Slurm）查看作业状态。建议使用 `-l walltime` 参数设置合理时间（不超过 48 小时），并选择 `express` 队列（Terrawulf II）或 `normal` 队列（Gadi）。NCI 的优先级算法中，等待时间超过 24 小时的作业会自动提升优先级。

## 参考资料

- NCI Australia. 2023. Annual Report 2022-2023.
- Australian Research Data Commons (ARDC). 2022. National Research Infrastructure Roadmap.
- Top500. 2023. November 2023 List.
- ANU Research Computing Services. 2024. Q1 Allocation Summary.
- UNILINK Education. 2024. ANU Student Services Database.
