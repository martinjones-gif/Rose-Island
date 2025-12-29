import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { ChevronDown } from "lucide-react";

// Native select implementation for guaranteed reliability
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const recipient = "press@theroseislandstory.com";
    const emailSubject = `[${formData.inquiryType || 'General'}] ${formData.subject || 'New Inquiry'}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Inquiry Type: ${formData.inquiryType}

Message:
${formData.message}`;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <div className="bg-muted/30 pt-32 pb-12 border-b border-border">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Contact</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body italic">
            "Share your own Rose Island stories or get in touch."
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border p-8 rounded-sm shadow-lg relative z-[50]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-accent uppercase tracking-wider text-muted-foreground">Name *</label>
                  <Input 
                    id="name" 
                    placeholder="Your Name" 
                    className="bg-background"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-accent uppercase tracking-wider text-muted-foreground">Email *</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-background"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="inquiry-type" className="text-sm font-accent uppercase tracking-wider text-muted-foreground">Inquiry Type</label>
                <div className="relative">
                  <select
                    id="inquiry-type"
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                    value={formData.inquiryType}
                    onChange={(e) => handleChange("inquiryType", e.target.value)}
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Book Martin for Event">Book Martin for Event</option>
                    <option value="Literary Agent Inquiry">Literary Agent Inquiry</option>
                    <option value="Publishing Opportunities">Publishing Opportunities</option>
                    <option value="Media/Press Inquiry">Media/Press Inquiry</option>
                    <option value="Speaking Engagement">Speaking Engagement</option>
                    <option value="Podcast/Interview Request">Podcast/Interview Request</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-accent uppercase tracking-wider text-muted-foreground">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Brief subject of your message" 
                  className="bg-background"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-accent uppercase tracking-wider text-muted-foreground">Message *</label>
                <Textarea 
                  id="message" 
                  placeholder="Write your message here..." 
                  className="min-h-[150px] bg-background"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-accent tracking-wider text-lg py-6">
                Send Message
              </Button>
            </form>
          </motion.div>
          
          <div className="mt-12 text-center text-muted-foreground">
            <p className="mb-2">For direct press inquiries, you can also email:</p>
            <a href="mailto:press@theroseislandstory.com" className="text-primary font-bold hover:underline">press@theroseislandstory.com</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
