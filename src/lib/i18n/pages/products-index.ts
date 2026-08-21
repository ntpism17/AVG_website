import type { Locale } from '../locales';

export interface ProductsIndexCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  servicesEyebrow: string;
  servicesHeading: string;
  servicesLede: string;
  servicesViewAll: string;
}

export const PRODUCTS_INDEX_COPY: Record<Locale, ProductsIndexCopy> = {
  th: {
    metaTitle: 'ผลิตภัณฑ์ | Energy Meter, Power Quality Meter',
    metaDescription:
      'Energy Meter และอุปกรณ์สื่อสารระดับโลกจาก CEWE, SECURE, EDMI — TOU Meter, Power Quality Analyzer, Smart Meter และบริการสอบเทียบมิเตอร์ ISO/IEC 17025',
    eyebrow: 'ผลิตภัณฑ์',
    heading: 'Energy Meter และอุปกรณ์สื่อสารระดับโลก',
    servicesEyebrow: 'บริการของเรา',
    servicesHeading: 'บริการครบวงจรสำหรับระบบมิเตอร์และการสื่อสาร',
    servicesLede: 'ตั้งแต่การให้คำปรึกษา ออกแบบ จัดหา ติดตั้ง ไปจนถึงสอบเทียบ — เราดูแลทุกขั้นตอนของโครงการ',
    servicesViewAll: 'ดูบริการทั้งหมด →',
  },
  en: {
    metaTitle: 'Products | Energy Meter, Power Quality Meter',
    metaDescription:
      'World-class energy meters and communication equipment from CEWE, SECURE, and EDMI — TOU meters, power quality analyzers, smart meters, and ISO/IEC 17025 meter calibration service.',
    eyebrow: 'Products',
    heading: 'World-class energy meters and communication equipment',
    servicesEyebrow: 'Our Services',
    servicesHeading: 'End-to-end services for metering and communication systems',
    servicesLede: 'From consulting and design to supply, installation, and calibration — we cover every step of your project.',
    servicesViewAll: 'View all services →',
  },
  zh: {
    metaTitle: '产品 | Energy Meter, Power Quality Meter',
    metaDescription:
      '来自 CEWE、SECURE、EDMI 的世界级电表与通信设备——TOU 电表、电能质量分析仪、智能电表，以及符合 ISO/IEC 17025 标准的电表校准服务。',
    eyebrow: '产品',
    heading: '世界级电表与通信设备',
    servicesEyebrow: '我们的服务',
    servicesHeading: '计量与通信系统一站式服务',
    servicesLede: '从咨询、设计、供应、安装到校准——我们负责您项目的每一个环节。',
    servicesViewAll: '查看全部服务 →',
  },
};
