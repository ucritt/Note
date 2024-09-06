let currentPage = 0;

function nextPage(pageNumber) {
  const pages = document.querySelectorAll('.page');
  if (currentPage < pages.length) {
    pages[currentPage].style.transform = 'rotateY(0deg)';
    currentPage = pageNumber;
  }
}

function showMore() {
  const moreStory = document.getElementById('moreStory');
  moreStory.classList.toggle('hidden');
}
