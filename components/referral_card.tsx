import Image from "next/image";
import React, { useEffect, useState } from "react";

type ReferralCardProps = {
  textColor: String;
  isDark: boolean;
};

function ReferralCard({ textColor, isDark }: ReferralCardProps) {
  const [bgColor, setBgColor] = useState("white");
  const [titleColor, setTitleColor] = useState("black");
  const [descriptionColor, setDescriptionColor] = useState("grey");

  useEffect(() => {
    if (isDark === true) {
      setBgColor("#313131");
      setTitleColor("white");
      setDescriptionColor("#F7F5F2");
    } else {
      setBgColor("white");
      setTitleColor("black");
      setDescriptionColor("grey");
    }
  }, [isDark]);
  const styles = {
    referralCardBlock: {
      backgroundColor: bgColor,
      width: "600px",
      padding: "5px",
      margin: "15px",
      borderRadius: "10px",
      boxShadow: "5px 5px 5px grey",
    },
    title: {
      color: titleColor,
      fontWeight: "normal",
      fontSize: "16px",
      margin: "10px",
    },
    description: {
      color: descriptionColor,
      fontWeight: "normal",
      fontSize: "16px",
      marginLeft: "10px",
    },
    imageBlock: {
      width: 250,
      borderRadius: "60px",
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "white",
      margin: "0 auto",
    },
  };
  return (
    <div
      className=" rounded overflow-hidden shadow-lg"
      style={styles.referralCardBlock}
    >
      <p className="text-gray-700 text-base" style={styles.title}>
        Referral System:
      </p>

      <p className="text-gray-400 text-base" style={styles.description}>
        Earn 10 % for direct refferals and 5 % for indirect <br /> refferals
      </p>

      <div style={styles.imageBlock}>
        <img
          src="https://cdn.woorise.com/wp-content/uploads/2021/01/referral-marketing-1536x768.png"
          alt="imgae"
          width="250px"
        />
      </div>
    </div>
  );
}

export default ReferralCard;
