document.querySelectorAll('.category').forEach(function(element) {
    element.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});

// Get all the dropdown links
const dropdownLinks = document.querySelectorAll('.dropdown');

// Add event listener to each dropdown link
dropdownLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the parent elements
  });
});
