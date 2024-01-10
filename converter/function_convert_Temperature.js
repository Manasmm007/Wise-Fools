        function convertTemperature() {
            // Get user input
            var temperature = parseFloat(document.getElementById("temperature").value);
            var fromUnit = document.getElementById("fromUnit").value;
            var toUnit = document.getElementById("toUnit").value;

            // Perform the conversion
            var result = 0;

            if (fromUnit === "kelvin") {
                if (temperature < 0)
                    result = "F";
                else if (toUnit === "celsius")
                    result = temperature - 273.15;
                else if (toUnit === "fahrenheit")
                    result = (temperature - 273.15) * 9/5 + 32;
                else
                    result = temperature
            }
            else if (fromUnit === "celsius") {
                if (temperature < -273.15)
                    result = "F";
                else if (toUnit === "kelvin")
                    result = temperature + 273.15;
                else if (toUnit === "fahrenheit") 
                    result = temperature * 9/5 + 32;
                else
                    result = temperature
            }
            else if (fromUnit === "fahrenheit") {
                if (temperature < -459.67)
                    result = "F";
                else if (toUnit === "kelvin") 
                    result = (temperature - 32) * 5/9 + 273.15;
                else if (toUnit === "celsius")
                    result = (temperature - 32) * 5/9;
                else
                    result = temperature
            }

            // Display the result
            if (result === "F")
                document.getElementById("result").innerHTML = "Result: This value is not possible in " + fromUnit;
            else
                document.getElementById("result").innerHTML = "Result: " + result.toFixed(2) + " " + toUnit;
        }
