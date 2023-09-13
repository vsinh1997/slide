import React, { createContext, useContext, useState } from "react";

// Tạo một Context cho Theme
const ThemeContext = createContext();

// Hook tùy chỉnh cho việc sử dụng theme
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Component ThemeProvider quản lý theme
export const ThemeProvider = ({ children }) => {

  // State để lưu trạng thái theme, mặc định là "light"
  const [theme, setTheme] = useState("light");

  // Hàm toggleTheme để chuyển đổi giữa chế độ "light" và "dark"
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Lấy tham chiếu đến thẻ body để thay đổi màu nền và màu chữ dựa trên theme
  const body = document.body;

  // Kiểm tra theme và thay đổi màu nền và màu chữ tương ứng
  if (theme === "light") {
    body.style.backgroundColor = "#333"; // Màu nền chế độ tối
    body.style.color = "#fff"; // Màu chữ chế độ tối
  } else {
    body.style.backgroundColor = "#fff"; // Màu nền chế độ sáng
    body.style.color = "#333"; // Màu chữ chế độ sáng
  }

  // Trả về Provider với giá trị theme và toggleTheme để cung cấp cho các component khác
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
