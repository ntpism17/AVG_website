import type { Locale } from '../locales';

export interface ProjectDetailCopy {
  ctaHeading: string;
  ctaBody: string;
  ctaLabel: string;
}

export const PROJECT_DETAIL_COPY: Record<Locale, ProjectDetailCopy> = {
  th: {
    ctaHeading: 'มีโครงการแบบนี้อยู่ในมือคุณ?',
    ctaBody:
      'พูดคุยกับวิศวกรของ Advanced Grid ฟรี เราจะช่วยประเมินขอบเขตงาน เลือกอุปกรณ์ และเสนอราคาภายใน 2 วันทำการ',
    ctaLabel: 'ปรึกษาวิศวกร →',
  },
  en: {
    ctaHeading: 'Have a similar project on your hands?',
    ctaBody:
      'Talk to an Advanced Grid engineer, free of charge. We\'ll help assess the scope of work, select equipment, and provide a quote within 2 business days.',
    ctaLabel: 'Talk to an Engineer →',
  },
  zh: {
    ctaHeading: '您手上也有类似的项目吗？',
    ctaBody: '免费咨询 Advanced Grid 工程师，我们将协助评估工作范围、选型设备，并在 2 个工作日内为您提供报价。',
    ctaLabel: '咨询工程师 →',
  },
};
