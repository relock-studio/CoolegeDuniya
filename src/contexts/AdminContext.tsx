import React, { createContext, useContext, useState, useEffect } from 'react';
import { College } from '../types/college';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor';
  avatar?: string;
}

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  image: string;
  status: 'published' | 'draft';
}

interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: 'published' | 'draft';
  createdAt: string;
  updatedAt: string;
}

interface SiteSettings {
  siteName: string;
  siteDescription: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialMedia: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

interface AdminContextType {
  adminUser: AdminUser | null;
  colleges: College[];
  newsArticles: NewsArticle[];
  pages: Page[];
  siteSettings: SiteSettings;
  adminLogin: (email: string, password: string) => Promise<boolean>;
  adminLogout: () => void;
  addCollege: (college: Omit<College, 'id'>) => void;
  updateCollege: (id: string, college: Partial<College>) => void;
  deleteCollege: (id: string) => void;
  addNewsArticle: (article: Omit<NewsArticle, 'id'>) => void;
  updateNewsArticle: (id: string, article: Partial<NewsArticle>) => void;
  deleteNewsArticle: (id: string) => void;
  addPage: (page: Omit<Page, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updatePage: (id: string, page: Partial<Page>) => void;
  deletePage: (id: string) => void;
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;
  isLoading: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [colleges, setColleges] = useState<College[]>([]);
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [pages, setPages] = useState<Page[]>([]);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>({
    siteName: 'IndeduHub',
    siteDescription: 'Find Best Colleges in Bangalore & Delhi',
    logo: '/logo.png',
    primaryColor: '#f97316',
    secondaryColor: '#3b82f6',
    contactEmail: 'info@indeduhub.com',
    contactPhone: '1800-572-9877',
    address: 'Bangalore & Delhi, India',
    socialMedia: {
      facebook: 'https://facebook.com/indeduhub',
      twitter: 'https://twitter.com/indeduhub',
      instagram: 'https://instagram.com/indeduhub',
      linkedin: 'https://linkedin.com/company/indeduhub'
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load admin data from localStorage
    const storedAdmin = localStorage.getItem('indeduhub_admin');
    if (storedAdmin) {
      setAdminUser(JSON.parse(storedAdmin));
    }

    const storedColleges = localStorage.getItem('indeduhub_admin_colleges');
    if (storedColleges) {
      setColleges(JSON.parse(storedColleges));
    }

    const storedNews = localStorage.getItem('indeduhub_admin_news');
    if (storedNews) {
      setNewsArticles(JSON.parse(storedNews));
    }

    const storedPages = localStorage.getItem('indeduhub_admin_pages');
    if (storedPages) {
      setPages(JSON.parse(storedPages));
    }

    const storedSettings = localStorage.getItem('indeduhub_admin_settings');
    if (storedSettings) {
      setSiteSettings(JSON.parse(storedSettings));
    }
  }, []);

  const adminLogin = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Demo admin credentials
    if (email === 'admin@indeduhub.com' && password === 'admin123') {
      const adminData = {
        id: '1',
        name: 'Admin User',
        email,
        role: 'admin' as const,
        avatar: `https://ui-avatars.com/api/?name=Admin+User&background=f97316&color=fff`
      };
      
      setAdminUser(adminData);
      localStorage.setItem('indeduhub_admin', JSON.stringify(adminData));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const adminLogout = () => {
    setAdminUser(null);
    localStorage.removeItem('indeduhub_admin');
  };

  const addCollege = (college: Omit<College, 'id'>) => {
    const newCollege = {
      ...college,
      id: Date.now().toString()
    };
    const updatedColleges = [...colleges, newCollege];
    setColleges(updatedColleges);
    localStorage.setItem('indeduhub_admin_colleges', JSON.stringify(updatedColleges));
  };

  const updateCollege = (id: string, college: Partial<College>) => {
    const updatedColleges = colleges.map(c => c.id === id ? { ...c, ...college } : c);
    setColleges(updatedColleges);
    localStorage.setItem('indeduhub_admin_colleges', JSON.stringify(updatedColleges));
  };

  const deleteCollege = (id: string) => {
    const updatedColleges = colleges.filter(c => c.id !== id);
    setColleges(updatedColleges);
    localStorage.setItem('indeduhub_admin_colleges', JSON.stringify(updatedColleges));
  };

  const addNewsArticle = (article: Omit<NewsArticle, 'id'>) => {
    const newArticle = {
      ...article,
      id: Date.now().toString()
    };
    const updatedNews = [...newsArticles, newArticle];
    setNewsArticles(updatedNews);
    localStorage.setItem('indeduhub_admin_news', JSON.stringify(updatedNews));
  };

  const updateNewsArticle = (id: string, article: Partial<NewsArticle>) => {
    const updatedNews = newsArticles.map(a => a.id === id ? { ...a, ...article } : a);
    setNewsArticles(updatedNews);
    localStorage.setItem('indeduhub_admin_news', JSON.stringify(updatedNews));
  };

  const deleteNewsArticle = (id: string) => {
    const updatedNews = newsArticles.filter(a => a.id !== id);
    setNewsArticles(updatedNews);
    localStorage.setItem('indeduhub_admin_news', JSON.stringify(updatedNews));
  };

  const addPage = (page: Omit<Page, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newPage = {
      ...page,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const updatedPages = [...pages, newPage];
    setPages(updatedPages);
    localStorage.setItem('indeduhub_admin_pages', JSON.stringify(updatedPages));
  };

  const updatePage = (id: string, page: Partial<Page>) => {
    const updatedPages = pages.map(p => p.id === id ? { ...p, ...page, updatedAt: new Date().toISOString() } : p);
    setPages(updatedPages);
    localStorage.setItem('indeduhub_admin_pages', JSON.stringify(updatedPages));
  };

  const deletePage = (id: string) => {
    const updatedPages = pages.filter(p => p.id !== id);
    setPages(updatedPages);
    localStorage.setItem('indeduhub_admin_pages', JSON.stringify(updatedPages));
  };

  const updateSiteSettings = (settings: Partial<SiteSettings>) => {
    const updatedSettings = { ...siteSettings, ...settings };
    setSiteSettings(updatedSettings);
    localStorage.setItem('indeduhub_admin_settings', JSON.stringify(updatedSettings));
  };

  return (
    <AdminContext.Provider value={{
      adminUser,
      colleges,
      newsArticles,
      pages,
      siteSettings,
      adminLogin,
      adminLogout,
      addCollege,
      updateCollege,
      deleteCollege,
      addNewsArticle,
      updateNewsArticle,
      deleteNewsArticle,
      addPage,
      updatePage,
      deletePage,
      updateSiteSettings,
      isLoading
    }}>
      {children}
    </AdminContext.Provider>
  );
};