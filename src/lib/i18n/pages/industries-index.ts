import type { Locale } from '../locales';

export interface IndustriesIndexCopy {
  metaDescription: string;
  eyebrow: string;
  heading: string;
  lede: string;
}

export const INDUSTRIES_INDEX_COPY: Record<Locale, IndustriesIndexCopy> = {
  th: {
    metaDescription:
      'โซลูชันมิเตอร์ไฟฟ้าและระบบสื่อสารที่ออกแบบมาสำหรับผู้พัฒนาโครงการโซลาร์และพลังงานหมุนเวียน การไฟฟ้า และโรงงาน/นิคมอุตสาหกรรม',
    eyebrow: 'อุตสาหกรรมที่เราให้บริการ',
    heading: 'โซลูชันที่ออกแบบมาสำหรับอุตสาหกรรมของคุณ',
    lede: 'ผลิตภัณฑ์ บริการ และเรื่องราวลูกค้าของ Advanced Grid จัดกลุ่มตามอุตสาหกรรมที่ใช้งานจริง — เลือกอุตสาหกรรมของคุณเพื่อดูโซลูชันที่เกี่ยวข้องทั้งหมด',
  },
  en: {
    metaDescription:
      'Electricity metering and communication solutions designed for solar and renewable project developers, utilities, and industrial facilities.',
    eyebrow: 'Industries We Serve',
    heading: 'Solutions designed for your industry',
    lede: 'Advanced Grid’s products, services, and customer stories are grouped by the industries we actually work in — pick your industry to see everything relevant to it.',
  },
  zh: {
    metaDescription: '为太阳能与可再生能源开发商、电力公司及工业设施量身定制的电力计量与通信解决方案。',
    eyebrow: '服务行业',
    heading: '为您的行业量身定制的解决方案',
    lede: 'Advanced Grid 的产品、服务与客户故事按我们实际服务的行业分类——选择您的行业，查看所有相关解决方案。',
  },
};
