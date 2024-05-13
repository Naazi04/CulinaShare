// Sample JavaScript code for fetching and displaying saved recipes
document.addEventListener('DOMContentLoaded', function() {
    // Fetch saved recipes from the database or local storage
    const savedRecipes = [
        { id: 1, title: 'Pasta Carbonara', description: 'A classic Italian dish with eggs, cheese, and pancetta.' },
        { id: 2, title: 'Chicken Tikka Masala', description: 'A flavorful Indian chicken curry dish.' },
        { id: 3, title: 'Chocolate Chip Cookies', description: 'Homemade cookies with chocolate chips.' }
        // Add more saved recipes here
    ];

    // Function to render saved recipes on the page
    function renderSavedRecipes(recipes) {
        const favoritesContainer = document.getElementById('favoritesContainer');
        favoritesContainer.innerHTML = ''; // Clear previous content

        recipes.forEach(recipe => {
            const recipeCard = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">${recipe.title}</h5>
                            <p class="card-text">${recipe.description}</p>
                            <button class="btn btn-danger" onclick="removeRecipe(${recipe.id})">Remove</button>
                        </div>
                    </div>
                </div>
            `;
            favoritesContainer.innerHTML += recipeCard;
        });
    }

    // Initial render of saved recipes
    renderSavedRecipes(savedRecipes);

    // Function to remove a recipe from favorites
    function removeRecipe(recipeId) {
        // Logic to remove the recipe from the database or local storage
        // After removal, update the UI by re-rendering the saved recipes
        const updatedRecipes = savedRecipes.filter(recipe => recipe.id !== recipeId);
        renderSavedRecipes(updatedRecipes);
    }
});
// Function to save a recipe as a favorite
function saveFavorite(recipeId) {
    // Check if localStorage is supported
    if (typeof(Storage) !== "undefined") {
        // Get the existing favorites or initialize an empty array
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        // Check if the recipeId is already in favorites
        if (!favorites.includes(recipeId)) {
            // Add the recipeId to favorites
            favorites.push(recipeId);

            // Save the updated favorites array to localStorage
            localStorage.setItem('favorites', JSON.stringify(favorites));

            // Notify the user that the recipe was saved
            alert('Recipe saved to favorites!');
        } else {
            // Notify the user that the recipe is already in favorites
            alert('Recipe is already in favorites!');
        }
    } else {
        // Browser does not support localStorage
        alert('Your browser does not support localStorage. Please upgrade.');
    }
}

// Example usage: Call saveFavorite with the recipeId when a user clicks a favorite button
document.getElementById('favoriteButton').addEventListener('click', function() {
    saveFavorite('recipe123'); // Replace 'recipe123' with the actual recipeId
});
