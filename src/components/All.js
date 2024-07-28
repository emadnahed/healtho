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

      <h1>Fruits(100g)</h1>
      <div className="container">
        {fruits.map((item) => {
          return <Card fat={item.fat} protein={item.protein} carbs={item.carbs} calories={item.calories} name={item.name} />;
        })}
      </div>

      <h1>Dry Fruits(10g)</h1>
      <div className="container">
        {dryFruits.map((item) => {
          return <Card fat={item.fat} protein={item.protein} carbs={item.carbs} calories={item.calories} name={item.name} />;
        })}
      </div>

      <h1>Vegetables(100g)</h1>
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
