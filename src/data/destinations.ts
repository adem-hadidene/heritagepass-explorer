import type { TranslationKey } from '@/i18n/translations';

export interface Destination {
  id: string;
  city: string;
  cityAr: string;
  monument: string;
  monumentAr: string;
  monumentEn: string;
  country: 'tunisia' | 'algeria';
  tags: TranslationKey[];
  image: string;
  description: {
    fr: string;
    en: string;
    ar: string;
  };
}

export const destinations: Destination[] = [
  {
    id: 'kairouan-mosque',
    city: 'Kairouan',
    cityAr: 'القيروان',
    monument: 'Grande Mosquée Okba Ibn Nafaa',
    monumentEn: 'Great Mosque of Uqba',
    monumentAr: 'جامع عقبة بن نافع',
    country: 'tunisia',
    tags: ['dest_history', 'dest_spirituality', 'dest_unesco'],
    image: 'https://images.unsplash.com/photo-1590071089561-52f7e5f4fc7f?w=800&auto=format',
    description: {
      fr: 'La Grande Mosquée de Kairouan, fondée en 670, est l\'un des plus importants monuments islamiques d\'Afrique du Nord.',
      en: 'The Great Mosque of Kairouan, founded in 670, is one of the most important Islamic monuments in North Africa.',
      ar: 'جامع القيروان الكبير، الذي تأسس عام 670، هو أحد أهم المعالم الإسلامية في شمال أفريقيا.',
    },
  },
  {
    id: 'kairouan-bassins',
    city: 'Kairouan',
    cityAr: 'القيروان',
    monument: 'Bassins des Aghlabides',
    monumentEn: 'Aghlabid Basins',
    monumentAr: 'أحواض الأغالبة',
    country: 'tunisia',
    tags: ['dest_engineering', 'dest_relaxation'],
    image: 'https://images.unsplash.com/photo-1553899017-0f1d823ebe57?w=800&auto=format',
    description: {
      fr: 'Les Bassins des Aghlabides sont un chef-d\'œuvre d\'ingénierie hydraulique du IXe siècle.',
      en: 'The Aghlabid Basins are a masterpiece of 9th-century hydraulic engineering.',
      ar: 'أحواض الأغالبة هي تحفة من الهندسة المائية في القرن التاسع.',
    },
  },
  {
    id: 'zaghouan-temple',
    city: 'Zaghouan',
    cityAr: 'زغوان',
    monument: 'Temple des Eaux',
    monumentEn: 'Water Temple',
    monumentAr: 'معبد المياه',
    country: 'tunisia',
    tags: ['dest_nature', 'dest_hiking'],
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format',
    description: {
      fr: 'Le Temple des Eaux de Zaghouan alimentait l\'aqueduc romain de Carthage.',
      en: 'The Water Temple of Zaghouan fed the Roman aqueduct to Carthage.',
      ar: 'معبد المياه في زغوان كان يغذي القناة الرومانية إلى قرطاج.',
    },
  },
  {
    id: 'siliana-makthar',
    city: 'Siliana',
    cityAr: 'سليانة',
    monument: 'Site de Makthar',
    monumentEn: 'Makthar Site',
    monumentAr: 'موقع مكثر',
    country: 'tunisia',
    tags: ['dest_roman', 'dest_adventure'],
    image: 'https://images.unsplash.com/photo-1564507592520-645351b58ece?w=800&auto=format',
    description: {
      fr: 'Makthar abrite des ruines romaines et numides exceptionnelles.',
      en: 'Makthar hosts exceptional Roman and Numidian ruins.',
      ar: 'مكثر تحتضن آثاراً رومانية ونوميدية استثنائية.',
    },
  },
  {
    id: 'beja-dougga',
    city: 'Béja (Thugga)',
    cityAr: 'باجة (دقة)',
    monument: 'Dougga',
    monumentEn: 'Dougga',
    monumentAr: 'دقة',
    country: 'tunisia',
    tags: ['dest_roman', 'dest_unesco', 'dest_must_see'],
    image: 'https://images.unsplash.com/photo-1568322503652-5301a5bb2784?w=800&auto=format',
    description: {
      fr: 'Dougga est le site archéologique romain le mieux conservé d\'Afrique du Nord, classé UNESCO.',
      en: 'Dougga is the best-preserved Roman archaeological site in North Africa, UNESCO-listed.',
      ar: 'دقة هي أفضل موقع أثري روماني محفوظ في شمال أفريقيا، مصنف في اليونسكو.',
    },
  },
  {
    id: 'gabes-chenini',
    city: 'Gabès',
    cityAr: 'قابس',
    monument: 'Chenini (Oasis maritime)',
    monumentEn: 'Chenini (Maritime Oasis)',
    monumentAr: 'شنيني (واحة بحرية)',
    country: 'tunisia',
    tags: ['dest_unique', 'dest_ecosystem'],
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&auto=format',
    description: {
      fr: 'Gabès abrite la dernière oasis maritime de Méditerranée.',
      en: 'Gabès is home to the last maritime oasis in the Mediterranean.',
      ar: 'قابس تحتضن آخر واحة بحرية في البحر الأبيض المتوسط.',
    },
  },
  {
    id: 'batna-timgad',
    city: 'Batna (Timgad)',
    cityAr: 'باتنة (تيمقاد)',
    monument: 'Arc de Trajan',
    monumentEn: "Trajan's Arch",
    monumentAr: 'قوس تراجان',
    country: 'algeria',
    tags: ['dest_pompei', 'dest_unesco'],
    image: 'https://images.unsplash.com/photo-1583149577728-b00b9d0ba8e2?w=800&auto=format',
    description: {
      fr: 'Timgad, la "Pompéi de l\'Afrique", est une cité romaine remarquablement conservée.',
      en: 'Timgad, "Africa\'s Pompeii", is a remarkably preserved Roman city.',
      ar: 'تيمقاد، "بومبي أفريقيا"، مدينة رومانية محفوظة بشكل رائع.',
    },
  },
  {
    id: 'setif-djemila',
    city: 'Sétif (Djemila)',
    cityAr: 'سطيف (جميلة)',
    monument: 'Forum de Cuicul',
    monumentEn: 'Forum of Cuicul',
    monumentAr: 'منتدى كويكول',
    country: 'algeria',
    tags: ['dest_mountain', 'dest_panorama'],
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&auto=format',
    description: {
      fr: 'Djemila est une ancienne cité romaine nichée dans les montagnes.',
      en: 'Djemila is an ancient Roman city nestled in the mountains.',
      ar: 'جميلة مدينة رومانية قديمة تقع في الجبال.',
    },
  },
  {
    id: 'tipaza',
    city: 'Tipaza',
    cityAr: 'تيبازة',
    monument: 'Basilique de Sainte-Salsa',
    monumentEn: 'Basilica of Saint Salsa',
    monumentAr: 'كنيسة القديسة سالسا',
    country: 'algeria',
    tags: ['dest_seaside', 'dest_romance'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format',
    description: {
      fr: 'Tipaza offre des ruines romaines spectaculaires au bord de la Méditerranée.',
      en: 'Tipaza offers spectacular Roman ruins by the Mediterranean Sea.',
      ar: 'تيبازة تقدم آثاراً رومانية رائعة على شاطئ البحر الأبيض المتوسط.',
    },
  },
  {
    id: 'ghardaia',
    city: 'Ghardaïa',
    cityAr: 'غرداية',
    monument: 'Ksar de Beni Isguen',
    monumentEn: 'Ksar of Beni Isguen',
    monumentAr: 'قصر بني يزقن',
    country: 'algeria',
    tags: ['dest_saharan', 'dest_unesco'],
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&auto=format',
    description: {
      fr: 'Ghardaïa et sa vallée du M\'Zab sont un chef-d\'œuvre d\'architecture saharienne.',
      en: 'Ghardaïa and its M\'Zab Valley are a masterpiece of Saharan architecture.',
      ar: 'غرداية ووادي مزاب تحفة من العمارة الصحراوية.',
    },
  },
  {
    id: 'sidi-bel-abbes',
    city: 'Sidi Bel Abbès',
    cityAr: 'سيدي بلعباس',
    monument: 'Le Petit Paris',
    monumentEn: 'The Little Paris',
    monumentAr: 'باريس الصغيرة',
    country: 'algeria',
    tags: ['dest_colonial', 'dest_gardens'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&auto=format',
    description: {
      fr: 'Sidi Bel Abbès, surnommée "Le Petit Paris", charme par son architecture coloniale.',
      en: 'Sidi Bel Abbès, nicknamed "The Little Paris", charms with its colonial architecture.',
      ar: 'سيدي بلعباس، الملقبة بـ"باريس الصغيرة"، تسحر بعمارتها الاستعمارية.',
    },
  },
];
