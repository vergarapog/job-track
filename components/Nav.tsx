"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

type Props = {};

const Nav = (props: Props) => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState<any>(null);
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    fetchProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          width={30}
          height={30}
          className="object-contain"
          src="/assets/images/logo.svg"
          alt="Job Track Logo"
        />
        <p className="logo_text">Job Track</p>
      </Link>

      {/**Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create post
            </Link>
            <button
              type="button"
              onClick={() => signOut}
              className="outline_btn"
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rouned-full"
                alt="profile"
              ></Image>
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => {
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign in
                </button>;
              })}
          </>
        )}
      </div>

      {/**Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rouned-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            ></Image>

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  className="dropdown_link"
                  href="/profile"
                  onClick={() => setToggleDropdown(false)}
                >
                  My profile
                </Link>
                <Link
                  className="dropdown_link"
                  href="/create-prompt"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rouned-full"
              alt="profile"
            ></Image>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
