const category = document.querySelectorAll(".item");

console.log(`Number of categories: ${category.length}`);

category.forEach(foo => {
    let name = foo.firstElementChild.innerHTML;
    let number = foo.querySelectorAll("li").length

    console.log(`Category: ${name} Elements: ${number}`);
});