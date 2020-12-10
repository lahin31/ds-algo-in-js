function HashFunction(table_size, data) {
  let index;
  let data_length = data.length;

  index = data_length % table_size;
  return index;
}

module.exports = HashFunction;
