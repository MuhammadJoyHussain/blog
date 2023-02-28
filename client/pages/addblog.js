import Header from "@/components/Header";
import { Button, Input, Textarea } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState();
  const [blog, setBlog] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { title, blog };

    axios.post("http://localhost:5000/api/blog", data);
  };

  return (
    <div className="h-[80vh]">
      <Header />

      <div className="flex justify-center items-center h-full">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-xl font-bold mb-5">Write Blog</h1>
          <div className="mb-5 w-96">
            <Input
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <Textarea
              label="Blog"
              value={blog}
              onChange={(e) => setBlog(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
