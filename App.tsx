import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import CoreHR from './pages/CoreHR';
import Payroll from './pages/Payroll';
import TimeAttendance from './pages/TimeAttendance';
import Talent from './pages/Talent';
import Reports from './pages/Reports';
import GeminiAssistant from './components/GeminiAssistant';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#f3f4f6]">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/core-hr" element={<CoreHR />} />
                <Route path="/payroll" element={<Payroll />} />
                <Route path="/time" element={<TimeAttendance />} />
                <Route path="/talent" element={<Talent />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
        </main>
        <GeminiAssistant />
      </div>
    </Router>
  );
};

export default App;