import { React, useState, useRef } from "react";
import './App.css';
import { SyllabusPage } from "./components/SyllabusPage";
import { SyllabusSearch } from "./components/SyllabusSearch/SyllabusSearch";


export const App = () => {


  return (
    <>
      <SyllabusSearch />
      <SyllabusPage />
    </>
  )
};
