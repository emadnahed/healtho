export const Daily = [
  {
    name: "Milk(1/2L)",
    calories: 195,
    protein: 17.5,
    fat: 2.5,
    carbs: 26.01,
  },
  {
    "name": "Egg York(3)",
    "calories": 17,
    "protein": 10,
    "fat": 0.05,
    "carbs": 0.24
  },
 
 {

  "name": "Protein Scoop",
  "calories": 141,
  "protein": 20,
  "fat": 5.5,
  "carbs": 15.5
},

//   {
//     name: "darkChoco-3pcs",
//     calories: 62,
//     protein: 0.66,
//     fat: 3.7,
//     carbs: 6.36,
//   },

  {
    name: "Dry Fruits",
    calories: 527.4,
    protein: 15.27,
    fat: 36.733,
    carbs: 44.1,
  },

  {
    name: "Cheese(Triangle)",
    calories: 36,
    protein: 1.8,
    fat: 2.8,
    carbs: 1,
  },

  {
    name: "Sweet Curd",
    calories: 120,
    protein: 4,
    fat: 5,
    carbs: 18,
  }

];

export function getDailyDetails(name) {
  return Daily.find(item => item.name === name);
}