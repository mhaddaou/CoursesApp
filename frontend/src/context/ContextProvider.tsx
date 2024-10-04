"use client";

import React, { ProviderProps, createContext, useState } from "react";
import { StoreType } from "./interfaces/storeType";
import { UserInfo } from "./interfaces/userInterface";
import { CoursesList } from "./interfaces/coursesInterface";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [authToggle, setAuthToggle] = useState(false);
  const [refering, setRefering] = useState(false);
  const [logedIn, setLogedIn] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(12);
  const [itemPerPage, setItemPerPage] = useState(12);
  const [coursesList, setCoursesList] = useState<CoursesList | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [tokenAccess, setTokenAccess] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [searchStartIndex, searchSetStartIndex] = useState(0);
  const [searchItemPerPage, searchSetItemPerPage] = useState(12);
  const [searchInput, setSearchInput] = useState("");
  const [click, setClick] = useState(false);

  const value = {
    userInfo,
    setUserInfo,
    authToggle,
    setAuthToggle,
    refering,
    setRefering,
    logedIn,
    setLogedIn,
    startIndex,
    setStartIndex,
    endIndex,
    setEndIndex,
    itemPerPage,
    setItemPerPage,
    coursesList,
    setCoursesList,
    currentPage,
    setCurrentPage,
    tokenAccess,
    setTokenAccess,
    searchType,
    setSearchType,
    searchStartIndex,
    searchSetStartIndex,
    searchItemPerPage,
    searchSetItemPerPage,
    searchInput,
    setSearchInput,
    click,
    setClick
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const Context = createContext<StoreType | null>(null);
