function math(op) {
  var bil1 = document.kalkulator.bil1.value;
  var bil2 = document.kalkulator.bil2.value;
  switch(op){
    case '+' : document.kalkulator.hasil.value = bil1+bil2;
    break;
    case '-' : document.kalkulator.hasil.value = bil1-bil2;
    break;
    case '*' : document.kalkulator.hasil.value = bil1*bil2;
    break;
    case '/' : document.kalkulator.hasil.value = bil1/bil2;
    break;
  }
}
