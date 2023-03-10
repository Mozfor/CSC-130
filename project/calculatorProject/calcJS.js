let equation="";
let answer="";
let displayFontSize=36;
let numpadFontSize=18;

var todaysDate=new Date().toISOString().slice(0,10);

// defining the two default color schemes. 
let colorPresets = [{name:"default",date:"2022-07-16",backgroundColor:"#000000",textColor:"#FFFFFF",highlightColor:"#00FFFF"},{name:"light theme",date:"2022-07-16",backgroundColor:"#FFFFFF",textColor:"#000000",highlightColor:"#00FFFF"}]

// each button calls this function with its given character 
function input(val){
	var div=document.getElementById('display');
	equation+=(""+val+"");
	div.innerHTML=equation;
}

// same as input. I did some wierd stuff cause it didn't work at first 
function operate(val){
	String(val);
	var div=document.getElementById('display');
	equation+=(""+val+"");
	div.innerHTML=equation;
}

function enter(){
	// I know this is awful.
	var div=document.getElementById('display');
	if(equation===""){
		return;
	}else{
	if(div.innerHTML==="ERROR"){
		div.innerHTML="";
	}else{
	try{
	if(equation===""){
		div.innerHTML="0";
	}

	answer=eval(equation);
	
	if(answer===undefined){
		div.innerHTML="ERROR";
	}else{
		div.innerHTML=answer;
	}
	
	equation = answer;
	
	} catch(err){

		div.innerHTML="ERROR";
		equation="";
	}
	}
	}
}

// turns out you can't name a function 'clear' 
function clearDisplay(){

	var div=document.getElementById('display');
	equation="";
	answer="";
	div.innerHTML=equation;
	
}



function increaseFontSize(){
	displayFontSize=displayFontSize+5;
	numpadFontSize=numpadFontSize+5;
	document.getElementById("display").style.fontSize=displayFontSize;
	document.querySelectorAll('.numPad button').forEach(e => e.style.fontSize = numpadFontSize);
	document.querySelectorAll('.symbols button').forEach(e => e.style.fontSize = numpadFontSize);

}
function decreaseFontSize(){
	displayFontSize=displayFontSize-5;
	numpadFontSize=numpadFontSize-5;
	document.getElementById("display").style.fontSize=displayFontSize;
	document.querySelectorAll('.numPad button').forEach(e => e.style.fontSize = numpadFontSize);
	document.querySelectorAll('.symbols button').forEach(e => e.style.fontSize = numpadFontSize);

}


function saveStyling(){
	var backgroundColorInput=document.getElementById("backgroundColorPicker").value;
	var textColorInput=document.getElementById("textColorPicker").value;
	var highlightColorInput=document.getElementById("highlightColorPicker").value;

	applyStyling(backgroundColorInput, textColorInput, highlightColorInput);

	var inputtedName = window.prompt("Enter a name for this color scheme");
	if((inputtedName==="")||(inputtedName===null)){
		return;
	}else{
	let newScheme={
		name:inputtedName,
		date:todaysDate,
		backgroundColor:backgroundColorInput,
		textColor:textColorInput,
		highlightColor:highlightColorInput
	};
	colorPresets.push(newScheme);
	alert("added "+inputtedName+" to list of color schemes");
	}
}

function applyStyling(backgroundColor, textColor, highlightColor){
	document.getElementById("calcMain").style.color=textColor;
	document.getElementById("display").style.color=highlightColor;
	document.getElementById("calcMain").style.backgroundColor=backgroundColor;
	document.querySelectorAll('button').forEach(e => e.style.color = highlightColor);
	document.querySelectorAll('button').forEach(e => e.style.borderColor = textColor);
	document.querySelectorAll('div').forEach(e => e.style.borderColor = textColor);
	document.querySelectorAll('div').forEach(e => e.style.backgroundColor = backgroundColor);	
	document.querySelectorAll('div').forEach(e => e.style.color = highlightColor);	
	document.querySelectorAll('a').forEach(e => e.style.color = highlightColor);	
	document.querySelectorAll('input').forEach(e => e.style.color = textColor);	
	document.getElementById("backgroundColorPicker").value=backgroundColor;
	document.getElementById("textColorPicker").value=textColor;
	document.getElementById("highlightColorPicker").value=highlightColor;
}

function invertColors(){
	var backgroundColor=document.getElementById("backgroundColorPicker").value;
	var textColor=document.getElementById("textColorPicker").value;
	var highlightColor=document.getElementById("highlightColorPicker").value;

	var backgroundInv=invertColor(backgroundColor);
	var textInv=invertColor(textColor);
	var highlightInv=invertColor(highlightColor);
	
	applyStyling(backgroundInv,textInv,highlightInv);

}

function loadPreset(){
	
	try{
		var searchedName=document.getElementById("nameInput").value;
		if(searchedName===""){
			alert("enter a valid name in the text box at the bottom.");

		}else{
		// tricky part: loop throughcolorPresets until you find an object with the searched name. 
		var length=colorPresets.length;
		for (let i=0;i<length;i++){
			if(colorPresets[i].name===searchedName){
				var searchedTheme=colorPresets[i];
				applyPreset(searchedTheme);
			}
		}
		}
		
		
	}catch(err){
		alert("enter a valid name in the text box at the bottom.");
	}
	
}


function applyPreset(searchedTheme){
	//thought this would be handy in case I wanted to set up buttons to load the default themes.
	applyStyling(searchedTheme.backgroundColor, searchedTheme.textColor, searchedTheme.highlightColor);
}

// this incredibly useful function was borrowed from https://jsfiddle.net/salman/f9Re3/. I don't own this.

function invertColor(color){
	
	color=color.substring(1);
	color=parseInt(color,16);
	color=0xffffff^color;
	color=color.toString(16);
	color=("000000"+color).slice(-6);
	color="#"+color;
	return color;
	
}