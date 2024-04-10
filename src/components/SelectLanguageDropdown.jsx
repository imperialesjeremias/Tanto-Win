import React, { useMemo, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
function SelectLanguageDropdown({ isScrolled }) {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["ES"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  return (
    <Dropdown className={` ${isScrolled ? "light text-black " : ""}`}>
      <DropdownTrigger>
        <Button
          color="white"
          className="w-fit capitalize text-md font-semibold"
        >
          <IoIosArrowDown /> {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="ES">ES</DropdownItem>
        <DropdownItem key="EN">EN</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SelectLanguageDropdown;
