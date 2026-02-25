# Monitoring Production

**[Home](../index.md) > [Daily Operations](index.md) > Monitoring Production**

<hr style="border: none; height: 3px; background-color: #747474; margin: 2em 0;">

## Overview

During production, operators should actively monitor MixMaster to ensure smooth flow across all sub-systems, catch problems early, and maintain production efficiency.

<hr style="border: none; height: 3px; background-color: #747474; margin: 2em 0;">

## Primary Monitoring Points

### Home Page

The [Home Page](../home-page/index.md) provides the highest-level view of the current state of production.

1. **[Production Summary](../home-page/production-summary.md)**
    - Track completed vs. total truckloads, pallets, and cases
    - Monitor the contribution of each sub-system (InnoPick, Manual)

2. **[Sub-System Status](../home-page/sub-system-status.md)**
    - All InnoPick levels should show **Automatic** (green) during production
    - **Idle** indicates a level is not actively processing
    - **Faulted** requires immediate attention

3. **[JIT-OOS Visuals](../home-page/jit-oos.md)**
    - Watch for Just-In-Time Out-Of-Stock events, which pause production while the system recalculates
    - Monitor priority alerts in the top banner

<hr style="border: none; height: 2px; background-color: #a8a8a8; margin: 2em 0;">

### Truckloads Page

The [Truckloads](../truckloads/index.md) page provides the most detailed operational monitoring.

1. **System Overview metrics** (top of page)
    - **L1–L5 replenishment counts**: These numbers should be steadily decreasing as replenishments are completed. If they are not decreasing, investigate.
    - **Inventory Snapshot**: Monitor case counts per level. A level dropping to very low inventory may need attention.
    - **Available Lanes / Disabled Lanes**: A high number of disabled lanes reduces system capacity.

2. **Truckload progress**
    - Watch for truckloads advancing from **In Queue** → **In Progress** → **Completed**
    - If truckloads are stalling in **In Queue** or **In Progress**, investigate sub-system status and replenishment flow.

<hr style="border: none; height: 2px; background-color: #a8a8a8; margin: 2em 0;">

### Replenishments Page

The [Replenishments](../replenishments.md) page shows whether the sub-systems are being adequately supplied.

- **Active replenishments** should be progressing through their lifecycle
- Watch for replenishments that remain in a pending state for too long
- Depalletizing and Manual Induction stations need to be actively processing replenishments to keep production moving

<hr style="border: none; height: 3px; background-color: #747474; margin: 2em 0;">

## Monitoring Schedule

**Every 15–30 Minutes:**

- Check the Home Page for sub-system statuses and priority alerts
- Verify production progress is advancing (Production Summary numbers increasing)

**Every 1–2 Hours:**

- Review replenishment status — are replenishments completing at a healthy rate?
- Check the System Overview on the Truckloads page for inventory levels and lane availability
- Verify truckloads are progressing as expected

**Throughout the Shift:**

- Watch for JIT-OOS events, which indicate out-of-stock products are disrupting production
- Coordinate with Depal and Manual Induction operators to ensure replenishments are being processed
- Be aware of downstream palletizer status — if downstream backs up, it can affect MixMaster flow

<hr style="border: none; height: 3px; background-color: #747474; margin: 2em 0;">

## Recognizing Normal Operation

When the system is operating correctly:

- All sub-system statuses show **Automatic**
- Production Summary numbers are steadily increasing
- Replenishments are flowing through their lifecycle without stalling
- Truckloads are advancing from **In Queue** through **In Progress** to **Completed**
- No priority alerts in the top banner
- Replenishment queue counts (L1–L5) are decreasing as production progresses

<hr style="border: none; height: 3px; background-color: #747474; margin: 2em 0;">

## Recognizing Problems Early

### Warning Signs Requiring Immediate Attention

- Any sub-system showing **Faulted** status
- Priority alerts appearing in the top banner
- A JIT-OOS event firing (production pauses while the system recalculates)
- Truckloads stuck in **In Progress** with no cases completing

### Warning Signs to Monitor Closely

- Replenishment counts (L1–L5) not decreasing — may indicate Depal or Manual Induction bottleneck
- Inventory levels on one or more InnoPick levels dropping significantly lower than others
- Multiple disabled lanes on a single level
- Truckloads taking longer than expected to complete
- Repeated OOS cases appearing for the same product

<hr style="border: none; height: 3px; background-color: #747474; margin: 2em 0;">

## Responding to Issues

When an issue is detected:

1. **Identify the scope**
    - Is it affecting one sub-system/level or the entire system?
    - Is production stopped or just slowed?

2. **Check the priority alerts** in the top banner for details

3. **Check the [Faults History](../reports/faults-history.md)** report for recent fault information from MixMaster and sub-systems

4. **Take appropriate action**
    - For sub-system faults: Coordinate with InnoPick operators or maintenance to resolve the fault on the affected level
    - For truckload issues: Use the [Truckload Controls](../truckloads/truckload-controls.md) to manage affected pallets (Hold, Reset, etc.)
    - For replenishment bottlenecks: Coordinate with Depal and Manual Induction operators
    - For JIT-OOS events: Wait for the system to finish recalculating, then verify production resumes
    - For unknown issues: Contact supervisor or DRL remote support

5. **Log the event** using the [Event Logs](../reports/event-logs.md) report for follow-up and historical tracking

<hr style="border: none; height: 3px; background-color: #747474; margin: 2em 0;">

**Navigation:** [← Daily Operations](index.md) | [End of Day →](end-of-day.md)
