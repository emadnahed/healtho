export const fruits = [
    {
      name: "Apple",
      calories: 52,
      protein: 0.3,
      fat: 0.2,
      carbs: 14
    },
    {
      name: "Banana",
      calories: 89,
      protein: 1.1,
      fat: 0.3,
      carbs: 23
    },
    {
      name: "Orange",
      calories: 47,
      protein: 0.9,
      fat: 0.1,
      carbs: 12
    },
    {
      name: "Strawberry",
      calories: 32,
      protein: 0.7,
      fat: 0.3,
      carbs: 8
    },
    {
      name: "Grapes",
      calories: 69,
      protein: 0.7,
      fat: 0.2,
      carbs: 18
    },
    {
      name: "Watermelon",
      calories: 30,
      protein: 0.6,
      fat: 0.2,
      carbs: 8
    },
    {
      name: "Pineapple",
      calories: 50,
      protein: 0.5,
      fat: 0.1,
      carbs: 13
 ,   },
    {
      name: "Mango",
      calories: 60,
      protein: 0.8,
      fat: 0.4,
      carbs: 15
    }
  ]

  export function getFruitDetails(name) {
    return fruits.find(fruit => fruit.name === name);
  }