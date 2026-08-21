import type { Locale } from '../locales';

export interface HomeCopy {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroImageAlt: string;
  /** Pre-built with inline `<span class="text-accent">` around the two emphasized words. */
  heroHeadingHtml: string;
  heroLede: string;
  heroCtaProducts: string;
  heroCtaConsult: string;
  brandStripLabel: string;
  industriesEyebrow: string;
  industriesHeading: string;
  industriesViewAll: string;
  aboutEyebrow: string;
  aboutHeading: string;
  aboutLede: (name: string) => string;
  aboutReadMore: string;
  servicesEyebrow: string;
  servicesHeading: string;
  servicesLede: string;
  servicesViewAll: string;
  productsEyebrow: string;
  productsHeading: string;
  productsViewAll: string;
  ctaHeading: string;
  ctaBody: string;
  ctaLabel: string;
}

export const HOME_COPY: Record<Locale, HomeCopy> = {
  th: {
    metaTitle: 'ระบบ AMR และบิลลิ่งมิเตอร์อัจฉริยะ | Advanced Grid Co., Ltd.',
    metaDescription:
      'แพลตฟอร์ม AMR และระบบบิลลิ่งมิเตอร์อัจฉริยะ สำหรับผู้พัฒนาโซลาร์ IPP/SPP/VSPP และการไฟฟ้า — อ่านมิเตอร์อัตโนมัติ คำนวณค่าไฟตามเรท MEA/PEA/TOU และออกบิล PPA จากข้อมูลจริง พร้อมให้คำปรึกษา ออกแบบและติดตั้ง Energy Meter และ Power Quality Meter (PQM)',
    heroEyebrow: 'แพลตฟอร์ม AMR และระบบบิลลิ่งมิเตอร์อัจฉริยะ',
    heroImageAlt: 'ภาพทิวทัศน์พลังงานหมุนเวียน — โครงการพลังงานที่ Advanced Grid ให้บริการ',
    heroHeadingHtml:
      'ระบบ <span class="text-accent">อ่านมิเตอร์</span> และ <span class="text-accent">คิดเงิน</span> อัตโนมัติ จากข้อมูลมิเตอร์จริง',
    heroLede:
      'แพลตฟอร์มอ่านมิเตอร์อัตโนมัติ (AMR) และระบบบิลลิ่งมิเตอร์อัจฉริยะที่คำนวณค่าไฟตามเรท MEA/PEA/TOU และออกบิล PPA จากข้อมูลมิเตอร์จริง สำหรับ Solar Developer, IPP/SPP/VSPP และการไฟฟ้า — พร้อมให้คำปรึกษา ออกแบบและติดตั้ง Energy Meter, Power Quality Meter (PQM) และระบบสื่อสาร สำหรับโรงไฟฟ้า โซลาร์ รูฟท็อป และโซลาร์ฟาร์มลอยน้ำ',
    heroCtaProducts: 'ดูผลิตภัณฑ์',
    heroCtaConsult: 'ปรึกษาวิศวกร →',
    brandStripLabel: 'แบรนด์ระดับโลกที่เราเป็นตัวแทนจัดจำหน่าย',
    industriesEyebrow: 'อุตสาหกรรมที่เราให้บริการ',
    industriesHeading: 'โซลูชันที่ออกแบบมาสำหรับอุตสาหกรรมของคุณ',
    industriesViewAll: 'ดูอุตสาหกรรมทั้งหมด →',
    aboutEyebrow: 'เกี่ยวกับเรา',
    aboutHeading: 'วิศวกรรมที่เชื่อถือได้ ตั้งแต่การออกแบบจนถึงการสื่อสาร',
    aboutLede: (name) =>
      `${name} ก่อตั้งขึ้นเพื่อตอบโจทย์อุตสาหกรรมพลังงานของประเทศไทย เราเป็นผู้แทนจำหน่ายอุปกรณ์มิเตอร์ไฟฟ้าและอุปกรณ์สื่อสารระดับโลก พร้อมให้บริการครบวงจร ตั้งแต่ที่ปรึกษา ออกแบบ จัดหา ติดตั้ง และซ่อมบำรุง`,
    aboutReadMore: 'อ่านเพิ่มเติมเกี่ยวกับเรา →',
    servicesEyebrow: 'บริการของเรา',
    servicesHeading: 'บริการครบวงจรสำหรับระบบมิเตอร์ไฟฟ้าและการสื่อสาร',
    servicesLede:
      'ตั้งแต่การให้คำปรึกษา ออกแบบทางวิศวกรรม จัดหาอุปกรณ์ ไปจนถึงการติดตั้ง ทดสอบ และซ่อมบำรุง — เรารับผิดชอบทุกขั้นตอนของโครงการ',
    servicesViewAll: 'ดูบริการทั้งหมด →',
    productsEyebrow: 'ผลิตภัณฑ์',
    productsHeading: 'Energy Meter และอุปกรณ์สื่อสารระดับโลก',
    productsViewAll: 'ดูผลิตภัณฑ์ทั้งหมด →',
    ctaHeading: 'พร้อมเป็นส่วนหนึ่งของโครงการคุณ',
    ctaBody: 'ส่งรายละเอียดโครงการของคุณ ทีมวิศวกรของเราจะประเมินขอบเขตงาน และเสนอราคาให้ภายใน 2 วันทำการ',
    ctaLabel: 'ติดต่อเรา →',
  },
  en: {
    metaTitle: 'AMR Platform & Smart Meter Billing | Advanced Grid Co., Ltd.',
    metaDescription:
      'An AMR platform and smart-meter billing system for solar developers, IPP/SPP/VSPP operators and utilities — automatic meter reading, tariff-accurate billing on MEA/PEA/TOU rates, and PPA invoicing from real meter data. Plus consulting, design and installation of energy and power quality meters (PQM).',
    heroEyebrow: 'AMR Platform & Smart Meter Billing',
    heroImageAlt: 'Renewable energy landscape — the energy projects we serve',
    heroHeadingHtml:
      'Automatic <span class="text-accent">meter reading</span> and <span class="text-accent">billing</span> from real meter data',
    heroLede:
      'An AMR platform and smart-meter billing system that reads meters automatically, calculates charges on real MEA/PEA/TOU rates, and issues PPA invoices from actual meter data — for solar developers, IPP/SPP/VSPP operators and utilities. Plus consulting, design and installation of energy meters, power quality meters (PQM) and communication systems for power plant, solar, rooftop and floating solar farm projects.',
    heroCtaProducts: 'View Products',
    heroCtaConsult: 'Talk to an Engineer →',
    brandStripLabel: 'World-class brands we distribute',
    industriesEyebrow: 'Industries We Serve',
    industriesHeading: 'Solutions designed for your industry',
    industriesViewAll: 'View all industries →',
    aboutEyebrow: 'About Us',
    aboutHeading: 'Reliable engineering, from design through to communication',
    aboutLede: (name) =>
      `${name} was founded to serve Thailand's energy industry. We are a distributor of world-class electricity metering and communication equipment, offering an end-to-end service — from consulting and design to sourcing, installation and maintenance.`,
    aboutReadMore: 'Read more about us →',
    servicesEyebrow: 'Our Services',
    servicesHeading: 'End-to-end services for metering and communication systems',
    servicesLede:
      'From consulting and engineering design to equipment sourcing, installation, testing, and maintenance — we take responsibility for every stage of your project.',
    servicesViewAll: 'View all services →',
    productsEyebrow: 'Products',
    productsHeading: 'World-class energy meters and communication equipment',
    productsViewAll: 'View all products →',
    ctaHeading: 'Ready to be part of your project',
    ctaBody:
      'Send us your project details. Our engineering team will assess the scope of work and get back to you with a quote within 2 business days.',
    ctaLabel: 'Contact Us →',
  },
  zh: {
    metaTitle: 'AMR 平台与智能电表计费系统 | Advanced Grid Co., Ltd.',
    metaDescription:
      '面向太阳能开发商、IPP/SPP/VSPP 运营商与电力公司的 AMR 平台与智能电表计费系统——自动抄表、按 MEA/PEA/TOU 电价计费、基于真实电表数据开具 PPA 账单，并提供电表与电能质量表（PQM）的咨询、设计与安装服务。',
    heroEyebrow: 'AMR 平台与智能电表计费系统',
    heroImageAlt: '可再生能源景观——我们服务的能源项目',
    heroHeadingHtml:
      '基于真实电表数据的自动<span class="text-accent">抄表</span>与<span class="text-accent">计费</span>系统',
    heroLede:
      '面向太阳能开发商、IPP/SPP/VSPP 运营商与电力公司的 AMR 平台与智能电表计费系统——自动抄表、按 MEA/PEA/TOU 电价计算电费，并基于真实电表数据开具 PPA 账单；同时为发电厂、太阳能、屋顶光伏及浮动太阳能电站项目提供电表、电能质量表（PQM）及通信系统的咨询、设计与安装服务。',
    heroCtaProducts: '查看产品',
    heroCtaConsult: '咨询工程师 →',
    brandStripLabel: '我们代理的世界级品牌',
    industriesEyebrow: '服务行业',
    industriesHeading: '为您的行业量身定制的解决方案',
    industriesViewAll: '查看所有行业 →',
    aboutEyebrow: '关于我们',
    aboutHeading: '值得信赖的工程能力，从设计到通信一以贯之',
    aboutLede: (name) =>
      `${name} 因泰国能源产业的需求而创立，是世界级电力计量与通信设备的经销商，提供从咨询、设计、采购到安装与维护的一站式服务。`,
    aboutReadMore: '了解更多关于我们 →',
    servicesEyebrow: '我们的服务',
    servicesHeading: '电力计量与通信系统的一站式服务',
    servicesLede: '从咨询、工程设计、设备采购，到安装、测试与维护——我们对项目的每个环节负责。',
    servicesViewAll: '查看所有服务 →',
    productsEyebrow: '产品',
    productsHeading: '世界级电表与通信设备',
    productsViewAll: '查看所有产品 →',
    ctaHeading: '期待成为您项目的一部分',
    ctaBody: '发送您的项目详情，我们的工程团队将评估工作范围，并在 2 个工作日内为您提供报价。',
    ctaLabel: '联系我们 →',
  },
};
