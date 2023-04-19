function showHide(){
	let moreElem=document.getElementById("more");
	let linkElem=document.getElementById("show-hide");
	if(moreElem.classList.contains("hidden"))
	{
		moreElem.classList.remove("hidden");
		linkElem.innerHTML="show less";
	}
	else{
		moreElem.classList.add("hidden");
		linkElem.innerHTML="show more";
	}
}

function quiz(){
	
let sectionResult=document.getElementById("result");
let qOne=document.getElementById("question-1").value;
let qTwo=document.getElementById("question-2").value;
let qThree=document.getElementById("question-3").value;
let qFour=document.getElementById("question-4").value;
let total=0;
let answers=document.getElementById("answers");
answers.classList.remove("hidden");
	
	if(qOne=="Yes, classes are"){
document.getElementById("result-one").innerHTML="Question 1-Correct";
total+=1;
	}
else{
	document.getElementById("result-one").innerHTML="Question 1- Incorrect";
}
	if(qTwo=="#"){
document.getElementById("result-two").innerHTML="Question 2-Correct";
total+=1;
	}
else{
	document.getElementById("result-two").innerHTML="Question 2- Incorrect";
	
}
	if(qThree=="Padding is spacing inside the element and a margin is outside"){
document.getElementById("result-three").innerHTML="Question 3-Correct";
total+=1;
	}
else{
	document.getElementById("result-one").innerHTML="Question 3- Incorrect";
	
}
	if(qFour=="classList"){
document.getElementById("result-four").innerHTML="Question 4-Correct";
total+=1;
	}
else{
	document.getElementById("result-four").innerHTML="Question 4- Incorrect";
	
}
let score=document.getElementById("score");
score.innerHTML+=total+"/4";

}
setInterval(changeSlide,10000);	
function changeSlide(){
	let zoomElem=document.getElementById("zoom");
	let num=zoomElem.getAttribute("data-num");
	if(num==1)
	{
		zoomElem.src="images/dog2.png";
	zoomElem.setAttribute("data-num", "2");
		
	}
	else if(num==2)
	{
		zoomElem.src="images/dog3.png";
		zoomElem.setAttribute("data-num","3");
	}
	else if(num==3)
	{
	zoomElem.src="images/dog4.png";
		zoomElem.setAttribute("data-num","1");
	}

}
