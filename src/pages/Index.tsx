
import { renderToStaticMarkup } from "react-dom/server";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import TrendingBooks from "../components/home/TrendingBooks";
import BookCollection from "../components/home/BookCollection";
import GenreSection from "../components/home/GenreSection";
import { books } from "@/db/books";

const Index = () => {
  // Make a copy of the books array rather than using splice (which modifies the original array)
  const allBooks = [...books];
  
  // Filter books for each section instead of using splice
  const newReleases = allBooks.filter(book => book.isNew).slice(0, 8);
  const bestsellers = allBooks.filter(book => book.isBestseller).slice(0, 4);
  
  // Get books with discount (original price exists and is higher than current price)
  const specialDeals = allBooks
    .filter(book => book.originalPrice !== undefined && book.originalPrice > book.price)
    .slice(0, 8);
  
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />

        <BookCollection
          title="New Releases"
          books={newReleases}
          link={{ text: "View all new releases", url: "/new-releases" }}
        />

        <GenreSection />

        <TrendingBooks />

        <BookCollection
          title="Bestsellers"
          books={bestsellers}
          link={{ text: "View all bestsellers", url: "/bestsellers" }}
        />
        
        <BookCollection
          title="Special Deals"
          books={specialDeals}
          link={{ text: "View all deals", url: "/deals" }}
        />

      </main>
      <Footer />
    </div>
  );
};

export default Index;
