function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
    let result;
  
    if (inputUnit == "celcius" && outputUnit == "fahrenheit") {
      result = (inputTemp * 9) / 5 + 32;
    } else if (inputUnit == "celcius" && outputUnit == "kelvin") {
      result = inputTemp + 273.15;
    } else if (inputUnit == "fahrenheit" && outputUnit == "celcius") {
      result = ((inputTemp - 32) * 5) / 9;
    } else if (inputUnit == "fahrenheit" && outputUnit == "kelvin") {
      result = ((inputTemp - 32) * 5) / 9 + 273.15;
    } else if (inputUnit == "kelvin" && outputUnit == "celcius") {
      result = inputTemp - 273.15;
    } else if (inputUnit == "kelvin" && outputUnit == "fahrenheit") {
      result = ((inputTemp - 273.15) * 9) / 5 + 32;
    }
    //If the inputUnit and outputUnits are same no cnversions are needed
    else {
      result = inputTemp;
    }
  
    document.getElementById("result").textContent = `Result: ${result.toFixed(
      2
    )} ${outputUnit}`;
  }