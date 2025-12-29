import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import { Search, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Updates() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border pt-24">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Rose Island, Indiana Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body italic">
            "News, research findings, and behind-the-scenes stories."
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar / Filters */}
            <div className="w-full lg:w-1/4 space-y-8">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search updates..." 
                  className="pl-10 bg-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-heading text-lg font-bold text-primary mb-4 border-b border-border pb-2">
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-3 py-2 rounded-sm text-sm transition-colors ${
                      selectedCategory === null 
                        ? "bg-primary text-white" 
                        : "hover:bg-muted text-muted-foreground"
                    }`}
                  >
                    All Posts
                  </button>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-sm text-sm transition-colors ${
                        selectedCategory === category 
                          ? "bg-primary text-white" 
                          : "hover:bg-muted text-muted-foreground"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Feed */}
            <div className="flex-1">
              <div className="space-y-12">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col md:flex-row gap-8 items-start border-b border-border pb-12 last:border-0"
                    >
                      <div className="w-full md:w-1/3 aspect-video bg-muted rounded-sm overflow-hidden border border-border shadow-sm group">
                        <Link href={`/updates/${post.id}`}>
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                          />
                        </Link>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="flex items-center gap-1 text-xs font-accent uppercase tracking-widest text-secondary font-bold">
                            <Tag className="w-3 h-3" />
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground font-mono">
                            {post.date}
                          </span>
                        </div>
                        <Link href={`/updates/${post.id}`}>
                          <h2 className="font-heading text-2xl font-bold text-primary mb-3 hover:text-secondary transition-colors cursor-pointer">
                            {post.title}
                          </h2>
                        </Link>
                        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        <Link href={`/updates/${post.id}`}>
                          <Button variant="link" className="text-primary font-accent p-0 hover:no-underline group">
                            Read More <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    No posts found matching your search.
                  </div>
                )}
              </div>
              
              {filteredPosts.length > 0 && (
                <div className="mt-12 text-center">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-accent tracking-wider">
                    Load Older Posts
                  </Button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
