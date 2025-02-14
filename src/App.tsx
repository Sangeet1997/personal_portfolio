import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Experience from "@/pages/Experience";
import ExperienceDetail from "@/pages/ExperienceDetail";
import Contact from "@/pages/Contact";
import Hobbies from "@/pages/Hobbies";
import HobbyDetail from "@/pages/HobbyDetail";
import Timeline from "@/pages/Timeline";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:id" component={ProjectDetail} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/experience" component={Experience} />
      <Route path="/experience/:id" component={ExperienceDetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/hobbies" component={Hobbies} />
      <Route path="/hobbies/:id" component={HobbyDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 pt-16">
          <Router />
        </main>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;