document.addEventListener('DOMContentLoaded', function() {
    const checkBrochure = document.getElementById('checkBrochure');
    const brochureSection = document.getElementById('brochure-section');
    const radioCourrier = document.getElementById('radioCourrier');
    const radioEmail = document.getElementById('radioEmail');
    const addressFields = document.getElementById('address-fields');

    checkBrochure.addEventListener('change', function() {
        if (this.checked) {
            brochureSection.style.display = 'block';
        } else {
            brochureSection.style.display = 'none';
        }
    });
    
    radioCourrier.addEventListener('change', function() {
        if (this.checked) {
            addressFields.style.display = 'flex';
        }
    });

    radioEmail.addEventListener('change', function() {
        if (this.checked) {
            addressFields.style.display = 'none';
        }
    });
});