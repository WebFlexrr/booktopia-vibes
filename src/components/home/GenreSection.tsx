
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const genres = [
  {
    id: 'fiction',
    name: 'Fiction',
    description: 'Explore imaginative worlds and compelling characters',
    color: 'from-blue-500/20 to-blue-600/20',
    textColor: 'text-blue-800',
    image: 'https://images.unsplash.com/photo-1518744386442-2d48ac48a919?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-2',
  },
  {
    id: 'mystery',
    name: 'Mystery & Thriller',
    description: 'Suspense, intrigue, and page-turning excitement',
    color: 'from-purple-500/20 to-purple-600/20',
    textColor: 'text-purple-800',
    image: 'https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'romance',
    name: 'Romance',
    description: 'Love stories that capture the heart',
    color: 'from-pink-500/20 to-pink-600/20',
    textColor: 'text-pink-800',
    image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'scifi',
    name: 'Science Fiction',
    description: 'Future worlds, technology, and cosmic adventures',
    color: 'from-indigo-500/20 to-indigo-600/20',
    textColor: 'text-indigo-800',
    image: 'https://images.unsplash.com/photo-1629778712393-4f316eee126e?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-2',
  },
  {
    id: 'fantasy',
    name: 'Fantasy',
    description: 'Magical realms and epic adventures',
    color: 'from-amber-500/20 to-amber-600/20',
    textColor: 'text-amber-800',
    image: 'https://images.unsplash.com/photo-1518842013791-b874be246c34?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1',
  },
  {
    id: 'nonfiction',
    name: 'Non-Fiction',
    description: 'True stories, biographies, and real-world insights',
    color: 'from-green-500/20 to-green-600/20',
    textColor: 'text-green-800',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'history',
    name: 'History',
    description: 'Explore the fascinating stories of our past',
    color: 'from-stone-500/20 to-stone-600/20',
    textColor: 'text-stone-800',
    image: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-4.0.3&auto=format&fit=crop&w=2369&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'childrens',
    name: 'Children\'s',
    description: 'Delightful stories for young readers',
    color: 'from-red-500/20 to-red-600/20',
    textColor: 'text-red-800',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
    span: 'col-span-1 row-span-1',
  },
];

const GenreSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="container-custom py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Explore by Genre</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover new worlds and perspectives through our carefully curated collection of books across every genre
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {genres.map((genre) => (
          <div 
            key={genre.id}
            className={`${genre.span} group rounded-2xl overflow-hidden relative cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl`}
            onClick={() => navigate(`/category/${genre.id}`)}
          >
            <div className="absolute inset-0">
              <img 
                src={genre.image} 
                alt={genre.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${genre.color} opacity-90`}></div>
            </div>
            
            <div className="relative h-full z-10 p-6 flex flex-col justify-end">
              <h3 className={`text-2xl font-bold mb-2 ${genre.textColor}`}>{genre.name}</h3>
              <p className="text-sm text-gray-700 mb-4 max-w-[90%]">{genre.description}</p>
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
  );
};

export default GenreSection;
