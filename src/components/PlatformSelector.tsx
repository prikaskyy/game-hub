import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform
      </MenuButton>
      <MenuList paddingY={0}>
        {data.map((platform) => (
          <MenuList borderRadius={0} border={0} key={platform.id}>
            {platform.name}
          </MenuList>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
