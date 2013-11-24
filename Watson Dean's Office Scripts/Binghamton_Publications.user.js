// ==UserScript==
// @name        Binghamton Publications
// @include		https://login.proxy.binghamton.edu/login*
// @include     https://login.proxy.binghamton.edu/login?qurl=http%3a%2f%2fwww.engineeringvillage.com
// @include		http://www.engineeringvillage.com.proxy.binghamton.edu/*
// @include     http://www.ncbi.nlm.nih.gov/pubmed*
// @include     https://login.proxy.binghamton.edu/login?qurl=http%3a%2f%2fwww.sciencedirect.com%2f
// @include		http://www.sciencedirect.com.proxy.binghamton.edu/*
// @include     https://login.proxy.binghamton.edu/login?qurl=http%3a%2f%2fapps.webofknowledge.com
// @include		http://apps.webofknowledge.com.proxy.binghamton.edu/*
// @include		http://library.binghamton.edu/*
// @include		http://dc01vg0055na.hosted.exlibrisgroup.com*
// @version     1
// ==/UserScript==

var database;
var excel;
var startYear, endYear;
var from;
var fromDate;
var startDate;
var allInput, thisInput, seconds;
var nameCount;
allInput = document.evaluate('//input[@value]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

//Searching Engineering Village, Science Direct, and Web of Science
if(document.URL == 'http://library.binghamton.edu/'){
	var search = confirm('Would you like to search the databases?');
	if(search == true){
		database = prompt('Which database would you like to search?\nEnter ev for Engineering Village\nEnter pb for PubMed\nEnter sd for ScienceDirect\nEnter ws for Web of Science');
		location.href = 'http://proxy.binghamton.edu/login?url=http://dc01vg0055na.hosted.exlibrisgroup.com:8332/V?func=find-db-1';
		switch(database){
			case 'ev':
				location.href = 'http://www.engineeringvillage.com.proxy.binghamton.edu/search/quick.url';
				break;
			case 'pb':
				location.href = 'http://www.ncbi.nlm.nih.gov/pubmed?otool=sunybrlib';
				break;
			case 'sd':
				location.href = 'http://www.sciencedirect.com.proxy.binghamton.edu/';
				break;
			case 'ws':
				location.href = 'http://dc01vg0055na.hosted.exlibrisgroup.com:8332/V/HTY5KCXBXUIKYQ91LVBT9VYRQAR4TYEN72E4VPED4AQQQ4I7HI-00773?func=native-link&resource=BNG06037';
				break;
			default:
				return;
		}
	}
	else{
		return;
	}
}

//Search publications in Engineering Village
if(document.URL.indexOf('http://www.engineeringvillage.com.proxy.binghamton.edu') != -1 && document.body.innerHTML.indexOf('Add search field') != -1){
	startYear = prompt('Please enter the starting year.');
	endYear = prompt('Please enter the ending year.');
	document.getElementById('srchWrd1').value = 'binghamton univ*';
	document.getElementById('sect1').selectedIndex = 4;
	var select1 = document.getElementsByName('startYear')[0];
	var select2 = document.getElementsByName('endYear')[0];
	for(var i = 0; i < select1.length; i++){
		if(select1.options[i].text == startYear){
			select1.selectedIndex = i;
			break;
		}
	}
	for(var i = 0; i < select2.length; i++){
		if(select2.options[i].text == endYear){
			select2.selectedIndex = i;
			break;
		}
	}
	var input = document.getElementsByTagName('input');
	for(var i = 0; i < input.length; i++){
		if(input[i].value == "Search"){
			input[i].click();
		}
	}
}

if(document.URL.indexOf('http://www.engineeringvillage.com.proxy.binghamton.edu') != -1 && document.body.innerHTML.indexOf('articles found') != -1){
	excel = new Array();
	var count = 0;
	var a = document.getElementsByTagName('a');
	for(var i = 0; i < a.length; i++){
		if(a[i].innerHTML == 'Abstract'){
			count++;
		}
	}
	var b = document.getElementsByTagName('b');
	for(var i = 0; i < b.length; i++){
		if(b[i].innerHTML == '&nbsp;Source:'){
			excel.push(b[i - 1].innerHTML.replace(/ *\<[^)]*\> */g, ""));
		}
	}
	var ex = '';
	for(var i = 0; i < excel.length; i++){
		ex += excel[i] + '\n';
	}
	//alert(ex);
}

//Search publications in PubMed
if(document.URL == 'http://www.ncbi.nlm.nih.gov/pubmed?otool=sunybrlib'){
	startDate = prompt('Please enter the publication starting date in YYYY/MM/DD format.');
	location.href = 'http://www.ncbi.nlm.nih.gov/pubmed?term=%28binghamton[Affiliation]%29%20AND%20%28%22' + startDate +'%22[Date%20-%20Publication]%20%3A%20%223000%22[Date%20-%20Publication]%29';
}

if(document.body.innerHTML.indexOf('Results:') != -1 && document.body.innerHTML.indexOf('Display Settings') != -1){
	excel = '';
	excel += 'Title' + '\n';
	var a = document.getElementsByTagName('a');
	var count = 0;
	for(var i = 0; i < a.length; i++){
		if(a[i].innerHTML == 'Related citations'){
			count++;
		}
	}
	for(var i = 0; i < a.length; i++){
		if(a[i].innerHTML == 'Related citations'){
			excel += a[i-1].innerHTML + '\n';
		}
	}
	//alert(excel);
}

//Search publications in Science Direct
if(document.body.innerHTML.indexOf('offering journal articles and book chapters from') != -1){
	var a = document.getElementsByTagName('a');
	for(var i = 0; i < a.length; i++){
		if(a[i].innerHTML == 'Advanced search'){
			a[i].click();
		}
	}
}

if(document.body.innerHTML.indexOf('All sources') != -1){
	fromDate = prompt('Please enter the year you want to search from.');
	document.getElementsByName('SearchText')[0].value = 'binghamton';
	document.getElementById('keywordOpt').selectedIndex = 11;
	document.getElementById('dateSelectRadio').click();
	var select = document.getElementsByName('fromDate')[0];
	for(var i = 0; i < select.length; i++){
		if(select.options[i].value == fromDate){
			select.selectedIndex = i;
			break;
		}
	}
	document.getElementsByName('RegularSearch')[0].click();
}

if(document.body.innerHTML.indexOf('Abstract only') != -1){
	excel = new Array();
	var s = document.getElementsByTagName('span');
	for(var i = 0; i < s.length; i++){
		if(s[i].title == 'You are entitled to access the full text of this document' || s[i].title == 'You are not entitled to access the full text of this document'){
			excel.push(s[i+1].innerHTML.replace(/ *\<[^)]*\> */g, ""));
		}
	}
	var ex = '';
	for(var i = 0; i < excel.length; i++){
		ex += excel[i] + '\n';
	}
	//alert(ex);
	//var input = document.getElementsByTagName('input');
	//document.getElementsByName('topNext')[0].click();
}

//Search publications in Web of Science
if(document.URL.indexOf('UA_GeneralSearch') != -1){
	location.href = 'http://apps.webofknowledge.com.proxy.binghamton.edu/WOS_AdvancedSearch_input.do?product=WOS&SID=1Egv75O2lTBWXURebdt&search_mode=AdvancedSearch';
}

if(document.URL.indexOf('WOS_AdvancedSearch') != -1){
	from = prompt('Please enter the year you want to search from. If you already typed a year, please press cancel.');
	document.getElementsByName('value(input1)')[0].value = 'AD=Binghamton';
	document.getElementById('periodRange').click();
	var select = document.getElementsByName('startYear')[0];
	for(var i = 0; i < select.length; i++){
		if(select.options[i].value == from){
			select.selectedIndex = i;
			break;
		}
	}
	document.getElementsByName('')[0].click();
	if(document.body.innerHTML.indexOf('AD=Binghamton') != -1){
		var a = document.getElementsByTagName('a');
		for(var i = 0; i < a.length; i++){
			if(a[i].title == 'Click to view the results'){
				a[i].click();
			}
		}
	}
}

if(document.URL.indexOf('summary.do') != -1){
	excel = '';
	excel += 'Title' + '\n';
	var v = document.getElementsByTagName('value');
	for(var i = 0; i < v.length; i++){
		excel += v[i].innerHTML + '\n';
	}
	/*alert(excel);
	var image = document.getElementsByTagName('img');
	for(var i = 0; i < image.length; i++){
		if(image[i].title == 'Next Page'){
			image[i].click();
		}
	}*/
}