
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { publishers } from '../db/publishers';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Globe, MapPin, Calendar } from 'lucide-react';

const PublishersListPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl mb-16">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 h-64 md:h-80">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
                    Certified Publishers
                  </h1>
                  <p className="text-lg md:text-xl text-white drop-shadow-md mb-6">
                    Discover top-tier publishers bringing quality literature to readers worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Publisher */}
          <div className="mb-16 animate-fade-in">
            <h2 className="section-heading">Featured Publisher</h2>
            <Card className="overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-[3/2] overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={publishers[0].logo}
                      alt={publishers[0].name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600">
                        <CheckCircle className="mr-1 h-3 w-3" /> Verified
                      </Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl md:text-3xl">{publishers[0].name}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <p className="text-muted-foreground mb-6">{publishers[0].description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-emerald-600" />
                        <span>Founded: {publishers[0].founded}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                        <span>Headquarters: {publishers[0].headquarters}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Globe className="h-4 w-4 mr-2 text-emerald-600" />
                        <a href={publishers[0].website} target="_blank" rel="noreferrer" className="text-emerald-600 hover:underline">
                          Official Website
                        </a>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link
                        to={`/publishers/${publishers[0].id}`}
                        className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md shadow-sm hover:bg-emerald-700 transition-colors"
                      >
                        View Publisher Details
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>

          {/* All Publishers */}
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h2 className="section-heading">All Certified Publishers</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {publishers.slice(1).map((publisher, index) => (
                <Link 
                  to={`/publishers/${publisher.id}`} 
                  key={publisher.id}
                  className="group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-md transition-all duration-300 hover-scale">
                    <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                      <img 
                        src={publisher.logo} 
                        alt={publisher.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {publisher.verified && (
                        <div className="absolute top-3 right-3">
                          <Badge variant="default" className="bg-emerald-500/90 hover:bg-emerald-600">
                            <CheckCircle className="mr-1 h-3 w-3" /> Verified
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-emerald-600 transition-colors">{publisher.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-2 mb-4">
                        {publisher.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground">Founded: {publisher.founded}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground line-clamp-1">{publisher.headquarters}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Publishers Stats */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="bg-gradient-to-r from-emerald-100 to-teal-50 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Publishing Industry Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{publishers.length}</div>
                  <div className="text-muted-foreground">Verified Publishers</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">10,000+</div>
                  <div className="text-muted-foreground">Books Published</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
                  <div className="text-muted-foreground">Award Winners</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublishersListPage;
