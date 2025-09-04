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

const out = (celcius, convertFarenheit, convertKelvin, convertReamur) => {
  //   let cb1 = convertFarenheit(celcius);
  //   let cb2 = convertReamur(celcius);
  //   let cb3 = convertKelvin(celcius);
  //   const result = cb1 + cb2 + cb3;
  //   console.log(result);
  return console.log(
    convertFarenheit(30) + "\n" + convertReamur(30) + "\n" + convertKelvin(30)
  );
};

console.log("\n");
out(30, convertFarenheit, convertReamur, convertKelvin);
