import type { Locale } from '../locales';

export interface AboutCopy {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeading: string;
  heroParagraph1: (name: string) => string;
  heroParagraph2: string;
  heroImageAlt: string;
  heroSecondaryCta: string;
  principlesHeading: string;
  principlesLede: string;
  principles: { title: string; desc: string }[];
  brandsEyebrow: string;
  brandsHeading: string;
  brandsLede: string;
  foundedLabel: string;
  ctaHeading: string;
  ctaLabel: string;
}

export const ABOUT_COPY: Record<Locale, AboutCopy> = {
  th: {
    metaTitle: 'เกี่ยวกับเรา',
    metaDescription:
      'บริษัท แอดวานซ์ กริด จำกัด ก่อตั้งขึ้นเพื่อตอบโจทย์อุตสาหกรรมพลังงานของประเทศไทย ผู้แทนจำหน่ายอุปกรณ์มิเตอร์ไฟฟ้าและอุปกรณ์สื่อสารระดับโลก พร้อมบริการครบวงจร',
    heroEyebrow: 'เกี่ยวกับเรา',
    heroHeading: 'วิศวกรรมที่เชื่อถือได้ ตั้งแต่การออกแบบจนถึงการสื่อสาร',
    heroParagraph1: (name) =>
      `${name} ก่อตั้งขึ้นเพื่อตอบโจทย์อุตสาหกรรมพลังงานของประเทศไทย เราเป็นผู้แทนจำหน่ายอุปกรณ์มิเตอร์ไฟฟ้าและอุปกรณ์สื่อสารระดับโลก พร้อมให้บริการครบวงจร ตั้งแต่ที่ปรึกษา ออกแบบ จัดหา ติดตั้ง และซ่อมบำรุง`,
    heroParagraph2:
      'ทีมวิศวกรของเราเชี่ยวชาญในงาน TOU Meters, Power Quality Analyzer, Meter Box, Communication Box และระบบสื่อสารสมาร์ทมิเตอร์ สำหรับโครงการโรงไฟฟ้า, โซลาร์, รูฟท็อป และโซลาร์ฟาร์มลอยน้ำ',
    heroImageAlt: 'แผงโซลาร์เซลล์ในโครงการโซลาร์ฟาร์มที่แอดวานซ์ กริด ให้บริการอุปกรณ์มิเตอร์',
    heroSecondaryCta: 'ดูบริการของเรา →',
    principlesHeading: 'แนวทางการทำงานของเรา',
    principlesLede: 'ทำงานด้วยความซื่อสัตย์ จริงใจ รวดเร็ว และตรงต่อเวลา',
    principles: [
      {
        title: 'ซื่อสัตย์ & จริงใจ',
        desc: 'ให้คำแนะนำตามความเหมาะสมของโครงการจริง ไม่ขายเกินความจำเป็น',
      },
      {
        title: 'รวดเร็ว & ตรงต่อเวลา',
        desc: 'ตอบกลับและส่งมอบงานตามกำหนด เพื่อไม่ให้โครงการของลูกค้าล่าช้า',
      },
    ],
    brandsEyebrow: 'แบรนด์ที่เราเป็นตัวแทน',
    brandsHeading: 'ผู้ผลิตชั้นนำของโลก ในมือคุณ',
    brandsLede:
      'เราคัดเลือกแบรนด์ที่ได้รับการยอมรับในตลาดสาธารณูปโภคไฟฟ้าระดับโลก — ทุกแบรนด์มีการรับรองมาตรฐานสากลและพร้อมรองรับงาน Tariff ของการไฟฟ้าไทย',
    foundedLabel: 'ก่อตั้ง',
    ctaHeading: 'อยากพูดคุยเกี่ยวกับโครงการของคุณ?',
    ctaLabel: 'ติดต่อเรา →',
  },
  en: {
    metaTitle: 'About Us',
    metaDescription:
      "Advanced Grid Co., Ltd. was founded to serve Thailand's energy industry — a distributor of world-class electricity metering and communication equipment, offering an end-to-end service.",
    heroEyebrow: 'About Us',
    heroHeading: 'Reliable engineering, from design through to communication',
    heroParagraph1: (name) =>
      `${name} was founded to serve Thailand's energy industry. We are a distributor of world-class electricity metering and communication equipment, offering an end-to-end service — from consulting and design to sourcing, installation and maintenance.`,
    heroParagraph2:
      'Our engineering team specializes in TOU meters, power quality analyzers, meter boxes, communication boxes, and smart-meter communication systems for power plant, solar, rooftop and floating solar farm projects.',
    heroImageAlt: 'Solar panels at a solar farm project served by Advanced Grid metering equipment',
    heroSecondaryCta: 'See Our Services →',
    principlesHeading: 'How We Work',
    principlesLede: 'We work with honesty, sincerity, speed, and punctuality.',
    principles: [
      {
        title: 'Honest & Sincere',
        desc: 'We advise based on what your project actually needs — never overselling.',
      },
      {
        title: 'Fast & Punctual',
        desc: 'We respond and deliver on schedule, so your project is never held up.',
      },
    ],
    brandsEyebrow: 'Brands We Represent',
    brandsHeading: 'The world’s leading manufacturers, in your hands',
    brandsLede:
      'We select brands recognized across the global electric-utility market — every brand carries international certification and is ready to support Thai utility tariff requirements.',
    foundedLabel: 'Founded',
    ctaHeading: 'Want to talk about your project?',
    ctaLabel: 'Contact Us →',
  },
  zh: {
    metaTitle: '关于我们',
    metaDescription:
      'Advanced Grid Co., Ltd. 因泰国能源产业的需求而创立，是世界级电力计量与通信设备的经销商，提供一站式服务。',
    heroEyebrow: '关于我们',
    heroHeading: '值得信赖的工程能力，从设计到通信一以贯之',
    heroParagraph1: (name) =>
      `${name} 因泰国能源产业的需求而创立，是世界级电力计量与通信设备的经销商，提供从咨询、设计、采购到安装与维护的一站式服务。`,
    heroParagraph2:
      '我们的工程团队专精于 TOU 电表、电能质量分析仪、计量箱、通信箱及智能电表通信系统，服务于发电厂、太阳能、屋顶光伏及浮动太阳能电站项目。',
    heroImageAlt: '太阳能电站项目中的光伏板，Advanced Grid 为此类项目提供计量设备',
    heroSecondaryCta: '查看我们的服务 →',
    principlesHeading: '我们的工作理念',
    principlesLede: '以诚实、真诚、快速、准时的态度开展工作。',
    principles: [
      {
        title: '诚实与真诚',
        desc: '根据项目实际需求提供建议，绝不过度销售。',
      },
      {
        title: '快速与准时',
        desc: '按时回应与交付，确保客户项目不因延误受阻。',
      },
    ],
    brandsEyebrow: '我们代理的品牌',
    brandsHeading: '世界领先制造商，尽在您手',
    brandsLede:
      '我们精选在全球电力公用事业市场获得认可的品牌——每个品牌均通过国际标准认证，并可满足泰国电力公司的电价计量要求。',
    foundedLabel: '成立于',
    ctaHeading: '想聊聊您的项目吗？',
    ctaLabel: '联系我们 →',
  },
};
