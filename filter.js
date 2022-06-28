const liItem = document.querySelectorAll('ul li');
const imgItem = document.querySelectorAll('.Objects img');

liItem.forEach(li => {
    li.addEventListener("click", function () {
        //active
        liItem.forEach(li => {
            li.className = "";
        })
        li.className = "active";

        //Filter
        const value = li.textContent;

        if (value.toLowerCase().trim() === "all") {
            imgItem.forEach(img => {
                img.style.display = 'block';
            })
            return false
        }
        imgItem.forEach(img => {
            img.style.display = 'none';
        })
        const selectedImg = document.querySelectorAll(`${"." + value.toLowerCase()}`)
        selectedImg.forEach(img => {
            img.style.display = 'block';
        })
    })
});
// =================searchBar=============
function searchBar(){
    const search = document.getElementById("searchBarText").value;
    const images = document.querySelectorAll("img");
    if (search === "all") {
        images.forEach(img => {
            img.style.display = 'block';
        })
        return 
    }
    imgItem.forEach(img => {
        img.style.display = 'none';
    })
    const selectedImg = document.querySelectorAll(`${"." + search.toLowerCase()}`)
    selectedImg.forEach(img => {
        img.style.display = 'block';
    })
} 
