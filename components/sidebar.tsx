import React from "react";
import { BiWalletAlt } from "react-icons/bi";
import { BsWallet } from "react-icons/bs";
import { FiSettings, FiUser, FiUsers } from "react-icons/fi";
import { MdOutlineLogout, MdOutlineDashboard } from "react-icons/md";

type SideBarProps = {
  bgColor: String;
};

function SideBar({ bgColor }: SideBarProps) {
  const styles: any = {
    sidebarContainer: {
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "start",
    },
    sidebarItemContainer: {
      display: "flex",
      alignItems: "center",
      padding: "8px",
      paddingBottom: "10px",
      paddingLeft: "15px",
    },
    sidebarItem: {
      color: "white",
      fontWeight: "normal",
      fontSize: "16px",
      paddingLeft: "10px",
    },
    selectedSideBarItemContainer: {
      display: "flex",
      alignItems: "center",
      padding: "8px",
      paddingBottom: "10px",
      paddingLeft: "15px",
      backgroundColor: bgColor,
      borderRadius: "20px",
      borderBottomLeftRadius: "20px",
      borderTopLeftRadius: "20px",
      borderBottomRightRadius: "1%",
      borderTopRightRadius: "1%",
      zIndex: 7,
      color: "#1F4690",
    },
    sidebarSelectedItem: {
      color: "#1F4690",
      fontWeight: "normal",
      fontSize: "16px",
      paddingLeft: "10px",
    },
    brandContainer: {
      borderBottom: "1px solid white",
      paddingLeft: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "10px",
      paddingTop: "20px",
      paddingBottom: "10px",
      marginBottom: "10px",
    },
    brandLogoContainer: {
      border: "1px white solid",
      borderRadius: "50%",
      overflow: "hidden",
      width: "30px",
      marginLeft: "5px",
    },
    brandName: {
      color: "white",
      fontSize: "24px",
      padding: "15px",
      paddingLeft: "1px",
    },
    logoutBtn: {
      display: "flex",
      alignItems: "center",
      padding: "8px",
      borderTop: "1px solid white ",
      marginRight: "10px",
      marginTop: "25px",
      paddingLeft: "25px",
      paddingTop: "10px",
    },
  };
  return (
    <div style={styles.sidebarContainer}>
      <div style={styles.brandContainer}>
        <div style={styles.brandLogoContainer}>
          <img
            src="https://png.pngitem.com/pimgs/s/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
            alt="new avatar"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <h1 style={styles.brandName}>Traders.Block</h1>
      </div>

      <div style={{ marginLeft: "10px" }}>
        <div style={styles.sidebarItemContainer}>
          <MdOutlineDashboard />
          <p className="text-white-700 text-base" style={styles.sidebarItem}>
            Dashboard
          </p>
        </div>

        <div style={styles.sidebarItemContainer}>
          <BiWalletAlt />
          <p className="text-gray-700 text-base" style={styles.sidebarItem}>
            Asset
          </p>
        </div>

        <div style={styles.sidebarItemContainer}>
          <BsWallet />
          <p className="text-gray-700 text-base" style={styles.sidebarItem}>
            Transaction Hall
          </p>
        </div>

        <div style={styles.sidebarItemContainer}>
          <FiUser />
          <p className="text-gray-700 text-base" style={styles.sidebarItem}>
            Personal info
          </p>
        </div>

        <div style={styles.sidebarItemContainer}>
          <BiWalletAlt />
          <p className="text-gray-700 text-base" style={styles.sidebarItem}>
            KYC
          </p>
        </div>

        <div style={styles.selectedSideBarItemContainer}>
          <FiUsers color="#1F4690" />
          <p
            className="text-gray-700 text-base"
            style={styles.sidebarSelectedItem}
          >
            My Team
          </p>
        </div>

        <div style={styles.sidebarItemContainer}>
          <FiSettings />
          <p className="text-gray-700 text-base" style={styles.sidebarItem}>
            Setting
          </p>
        </div>
      </div>

      <div style={styles.logoutBtn}>
        <MdOutlineLogout />
        <p className="text-gray-700 text-base" style={styles.sidebarItem}>
          Logout
        </p>
      </div>
    </div>
  );
}

export default SideBar;
