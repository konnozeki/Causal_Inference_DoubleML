document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('iframe').forEach(frame => {
            frame.style.display = 'none';
        });
        document.querySelector(link.getAttribute('href')).style.display = 'block';
    });
});