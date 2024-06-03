import PostPage from "./pages/PostPage"
import UserPage from "./pages/UserPage"

function App() {
  return (
    <>
      <main className="flex justify-center">
        <div className=" max-w-[620px] w-full">
         <Routes>
          <Route path="/:username" element={<UserPage/>}/>
          <Route path="/:username/posts/:pid" element={<PostPage/>}/>
         </Routes>
        </div>
      </main>
    </>
  )
}

export default App
