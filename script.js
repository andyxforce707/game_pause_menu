// hamburger
const navbarItem = document.querySelectorAll('.navbar .item');
const mission = document.querySelector('.mission');
navbarItem[1].addEventListener('click', () => {
  mission.classList.toggle('mission-active');
  navbarItem[1].classList.toggle('brightness');
  //
  skill.classList.remove('skill-active');
  navbarItem[2].classList.remove('brightness');
  //
  app.classList.remove('app-active');
  navbarItem[3].classList.remove('brightness');
  //
  bounty.classList.remove('bounty-active');
  navbarItem[4].classList.remove('brightness');
});
const hamburger = document.querySelector('.sidebar');
const hamburgerItem = document.querySelectorAll('.sidebar .hamburger');
const navbarLastItem = document.querySelector('.navbar .item:last-child');
const universe = document.body;
navbarLastItem.addEventListener('mouseover', () => {
  hamburger.style.border = '1.5px solid blue';
  for (let i = 0; i < hamburgerItem.length; i++) {
    hamburgerItem[i].style.backgroundColor = 'blue';
  }
});
navbarLastItem.addEventListener('mouseleave', () => {
  hamburger.style.border = '1.5px solid white';
  for (let i = 0; i < hamburgerItem.length; i++) {
    hamburgerItem[i].style.backgroundColor = 'white';
  }
});
const sidebarActive = document.querySelector('.sidebar-active');
hamburger.addEventListener('click', () => {
  sidebarActive.classList.toggle('on');
  hamburger.classList.toggle('active');
  sidebarActive.addEventListener('click', (e) => {
    if (e.target.className != 'sidebar-active') {
      sidebarActive.classList.toggle('on');
      hamburger.classList.toggle('active');
    }
  });
});
const desc = document.querySelector('.sidebar-active .description');
const descSave = desc.querySelector('.description-save');
const sidebarActiveItem = document.querySelectorAll('.sidebar-active .sidebar-active-item');
sidebarActiveItem[0].addEventListener('mouseenter', () => {
  descSave.classList.toggle('description-active');
});
sidebarActiveItem[0].addEventListener('mouseleave', () => {
  descSave.classList.toggle('description-active');
});
const descOption = desc.querySelector('.description-option');
sidebarActiveItem[1].addEventListener('mouseenter', () => {
  descOption.classList.toggle('description-active');
});
sidebarActiveItem[1].addEventListener('mouseleave', () => {
  descOption.classList.toggle('description-active');
});
const descAcc = desc.querySelector('.description-acc');
sidebarActiveItem[2].addEventListener('mouseenter', () => {
  descAcc.classList.toggle('description-active');
});
sidebarActiveItem[2].addEventListener('mouseleave', () => {
  descAcc.classList.toggle('description-active');
});
const descCon = desc.querySelector('.description-con');
sidebarActiveItem[3].addEventListener('mouseenter', () => {
  descCon.classList.toggle('description-active');
});
sidebarActiveItem[3].addEventListener('mouseleave', () => {
  descCon.classList.toggle('description-active');
});
const descQuit = desc.querySelector('.description-quit');
sidebarActiveItem[4].addEventListener('mouseenter', () => {
  descQuit.classList.toggle('description-active');
});
sidebarActiveItem[4].addEventListener('mouseleave', () => {
  descQuit.classList.toggle('description-active');
});
// skill section
const skill = document.querySelector('.skill');
const skillActive = skill.querySelector('.skill-sidebar');
navbarItem[2].addEventListener('click', () => {
  skill.classList.toggle('skill-active');
  mission.classList.remove('mission-active');
  app.classList.remove('app-active');
  navbarItem[2].classList.toggle('brightness');
  navbarItem[1].classList.remove('brightness');
  navbarItem[3].classList.remove('brightness');
  bounty.classList.remove('bounty-active');
  navbarItem[4].classList.remove('brightness');
});
// appereance section
const app = document.querySelector('.app');
const appActive = skill.querySelector('.app-sidebar');
navbarItem[3].addEventListener('click', () => {
  app.classList.toggle('app-active');
  navbarItem[3].classList.toggle('brightness');
  skill.classList.remove('skill-active');
  mission.classList.remove('mission-active');
  navbarItem[2].classList.remove('brightness');
  navbarItem[1].classList.remove('brightness');
  bounty.classList.remove('bounty-active');
  navbarItem[4].classList.remove('brightness');
});
// appereance section
const bounty = document.querySelector('.bounty');
navbarItem[4].addEventListener('click', () => {
  bounty.classList.toggle('bounty-active');
  navbarItem[4].classList.toggle('brightness');
  app.classList.remove('app-active');
  navbarItem[3].classList.remove('brightness');
  skill.classList.remove('skill-active');
  mission.classList.remove('mission-active');
  navbarItem[2].classList.remove('brightness');
  navbarItem[1].classList.remove('brightness');
});
