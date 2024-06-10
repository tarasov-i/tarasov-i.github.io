document.addEventListener("scroll", (event) => {});

const button = document.getElementById('scrollTop');
var buttonVisible = false;

onscroll = (event) => {
	if (window.scrollY > 0 && buttonVisible == false)
	{
		button.style.visibility = 'visible';
		buttonVisible = true;
	}
	else if (window.scrollY == 0 && buttonVisible == true)
	{
		button.style.visibility = 'hidden';
		buttonVisible = false;
	}
}