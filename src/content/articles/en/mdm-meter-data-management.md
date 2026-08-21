---
title: 'What Is MDM (Meter Data Management)?'
metaDescription: 'What MDM (Meter Data Management) is, how it collects, validates and forwards meter data, how a Revenue Meter differs from an ordinary meter, and why MDM matters to solar developers and utilities.'
targetKeywords:
  - 'MDM meter data management'
  - 'Revenue Meter revenue grade'
  - 'AMR vs AMI'
segment: 'utility'
faq:
  - question: 'What is MDM?'
    answer: >-
      MDM (Meter Data Management) is a system that collects, validates, stores
      and forwards measurement data from many electricity meters in one place,
      so that data used downstream — for billing or reporting — has been
      validated and can be audited.
  - question: 'How does MDM differ from AMR/AMI?'
    answer: >-
      AMR (Automatic Meter Reading) is one-way automatic meter reading, while
      AMI (Advanced Metering Infrastructure) is the broader two-way
      infrastructure. Within an AMI architecture, MDM is the data layer that
      sits between the meter-reading systems and downstream systems such as
      billing and reporting.
  - question: 'How does a Revenue Meter differ from an ordinary meter?'
    answer: >-
      A Revenue Meter is a high-accuracy meter used for electricity trading and
      settlement between parties — for example a Class 0.2S TOU meter. Its
      readings are the basis of billing, so it must be calibrated to standard,
      unlike a monitoring meter used only to observe trends.
  - question: 'What is MDM used for?'
    answer: >-
      MDM validates, edits and estimates meter data (VEE), keeps an audit trail,
      and reconciles data from multiple sources into a common format before
      forwarding it to billing, reporting, or verification of actual delivered
      energy.
relatedSolution: 'amr'
relatedAnchor: 'meter-data-management'
publishedDate: 2026-08-21
order: 9
status: 'published'
---

## What Is MDM

**MDM (Meter Data Management)** is a system that collects, validates, stores and forwards measurement data from many electricity meters in one place, so that data used downstream — whether for billing, reconciliation or reporting — has been validated and can be audited.

In a utility's smart-metering (AMI) architecture, MDM is the data layer that sits between the meter-reading systems (such as AMR/Head-End System) and other systems such as billing, reporting and analytics, turning raw data into trustworthy data.

## What MDM Does

MDM's core job is the **Validation, Editing and Estimation (VEE)** process for meter data. As raw data arrives, the system checks for gaps or anomalies, then edits or estimates values according to defined rules — while keeping an audit trail of how each number was changed, so reviewers can trace it back.

MDM also consolidates data from many meter makes, sources and time periods into a common format, which is essential when a project has both Revenue Meters and AMR-sourced data that must be compared.

## How a Revenue Meter Differs from an Ordinary Meter

A **Revenue Meter** is a high-accuracy meter used for electricity trading and settlement between contracting parties — for example a Class 0.2S TOU meter installed at the point of interconnection. Its readings are the basis of billing, so it must be accurate and calibrated to standard.

Unlike an ordinary monitoring meter used only for trends or internal checks, a Revenue Meter must be defensible under law and contract. MDM's reconciliation of Revenue Meter data against AMR data is therefore an important step that catches discrepancies before they become billing disputes.

## Why MDM Matters to Solar Developers and Utilities

As the number of sites and meters grows, manual data handling is no longer enough. MDM gives solar project developers and utilities a single, validated source of data to feed billing systems, reporting and verification of actual delivered energy — reducing both manual-entry errors and the risk of unauditable data.
