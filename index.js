import _ from 'lodash';

const user = {
  id: 42,
  name: 'Bob',
  age: 70,
};

_.forEach(user, (value, key) => {
  const span = document.createElement('span');

  span.textContent = `key: ${key} = ${value}`;
  document.body.append(span);
});
