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
