import React from 'react';

interface SectionTentangProps {
  judul: string;
  deskripsiUtama: string;
  children: React.ReactNode;
}

export const SectionTentang: React.FC<SectionTentangProps> = ({ judul, deskripsiUtama, children }) => {
  return (
    <div className="bg-pink-50 py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-6xl font-bold text-red-900 mb-8">{judul}</h1>
          <p className="text-xl text-slate-700 leading-relaxed max-w-6xl font-medium">
            {deskripsiUtama}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {children}
        </div>

      </div>
    </div>
  );
};