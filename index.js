import _ from 'lodash';

const user = {
  id: 42,
  name: 'Bob',
  age: 70,
};

_.forEach(user, (value, key) => {
  console.log(`Key: ${key} = ${value}`);
});
