let radioArr = $(".contact-form-radio");
for (let i = 0; i < radioArr.length; i++) {
	if (radioArr[i].checked) {
  	for (let j = 0; j < i; j++) {
    	radioArr[j].style.backgroundColor = 'pink';
    }
  }
}