import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import './App.css';
import ExerciseDetail from './Page/ExerciseDetail';
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <header
        className="w-full flex justify-between items-center
       bg-white sm:px-8 px-4 py-4 border-b 
      border-b-[#e6ebf4]"
      >
        <Link to="/">
          <img
            src="https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg"
            alt="logo"
            className="w-28 object-contain"
          ></img>
        </Link>
        <div className="flex items-center">
          {/* <Link
            to="/create-post-lexica"
            className="font-inter font-medium bg-[#1D267D] text-white px-4 py-2 rounded-md"
          >
            Lexica AI
          </Link>

          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md ml-4"
          >
            Stable Diffusion
          </Link> */}
          <Link
            to="/upload"
            className="font-inter font-medium bg-[#F2BED1] text-white px-4 py-2 rounded-md ml-4"
          >
            Upload
          </Link>
          <Link
            to="/login"
            className="font-inter font-medium bg-[#9DC08B]  text-white px-4 py-2 rounded-md ml-4"
          >
            Login
          </Link>
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          {/* <Route path="/create-post" element={<CreatePost></CreatePost>} />
          <Route
            path="/create-post-lexica"
            element={<CreatePostLexica></CreatePostLexica>}
          />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/upload" element={<Upload></Upload>} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
