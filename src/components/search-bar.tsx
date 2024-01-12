interface searchProps {
  word: string;
  setWord(data: string): void;
  fetchSynonyms(data: string): void;
}

export default function Search({ word, setWord, fetchSynonyms }: searchProps) {
  return (
    <form
      className="search-area"
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        fetchSynonyms(word);
      }}
    >
      <input
        type="text"
        value={word}
        className="search-bar"
        placeholder="Search for a word..."
        onChange={(e) => setWord(e.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
