import React from "react";
import { blogs } from "@/utiles/mock-data/blogs";
import { Blog } from "@/utiles/types/blogcard-types";
import BlogCard from "../Content/BlogCard";

const BlogList: React.FC = () => {
  return (
    <div className='flex flex-col gap-14'>
      {blogs?.map((blog: Blog, i: number) => <BlogCard key={i} data={blog} />)}
    </div>
  );
};

export default BlogList;