var username=document.forms['form']['username'];
var email=document.forms['form']['email'];
var password=document.forms['form']['password'];
var password_confirmation=document.forms['form']['confirmation_password'];
var name_error = document.getElemnetById("name_error");
var email_error = document.getElemnetById("email_error");
var pass_error = document.getElemnetById("pass_error");

username.addEventListener("textInput",nameVerify);
email.addEventListener("textInput",emailVerify);
password.addEventListener("textInput",passVerify);

function validate(){
	if(username.value==""){
		username.style.border="1px solid red";
		name_error.display="block";
		username.focus();
		return false;
	}
	if(email.value==""){
		email.style.border="1px solid red";
		email_error.display="block";
		email.focus();
		return false;
	}
	if(password.value==""){
		password.style.border="1px solid red";
		pass_error.display="block";
		password.focus();
		return false;
	}	
}

function nameVerify(){
	if(username.value!=""){
		username.style.border="1px solid white";
		name_error.innerHTML="";
		return true;
	}
}
function emailVerify(){
	if(email.value!=""){
		email.style.border="1px solid white";
		email_error.innerHTML="";
		return true;
	}
}
function passVerify(){
	if(password.value!=""){
		password.style.border="1px solid white";
		pass_error.innerHTML="";
		return true;
	}
}