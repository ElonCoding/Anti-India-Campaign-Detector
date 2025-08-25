// Add any JavaScript functionality here if needed
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input[type="text"]');
    const searchButton = document.querySelector('.search-box .btn-primary');
    const resultsContainer = document.getElementById('results-container');
    const searchResultsSection = document.getElementById('search-results');
    const noResultsMessage = document.getElementById('no-results-message');

    const API_URL = 'http://127.0.0.1:8000'; // Ensure this matches your backend URL

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    async function performSearch() {
        const query = searchInput.value.trim();
        if (!query) {
            alert('Please enter a search query.');
            return;
        }

        resultsContainer.innerHTML = ''; // Clear previous results
        searchResultsSection.classList.add('hidden'); // Hide results section initially
        noResultsMessage.classList.add('hidden'); // Hide no results message

        try {
            const response = await fetch(`${API_URL}/search`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: query }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.length > 0) {
                data.forEach(result => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'bg-gray-800 p-4 rounded-lg shadow';
                    resultItem.innerHTML = `
                        <p class="text-gray-300">${result.slogan}</p>
                        ${result.source ? `<p class="text-gray-500 text-sm mt-1">Source: ${result.source}</p>` : ''}
                    `;
                    resultsContainer.appendChild(resultItem);
                });
                searchResultsSection.classList.remove('hidden');
            } else {
                noResultsMessage.classList.remove('hidden');
                searchResultsSection.classList.remove('hidden');
            }

        } catch (error) {
            console.error('Error during search:', error);
            alert('Failed to perform search. Please try again later.');
            noResultsMessage.classList.remove('hidden'); // Show no results message on error too
            searchResultsSection.classList.remove('hidden');
        }
    }
});