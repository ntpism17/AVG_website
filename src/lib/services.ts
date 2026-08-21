/**
 * The four core services, per CLAUDE.md.
 *
 * Deliberately a typed const rather than a content collection: it is a fixed
 * list consumed by three templates (home teaser, services page, footer nav),
 * not editorial content that needs per-item markdown bodies.
 *
 * `title`/`desc` are locale-keyed since this const renders directly on
 * pages in all three languages. `en`/`zh` values are AI-generated
 * translations, not yet reviewed by a native/professional translator.
 */

import type { Locale } from './i18n/locales';

export interface Service {
  /** Anchor id — the footer links to `/services#<id>`. */
  id: string;
  /** Position label, e.g. "01 / 04". */
  num: string;
  title: Record<Locale, string>;
  desc: Record<Locale, string>;
}

export const SERVICES: Service[] = [
  {
    id: 'consulting',
    num: '01 / 04',
    title: {
      th: 'ที่ปรึกษาทางวิศวกรรม',
      en: 'Engineering consulting',
      zh: '工程咨询',
    },
    desc: {
      th: 'ให้คำปรึกษาตั้งแต่ขั้นตอนวางแผน เลือกอุปกรณ์ และตรวจสอบความเหมาะสมของระบบ TOU Meter, PQM และการสื่อสารสำหรับโครงการของคุณ',
      en: 'Advice from the planning stage onward — equipment selection and suitability review for your project’s TOU meter, power quality, and communication systems.',
      zh: '从项目规划阶段起提供咨询服务——为您的项目选型并评估 TOU 电表、电能质量及通信系统的适用性。',
    },
  },
  {
    id: 'design',
    num: '02 / 04',
    title: {
      th: 'ออกแบบและจัดหาอุปกรณ์',
      en: 'Design & equipment supply',
      zh: '设计与设备供应',
    },
    desc: {
      th: 'ออกแบบ Meter Box และ Communication Box ตามมาตรฐานการไฟฟ้า พร้อมจัดหา Energy Meter และอุปกรณ์สื่อสารจากแบรนด์ CEWE, SECURE, EDMI',
      en: 'Meter box and communication box design to utility standards, plus sourcing of energy meters and communication equipment from CEWE, SECURE, and EDMI.',
      zh: '按电力公司标准设计计量箱与通信箱，并供应 CEWE、SECURE、EDMI 品牌的电表与通信设备。',
    },
  },
  {
    id: 'installation',
    num: '03 / 04',
    title: {
      th: 'ติดตั้งและทดสอบระบบ',
      en: 'Installation & commissioning',
      zh: '安装与调试',
    },
    desc: {
      th: 'ทีมงานวิศวกรและช่างเทคนิคที่มีประสบการณ์ ดำเนินการติดตั้งตามมาตรฐาน พร้อมทดสอบและส่งมอบงานให้พร้อมใช้งานจริง',
      en: 'Experienced engineers and technicians install to standard, test the system, and hand it over ready for real-world operation.',
      zh: '经验丰富的工程师与技术人员按标准施工安装，完成测试后交付即可投入实际使用。',
    },
  },
  {
    id: 'calibration',
    num: '04 / 04',
    title: {
      th: 'สอบเทียบและซ่อมบำรุง',
      en: 'Calibration & maintenance',
      zh: '校准与维护',
    },
    desc: {
      th: 'บริการ Meter Calibration และซ่อมบำรุงตามรอบ พร้อมรายงานผลและใบรับรองตามมาตรฐานสากล เพื่อความแม่นยำของการวัดในระยะยาว',
      en: 'Meter calibration and scheduled maintenance, with reports and certificates to international standards, to keep measurement accuracy reliable long-term.',
      zh: '提供电表校准与定期维护服务，并按国际标准出具报告与证书，确保长期计量精度。',
    },
  },
];
