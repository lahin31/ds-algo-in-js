const Queue = require("../queue");
const queue = new Queue();

it("check the queue is initially empty", () => {
  expect(queue.getQueue()).toStrictEqual([]);
});

it("add Shaun", () => {
  expect(queue.enqueue("Shaun")).toStrictEqual(["Shaun"]);
});

it("add John", () => {
  expect(queue.enqueue("John")).toStrictEqual(["Shaun", "John"]);
});

it("add Mark", () => {
  expect(queue.enqueue("Mark")).toStrictEqual(["Shaun", "John", "Mark"]);
});

it("delete from front", () => {
  expect(queue.dequeue()).toStrictEqual(["John", "Mark"]);
});

it("get queue", () => {
  expect(queue.getQueue()).toStrictEqual(["John", "Mark"]);
});

it("get front value", () => {
  expect(queue.getFrontValue()).toBe("John");
});
