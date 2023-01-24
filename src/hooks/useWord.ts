import { useQuery } from "@tanstack/react-query";

const getWordInfo = async (word: string) => {
  const res = await fetch("http://localhost:5000/dictionary/" + word);
  const data = await res.json();

  if (!data.isSuccess) throw Error(data.message || "Server Error");

  return data;
};

export const useWord = (word: string) => {
  const {
    data: wordInfo,
    isFetching,
    isError,
    isSuccess
  } = useQuery<any>(["word", word], () => getWordInfo(word), { enabled: word !== "" });

  return { data: wordInfo, isSuccess, isFetching, isError };
};
