"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

type Props = {};

const Nav = (props: Props) => {
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
    </nav>
  );
};

export default Nav;
