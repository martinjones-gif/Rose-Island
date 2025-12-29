import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";

export default function Credits() {
  return (
    <Layout>
      <Helmet>
        <title>Image Credits & Copyright | The Rose Island Story</title>
        <meta name="description" content="Copyright information and diligent search disclaimer for images used in The Rose Island Story project." />
      </Helmet>

      <div className="bg-muted/30 pt-32 pb-12 border-b border-border">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Image Credits & Copyright</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body italic">
            "Preserving history with respect and diligence."
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container max-w-3xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">Image Copyright & Diligent Search</h2>
            
            <p className="mb-6">
              The images used on this website are for historical and educational purposes to document the history of Rose Island (1923–1937). While many images are in the public domain, others are "orphan works" where the original photographer or rights holder could not be identified after a diligent search.
            </p>

            <p className="mb-6">
              The author has made every effort to trace copyright holders and obtain permission for all images. If you believe you hold the rights to any image on this site, please contact me at <a href="mailto:author@theroseislandstory.com" className="text-primary hover:underline font-bold">author@theroseislandstory.com</a>. I will broadly attribute the work to you or, if requested, remove the image immediately.
            </p>

            <div className="bg-muted/30 p-6 rounded-sm border-l-4 border-primary mt-8">
              <h3 className="font-heading text-xl font-bold text-primary mb-2">A Note on Historical Preservation</h3>
              <p className="text-sm text-muted-foreground">
                This project aims to reconstruct the lost history of Rose Island for future generations. Your cooperation in helping us correctly attribute these historical artifacts is greatly appreciated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
