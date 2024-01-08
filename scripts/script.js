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