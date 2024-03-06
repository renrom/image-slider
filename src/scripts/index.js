import image1  from '../assets/images/1.jpg';
import image2  from '../assets/images/2.jpg';
import image3  from '../assets/images/3.jpg';
import leftslide from '../assets/images/chevron_left.svg';
import rightslide from '../assets/images/chevron_right.svg';

import '../css/styles.css';

const leftSlide = document.getElementById('leftSlide');
const rightSlide = document.getElementById('rightSlide');


leftSlide.src = leftslide;
leftSlide.style.height = '50px'
rightSlide.src = rightslide;
rightSlide.style.height = '50px'



const locationImages = [
    image1,
    image2,
    image3,
]



const imagePlaceHolder = document.querySelector('.image-container');
const imageSelectLeft = document.querySelector('.image-left');
const imageSelectRight = document.querySelector('.image-right')

const totalImages = locationImages.length-1;
let selectedImage = 0;


function hideImage(image) {
    const allImages = document.getElementsByClassName('image');
    allImages[selectedImage].style.visibility = 'hidden';
    allImages[selectedImage].style.opacity = '0';

}

function showImage(image) {
    const allImages = document.getElementsByClassName('image');
    allImages[image].style.visibility = 'visible';
    allImages[image].style.opacity = '1';

}

function imageToTheLeft() {
    hideImage(selectedImage);

    
    if (selectedImage === 0) {
        selectedImage = totalImages;
    } else {
        selectedImage--;
    }
    showImage(selectedImage);
}

function imageToTheRight() {
    
    hideImage(selectedImage);
    if (selectedImage === totalImages) {
        selectedImage = 0;
    } else {
        selectedImage++;
    }

    showImage(selectedImage);
}

imageSelectLeft.addEventListener('click', () => {

    imageToTheLeft();
});

imageSelectRight.addEventListener('click', () => {
    imageToTheRight();
});


setInterval(imageToTheRight, 5000);

let dotsPlacement = document.querySelector(".dots");

let currentImage = 0;

locationImages.forEach(element => {

    const image = document.createElement('img');
    image.className = 'image';
    image.src = element;
    image.style.width = '300px';
    image.style.visibility = 'hidden';
    imagePlaceHolder.appendChild(image);

    const dotSlider = document.createElement('span');
    dotSlider.textContent = ' O ';
    dotSlider.style.cursor = 'pointer';

    const fixedCurrentImage = currentImage;

    dotSlider.addEventListener("click", () => {

        
        console.log(fixedCurrentImage);
        
        hideImage(selectedImage);      
        showImage(fixedCurrentImage);

        


        if (currentImage === totalImages) {
            selectedImage = 0;
        } else {
            selectedImage = fixedCurrentImage;
        }

        


    });

    dotsPlacement.appendChild(dotSlider);
    currentImage++;


});


const image = document.querySelector('.image-container').firstElementChild;
image.style.visibility = 'visible';



