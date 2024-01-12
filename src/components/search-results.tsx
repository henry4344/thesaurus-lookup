interface resultsProps {
  results: string[];
  wordClicked(data: string): void;
}

export default function SearchResults({ results, wordClicked }: resultsProps) {
  return (
    <div className="results-box">
      <ul>
        {results.length > 0 ? (
          results.map((result) => (
            <li
              className="result"
              key={result}
              onClick={() => wordClicked(result)}
            >
              {result}
            </li>
          ))
        ) : (
          <li>No synonyms...</li>
        )}
      </ul>
    </div>
  );
}
