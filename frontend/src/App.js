import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostCreate from "./components/PostCreate";
import { Layout } from "./layout/Layout";
import { BlogPost, HomePage, Post, Signin, Signup } from "./pages";
import { AuthProvider, ThemeContext, UserInfoContext } from "./contexts";

import React from "react";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <UserInfoContext>
        <AuthProvider>
          <ThemeContext>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/blogposts" element={<BlogPost />} />
                <Route path="/blogposts/:postId" element={<Post />} />
                <Route path="/blog/postcreate" element={<PostCreate />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          </ThemeContext>
        </AuthProvider>
      </UserInfoContext>
    </BrowserRouter>
  );
}

export default App;
