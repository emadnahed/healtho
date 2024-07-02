export const dryFruits = [
  {
    name: "Almond",
    calories: 65.7,
    protein: 2.1,
    fat: 5.8,
    carbs: 2.2,
  },
  {
    name: "Raisins",
    calories: 30.2,
    protein: 0.307,
    fat: 0.1,
    carbs: 7.9,
  },
  {
    name: "Cashew",
    calories: 55.3,
    protein: 1.82,
    fat: 4.4,
    carbs: 3.01,
  },
  {
    name: "Pumpkin seeds",
    calories: 44.6,
    protein: 1.9,
    fat: 3.8,
    carbs: 5.4,
  },
  {
    name: "Sunflower seeds",
    calories: 54.6,
    protein: 1.9,
    fat: 4.7,
    carbs: 2,
  },
  {
    name: "Chia seeds",
    calories: 48.6,
    protein: 1.7,
    fat: 3.3,
    carbs: 4.2,
  },
  {
    name: "Flax seeds",
    calories: 53.4,
    protein: 1.8,
    fat: 4.2,
    carbs: 2.9,
  },
  {
    name: "Sesame seeds",
    calories: 56.5,
    protein: 1.7,
    fat: 4.7,
    carbs: 2.345,
  },
  {
    name: "Walnut",
    calories: 65.4,
    protein: 1.5,
    fat: 6.5,
    carbs: 1.4,
  },
  {
    name: "Anjeer (Figs)",
    calories: 24.9,
    protein: 0.3,
    fat: 0.1,
    carbs: 5.3,
  },
  {
    name: "Dates",
    calories: 28.2,
    protein: 0.25,
    fat: 0.04,
    carbs: 7.5,
  }
  // {
  //   name: "Total",
  //   calories: 527.4,
  //   protein: 15.277,
  //   fat: 38.34,
  //   carbs: 44.155,
  // },
];

export function getDryFruitDetails(name) {
  return dryFruits.find(fruit => fruit.name === name);
}