import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    const data = { email, password };

    await axios
      .post("http://localhost:5000/api/auth/login", data)
      .then((res) => {
        if (res.data?.token) {
          if (router?.asPath == "/login") {
            router.push(`/myblog`);
          }
          router.push(`${router?.asPath}`);
          Cookies.set("token", res.data?.token);
        }
      })
      .catch((error) => setError(error.response?.data.error));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Login.
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          {error}
        </Typography>
        <form
          onSubmit={handleSignin}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              label="Email"
            />
            <Input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              size="lg"
              label="Password"
            />
          </div>
          <Button className="mt-6" type="submit" fullWidth>
            Login
          </Button>
        </form>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Register
          </Link>
        </Typography>
      </Card>
    </div>
  );
};

export default login;
