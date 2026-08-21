import type { Locale } from '../locales';

export interface InsightsIndexCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  lede: string;
  readMore: string;
  pendingLabel: string;
  generalLabel: string;
}

export const INSIGHTS_INDEX_COPY: Record<Locale, InsightsIndexCopy> = {
  th: {
    metaTitle: 'บล็อก',
    metaDescription:
      'ความรู้ด้านพลังงานไฟฟ้าสำหรับ Solar Developer, IPP/SPP/VSPP, การไฟฟ้า และผู้พัฒนาพลังงานหมุนเวียน — AMR, PPA, TOU, Net Billing, UGT และกฎระเบียบที่กำลังเปลี่ยนแปลงในไทย',
    eyebrow: 'ความรู้พลังงานไฟฟ้า',
    heading: 'อธิบายศัพท์และกฎระเบียบที่ผู้พัฒนาโครงการพลังงานต้องรู้',
    lede: 'ตั้งแต่ AMR, PPA, TOU ไปจนถึง Net Billing และ UGT — เขียนโดยอ้างอิงแหล่งข้อมูลทางการ สำหรับ Solar Developer, IPP/SPP/VSPP, การไฟฟ้า และผู้พัฒนาพลังงานหมุนเวียน',
    readMore: 'อ่านต่อ →',
    pendingLabel: '[pending] — กำลังเตรียมเผยแพร่',
    generalLabel: 'ทั่วไป',
  },
  en: {
    metaTitle: 'Blog',
    metaDescription:
      'Electricity industry knowledge for Solar Developers, IPP/SPP/VSPP operators, utilities, and renewable energy developers — AMR, PPA, TOU, Net Billing, UGT, and the evolving regulations in Thailand.',
    eyebrow: 'Electricity Industry Knowledge',
    heading: 'Terms and regulations every energy project developer should know',
    lede: 'From AMR, PPA, and TOU to Net Billing and UGT — written with reference to official sources, for Solar Developers, IPP/SPP/VSPP operators, utilities, and renewable energy developers.',
    readMore: 'Read more →',
    pendingLabel: '[pending] — coming soon',
    generalLabel: 'General',
  },
  zh: {
    metaTitle: '博客',
    metaDescription:
      '面向太阳能开发商、IPP/SPP/VSPP 运营商、电力公司及可再生能源开发商的电力行业知识——AMR、PPA、TOU、Net Billing、UGT 以及泰国不断变化的监管规定。',
    eyebrow: '电力行业知识',
    heading: '每位能源项目开发者都应了解的术语与法规',
    lede: '从 AMR、PPA、TOU 到 Net Billing 与 UGT——内容参考官方资料撰写，面向太阳能开发商、IPP/SPP/VSPP 运营商、电力公司及可再生能源开发商。',
    readMore: '阅读更多 →',
    pendingLabel: '[待发布] — 内容准备中',
    generalLabel: '综合',
  },
};
