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
      <Route path="/personal_portfolio" component={Home} />
      <Route path="/personal_portfolio/projects" component={Projects} />
      <Route path="/personal_portfolio/projects/:id" component={ProjectDetail} />
      <Route path="/personal_portfolio/timeline" component={Timeline} />
      <Route path="/personal_portfolio/experience" component={Experience} />
      <Route path="/personal_portfolio/experience/:id" component={ExperienceDetail} />
      <Route path="/personal_portfolio/contact" component={Contact} />
      <Route path="/personal_portfolio/hobbies" component={Hobbies} />
      <Route path="/personal_portfolio/hobbies/:id" component={HobbyDetail} />
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