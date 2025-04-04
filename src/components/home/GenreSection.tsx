import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const genres = [
  {
    id: "fiction",
    name: "Fiction",
    description: "Explore imaginative worlds and compelling characters",
    color: "from-blue-500/20 to-blue-600/20",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1676619487622-3d0f67687149?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    span: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: "mystery",
    name: "Mystery & Thriller",
    description: "Suspense, intrigue, and page-turning excitement",
    color: "from-purple-500/20 to-purple-600/20",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: "romance",
    name: "Romance",
    description: "Love stories that capture the heart",
    color: "from-pink-500/20 to-pink-600/20",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: "scifi",
    name: "Science Fiction",
    description: "Future worlds, technology, and cosmic adventures",
    color: "from-indigo-500/20 to-indigo-600/20",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1661768261898-e2b2a6083092?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    span: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: "fantasy",
    name: "Fantasy",
    description: "Magical realms and epic adventures",
    color: "from-amber-500/20 to-amber-600/20",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    span: "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  },
  {
    id: "nonfiction",
    name: "Non-Fiction",
    description: "True stories, biographies, and real-world insights",
    color: "from-green-500/20 to-green-600/20",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1637633765266-a064c026b9aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: "history",
    name: "History",
    description: "Explore the fascinating stories of our past",
    color: "from-stone-500/20 to-stone-600/20",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1582034438152-77bc94ffa6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2369&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: "biography",
    name: "Biography",
    description: "Explore the fascinating stories of Legends",
    color: "from-stone-500/20 to-stone-600/20",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1482412344192-78b24602ae92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2369&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: "business",
    name: "Business",
    description: "Delightful stories for young readers",
    color: "from-red-500/20 to-red-600/20",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    span: "col-span-1 row-span-1",
  },
];

const GenreSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#e11d48]">
      <section className="container-custom py-24 ">
        <div className="text-center mb-12">
          <h2 className="section-heading  mb-3 text-white">
            Explore by Genre
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-white">
            Discover new worlds and perspectives through our carefully curated
            collection of books across every genre
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className={`${genre.span} group rounded-2xl overflow-hidden relative cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl`}
              onClick={() => navigate(`/shop?category=${genre.id}`)}
            >
              <div className="absolute inset-0">
                <img
                  src={genre.image}
                  alt={genre.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${genre.color} opacity-90`}
                ></div>
              </div>

              <div className="relative h-full z-10 p-6 flex flex-col justify-end">
                <h3 className={`text-2xl font-bold mb-2 ${genre.textColor}`}>
                  {genre.name}
                </h3>
                <p className="text-sm mt-2 text-white mb-4 max-w-[90%]">
                  {genre.description}
                </p>
                <Button
                  variant="outline"
                  className="self-start bg-white hover:bg-white/90 text-gray-800 border-gray-300"
                >
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default GenreSection;
