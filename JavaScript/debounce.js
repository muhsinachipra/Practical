function debounce(func, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId)

        timerId = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}


// Function that gets called (e.g., on user typing)
function search(query) {
    console.log(`Searching for: ${query}`);
}

// Create a debounced version of the search function
const debouncedSearch = debounce(search, 300);

// Simulate typing in a search bar
debouncedSearch('apple');   // Will execute after 300ms
debouncedSearch('apples');  // Previous call is canceled, new one will execute after 300ms
debouncedSearch('applesauce');  // Again, will execute after 300ms
