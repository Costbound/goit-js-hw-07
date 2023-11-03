console.log(document.querySelectorAll(".item").length);
document.querySelectorAll(".item h2").forEach(title => {
    console.log(title.textContent + " " + document.querySelectorAll(".item li").length);
});
       

