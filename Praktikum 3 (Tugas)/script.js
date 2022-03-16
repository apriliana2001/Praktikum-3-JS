operation = (o) => {
  let res = document.getElementById('res');
  let bil1 = parseFloat(document.getElementById('bil1').value);
  let bil2 = parseFloat(document.getElementById('bil2').value);
  res.value = calculate(bil1, bil2, o);
}
 
calculate = (x, y, o) => {
  if(o == '+') {
    return x + y;
  }
  if(o == '-') {
    return x - y;
  }
  if(o == '*') {
    return x * y;
  }
  if(o == '/') {
    return x / y;
  }
  if(o == '%') {
    return x % y;
  }
}