import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { format } from "date-fns";

const events = [
  {
    date: new Date(2025, 5, 15), // June 15, 2025
    title: "Book Launch Party",
    location: "Charlestown Public Library",
    time: "6:00 PM - 8:00 PM",
    desc: "Join us for the official launch of The Rose Island Story. Signed copies available."
  },
  {
    date: new Date(2025, 6, 4), // July 4, 2025
    title: "Rose Island Centennial Picnic",
    location: "Charlestown State Park",
    time: "11:00 AM - 4:00 PM",
    desc: "A community gathering celebrating the history of the park. Guided history walks included."
  },
  {
    date: new Date(2025, 7, 10), // August 10, 2025
    title: "Author Reading & Q&A",
    location: "Carmichael's Bookstore, Louisville",
    time: "7:00 PM",
    desc: "Reading excerpts from the book and discussing the research process."
  }
];

export default function Events() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Filter events for the selected date (simple implementation)
  const selectedEvents = date 
    ? events.filter(e => e.date.toDateString() === date.toDateString())
    : [];

  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Upcoming Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body italic">
            "Meet the author and celebrate the history."
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Calendar Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border p-6 rounded-sm shadow-sm sticky top-24">
              <h3 className="font-heading text-xl font-bold text-primary mb-4">Select a Date</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border w-full flex justify-center"
              />
              <div className="mt-6 p-4 bg-muted/50 rounded text-sm text-muted-foreground">
                <p>Click on a date to see events scheduled for that day.</p>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="font-heading text-3xl font-bold text-primary border-b border-border pb-4">
              Schedule of Appearances
            </h2>

            {events.map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 bg-card border border-border p-6 rounded-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 flex flex-col items-center justify-center bg-primary/10 w-full md:w-24 h-24 rounded border border-primary/20">
                  <span className="font-accent text-sm uppercase text-primary font-bold">
                    {format(event.date, "MMM")}
                  </span>
                  <span className="font-heading text-3xl font-bold text-primary">
                    {format(event.date, "d")}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 font-accent uppercase tracking-wide">
                    <span>📍 {event.location}</span>
                    <span>🕒 {event.time}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.desc}
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    RSVP / Details
                  </Button>
                </div>
              </div>
            ))}

            {events.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No events scheduled at this time. Check back soon!
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
