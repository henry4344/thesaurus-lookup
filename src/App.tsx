import { useState } from "react";
import "./App.css";
import Search from "./components/search-bar";
import SearchResults from "./components/search-results";
import { searchApi } from "./api/actions";

function App() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState([""]);

  const fetchSynonyms = async (word: string) => {
    const data = await searchApi(word);
    if (data instanceof Array)
      return setResults(data.map((words) => words.word));
  };

  const wordClicked = (word: string) => {
    setWord(word);
    fetchSynonyms(word);
  };

  return (
    <>
      <Search word={word} setWord={setWord} fetchSynonyms={fetchSynonyms} />
      <SearchResults results={results} wordClicked={wordClicked} />
    </>
  );
}

export default App;
