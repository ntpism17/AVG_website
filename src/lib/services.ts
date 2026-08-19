/**
 * The four core services, per CLAUDE.md.
 *
 * Deliberately a typed const rather than a content collection: it is a fixed
 * list consumed by three templates (home teaser, services page, footer nav),
 * not editorial content that needs per-item markdown bodies.
 */

export interface Service {
  /** Anchor id — the footer links to `/services#<id>`. */
  id: string;
  /** Position label, e.g. "01 / 04". */
  num: string;
  title: string;
  titleEn: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    id: 'consulting',
    num: '01 / 04',
    title: 'ที่ปรึกษาทางวิศวกรรม',
    titleEn: 'Engineering consulting',
    desc: 'ให้คำปรึกษาตั้งแต่ขั้นตอนวางแผน เลือกอุปกรณ์ และตรวจสอบความเหมาะสมของระบบ TOU Meter, PQM และการสื่อสารสำหรับโครงการของคุณ',
  },
  {
    id: 'design',
    num: '02 / 04',
    title: 'ออกแบบและจัดหาอุปกรณ์',
    titleEn: 'Design & equipment supply',
    desc: 'ออกแบบ Meter Box และ Communication Box ตามมาตรฐานการไฟฟ้า พร้อมจัดหา Energy Meter และอุปกรณ์สื่อสารจากแบรนด์ CEWE, SECURE, EDMI',
  },
  {
    id: 'installation',
    num: '03 / 04',
    title: 'ติดตั้งและทดสอบระบบ',
    titleEn: 'Installation & commissioning',
    desc: 'ทีมงานวิศวกรและช่างเทคนิคที่มีประสบการณ์ ดำเนินการติดตั้งตามมาตรฐาน พร้อมทดสอบและส่งมอบงานให้พร้อมใช้งานจริง',
  },
  {
    id: 'calibration',
    num: '04 / 04',
    title: 'สอบเทียบและซ่อมบำรุง',
    titleEn: 'Calibration & maintenance',
    desc: 'บริการ Meter Calibration และซ่อมบำรุงตามรอบ พร้อมรายงานผลและใบรับรองตามมาตรฐานสากล เพื่อความแม่นยำของการวัดในระยะยาว',
  },
];
