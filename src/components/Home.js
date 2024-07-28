import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import Card from "./Card";

// Data objects and its method imports
import { fruits, getFruitDetails } from "../data/fruits";
import { dryFruits, getDryFruitDetails } from "../data/dryFruits";
import { vegetables, getVegetableDetails } from "../data/vegetables";
import { Main, getMainDetails } from "../data/Main";
import { Daily, getDailyDetails } from "../data/Daily";

// Map dryFruits to the required option structure (label and value)
const dryFruitOptions = dryFruits.map((fruit) => ({
  label: fruit.name,
  value: fruit.name,
}));

// Map Fruits to the required option structure (label and value)
const FruitOptions = fruits.map((fruit) => ({
  label: fruit.name,
  value: fruit.name,
}));

// Map Vegetables to the required option structure (label and value)
const VegOptions = vegetables.map((veg) => ({
  label: veg.name,
  value: veg.name,
}));

// Map Main to the required option structure (label and value)
const MainOptions = Main.map((main) => ({
  label: main.name,
  value: main.name,
}));

// Map Fixed daily items to the required option structure (label and value)
const DailyOptions = Daily.map((daily) => ({
  label: daily.name,
  value: daily.name,
}));

// Define the styles configuration without using color
const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? undefined : isSelected ? "blue" : isFocused ? "lightblue" : undefined,
      color: isDisabled ? "#ccc" : isSelected ? "white" : "black",
      cursor: isDisabled ? "not-allowed" : "default",
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled ? (isSelected ? "blue" : "lightblue") : undefined,
      },
    };
  },
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: "lightblue",
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: "black",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: "black",
    ":hover": {
      backgroundColor: "blue",
      color: "white",
    },
  }),
};

export default function Home() {
  // Create state to hold selected options = DRYFRUITS STATES
  const [DFselectedOptions, setDFSelectedOptions] = useState([]);
  const [DFnutritionalSummary, setDFNutritionalSummary] = useState({}); // new state to hold the summary

  // Create state to hold selected options = FRUITS STATES
  const [FselectedOptions, setFSelectedOptions] = useState([]);
  const [FnutritionalSummary, setFNutritionalSummary] = useState({}); // new state to hold the summary

  // Create state to hold selected options = FRUITS STATES
  const [VegSelectedOptions, setVegSelectedOptions] = useState([]);
  const [VegNutritionalSummary, setVegNutritionalSummary] = useState({}); // new state to hold the summary

  // Create state to hold selected options = MAIN COURSE STATES
  const [MainSelectedOptions, setMainSelectedOptions] = useState([]);
  const [MainNutritionalSummary, setMainNutritionalSummary] = useState({}); // new state to hold the summary

  // Create state to hold selected options = MAIN COURSE STATES
  const [DailySelectedOptions, setDailySelectedOptions] = useState([]);
  const [DailyNutritionalSummary, setDailyNutritionalSummary] = useState({}); // new state to hold the summary

  const [totalNutritionalSummary, setTotalNutritionalSummary] = useState({
    carbs: 0,
    protein: 0,
    fat: 0,
    calories: 0,
  });

  const calculateTotalNutritionalSummary = () => {
    const totalSummary = {
      carbs: 0,
      protein: 0,
      fat: 0,
      calories: 0,
    };

    if (MainNutritionalSummary) {
      totalSummary.carbs += MainNutritionalSummary.carbs;
      totalSummary.protein += MainNutritionalSummary.protein;
      totalSummary.fat += MainNutritionalSummary.fat;
      totalSummary.calories += MainNutritionalSummary.calories;
    }

    if (DFnutritionalSummary) {
      totalSummary.carbs += DFnutritionalSummary.carbs;
      totalSummary.protein += DFnutritionalSummary.protein;
      totalSummary.fat += DFnutritionalSummary.fat;
      totalSummary.calories += DFnutritionalSummary.calories;
    }

    if (FnutritionalSummary) {
      totalSummary.carbs += FnutritionalSummary.carbs;
      totalSummary.protein += FnutritionalSummary.protein;
      totalSummary.fat += FnutritionalSummary.fat;
      totalSummary.calories += FnutritionalSummary.calories;
    }

    if (VegNutritionalSummary) {
      totalSummary.carbs += VegNutritionalSummary.carbs;
      totalSummary.protein += VegNutritionalSummary.protein;
      totalSummary.fat += VegNutritionalSummary.fat;
      totalSummary.calories += VegNutritionalSummary.calories;
    }

    if (DailyNutritionalSummary) {
      totalSummary.carbs += DailyNutritionalSummary.carbs;
      totalSummary.protein += DailyNutritionalSummary.protein;
      totalSummary.fat += DailyNutritionalSummary.fat;
      totalSummary.calories += DailyNutritionalSummary.calories;
    }

    setTotalNutritionalSummary(totalSummary);
  };

  useEffect(() => {
    // STATE CHANGE ---> DFsummaryCalculation
    const DFsummary = DFselectedOptions.reduce(
      (acc, current) => {
        const DryfruitDetails = getDryFruitDetails(current.value);
        acc.carbs += DryfruitDetails.carbs;
        acc.protein += DryfruitDetails.protein;
        acc.fat += DryfruitDetails.fat;
        acc.calories += DryfruitDetails.calories;
        return acc;
      },
      { carbs: 0, protein: 0, fat: 0, calories: 0 }
    );
    setDFNutritionalSummary(DFsummary);

    // STATE CHANGE ---> FsummaryCalculation
    const Fsummary = FselectedOptions.reduce(
      (acc, current) => {
        const fruitDetails = getFruitDetails(current.value);
        acc.carbs += fruitDetails.carbs;
        acc.protein += fruitDetails.protein;
        acc.fat += fruitDetails.fat;
        acc.calories += fruitDetails.calories;
        return acc;
      },
      { carbs: 0, protein: 0, fat: 0, calories: 0 }
    );
    setFNutritionalSummary(Fsummary);

    // STATE CHANGE ---> Veg summary Calculation
    const Vegsummary = VegSelectedOptions.reduce(
      (acc, current) => {
        const VegetableDetails = getVegetableDetails(current.value);
        acc.carbs += VegetableDetails.carbs;
        acc.protein += VegetableDetails.protein;
        acc.fat += VegetableDetails.fat;
        acc.calories += VegetableDetails.calories;
        return acc;
      },
      { carbs: 0, protein: 0, fat: 0, calories: 0 }
    );
    setVegNutritionalSummary(Vegsummary);

    // STATE CHANGE ---> Veg summary Calculation
    const Mainsummary = MainSelectedOptions.reduce(
      (acc, current) => {
        const MainDetails = getMainDetails(current.value);
        acc.carbs += MainDetails.carbs;
        acc.protein += MainDetails.protein;
        acc.fat += MainDetails.fat;
        acc.calories += MainDetails.calories;
        return acc;
      },
      { carbs: 0, protein: 0, fat: 0, calories: 0 }
    );
    setMainNutritionalSummary(Mainsummary);

    // STATE CHANGE ---> Veg summary Calculation
    const Dailysummary = DailySelectedOptions.reduce(
      (acc, current) => {
        const DailyDetails = getDailyDetails(current.value);
        acc.carbs += DailyDetails.carbs;
        acc.protein += DailyDetails.protein;
        acc.fat += DailyDetails.fat;
        acc.calories += DailyDetails.calories;
        return acc;
      },
      { carbs: 0, protein: 0, fat: 0, calories: 0 }
    );
    setDailyNutritionalSummary(Dailysummary);
    // calculateTotalNutritionalSummary();
  }, [DFselectedOptions, FselectedOptions, VegSelectedOptions, MainSelectedOptions, DailySelectedOptions]);

  useEffect(() => {
    calculateTotalNutritionalSummary();
  }, [MainNutritionalSummary, DFnutritionalSummary, FnutritionalSummary, VegNutritionalSummary, DailyNutritionalSummary]);

  return (
    <div className="multi-selector">
      <div className="whole total" >
        <div>
          {totalNutritionalSummary && (
            <Card
              fat={parseFloat(totalNutritionalSummary.fat).toFixed(2)}
              carbs={parseFloat(totalNutritionalSummary.carbs).toFixed(2)}
              protein={parseFloat(totalNutritionalSummary.protein).toFixed(2)}
              calories={parseFloat(totalNutritionalSummary.calories).toFixed(2)}
              name={"TOTAL NUTRITIONAL SUMMARY"}
            />
          )}
        </div>
      </div>

      {/* Daily fixed items */}
      <div className="whole">
        <div className="selectors">
          <Select
            closeMenuOnSelect={false}
            defaultValue={""}
            isMulti
            options={DailyOptions}
            styles={colourStyles}
            placeholder="The Daily options"
            onChange={(selected) => setDailySelectedOptions(selected || [])}
          />
        </div>
        {/* Main Course Summary below */}
        <div>
          {DailyNutritionalSummary && (
            <Card
              fat={DailyNutritionalSummary > 0 ? parseFloat(DailyNutritionalSummary.fat).toFixed(2) : 0}
              carbs={parseFloat(DailyNutritionalSummary.carbs).toFixed(2)}
              protein={parseFloat(DailyNutritionalSummary.protein).toFixed(2)}
              calories={parseFloat(DailyNutritionalSummary.calories).toFixed(2)}
              name={"Fixed Daily items"}
            />
          )}
        </div>
      </div>

      {/* Main course items */}
      <div className="whole">
        <div className="selectors">
          <Select
            closeMenuOnSelect={false}
            defaultValue={""}
            isMulti
            options={MainOptions}
            styles={colourStyles}
            placeholder="Select the Main Course options"
            onChange={(selected) => setMainSelectedOptions(selected || [])}
          />
        </div>
        {/* Main Course Summary below */}
        <div>
          {MainNutritionalSummary && (
            <Card
              fat={parseFloat(MainNutritionalSummary.fat).toFixed(2)}
              carbs={parseFloat(MainNutritionalSummary.carbs).toFixed(2)}
              protein={parseFloat(MainNutritionalSummary.protein).toFixed(2)}
              calories={parseFloat(MainNutritionalSummary.calories).toFixed(2)}
              name={"MAIN COURSE"}
            />
          )}
        </div>
      </div>

      {/* Dry Fruits Selectors */}
      <div className="whole">
        <div className="selectors">
          <Select
            closeMenuOnSelect={false}
            defaultValue={""}
            isMulti
            options={dryFruitOptions}
            styles={colourStyles}
            placeholder="Select the dry fruit options"
            onChange={(selected) => setDFSelectedOptions(selected || [])}
          />
        </div>
        {/* Dry fruits Summary below */}
        <div>
          {DFnutritionalSummary && (
            <Card
              fat={parseFloat(DFnutritionalSummary.fat).toFixed(2)}
              carbs={parseFloat(DFnutritionalSummary.carbs).toFixed(2)}
              protein={parseFloat(DFnutritionalSummary.protein).toFixed(2)}
              calories={parseFloat(DFnutritionalSummary.calories).toFixed(2)}
              name={"DRY FRUITS (per 10g)"}
            />
          )}
        </div>
      </div>

      {/* Fruits Selectors */}
      <div className="whole">
        <div className="selectors">
          <Select
            closeMenuOnSelect={false}
            defaultValue={""}
            isMulti
            options={FruitOptions}
            styles={colourStyles}
            placeholder="Select the Fruit options"
            onChange={(selected) => setFSelectedOptions(selected || [])}
          />
        </div>
        {/* Dry fruits Summary below */}
        <div>
          {FnutritionalSummary && (
            <Card
              fat={parseFloat(FnutritionalSummary.fat).toFixed(2)}
              carbs={parseFloat(FnutritionalSummary.carbs).toFixed(2)}
              protein={parseFloat(FnutritionalSummary.protein).toFixed(2)}
              calories={parseFloat(FnutritionalSummary.calories).toFixed(2)}
              name={"FRUITS per 100g"}
            />
          )}
        </div>
      </div>

      {/* Vegetable Selectors */}
      <div className="whole">
        <div className="selectors">
          <Select
            closeMenuOnSelect={false}
            defaultValue={""}
            isMulti
            options={VegOptions}
            styles={colourStyles}
            placeholder="Select the Fruit options"
            onChange={(selected) => setVegSelectedOptions(selected || [])}
          />
        </div>
        {/* Veg fruits Summary below */}
        <div>
          {VegNutritionalSummary && (
            <Card
              fat={parseFloat(VegNutritionalSummary.fat).toFixed(2)}
              carbs={parseFloat(VegNutritionalSummary.carbs).toFixed(2)}
              protein={parseFloat(VegNutritionalSummary.protein).toFixed(2)}
              calories={parseFloat(VegNutritionalSummary.calories).toFixed(2)}
              name={"VEGETABLES (per 100g)"}
            />
          )}
        </div>
      </div>
    </div>
  );
}
