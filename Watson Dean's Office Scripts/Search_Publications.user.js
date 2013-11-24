// ==UserScript==
// @name        Search Publications
// @include		https://login.proxy.binghamton.edu/login*
// @include     https://login.proxy.binghamton.edu/login?qurl=http%3a%2f%2fwww.engineeringvillage.com
// @include		http://www.engineeringvillage.com.proxy.binghamton.edu/*
// @include     http://www.ncbi.nlm.nih.gov/pubmed*
// @include     https://login.proxy.binghamton.edu/login?qurl=http%3a%2f%2fwww.sciencedirect.com%2f
// @include		http://www.sciencedirect.com.proxy.binghamton.edu/*
// @include     https://login.proxy.binghamton.edu/login?qurl=http%3a%2f%2fapps.webofknowledge.com
// @include		http://apps.webofknowledge.com.proxy.binghamton.edu/*
// @include		http://directory.binghamton.edu/directory*
// @include		http://www.binghamton.edu/libraries/*
// @include		http://dc01vg0055na.hosted.exlibrisgroup.com*
// @include		http://scholar.google.com/*
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

//Get names from Watson departments
if(document.URL == 'http://directory.binghamton.edu/directory/directory.main'){
	localStorage.clear();
	localStorage.setItem('c', 0);
	var con = confirm('Would you like to search the directory for names?');
	if(con == true){
		location.href = 'http://directory.binghamton.edu/directory/directory.dept_profile?id=7CDB11B8EAF58BCA4265F0D154EEC7AA';
	}
	else{
		return;
	}
}

if(document.URL == 'http://directory.binghamton.edu/directory/directory.dept_profile?id=7CDB11B8EAF58BCA4265F0D154EEC7AA'){
	nameCount = localStorage.getItem('c');
	alert('Bioengineering Department');
	var number = document.getElementsByTagName('tr');
	var a = document.getElementsByTagName('a');
	for(var i = 21; i < 21 + number.length - 2; i++){
		localStorage.setItem('name[' + nameCount + ']', a[i].innerHTML);
		nameCount++;
	}
	localStorage.setItem('c', nameCount);
	location.href = 'http://directory.binghamton.edu/directory/directory.dept_profile?id=C421F1A8B8AA64E1010B035011275C19';
}

if(document.URL == 'http://directory.binghamton.edu/directory/directory.dept_profile?id=C421F1A8B8AA64E1010B035011275C19'){
	nameCount = localStorage.getItem('c');
	alert('Computer Science Department');
	var number = document.getElementsByTagName('tr');
	var a = document.getElementsByTagName('a');
	for(var i = 22; i < 22 + number.length - 2; i++){
		localStorage.setItem('name[' + nameCount + ']', a[i].innerHTML);
		nameCount++;
	}
	localStorage.setItem('c', nameCount);
	location.href = 'http://directory.binghamton.edu/directory/directory.dept_profile?id=3F70EC86BD014D5B1551E88C1A4EE81C';
}

if(document.URL == 'http://directory.binghamton.edu/directory/directory.dept_profile?id=3F70EC86BD014D5B1551E88C1A4EE81C'){
	nameCount = localStorage.getItem('c');
	alert('Electrical and Computer Engineering Department');
	var number = document.getElementsByTagName('tr');
	var a = document.getElementsByTagName('a');
	for(var i = 21; i < 21 + number.length - 2; i++){
		localStorage.setItem('name[' + nameCount + ']', a[i].innerHTML);
		nameCount++;
	}
	localStorage.setItem('c', nameCount);
	location.href = 'http://directory.binghamton.edu/directory/directory.dept_profile?id=6A610D44D59F65F66C10B533FA5FE654';
}

if(document.URL == 'http://directory.binghamton.edu/directory/directory.dept_profile?id=6A610D44D59F65F66C10B533FA5FE654'){
	nameCount = localStorage.getItem('c');
	alert('Mechanical Department');
	var number = document.getElementsByTagName('tr');
	var a = document.getElementsByTagName('a');
	for(var i = 22; i < 22 + number.length - 2; i++){
		localStorage.setItem('name[' + nameCount + ']', a[i].innerHTML);
		nameCount++;
	}
	localStorage.setItem('c', nameCount);
	location.href = 'http://directory.binghamton.edu/directory/directory.dept_profile?id=CA502B75A436EAD0C058CE4AF0EA53BC';
}

if(document.URL == 'http://directory.binghamton.edu/directory/directory.dept_profile?id=CA502B75A436EAD0C058CE4AF0EA53BC'){
	nameCount = localStorage.getItem('c');
	alert('Systems Science and Industrial Engineering Department');
	var number = document.getElementsByTagName('tr');
	var a = document.getElementsByTagName('a');
	for(var i = 22; i < 22 + number.length - 2; i++){
		localStorage.setItem('name[' + nameCount + ']', a[i].innerHTML);
		nameCount++;
	}
	localStorage.setItem('c', nameCount);
	location.href = 'http://directory.binghamton.edu/directory/directory.dept_profile?id=D974373A5352C2DD693939716FD8F442';
}

if(document.URL == 'http://directory.binghamton.edu/directory/directory.dept_profile?id=D974373A5352C2DD693939716FD8F442'){
	nameCount = localStorage.getItem('c');
	alert('Center for Autonomous Solar Power (CASP)');
	var number = document.getElementsByTagName('tr');
	var a = document.getElementsByTagName('a');
	for(var i = 22; i < 22 + number.length - 2; i++){
		localStorage.setItem('name[' + nameCount + ']', a[i].innerHTML);
		nameCount++;
	}
	localStorage.setItem('c', nameCount);
	location.href = 'http://directory.binghamton.edu/directory/directory.dept_profile?id=15902C76755AEF0126ABFF138F1A6FF5';
}

if(document.URL == 'http://directory.binghamton.edu/directory/directory.dept_profile?id=15902C76755AEF0126ABFF138F1A6FF5'){
	nameCount = localStorage.getItem('c');
	alert('Integrated Electronics Engineering Center (IEEC)');
	var number = document.getElementsByTagName('tr');
	var a = document.getElementsByTagName('a');
	for(var i = 21; i < 21 + number.length - 2; i++){
		localStorage.setItem('name[' + nameCount + ']', a[i].innerHTML);
		nameCount++;
	}
	localStorage.setItem('c', nameCount);
	location.href = 'http://directory.binghamton.edu/directory/directory.dept_profile?id=CCBAF39DD54BAE6526B1C4C9CC3B19DF';
}

if(document.URL == 'http://directory.binghamton.edu/directory/directory.dept_profile?id=CCBAF39DD54BAE6526B1C4C9CC3B19DF'){
	nameCount = localStorage.getItem('c');
	alert('Small Scale Systems Integration and Packaging (S3IP)');
	var number = document.getElementsByTagName('tr');
	var a = document.getElementsByTagName('a');
	for(var i = 21; i < 21 + number.length - 2; i++){
		localStorage.setItem('name[' + nameCount + ']', a[i].innerHTML);
		nameCount++;
	}
	localStorage.setItem('c', nameCount);
	nameCount = localStorage.getItem('c');
	var array = new Array;
	for(var i = 0; i < nameCount; i++){
		var get = localStorage.getItem('name[' + i + ']');
		array.push('\'' + get + '\'');
	}
	alert(array);
}

//Searching Engineering Village, Science Direct, and Web of Science
if(document.URL == 'http://www.binghamton.edu/libraries/'){
	var search = confirm('Would you like to search the databases?');
	if(search == true){
		database = prompt('Which database would you like to search?\nEnter ev for Engineering Village\nEnter pb for PubMed\nEnter sd for ScienceDirect\nEnter ws for Web of Science\nEnter gs for Web of Science');
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
			case 'gs':
				location.href = 'http://scholar.google.com/';
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
	document.getElementById('srchWrd1').value = 'binghamton';
	document.getElementById('sect1').selectedIndex = 4;
	document.getElementsByName('searchWord2')[0].value = 'engineering';
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
	/*var s = document.getElementsByClassName('author');
	for(var i = 0; i < count; i++){
		for(var j = 0; j < s[i].getElementsByTagName('a').length; j++){
			for(k = 0; k < names.length; k++){
				if(s[i].getElementsByTagName('a')[j].innerHTML.indexOf(names[k].substring(names[k].lastIndexOf(' '), names[k].length)) > -1){
					var pr = prompt('Are ' + s[i].getElementsByTagName('a')[j].innerHTML + ' and ' + names[k] + ' the same person?\nEnter y for yes and n for no.');
					var isBing = true;
					if(pr == 'y'){
						isBing = true;
					}
					else{
						isBing = false;
					}
					if(isBing == false){
						excel.splice(i, 1);
					}
				}
			}
		}

	}*/
	var ex = '';
	for(var i = 0; i < excel.length; i++){
		ex += excel[i] + '\n';
	}
	/*alert(ex);
	for(var i = 0; i < a.length; i++){
		if(a[i].innerHTML == 'Next &gt;'){
			a[i].click();
		}
	}*/
}

//Search publications in PubMed
if(document.URL == 'http://www.ncbi.nlm.nih.gov/pubmed?otool=sunybrlib'){
	startDate = prompt('Please enter the publication starting date in YYYY/MM/DD format.');
	location.href = 'http://www.ncbi.nlm.nih.gov/pubmed?term=%28%28binghamton[Affiliation]%29%20AND%20engineering%29%20AND%20%28%22' + startDate +'%22[Date%20-%20Publication]%20%3A%20%223000%22[Date%20-%20Publication]%29';
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
	document.getElementsByName('addSearchText')[0].value = 'engineering';
	document.getElementById('dateSelectRadio').click();
	var select = document.getElementsByName('fromDate')[0];
	for(var i = 0; i < select.length; i++){
		if(select.options[i].value == fromDate){
			select.selectedIndex = i;
			break;
		}
	}
	var option = document.getElementsByTagName('option');
	for(var i = 0; i < option.length; i++){
		if(option[i].innerHTML == ' - All Sciences -'){
			option[i].selected = false;
		}
		if(option[i].innerHTML == ' Chemical Engineering'){
			option[i].selected = true;
		}
		if(option[i].innerHTML == ' Computer Science'){
			option[i].selected = true;
		}
		if(option[i].innerHTML == ' Engineering'){
			option[i].selected = true;
		}
		if(option[i].innerHTML == ' Materials Science'){
			option[i].selected = true;
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
	/*alert(ex);
	var input = document.getElementsByTagName('input');
	document.getElementsByName('topNext')[0].click();
	*/
}

//Search publications in Web of Science
if(document.URL.indexOf('UA_GeneralSearch') != -1){
	location.href = 'http://apps.webofknowledge.com.proxy.binghamton.edu/WOS_AdvancedSearch_input.do?product=WOS&SID=1Egv75O2lTBWXURebdt&search_mode=AdvancedSearch';
}

if(document.URL.indexOf('WOS_AdvancedSearch') != -1){
	from = prompt('Please enter the year you want to search from. If you already typed a year, please press cancel.');
	document.getElementsByName('value(input1)')[0].value = 'AD=Binghamton AND SU=engineering';
	document.getElementById('periodRange').click();
	var select = document.getElementsByName('startYear')[0];
	for(var i = 0; i < select.length; i++){
		if(select.options[i].value == from){
			select.selectedIndex = i;
			break;
		}
	}
	document.getElementsByName('')[0].click();
	if(document.body.innerHTML.indexOf('AD=Binghamton AND SU=engineering') != -1){
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

//Search publications in Google Scholars
if(document.URL = 'http://scholar.google.com/'){
	document.getElementById("gs_hp_tsi").value = 'test';
	//document.getElementById("gs_hp_tsb").click();
}