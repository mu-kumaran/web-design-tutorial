//Changing BG image
let bodi = document.querySelector('body');
let bgImg = ["linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.2)),url('./images/travel-1.jfif')",
			"linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.2)),url('./images/travel-4.jpg')",
			"linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.2)),url('./images/travel-5.jpg')",
			"linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.6)),url('./images/travel-6.jpg')",
			"linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.6)),url('./images/travel-7.jpg')",
			"linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.2)),url('./images/travel-8.jpg')",
			"linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.6)),url('./images/travel-9.jpg')",
			"linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.6)),url('./images/travel-10.jpg')",
			"linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.5)),url('./images/travel-11.jpg')",
			];
let pick=0;

const changeBG = ()=>{
	
	
	if(pick<bgImg.length){
		bodi.style.background = bgImg[pick];
		bodi.style.backgroundSize = "cover";
		bodi.style.backgroundRepeat = "no-repeat";
		bodi.style.width = "100%"
		bodi.style.height = "100vh"
		}
	else{
		pick=0;
		bodi.style.background = bgImg[pick];
		bodi.style.backgroundSize = "cover";
		bodi.style.backgroundRepeat = "no-repeat";
		bodi.style.width = "100%"
		bodi.style.height = "100vh"
		}
	pick++;
};
setInterval(changeBG,5000);
