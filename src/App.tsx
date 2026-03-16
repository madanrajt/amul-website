import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, CheckCircle2, ChevronDown, ChevronUp, LayoutTemplate, Layers, Home, FileText, ShoppingCart, TrendingUp, Zap, Rocket } from 'lucide-react';
import { phases, prompts, Prompt } from './data';

const phaseIcons: Record<string, React.ReactNode> = {
  "Foundation": <LayoutTemplate className="w-4 h-4" />,
  "Design System": <Layers className="w-4 h-4" />,
  "Homepage": <Home className="w-4 h-4" />,
  "Inner Pages": <FileText className="w-4 h-4" />,
  "Store & Cart": <ShoppingCart className="w-4 h-4" />,
  "CRO": <TrendingUp className="w-4 h-4" />,
  "SEO & Performance": <Zap className="w-4 h-4" />,
  "QA & Launch": <Rocket className="w-4 h-4" />
};

export default function App() {
  const [activePhase, setActivePhase] = useState<string>(phases[0]);

  const filteredPrompts = prompts.filter(p => p.phase === activePhase);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">Amul India Build Plan</h1>
              <p className="text-sm text-slate-500 font-medium">32-Prompt Architecture for Google AI Studio</p>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar pb-px">
            <div className="flex space-x-1 border-b border-slate-200 min-w-full">
              {phases.map((phase) => (
                <button
                  key={phase}
                  onClick={() => setActivePhase(phase)}
                  className={`
                    flex items-center space-x-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors
                    ${activePhase === phase 
                      ? 'border-blue-600 text-blue-700 bg-blue-50/50' 
                      : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'}
                  `}
                >
                  {phaseIcons[phase]}
                  <span>{phase}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 flex items-center">
            {phaseIcons[activePhase]}
            <span className="ml-2">{activePhase} Phase</span>
          </h2>
          <p className="text-slate-500 mt-1">
            Prompts {filteredPrompts[0]?.id} to {filteredPrompts[filteredPrompts.length - 1]?.id} of 32
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function PromptCard({ prompt }: { prompt: Prompt }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.promptText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`
        bg-white rounded-xl border transition-all duration-200 overflow-hidden
        ${isExpanded ? 'border-blue-300 shadow-md ring-1 ring-blue-100' : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'}
      `}
    >
      <div 
        className="p-5 cursor-pointer flex flex-col h-full"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
              {prompt.id}
            </span>
            <h3 className="font-semibold text-slate-900 leading-tight">{prompt.title}</h3>
          </div>
          <button 
            className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100 transition-colors"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        
        <p className="text-sm text-slate-600 mb-4 flex-grow">
          {prompt.description}
        </p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-2 mb-4 p-4 bg-slate-50 rounded-lg border border-slate-100 relative group">
                <p className="text-sm font-mono text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {prompt.promptText}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={handleCopy}
            className={`
              flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors
              ${isCopied 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200'}
            `}
          >
            {isCopied ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Prompt</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
