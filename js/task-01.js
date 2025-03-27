const categories = document.querySelectorAll('.item');
console.log(`Categories quantity: ${categories.length}`);

categories.forEach((category) => {
  const title = category.querySelector(`h2`);
  const items = category.querySelectorAll(`ul li`);
  console.log(`Category: ${title.textContent}`);
  console.log(`Items: ${items.length}`);
});
