import Header from "@/components/Header";
import { Button, Input, Textarea } from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState();
  const [blog, setBlog] = useState();
  const [image, setImage] = useState();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    const upload = await axios.get('http://localhost:5000/api/upload', config);

    await axios.put(upload.data.url, image, {
      headers: image.type
    })

    const data = { title, blog };

    axios.post("http://localhost:5000/api/blog", data, config);
  };

  return (
    <div className="h-[80vh]">
      <Header />

      <div className="flex justify-center items-center h-full">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-xl font-bold mb-5">Write Your Blog</h1>
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


          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" onChange={(e) => setImage(e.target.files[0])} type="file" className="hidden" />
            </label>
          </div>


          <div className="flex justify-center mt-5">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
