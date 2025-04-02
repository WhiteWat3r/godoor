export const doors = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `Дверь входная металлическая №${index + 1}`,
  price: `${15000 + index * 500}`,
  image:
    "https://avatars.mds.yandex.net/get-mpic/4955516/2a00000194df9a9b60683052654f0aaf325d/optimize",
  description:
    "Надежная входная дверь с современным дизайном и высоким уровнем безопасности.",
  specs: [
    "Металл 1.5мм",
    "Тепло- и шумоизоляция",
    "Надежный замок",
    "Антивандальное покрытие",
    "Регулируемые петли",
  ],
}));

export const entranceDoors = [
    {
        "id": 1,
        "name": "Прайм Антик медный / Кедр 860х2050 левая",
        "price": 21600,
        "variant": "Кедр",
        "innerImg": "src/assets/images/doors/catalog/image_1.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_2.jpg"
    },
    {
        "id": 2,
        "name": "Стоунвуд Скол камня блэк / Орех ноче тертона 850х2030 левая",
        "price": 52100,
        "variant": "Орех ноче тертона",
        "innerImg": "src/assets/images/doors/catalog/image_3.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_4.jpg"
    },
    {
        "id": 3,
        "name": "Прайм Букле графит / Белое дерево 860х2050 левая",
        "price": 21600,
        "variant": "Белое дерево",
        "innerImg": "src/assets/images/doors/catalog/image_5.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_6.jpg"
    },
    {
        "id": 4,
        "name": "Малахит Палм грин / Палм грин 850х2030 левая",
        "price": 54600,
        "variant": "Палм грин",
        "innerImg": "src/assets/images/doors/catalog/image_7.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_8.jpg"
    },
    {
        "id": 5,
        "name": "Токката Горький шоколад / Белый мат 850х2030 левая",
        "price": 50100,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_9.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_10.jpg"
    },
    {
        "id": 6,
        "name": "Брента Антрацит эмаль / Белая эмаль 870х2050 левая",
        "price": 81700,
        "variant": "Белая эмаль",
        "innerImg": "src/assets/images/doors/catalog/image_11.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_12.jpg"
    },
    {
        "id": 7,
        "name": "Адель Венге 860*2050 левая",
        "price": 26300,
        "variant": "Венге",
        "innerImg": "src/assets/images/doors/catalog/image_13.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_14.jpg"
    },
    {
        "id": 8,
        "name": "Вуд гранд Дуб бомот лофт / Дуб брашированный 850х2030 левая",
        "price": 47200,
        "variant": "Дуб брашированный",
        "innerImg": "src/assets/images/doors/catalog/image_15.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_16.jpg"
    },
    {
        "id": 9,
        "name": "Сириус черная шагрень / белый матовый 860х2050 левая",
        "price": 34300,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_17.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_18.jpg"
    },
    {
        "id": 10,
        "name": "Кварц черная шагрень / белый матовый 860х2050 левая",
        "price": 36900,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_19.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_20.jpg"
    },
    {
        "id": 11,
        "name": "Неаполь графит / белый матовый 860х2050 левая",
        "price": 32900,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_21.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_22.jpg"
    },
    {
        "id": 12,
        "name": "Парма Артвуд Темный орех / Белая эмаль 960х2050 левая",
        "price": 134900,
        "variant": "Белая эмаль",
        "innerImg": "src/assets/images/doors/catalog/image_23.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_24.jpg"
    },
    {
        "id": 13,
        "name": "Аваллон мет/мет меланж 850х2030 левая",
        "price": 50900,
        "variant": "Муар черный_Муар меланж",
        "innerImg": "src/assets/images/doors/catalog/image_25.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_26.jpg"
    },
    {
        "id": 14,
        "name": "Морион Шарли грин / Белый мат 850х2030 левая",
        "price": 50900,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_27.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_28.jpg"
    },
    {
        "id": 15,
        "name": "Нуар Кварц черный / Белый мат 850х2030 левая",
        "price": 38990,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_29.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_30.jpg"
    },
    {
        "id": 16,
        "name": "Дипломат Венге (860*2050) L",
        "price": 32300,
        "variant": "Венге",
        "innerImg": "src/assets/images/doors/catalog/image_31.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_32.jpg"
    },
    {
        "id": 17,
        "name": "Венеция 2 венге (870*2050)L",
        "price": 44990,
        "variant": "Венге",
        "innerImg": "src/assets/images/doors/catalog/image_33.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_34.jpg"
    },
    {
        "id": 18,
        "name": "Вуд гранд Дуб бомот лофт / Дуб брашированный 850х2030 левая",
        "price": 47200,
        "variant": "Дуб брашированный",
        "innerImg": "src/assets/images/doors/catalog/image_35.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_36.jpg"
    },
    {
        "id": 19,
        "name": "Кварц черная шагрень / белый матовый 860х2050 левая",
        "price": 36900,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_37.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_38.jpg"
    },
    {
        "id": 20,
        "name": "Неаполь графит / белый матовый 860х2050 левая",
        "price": 32900,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_39.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_40.jpg"
    },
    {
        "id": 21,
        "name": "Парма Артвуд Темный орех / Белая эмаль 960х2050 левая",
        "price": 134900,
        "variant": "Белая эмаль",
        "innerImg": "src/assets/images/doors/catalog/image_41.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_42.jpg"
    },
    {
        "id": 22,
        "name": "Аваллон мет/мет меланж 850х2030 левая",
        "price": 50900,
        "variant": "Муар черный_Муар меланж",
        "innerImg": "src/assets/images/doors/catalog/image_43.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_44.jpg"
    },
    {
        "id": 23,
        "name": "Морион Шарли грин / Белый мат 850х2030 левая",
        "price": 50900,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_45.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_46.jpg"
    },
    {
        "id": 24,
        "name": "Ллойд Муар меландж / Силк сноу 860х2050 левая",
        "price": 47400,
        "variant": "Силк Сноу",
        "innerImg": "src/assets/images/doors/catalog/image_47.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_48.jpg"
    },
    {
        "id": 25,
        "name": "Спарта Кварц черный / Белый мат 850х2030 левая",
        "price": 36900,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_49.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_50.jpg"
    },
    {
        "id": 26,
        "name": "Каталея Букле графит / Белый матовый 860х2050 левая",
        "price": 61600,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_51.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_52.jpg"
    },
    {
        "id": 27,
        "name": "Каталея Белая шагрень / Белый матовый 860х2050 левая",
        "price": 61600,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_53.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_54.jpg"
    },
    {
        "id": 28,
        "name": "Марморис Торос графит / Белый мат 850х2030 левая",
        "price": 49950,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_55.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_56.jpg"
    },
    {
        "id": 29,
        "name": "Нуар Кварц черный / Белый мат 850х2030 левая",
        "price": 38990,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_57.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_58.jpg"
    },
    {
        "id": 30,
        "name": "Аваллон мет/мет 850х2030 левая",
        "price": 55700,
        "variant": "Муар черный_Муар белый",
        "innerImg": "src/assets/images/doors/catalog/image_59.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_60.jpg"
    },
    {
        "id": 31,
        "name": "Дипломат Венге (860*2050) L",
        "price": 32300,
        "variant": "Венге",
        "innerImg": "src/assets/images/doors/catalog/image_61.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_62.jpg"
    },
    {
        "id": 32,
        "name": "Дипломат Венге Светлый (860*2050) L",
        "price": 32300,
        "variant": "Венге светлый",
        "innerImg": "src/assets/images/doors/catalog/image_63.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_64.jpg"
    },
    {
        "id": 33,
        "name": "Komfort Венге (1200*2050) L",
        "price": 39700,
        "variant": "Венге",
        "innerImg": "src/assets/images/doors/catalog/image_65.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_66.jpg"
    },
    {
        "id": 34,
        "name": "Дипломат Белый Ясень (860*2050) L",
        "price": 32300,
        "variant": "Белый Ясень",
        "innerImg": "src/assets/images/doors/catalog/image_67.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_68.jpg"
    },
    {
        "id": 35,
        "name": "Классик Термо антик медный / белый матовый 860х2050 левая",
        "price": 35300,
        "variant": "Белый Ясень",
        "innerImg": "src/assets/images/doors/catalog/image_69.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_70.jpg"
    },
    {
        "id": 36,
        "name": "Сибирь Термо 1 букле опал / белый матовый 860х2050 левая",
        "price": 36200,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_71.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_72.jpg"
    },
    {
        "id": 37,
        "name": "Вектор Антик медный / Лиственница темная 860х2050 левая",
        "price": 19600,
        "variant": "Лиственница темная",
        "innerImg": "src/assets/images/doors/catalog/image_73.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_74.jpg"
    },
    {
        "id": 38,
        "name": "Олива Олива софт / Белый матовый 960х2050 правая",
        "price": 42300,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_75.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_76.jpg"
    },
    {
        "id": 39,
        "name": "Графит Черный букле / Сандал белый 860х2050 левая",
        "price": 23600,
        "variant": "Сандал белый",
        "innerImg": "src/assets/images/doors/catalog/image_77.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_78.jpg"
    },
    {
        "id": 40,
        "name": "Перфекто Артвуд Английский орех / Белая эмаль 870х2050 левая",
        "price": 96600,
        "variant": "Белая эмаль",
        "innerImg": "src/assets/images/doors/catalog/image_79.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_80.jpg"
    },
    {
        "id": 41,
        "name": "Деканто Черный Букле / Белый Бархат 860х2050 левая",
        "price": 42400,
        "variant": "белый бархат",
        "innerImg": "src/assets/images/doors/catalog/image_81.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_82.jpg"
    },
    {
        "id": 42,
        "name": "Кредо Бетон Графит / Белый ясень 860х2050 левая",
        "price": 27100,
        "variant": "Белый Ясень",
        "innerImg": "src/assets/images/doors/catalog/image_83.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_84.jpg"
    },
    {
        "id": 43,
        "name": "Деканто Черный Букле / Серый Бархат 860х2050 левая",
        "price": 42400,
        "variant": "Серый бархат",
        "innerImg": "src/assets/images/doors/catalog/image_85.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_86.jpg"
    },
    {
        "id": 44,
        "name": "Дипломат Мореная Береза (860*2050) L",
        "price": 32300,
        "variant": "Мореная береза",
        "innerImg": "src/assets/images/doors/catalog/image_87.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_88.jpg"
    },
    {
        "id": 45,
        "name": "Стройсиб 1 Дуб беленный 860х2050 левая",
        "price": 12600,
        "variant": "Дуб беленный",
        "innerImg": "src/assets/images/doors/catalog/image_89.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_90.jpg"
    },
    {
        "id": 46,
        "name": "Дублин Букле графит / Ясень 860х2050 левая",
        "price": 26500,
        "variant": "Ясень",
        "innerImg": "src/assets/images/doors/catalog/image_91.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_92.jpg"
    },
    {
        "id": 47,
        "name": "Вектор Антик медный / Лиственница беленая 860х2050 левая",
        "price": 19600,
        "variant": "Лиственница беленая",
        "innerImg": "src/assets/images/doors/catalog/image_93.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_94.jpg"
    },
    {
        "id": 48,
        "name": "Венеция 2 сандал белый (1200*2050) L",
        "price": 63800,
        "variant": "Сандал белый",
        "innerImg": "src/assets/images/doors/catalog/image_95.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_96.jpg"
    },
    {
        "id": 49,
        "name": "Титул Артвуд Темный орех / Белая эмаль 870х2050 левая",
        "price": 109400,
        "variant": "Белая эмаль",
        "innerImg": "src/assets/images/doors/catalog/image_97.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_98.jpg"
    },
    {
        "id": 50,
        "name": "Комфорт Белый ясень (1200*2050) левая",
        "price": 39700,
        "variant": "Белый Ясень",
        "innerImg": "src/assets/images/doors/catalog/image_99.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_100.jpg"
    },
    {
        "id": 51,
        "name": "Аврора Венге (860*2050) L",
        "price": 21200,
        "variant": "Венге",
        "innerImg": "src/assets/images/doors/catalog/image_101.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_102.jpg"
    },
    {
        "id": 52,
        "name": "Аврора Мореная Береза (860*2050) L",
        "price": 21200,
        "variant": "Мореная береза",
        "innerImg": "src/assets/images/doors/catalog/image_103.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_104.jpg"
    },
    {
        "id": 53,
        "name": "Аврора мет/мет (860*2050) L",
        "price": 23400,
        "variant": "Антик медный",
        "innerImg": "src/assets/images/doors/catalog/image_105.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_106.jpg"
    },
    {
        "id": 54,
        "name": "Венеция 2 сандал белый (870*2050)L",
        "price": 44990,
        "variant": "Сандал белый",
        "innerImg": "src/assets/images/doors/catalog/image_107.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_108.jpg"
    },
    {
        "id": 55,
        "name": "Поларис Букле черный / Венге 860х2050 левая",
        "price": 40800,
        "variant": "Венге",
        "innerImg": "src/assets/images/doors/catalog/image_109.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_110.jpg"
    },
    {
        "id": 56,
        "name": "Термолюкс Муар Серый / Силк сноу 960х2050 левая",
        "price": 87800,
        "variant": "Силк Сноу",
        "innerImg": "src/assets/images/doors/catalog/image_111.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_112.jpg"
    },
    {
        "id": 57,
        "name": "Виладж Букле Графит / Силк Сноу 1200х2050 левая",
        "price": 74900,
        "variant": "Силк Сноу",
        "innerImg": "src/assets/images/doors/catalog/image_113.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_114.jpg"
    },
    {
        "id": 58,
        "name": "Виладж Букле Графит / Мрамор натуральный 1200х2050 левая",
        "price": 74900,
        "variant": "Мрамор натуральный",
        "innerImg": "src/assets/images/doors/catalog/image_115.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_116.jpg"
    },
    {
        "id": 59,
        "name": "Виладж Букле Графит / Силк Сноу 880х2050 левая",
        "price": 59400,
        "variant": "Силк Сноу",
        "innerImg": "src/assets/images/doors/catalog/image_117.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_118.jpg"
    },
    {
        "id": 60,
        "name": "Пальмира Туманный лес / Дарквайт 870х2050 левая",
        "price": 77700,
        "variant": "Дарквайт",
        "innerImg": "src/assets/images/doors/catalog/image_119.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_120.jpg"
    },
    {
        "id": 61,
        "name": "Имперадор Артвуд Малахит / Белая эмаль 870х2050 левая",
        "price": 99500,
        "variant": "Белая эмаль",
        "innerImg": "src/assets/images/doors/catalog/image_121.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_122.jpg"
    },
    {
        "id": 62,
        "name": "Базальт Букле графит / Софт капучино 860х2050 левая",
        "price": 40900,
        "variant": "Софт капучино",
        "innerImg": "src/assets/images/doors/catalog/image_123.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_124.jpg"
    },
    {
        "id": 63,
        "name": "Грея Букле графит / Граф белый 860х2050 левая",
        "price": 29200,
        "variant": "Граф белый",
        "innerImg": "src/assets/images/doors/catalog/image_125.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_126.jpg"
    },
    {
        "id": 64,
        "name": "Аврора Белый Ясень (860*2050) L",
        "price": 21200,
        "variant": "Ясень Белый",
        "innerImg": "src/assets/images/doors/catalog/image_127.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_128.jpg"
    },
    {
        "id": 65,
        "name": "Поларис Букле черный / Белый матовый 860х2050 левая",
        "price": 40800,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_129.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_130.jpg"
    },
    {
        "id": 66,
        "name": "Кантата Букле серый / Белый матовый 860х2050 левая",
        "price": 26300,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_131.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_132.jpg"
    },
    {
        "id": 67,
        "name": "Вертикаль Черная шагрень / Белый матовый 860х2050 левая",
        "price": 30500,
        "variant": "Белый матовый",
        "innerImg": "src/assets/images/doors/catalog/image_133.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_134.jpg"
    },
    {
        "id": 68,
        "name": "Норд Венге 860*2050 левая",
        "price": 39300,
        "variant": "Венге",
        "innerImg": "src/assets/images/doors/catalog/image_135.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_136.jpg"
    },
    {
        "id": 69,
        "name": "Нова Букле графит / Ривьера айс 860х2050 левая",
        "price": 26900,
        "variant": "Ривьера Айс",
        "innerImg": "src/assets/images/doors/catalog/image_137.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_138.jpg"
    },
    {
        "id": 70,
        "name": "Виладж Букле Графит / Мрамор натуральный 880х2050 левая",
        "price": 59400,
        "variant": "Мрамор натуральный",
        "innerImg": "src/assets/images/doors/catalog/image_139.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_140.jpg"
    },
    {
        "id": 71,
        "name": "Аврора Белый ясень (1200*2200) L",
        "price": 34800,
        "variant": "Ясень Белый",
        "innerImg": "src/assets/images/doors/catalog/image_141.jpg",
        "outerImg": "src/assets/images/doors/catalog/image_142.jpg"
    }
]


