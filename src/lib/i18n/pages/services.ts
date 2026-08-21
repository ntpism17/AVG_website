import type { Locale } from '../locales';

export interface ServicesCopy {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeading: string;
  heroLede: string;
  ctaHeading: string;
  ctaLabel: string;
}

export const SERVICES_COPY: Record<Locale, ServicesCopy> = {
  th: {
    metaTitle: 'บริการ',
    metaDescription:
      'บริการครบวงจรสำหรับระบบมิเตอร์ไฟฟ้าและการสื่อสาร ตั้งแต่ที่ปรึกษาทางวิศวกรรม ออกแบบและจัดหาอุปกรณ์ ติดตั้งและทดสอบระบบ ไปจนถึงสอบเทียบและซ่อมบำรุง',
    heroEyebrow: 'บริการของเรา',
    heroHeading: 'บริการครบวงจรสำหรับระบบมิเตอร์ไฟฟ้าและการสื่อสาร',
    heroLede:
      'ตั้งแต่การให้คำปรึกษา ออกแบบทางวิศวกรรม จัดหาอุปกรณ์ ไปจนถึงการติดตั้ง ทดสอบ และซ่อมบำรุง — เรารับผิดชอบทุกขั้นตอนของโครงการ',
    ctaHeading: 'ให้เราช่วยประเมินขอบเขตงานของคุณ',
    ctaLabel: 'ขอใบเสนอราคา →',
  },
  en: {
    metaTitle: 'Services',
    metaDescription:
      'End-to-end services for metering and communication systems — engineering consulting, design and equipment supply, installation and testing, through to calibration and maintenance.',
    heroEyebrow: 'Our Services',
    heroHeading: 'End-to-end services for metering and communication systems',
    heroLede:
      'From consulting and engineering design to equipment sourcing, installation, testing, and maintenance — we take responsibility for every stage of your project.',
    ctaHeading: 'Let us help scope your project',
    ctaLabel: 'Request a Quote →',
  },
  zh: {
    metaTitle: '服务',
    metaDescription: '电力计量与通信系统的一站式服务——从工程咨询、设计与设备供应，到安装测试，再到校准与维护。',
    heroEyebrow: '我们的服务',
    heroHeading: '电力计量与通信系统的一站式服务',
    heroLede: '从咨询、工程设计、设备采购，到安装、测试与维护——我们对项目的每个环节负责。',
    ctaHeading: '让我们帮您评估项目范围',
    ctaLabel: '索取报价 →',
  },
};
