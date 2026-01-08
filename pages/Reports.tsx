import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Reports: React.FC = () => {
  const retentionData = [
    { year: '2019', rate: 85 },
    { year: '2020', rate: 88 },
    { year: '2021', rate: 82 },
    { year: '2022', rate: 90 },
    { year: '2023', rate: 92 },
    { year: '2024', rate: 94 },
  ];

  const demographicData = [
    { name: 'Yazılım', male: 20, female: 15 },
    { name: 'Pazarlama', male: 10, female: 18 },
    { name: 'İK', male: 5, female: 12 },
    { name: 'Satış', male: 25, female: 10 },
    { name: 'Finans', male: 8, female: 8 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Raporlar ve Analitik</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Retention Chart */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">Çalışan Bağlılık Oranı (%)</h3>
            <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={retentionData}>
                        <defs>
                            <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="year" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e2e8f0" />
                        <Tooltip contentStyle={{borderRadius: '8px', border: 'none'}} />
                        <Area type="monotone" dataKey="rate" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRate)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Demographics Chart */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">Departman Bazlı Cinsiyet Dağılımı</h3>
            <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={demographicData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', border: 'none'}} />
                        <Bar dataKey="male" name="Erkek" fill="#94a3b8" stackId="a" radius={[0,0,4,4]} barSize={40} />
                        <Bar dataKey="female" name="Kadın" fill="#f472b6" stackId="a" radius={[4,4,0,0]} barSize={40} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['İşe Alım Süresi (Ort. 24 Gün)', 'Kişi Başı Eğitim Saati (42s/Yıl)', 'Memnuniyet Skoru (4.2/5)'].map((metric, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center hover:border-blue-300 transition-colors">
                  <h4 className="text-slate-500 text-sm font-medium uppercase tracking-wide mb-2">KPI Metrik</h4>
                  <p className="text-lg font-bold text-slate-800">{metric}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default Reports;