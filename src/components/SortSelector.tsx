import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order by related
      </MenuButton>
      <MenuList paddingY={0}>
        <MenuItem>relevacne</MenuItem>
        <MenuItem>relevacne</MenuItem>
        <MenuItem>relevacne</MenuItem>
        <MenuItem>relevacne</MenuItem>
        <MenuItem>relevacne</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
