function calBMI(){
      var height = parseFloat(document.getElementById("height").value);
      var mass = document.getElementById("mass").value;

      var result4 = (mass*10000)/(height*height);
      var r=result4/703.1
      var a="";

      if(result4<18.5)
              a="Underweight"
      else if(result4<=25)
              a="Normal Weight"
      else if(result4<30)
              a="Overweight"
      else
              a="Obese"
      document.getElementById("result4").innerHTML = "Result: " + result4.toFixed(2) + " kg/m^2 or "+r.toFixed(5)+" lbs/in^2 " + a;
}
