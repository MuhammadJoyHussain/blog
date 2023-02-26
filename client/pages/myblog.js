import Header from "@/components/Header";
import React from "react";

const MyBlog = () => {
  return (
    <div>
      <Header />
      <div className="max-w-sm w-full lg:max-w-full lg:flex mt-5 flex justify-center">
        <div className="border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="mb-8 p-4">
            <div className="text-gray-900 font-bold text-xl mb-2">
              Can coffee make you a better developer?
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex items-center px-2">
            <h1 className="border-t w-full px-2 py-2 cursor-pointer text-yellow-900">
              Read full
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
