import { ThemeProvider } from "./components/context/ThemeContext";
import Header from "./components/Header/Header";
import UseContextDemo from "./components/UseStateDemo/UseStateDemo";

function App() {
  
  return (
    <>
      {/* 
        ThemeProvider: 
        - Thành phần này cung cấp thông tin về theme cho toàn bộ ứng dụng.
        - Chức năng chuyển đổi theme được cung cấp cho các thành phần con.
      */}
      <ThemeProvider>
          <Header />
          <UseContextDemo />
      </ThemeProvider>
    </>
  );
}

export default App;
