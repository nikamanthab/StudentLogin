
console.log("hmm connected");

let name = document.querySelector("#name");
let rollno = document.querySelector("#rollno");
let dept = document.querySelector("#dept");
let sec = document.querySelector("#sec");
let batch = document.querySelector("#batch");
let btn = document.querySelector("#signupbtn");

let student = {};
btn.addEventListener("click",()=>{

	student.rollno = rollno.value;
	student.name = name.value;
	student.dept = dept.value;
	student.sec = sec.value;
	student.batch = batch.value;
	student.nologins = 1;
	student.attempts = 0;
	student.marks = [];
	student.time = 30;
	student.questions = [];

	let string = JSON.stringify(student);
	console.log(string);

	var xhttp = new XMLHttpRequest();
	xhttp.open("POST",'/finish',true);
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    document.querySelector("body").innerHTML = this.responseText;
	    console.log(this);
	    	

	  }
	};
	
	xhttp.setRequestHeader('Content-Type','application/json; charset=UTF-8');
	xhttp.send(string);

})
