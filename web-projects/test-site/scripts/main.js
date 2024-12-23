const myImage = document.querySelector("#lion");
console.log(myImage);
myImage.addEventListener('click',()=> {
	const mySrc = myImage.getAttribute('src');
	if(mySrc === "images/fs-lion.jfif"){
		myImage.setAttribute("src","images/fs-lion.jpeg");
	}else{
		myImage.setAttribute("src","images/fs-lion.jfif");
	}
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
	const myName = prompt("Please enter your name");
	if (!myName)  	// this means: If myName has no value, run setUserName()
    	setUserName();
    else{
    	localStorage.setItem("name",myName);
		console.log(localStorage);
		myHeading.innerHTML = `Fullstack Lion - ${myName} <br>Code like a King`;
    }
}

if(!localStorage.getItem("name"))
	setUserName();
else
{
	const storedName = localStorage.getItem("name");
	myHeading.innerHTML = `Fullstack Lion - ${storedName} <br>Code like a King`;
}

myButton.addEventListener("click",()=>{
	setUserName();
});