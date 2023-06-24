// JavaScript for slideshow
const slideshow = document.getElementById('slideshow');
const images = slideshow.getElementsByTagName('img');
let currentIndex = 0;

function showImage(index) {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
  images[index].classList.add('active');
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

setInterval(nextImage, 3000);

// JavaScript for team member hover effect
const members = document.querySelectorAll('.member');

function handleMemberHover(event) {
  const member = event.target.closest('.member');
  members.forEach((m) => m.style.zIndex = '1');
  member.style.zIndex = '2';
}

members.forEach((member) => {
  member.addEventListener('mouseenter', handleMemberHover);
  member.addEventListener('mouseleave', handleMemberHover);
});
