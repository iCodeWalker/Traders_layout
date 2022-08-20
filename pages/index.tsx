import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { BsSearch, BsBell } from "react-icons/bs";
import TopSection from "../components/top_section";
import IncomeCard from "../components/income_card";
import ReferralCard from "../components/referral_card";
import CustomTable from "../components/table";
import SideBar from "../components/sidebar";

const Home: NextPage = () => {
  const [isDark, setIsDark] = useState(false);
  const [bgColor, setBgColor] = useState("#1F4690");
  const [textColor, setTextColor] = useState("black");
  const [contentSectionBgColor, setContentSectionBgColor] = useState("#DAEAF1");

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    // setBgColor("#313131");
    // setTextColor("white");
  };

  useEffect(() => {
    if (isDark === true) {
      setBgColor("#313131");
      setTextColor("white");
      setContentSectionBgColor("#191A19");
    } else {
      setBgColor("#1F4690");
      setTextColor("black");
      setContentSectionBgColor("#DAEAF1");
    }
  }, [isDark]);
  return (
    <div style={{ display: "flex", backgroundColor: bgColor }}>
      <SideBar bgColor={contentSectionBgColor} />

      <div
        className=" rounded-lg overflow-hidden shadow-lg"
        style={{
          width: "99%",
          zIndex: 7,
          backgroundColor: contentSectionBgColor,
          padding: "5px",
          margin: "15px",
          marginLeft: "0px",
          borderRadius: "20px",
        }}
      >
        <button
          style={{
            margin: "5px",
            backgroundColor: "#1F4690",
            fontSize: "10px",
            color: "white",
            padding: "10px",
            borderRadius: "20px",
            zIndex: 10,
          }}
          onClick={handleThemeToggle}
        >
          Toggle Theme
        </button>
        <TopSection isDark={isDark} bgColor={contentSectionBgColor} />
        <div
          style={{
            display: "flex",
          }}
        >
          <IncomeCard isDark={isDark} />
          <ReferralCard textColor={textColor} isDark={isDark} />
        </div>
        <CustomTable isDark={isDark} />
      </div>
    </div>
  );
};

export default Home;
