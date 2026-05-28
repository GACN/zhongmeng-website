import { routing } from '@/i18n/routing';

const SITE_URL = 'https://zomergroup.com';

export function buildAlternates(locale: string, path: string = '') {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `/${l}${path}`;
  }
  languages['x-default'] = `/zh${path}`;
  return {
    canonical: `/${locale}${path}`,
    languages,
  };
}

export const SITE = {
  url: SITE_URL,
  name: '中梦集团 ZOMER',
  legalName: '安徽中梦人才服务集团有限公司',
  foundingDate: '2008',
  email: 'info@zomergroup.com',
  phone: '0553-5916666',
  whatsapp: '',
  address: {
    street: 'No.7 Zhanghe Road, Yijiang District',
    city: 'Wuhu',
    region: 'Anhui',
    country: 'CN',
    postalCode: '241000',
  },
  sameAs: [] as string[],
};
