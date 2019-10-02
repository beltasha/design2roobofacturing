export function convertObjectToQueryString(parameters) {
  if (!parameters) {
    return '';
  }
  return Object.keys(parameters)
    .filter(param => typeof parameters[param] !== 'undefined')
    .map(param => `${param}=${encodeURIComponent(parameters[param])}`)
    .join('&');
}