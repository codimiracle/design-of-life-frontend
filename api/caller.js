import _fetch from 'isomorphic-unfetch';
import { Blueprints } from '.';

function objeval(object, expression) {
  let nodes = expression ? expression.split(/\./) : [];
  let value = object;
  let index = 0;
  while (nodes[index] && value) {
    value = value[nodes[index]];
    index++;
  }
  return value;
}

const Caller = function () {};

Caller.fetch = function (name, options) {
  let apiUrl = objeval(Blueprints, name);
  console.log('Calling api (%s) -> fetching (%s)', name, apiUrl);
  return new Promise((resolve, reject) => {
    if (apiUrl) {
      console.log('success for response');
      _fetch(apiUrl, options).then((response) => response.json()).then(resolve).catch(reject);
    } else {
      console.log('failed, invalid api');
      reject(new Error(`Calling api(${name}) is invalid.`));
    }
  });
}

export default Caller;