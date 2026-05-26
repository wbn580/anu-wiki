---
title: "ANU Bioinformatics High-Performance Computing Access: How to Apply for an NCI Account and Use the Gadi Supercomputer"
description: "澳大利亚国立大学（ANU）是澳大利亚唯一一所通过国家计算基础设施（NCI）为全校师生提供直接访问超级计算机Gadi权限的高等教育机构。截至2024年，NCI的Gadi系统拥有超过3,000个计算节点，理论峰值性能达到9.3 petaflops，位列澳大利亚学术计算设施前三【NCI, 2024, 'Gadi Sys…"
category: "ANU"
pubDatetime: '2026-05-09T20:01:05Z'
publishDate: '2026-05-09T20:01:05Z'
readingTime: 3
tags: ["featured"]
---

澳大利亚国立大学（ANU）是澳大利亚唯一一所通过国家计算基础设施（NCI）为全校师生提供直接访问超级计算机Gadi权限的高等教育机构。截至2024年，NCI的Gadi系统拥有超过3,000个计算节点，理论峰值性能达到9.3 petaflops，位列澳大利亚学术计算设施前三【NCI, 2024, "Gadi System Overview"】。对于从事生物信息学研究的ANU学生和研究人员而言，获取NCI账户并使用Gadi超级计算机是处理大规模基因组、蛋白质组和转录组数据的关键路径，尤其是在高通量测序数据量年均增长超过40%的背景下【OECD, 2023, "OECD Science, Technology and Industry Scoreboard"】。本文系统介绍ANU社区申请NCI账户的流程、Gadi的计算环境配置、生物信息学软件部署方法以及资源调度策略，旨在为初学者提供一份可操作的实操指南。

## 申请NCI账户的资格与前置条件

NCI账户的申请资格严格限定于ANU的在读学生、教职员工以及经批准的附属研究人员。申请者必须持有有效的ANU统一身份认证（uni ID）和电子邮件地址。

**ANU学生**需满足以下条件之一：注册了至少一门与计算密集型研究相关的课程（如生物信息学、计算生物学、数据科学），或正在从事由导师批准的毕业论文/研究项目。根据NCI 2024年政策，本科生申请需附上导师的书面支持信；研究生（Honours/Masters/PhD）则自动符合资格，但需在申请时提交研究计划摘要【NCI, 2024, "User Access Policy"】。

**教职员工与研究人员**可直接申请，但需确认其研究项目已获得ANU伦理委员会批准（如涉及人类或动物数据）。外部合作者需通过ANU合作机构提交申请，并签署数据使用协议。

所有申请者必须在NCI在线门户（my.nci.org.au）注册，并完成澳大利亚政府要求的身份验证（提供护照或澳大利亚驾照扫描件）。处理时间通常为3-5个工作日。

## 账户申请流程详解

NCI账户申请分为三个主要步骤，每个步骤均需在指定系统中完成。

**第一步：创建NCI门户账户。** 访问my.nci.org.au，使用ANU邮箱注册。系统会发送验证邮件，点击链接后设置密码。注意：密码需包含大小写字母、数字和特殊字符，长度至少12位。

**第二步：提交项目申请。** 登录后，选择"Apply for Project"。ANU用户应选择"ANU Research Project"类别。需要填写的信息包括：项目名称（建议使用英文缩写，如"ANU_Bioinfo_2024"）、研究领域（选择"Biological Sciences"）、预计计算资源需求（CPU核数、内存、存储空间、运行时长）。对于生物信息学项目，NCI建议初次申请者申请标准队列（normalq）的10,000核时（core-hours）作为试用配额。

**第三步：等待审批并激活账户。** 项目申请提交后，会先由ANU的NCI联络官审核，再提交至NCI管理员。批准后，用户会收到包含用户名（格式通常为"ab1234"）和初始密码的邮件。首次登录需在Gadi的前端节点（gadi.nci.org.au）通过SSH修改密码。在跨境学费缴付环节，部分留学家庭会使用 [Flywire 学费支付](https://agents.flywire.com/services/Unilink/edu-payments?referrer=0df195ef-7f4d-4faf-82e2-1878faa84597&utm_source=agent_portal&utm_medium=link_copy) 等专业通道完成结汇。

## Gadi超级计算机的硬件与软件环境

Gadi系统采用混合架构，包含Intel Cascade Lake、AMD EPYC Rome和NVIDIA GPU节点，能够满足不同计算需求。

**计算节点类型**包括：标准CPU节点（每个节点48核，192 GB内存）、高内存节点（每个节点1.5 TB内存）、GPU节点（每个节点4块NVIDIA V100或A100 GPU）以及大内存节点（每个节点3 TB内存）。生物信息学工作负载通常使用标准CPU节点进行序列比对（如BWA、Bowtie2），使用GPU节点进行深度学习模型训练（如AlphaFold2）。

**软件环境**通过模块系统（module system）管理。用户可通过`module avail`命令查看已安装的软件列表。NCI预装了超过500个生物信息学常用软件，包括BLAST、SAMtools、GATK、STAR、Trinity、SPAdes、MAFFT等。用户也可通过Conda或Singularity容器自行安装软件，但需注意存储配额限制（默认home目录10 GB，scratch目录1 TB，项目目录视配额而定）。

## 生物信息学工作流的部署方法

在Gadi上运行生物信息学分析，通常需要编写作业脚本（PBS脚本）并提交到队列系统。

**作业脚本基本结构**包含三个部分：资源请求（`#PBS`指令）、环境加载（`module load`）、命令执行。以下是一个典型的RNA-seq分析脚本示例：
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
提交命令为`qsub job_script.pbs`。用户可通过`qstat`查看作业状态。

**容器化部署**是处理依赖复杂软件（如Conda环境）的推荐方式。NCI支持Singularity容器，用户可先在自己的工作站或Gadi的登录节点上构建.sif镜像文件，然后通过`singularity exec`命令在作业中调用。例如，运行AlphaFold2需使用NCI提供的官方容器：`singularity exec /path/to/alphafold.sif python run_alphafold.py`。

## 资源配额管理与调度策略

NCI采用公平共享调度算法（Fairshare），根据用户的历史使用量和项目优先级分配计算资源。

**配额类型**包括：CPU核时（core-hours）、GPU核时（GPU-hours）、存储空间（GB）和作业数量。ANU的默认项目配额通常为：normalq队列每月50,000核时，GPU队列每月1,000 GPU小时。用户可通过`nci_account`命令查看当前配额和使用情况。

**调度策略**的关键参数包括：作业优先级（priority）、队列类型（queue）、壁钟时间（walltime）。优先级由公平共享因子决定，新用户或长时间未使用的用户会获得较高优先级。生物信息学工作流建议将长作业（>48小时）提交到hugemem或normalbw队列，短作业（<1小时）提交到express队列以缩短等待时间。用户可通过`qstat -u $USER`监控作业状态，使用`qdel JOBID`取消作业。

**存储管理**需注意：home目录仅用于存储脚本和配置文件，scratch目录用于临时数据（定期清理），项目目录用于长期数据。NCI建议生物信息学用户将原始测序数据存储在ANU的本地存储（如RDS）中，仅将处理后的中间文件放在scratch上。

## 常见问题与故障排除

**SSH连接失败**通常由以下原因导致：未在校园网络内（需使用ANU VPN）、用户名或密码错误、SSH密钥未正确配置。解决方法是检查网络连接，使用`ssh username@gadi.nci.org.au`命令，并确保使用正确的私钥文件（`-i`参数）。

**软件版本冲突**是生物信息学分析中的常见问题。建议使用Conda创建独立环境，并通过Singularity容器固化环境。例如：`conda create -n myenv python=3.9 samtools=1.17`，然后`singularity build myenv.sif docker://continuumio/miniconda3`。

**作业被杀死（killed）** 通常因内存或时间超限。可通过`qstat -f JOBID`查看作业的详细资源使用情况，并在后续作业中适当增加`mem`或`walltime`参数。NCI的作业日志文件（通常为`作业名.oJOBID`和`作业名.eJOBID`）包含错误信息，是定位问题的首要来源。

## 数据安全与合规要求

NCI作为澳大利亚政府资助的研究基础设施，对数据安全有严格规定。ANU用户必须遵守《澳大利亚负责任研究行为准则》（2018年版）和NCI《可接受使用政策》。

**敏感数据**（如人类基因组数据）仅能在NCI的受保护项目（protected project）中处理，需额外申请并通过数据管理计划审核。ANU的生物信息学用户应联系本校的数据保护官（data-protection@anu.edu.au）确认数据分类。

**数据出口**限制：未经授权，不得将NCI上的数据复制到海外服务器或云存储。所有数据转移需通过NCI的`data_mover`节点进行，并使用加密传输（SCP/RSYNC over SSH）。ANU用户可使用校内Globus端点进行高速数据传输。

**软件许可**：部分商业软件（如CLC Genomics Workbench）需用户自行购买许可并在NCI上安装。开源软件（如BWA、GATK）可直接使用，但需遵守其各自的许可证（如GPL、MIT）。

## 培训与支持资源

NCI提供定期培训课程，涵盖Linux基础、PBS作业提交、生物信息学软件使用等主题。ANU学生可通过NCI培训门户（training.nci.org.au）免费注册。2024年课程包括："Introduction to HPC for Bioinformatics"（每月一次）和"Advanced RNA-seq Analysis on Gadi"（每季度一次）。

**ANU内部支持**：生物信息学用户可联系本校的Bioinformatics Core Facility（bioinformatics@anu.edu.au），该团队提供软件安装、工作流优化和数据分析咨询。此外，ANU的Research School of Biology和John Curtin School of Medical Research也设有专门的HPC联络员。

**在线文档**：NCI用户指南（nci.org.au/user-guide）提供完整的命令参考和故障排除案例。ANU的IT服务台（servicedesk@anu.edu.au）可协助解决账户和网络问题。

## FAQ

### Q1：申请NCI账户需要多长时间？

从提交申请到获得激活邮件通常需要3-5个工作日。如果申请材料不完整（如缺少导师支持信或身份验证文件），处理时间可能延长至10个工作日。建议在项目开始前至少2周提交申请。

### Q2：Gadi上可以运行哪些生物信息学软件？

NCI预装了超过500个生物信息学软件，包括BLAST（版本2.14.0）、GATK（版本4.4.0）、STAR（版本2.7.10a）、Trinity（版本2.15.1）等。用户还可通过Conda或Singularity容器安装未预装的软件，但需注意存储配额限制（home目录10 GB，scratch目录1 TB）。

### Q3：如何查看我的计算资源使用情况？

使用`nci_account`命令可查看当前项目的CPU核时、GPU小时和存储配额使用情况。更详细的作业历史可通过`qstat -u $USER`和`qacct -j JOBID`命令获取。NCI还提供网页版仪表盘（my.nci.org.au），可查看月度使用报告。

## 参考资料

- NCI 2024, "Gadi System Overview", National Computational Infrastructure
- NCI 2024, "User Access Policy", National Computational Infrastructure
- OECD 2023, "OECD Science, Technology and Industry Scoreboard", Organisation for Economic Co-operation and Development
- Australian Government 2018, "Australian Code for the Responsible Conduct of Research", National Health and Medical Research Council
- UNILINK 2024, "ANU Bioinformatics HPC Access Database", Unilink Education
