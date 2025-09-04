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

const extraSkills1 = (extraInfo.skills = [
  "olahraga",
  "painting",
  "programming",
  "design",
]);

const profile = {
  ...bio,
  ...extraInfo,
  ...extraSkills1,
};

// const profileku = {
//   ...extraInfo.skills,
//   ...extraSkills1,
//   ...extraSkills2,
// };

console.log(profile);
console.log("\n");
console.log(profile.skills[1]);
console.log("\n");
// console.log(profileku);
