import HeroCarousel from '@/components/home/HeroCarousel';
import BrandStory from '@/components/home/BrandStory';
import CoreAdvantages from '@/components/home/CoreAdvantages';
import ProjectShowcase from '@/components/home/ProjectShowcase';
import BusinessSectors from '@/components/home/BusinessSectors';
import Honors from '@/components/home/Honors';
import CTABanner from '@/components/home/CTABanner';

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '中梦集团 ZOMER',
    legalName: '安徽中梦人才服务集团有限公司',
    url: 'https://zomergroup.com',
    description: '中国人才全周期服务引领者。30000+套人才公寓，覆盖皖浙8城16项目。',
    slogan: '让人才，在城市生长',
    foundingDate: '2008',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '漳河路7号',
      addressLocality: '芜湖市',
      addressRegion: '安徽',
      country: 'CN',
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <HeroCarousel />
      <CoreAdvantages />
      <BrandStory />
      <ProjectShowcase />
      <BusinessSectors />
      <Honors />
      <CTABanner />
    </>
  );
}
