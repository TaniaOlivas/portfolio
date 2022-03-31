let portfolioTitle = document.getElementById('portfolio-title');

window.onscroll = function () {
  'use strict';

  if (
    document.body.scrollTop >= 1350 ||
    document.documentElement.scrollTop >= 1350
  ) {
    portfolioTitle.classList.add('title');
    portfolioTitle.classList.remove('portfolio-title');
  } else {
    portfolioTitle.classList.add('portfolio-title');
    portfolioTitle.classList.remove('title');
  }
};
