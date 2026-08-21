import type { Locale } from '../locales';

export interface ProjectsIndexCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  lede: string;
  readStory: string;
  pendingLabel: string;
}

export const PROJECTS_INDEX_COPY: Record<Locale, ProjectsIndexCopy> = {
  th: {
    metaTitle: 'เรื่องราวลูกค้า',
    metaDescription:
      'โครงการที่ Advanced Grid ออกแบบ จัดหา และติดตั้งจริง — ตั้งแต่โซลาร์ฟาร์ม โรงไฟฟ้า ไปจนถึงระบบ Smart Meter สำหรับอาคาร',
    eyebrow: 'เรื่องราวลูกค้า',
    heading: 'ผลงานทั่วประเทศไทย ในทุกประเภทโครงการพลังงาน',
    lede: 'โครงการที่ Advanced Grid ออกแบบ จัดหา และติดตั้งจริง — กดเข้าไปดูรายละเอียดแต่ละโครงการ ตั้งแต่โจทย์ ทางออก จนถึงผลลัพธ์',
    readStory: 'อ่านเรื่องราว →',
    pendingLabel: '[pending customer story data] — รอข้อมูลยืนยันก่อนเผยแพร่รายละเอียด',
  },
  en: {
    metaTitle: 'Customer Stories',
    metaDescription:
      'Projects Advanced Grid has designed, supplied, and installed — from solar farms and power plants to smart metering systems for buildings.',
    eyebrow: 'Customer Stories',
    heading: 'Work delivered across Thailand, across every type of energy project',
    lede: 'Projects Advanced Grid has designed, supplied, and installed — click through to see each project in detail, from the problem to the solution to the result.',
    readStory: 'Read the story →',
    pendingLabel: '[pending customer story data] — awaiting confirmed details before publication',
  },
  zh: {
    metaTitle: '客户故事',
    metaDescription: 'Advanced Grid 设计、供应并安装的项目——从太阳能电站、发电厂，到楼宇智能计量系统。',
    eyebrow: '客户故事',
    heading: '遍布泰国全境的各类能源项目实绩',
    lede: 'Advanced Grid 设计、供应并安装的项目——点击查看每个项目的详细内容，从需求、解决方案到最终成果。',
    readStory: '阅读故事 →',
    pendingLabel: '[待补充客户故事数据] — 详情待确认后发布',
  },
};
