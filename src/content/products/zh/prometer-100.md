---
name: 'SECURE Prometer 100'
brand: 'SECURE'
category: 'Energy Meter · 3-Phase TOU'
tagline: 'Energy Meter · 3-Phase TOU'
image: '../../../assets/Prometer100.png'
imageAlt: 'SECURE Prometer 100 三相 TOU 电能表，精度等级 0.2S'
description: '0.2S 级三相 TOU 电表，适用于发电厂项目及对精度要求高的电价计量场景。'
specs: ['Class 0.2S', '三相', 'TOU', 'IEC 61850', 'RS-485']
specSource: 'SECURE Prometer 100 datasheet (prometer100wall)'
specTable:
  - group: '计量'
    rows:
      - label: '精度 (Accuracy)'
        value: 'Class 0.2S / class 0.5S / class C'
      - label: '接线方式 (Connection type)'
        value: 'HV3 / HV4 / LV4'
      - label: '可测电压范围'
        value: '100 V to 415 V (L-L) ±30% 3P 4W, 100 V to 240 V (L-L) ±30% 3P 3W'
      - label: '可测电流范围'
        value: '1-10 A (configurable)'
      - label: '频率'
        value: '50/60 Hz'
      - label: '最大耐受电压'
        value: '1.5 times of nominal voltage continuously; 2 times of nominal voltage for 0.5 second'
      - label: '最大耐受电流'
        value: '1.5 times of Imax continuously; 10 times Imax for 1 second; 20 times Imax for 0.5 second'
      - label: '谐波'
        value: 'Up to 31st individual harmonic component measurement'
  - group: '电源与显示'
    rows:
      - label: '电源 (Power supply)'
        value: 'Dual / Single auxiliary supply — Range: 60-240 V AC/DC (±20%), Burden: <10VA'
      - label: '备选电源'
        value: '24-48 V DC (±20%), Burden: <10VA'
      - label: '显示屏'
        value: 'Graphical, with green backlight; 69 x 39 mm (H x W), 128x80 pixels'
      - label: '支持语言'
        value: 'English, Swedish, German, French, Spanish, Italian, Russian, Arabic'
  - group: '通信'
    rows:
      - label: '通信端口'
        value: '内置 IEC 61850，同时集成 RS232/RS485 与以太网接口——所有端口可同时通信'
      - label: '协议'
        value: 'Simultaneous DLMS and MODBUS over Ethernet port'
      - label: '通信模块'
        value: 'Field replaceable hot pluggable communication modules'
  - group: '数据记录 (TOU / Logging)'
    rows:
      - label: 'TOU'
        value: '16 time-of-use tariffs, 16 Seasons, 16 Day types and 16 Time zones, 53 Billing dates, DST dates for 25 years'
      - label: '数据记录器'
        value: '两组数据记录器，每组最多 50 项参数；约 4,800 参数-天（30 分钟间隔）'
      - label: '能量通道'
        value: 'Logging of up to 34 energy channels and 80+ instantaneous values, integration period 1 to 60 minutes'
      - label: '事件记录'
        value: '50 组以上告警及 10 组以上事件记录分区'
  - group: '环境'
    rows:
      - label: '防护等级 (Ingress protection)'
        value: 'IP54'
      - label: '工作温度'
        value: '-25°C to +60°C'
      - label: '极限工作范围'
        value: '-25°C to +70°C'
      - label: '储存温度'
        value: '-40°C to +80°C'
      - label: 'Temperature coefficient'
        value: '<0.3%/100C (UPF) for class 0.5; <0.1%/100C (UPF) for class 0.2'
  - group: '外形'
    rows:
      - label: '尺寸 (H x W x D)'
        value: '292.7 x 201.5 x 105.2 mm (± 0.5 mm)'
      - label: '重量'
        value: '2 kg (+/- 200 gm)'
  - group: '标准'
    rows:
      - label: 'Standards'
        value: 'IEC 62052-11, IEC 62052-31, IEC 62059-31-1, IEC 62053-22, IEC 62053-23, IEC 62053-24, IEC 62056-52, IEC 61010-1, IEC 61010-2-030, CE'
      - label: 'MID'
        value: 'EN 50470-1, EN 50470-3'
      - label: 'IEC 61850'
        value: 'IEC 61850-6, 7-1, 7-2, 7-3, 7-4, 8-1 (as per edition 1 and 2)'
segments: ['solar-renewable', 'utility']
smartMeter: true
order: 1
---

0.2S 级三相 TOU 电表，适用于对精度要求较高的电价计量及电力交易连接点。支持四象限电能计量，可同时追踪配电网络中的发电、输电与负荷情况。

通信模块支持现场热插拔更换，并可远程配置，能够灵活对接 AMR/AMI/SCADA 系统，同时内置 IEC 61850，适用于变电站自动化场景。

已实际部署 18 台于某 50MW 太阳能电站项目的主电网连接点及逆变站关键计量点。
