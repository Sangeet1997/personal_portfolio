import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sampleQueries = [
  "Who is Sangeet Saha?",
  "Tell me about Sangeet's experience.",
  "What projects has Sangeet worked on?",
  "How can I contact Sangeet?",
];

// This will be replaced with actual LLM responses later
const mockResponses: Record<string, string> = {
  "Who is Sangeet Saha?": "Sangeet Saha is a software developer with expertise in modern web technologies and AI.",
  "Tell me about Sangeet's experience.": "Sangeet has experience in frontend development, working with React, TypeScript, and modern web frameworks.",
  "What projects has Sangeet worked on?": "Sangeet has worked on various projects including web applications, AI implementations, and cloud solutions.",
  "How can I contact Sangeet?": "You can reach out to Sangeet through the contact form on the Contact page or via social media links.",
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output', content: string }>>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const handleCommand = (command: string) => {
    setHistory(prev => [...prev, { type: 'input', content: command }]);
    
    // Mock response system (to be replaced with LLM)
    const response = mockResponses[command] || "I'll implement an LLM to provide more detailed responses soon!";
    setHistory(prev => [...prev, { type: 'output', content: response }]);
    
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim());
    }
  };

  // useEffect(() => {
  //   terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [history]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-16 mb-32"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <TerminalIcon className="w-5 h-5" />
          <h2 className="text-xl font-semibold">Interactive Terminal</h2>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Try these example queries:</p>
          <div className="flex flex-wrap gap-2">
            {sampleQueries.map((query) => (
              <Button
                key={query}
                variant="outline"
                size="sm"
                onClick={() => handleCommand(query)}
              >
                {query}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-card border rounded-lg p-4 font-mono text-sm">
          <div className="mb-4 max-h-[400px] overflow-y-auto">
            {history.map((entry, index) => (
              <div key={index} className="mb-2">
                {entry.type === 'input' ? (
                  <div className="flex gap-2">
                    <span className="text-primary">❯</span>
                    <span>{entry.content}</span>
                  </div>
                ) : (
                  <div className="pl-4 text-muted-foreground">
                    {entry.content}
                  </div>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <span className="text-primary">❯</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none"
              placeholder="Type your question here..."
            />
          </form>
        </div>
      </div>
    </motion.div>
  );
}
