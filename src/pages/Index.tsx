import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import TrendingBooks from "../components/home/TrendingBooks";
import BookCollection from "../components/home/BookCollection";
import GenreSection from "../components/home/GenreSection";
import { books,  } from "@/db/books";

const Index = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />

        <BookCollection
          title="New Releases"
          books={books}
          link={{ text: "View all new releases", url: "/new-releases" }}
        />

        <GenreSection />

        <TrendingBooks />

        <BookCollection
          title="Bestsellers"
          books={books}
          link={{ text: "View all bestsellers", url: "/bestsellers" }}
        />

        <BookCollection
          title="Special Deals"
          books={books}
          link={{ text: "View all deals", url: "/deals" }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
