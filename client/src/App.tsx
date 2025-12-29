import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AudioProvider } from "@/contexts/AudioContext";
import Home from "./pages/Home";
import AboutBook from "@/pages/AboutBook";
import Stories from "@/pages/Stories";
import Artifacts from "./pages/Artifacts";
import StoryBehind from "./pages/StoryBehind";
import Author from "./pages/Author";
import History from "./pages/History";
import Galleries from "./pages/Galleries";
import Events from "./pages/Events";
import Updates from "@/pages/Updates";
import FAQ from "@/pages/FAQ";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Credits from "./pages/Credits";
import TimeTravel from "./pages/TimeTravel";
import Map from "./pages/Map";

import PreOrder from "./pages/PreOrder";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-book" component={AboutBook} />
      <Route path="/stories" component={Stories} />
      <Route path="/artifacts" component={Artifacts} />
      <Route path="/story-behind" component={StoryBehind} />
      <Route path="/author" component={Author} />
      <Route path="/history" component={History} />
      <Route path="/galleries" component={Galleries} />
      <Route path="/events" component={Events} />
      <Route path="/updates" component={Updates} />
      <Route path="/faq" component={FAQ} />
      <Route path="/updates/:id" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/credits" component={Credits} />
      <Route path="/time-travel" component={TimeTravel} />
      <Route path="/map" component={Map} />
      
      <Route path="/pre-order" component={PreOrder} />
      
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <AudioProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AudioProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
