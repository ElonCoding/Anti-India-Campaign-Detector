import React, { useState } from 'react';
import Header from "./components/Header";
import { searchSlogans } from './services/api';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchSlogans(searchQuery);
      setSearchResults(results);
    } catch (err) {
      setError('Failed to fetch search results.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search for anti-India campaign slogans..."
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {loading && <p className="text-center text-gray-400 mt-4">Searching...</p>}
          {error && <p className="text-center text-red-500 mt-4">{error}</p>}
          {searchResults.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-white mb-4">Search Results:</h2>
              <ul className="space-y-4">
                {searchResults.map((result, index) => (
                  <li key={index} className="bg-gray-800 p-4 rounded-lg shadow">
                    <p className="text-gray-300">{result.slogan}</p>
                    {result.source && <p className="text-gray-500 text-sm mt-1">Source: {result.source}</p>}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {searchResults.length === 0 && !loading && !error && searchQuery && (
            <p className="text-center text-gray-400 mt-4">No results found for "{searchQuery}".</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
