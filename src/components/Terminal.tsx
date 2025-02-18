import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Groq from 'groq-sdk';
import ReactMarkdown from 'react-markdown';
import systemPrompt from './systemPrompt';

const sampleQueries = [
  "Who is Sangeet Saha?",
  "Tell me about Sangeet's experience.",
  "What projects has Sangeet worked on?",
  "How can I contact Sangeet?",
];

const client = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

interface HistoryEntry {
  type: 'input' | 'output';
  content: string;
  displayedContent?: string;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<HistoryEntry>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const outputContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    if (outputContainerRef.current && terminalEndRef.current) {
      const scrollContainer = outputContainerRef.current;
      const scrollHeight = scrollContainer.scrollHeight;
      scrollContainer.scrollTop = scrollHeight;
    }
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [history]);
  
  useEffect(() => {
    if (isTyping && history.length > 0) {
      const lastEntry = history[history.length - 1];
      if (lastEntry.type === 'output') {
        const words = lastEntry.content.split(' ');
        const displayedWords = lastEntry.displayedContent ? lastEntry.displayedContent.split(' ') : [];
        
        if (displayedWords.length < words.length) {
          const timer = setTimeout(() => {
            const newDisplayedContent = words.slice(0, displayedWords.length + 1).join(' ');
            setHistory(prev => 
              prev.map((entry, idx) => 
                idx === prev.length - 1 
                  ? { ...entry, displayedContent: newDisplayedContent }
                  : entry
              )
            );
          }, 50);
          
          return () => clearTimeout(timer);
        } else {
          setIsTyping(false);
        }
      }
    }
  }, [history, isTyping]);
  
  const handleCommand = async (command: string) => {
    setHistory(prev => [...prev, { type: 'input', content: command }]);
    setInput("");
    
    const userPrompt = `Answer only if the question below is within the system prompt context. Otherwise, ask for a different question.\n\n${command}`;
    
    try {
      const response = await client.chat.completions.create({
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        model: 'gemma2-9b-it',
      });
      
      const responseContent = response.choices[0].message.content?.toString() || 
        "Oops looks like something broke :(. I'll probably fix it by the next time you are here";
      
      setHistory(prev => [...prev, { 
        type: 'output', 
        content: responseContent,
        displayedContent: '' 
      }]);
      
      setIsTyping(true);
    } catch (error) {
      setHistory(prev => [...prev, { 
        type: 'output', 
        content: "Error: Could not get a response. Please try again.",
        displayedContent: "Error: Could not get a response. Please try again." 
      }]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isTyping) {
      handleCommand(input.trim());
    }
  };
  
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
                onClick={() => !isTyping && handleCommand(query)}
                disabled={isTyping}
              >
                {query}
              </Button>
            ))}
          </div>
        </div>
        <div className="bg-card border rounded-lg p-4 font-mono text-sm">
          <div 
            ref={outputContainerRef}
            className="mb-4 max-h-[400px] overflow-y-auto"
          >
            {history.map((entry, index) => (
              <div key={index} className="mb-2">
                {entry.type === 'input' ? (
                  <div className="flex gap-2">
                    <span className="text-primary">❯</span>
                    <span>{entry.content}</span>
                  </div>
                ) : (
                  <div className="pl-4 text-muted-foreground">
                    <ReactMarkdown>
                      {entry.displayedContent || ''}
                    </ReactMarkdown>
                    {isTyping && index === history.length - 1 && (
                      <span className="animate-pulse">▌</span>
                    )}
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
              disabled={isTyping}
            />
          </form>
        </div>
      </div>
    </motion.div>
  );
}