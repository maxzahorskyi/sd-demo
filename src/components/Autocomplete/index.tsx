import { Input, Button } from "@mantine/core";
import { IconSearch, IconKeyboard } from "@tabler/icons";
import { useSearch } from "../../hooks/useSearch";
import { ChangeEvent, useEffect } from "react";
import { useAppDispatch } from "../../store";
import { setSelectedWord, setWordData } from "../../store/mainStore";
import { useWord } from "../../hooks/useWord";

interface SearchBarProps {
  selectedWord?: string;
  headerVariant?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ selectedWord = "", headerVariant: hv }) => {
  const dispatch = useAppDispatch();

  const getWordOptions = async (query: string) => {
    const res = await fetch("http://localhost:5000/dictionary/search/" + query);
    const data = await res.json();

    if (!data.isSuccess) throw Error(data.message || "Server Error");

    return data.options;
  };

  const [value, handleChange, options, requestState] = useSearch(getWordOptions);

  const { data: wordInfo } = useWord(selectedWord);

  useEffect(() => {
    if (wordInfo) {
      dispatch(setWordData(wordInfo));
    }
  }, [wordInfo]);

  return (
    <div className={`${hv ? "justify-end" : ""} search w-full flex`}>
      <div className={`${hv ? "" : "w-full"} relative`}>
        <Input
          icon={<IconSearch />}
          placeholder={selectedWord || "Search"}
          size='xl'
          sx={{
            input: {
              borderRadius: hv ? 0 : 4
            }
          }}
          type='search'
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
          rightSectionWidth={200}
          rightSection={
            <Button
              onClick={() => {
                dispatch(setSelectedWord(value));
              }}
              className={`${hv ? "rounded-none" : ""} bg-secondary-color`}
              size='xl'
              fullWidth
            >
              Go
            </Button>
          }
        />
        {!requestState.isFetching ? (
          <div
            className={`${
              options ? "" : "hidden"
            } rounded shadow-lg shadow-neutral-600 drop-shadow-lg  absolute bg-white z-10 ${
              hv ? "top-[62px] w-[289px] h-[100px]" : "top-[62px] w-[595px]"
            }`}
          >
            {options?.map((option, i) => (
              <div
                key={i}
                className='pl-14 p-1 cursor-pointer hover:bg-secondary-color hover:text-white'
                onClick={() => {
                  handleChange(option);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        ) : (
          <div className='absolute animate-pulse pl-14 pt-1'>Loading...</div>
        )}
      </div>
      <div
        className={`${
          hv ? "" : "ml-2 rounded border-solid border-2 border-neutral-400 h-[60px]"
        } w-[60px]  bg-white flex items-center justify-center`}
      >
        <i className='text-2xl text-main-gray-color'>i</i>
      </div>
      <div
        className={`${
          hv ? "border-l-2" : "ml-2 rounded  border-2 h-[60px]"
        } border-solid border-neutral-400 w-[120px]  bg-white flex items-center justify-center`}
      >
        <IconKeyboard size={36} className='text-main-gray-color' />
      </div>
    </div>
  );
};

export default SearchBar;
