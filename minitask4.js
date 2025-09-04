// 1. konversi c -> f
// 2. konversi c -> r
// 3. konversi c -> k
// 4. output dalam format benar

function convertFarenheit(celcius) {
  return "Farenheit: " + (celcius * 9) / 5 + 32;
}

const reamur = function convertReamur(celcius) {
  return "Reamur: " + (celcius * 4) / 5;
};

const kelvin = (celcius) => {
  return "Kelvin: " + (celcius + 273.15);
};

const convert = (celcius) => {
  return (
    convertFarenheit(celcius) +
    "°F\n" +
    reamur(celcius) +
    "°R\n" +
    kelvin(celcius) +
    " K"
  );
};
console.log(convert(25));
