convertButton.addEventListener("click", function () {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const fromScale = document.getElementById("fromScale").value;
    const toScale = document.getElementById("toScale").value;

    if (isNaN(inputTemperature)) {
        resultText.textContent = "Please enter a valid temperature.";
        return;
    }

    let convertedTemperature;

    if (fromScale === "Celsius") {
        if (toScale === "Fahrenheit") {
            convertedTemperature = (inputTemperature * 9 / 5) + 32;
        } else if (toScale === "Kelvin") {
            convertedTemperature = inputTemperature + 273.15;
        } else {
            convertedTemperature = inputTemperature;
        }
    } else if (fromScale === "Fahrenheit") {
        if (toScale == "Kelvin") {
            convertedTemperature = (inputTemperature - 32) * (5 / 9) + 273.15;
        } else if (toScale == "Celsius") {
            convertedTemperature = (inputTemperature - 32) * (5 / 9);
        } else {
            convertedTemperature = inputTemperature;
        }

    } else if (fromScale === "Kelvin") {
        if (toScale == "Fahrenheit") {
            convertedTemperature = (inputTemperature - 273.15) * (9 / 5) + 32;
        } else if (toScale == "Celsius") {
            convertedTemperature = inputTemperature - 273.15;
        } else {
            convertedTemperature = inputTemperature;
        }
    }

    resultText.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${toScale}`;
});
