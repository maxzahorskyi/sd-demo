import { Table } from "@mantine/core";
import { IconBook } from "@tabler/icons";
import { WordTypeData } from "../../store/mainStore/mainSlice";
import { clearString, startCase } from "../../utils/string";

interface Props {
  wordData: WordTypeData[];
}

const WordDetailTable: React.FC<Props> = ({ wordData = [] }) => {
  const columns = [
    { name: "Word", width: 210 },
    { name: "Alternative Form", width: 270 },
    { name: "Definition", width: 660 },
    { name: "Etymology", width: 540 }
  ];

  console.log("wordData", wordData);

  const rows = wordData?.map((data, index) => (
    <tr key={data.word} className={`${index % 2 === 0 ? "bg-[#F4F4F4]" : ""}`}>
      <td className='align-baseline border-r-2 border-[#EBECF3]'>
        <div>
          <p>{data.word}</p>
          <div className='flex flex-col justify-items-center pt-2'>
            <span className='flex ml-1.5 text-sm'>
              <IconBook className='text-secondary-color mr-1.5' />
              <span className='text-main-gray-color'>{data.pronunciation.w}</span>
            </span>
            <span className='flex ml-1.5 text-sm'>
              <IconBook className='text-secondary-color mr-1.5' />
              <span className='text-main-gray-color'>{data.pronunciation.e}</span>
            </span>
          </div>
        </div>
      </td>
      <td className='align-baseline border-r-2 border-[#EBECF3]'>
        <div className='h-full'>
          {/* <p className='text-main-gray-color'>Smth...</p>
          <div className='flex flex-col items-center justify-items-center pt-2'>
            <div className='h-[49px]'>{wordData.pos}</div> 
          </div> */}
        </div>
      </td>
      <td className='align-baseline border-r-2 border-[#EBECF3]'>
        {data.definition?.map((def) => (
          <div>
            <p className='font-bold'>{startCase(Object.keys(def)[0])}</p>
            <div>
              <span className='text-sm text-main-gray-color'>
                {clearString(Object.values(def)[0])}
              </span>
            </div>
          </div>
        ))}
      </td>
      <td className='align-baseline'>
        {data.etymology.map((et) => (
          <div className='flex flex-col'>
            <p className='font-bold'>{startCase(Object.keys(et)[0])}</p>
            <span className='text-sm text-main-gray-color'>
              {clearString(Object.values(et)[0])}
            </span>
          </div>
        ))}
      </td>
    </tr>
  ));

  return (
    <div className='bg-white border rounded border-[#73788C] shadow-lg shadow-neutral-400 drop-shadow-lg'>
      <Table horizontalSpacing='md' verticalSpacing='md' fontSize='md'>
        <thead className='bg-[#73788C]'>
          <tr>
            {columns.map((col, index) => (
              <th
                className={`${index !== 3 ? "border-r-2 border-[#EBECF3]" : ""}`}
                style={{ color: "white", width: col.width, textAlign: "center" }}
              >
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default WordDetailTable;
