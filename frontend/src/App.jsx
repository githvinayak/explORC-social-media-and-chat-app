import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
import Header from "./components/Header";
import { useColorMode } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { colorMode } = useColorMode();
  return (
    <>
      <main className='flex justify-center'>
        <div className=' max-w-[620px] px-4 w-full'>
          <Header />
          <Routes>
            <Route path='/:username' element={<UserPage />} />
            <Route path='/:username/post/:pid' element={<PostPage />} />
          </Routes>
          <ToastContainer
            position='top-right'
            autoClose={3000}
            theme={colorMode === "light" ? "light" : "dark"}
          />
        </div>
      </main>
    </>
  );
}

export default App;
