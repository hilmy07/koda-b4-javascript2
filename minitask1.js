const bio = {
  name: "Muhammad Hilmy",
  age: 27,
};

const extraInfo = {
  skills: ["olahraga", "painting"],
  education: [
    {
      name: "Universitas Indonesia",
      year: 2016,
    },
  ],
};

const profile = {
  ...bio,
  ...extraInfo,
};

console.log(profile);
console.log("\n");
console.log(profile.skills[1]);
