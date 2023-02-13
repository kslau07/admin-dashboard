function openTab(evt, tabName) {
	const btnTrending = document.querySelector('btn-trending');
	const btnAnnouncements = document.querySelector('btn-announcements');
	const btnProjects = document.querySelector('btn-projects');
	const trending = document.querySelector('.trending')
	const announcements = document.querySelector('.announcements')
	const cardsWrapper = document.querySelector('.cards-wrapper')
	const tabClicked = document.querySelector(`.${tabName}`);
	// trending.style.display = "none";
	// announcements.style.display = "none";
	// cardsWrapper.style.display = "none";
	// tabClicked.style.display = "grid";
	// trending.style.gridArea = "empty1";
	// trending.style.visibility = "hidden";
	// announcements.style.gridArea = "empty1";
	// announcements.style.visibility = "hidden";
	// cardsWrapper.style.gridArea = "empty1";
	// cardsWrapper.style.visibility = "hidden";
	// tabClicked.style.gridArea = "cards";
	// tabClicked.style.visibility = "visible";

	cardsWrapper.style.zIndex = "-1";
	announcements.style.zIndex = "-1";
	trending.style.zIndex = "-1";

	tabClicked.style.zIndex = "1";

	// js above adds inline style which is difficult to override
	// use below, use classes instead
	// getElementById(#menu).classList.add("newHeight")




}

// Add event listener to resize, read width. when we get above x, we have to
// undo the above. 
function fixDisplay() {
	const trending = document.querySelector('.trending')
	const announcements = document.querySelector('.announcements')
	const cardsWrapper = document.querySelector('.cards-wrapper')

	const innerWidth = window.innerWidth;

	if (innerWidth > 900) {
		trending.style.display = "grid";
		announcements.style.display = "grid";
		cardsWrapper.style.display = "grid";
			
	};
	// alert(100)
	console.log( window.innerWidth );
};

// window.addEventListener('resize', fixDisplay)