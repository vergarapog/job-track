"use client";
import React, { ReactNode } from "react";

import { SessionProvider } from "next-auth/react";

type Props = {
  children: ReactNode;
  session?: any;
};

const Provider = ({ children, session }: Props) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
