export const Main = [
  {
    name: "Chicken Breast(200g)",
    calories: 330,
    protein: 60,
    fat: 7.2,
    carbs: 0,
  },

  {
    name: "Beef",
    calories: 576,
    protein: 52.66,
    fat: 39.08,
    carbs: 0,
  },

  {
    name: "3 Eggs(Boiled)",
    calories: 60,
    protein: 6.75,
    fat: 1,
    carbs: 0.5,
  },

  
  {
    name: "Sausages",
    calories: 180,
    protein: 12,
    fat: 9.19,
    carbs: 4.19,
  },

  {
    name: "Tuna",
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
    name: "Mashed potato",
    calories: 87,
    protein: 2,
    fat: 0.1,
    carbs: 20,
  },

  {
    name: "Brown Rice",
    calories: 63,
    protein: 1.33,
    fat: 0.41,
    carbs: 12.82,
  },
  {
    name: "Chickpeas",
    calories: 364,
    protein: 19,
    fat: 6,
    carbs: 61,
  },
];

export function getMainDetails(name) {
  return Main.find(item => item.name === name);
}