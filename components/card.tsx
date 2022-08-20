import React, { useEffect, useState } from "react";

type CustomCardProps = {
  title: String;
  income: String;
  bgColor: String;
  isDark: boolean;
};

function CustomCard({ title, income, bgColor, isDark }: CustomCardProps) {
  const [titleColor, setTitleColor] = useState("black");
  const [incomeTextColor, setIncomeTextColor] = useState("blue");

  useEffect(() => {
    if (isDark === true) {
      setTitleColor("white");
      setIncomeTextColor("white");
    } else {
      setTitleColor("black");
      setIncomeTextColor("blue");
    }
  }, [isDark]);
  const styles: any = {
    cardBlock: {
      backgroundColor: bgColor,
      width: "400px",
      padding: "5px",
      margin: "15px",
      boxShadow: "1px 1px 1px 1px grey",
      zIndex: 10,
    },
    cardTitle: { color: titleColor, fontWeight: "normal", fontSize: "16px" },
    cardIncome: {
      color: incomeTextColor,
      fontWeight: "600",
      fontSize: "18px",
      marginTop: "5px",
    },
  };
  return (
    <div
      className=" rounded overflow-hidden shadow-lg"
      style={styles.cardBlock}
    >
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base" style={styles.cardTitle}>
          {title}
        </p>

        <p className="text-gray-700 text-base" style={styles.cardIncome}>
          {income}
        </p>
      </div>
    </div>
  );
}

export default CustomCard;
