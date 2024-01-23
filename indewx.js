// script.js
document.addEventListener('DOMContentLoaded', function () {
    const grayscaleSwitch = document.querySelector('.switch input');
    const images = document.querySelectorAll('.photo-container img');

    grayscaleSwitch.addEventListener('change', function () {
        if (grayscaleSwitch.checked) {
            applyGrayscaleEffect();
        } else {
            resetGrayscaleEffect();
        }
    });

    function applyGrayscaleEffect() {
        images.forEach((image) => {
            image.style.filter = 'grayscale(100%)';
        });
    }

    function resetGrayscaleEffect() {
        images.forEach((image) => {
            image.style.filter = 'none';
        });
    }
});

function loadImages() {
    let image1 = document.getElementById("image1");
    let image2 = document.getElementById("image2");
    let image3 = document.getElementById("image3");
    let image4 = document.getElementById("image4");
  
    fetch("https://picsum.photos/367").then(
      (response) => (image1.src = response.url)
    );

    fetch("https://picsum.photos/367").then(
      (response) => (image2.src = response.url)
    );

    fetch("https://picsum.photos/367").then(
      (response) => (image3.src = response.url)
    );

    fetch("https://picsum.photos/367").then(
      (response) => (image4.src = response.url)
    );
 
}






function addMorePhotos() {
    let imageContainer = document.querySelector(".photo-container");

    for (let i = 5; i <= 8; i += 2) {
        // Create a div to hold the images in a row
        const rowContainer = document.createElement("div");

        // Fetch the first image in the pair (1 and 3)
        fetch(`https://picsum.photos/367/?random=${i}`).then((response1) => {
            const newImage1 = document.createElement("img");
            newImage1.src = response1.url;
            newImage1.alt = `Photo ${i}`;
            newImage1.style.marginRight = "16px"; // Set margin for the gap
            newImage1.style.marginLeft = "100px"; // Adjusted margin to move images to the right
            newImage1.style.marginBottom = "16px"; // Set margin for the bottom
            newImage1.style.height = "367px"; // Set height
            newImage1.style.width = "367px"; // Set width
            rowContainer.appendChild(newImage1);
        });

        // Fetch the second image in the pair (2 and 4)
        const nextIndex = i + 1;
        fetch(`https://picsum.photos/367/?random=${nextIndex}`).then((response2) => {
            const newImage2 = document.createElement("img");
            newImage2.src = response2.url;
            newImage2.alt = `Photo ${nextIndex}`;
            newImage2.style.marginLeft = "16px"; // Adjusted margin to move images to the right
            newImage2.style.marginBottom = "16px"; // Set margin for the bottom
            newImage2.style.height = "367px"; // Set height
            newImage2.style.width = "367px"; // Set width
            rowContainer.appendChild(newImage2);
        });

        // Append the row container to the main container
        imageContainer.appendChild(rowContainer);

        // Add a line break <br> after each row to start a new row
        const lineBreak = document.createElement("br");
        imageContainer.appendChild(lineBreak);
    }
}



