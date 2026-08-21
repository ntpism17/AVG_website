---
title: 'How Is Private PPA Billed? The Real Billing Calculation'
metaDescription: 'How is a Private PPA billed? Explaining the actual billing mechanism, from metering electricity units and applying the contract rate, to reconciliation — for solar developers and industrial power buyers.'
targetKeywords:
  - 'how is Private PPA billed'
  - 'what is Private PPA'
  - 'sample PPA electricity sale contract'
segment: 'solar-renewable'
faq:
  - question: 'How is Private PPA billed?'
    answer: >-
      In principle, a Private PPA bill is calculated from the electricity
      units (kWh) the producer actually delivers to the buyer, as measured
      by the meter, multiplied by the contract rate — which may be a flat
      rate, a tiered rate, or carry an escalator clause tied to a time
      period or reference index such as FT or CPI — before being
      reconciled against the buyer's usage data for the same billing
      cycle.
  - question: 'What is Private PPA?'
    answer: >-
      Private PPA (a direct power purchase agreement with a private buyer)
      is a contract where a third party invests in and owns a power
      generation system (usually solar) on or near the buyer's site, then
      sells the electricity produced to the buyer at a rate lower than the
      utility's rate. The buyer doesn't need to invest in equipment
      themselves — unlike a Turnkey arrangement, where the buyer invests in
      and owns the system.
  - question: 'How does Private PPA differ from Corporate PPA?'
    answer: >-
      Mechanically, they are the same type of contract — "Private PPA" is
      the term the Thai market uses for a power purchase agreement with a
      private-sector buyer, while "Corporate PPA" is the English-language
      term used in academic or international contexts for the same
      concept.
  - question: 'Why does billing a PPA in Excel cause problems?'
    answer: >-
      Because a PPA bill must reference precisely measured electricity
      units, not estimates. As the number of sites or billing cycles
      grows, manually keying meter data into Excel carries a risk of
      errors, missed data, and no auditable trail — making the bill easy
      to dispute when a disagreement arises.
relatedSolution: 'billing'
relatedAnchor: 'ppa-billing'
publishedDate: 2026-08-19
order: 4
status: 'published'
---

## What Is Private PPA (In Brief)

Private PPA (a direct power purchase agreement with a private buyer) is a contract structure where a third party — typically a solar developer or energy investor — funds, installs, and owns a power generation system on or near the buyer's site, then sells the electricity produced to the buyer at a rate lower than the utility's rate. The buyer therefore doesn't carry the upfront investment or maintain the system themselves, but commits to a long-term contract, typically 15–20 years in practice.

What sets Private PPA apart from a Turnkey arrangement (where the buyer invests in and owns the system from the start) is that the financial relationship shifts from "invest and save the full amount" to "no investment, but pay for electricity actually used at an agreed rate" — and this is exactly why the most important question in a Private PPA isn't "does it save money," but **"what is the monthly bill actually calculated from."**

> Note: in some contexts (particularly academic or international documents), the same concept may be called a "Corporate PPA" — but in the Thai market and in common searches, the term used is "Private PPA."

## The Real Billing Mechanism Behind Private PPA

At the heart of a Private PPA bill is a simple equation — but one where every component must be precise:

**Electricity actually delivered (kWh) × the contract electricity rate = the amount billed for that cycle**

In practice, though, each component carries detail that makes the calculation more complex than a single line.

### What Must Be Measured

The starting number for every bill is the electricity units the system actually produced and delivered to the buyer during that billing cycle — not an estimate or the panels' rated capacity. This figure must come from an energy meter installed at the point of delivery, and should be data both parties — seller and buyer — can access and verify identically, since this number is the foundation for every calculation that follows. If this data point is inaccurate or unsupported by evidence, the entire bill loses credibility by default.

### How the Electricity Rate Is Applied

The rate specified in a Private PPA contract may take one of the following forms (or a combination), depending on the terms each contract sets — this article explains the mechanism in general, not the specific rate or figures of any particular contract:

- **Flat rate:** a single rate applied to every unit delivered across the billing cycle — the simplest to calculate.
- **Tiered rate:** the rate varies by usage volume tier, or by time of day (similar in structure to a utility's TOU tariff).
- **Escalator clause:** the rate adjusts over time (e.g. rising annually by an agreed percentage), or is tied to an external reference index such as FT or CPI.

Some contracts also carry a **Minimum Offtake** clause — a minimum usage volume the buyer must commit to purchasing. If usage falls below that threshold, a compensation charge proportional to the unused units may apply — another variable that must be calculated separately from the normal electricity charge.

### Reconciliation and Dispute Management

Once the units and rate for a billing cycle are determined, the reconciliation step checks whether the meter-measured figures match what both parties expected or recorded, before the actual invoice is issued. If there's a discrepancy — whether from the meter, a misaligned reading period, or a Minimum Offtake condition — both parties need raw, auditable meter data to confirm the figures together, without having to argue from memory or estimates.

This is where a 15–20 year Private PPA contract accumulates risk: the longer the contract, the more billing cycles, and the more it needs a system that consistently captures and verifies data — not just at contract signing.

## Why Billing in Excel Breaks Down at Scale

In the early stage with one or a few sites, reading meters and keying them into Excel to calculate bills may be workable enough. But as the number of sites, billing cycles, or contract conditions (tiered rates, escalators, Minimum Offtake) grows, this approach starts showing clear weaknesses:

- **Risk from manual data entry** — thousands to tens of thousands of electricity units per site per month create easy opportunities for typos, misaligned billing periods, or formula errors.
- **No auditable trail** — when a buyer disputes a figure, an Excel file edited and overwritten many times over can't confirm when the source numbers actually came from the meter.
- **Doesn't scale** — contracts with multiple layered conditions (tiered rate + escalator + Minimum Offtake) across many sites simultaneously make Excel formulas too complex to manage accurately by hand over the long run.

## Accurate Meter Data Is the Foundation of a PPA Bill That Holds Up

Ultimately, however complex a contract's rate structure, a credible Private PPA bill must stand on actually measured electricity data, not an estimate, and must be data both seller and buyer can access and verify identically at all times — this is the foundation that lets every bill be explained and confirmed the moment it's questioned.

An AMR system that automatically reads meter values, paired with a Billing platform that calculates each contract's terms automatically, is exactly the answer to PPA billing problems that Advanced Grid designed to solve.
