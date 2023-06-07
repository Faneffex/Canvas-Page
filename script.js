document.querySelectorAll('.category').forEach(function(element) {
    element.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});
