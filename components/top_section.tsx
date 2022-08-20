import React, { useEffect, useState } from "react";
import { BsSearch, BsBell } from "react-icons/bs";

type TopSectionProps = {
  isDark: boolean;
  bgColor: String;
};

function TopSection({ isDark, bgColor }: TopSectionProps) {
  const [titleColor, setTitleColor] = useState("black");

  useEffect(() => {
    if (isDark === true) {
      setTitleColor("white");
    } else {
      setTitleColor("black");
    }
  }, [isDark]);
  const styles: any = {
    leftSideContainer: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "end",
      backgroundColor: bgColor as String,
    },
    inputContainer: {
      width: "200px",
      height: "35px",
      display: "flex",
      borderRadius: "20px",
      padding: "5px",
      paddingLeft: "10px",
      backgroundColor: "#D1D9D9",
      justifyContent: "center",
      alignItems: "center",
    },
    inputField: {
      width: "150px",
      border: "none",
      backgroundColor: "#D1D9D9",
    },
    imageContainer: {
      border: "1px white solid",
      borderRadius: "50%",
      overflow: "hidden",
    },
    rightSideTitle: {
      color: titleColor,
      fontWeight: "normal",
      fontSize: "24px",
      marginLeft: "15px",
      marginBottom: "5px",
    },
    icon: {
      size: "16px",
      color: titleColor,
    },
  };

  return (
    <>
      <div style={styles.leftSideContainer}>
        <div style={styles.inputContainer}>
          <input style={styles.inputField} />
          <BsSearch style={styles.icon} />
        </div>
        <span style={{ margin: "10px" }}>
          <BsBell style={styles.icon} />
        </span>

        <div style={styles.imageContainer}>
          <img
            src="https://png.pngitem.com/pimgs/s/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
            alt="new avatar"
            width="40px"
          />
        </div>
      </div>
      <div className="flex">
        <p className="text-gray-700 text-base" style={styles.rightSideTitle}>
          My Team
        </p>
      </div>
    </>
  );
}

export default TopSection;
