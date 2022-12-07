const graduate = function (credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
};

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

const med = medicalSchool('Nhu Pham');
const law = lawSchool('Nhu Pham');

console.log(med);
console.log(law);
