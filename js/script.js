function openTab(evt, tabName) {
	const btnTrending = document.querySelector('btn-trending');
	const btnAnnouncements = document.querySelector('btn-announcements');
	const btnProjects = document.querySelector('btn-projects');
	const trending = document.querySelector('.trending')
	const announcements = document.querySelector('.announcements')
	const cardsWrapper = document.querySelector('.cards-wrapper')
	const tabClicked = document.querySelector(`.${tabName}`);
	trending.style.display = "none";
	announcements.style.display = "none";
	cardsWrapper.style.display = "none";
	
	tabClicked.style.display = "block";
}

