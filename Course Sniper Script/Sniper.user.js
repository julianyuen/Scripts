// ==UserScript==
// @name        Sniper
// @namespace   asdf
// @include     https://ssb.cc.binghamton.edu*
// @version     1
// @grant       none
// ==/UserScript==

var allInput, thisInput, seconds;
allInput = document.evaluate('//input[@value]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

if(document.URL == 'https://ssb.cc.binghamton.edu/banner/twbkwbis.P_GenMenu?name=homepage'){
	location.href = 'https://ssb.cc.binghamton.edu/banner/twbkwbis.P_WWWLogin';
}

if(document.URL == 'https://ssb.cc.binghamton.edu/banner/twbkwbis.P_WWWLogin'){
	document.getElementById('UserID').value = '';
	document.getElementsByName('PIN')[0].value = '';
	var allInput, thisInput, seconds;
	allInput = document.evaluate('//input[@value]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (var i = 0; i < allInput.snapshotLength; i++) {
		thisInput = allInput.snapshotItem(i);
		if(thisInput.value == 'Login'){
			thisInput.click();
		}
	}
}

if(document.body.innerHTML.indexOf('Main Menu / Home') != -1){
	location.href = 'https://ssb.cc.binghamton.edu/banner/bwskfcls.p_sel_crse_search';
}

if(document.URL == 'https://ssb.cc.binghamton.edu/banner/bwskfcls.p_sel_crse_search'){
	document.getElementById('term_input_id').value = '201420';
	for (var i = 0; i < allInput.snapshotLength; i++) {
		thisInput = allInput.snapshotItem(i);
		if(thisInput.value == 'Submit'){
			thisInput.click();
		}
	}
}

if(document.URL == 'https://ssb.cc.binghamton.edu/banner/bwckgens.p_proc_term_date'){
	document.getElementById('subj_id').value = 'CS';
	for (var i = 0; i < allInput.snapshotLength; i++) {
		thisInput = allInput.snapshotItem(i);
		if(thisInput.value == 'Section Search'){
			thisInput.click();
		}
	}
}

if(document.URL == 'https://ssb.cc.binghamton.edu/banner/bwskfcls.P_GetCrse_Advanced'){
	var t = document.getElementsByTagName('td')[1589].innerHTML;
	if(t < 18){
		alert('There\'s space!');
	}
	else{
		location.href = 'https://ssb.cc.binghamton.edu/banner/bwskfcls.p_sel_crse_search';
	}
}

if(document.URL == 'https://ssb.cc.binghamton.edu/banner/bwskfreg.P_AltPin' || document.URL == 'https://ssb.cc.binghamton.edu/banner/bwckcoms.P_Regs'){
	document.getElementById('crn_id1').value = '20448';
	for (var i = 0; i < allInput.snapshotLength; i++) {
		thisInput = allInput.snapshotItem(i);
		if(thisInput.value == 'Submit Changes'){
			thisInput.click();
		}
	}
}