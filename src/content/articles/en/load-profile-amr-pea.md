---
title: 'What Is PEA AMR Load Profile Data, and How Do You Use It?'
metaDescription: 'PEA AMR Load Profile is historical, interval-based electricity usage data from PEA''s AMR system. How to pull it for solar system design and PPA billing setup, plus the data-verification steps to run before putting it to real use.'
targetKeywords:
  - 'PEA AMR Load Profile'
  - 'accessing the PEA AMR system'
segment: 'solar-renewable'
faq:
  - question: 'What is PEA AMR Load Profile?'
    answer: >-
      PEA AMR Load Profile is historical electricity usage data recorded at
      intervals (e.g. every 15 minutes) by smart meters connected to the
      Provincial Electricity Authority's (PEA) AMR (Automatic Meter Reading)
      system, showing actual power and energy used in each interval. Unlike
      the single total on a bill, it shows usage patterns throughout the day
      in much finer detail.
  - question: 'How do you pull Load Profile data from PEA?'
    answer: >-
      Users whose meters connect to the AMR system can request access to
      PEA's AMR portal (amr.pea.co.th) through the local PEA office, then
      select the meter and time range needed and export the data as a file
      for further analysis. The exact menu steps and file format may change
      over time — confirm directly with the portal or the PEA office
      responsible for that meter.
  - question: 'What can Load Profile data be used for?'
    answer: >-
      It's used to assess actual usage patterns for sizing a solar system to
      match daytime load, as the reference for verifying units billed under
      a PPA, and as a baseline to compare against expected values to catch
      anomalies — such as gaps in the data — before they turn into billing
      disputes.
relatedSolution: 'amr'
relatedAnchor: 'amr-integration'
publishedDate: 2026-08-19
order: 6
status: 'published'
---

## What Is PEA AMR Load Profile

**Load Profile (interval-based historical electricity usage data)** is usage data recorded in short intervals throughout the day, showing both power (kW) and energy (kWh) values for each interval. Unlike the single monthly total on a typical electricity bill, which only tells you "how much" was used, Load Profile data tells you "when" it was used.

For users whose meters connect to the **Provincial Electricity Authority's (PEA) AMR (Automatic Meter Reading) system**, this dataset is the most detailed and reliable source of usage-pattern data already available in the system, with no need to install additional metering equipment. PEA's AMR system records data by tariff period (on-peak/off-peak) and by measured value — kWh, kVarh, kW, kVar — giving a clear view of the electricity usage behavior of that site over time.

## How to Access Data from PEA's AMR System

In general, a user whose meter connects to AMR must request access to PEA's AMR portal through the local PEA office responsible for that meter. Once an account is issued, log in to view an overview report, select the meter, time range, and value type needed, then export the data as a file for further analysis.

The exact menu steps, exportable file formats, and available interval granularity (e.g. hourly or every 15 minutes) may vary by account setup and are periodically updated by PEA. **[pending — verify against https://www.amr.pea.co.th/]** Anyone needing the latest procedure should check the portal directly or ask the PEA office responsible for that meter.

## What to Do After Getting the Data

This is the step most articles in the market don't cover — pulling the Load Profile file is only the starting point, not the end of the job. The raw data must be verified and used correctly before it becomes a number you can act on or bill against.

**Verify data completeness before use.** An exported file may have gaps (data gaps) from meter communication issues, or values that are disproportionately abnormal relative to that site's normal usage pattern. If flawed data is used downstream without checking first, the error propagates through every subsequent step.

**Use it to size systems.** For a Solar Developer, verified Load Profile data is the key input for assessing daytime load, to size a solar system (kWp) that matches the project's actual usage behavior — not an estimate from a monthly average, which can't reveal the hourly pattern.

**Use it as the basis for PPA billing.** For projects with a power purchase agreement (PPA), the electricity units used to calculate each billing cycle's charge are typically referenced against Load Profile data from the same period. Reconciliation between data pulled from AMR and the numbers used to issue a bill must always match, since even a small discrepancy in one interval can lead to a dispute between contracting parties later.

Catching data anomalies at this stage — whether missing intervals, disproportionate spikes, or mismatches between billing cycles — is what prevents small problems in a data file from becoming larger billing disputes down the line.

Teams doing this work regularly often find that pulling, verifying, and reconciling files by hand in a spreadsheet every billing cycle is time-consuming and carries a risk of accumulating errors. Connecting to and verifying AMR data automatically is an approach that meaningfully reduces this workload.
