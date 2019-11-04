let radioClick = $(".container-radio");
let radioArr = $(".contact-form-radio");
let lineArr = $(".check-line");
let index = 0;

function colorFunction(index) {
  return function () {
    for (let j = 0; j < radioArr.length; j++) {
      radioArr[j].checked = false;
    }
    radioArr[index].checked = true;
    for (let j = 0; j < radioArr.length; j++) {
      if (radioArr[j].checked == false) {
        lineArr[j].style.backgroundColor = 'black';
      } else {
        lineArr[j].style.backgroundColor = 'pink';
      }
    }
  }
}

for (index = 0; index < radioClick.length; index++) {
  $(radioClick[index]).on('click', colorFunction(index));
}
