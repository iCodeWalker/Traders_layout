import React, { useEffect, useState } from "react";
import CustomPagination from "./pagination";

const data = [
  {
    id: "2193310",
    nickname: "Dave4Demi",
    time: "08-05-2021 10.40",
  },
  {
    id: "888933",
    nickname: "Manie",
    time: "08-05-2021 10.40",
  },
  {
    id: "123213",
    nickname: "Equinox",
    time: "08-05-2021 10.40",
  },
  {
    id: "543933",
    nickname: "John",
    time: "08-05-2021 10.40",
  },
  {
    id: "111933",
    nickname: "Carter",
    time: "08-05-2021 10.40",
  },
  {
    id: "098331",
    nickname: "Eqinox",
    time: "08-05-2021 10.40",
  },
  {
    id: "232331",
    nickname: "Ben",
    time: "08-05-2021 10.40",
  },
  {
    id: "080933",
    nickname: "Bright",
    time: "08-05-2021 10.40",
  },
];

type CustomCardProps = {
  isDark: boolean;
};
function CustomTable({ isDark }: CustomCardProps) {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("GrayText");
  const [headingColor, setHeadingColor] = useState("black");

  useEffect(() => {
    if (isDark === true) {
      setBgColor("#313131");
      setTextColor("white");
      setHeadingColor("white");
    } else {
      setBgColor("white");
      setTextColor("GrayText");
      setHeadingColor("black");
    }
  }, [isDark]);
  const styles = {
    idColStyle: {
      textAlign: "start" as const,
      fontSize: "12px",
      paddingTop: "20px",
      paddingLeft: "10px",
      color: textColor,
    },
    nameColStyle: {
      textAlign: "start" as const,
      fontSize: "12px",
      paddingTop: "20px",
      color: textColor,
    },
    timeColStyle: {
      textAlign: "center" as const,
      display: "flex",
      justifyContent: "space-evenly",
      fontSize: "12px",
      paddingTop: "20px",
      color: textColor,
    },

    idColHeading: {
      textAlign: "start" as const,
      width: "20%",
      paddingBottom: "20px",
      paddingTop: "20px",
      paddingLeft: "10px",
      fontSize: "15px",
      fontWeight: "500",
      color: headingColor,
    },
    nameColHeading: {
      textAlign: "start" as const,
      width: "20%",
      paddingBottom: "20px",
      paddingTop: "20px",
      fontSize: "15px",
      fontWeight: "500",
      color: headingColor,
    },
    timeColHeading: {
      textAlign: "center" as const,
      width: "10%",
      paddingBottom: "20px",
      paddingTop: "20px",
      paddingLeft: "10px",
      fontSize: "15px",
      fontWeight: "500",
      color: headingColor,
    },
  };
  return (
    <div
      className=" rounded overflow-hidden shadow-lg"
      style={{
        backgroundColor: bgColor,
        width: "97%",
        margin: "15px",
        borderRadius: "10px",
        paddingBottom: "15px",
      }}
    >
      <table
        className="table-auto"
        style={{
          padding: "20px",
        }}
      >
        <thead style={{ borderBottom: "1px solid #D1D9D9" }}>
          <tr>
            <th style={styles.idColHeading}>ID Number</th>
            <th style={styles.nameColHeading}>Nickname</th>
            <th style={styles.timeColHeading}>Registration time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td style={styles.idColStyle}>{item.id}</td>
                  <td style={styles.nameColStyle}>{item.nickname}</td>
                  <td style={styles.timeColStyle}>
                    <p>{item.time}</p>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <CustomPagination textColor={headingColor} />
    </div>
  );
}

export default CustomTable;
