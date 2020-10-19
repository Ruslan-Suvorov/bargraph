﻿function barCharts(array){
	const barChart = document.createElement('div');
	document.body.insertBefore(barChart, document.body.firstChild);
  
	const chartY = Math.max.apply(Math, array),
		  chartX = array.length;
	barChart.style.width = chartX*40+"px";
	barChart.style.height = chartY*40+"px";
	barChart.className = "barChart";

	const number = document.createElement("div");
	number.style.fontSize = "14px";
	number.style.position = "absolute"; 
	number.style.textAlign = "right";
	number.style.paddingRight = "2px";
	number.style.width = "17px"
	number.style.left = "-21px";
	number.style.borderTop = "2px solid black";
	number.style.borderRight = "2px solid black";
	for(i = 0; i<=chartY; ++i){
		number.style.bottom = ((i*40)-18)+"px"; 
		number.innerHTML = i; 
		barChart.insertBefore(number.cloneNode(true), barChart.firstChild);
	} 
	number.style.bottom = "-18px";
	for(i = 1; i<=chartX; ++i){
		number.style.left = ((i*40)-21)+"px"; 
		number.innerHTML = i; 
		barChart.insertBefore(number.cloneNode(true), barChart.firstChild);
	} 

	const bar = document.createElement("div");
	bar.style.width="40px";
	bar.style.display="inline-block";
	bar.style.fontSize="0px"; 

	for(i = 1; i<=chartX; ++i){ 
		bar.style.height = (40*array[i-1])+"px";
		let color = "green";
		if (array[i-1]>5){
			color = "yellow";
		}
		if (array[i-1]>10){
			color = "red";
		}
		bar.style.backgroundColor=color;
		barChart.appendChild(bar.cloneNode(true));
	} 
}
const arr = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
barCharts(arr);