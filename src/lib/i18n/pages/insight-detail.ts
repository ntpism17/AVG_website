import type { Locale } from '../locales';

export interface InsightDetailCopy {
  faqHeading: string;
  solutionCtaHeading: string;
  solutionCtaBody: string;
  solutionCtaLabel: string;
  contactCtaHeading: string;
  contactCtaBody: string;
  contactCtaLabel: string;
}

export const INSIGHT_DETAIL_COPY: Record<Locale, InsightDetailCopy> = {
  th: {
    faqHeading: 'คำถามที่พบบ่อย',
    solutionCtaHeading: 'อยากดูว่าระบบทำงานจริงอย่างไร?',
    solutionCtaBody: 'ดูรายละเอียดโซลูชันที่เกี่ยวข้องกับหัวข้อนี้ พร้อมขอเดโมใช้งานฟรี',
    solutionCtaLabel: 'ดูโซลูชัน →',
    contactCtaHeading: 'มีคำถามเพิ่มเติม?',
    contactCtaBody: 'ปรึกษาทีมงาน Advanced Grid ฟรี เราตอบกลับภายใน 1 วันทำการ',
    contactCtaLabel: 'ติดต่อเรา →',
  },
  en: {
    faqHeading: 'Frequently Asked Questions',
    solutionCtaHeading: 'Want to see how the system actually works?',
    solutionCtaBody: 'See the related solution in detail, and request a free demo.',
    solutionCtaLabel: 'View solution →',
    contactCtaHeading: 'Have more questions?',
    contactCtaBody: "Talk to Advanced Grid's team for free — we respond within 1 business day.",
    contactCtaLabel: 'Contact us →',
  },
  zh: {
    faqHeading: '常见问题',
    solutionCtaHeading: '想了解系统的实际运作方式吗？',
    solutionCtaBody: '查看相关解决方案的详细内容，并可免费申请演示。',
    solutionCtaLabel: '查看解决方案 →',
    contactCtaHeading: '还有其他问题？',
    contactCtaBody: '免费咨询 Advanced Grid 团队，我们将在 1 个工作日内回复。',
    contactCtaLabel: '联系我们 →',
  },
};
