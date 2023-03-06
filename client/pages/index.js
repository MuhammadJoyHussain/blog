import Head from "next/head";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/current_user")
      .then((res) => setUser(res.data));
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="flex justify-center items-center h-[80vh]">
          <h1 className="text-bold text-xl text-green-500">
            <div>
              {user ? (
                <div>
                  <p>Welcome, {user.displayName}!</p>
                  <p>Your email is: {user.emails[0].value}</p>
                </div>
              ) : (
                <p>Please log in to view your profile.</p>
              )}
            </div>
          </h1>
        </div>
      </main>
    </>
  );
}
