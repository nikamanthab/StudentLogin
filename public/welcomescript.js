// console.log("connected");

var roll = 123;
var page = '/signup'
let rno = document.querySelector("#rno");
console.log(rno.value);
let stud={};

let string = JSON.stringify(stud);

// btn = document.getElementById("btn").addEventListener("click",()=>{
// 	stud.rollno=rno.value;
// 	var xhttp = new XMLHttpRequest();

// 	console.log(rno.value);
// 	stud.rollno = rno.value;
// 	let string = JSON.stringify(stud);

// 	if(Number(rno.value) === roll){
// 		console.log("hmm");
// 		page = '/test';
// 	}

// 	xhttp.open("POST",page,true);
// 	xhttp.onreadystatechange = function() {
// 	  if (this.readyState == 4 && this.status == 200) {
// 	    document.querySelector(".container").innerHTML = this.responseText;
// 	    console.log(this);
	    	

// 	  }
// 	};
	
// 	xhttp.setRequestHeader('Content-Type','application/json; charset=UTF-8');
// 	xhttp.send(string);

// });

document.getElementById("btn").addEventListener("click",()=>{
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET",page,true);
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    document.querySelector(".container").innerHTML = this.responseText;
	    console.log(this);
	  }
	};
	
	xhttp.send();
});