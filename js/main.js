// js/main.js

// Wait for the document to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal and its components
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".modal .close");
    const thumbnails = document.getElementsByClassName("thumbnail");

    // Function to open the modal
    const openModal = function(event) {
        // This line is the key fix. It stops the browser's default
        // behavior, like navigating to a link, ensuring consistent
        // behavior across all browsers.
        event.preventDefault();

        modal.style.display = "block";
        modalImg.src = this.dataset.largeSrc; // Use the data-large-src attribute
        modalImg.alt = this.alt; // Copy alt text for accessibility
    };

    // Function to close the modal
    const closeModal = function() {
        modal.style.display = "none";
    };

    // Add click event listeners to all thumbnails
    for (const thumbnail of thumbnails) {
        thumbnail.addEventListener('click', openModal);
    }

    // Add click event listener to the close button
    closeBtn.addEventListener('click', closeModal);

    // Close the modal when clicking on the background
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Add keyboard accessibility (Escape key to close)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === "block") {
            closeModal();
        }
    });
});