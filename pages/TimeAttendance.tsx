import React from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

const TimeAttendance: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Zaman ve İzin Yönetimi</h1>
        <div className="flex gap-3">
            <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 text-sm font-medium">
                Puantaj Raporu
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                İzin Talebi Oluştur
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <Calendar size={24} />
            </div>
            <div>
                <p className="text-sm text-slate-500">Kalan Yıllık İzin</p>
                <h3 className="text-xl font-bold text-slate-800">14 Gün</h3>
            </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
                <Clock size={24} />
            </div>
            <div>
                <p className="text-sm text-slate-500">Bu Ay Fazla Mesai</p>
                <h3 className="text-xl font-bold text-slate-800">8.5 Saat</h3>
            </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
                <CheckCircle2 size={24} />
            </div>
            <div>
                <p className="text-sm text-slate-500">Devamlılık Oranı</p>
                <h3 className="text-xl font-bold text-slate-800">%98</h3>
            </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="p-5 border-b border-slate-100">
            <h3 className="font-semibold text-slate-800">Son Hareketler ve İzin Talepleri</h3>
        </div>
        <div className="divide-y divide-slate-100">
            {[
                { type: 'Talep', name: 'Ahmet Yılmaz', desc: 'Yıllık İzin (5 Gün)', date: '21-25 Haz', status: 'Onay Bekliyor', statusColor: 'bg-amber-100 text-amber-800' },
                { type: 'Talep', name: 'Elif Demir', desc: 'Hastalık İzni (1 Gün)', date: '18 Haz', status: 'Onaylandı', statusColor: 'bg-emerald-100 text-emerald-800' },
                { type: 'Uyarı', name: 'Sistem', desc: 'Mehmet K. geç giriş yaptı (45dk)', date: 'Bugün 09:45', status: 'İncelenmeli', statusColor: 'bg-rose-100 text-rose-800' },
            ].map((item, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${item.type === 'Uyarı' ? 'bg-rose-100 text-rose-600' : 'bg-blue-100 text-blue-600'}`}>
                            {item.name.charAt(0)}
                        </div>
                        <div>
                            <h4 className="font-medium text-slate-800">{item.name}</h4>
                            <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-sm text-slate-500">{item.date}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.statusColor}`}>
                            {item.status}
                        </span>
                        <button className="text-sm text-blue-600 hover:underline">Detay</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TimeAttendance;