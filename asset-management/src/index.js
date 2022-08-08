import css from './style.scss';
import Image from './image.jpg';

function component() {
  const element = document.createElement('div');
  const myImage = document.createElement('img');
  myImage.src = Image;
  myImage.width = 300;
  element.appendChild(myImage);
  // console.log(element);
  return element;
}

document.body.appendChild(component());
