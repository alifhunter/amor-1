import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div
        id="app"
        className="flex flex-col font-body dark:bg-gray-900 overflow-hidden"
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
