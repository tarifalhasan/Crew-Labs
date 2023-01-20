import Contact from "@/components/Contact/Contact";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import Sponsors from "@/components/Sponsors/Sponsors";
import Team from "@/components/Team/Team";
import styles from "@/styles/Header.module.css";

import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Crew Labs - The Future of Web</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.heading}>
        <div className={` container mx-auto`}>
          <Header />
          <Sponsors />
          <Features />
          <div className="team_services_section">
            <Services />
            <Team />
          </div>
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}