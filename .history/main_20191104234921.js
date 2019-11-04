let radioArr = $(".contact-form-radio");
let lineArr = $(".check-line");

function colorFunction() {
  for (let i = 0; i < radioArr.length; i++) {
    lineArr[i].style.backgroundColor = 'black';
    radioArr[i].checked = false;
    console.log(this);
  }
  for (let i = 0; i < radioArr.length; i++) {
    radioArr[i].checked = true;
    if (radioArr[i].checked) {
      for (let j = 0; j <= i; j++) {
        lineArr[j].style.backgroundColor = 'pink';
      }
    }
  }
}
