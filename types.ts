export interface Employee {
  id: string;
  fullName: string;
  tcIdentity: string;
  department: string;
  title: string;
  email: string;
  phone: string;
  status: 'Aktif' | 'İzinli' | 'Ayrıldı';
  hireDate: string;
  avatarUrl: string;
  salary: number;
}

export interface PayrollEntry {
  id: string;
  employeeId: string;
  employeeName: string;
  period: string;
  baseSalary: number;
  bonus: number;
  deductions: number;
  netPay: number;
  status: 'Ödendi' | 'Beklemede' | 'Taslak';
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  type: 'Yıllık İzin' | 'Hastalık' | 'Mazeret';
  startDate: string;
  endDate: string;
  days: number;
  status: 'Onaylandı' | 'Beklemede' | 'Reddedildi';
}

export interface Candidate {
  id: string;
  name: string;
  role: string;
  stage: 'Başvuru' | 'Mülakat' | 'Teklif' | 'İşe Alım';
  score: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}