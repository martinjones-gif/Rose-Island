import { useRoute } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Link } from "wouter";

export default function BlogPost() {
  const [match, params] = useRoute("/updates/:id");
  
  if (!match) return <NotFound />;
  
  const post = blogPosts.find(p => p.id === params.id);
  
  if (!post) return <NotFound />;

  return (
    <Layout>
      <article className="min-h-screen bg-background pb-20 pt-24">
        {/* Hero Image */}
        <div className="h-[40vh] md:h-[50vh] w-full relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
            <div className="container max-w-4xl">
              <Link href="/updates">
                <Button variant="link" className="text-white/80 hover:text-gold p-0 mb-6 group">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Updates
                </Button>
              </Link>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-white/80 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gold" />
                  {post.category}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container max-w-3xl py-12 md:py-16">
          <div 
            className="prose prose-lg prose-invert max-w-none blog-content
              prose-headings:font-heading prose-headings:text-primary
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-gold prose-blockquote:text-primary prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
            <Link href="/updates">
              <Button variant="outline" className="border-primary/20 hover:border-gold hover:text-gold">
                View All Updates
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
