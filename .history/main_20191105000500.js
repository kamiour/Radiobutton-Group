let radioClick = $(".container-radio");
let radioArr = $(".contact-form-radio");
let lineArr = $(".check-line");
let i = 0;

function colorFunction(i) {
  for (let j = 0; j < radioArr.length; j++) {
    radioArr[j].checked = false;
  }
  radioArr[i].checked = true;
  for (let j = 0; j < radioArr.length; j++) {
    if (radioArr[j].checked = false) {
      lineArr[j].style.backgroundColor = 'black';
    } else {
      lineArr[j].style.backgroundColor = 'pink';
    }
  }
}
colorFunction(0);

for (i = 0; i < radioClick.length; i++) {
  $(radioClick[i]).on('click', colorFunction(i));
}