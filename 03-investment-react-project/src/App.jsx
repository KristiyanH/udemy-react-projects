import { useState } from "react";

import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import ResultsTable from "./components/ResultsTable.jsx";

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = inputData.duration > 0;

  function handleOnChange(inputIdentifier, newValue) {
    setInputData((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue, //the plus is parsing the value to integer
      };
    });
  }

  return (
    <>
      <Header />
      <Input inputData={inputData} handleOnChange={handleOnChange} />
      {!isInputValid && <p className="center">Duration must be greater than 0</p>}
      {isInputValid && <ResultsTable input={inputData} />}
    </>
  );
}

export default App;