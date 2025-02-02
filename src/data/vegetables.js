export const vegetables = [
  
    {
      name: "Carrot",
      calories: 41,
      protein: 0.9,
      fat: 0.2,
      carbs: 9.6
    },
    
    {
      name: "Cucumber",
      calories: 15,
      protein: 0.7,
      fat: 0.1,
      carbs: 3.6
    },
    {
      name: "Radish",
      calories: 16,
      protein: 0.6,
      fat: 0.1,
      carbs: 3.4
    }
  ];

  export function getVegetableDetails(name) {
    return vegetables.find(veg => veg.name === name);
  }