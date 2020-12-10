const HashTable = require("../hash-table");
const hashTableRef = new HashTable();

it("insert john in the hash table", () => {
  hashTableRef.insert("john");
  expect(hashTableRef.search("john")).toBe(4);
});

it("insert michael in the hash table", () => {
  hashTableRef.insert("michael");
  expect(hashTableRef.search("michael")).toBe(7);
});
