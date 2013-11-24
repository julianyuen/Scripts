// ==UserScript==
// @name        COEUS
// @namespace   https://portal.rfsuny.org*
// @include     https://coeus.buffalo.edu/coeus/*
// @include     https://portal.rfsuny.org*
// @include     http://portal.rfsuny.org*
// @include     https://minnow.rfsuny.org*
// @version     1
// ==/UserScript==

var codes = new Array('7984', '7985', '7990', '7994', '7999', '11284', '7986', '8000');
var credit = new Array();
var excel;
var num = new Array();
var count = -1;
var rows;
var unit;
var begin;
var end;
var person;
var names;

//Logging in using the username, password, and desired campus.
function loginCoeus(){
	if(document.body.innerHTML.indexOf('requires a username') != -1){
		document.getElementsByName('username')[0].value = '';
		document.getElementsByName('password')[0].value = '';
		document.getElementsByName('campusCode')[0].selectedIndex = 1;
		document.getElementsByName('Logon')[0].click();
	}
};

//Navigating to the proposal search.
function navigateCoeus(){
	if(document.body.innerHTML.indexOf('Welcome to CoeusLite') != -1){
		unit = prompt("Please enter the unit number.");
		begin = prompt("Please enter the starting number (starts at 0).\nIf you ended on a number previously, enter the number you ended on.");
		end = prompt("Please enter the ending number (a good number would be the starting number plus 30).");
		localStorage.setItem('u', unit);
		localStorage.setItem('e', end);
		localStorage.setItem('c', begin);
		localStorage.setItem('b', begin);
		location.href = 'https://coeus.buffalo.edu/coeus/proposalList.do?PROPOSAL_TYPE=PROPOSAL_INPROGRESS&Menu_Id=003&SUBHEADER_ID=001'
	}
	if(document.body.innerHTML.indexOf('List of Proposals In Progress') != -1){
		open_proposal_search('/generalProposalSearch.do?type=proposalSearch&search=true&searchName=ALL_PROPOSALDEVSEARCHNOROLES&SUBHEADER_ID=SH003');
	}
	if(document.body.innerHTML.indexOf('enter search criteria') != -1){
		unit = localStorage.getItem('u');
		document.getElementsByName('U.UNIT_NUMBER')[0].value = unit;
		window.setTimeout(function(){document.getElementsByName('Search')[0].click();}, 500);
	}
};

//Creates the Excel array that can be put into Microsoft Excel.
function makeExcel(){
	begin = localStorage.getItem('b');
	end = localStorage.getItem('e');
	count = localStorage.getItem('c');
	rows = document.getElementsByTagName('tr');
	end = Math.min(rows.length - 5, end);
	excel = "";
	names = "";
	excel += "Title" + '\t' + "PI Name" + "\t" + "PI Dept." + "\t" + "Credit Recognition (recognition, financial)" + "\n";
	if(document.body.innerHTML.indexOf('Development Proposal Search Result') != -1){
		var all = document.getElementsByTagName('a');
		while(count < end){
			var proposal = all[10 * count + rows.length - 3].innerHTML;
			proposal = proposal.replace(/\D/g,'');
			location.href = 'https://coeus.buffalo.edu/coeus/getGeneralInfo.do?proposalNumber=' + proposal;
			count++;
			localStorage.setItem('c', count);
			alert();
		}
		for(var i = Math.max(0, begin); i < end; i++){
			excel += all[10 * i + rows.length].innerHTML + "\t" + all[10 * i + rows.length + 3].innerHTML + "\t" + all[10 * i + rows.length + 2].innerHTML + "\t" + localStorage.getItem('credit[' + (i + 1) + ']') + "\n";
			//localStorage.removeItem('credit[' + (i + 1) + ']');
			person = all[10 * i + rows.length + 3].innerHTML;
			person = person.replace(', ', ', Dr. ');
			names += person + '&' + all[10 * i + rows.length].innerHTML + '&';
		}
		alert(excel);
		//location.href = 'https://coeus.buffalo.edu';
		alert('You will now be directed to https://portal.rfsuny.org\nPlease copy the text in the next message box.');
		names = names.substring(0, names.length - 1);
		alert(names);
		location.href = 'https://portal.rfsuny.org/portal/page/portal/The%20Research%20Foundation%20of%20SUNY/home/Login';
	}
	if(document.body.innerHTML.indexOf('General Proposal Information') != -1){
		location.href = 'https://coeus.buffalo.edu/coeus/getCreditSplitInfo.do';
	}
	if(document.URL == 'https://coeus.buffalo.edu/coeus/getCreditSplitInfo.do'){
		location.href = 'https://coeus.buffalo.edu/coeus/generalProposalSearch.do?type=proposalSearch&search=true&searchName=ALL_PROPOSALDEVSEARCHNOROLES&SUBHEADER_ID=SH003';
	}
	if(document.body.innerHTML.indexOf('Credit Split:') != -1){
		var input = document.getElementsByTagName('input');
		var text = "";
		var x = 0;
		if(input.length / 2 == 5){
			var td = document.getElementsByTagName('td');
			td = td.length - ((((((input.length) / 2) - 1) / 4) * 10) + 9);
			for(var i = 0; i < input.length / 2 - 1; i++){
				if(i % 4 == 0 && i != 0){
					x++;
				}
				text += document.getElementsByTagName('td')[td + 3 * i + x].innerHTML.split('<script>')[0]
				.replace(/\s+/g, ' ') + ": " + document.getElementById(input[2 * i].id).value + ", " +
				document.getElementById(input[2 * i + 1].id).value + "\t";
			}
		}
		if(input.length / 2 != 5 && (input.length / 2 - 1) % 4 != 0 && document.body.innerHTML.indexOf('Inst for Energy-Efficient Electronic Systems') == -1){
			var td = document.getElementsByTagName('td');
			td = td.length - ((((((input.length) / 2) - 1) / 3) * 10) + 6);
			for(var i = 0; i < input.length / 2 - 1; i++){
				if(i % 3 == 0 && i != 0){
					x++;
				}
				text += document.getElementsByTagName('td')[td + 3 * i + x].innerHTML.split('<script>')[0]
				.replace(/\s+/g, ' ') + ": " + document.getElementById(input[2 * i].id).value + ", " +
				document.getElementById(input[2 * i + 1].id).value + "\t";
			}
		}
		if(document.body.innerHTML.indexOf('Inst for Energy-Efficient Electronic Systems') != -1){
			var td = document.getElementsByTagName('td');
			td = td.length - ((((((input.length) / 2)) / 4) * 10) + 10);
			for(var i = 0; i < input.length / 2 - 1; i++){
				if(i % 5 == 0 && i != 0){
					x++;
				}
				text += document.getElementsByTagName('td')[td + 3 * i + x].innerHTML.split('<script>')[0]
				.replace(/\s+/g, ' ') + ": " + document.getElementById(input[2 * i].id).value + ", " +
				document.getElementById(input[2 * i + 1].id).value + "\t";
			}
		}
		if((input.length / 2 - 1) % 4 == 0 && input.length / 2 != 5){
			var td = document.getElementsByTagName('td');
			td = td.length - ((((((input.length) / 2) - 1) / 4) * 10) + 12);
			for(var i = 0; i < input.length / 2 - 1; i++){
				if(i % 4 == 0 && i != 0){
					x++;
				}
				text += document.getElementsByTagName('td')[td + 3 * i + x].innerHTML.split('<script>')[0]
				.replace(/\s+/g, ' ') + ": " + document.getElementById(input[2 * i].id).value + ", " +
				document.getElementById(input[2 * i + 1].id).value + "\t";
			}
		}
		if(text.indexOf('<') == -1){
			localStorage.setItem('credit[' + count + ']', text);
			//location.href = 'https://coeus.buffalo.edu/coeus/generalProposalSearch.do?type=proposalSearch&search=true&searchName=ALL_PROPOSALDEVSEARCHNOROLES&SUBHEADER_ID=SH003';
		}
		else{
			localStorage.setItem('credit[' + count + ']', '');
			//location.href = 'https://coeus.buffalo.edu/coeus/generalProposalSearch.do?type=proposalSearch&search=true&searchName=ALL_PROPOSALDEVSEARCHNOROLES&SUBHEADER_ID=SH003';
		}
	}
};

//Log in to Oracle.
function loginOracle(){
	localStorage.clear();
	localStorage.setItem('a', 0);
	if(document.body.innerHTML.indexOf('RF Web Site Login') != -1){
		if(document.body.innerHTML.indexOf('Already logged in?') == -1){
			document.getElementsByName('ssousername')[0].value = 'lisag@binghamton.edu';
			document.getElementsByName('password')[0].value = 'ormiaphone2013';
			window.setTimeout(function(){document.getElementById('CL_Login').click();}, 1000);
		}
		if(document.body.innerHTML.indexOf('expired') != -1){
			document.getElementsByName('password')[0].value = 'ormiaphone2013';
			window.setTimeout(function(){document.getElementsByName('submit')[0].click();}, 1000);
		}
		if(document.body.innerHTML.indexOf('Already logged in?') != -1){
			window.setTimeout(function(){location.href = 'http://portal.rfsuny.org/RFQuickView/faces/awd_admin.jspx';}, 1000);
		}
	}
};

function searchOracle(){
	if(document.body.innerHTML.indexOf('Business Applications') != -1){
		window.setTimeout(function(){location.href = 'http://portal.rfsuny.org/RFQuickView/faces/awd_admin.jspx';}, 1000);
	}
	if(document.body.innerHTML.indexOf('Select Principal Investigator by Name') != -1 && document.body.innerHTML.indexOf('selecting a PI') == -1){
		names = prompt("Please enter the text you copied from COEUS.\nIf you did that already, just press enter.");
		names = names.split('&');
		localStorage.setItem('names', names);
	}
	if(document.body.innerHTML.indexOf('Administrative Window') != -1){
		begin = localStorage.getItem('a');
		end = localStorage.getItem('names');
		alert(begin);
		alert(end.length);
		while(begin < end){
			if(document.body.innerHTML.indexOf('Administrative Window') != -1 && document.body.innerHTML.indexOf('Select Principal Investigator by Name') != -1){
				if(document.body.innerHTML.indexOf('selecting a PI') == -1){
					document.getElementById('_id1:PI').value = names[0];
					submitForm('_id1',1,{source:'_id1:_id32'});
				}
				if(document.body.innerHTML.indexOf('selecting a PI') != -1){
					submitForm('_id1',1,{source:'_id1:_id29'});
				}
			}
			if(document.body.innerHTML.indexOf('Award Overview') != -1){
				submitForm('awd_bal_form',1,{source:'awd_bal_form:_id42:_id43'});
			}
			if(document.body.innerHTML.indexOf('Project Overview') != -1){
				var td = document.getElementsByTagName('td');
				alert(td[45].innerHTML);
				begin++;
				localStorage.setItem('a', begin);
			}
			alert();
		}
	}
};

//Main function that runs everything in order.
function main(){
	loginCoeus();
	navigateCoeus();
	makeExcel();
	loginOracle();
	searchOracle();
};

main();