import React, { useState } from 'react';
import { Search, Plus, Filter, MoreHorizontal, Mail, Phone, MapPin } from 'lucide-react';
import { Employee } from '../types';

const CoreHR: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock Data
  const employees: Employee[] = [
    {
      id: '1', fullName: 'Ayşe Kaya', title: 'İK Uzmanı', department: 'İnsan Kaynakları',
      status: 'Aktif', email: 'ayse.kaya@sirket.com', phone: '0555 111 22 33',
      tcIdentity: '12345678901', hireDate: '2022-03-15', avatarUrl: 'https://picsum.photos/200/200?random=1', salary: 35000
    },
    {
      id: '2', fullName: 'Mehmet Demir', title: 'Yazılım Mühendisi', department: 'IT',
      status: 'Aktif', email: 'mehmet.demir@sirket.com', phone: '0555 222 33 44',
      tcIdentity: '23456789012', hireDate: '2021-08-01', avatarUrl: 'https://picsum.photos/200/200?random=2', salary: 65000
    },
    {
      id: '3', fullName: 'Zeynep Çelik', title: 'Pazarlama Müdürü', department: 'Pazarlama',
      status: 'İzinli', email: 'zeynep.celik@sirket.com', phone: '0555 333 44 55',
      tcIdentity: '34567890123', hireDate: '2020-01-10', avatarUrl: 'https://picsum.photos/200/200?random=3', salary: 75000
    },
    {
      id: '4', fullName: 'Can Yılmaz', title: 'Satış Temsilcisi', department: 'Satış',
      status: 'Aktif', email: 'can.yilmaz@sirket.com', phone: '0555 444 55 66',
      tcIdentity: '45678901234', hireDate: '2023-05-20', avatarUrl: 'https://picsum.photos/200/200?random=4', salary: 28000
    },
  ];

  const filteredEmployees = employees.filter(emp => 
    emp.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Çalışan Yönetimi</h1>
          <p className="text-slate-500 text-sm">Toplam {employees.length} çalışan kaydı görüntüleniyor.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
          <Plus size={18} />
          <span>Yeni Personel Ekle</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-50/50">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="İsim veya departman ara..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 text-sm font-medium w-full sm:w-auto justify-center">
            <Filter size={16} />
            <span>Filtrele</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
                <th className="px-6 py-4">Çalışan</th>
                <th className="px-6 py-4">Departman & Unvan</th>
                <th className="px-6 py-4">İletişim</th>
                <th className="px-6 py-4">Durum</th>
                <th className="px-6 py-4">İşe Giriş</th>
                <th className="px-6 py-4 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEmployees.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={emp.avatarUrl} alt={emp.fullName} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                      <div>
                        <div className="font-medium text-slate-800">{emp.fullName}</div>
                        <div className="text-xs text-slate-400">{emp.tcIdentity}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-700 font-medium">{emp.title}</div>
                    <div className="text-xs text-slate-500">{emp.department}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Mail size={12} /> {emp.email}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Phone size={12} /> {emp.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      emp.status === 'Aktif' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : emp.status === 'İzinli' 
                          ? 'bg-amber-100 text-amber-800' 
                          : 'bg-slate-100 text-slate-800'
                    }`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {new Date(emp.hireDate).toLocaleDateString('tr-TR')}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500">
          <span>Gösterilen: 1 - {filteredEmployees.length} toplam {employees.length}</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50" disabled>Önceki</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50">Sonraki</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreHR;