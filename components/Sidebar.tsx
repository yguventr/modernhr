import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Users, 
  LayoutDashboard, 
  Banknote, 
  CalendarClock, 
  TrendingUp, 
  FileBarChart,
  Settings,
  Home
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { to: '/', icon: <LayoutDashboard size={20} />, label: 'Panel' },
    { to: '/core-hr', icon: <Users size={20} />, label: 'Çalışan Yönetimi' },
    { to: '/payroll', icon: <Banknote size={20} />, label: 'Bordro & Finans' },
    { to: '/time', icon: <CalendarClock size={20} />, label: 'Zaman Yönetimi' },
    { to: '/talent', icon: <TrendingUp size={20} />, label: 'Yetenek Yönetimi' },
    { to: '/reports', icon: <FileBarChart size={20} />, label: 'Raporlar' },
  ];

  return (
    <div className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen fixed left-0 top-0 z-50">
      <div className="p-6 flex items-center gap-3 border-b border-slate-700">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
          N
        </div>
        <span className="text-xl font-bold text-white tracking-tight">HR Nexus</span>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            {item.icon}
            <span className="font-medium text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <NavLink 
          to="/" 
          className="flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors w-full mb-1"
        >
          <Home size={20} />
          <span>Ana Sayfa</span>
        </NavLink>
        <button className="flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors w-full">
          <Settings size={20} />
          <span>Ayarlar</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;