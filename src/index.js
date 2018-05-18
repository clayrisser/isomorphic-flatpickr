export function loadFlatpickr() {
  let flatpickr = null;
  // eslint-disable-next-line global-require
  if (typeof window !== 'undefined') flatpickr = require('flatpickr');
  return flatpickr;
}

export default loadFlatpickr();
