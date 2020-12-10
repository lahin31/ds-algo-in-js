const LinkedList = require("../linked-list");
const listRef = new LinkedList();

it("add 10 and check list works or not", () => {
  listRef.prepend(10);
  expect(listRef.showList()).toStrictEqual({ data: 10, ref: null });
});

it("add 20 and check list works or not", () => {
  listRef.appendNode(20);
  expect(listRef.showList()).toStrictEqual({
    data: 10,
    ref: { data: 20, ref: null },
  });
});

it("prepend 5 and check list works or not", () => {
  listRef.prepend(5);
  expect(listRef.showList()).toStrictEqual({
    data: 5,
    ref: { data: 10, ref: { data: 20, ref: null } },
  });
});

it("check list size 3 or not", () => {
  expect(listRef.size()).toBe(3);
});

it("check list is empty or not", () => {
  expect(listRef.isEmpty()).toBe(false);
});

it("remove 10 from the list", () => {
  listRef.remove(10);
  expect(listRef.showList()).toStrictEqual({
    data: 5,
    ref: { data: 20, ref: null },
  });
});

it("check list contains 10 or not", () => {
  expect(listRef.contains(10)).toBe(false);
});
