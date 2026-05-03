import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

const QUESTIONS = [
  {
    question: "What's your weekend vibe?",
    options: [
      { text: "Late night gaming", trait: "classic" },
      { text: "Hitting the gym", trait: "zero" },
      { text: "Brunch and thrifting", trait: "straw" },
      { text: "Road trip anywhere", trait: "cherry" },
    ]
  },
  {
    question: "Pick a flavor profile:",
    options: [
      { text: "Bold & Unapologetic", trait: "classic" },
      { text: "Smooth & Sharp", trait: "zero" },
      { text: "Sweet & Creamy", trait: "straw" },
      { text: "Fruity & Rich", trait: "cherry" },
    ]
  },
  {
    question: "Your go-to aesthetic?",
    options: [
      { text: "Vintage Americana", trait: "classic" },
      { text: "Sleek Minimalism", trait: "zero" },
      { text: "Soft Pastel Core", trait: "straw" },
      { text: "Dark & Moody", trait: "cherry" },
    ]
  }
];

const RESULTS: Record<string, any> = {
  classic: { title: "The Purist", desc: "You respect the classics. You're bold, original, and don't need a remix to stand out.", color: "bg-drp-maroon", pepper: "Dr Pepper Classic" },
  zero: { title: "The Optimizer", desc: "All the flavor, none of the sugar. You want the best of both worlds.", color: "bg-black", pepper: "Dr Pepper Zero Sugar" },
  straw: { title: "The Aesthetic", desc: "Sweet, creamy, and always on point. You bring a softer, fun energy to the group.", color: "bg-[#e5a0aa]", pepper: "Strawberries & Cream" },
  cherry: { title: "The Wildcard", desc: "A little extra kick. You like to take what's good and push it to the next level.", color: "bg-drp-red", pepper: "Cherry Dr Pepper" },
};

export function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (trait: string) => {
    const newAnswers = [...answers, trait];
    setAnswers(newAnswers);
    
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    if (answers.length === 0) return RESULTS.classic;
    // Simple mode calculation
    const counts = answers.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    const highest = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    return RESULTS[highest];
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section id="quiz" className="py-32 liquid-gradient-bright relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-drp-cream/30 bg-drp-black/20 text-drp-cream mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-display uppercase tracking-widest">Interactive</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase text-drp-cream">
            What Kind of <br/> Pepper Are You?
          </h2>
        </div>

        <div className="bg-drp-black rounded-[40px] p-8 md:p-16 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-drp-maroon/20 to-transparent"></div>
          
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div 
                key={`q-${currentQ}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="relative z-10"
              >
                <div className="text-drp-red font-display tracking-widest mb-2 uppercase text-sm">
                  Question {currentQ + 1} / {QUESTIONS.length}
                </div>
                <h3 className="text-2xl md:text-4xl font-display uppercase mb-10">
                  {QUESTIONS[currentQ].question}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {QUESTIONS[currentQ].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(opt.trait)}
                      className="group p-6 rounded-2xl border-2 border-drp-cream/10 bg-drp-cream/5 hover:bg-drp-red hover:border-drp-red transition-all flex items-center justify-between text-left"
                    >
                      <span className="font-medium text-lg text-drp-cream group-hover:text-white transition-colors">{opt.text}</span>
                      <ArrowRight className="w-5 h-5 text-drp-cream/30 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 text-center"
              >
                <h3 className="text-drp-cream/60 uppercase tracking-widest text-sm mb-4">Your Result:</h3>
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-drp-red mb-4">
                  {getResult().title}
                </h2>
                <div className="inline-block px-6 py-2 rounded-full border border-drp-cream/20 mb-6 bg-drp-cream/5">
                  <span className="font-display tracking-wider">{getResult().pepper}</span>
                </div>
                <p className="text-lg text-drp-cream/80 max-w-md mx-auto mb-10">
                  {getResult().desc}
                </p>
                
                <div className="flex justify-center gap-4">
                  <button className="bg-drp-red text-drp-cream px-8 py-4 rounded-full font-display uppercase tracking-widest hover:bg-drp-maroon transition-colors hover:scale-105">
                    Share Result
                  </button>
                  <button 
                    onClick={reset}
                    className="border border-drp-cream/30 text-drp-cream px-8 py-4 rounded-full font-display uppercase tracking-widest hover:bg-drp-cream/10 transition-colors"
                  >
                    Retake
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
