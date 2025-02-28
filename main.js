function loadComponents(components) {
    components.forEach(({ selector, file }) => {
        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load ${file}`);
                return response.text();
            })
            .then(data => document.querySelector(selector).innerHTML = data)
            .catch(error => console.error(`Error loading ${file}:`, error));
    });
}

// Load header, body, and footer
loadComponents([
    { selector: "#header-placeholder", file: "header.html" },
    { selector: "#mainBody-placeholder", file: "body.html" },
    { selector: "#footer-placeholder", file: "footer.html" }
]);

   
function searchItem(){
    document.getElementById("search-form").submit();
}

//js for manyal nav in banner through radio buttons 
document.addEventListener('DOMContentLoaded', function() {
    const carousel = new bootstrap.Carousel(document.getElementById('imageSlider'));

    document.getElementById('radio1').addEventListener('change' , function() {
        if(this.checked) {
            carousel.to(0); //goes to 1st banner
        }
    });

    document.getElementById('radio2').addEventListener('change' , function() {
        if(this.checked) {
            carousel.to(1); //goes to 2nd banner
        }
    });

    document.getElementById('radio3').addEventListener('change' , function() {
        if(this.checked) {
            carousel.to(2); //goes to 3rd banner
        }
    });

    document.getElementById('radio4').addEventListener('change' , function() {
        if(this.checked) {
            carousel.to(3); //goes to 4rth banner 
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach((header) => {
        header.addEventListener('click', function() {
            const currentItem = this.parentElement;

            // Close all other accordion items
            document.querySelectorAll('.accordion-item').forEach((item) => {
                if(item !== currentItem) {
                    item.classList.remove('open');
                }
            });
            //Toggle the current item
            currentItem.classList.toggle('active');
        });
    }); 
});
// function for price selction
function updatePrice () {
    var priceRange = document.getElementById('priceRange').value;
    document.getElementById('maxPrice').value = priceRange;
}
function toggleSection(sectionId, iconId) {
    const section = document.getElementById(sectionId);
    const icon = document.getElementById(iconId);
    if (section.classList.contains('d-none')) {
        section.classList.remove('d-none');
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    } else {
        section.classList.add('d-none');
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    }
}

function updateSlider() {
    const minInput = document.getElementById('min-price');
    const maxInput = document.getElementById('max-price');
    const minValue = parseInt(minInput.value);
    const maxValue = parseInt(maxInput.value);
    const slider = document.getElementById('price-slider');
    const minSlider = document.getElementById('min-slider');
    const maxSlider = document.getElementById('max-slider');

    if (minValue > maxValue) {
        minInput.value = maxValue;
    }

    minSlider.value = minValue;
    maxSlider.value = maxValue;

    slider.style.left = (minValue / minSlider.max) * 100 + '%';
    slider.style.right = 100 - (maxValue / maxSlider.max) * 100 + '%';
}

function syncInputs() {
    const minSlider = document.getElementById('min-slider');
    const maxSlider = document.getElementById('max-slider');
    const minInput = document.getElementById('min-price');
    const maxInput = document.getElementById('max-price');

    minInput.value = minSlider.value;
    maxInput.value = maxSlider.value;

    updateSlider();
}