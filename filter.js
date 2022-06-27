const liItem = document.querySelectorAll('ul li');
const imgItem = document.querySelectorAll('.Objects img');

liItem.forEach(li => {
    li.addEventListener ( "click" ,function () {
        //active
        liItem.forEach(li => {
            li.className = "";
        })
        li.className = "active";

        //Filter
        const value = li.textContent;
        console.log(value)

        if (value.toLowerCase().trim()=== "all") {
            console.log("value1")
            imgItem.forEach(img => {
                img.style.display = 'block';
            })
            return false
        }
        imgItem.forEach(img => {
            img.style.display = 'none';
        })
        const selectedImg = document.querySelectorAll(`${"." + value.toLowerCase()}`)
        console.log(selectedImg)
        selectedImg.forEach(img => {
            img.style.display = 'block';
        })
    })
});
// =================searchBar=============

const allItems = document.getElementsByClassName("item");

function searchBar() {
  let search = document.getElementById("searchBar");
  search = search.toLowerCase().trim();
  console.log("search")
  let allItems = document.getElementsByClassName('Items');
    for (i = 0; i < allItems.length; i++) { 
        if (!allItems[i].innerHTML.toLowerCase().includes(search)) {
            allItems[i].style.display="none";
        }
        else {
            allItems[i].style.display="list-item";                 
        }
    }
}

