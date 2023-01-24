import { Drawer, Burger, CloseButton } from "@mantine/core";
import { IconBook } from '@tabler/icons';
import { useState } from "react";
import MainLogo from "../MainLogo";
import { useAppDispatch } from "../../store";
import { setSelectedWord } from "../../store/mainStore";

const CustomDrawer: React.FC<{headerHeight: number}> = ({headerHeight}) => {
  const [opened, setOpened] = useState(false);
  const dispatch = useAppDispatch()

  return (
    <>
      <Drawer
        position="right"
        opened={opened}
        onClose={() => setOpened(false)}
        size={245}
        withCloseButton={false}
      >
        <div className="bg-neutral-800 h-full">
          <div style={{ height: headerHeight }} className={`w-100 bg-secondary-color flex items-center justify-between`}>
            <span className="w-[168px] h-[44px] pl-7">
              <MainLogo textColor={"#ffffff"} bookColor={"#000000"}/>
            </span>
            <CloseButton
              style={{ backgroundColor: '#B08D56'}}
              className="text-white mr-5"
              title="Close popover"
              iconSize={26}
              onClick={() => setOpened((o) => !o)}
            />
          </div>
          <nav className="w-100 flex flex-col items-center">
            <div
              className="text-secondary-color flex mt-12 items-center pl-7 w-full cursor-pointer"
              onClick={() => {
                setOpened(false)
                dispatch(setSelectedWord(''))
              }}
            >
              <IconBook size={40} className="mr-2"/>
              <span className="text-lg">Dictionary</span>
            </div>
          </nav>
        </div>
      </Drawer>
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        color="white"
        size="md"
      />
    </>
  )
}

export default CustomDrawer;
