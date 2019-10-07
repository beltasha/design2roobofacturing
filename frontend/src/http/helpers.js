export function convertObjectToQueryString(parameters) {
  if (!parameters) {
    return '';
  }
  return Object.keys(parameters)
    .filter(param => typeof parameters[param] !== 'undefined' && parameters[param] !== null && parameters[param] !== '')
    .map(param => `${param}=${encodeURIComponent(parameters[param])}`)
    .join('&');
}