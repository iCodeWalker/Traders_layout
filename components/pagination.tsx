import React, { useEffect, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

type CustomPaginationProps = { textColor: String };

function CustomPagination({ textColor }: CustomPaginationProps) {
  const styles: any = {
    paginateBlock: {
      marginTop: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderTop: "1px #D1D9D9 solid",
      color: textColor,
    },
    selectedPage: {
      height: "30px",
      margin: "15px",
      padding: "5px",
      paddingLeft: "10px",
      paddingRight: "10px",
      borderRadius: "50%",
      backgroundColor: "blue",
      color: "white",
      justifyContent: "center",
    },
  };
  return (
    <div style={styles.paginateBlock}>
      <MdArrowBackIosNew />
      <p style={styles.selectedPage}>1</p>
      <p style={{ margin: "15px" }}>2</p>
      <p style={{ margin: "15px" }}>3</p>
      <MdArrowForwardIos />
    </div>
  );
}

export default CustomPagination;
