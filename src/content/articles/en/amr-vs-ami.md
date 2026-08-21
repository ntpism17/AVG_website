---
title: 'What Is AMR? How Is It Different from AMI?'
metaDescription: >-
  What is AMR (Automatic Meter Reading) and how does it differ from AMI
  (Advanced Metering Infrastructure)? An explanation of both metering
  systems as actually used by PEA, and why the difference matters for solar
  and industrial project teams pulling load data.
targetKeywords:
  - 'what is AMR meter'
  - 'AMR vs AMI difference'
segment: 'solar-renewable'
faq:
  - question: 'What is AMR?'
    answer: >-
      AMR (Automatic Meter Reading) is a system that automatically retrieves
      electricity usage data from meters over a communication channel,
      instead of sending staff to read each meter by hand. It is one-way
      reading only — pulling historical usage data into a central system —
      with no channel to send commands back to control the meter. The
      Provincial Electricity Authority (PEA) itself operates a portal by
      exactly this name at amr.pea.co.th for large electricity users.
  - question: 'How is AMR different from AMI?'
    answer: >-
      AMR is a one-way automatic reading system, used mainly to pull usage
      data. AMI (Advanced Metering Infrastructure) is a broader
      infrastructure that communicates two-way, letting the utility send
      commands back to the meter — such as remote connect/disconnect. As
      PEA's own AMI page states, the system comprises a Head-End System,
      Meter Data Management, and a Network Management System — architecture
      traditional AMR does not have.
  - question: 'What can AMR be used for?'
    answer: >-
      For solar projects or industrial facilities, AMR can automatically
      pull load profile data from large meters for analysis, instead of
      manual meter reading. This gives consistent, auditable data that
      feeds into capacity design, tariff calculation, or verifying the
      actual electricity delivered under a sales contract.
relatedSolution: 'amr'
relatedAnchor: 'amr-integration'
publishedDate: 2026-08-19
order: 5
status: 'published'
---

## What Is AMR

AMR (Automatic Meter Reading) is a system that automatically retrieves electricity usage data from meters over a communication channel, instead of sending staff to read each meter by hand on every billing cycle. At its core, AMR is one-way "reading" — pulling historical usage data from meters into a central system for viewing or analysis only. It has no channel to send commands back to control how a meter operates.

This isn't marketing terminology — it's the actual name the Provincial Electricity Authority (PEA) itself uses for its own automatic-reading mechanism. PEA operates a portal called "AMR: Automatic Meter Reading" at amr.pea.co.th for electricity users who qualify for this type of metering.

## What Is AMI

AMI (Advanced Metering Infrastructure) is a broader, newer term than AMR — rather than just a reading mechanism, AMI is an entire smart-metering infrastructure that communicates two-way, letting the utility not only read values but also send commands back to the meter — such as remote connect/disconnect — and in theory supports dynamic pricing based on actual time-of-use, a capability traditional AMR reading cannot provide.

PEA's own AMI page (pea.co.th) describes AMI as a system that "connects electricity users to the grid through the installation of smart meters" and provides real-time usage data, with an architecture made up of three main components: a Head-End System (HES) for managing meters, pulling data, updating firmware, and issuing remote connect/disconnect commands; Meter Data Management (MDM) for verifying and processing data; and a Network Management System (NMS) for managing the network and system security. PEA states it has launched a pilot Smart Meter project in Pattaya, Chonburi Province, under its Smart Grid development plan to support becoming a Smart City — reflecting that AMI in the Thai context is still at the pilot-project stage, not yet a nationwide standard system. [pending — verify the scope and actual rollout schedule against https://www.pea.co.th/about-pea/sgi/data-analytics/ami]

## How AMR and AMI Differ

A summary of the key differences between the two systems:

- **Communication direction** — AMR communicates one-way (reads values in only); AMI communicates two-way (reads values and can send commands back).
- **System scope** — AMR is a point reading mechanism; AMI is an entire smart-metering infrastructure, with AMR as a sub-function within it.
- **Control capability** — AMR can only view data; AMI opens the door to remote connect/disconnect or adjusting meter operation centrally.
- **Real-world status in Thailand** — AMR is already live and in use for large electricity users through PEA's portal, while AMI remains at the pilot-project stage as published by PEA.

## Why This Difference Matters for Solar and Industrial Teams

For solar project developers, EPC teams, or engineers who need to work with the utility, the practical distinction is between "usable today" and "long-term plan" — AMR is what's actually usable right now for pulling load profile data from large meters, whether that's historical data for capacity design, tariff calculation, or verifying the actual electricity delivered under a sales contract. AMI, meanwhile, is the utility's long-term grid development direction, one that most projects today aren't yet directly under.

In practice, this means a project that needs accurate, consistent usage data for real use today should plan around the AMR infrastructure that already exists, rather than waiting on AMI infrastructure that's still being rolled out.

Automatically pulling AMR data instead of manual meter reading is exactly what Advanced Grid's AMR platform does today for solar and industrial projects.
