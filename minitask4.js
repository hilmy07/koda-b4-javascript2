// 1. konversi c -> f
// 2. konversi c -> r
// 3. konversi c -> k
// 4. output dalam format benar

function convertFarenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

const reamur = function convertReamur(celcius) {
  return (celcius * 4) / 5;
};

const kelvin = (celcius) => {
  return celcius + 273.15;
};

const convert = (celcius) => {
  return `Farenheit: ${convertFarenheit(celcius)}°F\nReamur: ${reamur(
    celcius
  )}°R\nKelvin: ${kelvin(celcius)} K`;
};
console.log(convert(25));
