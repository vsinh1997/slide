import React, { useState } from "react";
import Button from "@mui/material/Button";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

/**
 * Demo về cách dùng useState()
 * @returns count
 */
const UseStateDemo = () => {
  // Tạo trạng thái ban đầu của biến count là 0
  const [count, setCount] = useState(0);

  // Hàm tăng biến count
  const handleIncreaseCount = () => {
    // Sau mỗi lần click thì tăng count 1 đơn vị
    setCount(count + 1);
  };

  // Hàm giảm biến count
  const handleDecreaseCount = () => {
    // Sau mỗi lần click thì giảm count 1 đơn vị
    setCount(count - 1);
  };

  return (
    <div style={{ width: "30rem", margin: "3rem auto 0", textAlign: "center" }}>

      {/* Thiết lập hiển thị nội dung của count */}
      <h1 style={{ marginBottom: "1rem" }}>{`Count is: ${count}`}</h1>
      
      {/* Thiết lập nút bấm để giảm count */}
      <Button
        variant="contained"
        color="error"
        endIcon={<ArrowDownwardOutlinedIcon />}
        style={{ marginRight: "1rem" }}
        onClick={handleDecreaseCount}
      >
        decreate count
      </Button>

      {/* Thiết lập nút bấm để tăng count */}
      <Button
        variant="contained"
        color="success"
        endIcon={<ArrowUpwardOutlinedIcon />}
        onClick={handleIncreaseCount}
      >
        increate count
      </Button>
    </div>
  );
};

export default UseStateDemo;
