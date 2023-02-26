import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import blogs from "../../json/blogs";

const BlogDetails = () => {
  const router = useRouter();
  const id = router.query.id;

  const blog = blogs?.find((b) => b.id === id);

  return (
    <div className="mx-10 mt-20">
      <Link href="/myblog" className="flex items-center gap-1 mb-10">
        <AiOutlineArrowLeft />
        Back
      </Link>
      <div className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
        <h5 className="mb-2 text-2xl text-center font-bold leading-tight text-neutral-800 dark:text-neutral-50">
          {blog?.title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {blog?.blog}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
