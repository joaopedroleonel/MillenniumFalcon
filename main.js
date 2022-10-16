const item = document.querySelectorAll("[data-anima]");

const Scroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

Scroll();

window.addEventListener("scroll", ()=>{
  Scroll();
})

function menu() {
  document.getElementById('cards').style.display = "flex";
}

function menuX() {
   document.getElementById('cards').style.display = "none";
}

function Millennium() {
  document.getElementById('Millennium').scrollIntoView({
  behavior: 'smooth'
});
}

function Lando() {
  document.getElementById('Lando').scrollIntoView({
  behavior: 'smooth'
});
}

function Han() {
  document.getElementById('Han').scrollIntoView({
  behavior: 'smooth'
});
}