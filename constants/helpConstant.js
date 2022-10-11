export function formatCurrency(val) {
  val = val || 0;
  const format = val.toString().split('').reverse().join('');
  const convert = format.match(/\d{1,3}/g);
  return convert.join('.').split('').reverse().join('')
}