import React from 'react';
import './Card.css';

export default function Card({ name, calories, protein, fat, carbs, darkMode}) {
  return (
    <div className={`fullcard ${darkMode ? 'dark' : 'light'}`}>
    <div className={`card ${darkMode ? 'dark' : 'light'}`}>
      <h2 className="card-title">{name}</h2>
      <div className="nutrition-info">
        <div className="nutrition-item">
          <span className="icon calories-icon">🔥</span>
          <span className="nutrition-value">{calories}</span>
          <span className="nutrition-label">Calories</span>
        </div>
        <div className="nutrition-item">
          <span className="icon protein-icon">🥩</span>
          <span className="nutrition-value">{protein}g</span>
          <span className="nutrition-label">Protein</span>
        </div>
        <div className="nutrition-item">
          <span className="icon fat-icon">🥑
            </span>
          <span className="nutrition-value">{fat}g</span>
          <span className="nutrition-label">Fat</span>
        </div>
        <div className="nutrition-item">
          <span className="icon carbs-icon">🍞</span>
          <span className="nutrition-value">{carbs}g</span>
          <span className="nutrition-label">Carbs</span>
        </div>
      </div>
    </div>
    
    </div>
  );
}