import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostCreate, Service } from "./components";
import { Layout } from "./layout/Layout";
import { BlogPost, HomePage, Post, Signin, Signup } from "./pages";
import { AuthProvider, ThemeContext } from "./contexts";

import React from "react";
import Contact from "./pages/Contact";
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
              <Route path="/blogposts/:postId" element={<Post />} />
              <Route path="/postcreate" element={<PostCreate />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </ThemeContext>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
