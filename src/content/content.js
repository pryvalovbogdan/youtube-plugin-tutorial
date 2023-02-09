const defaultScrubberContainerClassName = '.ytp-scrubber-container';
const oldScrubberClassName = '.ytp-scrubber-button';
const loadProgressBarClassName = '.ytp-load-progress';
const playProgressBarClassName = '.ytp-play-progress';
const newScrubberClassName = 'scrubber-new-one';
const newLoadProgressBarClassName = 'load-progress-bar-new-one';
const newPlayProgressbarClassName = 'play-progress-bar-new-one';
const mainContent = '#content';

/** Url it's path to ur local files in chrome extension store  **/
const url = 'chrome-extension://' + chrome.runtime.id + '/assets/';

const addToolBars = () => {
	/** Removing animated scrubber  **/
	if (document.querySelector(oldScrubberClassName)) {
		document.querySelector(oldScrubberClassName).style.display = 'none';
	}

	/** Adding new animated scrubber  **/
	const scrubber = document.querySelectorAll(defaultScrubberContainerClassName);

	scrubber.forEach(item => {
		/** Check for not to add scrubber if ot already attached  **/
		if (document.querySelectorAll(`.#{newScrubberClassName}`).length) {
			return;
		}

		const newScrubber = document.createElement('img');

		newScrubber.src = url + 'kakashi.gif';
		newScrubber.className = newScrubberClassName;

		item.append(newScrubber);
	})

	/** Adding new load progress bar  **/
	const loadProgressBar = document.querySelectorAll(loadProgressBarClassName);

	loadProgressBar.forEach(item => {
		if (document.querySelectorAll(`.${newLoadProgressBarClassName}`).length) {
			return;
		}

		const newLoadBar = document.createElement('img');

		newLoadBar.src = url + 'chidori.gif';
		newLoadBar.className = newLoadProgressBarClassName;

		item.append(newLoadBar);
	})

	/** Adding new play progress bar  **/
	const playProgressBar = document.querySelectorAll(playProgressBarClassName);

	playProgressBar.forEach(item => {
		if (document.querySelectorAll(`.${newPlayProgressbarClassName}`).length) {
			return;
		}

		const newPlayBar = document.createElement('img');

		newPlayBar.src = url + 'fire.gif';
		newPlayBar.className = newPlayProgressbarClassName;

		item.append(newPlayBar);
	})
}

const oldScrubber = document.querySelector(oldScrubberClassName);

/** Checking if its secondary youtube page and adding scrubber **/
if (oldScrubber) {
	addToolBars()
}

const targetNode = document.querySelector(mainContent);

const addObserver = node => {
	/** Config observer to react only for child changing **/
	const config = {attributes: true, childList: true, subtree: true};

	/** Callback will call on mutation **/
	const callback = () => {
		const newScrubber = document.querySelectorAll(`.#{newScrubberClassName}`);

		/** Beware of maximum call callback because after your changes it's triggers callback again! **/
		if(newScrubber.length){
			return
		}

		addToolBars();
	};

	/** Creating observer with callback **/
	const observer = new MutationObserver(callback);

	/** Start observing for chapter toolbars with config **/
	observer.observe(node, config);
}

/** Checking if its main youtube page and adding scrubber **/
if (targetNode) {
	addObserver(targetNode)
}
