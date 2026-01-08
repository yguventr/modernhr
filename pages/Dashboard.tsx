import React from 'react';
import { Users, UserCheck, Briefcase, CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Dashboard: React.FC = () => {
  // Mock Data
  const salaryData = [
    { name: 'Oca', maas: 420000, mesai: 24000 },
    { name: 'Şub', maas: 432000, mesai: 18000 },
    { name: 'Mar', maas: 432000, mesai: 32000 },
    { name: 'Nis', maas: 445000, mesai: 21000 },
    { name: 'May', maas: 445000, mesai: 15000 },
    { name: 'Haz', maas: 460000, mesai: 28000 },
  ];

  const StatCard = ({ title, value, sub, icon: Icon, color }: any) => (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon size={20} className="text-white" />
        </div>
      </div>
      <div className="flex items-center text-xs">
        {sub.trend === 'up' ? (
          <ArrowUpRight size={14} className="text-emerald-500 mr-1" />
        ) : (
          <ArrowDownRight size={14} className="text-rose-500 mr-1" />
        )}
        <span className={sub.trend === 'up' ? 'text-emerald-600 font-medium' : 'text-rose-600 font-medium'}>
          {sub.val}
        </span>
        <span className="text-slate-400 ml-1">geçen aya göre</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Yönetim Paneli</h1>
          <p className="text-slate-500">Hoşgeldiniz, genel durum özeti aşağıdadır.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          Rapor İndir
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Toplam Çalışan" 
          value="142" 
          sub={{ val: "%12 Artış", trend: 'up' }} 
          icon={Users} 
          color="bg-blue-500" 
        />
        <StatCard 
          title="İzinli Personel" 
          value="8" 
          sub={{ val: "%2 Azalış", trend: 'down' }} 
          icon={UserCheck} 
          color="bg-amber-500" 
        />
        <StatCard 
          title="Açık Pozisyonlar" 
          value="12" 
          sub={{ val: "3 Yeni İlan", trend: 'up' }} 
          icon={Briefcase} 
          color="bg-purple-500" 
        />
        <StatCard 
          title="Toplam Maaş Ödemesi" 
          value="₺460K" 
          sub={{ val: "%5 Artış", trend: 'up' }} 
          icon={CreditCard} 
          color="bg-emerald-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Salary Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">Maaş ve Mesai Giderleri (6 Aylık)</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salaryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: '#f1f5f9' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="maas" name="Maaş" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
                <Bar dataKey="mesai" name="Fazla Mesai" fill="#818cf8" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions / Notifications */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Bekleyen İşler</h3>
          <div className="space-y-4">
            {[
              { title: 'Yıllık İzin Talebi', desc: 'Ahmet Yılmaz - 5 Gün', time: '2 saat önce', type: 'urgent' },
              { title: 'Bordro Onayı', desc: 'Haziran 2024 Dönemi', time: '5 saat önce', type: 'normal' },
              { title: 'Mülakat Değerlendirmesi', desc: 'Kıdemli Frontend Geliştirici', time: '1 gün önce', type: 'normal' },
              { title: 'Zimmet İadesi', desc: 'Macbook Pro - Eski Personel', time: '2 gün önce', type: 'normal' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                <div className={`w-2 h-2 mt-2 rounded-full ${item.type === 'urgent' ? 'bg-rose-500' : 'bg-blue-500'}`} />
                <div>
                  <h4 className="text-sm font-medium text-slate-800">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                  <span className="text-[10px] text-slate-400 mt-1 block">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors">
            Tümünü Gör
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;