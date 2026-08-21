/**
 * The three industry segments AVG serves, per the segment/industry-based IA.
 *
 * Deliberately a typed const rather than a content collection: like
 * `services.ts`, these are a fixed list consumed by nav, the homepage grid
 * and the `/industries` pages — not editorial content that grows or needs a
 * per-item markdown body. Segment pages are composed almost entirely of
 * content pulled from `products`/`projects`/`articles` via their `segments`/
 * `segment` fields (see `lib/collections.ts`).
 *
 * `th`/`en`/`zh` (name), `tagline` and `description` are all locale-keyed
 * since this const is rendered directly on `/industries/*` pages and the
 * homepage in all three languages. The `zh`/`en` translations here are
 * AI-generated, not yet reviewed by a native/professional translator — see
 * CLAUDE.md's Todo list.
 */

import type { Locale } from './i18n/locales';
import type { ImageMetadata } from 'astro';
import solarImage from '../assets/solar.jpg';
import utilityImage from '../assets/utility.jpg';
import industrialImage from '../assets/industrial.jpg';

export interface Segment {
  id: 'solar-renewable' | 'utility' | 'industrial';
  /** Card photo shown on the homepage grid and `/industries` index. */
  image: ImageMetadata;
  th: string;
  en: string;
  zh: string;
  /** Short card copy — homepage grid, `/industries` index. */
  tagline: Record<Locale, string>;
  /** Hero lede paragraph on the segment detail page. */
  description: Record<Locale, string>;
  /** Whether `/solutions/amr` and `/solutions/billing` are relevant to this segment. */
  showSolutions: boolean;
  order: number;
}

export const SEGMENTS: Segment[] = [
  {
    id: 'solar-renewable',
    image: solarImage,
    th: 'ผู้พัฒนาโครงการโซลาร์และพลังงานหมุนเวียน',
    en: 'Solar & Renewable Developers',
    zh: '太阳能与可再生能源开发商',
    tagline: {
      th: 'TOU Meter, Power Quality Analyzer และระบบสื่อสาร สำหรับโครงการโรงไฟฟ้า โซลาร์ รูฟท็อป และโซลาร์ฟาร์มลอยน้ำ',
      en: 'TOU meters, power quality analyzers and communication systems for power plant, solar, rooftop and floating solar farm projects',
      zh: '为发电厂、太阳能、屋顶光伏及浮动太阳能电站项目提供 TOU 电表、电能质量分析仪与通信系统',
    },
    description: {
      th: 'Advanced Grid สนับสนุนผู้พัฒนาโครงการโซลาร์และพลังงานหมุนเวียนตลอดวงจรโครงการ — ตั้งแต่ TOU Meter คลาส 0.2S และ Power Quality Analyzer สำหรับจุดวัดในโรงไฟฟ้าและโซลาร์ฟาร์ม ไปจนถึงระบบ AMR สำหรับอ่านมิเตอร์อัตโนมัติ และระบบคิดเงินสำหรับ Private PPA',
      en: 'Advanced Grid supports solar and renewable project developers across the full project lifecycle — from Class 0.2S TOU meters and power quality analyzers for power plant and solar farm metering points, to an AMR system for automatic meter reading and a billing system for Private PPAs.',
      zh: 'Advanced Grid 在整个项目周期内为太阳能与可再生能源开发商提供支持——从用于发电厂和太阳能电站计量点的 0.2S 级 TOU 电表与电能质量分析仪，到用于自动抄表的 AMR 系统，再到用于私人购电协议（PPA）的计费系统。',
    },
    showSolutions: true,
    order: 1,
  },
  {
    id: 'utility',
    image: utilityImage,
    th: 'การไฟฟ้า',
    en: 'Utilities (PEA/MEA)',
    zh: '电力公司（PEA/MEA）',
    tagline: {
      th: 'อุปกรณ์และระบบสื่อสารที่ตรงตามมาตรฐานการไฟฟ้า สำหรับงาน Tariff Metering และ AMI/AMR',
      en: 'Equipment and communication systems built to utility standards, for tariff metering and AMI/AMR',
      zh: '符合电力公司标准的设备与通信系统，适用于电价计量及 AMI/AMR 应用',
    },
    description: {
      th: 'อุปกรณ์มิเตอร์และระบบสื่อสารที่ออกแบบให้ส่งข้อมูลเข้าระบบ Tariff ของการไฟฟ้าได้ถูกต้องและตรวจสอบย้อนหลังได้ — ตั้งแต่มิเตอร์ TOU ความแม่นยำสูงไปจนถึงระบบ AMR/AMI สำหรับอ่านมิเตอร์อัตโนมัติ',
      en: 'Metering equipment and communication systems designed to feed a utility’s tariff system correctly and with a verifiable audit trail — from high-accuracy TOU meters to AMR/AMI systems for automatic meter reading.',
      zh: '计量设备与通信系统的设计确保数据能够准确、可追溯地接入电力公司的电价系统——从高精度 TOU 电表到用于自动抄表的 AMR/AMI 系统。',
    },
    showSolutions: true,
    order: 2,
  },
  {
    id: 'industrial',
    image: industrialImage,
    th: 'โรงงานอุตสาหกรรมและนิคมอุตสาหกรรม',
    en: 'Industrial Facilities',
    zh: '工业设施',
    tagline: {
      th: 'มิเตอร์อุตสาหกรรมสำหรับนิคมอุตสาหกรรม โรงงานขนาดใหญ่ และงาน Sub-Metering',
      en: 'Industrial-grade meters for industrial estates, large factories, and sub-metering',
      zh: '适用于工业园区、大型工厂及子计量应用的工业级电表',
    },
    description: {
      th:
        'มิเตอร์อุตสาหกรรม เช่น Premier 550 และ Elite 500 สำหรับนิคมอุตสาหกรรม โรงงานขนาดใหญ่ และงาน Sub-Metering ' +
        '[pending: ระบุกลุ่มลูกค้าอุตสาหกรรมเป้าหมายให้ชัดเจน เช่น โรงงานที่ใช้อัตราค่าไฟ TOU ผู้บริหารนิคมอุตสาหกรรม หรือเจ้าของอาคารที่ทำ Sub-Metering — ยังไม่มีเรื่องราวลูกค้าหรือบทความยืนยันกลุ่มนี้]',
      en:
        'Industrial-grade meters such as the Premier 550 and Elite 500, for industrial estates, large factories, and sub-metering. ' +
        '[pending: define the target industrial customer profile precisely — e.g. TOU-tariff factories, industrial estate operators, or building owners doing sub-metering — no customer story or article confirms this segment yet]',
      zh:
        '工业级电表，如 Premier 550 与 Elite 500，适用于工业园区、大型工厂及子计量应用。' +
        '[待补充：明确目标工业客户画像，例如采用 TOU 电价的工厂、工业园区运营方，或进行子计量的物业业主——目前尚无案例或文章证实此细分市场]',
    },
    showSolutions: false,
    order: 3,
  },
];

export type SegmentId = Segment['id'];
