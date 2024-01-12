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
    const result = await res.json();
    return result as apiReturn[];
  } catch (error) {
    console.error(error);
    return { error: error, message: "Error searching..." } as apiError;
  }
};
