/**
 * @param {string} query - The search query string.
 * @callback setQuery
 * @return {!React.ReactElement}
 */
export function SearchBar({ query, setQuery }) {
  return (
    <div className="SearchBar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="SearchBar-input"
        placeholder="Filter movies"
      />
    </div>
  );
}
