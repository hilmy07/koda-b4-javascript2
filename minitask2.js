const bio = {
  name: "Muhammad Hilmy",
  age: 27,
};

const extraInfo = {
  skills: ["sport", "painting"],
  education: [
    {
      name: "SMP 1 Denpasar",
      year: 2016,
    },
  ],
};

const profile = {
  ...bio,
  ...extraInfo,
};

let { skills } = profile;
console.log(skills[1]);

let { name } = profile.education[0];
console.log(name);
