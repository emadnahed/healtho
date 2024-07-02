export const Daily = [
  {
    name: "milk 500ml",
    calories: 195,
    protein: 17.5,
    fat: 2.5,
    carbs: 26.01,
  },
  {
    "name": "egg white (3 large)",
    "calories": 17,
    "protein": 10,
    "fat": 0.05,
    "carbs": 0.24
  },
 
 {

  "name": "Protein supplement-1 scoop",
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
    name: "dry fruits",
    calories: 527.4,
    protein: 15.27,
    fat: 36.733,
    carbs: 44.1,
  },

  {
    name: "cheese(per triangle) - regular",
    calories: 36,
    protein: 1.8,
    fat: 2.8,
    carbs: 1,
  },

  {
    name: "sweet curd",
    calories: 120,
    protein: 4,
    fat: 5,
    carbs: 18,
  }

];

export function getDailyDetails(name) {
  return Daily.find(item => item.name === name);
}