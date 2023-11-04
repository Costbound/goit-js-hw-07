const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");
/////////////////////////STYLES//////////////////////////////////
list.style.display = "flex";
list.style.flexWrap = "wrap";
list.style.gap = "48px 24px";
list.style.padding = "40px";
list.style.width = "1440px";
list.style.justifyContent = "center";
list.style.alignItems = "center";
list.style.margin = "0 auto";
//////////////////////////////////////////////////////////////////////
images.forEach(image => {
  const picture = document.createElement("img");
  picture.setAttribute("src", image.url);
  picture.setAttribute("alt", image.alt);
  picture.setAttribute("width", "360");
  picture.setAttribute("height", "300");
  list.append(picture);
});

