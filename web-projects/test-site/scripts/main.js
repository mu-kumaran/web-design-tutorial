const myImage = document.querySelector("img");
console.log(myImage);
myImage.addEventListener('click',()=> {
	const mySrc = myImage.getAttribute('src');
	if(mySrc === "images/fs-lion.jfif"){
		myImage.setAttribute("src","images/fs-lion.jpeg");
	}else{
		myImage.setAttribute("src","images/fs-lion.jfif");
	}
});

const myHeading = document.querySelector("h1");
console.log(myHeading);
myHeading.textContent = "I'm a hero";