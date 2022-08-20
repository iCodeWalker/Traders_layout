import React, { useEffect, useState } from "react";
import CustomCard from "./card";

type IncomeCardProps = {
  isDark: boolean;
};

function IncomeCard({ isDark }: IncomeCardProps) {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    if (isDark === true) {
      setBgColor("#313131");
      setTextColor("white");
    } else {
      setBgColor("white");
      setTextColor("black");
    }
  }, [isDark]);
  const styles = {
    incomeCardBlock: {
      backgroundColor: bgColor,
      padding: "5px",
      margin: "15px",
      borderRadius: "10px",
      boxShadow: "5px 5px 5px grey",
    },

    btnBlock: {
      backgroundColor: "blue",
      margin: "15px",
      marginBottom: "5px",
      borderRadius: "10px",
    },
    btn: {
      width: "100%",
    },
  };
  return (
    <div
      className="rounded overflow-hidden shadow-lg"
      style={styles.incomeCardBlock}
    >
      <div className="flex">
        <CustomCard
          title="Total Incomes"
          income="612.785"
          bgColor={bgColor}
          isDark={isDark}
        />
        <CustomCard
          title="Residual Incomes"
          income="10.785"
          bgColor={bgColor}
          isDark={isDark}
        />
      </div>
      <div style={styles.btnBlock}>
        <button
          className="w-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style={styles.btn}
        >
          Receive
        </button>
      </div>
    </div>
  );
}

export default IncomeCard;
