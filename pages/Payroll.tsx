import React from 'react';
import { Download, FileText, PieChart as PieIcon } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { PayrollEntry } from '../types';

const Payroll: React.FC = () => {
  const payrollData: PayrollEntry[] = [
    { id: '1', employeeId: '1', employeeName: 'Ayşe Kaya', period: 'Haziran 2024', baseSalary: 35000, bonus: 2000, deductions: 5000, netPay: 32000, status: 'Ödendi' },
    { id: '2', employeeId: '2', employeeName: 'Mehmet Demir', period: 'Haziran 2024', baseSalary: 65000, bonus: 0, deductions: 12000, netPay: 53000, status: 'Ödendi' },
    { id: '3', employeeId: '3', employeeName: 'Zeynep Çelik', period: 'Haziran 2024', baseSalary: 75000, bonus: 5000, deductions: 15000, netPay: 65000, status: 'Beklemede' },
    { id: '4', employeeId: '4', employeeName: 'Can Yılmaz', period: 'Haziran 2024', baseSalary: 28000, bonus: 8000, deductions: 4000, netPay: 32000, status: 'Taslak' },
  ];

  const costDistribution = [
    { name: 'Net Maaş', value: 182000, color: '#3b82f6' },
    { name: 'SGK & Vergi', value: 95000, color: '#f59e0b' },
    { name: 'Yan Haklar', value: 45000, color: '#10b981' },
    { name: 'Diğer', value: 12000, color: '#64748b' },
  ];

  const formatCurrency = (val: number) => new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(val);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Bordro & Finansal Yönetim</h1>
        <button className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
          <Download size={18} />
          <span>Toplu Banka Listesi İndir</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Summary Chart */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <PieIcon size={20} className="text-slate-400" />
            Maliyet Dağılımı (Haziran)
          </h3>
          <div className="flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={costDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {costDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip formatter={(value: number) => formatCurrency(value)} />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-slate-50 rounded-lg">
            <div className="flex justify-between items-center text-sm font-medium">
              <span className="text-slate-600">Toplam Maliyet:</span>
              <span className="text-slate-900 text-lg">₺334.000,00</span>
            </div>
          </div>
        </div>

        {/* Payroll Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50/50">
            <h3 className="font-semibold text-slate-800">Maaş Bordroları - Haziran 2024</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white border-b border-slate-100 text-slate-500 text-xs uppercase font-semibold">
                  <th className="px-6 py-4">Personel</th>
                  <th className="px-6 py-4">Dönem</th>
                  <th className="px-6 py-4 text-right">Brüt Maaş</th>
                  <th className="px-6 py-4 text-right">Kesintiler</th>
                  <th className="px-6 py-4 text-right">Net Ödenen</th>
                  <th className="px-6 py-4">Durum</th>
                  <th className="px-6 py-4 text-center">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {payrollData.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-800">{row.employeeName}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.period}</td>
                    <td className="px-6 py-4 text-right text-sm text-slate-600">{formatCurrency(row.baseSalary)}</td>
                    <td className="px-6 py-4 text-right text-sm text-rose-500">-{formatCurrency(row.deductions)}</td>
                    <td className="px-6 py-4 text-right font-bold text-emerald-600">{formatCurrency(row.netPay)}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        row.status === 'Ödendi' 
                          ? 'bg-emerald-100 text-emerald-800'
                          : row.status === 'Beklemede'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-slate-100 text-slate-800'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="p-2 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-lg transition-colors" title="Bordro Görüntüle">
                        <FileText size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll;