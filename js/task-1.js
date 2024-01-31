const ulEl = document.querySelector("#categories");
const ulList = ulEl.children;
console.log(`Number of categories:${ulList.length}`);

Array.from(ulList).forEach((item) => {
    const textContentTitle = item.querySelector("h2").textContent;
    const itemCount = item.querySelectorAll("li").length;

    console.log(`Category: ${textContentTitle}`);
    console.log(`Elements: ${itemCount}`);
});






   
