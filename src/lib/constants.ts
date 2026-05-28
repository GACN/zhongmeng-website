// ─── Company Identity ────────────────────────────────────────

export const COMPANY_NAME = "ZOMER";
export const COMPANY_NAME_CN = "中梦集团";
export const SLOGAN_EN = "Let Talents Grow in Cities";
export const SLOGAN_CN = "让人才，在城市生长";

// ─── Navigation ──────────────────────────────────────────────

export interface NavLink {
  tKey: string;
  href?: string;
  children?: NavLink[];
}

export const NAV_LINKS: NavLink[] = [
  { tKey: "home", href: "/" },
  {
    tKey: "services",
    children: [
      { tKey: "servicesLinks.talentHousing", href: "/talent-housing" },
      { tKey: "servicesLinks.industry", href: "/industry-park" },
      { tKey: "servicesLinks.assetRevitalization", href: "/asset-revitalization" },
      { tKey: "servicesLinks.future", href: "/future-layout" },
    ],
  },
  {
    tKey: "about",
    children: [
      { tKey: "aboutLinks.company", href: "/about" },
      { tKey: "aboutLinks.history", href: "/about#history" },
      { tKey: "aboutLinks.honors", href: "/about#honors" },
      { tKey: "aboutLinks.party", href: "/about#party" },
    ],
  },
  { tKey: "projects", href: "/projects" },
  { tKey: "news", href: "/news" },
];

// ─── Social Links ────────────────────────────────────────────

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const SOCIAL_LINKS: SocialLink[] = [];

// ─── Contact Info ────────────────────────────────────────────

export const CONTACT_INFO = {
  email: "info@zomergroup.com",
  phone: "0553-5916666",
  whatsapp: "",
  address: {
    en: "No.7 Zhanghe Road, Yijiang District, Wuhu, Anhui, China",
    cn: "安徽省芜湖市弋江区高新技术产业开发区漳河路7号",
  },
  storeAddress: {
    en: "ZOMER Tower, Wuhu High-tech Zone",
    cn: "芜湖市高新区中梦集团大厦（紫云英人才大厦）",
  },
} as const;

// ─── Brand Colors (中梦集团) ────────────────────────────────

export const BRAND_COLORS = {
  deepBlue: "#082D59",
  gold: "#C79943",
  white: "#FFFFFF",
  dark: "#1a1a2e",
  lightBlue: "#E8F0FE",
  lightGold: "#FDF6ED",
} as const;
