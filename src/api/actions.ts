export interface apiReturn {
  word: string;
  score: number;
}
export interface apiError {
  error: string;
  message: string;
}

export const searchApi = async (
  word: string
): Promise<apiReturn[] | apiError> => {
  try {
    const query = `https://api.datamuse.com/words?rel_syn=${word}`;
    const res = await fetch(query);
    const result = <apiReturn[]>await res.json();
    return result;
  } catch (error) {
    console.error(error);
    return <apiError>{ error: error, message: "Error searching..." };
  }
};
