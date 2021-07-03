import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

interface IProps {
  page?: string;
  children: React.ReactNode;
}

export default function Layout({ page, children }: IProps): JSX.Element {
  return (
    <div>
      <Head>
        <title>{page}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
