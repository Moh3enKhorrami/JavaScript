const {default: TetstRunner} = require("jest-runner");
const addFive = require(`./Coursera/Jest_test/addFive`);
test("returns the number plus 5" , () {
    expect(addFive(1)).toBe(6);
})