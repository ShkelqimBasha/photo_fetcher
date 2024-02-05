    document.addEventListener('DOMContentLoaded', function () {
        const grayscaleSwitch = document.querySelector('.switch input');// Merr një element nga DOM-i që ka klasën 'switch' dhe është një element input. Kjo përbën një kyç për kontrollin e ndërfaqes së përdoruesit që ndryshon ngjyrën e imazheve.
        grayscaleSwitch.addEventListener('click', function () {//Kur ky element klikohet, ekzekutohet një funksion anonim që kujton statusin aktual të "switch" dhe në varësi të tij, aplikon ose fshin efektin e ngjyrës gri nga imazhet.
            const images = document.querySelectorAll('.photo-container img');
            if (grayscaleSwitch.checked) {
                applyGrayscaleEffect(images);
            } else {
                resetGrayscaleEffect(images);
            }
        });
    });

    function applyGrayscaleEffect(images) {
        images.forEach((image) => {
            image.style.filter = 'grayscale(100%)';
        });
    }

    function resetGrayscaleEffect(images) {
        images.forEach((image) => {
            image.style.filter = 'none';
        });
    }

    function fetchAndDisplayImage(image, index) {
        fetch(`https://picsum.photos/367/?random=${index}`)
            .then(response => response.url)
            .then(url => {
                image.src = url;
            })
            .catch(error => {
                console.error('Error fetching image:', error);
            });
    }

    function loadImages() {
        const images = document.querySelectorAll('.photo-container img');
        images.forEach((image, index) => {
            fetchAndDisplayImage(image, index + 1);
        });
    }

    function addMorePhotos() {
        
        var photoGallery = document.getElementById("photo-gallery");

     
        var newRow = document.createElement("div"); //i cili do të përdoret si një rresht i ri në galerinë e fotos.
        newRow.classList.add("photo-row");//Shton një klasë "photo-row" tek rreshti i krijuar, që mund të përdoret për stilizim në CSS

       
        for (var i = 1; i <= 4; i++) {
            
            var newPhotoContainer = createPhotoContainer();// Thirr funksionin createPhotoContainer() për të krijuar një konteiner të ri për një fotografi.

          
            newRow.appendChild(newPhotoContainer);//Shton konteinerin e krijuar për fotografinë në rreshtin aktual.

          
            if (i === 2 || i === 4) {
                // Append the new row to the photo gallery
                photoGallery.appendChild(newRow);

                newRow = document.createElement("div");//Krijon një rresht të ri (div të ri) për të përdorur për foto e reja nëse ende nuk është arritur në foto e treta apo të katërta.
                newRow.classList.add("photo-row");// Shton klasën "photo-row" tek rreshti i ri, i cili përsëritet për secilin rresht të ri të krijuar.
            }
        }
    }

    function createPhotoContainer() {
        const newPhotoContainer = document.createElement("div");//Shton klasën "photo-container" tek konteineri i krijuar, që mund të përdoret për stilizim në CSS.
        newPhotoContainer.classList.add("photo-container");

        const newImage = document.createElement("img");// Krijon një element të ri <img>, që do të përfaqësojë imazhin e fotografitë brenda konteinerit.
        newImage.alt = "Random Image";
        newPhotoContainer.appendChild(newImage);

        const newTextBlock = document.createElement("div");
        newTextBlock.classList.add("text-block");
        newTextBlock.innerHTML = "<h4>Lukas Budimaier</h4><p>https://unsplash.com/photos/pqwaaqfoMibl</p>";
        newPhotoContainer.appendChild(newTextBlock);

        fetchAndDisplayImage(newImage);// Thirr funksionin fetchAndDisplayImage për të ngarkuar një imazh të rastit nga picsum.photos
        return newPhotoContainer;
    }