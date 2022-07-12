


// I recognize that there is very little attention to coding conventions in this file.
// I will rewrite all the function names at the soonest available opportunity.



let messageFeed=""
let resourceFeed="viewing resources. nothing has been posted yet."
let assignmentFeed="no active assignments."
var css_file_href='projectStyle.css';
let theme="default";

let contrast="normal";

function message(){
	
	let input = document.getElementById('message_input').value;

	if(input===""){
		return;
	}

	var msg = document.getElementById('messages');
	msg.innerHTML += ("<br><p>Default User says: "+input+"</p>");
	messageFeed+=("<br><p>Default User says: "+input+"</p>");
		//alert("you inputted: "+input);
	$("#message_input").val("");
}
function loadFeed(){
	$("#messages").html(messageFeed);
	document.getElementById('messages').innerHTML=(messageFeed);
}
function loadResources(){
	$("#messages").html(resourceFeed);
	document.getElementById('messages').innerHTML=(resourceFeed);
}
function loadAssignments(){
	$("#messages").html(assignmentFeed);
}

function toggle_style(){

	if(theme==="default"){
		
		theme="bright";
		css_file_href='brightStyle.css';
		set_style();
		
	}else if (theme==="bright"){
		
		theme="default";
		css_file_href='projectStyle.css';
		set_style();
	}
}

function set_style(){
	if(theme==="default"){
		var cssFile = document.createElement('link');
		cssFile.rel = 'stylesheet';
		cssFile.href = css_file_href;  // or path for file {themes('/styles/mobile.css')}
		document.head.appendChild(cssFile); // append css to head element 
		document.body.style.backgroundColor='black';
	}else if (theme==="bright"){
		var cssFile = document.createElement('link');
		cssFile.rel = 'stylesheet';
		cssFile.href = css_file_href;  // or path for file {themes('/styles/mobile.css')}
		document.head.appendChild(cssFile); // append css to head element 
		document.body.style.backgroundColor='white';
	}
}

function low_contrast(){
	if(contrast==="normal"){
	if(theme==="bright"){
	document.body.style.backgroundColor = 'lightGray';
	}else if (theme==="default"){
		document.body.style.backgroundColor='rgb(52,53,56)';
	}
	}
}

function submitDescription(){
	let input = document.getElementById('profile-description').value;
	$("#current-description").html(input);
}

function set_font_size(){
	let input=document.getElementById('font-size-input').value;

	document.body.style.fontSize=input;
}
function set_font(){
	
	let input=document.getElementById('font-input').value;

	document.getElementsByTagName.style.fontFamily=input.value;
}