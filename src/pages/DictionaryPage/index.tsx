import SearchBar from "../../components/Autocomplete";
import WordDetailTable from "../../components/WordDetailTable";
import { useAppSelector } from "../../store";
import { SLICE_MAIN_NAME } from "../../store/mainStore";
import { useEffect, useState } from "react";

const DictionaryPage: React.FC = () => {
  const { selectedWord, wordData } = useAppSelector((store) => store[SLICE_MAIN_NAME]);
  const [dataType, setDataType] = useState<"reformed" | "traditional">("reformed");

  const [minHeight, setMinHeight] = useState(window.innerHeight);

  useEffect(() => {
    setMinHeight(selectedWord ? window.innerHeight - 60 : window.innerHeight - 85);
  }, [selectedWord, window.innerHeight]);

  return (
    <main className={`bg-[url('../assets/background.jpg')] h-screen`} style={{ height: minHeight }}>
      <div className={`${selectedWord ? "pt-[20px]" : "pt-[10%]"} w-[960px] flex flex-wrap m-auto`}>
        {selectedWord ? (
          <>
            <div className='flex items-center justify-between my-8'>
              <button
                className={`bg-transparent h-auto active:shadow-none min-w-[120px] transworm-none ${
                  dataType === "traditional" ? "text-main-gray-color" : "text-black font-bold "
                } cursor-pointer`}
                onClick={() => setDataType("reformed")}
              >
                Wiktionary
              </button>
              <span className='block h-full border-r-2 border-black mx-2.5' />
              <button
                className={`bg-transparent h-auto active:shadow-none min-w-[120px] transworm-none ${
                  dataType === "reformed" ? "text-main-gray-color" : "text-black font-bold"
                } cursor-pointer`}
                onClick={() => setDataType("traditional")}
              >
                Kouyoumjian
              </button>
            </div>
            <WordDetailTable wordData={wordData[dataType]} />
          </>
        ) : (
          <SearchBar />
        )}
      </div>
    </main>
  );
};

export default DictionaryPage;
