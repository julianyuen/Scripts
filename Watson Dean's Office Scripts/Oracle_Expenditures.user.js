// ==UserScript==
// @name        Oracle Expenditures
// @namespace   https://portal.rfsuny.org*
// @include     https://portal.rfsuny.org*
// @include     http://portal.rfsuny.org/RFQuickView/faces*
// @include     https://minnow.rfsuny.org*
// @version     1
// ==/UserScript==

var awards = new Array('30568', '30568');
var excel = new Array();
var count = 0;

function login(){
	if(document.body.innerHTML.indexOf('user name and password') != -1){
		document.getElementsByName('ssousername')[0].value = '';
		document.getElementsByName('password')[0].value = '';
		window.setTimeout(function(){document.getElementById('CL_Login').click();}, 2000);
	}
	if(document.body.innerHTML.indexOf('expired') != -1){
		document.getElementsByName('password')[0].value = '';
		window.setTimeout(function(){document.getElementsByName('submit')[0].click();}, 2000);
	}
	if(document.body.innerHTML.indexOf('Already logged in?') != -1){
		location.href = 'http://portal.rfsuny.org/RFQuickView/faces/awd_admin.jspx';
	}
}

function searchOracle(){
	if(document.body.innerHTML.indexOf('Business Applications') != -1){
		location.href = 'http://portal.rfsuny.org/RFQuickView/faces/awd_admin.jspx';
	}
}

function makeArray(){
	count = localStorage.getItem('c');
	while(count < awards.length){
		if(document.body.innerHTML.indexOf('Select Principal Investigator by Name') != -1){
			document.getElementById('_id1:award').value = awards[count];
			setTimeout(function(){submitForm('_id1',1,{source:'_id1:_id16'});}, 1000);
		}
		if(document.body.innerHTML.indexOf('Selected by Award Number') != -1){
			setTimeout(function(){submitForm('_id1',1,{source:'_id1:_id16'});}, 1000);
			var a = document.getElementsByTagName('a');
			a[4].click();
		}
		if(document.body.innerHTML.indexOf('Expenditure Category') != -1){
			submitForm('_id0',1,{source:'_id0:_id7'});
		}
		alert(count);
		count++;
		alert(count);
		localStorage.setItem('c', count);
	}
}

function main(){
	login();
	searchOracle();
	makeArray();
}

main();