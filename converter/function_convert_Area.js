        function convertArea(){
            var area = parseFloat(document.getElementById("area").value);
            var fromUnit = document.getElementById("fromUnit3").value;
            var toUnit = document.getElementById("toUnit3").value;
            
            var result3 = 0;
            
            if (area<0)
                result3="F";
            
            else if (fromUnit === "sqm") {
                if (toUnit === "sqyd")
                    result3 = area*1.196;
                else if (toUnit === "sqft")
                    result3 = area*10.764;
                else
                    result3 = area;
            }
            else if (fromUnit === "sqyd") {
                if (toUnit === "sqm")
                    result3 = area / 1.196;
                else if (toUnit === "sqft") 
                    result3 = area*9;
                else
                    result3 = area;
            }
            else if (fromUnit === "sqft") {
                if (toUnit === "sqm") 
                    result3 = area/10.764;
                else if (toUnit === "sqyd")
                    result3 = (area/9);
                else
                    result3 = area;
            }
            
            if (result3 === "F")
                document.getElementById("result3").innerHTML = "Result: This value is not possible in Area";
            else
                document.getElementById("result3").innerHTML = "Result: " + result3.toFixed(2) + " " + toUnit;
            
        }
        
