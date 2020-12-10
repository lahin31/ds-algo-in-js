const Stack = require("../stack");

it("add 1 and check the key is 0 and the value is 1", () => {
  const stackRef = new Stack();
  stackRef.push(1);
  expect(stackRef.showStack()).toStrictEqual({ "0": 1 });
});

it("add 1, 2, 3 then pop last item 2 and check the key, value 0, 1 & 1, 2", () => {
  const stackRef = new Stack();
  stackRef.push(1);
  stackRef.push(2);
  stackRef.push(3);
  stackRef.pop();
  expect(stackRef.showStack()).toStrictEqual({ "0": 1, "1": 2 });
});

it("add 'bruce', 'mark' then pop and check only 1 item left or not", () => {
  const stackRef = new Stack();
  stackRef.push("bruce");
  stackRef.push("mark");
  stackRef.pop();
  expect(stackRef.showStack()).toStrictEqual({ "0": "bruce" });
});
