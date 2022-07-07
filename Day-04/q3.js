/* 3. Write a JavaScript program to convert temperatures to and from Celsius,
Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f =
temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */

function fahrenheittoCelsius(fahrenheit) {
    return 5 * (fahrenheit - 32) / 9;
}


const celsiustoFahrenheit = (celsius) => 9 * celsius / 5 + 32;


const tempcel = 60;
const tempFah = 45;


console.log(`${tempcel}°C is ${celsiustoFahrenheit(tempcel)}°F`);
console.log(`${tempFah}°F is ${fahrenheittoCelsius(tempFah)}°C`);