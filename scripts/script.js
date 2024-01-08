'use strict'
function collectFormData() {
    const formData = {
        languages: [],
        frameworks: [],
        devops: []
    };

    // Collect selected languages
    const languageCheckboxes = document.querySelectorAll('input[name="languages"]:checked');
    languageCheckboxes.forEach(checkbox => {
        formData.languages.push(checkbox.value);
    });

    // Collect selected frameworks
    const frameworkCheckboxes = document.querySelectorAll('input[name="frameworks"]:checked');
    frameworkCheckboxes.forEach(checkbox => {
        formData.frameworks.push(checkbox.value);
    });

    // Collect selected devops
    const devopsCheckboxes = document.querySelectorAll('input[name="devops"]:checked');
    devopsCheckboxes.forEach(checkbox => {
        formData.devops.push(checkbox.value);
    });

    // Log or submit the formData as needed
    console.log(formData);
}
document.addEventListener('DOMContentLoaded', function () {
    // Get the select element
    const referalSelect = document.getElementById('referal');

    // Get the more-details div
    const moreDetailsDiv = document.getElementById('more-details');

    // Function to update the visibility of more-details div
    function updateMoreDetailsVisibility() {
        // Check if the selected option is 'magic' or 'other'
        if (referalSelect.value === 'magic' || referalSelect.value === 'other') {
            // If 'magic' or 'other' is selected, show the more-details div
            moreDetailsDiv.style.display = 'block';
        } else {
            // If any other option is selected, hide the more-details div
            moreDetailsDiv.style.display = 'none';
        }
    }

    // Add an event listener to the select element
    referalSelect.addEventListener('change', updateMoreDetailsVisibility);

    // Initial check when the page loads
    updateMoreDetailsVisibility();
});