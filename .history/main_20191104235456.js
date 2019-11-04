let radioArr = $(".contact-form-radio");
let lineArr = $(".check-line");

function colorFunction() {
  for (let i = 0; i < radioArr.length; i++) {
    if (radioArr[i].checked) {
      for (let j = 0; j <= i; j++) {
        lineArr[j].style.backgroundColor = 'pink';
      }
    }
  }
}

for (i = 0; i < radioArr.length; i++) {
  $(radioArr[i]).on('click', colorFunction(i));
}
