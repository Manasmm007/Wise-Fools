function convertMass(){
            var mass = parseFloat(document.getElementById("mass").value);
            var fromUnit = document.getElementById("fromUnit2").value;
            var toUnit = document.getElementById("toUnit2").value;
            
            var result2 = 0;
            
            if (mass<0)
                result2="F";
            
            else if (fromUnit === "kg") {
                if (toUnit === "lbs")
                    result2 = mass*2.205;
                else if (toUnit === "tael")
                    result2 = mass*26.455;
                else
                    result2 = mass;
            }
            else if (fromUnit === "lbs") {
                if (toUnit === "kg")
                    result2 = mass / 2.205;
                else if (toUnit === "tael") 
                    result2 = mass*12;
                else
                    result2 = mass;
            }
            else if (fromUnit === "tael") {
                if (toUnit === "kg") 
                    result2 = mass/26.455;
                else if (toUnit === "lbs")
                    result2 = (mass/12);
                else
                    result2 = mass;
            }
            
            if (result2 === "F")
                document.getElementById("result2").innerHTML = "Result: This value is not possible in Mass";
            else
                document.getElementById("result2").innerHTML = "Result: " + result2.toFixed(2) + " " + toUnit;
            
        }
