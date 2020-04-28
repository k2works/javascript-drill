const assert = require("assert");
const add = require("../main");

it("2と2を足した合計は4", () => {
  assert.strictEqual(add(2, 2), 4);
});
