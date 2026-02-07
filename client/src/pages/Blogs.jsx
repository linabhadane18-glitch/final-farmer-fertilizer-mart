import React from "react";
import { Routes, Route, Outlet} from "react-router-dom";
import BlogList from "../componentsBlogs/BlogList.jsx";

import NavbarBlogs from "../componentsBlogs/NavbarBlogs.jsx";

// This page is mounted at /blogs from the main App router.
// Nested routes here handle list, detail and add-blog views.
const Blogs = () => {
  return (
    <>
     <NavbarBlogs/>
     <BlogList/>
     <Outlet/>
    </>
  );
};

export default Blogs;
