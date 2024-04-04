import { Link,Route, Routes } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Post from "./Post";
import PostLayout from "./PostLayout";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/postpage">Postpage</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/postpage" element={<PostLayout />}>
          <Route index element={<PostPage />} />
          <Route path=":id" element={<Post />} />
          <Route path="newpost" element={<NewPost />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;

// {
    //   id:1,
    //   title:"My First Post",
    //   datetime:"July 01,2021 11:17:36 AM",
    //   body:"Made a video about Tesla Q1 results"
    // },
    // {
    //   id:2,
    //   title:"My 2nd Post",
    //   datetime:"July 03,2021 11:17:36 AM",
    //   body:"I attended a defi blockchain event "
    // },
    // {
    //   id:3,
    //   title:"My 3rd Post",
    //   datetime:"July 05,2021 11:17:36 AM",
    //   body:"Web3 global summit next week"
    // },
    // {
    //   id:4,
    //   title:"My Fourth Post",
    //   datetime:"July 07,2021 11:17:36 AM",
    //   body:"ETH will outperform BTC"
    // }