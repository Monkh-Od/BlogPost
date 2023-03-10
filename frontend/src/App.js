import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostCreate from "./components/PostCreate";
import { Layout } from "./layout/Layout";
import { BlogPost, Signin, Signup } from "./pages";
import { AuthProvider, ThemeContext } from "./contexts";
import HomePage from "./pages/Home.jsx";

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
