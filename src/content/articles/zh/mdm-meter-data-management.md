---
title: '什么是 MDM（电表数据管理系统）？'
metaDescription: '什么是 MDM（Meter Data Management，电表数据管理系统），它如何收集、校验并转发电表数据，Revenue Meter 与普通电表有何不同，以及 MDM 为何对太阳能开发商与电力公司至关重要。'
targetKeywords:
  - 'MDM 电表数据管理系统'
  - 'Revenue Meter 计费级电表'
  - 'AMR 与 AMI 的区别'
segment: 'utility'
faq:
  - question: '什么是 MDM？'
    answer: >-
      MDM（Meter Data Management，电表数据管理系统）是将大量电表的测量数据
      集中收集、校验、存储并转发的系统，使后续用于计费或报告的数据
      均已通过校验并可追溯审计。
  - question: 'MDM 与 AMR/AMI 有何不同？'
    answer: >-
      AMR（Automatic Meter Reading）是单向自动抄表，AMI（Advanced Metering
      Infrastructure）则是范围更广的双向通信基础设施。在 AMI 架构中，
      MDM 是位于抄表系统与计费、报告等下游系统之间的数据层。
  - question: 'Revenue Meter 与普通电表有何不同？'
    answer: >-
      Revenue Meter（计费级电表）是用于购售电与双方结算的高精度电表，
      例如 0.2S 级 TOU 电表，其读数即为计费依据，因此须按标准校准；
      而普通监测电表仅用于观察趋势。
  - question: 'MDM 有哪些用途？'
    answer: >-
      MDM 负责校验、修正与估算电表数据（VEE），保留审计追溯记录，
      并将来自多个来源的数据对账整合为统一格式，再转发给计费、报告
      或实际交付电量的核验环节。
relatedSolution: 'amr'
relatedAnchor: 'meter-data-management'
publishedDate: 2026-08-21
order: 9
status: 'published'
---

## 什么是 MDM

**MDM（Meter Data Management，电表数据管理系统）** 是将大量电表的测量数据集中收集、校验、存储并转发的系统，使后续用于计费、对账或报告的数据均已通过校验并可追溯审计。

在电力公司的智能电表（AMI）架构中，MDM 是位于抄表系统（如 AMR/Head-End System）与计费、报告、分析等下游系统之间的数据层，负责将原始数据转化为可信数据。

## MDM 有哪些功能

MDM 的核心职责是对电表数据执行 **校验、修正与估算（Validation, Editing and Estimation，VEE）** 流程。原始数据进入系统后，系统会检查是否存在缺失或异常时段，再按既定规则进行修正或估算，同时保留每一项数字修改方式的审计追溯记录，以便审核人员回溯。

此外，MDM 还会将来自多个品牌、多个来源、多个时段的数据整合为统一格式。当项目同时拥有 Revenue Meter 与来自 AMR 系统的数据需要相互比对时，这一点尤为关键。

## Revenue Meter 与普通电表有何不同

**Revenue Meter（计费级电表）** 是用于购售电与双方结算的高精度电表，例如安装在并网点处的 0.2S 级 TOU 电表。其读数即为计费依据，因此必须精确并按规定校准。

与仅用于观察趋势或内部检查的普通监测电表不同，Revenue Meter 必须经得起法律与合同的检验。MDM 将 Revenue Meter 数据与 AMR 数据进行对账，正是能够在偏差演变为账单争议之前发现问题的关键环节。

## MDM 为何对太阳能开发商与电力公司至关重要

随着站点与电表数量的增长，人工处理数据已难以为继。MDM 为太阳能项目开发商与电力公司提供唯一且经过校验的数据来源，用于支撑计费系统、报告以及实际交付电量的核验——既能减少人工录入错误，也能避免数据无法追溯的风险。
