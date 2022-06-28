const modal = document.getElementById('simple_modal');

const closeModal = document.getElementById('close_btn');

closeModal.addEventListener('click', close_Modal);

window.addEventListener('click', outside_Modal);

function close_Modal() {
  modal.style.display = 'none';
}

function outside_Modal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

const parentDOM = document.getElementById('mother_container'); // We capture the container that holds the photos

const photo_array = Array.from(parentDOM.getElementsByClassName('modal_photo')); // We select all the photos and we transform the returning HTML collection into an array

// For every element of the array we add an event - that is attaching the photo to the modal_content using the src attribute when a photo is clicked + some other actions
let counter;
for (counter = 0; counter < photo_array.length; counter++) {
  photo_array[counter].addEventListener('click', function(e) {
    //e.preventDefault(); // We stop the images from opening into a new tab, which is the default behaviour
    let empty_src = document.getElementById('to_fill'); // We get the empty image inside the modal
    empty_src.src = e.target.src; // We attach the src of the event's target to the empty img tag inside the modal
    modal.style.display = 'block'; // We display the modal
  });
}