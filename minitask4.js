// 1. konversi c -> f
// 2. konversi c -> r
// 3. konversi c -> k
// 4. output dalam format benar

function convertFarenheit(celcius) {
  return "Farenheit: " + (celcius * 9) / 5 + 32;
}

const convertReamur = function convertReamur(celcius) {
  return "Reamur: " + (celcius * 4) / 5;
};

const convertKelvin = (celcius) => {
  return "Kelvin: " + (celcius + 273.15);
};

const convert = (celcius) => {
  return (
    convertFarenheit(celcius) +
    "°F\n" +
    convertReamur(celcius) +
    "°R\n" +
    convertKelvin(celcius) +
    " K"
  );
};

console.log(convert(25));

const out = (celcius, cb) => {
  const result = cb(celcius);
  console.log(result);
};
console.log("\n");
out(30, convertFarenheit);
out(30, convertReamur);
out(30, convertKelvin);
