import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Flag() {
  const { selectCounry } = useContext(LanguageContext);
  return (
    <img
      src={selectCounry[0].flag}
      style={{ maxWidth: "10rem", display: "block" }}
    />
  );
}
