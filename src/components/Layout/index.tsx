import { Outlet } from "react-router-dom";
import CustomDrawer from "../CustomDrawer";
import MainLogo from "../MainLogo";
import SearchBar from "../Autocomplete";
import { useAppSelector } from "../../store";
import { SLICE_MAIN_NAME } from "../../store/mainStore";

const Layout: React.FC = () => {
  const { selectedWord } = useAppSelector((store) => store[SLICE_MAIN_NAME]);
  const headerHeight = selectedWord ? 60 : 85;

  return (
    <>
      <header
        style={{ height: headerHeight }}
        className={`w-100 flex justify-between items-center shadow-lg shadow-neutral-400 drop-shadow-lg`}
      >
        <span className='w-100 h-[56px] flex ml-32'>
          <MainLogo textColor={"#7A7F90"} bookColor={"#B08D56"} />
        </span>
        {selectedWord && <SearchBar selectedWord={selectedWord} headerVariant />}
        <div className='bg-black h-full w-[130px] flex items-center justify-center'>
          <CustomDrawer headerHeight={headerHeight} />
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
