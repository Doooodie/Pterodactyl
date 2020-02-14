import {htmlElements} from "./modules/htmlElements.js"

let interval = setInterval(onIntervalNextTick, 1000);
function onIntervalNextTick() {
	let currentTime = new Date().toTimeString().split(" ", 1).join();
	htmlElements.output.innerText = currentTime;
}

onIntervalNextTick();



// tabs.forEach(function() {
// 	this.addEventListener("click", this.activate);
// })

// htmlElements.clock.addEventListener("click", deactivateStopwatch);
// htmlElements.stopwatch.addEventListener("click", activateStopwatch);
// htmlElements.timer.addEventListener("click", deactivateStopwatch);

function activateElement() {
	htmlElements.clock.classList.remove("selected");
	htmlElements.stopwatch.classList.remove("selected");
	htmlElements.timer.classList.remove("selected");
	event.currentTarget.classList.add("selected");
	clearInterval(interval);
}

function deactivateButtons() {
	htmlElements.startBtn.classList.add("hidden");
	htmlElements.stopBtn.classList.add("hidden");
	htmlElements.resetBtn.classList.add("hidden");
}

function activateButtons() {
	htmlElements.startBtn.addEventListener("click", startStopwatch);
	htmlElements.stopBtn.addEventListener("click", stopStopwatch);
	htmlElements.resetBtn.addEventListener("click", resetStopwatch);
	htmlElements.startBtn.classList.remove("hidden");
	htmlElements.stopBtn.classList.remove("hidden");
	htmlElements.resetBtn.classList.remove("hidden");
}

function deactivateStopwatch() {
	activateElement();
	onIntervalNextTick();
	interval = setInterval(onIntervalNextTick, 1000);
	deactivateButtons();
}

function activateStopwatch() {
	activateElement();
	htmlElements.output.innerText = "0:00";
	activateButtons();
}

function startStopwatch() {
	htmlElements.output.innerText = "0:00";
	const startTime = new Date().getTime();
	interval = setInterval(Timer, 1000);
	function Timer() {
		const difference = (new Date().getTime() - startTime) / 1000;
		let seconds = parseInt(difference % 60);
		const minutes = parseInt((difference / 60) % 60);
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		htmlElements.output.innerText = `${minutes}:${seconds}`;
	}
}

function stopStopwatch() {
	clearInterval(interval);
}

function resetStopwatch() {
	stopStopwatch();
	htmlElements.output.innerText = "0:00";
}
