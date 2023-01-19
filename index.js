window.onload = function () {
	let blockHide = document.querySelector('.unvisible');
	blockHide.classList.remove('unvisible')
};

let zSpacing = -1000,
	lastpos = zSpacing / 5,
	arrayValues = [];

let frameArray = Array.from(document.getElementsByClassName('frame'));
console.log(frameArray);
window.onscroll = function () {
	let top = document.documentElement.scrollTop,
		delta = lastpos - top;
	lastpos = top;
	frameArray.forEach((n, i) => {
		arrayValues.push((i * zSpacing) + zSpacing);
		arrayValues[i] += delta * - 5.5;
		console.log(arrayValues[i]);
		let frame = frameArray[i],
			transform = `translateZ(${arrayValues[i]}px)`,
			opacity = arrayValues[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
	})
}
window.scrollTo(0, 1);
