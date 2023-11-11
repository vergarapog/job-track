import "@styles/globals.css";
import { ReactNode } from "react";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: "Job Track",
  description: "Track your job applications",
};

const RootLayout = (props: Props) => {
  return (
    <html lang="en">
      <Provider>
        <body className="">
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {props.children}
          </main>
        </body>
      </Provider>
    </html>
  );
};

export default RootLayout;
