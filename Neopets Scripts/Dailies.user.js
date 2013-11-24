// ==UserScript==
// @name        Dailies
// @namespace   asdf
// @include		http://www.thedailyneopets.com/dailies/
// @include 	http://www.neopets.com/jelly/jelly.phtml
// @include 	http://www.neopets.com/prehistoric/omelette.phtml
// @include		http://www.neopets.com/bank.phtml
// @include		http://www.neopets.com/altador/council.phtml*
// @include     http://www.neopets.com/market.phtml?type=till
// @include     http://www.neopets.com/games/favourites.phtml
// @include     http://www.neopets.com/halloween/applebobbing*
// @include     http://www.neopets.com/pirates/anchormanagement.phtml*
// @include		http://www.neopets.com/island/tombola.phtml
// @include		http://www.neopets.com/worlds/geraptiku/tomb.phtml
// @include		http://www.neopets.com/desert/fruit/index.phtml
// @include     http://www.neopets.com/desert/shrine.phtml
// @include		http://www.neopets.com/faerieland/tdmbgpop.phtml
// @include		http://www.neopets.com/wishing.phtml
// @include		http://www.neopets.com/medieval/symolhole.phtml
// @include		http://www.neopets.com/medieval/turmaculus.phtml
// @include		http://www.neopets.com/market.phtml?type=your*
// @include		http://www.neopets.com/lab2.phtml
// @include 	http://www.neopets.com/petpetlab.phtml
// @include		http://www.neopets.com/pirates/academy.phtml?type=courses
// @include		http://www.neopets.com/pirates/academy.phtml?type=status
// @include		http://www.neopets.com/pirates/process_academy.phtml
// @include		http://www.neopets.com/pirates/academy.phtml
// @version     1
// ==/UserScript==

function open(url){
	var win = window.open(url, '_blank');
	win.focus();
}

function random(from, to)
{
    return Math.floor(Math.random() * (to-from)) + from;
}

if(document.URL == 'http://www.thedailyneopets.com/dailies/'){
	open('http://www.neopets.com/jelly/jelly.phtml');
	open('http://www.neopets.com/prehistoric/omelette.phtml');
	open('http://www.neopets.com/bank.phtml');
	open('http://www.neopets.com/altador/council.phtml');
	open('http://www.neopets.com/market.phtml?type=till');
	open('http://www.neopets.com/shop_of_offers.phtml?slorg_payout=yes');
	open('http://www.neopets.com/petpetpark/daily.phtml');
	open('http://www.neopets.com/halloween/applebobbing.phtml?');
	open('http://www.neopets.com/pirates/anchormanagement.phtml');
	open('http://www.neopets.com/prehistoric/mediocrity.phtml');
	open('http://www.neopets.com/faerieland/wheel.phtml');
	open('http://www.neopets.com/games/game.phtml?game_id=983&size=regular&quality=high&play=true');
	open('http://www.neopets.com/island/tombola.phtml');
	open('http://www.neopets.com/medieval/wiseking.phtml');
	open('http://www.neopets.com/medieval/grumpyking.phtml');
	open('http://www.neopets.com/worlds/geraptiku/tomb.phtml');
	open('http://www.neopets.com/desert/fruitmachine.phtml');
	open('http://www.neopets.com/desert/shrine.phtml');
}

if(document.URL == 'http://www.neopets.com/desert/shrine.phtml' && document.body.innerHTML.indexOf('walks slowly up') != -1){
	open('http://www.neopets.com/faerieland/tdmbgpop.phtml');
	open('http://www.neopets.com/water/fishing.phtml');
	open('http://www.neopets.com/games/giveaway/giveaway_game.phtml');
	open('http://www.neopets.com/pirates/forgottenshore.phtml');
	open('http://www.neopets.com/faerieland/springs.phtml');
	open('http://www.neopets.com/dome/');
	open('http://www.neopets.com/community/index.phtml');
	open('http://www.neopets.com/wishing.phtml');
	open('http://www.neopets.com/medieval/symolhole.phtml');
	open('http://www.neopets.com/lab2.phtml');
	open('http://www.neopets.com/petpetlab.phtml');
}

if(document.URL == 'http://www.neopets.com/altador/council.phtml'){
	location.href = 'http://www.neopets.com/altador/council.phtml?prhv=40194de334896794d31a7f28f912b6b6';
}

if(document.URL == 'http://www.neopets.com/market.phtml?type=till'){
	var np = document.getElementsByTagName('b')[39].innerHTML.replace(/[A-Za-z$-]/g, "").replace(',', '');
	if(np > 0){
		document.getElementsByName('amount')[0].value = np;
		document.getElementsByName('pin')[0].value = '1681'
		var allInput, thisInput;
		allInput = document.evaluate('//input[@value]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
		for (var i = 0; i < allInput.snapshotLength; i++){
			thisInput = allInput.snapshotItem(i);
			if(thisInput.value == "Withdraw"){
				thisInput.click();
			}
		}
	}
}

if(document.URL == 'http://www.neopets.com/halloween/applebobbing.phtml?'){
	location.href = 'http://www.neopets.com/halloween/applebobbing.phtml?bobbing=1';
}

if(document.URL == 'http://www.neopets.com/pirates/anchormanagement.phtml'){
	var el=document.getElementById('form-fire-cannon');
	el.submit();
	el.parentNode.removeChild(el);
}

if(document.body.innerHTML.indexOf('not be on display') != -1){
	document.getElementsByName('pin')[0].value = '1681';
}

if(document.URL == 'http://www.neopets.com/wishing.phtml'){
	document.getElementsByName('donation')[0].value = '21';
	document.getElementsByName('wish')[0].value = 'Halloween Y14 Goodie Bag'
}

if(document.URL == 'http://www.neopets.com/medieval/turmaculus.phtml'){
	document.getElementsByName('wakeup')[0].selectedIndex = 4;
}

if(document.URL == 'http://www.neopets.com/lab2.phtml'){
	document.getElementsByName('chosen')[0].click();
}

if(document.URL == 'http://www.neopets.com/petpetlab.phtml'){
	document.getElementsByName('chosen')[1].click();
}

if(document.URL == 'http://www.neopets.com/pirates/academy.phtml?type=courses'){
	document.getElementsByName('pet_name')[0].selectedIndex = 1;
}

if(document.URL == 'http://www.neopets.com/pirates/academy.phtml'){
	location.href = 'http://www.neopets.com/pirates/academy.phtml?type=courses';
}

var allInput, thisInput, seconds;
allInput = document.evaluate('//input[@value]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = 0; i < allInput.snapshotLength; i++) {
	thisInput = allInput.snapshotItem(i);
	if(thisInput.value == 'Grab some Jelly'){
		thisInput.click();
	}
	if(thisInput.value == 'Grab some Omelette'){
		thisInput.click();
	}
	if(thisInput.value[0] == 'C' && thisInput.value[6] == 't'){
		thisInput.click();
	}
	if(thisInput.value == 'Collect your gift'){
		thisInput.click();
	}
	if(thisInput.value == 'Play Tombola!'){
		thisInput.click();
	}
	if(thisInput.value == 'Open the stone door to the Deserted Tomb...'){
		thisInput.click();
	}
	if(thisInput.value == 'Continue on, at the risk of never returning.  There\'s no turning back.'){
		thisInput.click();
	}
	if(thisInput.value == 'Spin, spin, spin!'){
		thisInput.click();
	}
	if(thisInput.value == 'Approach the Shrine'){
		//thisInput.click();
	}
	if(thisInput.value == 'Talk to the Plushie'){
		thisInput.click();
	}
	if(thisInput.value == 'Make a Wish'){
		thisInput.click();
	}
	if(thisInput.value == 'ENTER!'){
		thisInput.click();
	}
	if(thisInput.value == 'Wake Up!'){
		thisInput.click();
	}
	if(thisInput.value == 'Carry on with the Experiment!'){
		thisInput.click();
	}
	if(thisInput.value == 'Zap the poor Petpet!'){
		thisInput.click();
	}
	if(thisInput.value == 'Start Course'){
		//thisInput.click();
	}
	if(thisInput.value == 'Complete Course!'){
		thisInput.click();
	}
	if(thisInput.value == 'Back to the Swashbuckling Academy'){
		thisInput.click();
	}
}