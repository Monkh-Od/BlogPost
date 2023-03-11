import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostCreate from "./components/PostCreate";
import AuthProvider from "./context/AuthContext";
import { Layout } from "./layout/Layout";
import BlogPost from "./pages/BlogPost";
import ThemeContext from "./contexts/themeContext";
import HomePage from "./pages/Home.jsx";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <ThemeContext>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blogposts" element={<BlogPost />} />
            <Route path="/postcreate" element={<PostCreate />} />
          </Routes>
        </Layout>
      </ThemeContext>
      </AuthProvider> 
    </BrowserRouter>
  );
}

export default App;
