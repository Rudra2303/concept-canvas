"use client";

import { useState } from "react";
import { Search, Sparkles, BookOpen, Layers, CheckCircle2, ArrowRight } from "lucide-react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [canvasData, setCanvasData] = useState<{
  topic: string;
  core_definition: string;
  real_world_analogy: string;
  steps: { title: string; description: string }[];
  key_takeaway: string;
} | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setCanvasData(null);

    // Simulate AI Generation delay for gorgeous UX
    setTimeout(() => {
      setCanvasData({
        topic: query,
        core_definition: `A comprehensive breakdown of ${query}, structured for instant clarity, deep retention, and practical real-world application.`,
        real_world_analogy: `Think of ${query} like a master control tower at a busy international airport, coordinating signals to ensure everything runs smoothly without crashing.`,
        steps: [
          {
            title: "Phase 1: Initialization",
            description: "The core components or nodes establish initial state parameters and prepare for execution."
          },
          {
            title: "Phase 2: Core Processing",
            description: "Data packets or logic flows move sequentially through validation checks and transformation rules."
          },
          {
            title: "Phase 3: Consensus & Output",
            description: "Final verification occurs across the system, securing the output state and returning results cleanly."
          }
        ],
        key_takeaway: `Mastering ${query} relies entirely on understanding how its foundational components communicate and transition through states.`
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <header className="border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-600 p-2 rounded-xl text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">
              ConceptCanvas
            </span>
          </div>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Meta AI Hackathon Edition
          </span>
        </div>
      </header>

      {/* Hero / Search Section */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Deconstruct complex topics into <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            visual micro-lessons instantly.
          </span>
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          Type any complex algorithm, scientific phenomenon, or framework, and let AI build your visual canvas.
        </p>

        <form onSubmit={handleGenerate} className="relative max-w-2xl mx-auto">
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-2xl focus-within:border-indigo-500 transition-all">
            <Search className="w-5 h-5 text-slate-400 ml-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., Raft Consensus Algorithm, Quantum Entanglement..."
              className="w-full bg-transparent px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition-all flex items-center space-x-2 shrink-0 disabled:opacity-50"
            >
              {loading ? (
                <span className="animate-pulse">Generating...</span>
              ) : (
                <>
                  <span>Canvasize</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Results Section */}
      {canvasData && (
        <div className="max-w-4xl mx-auto px-6 pb-24 animate-fade-in">
          <div className="space-y-6">
            {/* Core Definition & Analogy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-indigo-400 mb-3 font-semibold">
                  <BookOpen className="w-5 h-5" />
                  <h3>Core Definition</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">{canvasData.core_definition}</p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-purple-400 mb-3 font-semibold">
                  <Sparkles className="w-5 h-5" />
                  <h3>Real-World Analogy</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">{canvasData.real_world_analogy}</p>
              </div>
            </div>

            {/* Step-by-Step Breakdown */}
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-pink-400 mb-6 font-semibold">
                <Layers className="w-5 h-5" />
                <h3>Step-by-Step Breakdown</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {canvasData.steps.map((step, index) => (
                  <div key={index} className="bg-slate-950/60 border border-slate-800/50 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1 block">
                        Step {index + 1}
                      </span>
                      <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-r from-indigo-950/50 via-purple-950/50 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 flex items-start space-x-4">
              <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white mb-1">Key Takeaway</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{canvasData.key_takeaway}</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}