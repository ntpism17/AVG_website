---
name: 'SECURE Saral'
brand: 'SECURE'
category: 'Energy Meter · Single-Phase Credit Meter'
tagline: 'Energy Meter · Single-Phase Credit Meter'
image: '../../../assets/Saral-305_.png'
imageAlt: 'SECURE Saral 单相直连式电能表'
description: '紧凑型直接接入式单相电表，适用于住宅及小型商铺，支持双向（进/出）电能计量，可用于 Net Billing 场景。'
specs: ['Class 1.0', '单相', '直接接入', 'Net Billing', 'BLE']
specSource: 'SECURE Saral datasheet'
specTable:
  - group: '计量'
    rows:
      - label: '接线方式 (Connection type)'
        value: 'Direct connected'
      - label: '接线配置 (Wiring configuration)'
        value: 'Single phase, two wire'
      - label: '电压范围'
        value: '230/240 V (P-N)'
      - label: '电流范围'
        value: '5-30A, 10-60A, 10-100A'
      - label: '精度等级 (Accuracy class)'
        value: '1.0'
      - label: '频率'
        value: '50 Hz ± 5%'
      - label: 'Burden (电压回路)'
        value: '< 0.5W and 1 VA'
      - label: 'Burden (电流回路)'
        value: '< 0.1 VA'
      - label: '电表常数 (Meter constant)'
        value: '6400 imp/kWh, 3200 imp/kWh, 1280 imp/kWh'
  - group: '计量与数据记录功能'
    rows:
      - label: '电能类型'
        value: 'Active and apparent'
      - label: '电能记录'
        value: 'Forwarded, import and export'
      - label: 'TOU'
        value: 'Up to 8 rate registers; up to 8 time zones; seasons, weekdays, and holidays'
      - label: '最大需量'
        value: 'Configurable in 6 rate registers'
      - label: '午夜电量'
        value: '35 days for 2 parameters'
      - label: '负荷调查 (Load survey)'
        value: 'More than 150 days (30min. IP) upto 5 parameters'
      - label: '事件记录'
        value: 'Up to 300 events, compartment wise'
      - label: '历史数据'
        value: '12 billing periods'
  - group: '通信'
    rows:
      - label: '内置通信端口'
        value: 'IEC 62056-21 physical port for local communication'
      - label: '附加选项'
        value: 'Optional BLE (Bluetooth Low Energy) with mobile app support or RS 232 port over micro USB for remote communication'
  - group: '环境'
    rows:
      - label: '防护等级 (Ingress protection)'
        value: 'IP 54'
      - label: '抗浪涌能力 (Surge withstand)'
        value: '10 kV'
      - label: '湿度'
        value: '95% non-condensing'
      - label: '温度'
        value: '-20°C to +60°C (operating), -25°C to +70°C (storage)'
  - group: '外形'
    rows:
      - label: '尺寸 (W x H x D)'
        value: '95 x 130 x 60mm (approx.)'
      - label: '重量'
        value: '0.3 kg (approx.)'
      - label: '材质 (外壳)'
        value: 'Engineering plastic'
  - group: '标准'
    rows:
      - label: 'Standards'
        value: 'IS 13779, IEC 62052-11, IEC 62053-21, IS 15959'
segments: ['solar-renewable']
smartMeter: true
order: 7
---

紧凑型直接接入式单相电表，适用于住宅及小型商铺的用电计量，包括需要同时记录进/出电能的 Net Billing 场景。

在各种现场条件下均能提供稳定的计量数据，并具备防止电量损失的功能。支持通过 IEC 62056-21 端口读数，也可选配 BLE 蓝牙功能，通过手机应用读取数据。
