document.addEventListener('DOMContentLoaded', function() {
    fetch('./components/header.html')
        .then(response => response.text())
        .then(data => {
            const headerElement = document.getElementById('site_header');
            if (headerElement) {
                headerElement.innerHTML = data;
                // Attach event listener after loading the header
                document.getElementById('headercta').addEventListener('click', previewResume);
            } else {
                console.error('Element with id "site_header" not found.');
            }
        });

    const element = document.querySelector(".typing-animation");
    const text = element.textContent;
    element.textContent = "";
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
        if (isDeleting) {
            if (index > 0) {
                element.textContent = text.substring(0, index - 1);
                index--;
                setTimeout(typeWriter, 50); // Adjust deleting speed here
            } else {
                isDeleting = false;
                setTimeout(typeWriter, 500); // Pause before typing again
            }
        } else {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // Adjust typing speed here
            } else {
                isDeleting = true;
                setTimeout(typeWriter, 1000); // Pause before deleting
            }
        }
    }

    typeWriter();

    document.querySelectorAll('#phonecta').forEach(function(element) {
        element.addEventListener('click', previewResume);
    });
});

function previewResume() {
    window.open('/assets/Paraiso_CV.pdf', '_blank');
}