let obj = {
  str: [
    "name1",
    "name2",
    "name3",
    [
      "name4",
      [
        "name5",
        "name6",
        {
          man: [
            {
              the: {
                name: {
                  of: {
                    us: "Koda",
                  },
                },
              },
            },
          ],
        },
      ],
    ],
  ],
};

// output koda
const {
  str: [
    _,
    __,
    ___,
    [
      ____,
      [
        _____,
        ______,
        {
          man: [
            {
              the: {
                name: {
                  of: { us: of },
                },
              },
            },
          ],
        },
      ],
    ],
  ],
} = obj;
console.log(of);
