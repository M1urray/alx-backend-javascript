/**
 * A weak map of endpoints and the number of calls made.
 */

/**
 * The maximum number of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks the number of calls made to an API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a request to.
 */
const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let total = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, total -= -1);
  if (total >= 5) throw new Error('Endpoint load is high');
  return total;
};

export { weakMap, queryAPI };
