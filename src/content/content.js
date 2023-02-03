const defaultScrubberContainerClassName = '.ytp-scrubber-container';
const oldScrubberClassName = '.ytp-scrubber-button';
const loadProgressBarClassName = '.ytp-load-progress';
const playProgressBarClassName = '.ytp-play-progress';

/** Url it's path to ur local files in chrome extension store  **/
const url = 'chrome-extension://' + chrome.runtime.id + '/assets/';

/** Removing animated scrubber  **/
document.querySelector(oldScrubberClassName).style.display = 'none';

/** Adding new animated scrubber  **/
const scrubber = document.querySelectorAll(defaultScrubberContainerClassName);

scrubber.forEach(item => {
	/** Check for not to add scrubber if ot already attached  **/
	if(document.querySelectorAll('.scrubber-new-one').length){
		return;
	}

	const newScrubber = document.createElement('img');

	newScrubber.src = url + 'kakashi.gif';
	newScrubber.className = 'scrubber-new-one';

	item.append(newScrubber);
})

/** Adding new load progress bar  **/
const loadProgressBar = document.querySelectorAll(loadProgressBarClassName);

loadProgressBar.forEach(item => {
	if(document.querySelectorAll('.load-progress-bar-new-one').length){
		return;
	}

	const newLoadBar = document.createElement('img');

	newLoadBar.src = url + 'chidori.gif';
	newLoadBar.className = 'load-progress-bar-new-one';

	item.append(newLoadBar);
})

/** Adding new play progress bar  **/
const playProgressBar = document.querySelectorAll(playProgressBarClassName);

playProgressBar.forEach(item => {
	if(document.querySelectorAll('.play-progress-bar-new-one').length){
		return;
	}

	const newPlayBar = document.createElement('img');

	newPlayBar.src = url + 'fire.gif';
	newPlayBar.className = 'play-progress-bar-new-one';

	item.append(newPlayBar);
})
