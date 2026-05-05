import React, { useState } from "react"; 
import { ChevronDown } from "lucide-react"; 
 
interface CollapseProps { 
    title: string; 
    description: string; 
} 
 
export const Collapse: React.FC<CollapseProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border-2 border-pink-100 shadow-lg shadow-pink-100 border-r-8 border-r-red-900 overflow-hidden transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-full px-6 py-8 flex items-center gap-6 text-left"
      >
        <div className="p-3 bg-gray-100 rounded-lg">
          <ChevronDown
            size={24}
            className={`text-gray-500 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        <span className="text-xl font-bold text-slate-700 leading-tight">
          {title}
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-8 pt-0 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="h-0.5 bg-gray-100 mb-4 w-full" />
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};