import React from "react";

import { Main } from "../data/Main";
import { dryFruits } from "../data/dryFruits";
import { fruits } from "../data/fruits";
import { Daily } from "../data/Daily";
import { vegetables } from "../data/vegetables";
import Card from "./Card";
import { useState } from "react";

export default function All() {  
  return (
    <main>
      <h1>Daily items</h1>

      <div className="container">
        {Daily.map((item) => {
          return <Card fat={item.fat} protein={item.protein} carbs={item.carbs} calories={item.calories} name={item.name} />;
        })}
      </div>

      <h1>Fruits</h1>
      <div className="container">
        {fruits.map((item) => {
          return <Card fat={item.fat} protein={item.protein} carbs={item.carbs} calories={item.calories} name={item.name} />;
        })}
      </div>

      <h1>Vegetables</h1>
      <div className="container">
        {vegetables.map((item) => {
          return <Card fat={item.fat} protein={item.protein} carbs={item.carbs} calories={item.calories} name={item.name} />;
        })}
      </div>

      <h1>Main-course</h1>
      <div className="container">
        {Main.map((item) => {
          return <Card fat={item.fat} protein={item.protein} carbs={item.carbs} calories={item.calories} name={item.name} />;
        })}
      </div>
    </main>
  );
}
