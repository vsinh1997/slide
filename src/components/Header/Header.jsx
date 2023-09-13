import React from "react";
import { useTheme } from "../context/ThemeContext";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import IconButton from "@mui/material/IconButton";

/**
 * Header của trang web
 * @returns Header component
 */
function Header() {

   // Sử dụng hook useTheme để truy cập theme và toggleTheme từ ThemeContext
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{display: "flex", alignItems:"center", padding: "1rem 2rem", justifyContent:"space-between", boxShadow:"0 4px 6px "}}>
      <h1>My App</h1>
      
      {/* Sử dụng IconButton để tạo nút chuyển đổi giữa chế độ sáng và tối */}
      <IconButton onClick={toggleTheme}>
        {theme === "light" ? (

           // Sử dụng icon NightlightOutlinedIcon cho chế độ sáng
          <NightlightOutlinedIcon sx={{color: "#fff"}} />
        ) : (

           // Sử dụng icon LightModeOutlinedIcon cho chế độ tối
          <LightModeOutlinedIcon />
        )}
      </IconButton>
    </header>
  );
}

export default Header;
