'use client'

import React, { useContext, useEffect } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Select} from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";
import Image from "next/image";
import { Context } from "@/context/ContextProvider";

export default function DropSearch({bool} : {bool: boolean}) {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["title"]));
  const [type , searchType] = React.useState<string>("title")
    const context = useContext(Context);
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  useEffect(() =>{
    const key = Array.from(selectedKeys);
    context?.setSearchType(key[0] as string)
  },[selectedKeys])

  return (
    <Dropdown className="">
      <DropdownTrigger className="bg-white rounded-md">
        <Button 
          variant="bordered" 
          className="capitalize"
        >
            <div className="flex items-center gap-2 text-gray font-Poppins text-sm tracking-wider font-medium">
          {selectedValue} 
          <Image src="/assets/icons/dropDark.svg" alt="" width={15} height={15}/>
            </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        className={`${bool ? 'bg-white text-primary' : 'bg-primary text-white'} font-Poppins text-sm tracking-wider rounded-md cursor-pointer p-2`}
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="title">Title</DropdownItem>
        <DropdownItem key="teacher">Teacher</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
