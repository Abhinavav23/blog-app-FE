import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/Home";
import { Profile } from "./components/profile/Profile";
import { Login } from "./components/auth/Login";
import { Signup } from "./components/auth/Signup";
import { CreteBlog } from "./components/CreteBlog";
import { BlogDetails } from "./components/blog/BlogDetails";
import { MyBlog } from "./components/blog/MyBlog";
import { MyComment } from "./components/blog/MyComment";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} >
          <Route path="myblogs" element={<MyBlog/>}/>
          <Route path="mycomments" element={<MyComment/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<CreteBlog />} />
        <Route path="/blog/:blogId" element={<BlogDetails />} />
      </Routes>
    </div>
  );
}

export default App;
