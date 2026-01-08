import React from 'react';
import { Candidate } from '../types';
import { MoreVertical, MessageSquare } from 'lucide-react';

const Talent: React.FC = () => {
  const candidates: Candidate[] = [
    { id: '1', name: 'Burak Yılmaz', role: 'Frontend Dev', stage: 'Başvuru', score: 85 },
    { id: '2', name: 'Selin Demir', role: 'UX Designer', stage: 'Mülakat', score: 92 },
    { id: '3', name: 'Ahmet Vural', role: 'Backend Dev', stage: 'Teklif', score: 88 },
    { id: '4', name: 'Elif Şahin', role: 'Product Manager', stage: 'Mülakat', score: 75 },
    { id: '5', name: 'Kemal Sunal', role: 'DevOps', stage: 'Başvuru', score: 60 },
  ];

  const stages = ['Başvuru', 'Mülakat', 'Teklif', 'İşe Alım'];

  return (
    <div className="space-y-6 h-[calc(100vh-6rem)] flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Yetenek Yönetimi (ATS)</h1>
          <p className="text-slate-500">Aday takip ve işe alım süreçleri.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Yeni İlan Oluştur
        </button>
      </div>

      <div className="flex-1 overflow-x-auto">
        <div className="flex gap-6 h-full min-w-[1000px]">
          {stages.map((stage) => (
            <div key={stage} className="flex-1 flex flex-col bg-slate-100 rounded-xl max-w-xs">
              <div className="p-4 border-b border-slate-200/50 flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">{stage}</h3>
                <span className="bg-white px-2 py-0.5 rounded text-xs font-bold text-slate-500 shadow-sm">
                  {candidates.filter(c => c.stage === stage).length}
                </span>
              </div>
              
              <div className="p-4 space-y-3 overflow-y-auto flex-1">
                {candidates.filter(c => c.stage === stage).map(candidate => (
                  <div key={candidate.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group border border-slate-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-slate-800">{candidate.name}</h4>
                      <button className="text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mb-3">{candidate.role}</p>
                    
                    <div className="flex items-center justify-between mt-4 border-t border-slate-50 pt-3">
                      <div className="flex items-center gap-1">
                        <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                          candidate.score >= 80 ? 'bg-emerald-100 text-emerald-700' :
                          candidate.score >= 60 ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'
                        }`}>
                          {candidate.score} Puan
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-1.5 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded transition-colors">
                          <MessageSquare size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <button className="w-full py-2 text-sm text-slate-400 border border-dashed border-slate-300 rounded-lg hover:bg-slate-200 hover:text-slate-600 transition-colors">
                  + Aday Ekle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Talent;