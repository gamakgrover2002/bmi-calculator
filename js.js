function compute(){
    var h= document.getElementById('height').value;
    var w=document.getElementById('weight').value;
    h = h/100;
  
    var x=w/(h*h);
    console.log(x); 
    document.getElementById('bmi').innerText= "Your BMI is : "+ x;
    document.getElementById('status').innerText ="Status: ";
if( x < 16){
    document.getElementById('result').innerText= "Severe Thinness";
}
else if(x>= 16 && x <17){
    document.getElementById('result').innerText= "Moderate Thinness";
}
else if(x>=17 && x< 18.5){
    document.getElementById('result').innerText= "Mild Thinness";
}
else if(x >= 18.5 && x<25){
    document.getElementById('result').innerText= "Normal";
}
else if(x >= 25 && x<30){
    document.getElementById('result').innerText= "Overweight";
   
}
else if(x >= 30 && x<35){
    document.getElementById('result').innerText= "Obese Class I";
   
}
else if(x >= 35 && x<40){
    document.getElementById('result').innerText= "Obese Class II";
   
}
else{
    document.getElementById('result').innerText= "Obese Class III";

}

 }
