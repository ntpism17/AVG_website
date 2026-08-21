import type { Locale } from '../locales';

export interface ContactThankYouCopy {
  metaTitle: string;
  metaDescription: (name: string) => string;
  checkIconLabel: string;
  heading: string;
  lede: string;
  urgentHeading: string;
  phoneLabel: string;
  emailLabel: string;
  backHome: string;
  viewAllProducts: string;
}

export const CONTACT_THANK_YOU_COPY: Record<Locale, ContactThankYouCopy> = {
  th: {
    metaTitle: 'ได้รับข้อความของคุณแล้ว',
    metaDescription: (name) =>
      `ขอบคุณที่ติดต่อ${name} เราได้รับข้อความของคุณแล้ว และจะติดต่อกลับภายใน 1 วันทำการ`,
    checkIconLabel: 'ส่งสำเร็จ',
    heading: 'ได้รับข้อความของคุณแล้ว',
    lede: 'ขอบคุณที่ติดต่อ Advanced Grid ทีมงานของเราจะตรวจสอบรายละเอียดและติดต่อกลับภายใน 1 วันทำการ',
    urgentHeading: 'ต้องการติดต่อเร่งด่วน?',
    phoneLabel: 'โทรศัพท์:',
    emailLabel: 'อีเมล:',
    backHome: 'กลับหน้าแรก',
    viewAllProducts: 'ดูผลิตภัณฑ์ทั้งหมด',
  },
  en: {
    metaTitle: 'We’ve received your message',
    metaDescription: (name) =>
      `Thank you for contacting ${name}. We have received your message and will get back to you within 1 business day.`,
    checkIconLabel: 'Submitted successfully',
    heading: 'We’ve received your message',
    lede: 'Thank you for contacting Advanced Grid. Our team will review your details and get back to you within 1 business day.',
    urgentHeading: 'Need to reach us urgently?',
    phoneLabel: 'Phone:',
    emailLabel: 'Email:',
    backHome: 'Back to home',
    viewAllProducts: 'View all products',
  },
  zh: {
    metaTitle: '我们已收到您的留言',
    metaDescription: (name) => `感谢您联系 ${name}，我们已收到您的留言，将在 1 个工作日内回复。`,
    checkIconLabel: '提交成功',
    heading: '我们已收到您的留言',
    lede: '感谢您联系 Advanced Grid，我们的团队会核实您的信息，并在 1 个工作日内与您联系。',
    urgentHeading: '需要紧急联系我们？',
    phoneLabel: '电话：',
    emailLabel: '电子邮箱：',
    backHome: '返回首页',
    viewAllProducts: '查看所有产品',
  },
};
