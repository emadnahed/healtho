export const Main = [
  {
    name: "Chicken Breast(500g)",
    calories: 825,
    protein: 155,
    fat: 18.5,
    carbs: 0,
  },

  {
    name: "Beef(500g)",
    calories: 1240,
    protein: 112,
    fat: 85,
    carbs: 0,
  },

  {
    name: "Egg whites(100g-boiled)",
    calories: 52,
    protein: 11,
    fat: 0.2,
    carbs: 1.2,
  },


  {
    name: "Tuna(100g)",
    calories: 100,
    protein: 23,
    fat: 1,
    carbs: 1,
  },

  {
    name: "tofu-300g",
    calories: 90,
    protein: 9,
    fat: 6,
    carbs: 1.5,
  },

  {
    name: "Mashed potato(100g)",
    calories: 94,
    protein: 1.8,
    fat: 3.4,
    carbs: 15,
  },

  {
    name: "Brown Rice(100g)",
    calories: 63,
    protein: 1.33,
    fat: 0.41,
    carbs: 12.82,
  },
  {
    name: "Chickpeas(200g)",
    calories: 364,
    protein: 19,
    fat: 6,
    carbs: 61,
  },
];

export function getMainDetails(name) {
  return Main.find(item => item.name === name);
}