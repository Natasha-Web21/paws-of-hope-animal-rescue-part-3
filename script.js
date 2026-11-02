
/* =========================================
   PAWS OF HOPE ANIMAL RESCUE
   JavaScript - Part 3
========================================= */


/* 1. SAMPLE ANIMAL LISTINGS */

// These are demonstration listings for the website.
// They do not represent real animals available for adoption.

const animals = [
    {
        name: "Buddy",
        type: "dog",
        description: "A friendly sample dog who enjoys playing and spending time with people."
    },
    {
        name: "Max",
        type: "dog",
        description: "A sample dog who enjoys walks and outdoor activities."
    },
    {
        name: "Luna",
        type: "cat",
        description: "A gentle sample cat who enjoys quiet surroundings."
    },
    {
        name: "Milo",
        type: "cat",
        description: "A playful sample cat who enjoys exploring."
    }
];


/* 2. DISPLAY ANIMALS ON THE SERVICES PAGE */

const animalList = document.getElementById("animalList");
const animalCount = document.getElementById("animalCount");
const animalSearch = document.getElementById("animalSearch");
const animalFilter = document.getElementById("animalFilter");
const animalSort = document.getElementById("animalSort");

// Check that the animal listing section exists before running its code.
if (animalList && animalCount && animalSearch && animalFilter && animalSort) {

    function displayAnimals() {

        // Read the visitor's search and filter choices.
        const searchText = animalSearch.value.toLowerCase();
        const selectedType = animalFilter.value;
        const selectedSort = animalSort.value;

        // Filter animals by name, description and animal type.
        let filteredAnimals = animals.filter(function (animal) {

            const matchesSearch =
                animal.name.toLowerCase().includes(searchText) ||
                animal.description.toLowerCase().includes(searchText);

            const matchesType =
                selectedType === "all" || animal.type === selectedType;

            return matchesSearch && matchesType;
        });

        // Sort the results alphabetically.
        if (selectedSort === "name-asc") {
            filteredAnimals.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
        } else if (selectedSort === "name-desc") {
            filteredAnimals.sort(function (a, b) {
                return b.name.localeCompare(a.name);
            });
        }

        // Clear the previous animal cards.
        animalList.innerHTML = "";

        // Display a message when no animals match the search.
        if (filteredAnimals.length === 0) {
            animalList.textContent = "No sample listings found. Try another search.";
        }

        // Create a card for each matching animal.
        filteredAnimals.forEach(function (animal) {

            const card = document.createElement("article");
            card.className = "animal-card";

            const heading = document.createElement("h3");
            heading.textContent = animal.name;

            const description = document.createElement("p");
            description.textContent = animal.description;

            const typeLabel = document.createElement("span");
            typeLabel.className = "animal-type";
            typeLabel.textContent =
                animal.type.charAt(0).toUpperCase() + animal.type.slice(1);

            const sampleLabel = document.createElement("p");
            sampleLabel.textContent = "Sample listing";
            sampleLabel.className = "animal-label";

            card.appendChild(heading);
            card.appendChild(description);
            card.appendChild(typeLabel);
            card.appendChild(sampleLabel);

            animalList.appendChild(card);
        });

        // Update the number of matching listings.
        animalCount.textContent =
            filteredAnimals.length + " sample listing(s) found.";
    }

    // Update the listings when visitors change the controls.
    animalSearch.addEventListener("input", displayAnimals);
    animalFilter.addEventListener("change", displayAnimals);
    animalSort.addEventListener("change", displayAnimals);

    // Display the sample listings when the page loads.
    displayAnimals();
}


/* 3. ENQUIRY FORM VALIDATION */

const enquiryForm = document.getElementById("enquiryForm");
const formFeedback = document.getElementById("formFeedback");

if (enquiryForm && formFeedback) {

    enquiryForm.addEventListener("submit", function (event) {

        // Stop the form from submitting before validation.
        event.preventDefault();

        if (!enquiryForm.checkValidity()) {

            formFeedback.textContent =
                "Please complete the required fields correctly.";

            enquiryForm.reportValidity();

        } else {

            formFeedback.textContent =
                "Your enquiry form has been validated successfully. This is a demonstration only; no message has been sent.";
        }
    });
}


/* 4. CONTACT FORM VALIDATION */

const contactForm = document.getElementById("contactForm");
const contactFeedback = document.getElementById("contactFeedback");

if (contactForm && contactFeedback) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent the default form submission.
        event.preventDefault();

        if (!contactForm.checkValidity()) {

            contactFeedback.textContent =
                "Please check your details and complete all required fields.";

            contactForm.reportValidity();

        } else {

            contactFeedback.textContent =
                "Your contact form has been validated successfully. This is a demonstration only; no message has been sent.";
        }
    });
}
