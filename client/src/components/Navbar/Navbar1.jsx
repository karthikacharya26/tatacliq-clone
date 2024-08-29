import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import React from "react";

const Navbar1 = () => {
  return (
    <Box bg={"#212121"} display={"flex"}>
      <Box ml={"100px"}>
        <Box>
          <Image
            boxSize="60px"
            src="https://www.tatacliq.com/src/general/components/img/group.svg"
            alt="Dan Abramov"
          />
        </Box>
      </Box>
      <Box marginLeft={"150px"}>
        <Menu>
          {({ isOpen }) => (
            <>
              {isOpen ? (
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronUpIcon />}
                  height={"54px"}
                  borderRadius={"0"}
                >
                  Categories
                </MenuButton>
              ) : (
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  colorScheme="#FFFFFF"
                  rightIcon={<ChevronDownIcon />}
                  height={"54px"}
                  borderRadius={"0"}
                >
                  Categories
                </MenuButton>
              )}

              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem onClick={() => alert("Kagebunshin")}>
                  Create a Copy
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar1;
