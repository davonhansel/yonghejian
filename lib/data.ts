type Locale = 'en' | 'zh';

type Localized<T> = Record<Locale, T>;

export interface LocalizedProject {
  id: string;
  image: string;
  title: Localized<string>;
  category: Localized<string>;
  description: Localized<string>;
  tags: Localized<string[]>;
  detailDescription: Localized<string>;
  highlights: Localized<string[]>;
}

export interface LocalizedTestimonial {
  name: Localized<string>;
  title: Localized<string>;
  company: Localized<string>;
  quote: Localized<string>;
  avatar: string;
}

export interface LocalizedTeamMember {
  name: Localized<string>;
  title: Localized<string>;
  bio: Localized<string>;
  image: string;
}

export interface LocalizedPartner {
  name: Localized<string>;
  description: Localized<string>;
  logo: string;
  testimonial: Localized<string>;
}

export interface LocalizedService {
  title: Localized<string>;
  description: Localized<string>;
  features: Localized<string[]>;
}

export const projects: LocalizedProject[] = [
  {
    id: 'nova-finance',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: {
      en: 'Precision Hardware Mold R&D',
      zh: '精密五金模具研发',
    },
    category: {
      en: 'Mold Design',
      zh: '模具设计开发',
    },
    description: {
      en: 'Custom precision hardware mold design and manufacturing, tailored for high-end mechanical and electronic equipment component production.',
      zh: '定制化精密五金模具设计与制造，适配高端机械、电子设备零部件生产需求。',
    },
    tags: {
      en: ['Mold Design', 'Precision Manufacturing', 'Hardware Processing', 'Industrial Molds'],
      zh: ['模具设计', '精密制造', '五金加工', '工业模具'],
    },
    detailDescription: {
      en: 'We provide comprehensive precision hardware mold design and development services. Our team leverages advanced CAD/CAM software and simulation tools to create high-precision molds that meet the most demanding industrial standards. From concept to final mold, we ensure every detail is optimized for performance, durability, and cost-effectiveness.',
      zh: '我们提供全方位的精密五金模具设计开发服务。团队运用先进的CAD/CAM软件和仿真工具，打造满足最严苛工业标准的高精度模具。从概念到成品模具，确保每个细节都针对性能、耐用性和成本效益进行优化。',
    },
    highlights: {
      en: ['Mold precision improved to 0.01mm', 'Production lead time reduced by 30%', 'Mold lifespan extended to over 500,000 cycles'],
      zh: ['模具加工精度提升至0.01mm', '生产交付周期缩短30%', '模具使用寿命提升至50万次以上'],
    },
  },
  {
    id: 'eco-habitat',
    image: 'https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: {
      en: 'Hardware Component Mass Production',
      zh: '五金组件规模化生产',
    },
    category: {
      en: 'Hardware Manufacturing',
      zh: '五金加工制造',
    },
    description: {
      en: 'High-precision hardware component mass production, meeting the component supply needs of machinery and electronics industries.',
      zh: '高精度五金组件批量生产，满足机械设备、电子电器的零部件配套需求。',
    },
    tags: {
      en: ['Hardware Components', 'Mass Production', 'Precision Machining', 'Industrial Parts'],
      zh: ['五金组件', '批量生产', '精密加工', '工业配件'],
    },
    detailDescription: {
      en: 'Our mass production facility is equipped with advanced CNC machining centers and automated production lines capable of delivering high-volume precision hardware components with consistent quality. We serve clients across machinery, electronics, and automotive industries with reliable supply chain solutions.',
      zh: '我们的规模化生产基地配备先进的数控加工中心和自动化生产线，能够以稳定质量交付大批量精密五金组件。为机械设备、电子电器和汽车等行业客户提供可靠的供应链解决方案。',
    },
    highlights: {
      en: ['Automated production lines', 'Consistent quality across batches', 'Flexible order quantities'],
      zh: ['自动化生产线', '批次间品质一致', '灵活订单数量'],
    },
  },
  {
    id: 'pulse-fitness',
    image: 'https://images.pexels.com/photos/1103242/pexels-photo-1103242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: {
      en: 'Industrial Machinery Customization',
      zh: '工业机械设备定制',
    },
    category: {
      en: 'Equipment R&D',
      zh: '设备研发销售',
    },
    description: {
      en: 'In-house R&D and production of industrial machinery, providing customized equipment solutions.',
      zh: '自主研发、生产工业加工机械设备，提供定制化设备解决方案。',
    },
    tags: {
      en: ['Machinery', 'Custom R&D', 'Industrial Equipment', 'Production Equipment'],
      zh: ['机械设备', '定制研发', '工业设备', '生产设备'],
    },
    detailDescription: {
      en: 'We design and manufacture custom industrial machinery tailored to specific production needs. Our engineering team works closely with clients to develop equipment that optimizes their manufacturing processes, improves efficiency, and reduces operational costs. Full installation, commissioning, and after-sales support included.',
      zh: '我们根据特定生产需求设计和制造定制工业机械设备。工程团队与客户紧密合作，开发优化制造流程、提高效率并降低运营成本的设备。提供完整的安装、调试和售后支持。',
    },
    highlights: {
      en: ['Custom machinery design', 'Full installation and commissioning', 'Ongoing technical support'],
      zh: ['定制设备设计', '完整安装调试', '持续技术支持'],
    },
  },
  {
    id: 'artisan-cafe',
    image: 'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: {
      en: 'Precision Hardware Custom Processing',
      zh: '精密五金定制加工',
    },
    category: {
      en: 'Custom Processing',
      zh: '定制加工服务',
    },
    description: {
      en: 'Non-standard precision hardware parts custom processing with strict quality control for multi-industry applications.',
      zh: '承接非标精密五金件定制加工，严格把控精度与品质，适配多行业需求。',
    },
    tags: {
      en: ['Non-standard Custom', 'Precision Machining', 'Hardware Parts', 'Custom Manufacturing'],
      zh: ['非标定制', '精密加工', '五金配件', '来图加工'],
    },
    detailDescription: {
      en: 'We specialize in custom processing of non-standard precision hardware parts. Our team can work from drawings or samples to produce parts that meet exact specifications. With advanced equipment and rigorous quality control, we ensure every part meets the highest standards of precision and reliability.',
      zh: '我们专注于非标精密五金件的定制加工。团队可根据图纸或样品生产符合精确规格的零件。凭借先进设备和严格的质量控制，确保每个零件都达到最高精度和可靠性标准。',
    },
    highlights: {
      en: ['Custom parts from drawings or samples', 'Multi-industry compatibility', 'Rigorous quality inspection'],
      zh: ['来图/来样定制', '多行业适配', '严格质检流程'],
    },
  },
  {
    id: 'nomad-travel',
    image: 'https://images.pexels.com/photos/7625308/pexels-photo-7625308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: {
      en: 'Hardware Import & Export Trade',
      zh: '五金产品进出口贸易',
    },
    category: {
      en: 'International Trade',
      zh: '国际贸易服务',
    },
    description: {
      en: 'Import and export of hardware molds, components, and equipment with full technical service support.',
      zh: '开展五金模具、组件、设备的货物进出口与技术进出口业务。',
    },
    tags: {
      en: ['Import & Export', 'Hardware Export', 'Technology Transfer', 'International Trade'],
      zh: ['进出口贸易', '五金出口', '技术进出口', '国际贸易'],
    },
    detailDescription: {
      en: 'Our international trade division handles the full spectrum of import and export services for hardware products. From customs clearance to logistics coordination, we provide end-to-end solutions for global clients. Our team is well-versed in international trade regulations and ensures seamless cross-border transactions.',
      zh: '我们的国际贸易部门处理五金产品进出口的全方位服务。从报关到物流协调，为全球客户提供端到端解决方案。团队精通国际贸易法规，确保顺畅的跨境交易。',
    },
    highlights: {
      en: ['Full import/export service', 'Customs clearance support', 'Global logistics coordination'],
      zh: ['全流程进出口服务', '报关报检支持', '全球物流协调'],
    },
  },
  {
    id: 'summit-events',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: {
      en: 'Industrial Hardware Total Solutions',
      zh: '工业五金整体解决方案',
    },
    category: {
      en: 'Technical Services',
      zh: '技术服务',
    },
    description: {
      en: 'One-stop hardware solutions from mold design to component production and equipment integration for manufacturing enterprises.',
      zh: '为制造企业提供从模具设计到组件生产、设备配套的一站式五金解决方案。',
    },
    tags: {
      en: ['One-stop Service', 'Industrial Solutions', 'Hardware Integration', 'Technical Support'],
      zh: ['一站式服务', '工业解决方案', '五金配套', '技术支持'],
    },
    detailDescription: {
      en: 'We offer comprehensive total solutions for industrial hardware needs, integrating mold design, component manufacturing, and equipment supply into a seamless service package. Our approach ensures consistency, quality, and efficiency across the entire production chain, helping clients reduce complexity and accelerate time-to-market.',
      zh: '我们提供全面的工业五金整体解决方案，将模具设计、组件制造和设备供应整合为无缝服务包。我们的方法确保整个生产链的一致性、质量和效率，帮助客户降低复杂性并加速产品上市。',
    },
    highlights: {
      en: ['End-to-end integration', 'Reduced supply chain complexity', 'Faster time-to-market'],
      zh: ['端到端整合', '降低供应链复杂度', '加速产品上市'],
    },
  },
];

export const testimonials: LocalizedTestimonial[] = [
 {
    name: { en: 'Mr. Chen', zh: '陈厂长' },
    title: { en: 'Production Director', zh: '生产总监' },
    company: { en: 'Leading Comm. Electronics Manufacturer', zh: '头部通信终端制造企业' },
    quote: {
      en: "The precision molds and stamping hardware parts supplied by Yonghejian reach micron-level tolerance, stable yield rate greatly optimized our mass production efficiency. They are our long-term certified precision hardware supporting supplier.",
      zh: '永和健供应的精密模具与冲压五金件可实现微米级公差管控，稳定良率大幅优化我司量产效率，是我们长期认证的精密五金配套供应商。',
    },
    avatar: 'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: { en: 'Ms. Li', zh: '李总监' },
    title: { en: 'Procurement Manager', zh: '采购总监' },
    company: { en: 'High-End Electronics Group', zh: '国内高端电子制造集团' },
    quote: {
      en: "Consistent part quality, on-time delivery for bulk overseas orders. Their complete set of imported precision processing equipment ensures stable batch quality, fully fits our global supply chain demands.",
      zh: '零部件品质统一稳定，大批量海外订单均可准时交付；全系列进口精密加工设备保障批量品质一致性，完全适配我司全球供应链需求。',
    },
    avatar: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: { en: 'Mr. Wang', zh: '王总经理' },
    title: { en: 'General Manager', zh: '总经理' },
    company: { en: 'Precision Automation Equipment Maker', zh: '国内精密自动化设备企业' },
    quote: {
      en: "Yonghejian provides integrated one-stop service from mold R&D, stamping processing to precision testing. Strong technical team and thoughtful after-sales service solve our customized hardware demands perfectly.",
      zh: '永和健可提供模具研发、冲压加工、精密检测一体化一站式服务，技术团队实力雄厚，售后响应及时，完美解决我司各类定制化五金配套需求。',
    },
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const team: LocalizedTeamMember[] = [
  {
    name: { en: 'Liu Bo', zh: '刘波' },
    title: { en: 'Founder & General Manager', zh: '创始人&总经理' },
    bio: {
      en: 'Over 20 years of experience in the precision hardware industry, leading the team in mold R&D and precision manufacturing, founding Yonghejian and building a one-stop hardware manufacturing service system.',
      zh: '深耕精密五金行业20余年，带领团队专注模具研发与精密制造，创立永和健并打造一站式五金制造服务体系。',
    },
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: { en: 'Liu Yong', zh: '刘勇' },
    title: { en: 'Technical Director', zh: '技术总监' },
    bio: {
      en: 'Expert in precision hardware processing techniques and equipment R&D. Responsible for production technology control and process optimization, ensuring precision and production efficiency.',
      zh: '精通精密五金加工工艺与设备研发，负责生产技术把控、工艺优化，保障产品精度与生产效率。',
    },
    image: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: { en: 'Zhang Wei', zh: '张伟' },
    title: { en: 'Mold Design Director', zh: '模具设计总监' },
    bio: {
      en: '15 years of mold design experience, specializing in precision hardware mold R&D, skilled in non-standard mold customization and structural optimization design.',
      zh: '15年模具设计经验，专注精密五金模具研发，擅长非标模具定制与结构优化设计。',
    },
    image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: { en: 'Lin Mei', zh: '林梅' },
    title: { en: 'Foreign Trade Manager', zh: '外贸部经理' },
    bio: {
      en: 'Responsible for import and export business, proficient in international trade procedures, providing efficient and compliant overseas business对接 services for clients.',
      zh: '负责货物与技术进出口业务，精通国际贸易流程，为客户提供高效、合规的海外业务对接服务。',
    },
    image: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const partners: LocalizedPartner[] = [
  {
    name: { en: 'Huagang Metal Materials', zh: '华钢金属材料' },
    description: {
      en: 'Premium domestic hardware raw material supplier, specializing in high-end mold steel and hardware profiles.',
      zh: '国内优质五金原材料供应商，专注高端模具钢、五金型材供应。',
    },
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=2',
    testimonial: {
      en: 'Long-term partnership with Yonghejian on raw material supply, jointly ensuring the quality and supply stability of hardware products.',
      zh: '与永和健长期合作原材料供应，双方携手保障五金产品的原料品质与供应稳定性。',
    },
  },
  {
    name: { en: 'Yuehai Machinery Equipment', zh: '粤海机械设备' },
    description: {
      en: 'Industrial processing equipment manufacturer focusing on precision machining equipment R&D and production.',
      zh: '工业加工设备制造商，专注精密加工设备研发与生产。',
    },
    logo: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=2',
    testimonial: {
      en: 'Collaborative development of customized production equipment, helping Yonghejian achieve automated upgrades in precision manufacturing.',
      zh: '双方合作研发定制化生产设备，助力永和健实现精密制造的自动化升级。',
    },
  },
  {
    name: { en: 'Global Foreign Trade Group', zh: '环球外贸集团' },
    description: {
      en: 'Comprehensive international trade enterprise, facilitating overseas market expansion for hardware products.',
      zh: '综合性国际贸易企业，助力五金产品海外市场拓展。',
    },
    logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=2',
    testimonial: {
      en: 'Partnering with Yonghejian on import/export trade, successfully promoting their hardware products to Southeast Asian and European markets.',
      zh: '携手永和健开展进出口贸易，成功将其五金产品推向东南亚、欧美市场。',
    },
  },
  {
    name: { en: 'Zhi Kong Automation', zh: '智控自动化' },
    description: {
      en: 'Industrial automation technology service provider offering smart production line transformation solutions.',
      zh: '工业自动化技术服务商，提供生产线智能化改造方案。',
    },
    logo: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=2',
    testimonial: {
      en: 'Building smart production lines for Yonghejian, significantly improving the precision and efficiency of hardware component production.',
      zh: '为永和健打造智能化生产线，大幅提升了五金组件的生产精度与效率。',
    },
  },
  {
    name: { en: 'Hengxin Testing Center', zh: '恒信检测中心' },
    description: {
      en: 'Third-party industrial product quality testing institution providing precision hardware testing services.',
      zh: '第三方工业产品质量检测机构，提供精密五金检测服务。',
    },
    logo: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=2',
    testimonial: {
      en: 'Providing full-process quality testing for Yonghejian products, helping build a high-quality hardware manufacturing brand.',
      zh: '为永和健产品提供全流程质量检测，助力企业打造高品质五金制造品牌。',
    },
  },
  {
    name: { en: 'East Asia Electronics Manufacturing', zh: '东亚电子制造' },
    description: {
      en: 'Large-scale electronics equipment manufacturer, long-term purchaser of precision hardware components and molds.',
      zh: '大型电子设备制造商，长期采购精密五金组件与模具。',
    },
    logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=2',
    testimonial: {
      en: "Yonghejian's customized hardware solutions perfectly match the precision component requirements of our electronic equipment.",
      zh: '永和健的定制化五金解决方案，完美匹配我们电子设备的精密配件需求。',
    },
  },
];

export const services: LocalizedService[] = [
  {
    title: {
      en: 'Precision Hardware Mold Design & Development',
      zh: '精密五金模具设计开发',
    },
    description: {
      en: 'Specializing in the design and development of high-precision hardware molds, supporting customized mold manufacturing for various industrial component production.',
      zh: '专注设计、研发高精度五金模具，支持定制化模具制造，适配各类工业零部件生产。',
    },
    features: {
      en: ['Custom Mold Design & R&D', 'High-Precision Industrial Mold Manufacturing', 'Mold Repair & Optimization', 'Non-standard Mold Structural Design', 'Mold Life & Precision Assurance'],
      zh: ['模具定制设计与研发', '高精度工业模具制造', '模具维修与优化升级', '非标模具结构设计', '模具寿命与精度保障'],
    },
  },
  {
    title: {
      en: 'Hardware Component Manufacturing',
      zh: '五金组件生产制造',
    },
    description: {
      en: 'Mass production of precision hardware components and parts with strict quality control, meeting multi-industry supply needs.',
      zh: '规模化生产精密五金组件、配件，严格把控加工精度，满足多行业配套需求。',
    },
    features: {
      en: ['Precision Hardware Batch Production', 'Non-standard Hardware Parts Custom Processing', 'Hardware Component Precision Testing', 'Surface Treatment & Process Optimization', 'Large-volume Delivery Assurance'],
      zh: ['精密五金件批量生产', '非标五金配件定制加工', '五金组件精度检测', '表面处理与工艺优化', '大批量交付保障'],
    },
  },
  {
    title: {
      en: 'Machinery Equipment R&D & Sales',
      zh: '机械设备研发销售',
    },
    description: {
      en: 'In-house design, production, and sales of industrial machinery, offering equipment customization and technical support services.',
      zh: '自主设计、生产、销售工业机械设备，提供设备定制与技术支持服务。',
    },
    features: {
      en: ['Industrial Processing Equipment R&D', 'Customized Machinery Production', 'Equipment Installation & Commissioning', 'After-sales Maintenance', 'Automation Equipment Upgrades'],
      zh: ['工业加工设备研发', '定制化机械设备生产', '设备安装与调试', '设备售后维护', '自动化设备升级'],
    },
  },
  {
    title: {
      en: 'Import & Export Trade',
      zh: '货物与技术进出口',
    },
    description: {
      en: 'Professional import and export of hardware products, machinery equipment, and mold/processing technology.',
      zh: '专业开展五金产品、机械设备的货物进出口，及模具/加工技术进出口业务。',
    },
    features: {
      en: ['Hardware Product Export', 'Production Equipment Import Agency', 'Processing Technology Import/Export', 'International Trade Customs Clearance', 'Overseas Client Business对接'],
      zh: ['五金产品海外出口', '生产设备进口代理', '加工技术进出口服务', '国际贸易报关报检', '海外客户业务对接'],
    },
  },
];

export function getLocalizedProject(project: LocalizedProject, locale: Locale) {
  return {
    id: project.id,
    image: project.image,
    title: project.title[locale],
    category: project.category[locale],
    description: project.description[locale],
    tags: project.tags[locale],
    detailDescription: project.detailDescription[locale],
    highlights: project.highlights[locale],
  };
}

export function getLocalizedTestimonial(testimonial: LocalizedTestimonial, locale: Locale) {
  return {
    name: testimonial.name[locale],
    title: testimonial.title[locale],
    company: testimonial.company[locale],
    quote: testimonial.quote[locale],
    avatar: testimonial.avatar,
  };
}

export function getLocalizedTeamMember(member: LocalizedTeamMember, locale: Locale) {
  return {
    name: member.name[locale],
    title: member.title[locale],
    bio: member.bio[locale],
    image: member.image,
  };
}

export function getLocalizedPartner(partner: LocalizedPartner, locale: Locale) {
  return {
    name: partner.name[locale],
    description: partner.description[locale],
    logo: partner.logo,
    testimonial: partner.testimonial[locale],
  };
}

export function getLocalizedService(service: LocalizedService, locale: Locale) {
  return {
    title: service.title[locale],
    description: service.description[locale],
    features: service.features[locale],
  };
}