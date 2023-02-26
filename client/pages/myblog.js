import Header from "@/components/Header";
import Link from "next/link";
import React from "react";
import blogs from "../json/blogs";

const MyBlog = () => {
  return (
    <div>
      <Header />
      <div className="max-w-sm w-full lg:max-w-full mt-5 justify-center">
        {blogs.map((b) => (
          <div className="border-r border-b border-l mx-28 my-5 border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="mb-8 p-4">
              <div className="text-gray-900 font-bold text-xl mb-2">
                {b.title}
              </div>
              <p className="text-gray-700 text-base">{b.blog}</p>
            </div>
            <div className="flex items-center px-2">
              <h1 className="border-t w-full px-2 py-2 cursor-pointer text-yellow-900">
                <Link href={`/blogdetails/${b.id}`}>Read Full</Link>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlog;