import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BookCard from "../components/ui/BookCard";
import {
  ChevronDown,
  Search,
  X,
  Filter,
  SlidersHorizontal,
} from "lucide-react";
import { books } from "@/db/books";
import { useQuery } from "@tanstack/react-query";

// Mock categories
const categories = [
  { id: "All", name: "All Categories" },
  { id: "Fiction", name: "Fiction" },
  { id: "Non Fiction", name: "Non-Fiction" },
  { id: "Thriller", name: "Mystery & Thriller" },
  { id: "Science Fiction", name: "Science Fiction" },
  { id: "Fantasy", name: "Fantasy" },
  { id: "Romance", name: "Romance" },
  { id: "Biography", name: "Biography" },
  { id: "History", name: "History" },
  { id: "Business", name: "Business" },
  { id: "Self Help", name: "Self-Help" },
];

// Mock filters
const priceRanges = [
  { id: "under10", label: "Under $10" },
  { id: "10to20", label: "$10 to $20" },
  { id: "20to30", label: "$20 to $30" },
  { id: "over30", label: "Over $30" },
];

const ratings = [
  { id: "4plus", label: "4★ & above" },
  { id: "3plus", label: "3★ & above" },
  { id: "2plus", label: "2★ & above" },
  { id: "1plus", label: "1★ & above" },
];

const sortOptions = [
  { id: "relevance", label: "Relevance" },
  { id: "newest", label: "Newest Arrivals" },
  { id: "priceLow", label: "Price: Low to High" },
  { id: "priceHigh", label: "Price: High to Low" },
  { id: "ratingHigh", label: "Customer Rating" },
];

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get a specific query parameter
  const category = searchParams.get("category");
  const filter = searchParams.get("filter");

  // States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    id || categories[0].id
  );
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    price: [] as string[],
    rating: [] as string[],
  });
  const [sortBy, setSortBy] = useState(sortOptions[0].id);

  // Get the current category name
  const currentCategory =
    categories.find((cat) => cat.id === selectedCategory)?.name ||
    "All Categories";

  // Filter books (in a real app, this would be handled by the backend)
  // const filteredBooks = category
  //   ? books.filter((book) => book.categories.includes(category))
  //   : books;
  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.categories.includes(selectedCategory));

  console.log("current-->", selectedCategory);

  // Toggle price filter
  const togglePriceFilter = (filterId: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      price: prev.price.includes(filterId)
        ? prev.price.filter((id) => id !== filterId)
        : [...prev.price, filterId],
    }));
  };

  // Toggle rating filter
  const toggleRatingFilter = (filterId: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      rating: prev.rating.includes(filterId)
        ? prev.rating.filter((id) => id !== filterId)
        : [...prev.rating, filterId],
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveFilters({ price: [], rating: [] });
    setSearchQuery("");
  };

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar/Filters */}
            <aside
              className={`md:w-64 lg:w-72 flex-shrink-0 ${
                showFilters ? "block" : "hidden md:block"
              }`}
            >
              <div className="sticky top-24 space-y-8 animate-slide-up">
                <div>
                  <h2 className="font-semibold text-lg mb-4">Categories</h2>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      // <Link to={`/category?category=${category.id}`}>
                      <li key={category.id}>
                        <button
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left py-2 px-3 rounded-lg transition-colors ${
                            selectedCategory === category.id
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-secondary"
                          }`}
                        >
                          {category.name}
                        </button>
                      </li>
                      // </Link>
                    ))}
                  </ul>
                </div>

                <div className="subtle-divider" />

                <div>
                  <h2 className="font-semibold text-lg mb-4">Price</h2>
                  <ul className="space-y-2">
                    {priceRanges.map((range) => (
                      <li key={range.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`price-${range.id}`}
                          checked={activeFilters.price.includes(range.id)}
                          onChange={() => togglePriceFilter(range.id)}
                          className="rounded border-input h-4 w-4 text-primary focus:ring-primary/20"
                        />
                        <label
                          htmlFor={`price-${range.id}`}
                          className="ml-2 text-sm text-foreground cursor-pointer"
                        >
                          {range.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="subtle-divider" />

                <div>
                  <h2 className="font-semibold text-lg mb-4">
                    Customer Rating
                  </h2>
                  <ul className="space-y-2">
                    {ratings.map((rating) => (
                      <li key={rating.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`rating-${rating.id}`}
                          checked={activeFilters.rating.includes(rating.id)}
                          onChange={() => toggleRatingFilter(rating.id)}
                          className="rounded border-input h-4 w-4 text-primary focus:ring-primary/20"
                        />
                        <label
                          htmlFor={`rating-${rating.id}`}
                          className="ml-2 text-sm text-foreground cursor-pointer"
                        >
                          {rating.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <button
                    onClick={clearFilters}
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-grow">
              <div className="mb-8 animate-slide-up">
                <h1 className="text-3xl font-semibold mb-4">
                  {currentCategory}
                </h1>
                <p className="text-muted-foreground">
                  Showing {filteredBooks.length} results
                </p>
              </div>

              {/* Search and Filters Bar */}
              <div
                className="mb-8 animate-slide-up"
                style={{ animationDelay: "100ms" }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow">
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      size={18}
                    />
                    <input
                      type="text"
                      placeholder={`Search in ${currentCategory.toLowerCase()}`}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-10 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>

                  <div className="sm:w-48">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full py-2 px-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 8px center",
                        backgroundSize: "16px",
                        paddingRight: "32px",
                      }}
                    >
                      {sortOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="md:hidden flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-input"
                  >
                    <SlidersHorizontal size={18} />
                    Filters
                  </button>
                </div>

                {/* Active filters */}
                {(activeFilters.price.length > 0 ||
                  activeFilters.rating.length > 0) && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {activeFilters.price.map((filterId) => {
                      const filter = priceRanges.find((r) => r.id === filterId);
                      return filter ? (
                        <div
                          key={filterId}
                          className="flex items-center bg-secondary text-secondary-foreground text-sm rounded-full pl-3 pr-2 py-1"
                        >
                          {filter.label}
                          <button
                            onClick={() => togglePriceFilter(filterId)}
                            className="ml-1 p-1 rounded-full hover:bg-muted"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ) : null;
                    })}

                    {activeFilters.rating.map((filterId) => {
                      const filter = ratings.find((r) => r.id === filterId);
                      return filter ? (
                        <div
                          key={filterId}
                          className="flex items-center bg-secondary text-secondary-foreground text-sm rounded-full pl-3 pr-2 py-1"
                        >
                          {filter.label}
                          <button
                            onClick={() => toggleRatingFilter(filterId)}
                            className="ml-1 p-1 rounded-full hover:bg-muted"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
              </div>

              {/* Books Grid */}
              <div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                {filteredBooks.map((book, index) => (
                  <div
                    key={book.id}
                    style={{ animationDelay: `${200 + index * 50}ms` }}
                  >
                    <BookCard {...book} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
