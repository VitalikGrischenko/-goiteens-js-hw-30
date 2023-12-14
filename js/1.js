const slider = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image")

const linkIndex = img.src.indexOf('m/')+2;

const link = img.src.split('');

slider.addEventListener("input", _.debounce(() => {

    link.splice(linkIndex, img.src.length - linkIndex, `${slider.value}x${slider.value}` );
    img.src = link.join("");
    console.log(link);
    },300,));





    const box = document.querySelector("#box");

document.addEventListener(
  "mousemove",
  _.debounce((event) => {
    box.style.top = `${event.pageY}px`;
    box.style.left = `${event.pageX}px`;
  }, 100)
);