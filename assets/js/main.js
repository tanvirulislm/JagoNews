function expandSearchField() {
    const inputField = document.querySelector('.sb-search-input');
    
    // Toggle the 'show' class to expand or collapse the input field
    inputField.classList.toggle('show');
    
    // Focus on the input field when expanded
    if (inputField.classList.contains('show')) {
        inputField.focus();
    }
}
