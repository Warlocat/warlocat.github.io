document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        if (query) {
            searchGENBAS(query).then(results => {
                displayResults(results);
            }).catch(error => {
                console.error('Error searching GENBAS:', error);
            });
        }
    });

    async function searchGENBAS(query) {
        // Simulate a search in GENBAS
        // Replace this with actual search logic
        return new Promise((resolve) => {
            setTimeout(() => {
                const dummyResults = [
                    `Result 1 for ${query}`,
                    `Result 2 for ${query}`,
                    `Result 3 for ${query}`
                ];
                resolve(dummyResults);
            }, 1000);
        });
    }

    function displayResults(results) {
        resultsContainer.innerHTML = '';
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.textContent = result;
            resultsContainer.appendChild(resultElement);
        });
    }
});