import React from "react";
import Head from "next/head";
import VideoCropper from "../components/VideoCropper";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "../styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Head>
        <title>Video Cropper</title>
        <meta
          name="description"
          content="Dynamic video cropper using Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <div className={styles.modal}>
          <VideoCropper />
        </div>
      </main>
    </div>
  );
}
