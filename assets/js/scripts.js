document.addEventListener('DOMContentLoaded', function() {
    fetch('./components/header.html')
        .then(response => response.text())
        .then(data => {
            const headerElement = document.getElementById('site_header');
            if (headerElement) {
                headerElement.innerHTML = data;
            } else {
                console.error('Element with id "site_header" not found.');
            }
        });
});