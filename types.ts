
export interface Program {
  id: string;
  title: string;
  category: 'Konservasi' | 'Advokasi' | 'Pemberdayaan';
  summary: string;
  imageUrl: string;
  details: {
    description: string;
    goals: string[];
    timeline: { event: string; date: string }[];
  };
}

export interface NewsArticle {
  id: string;
  title:string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  imageUrl: string;
  summary: string;
  content: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface FinancialReport {
  year: number;
  url: string;
}
