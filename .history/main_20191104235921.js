let radioClick = $(".container-radio");
let radioArr = $(".contact-form-radio");
let lineArr = $(".check-line");

function colorFunction(i) {
  for (let j = 0; j < radioArr.length; j++) {
    radioArr[j].checked = false;
  }
  radioArr[i].checked = true;
  for (let j = 0; j < radioArr.length; j++) {
    if (radioArr[j].checked = false) {
      radioArr[j].style.backgroundColor = 'black';
    } else {
      radioArr[j].style.backgroundColor = 'pink';
    }
  }
}

for (i = 0; i < radioArr.length; i++) {
  $(radioArr[i]).on('click', colorFunction(i));
}
