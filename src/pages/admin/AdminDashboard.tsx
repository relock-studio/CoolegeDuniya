import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  GraduationCap, 
  FileText, 
  MessageSquare, 
  TrendingUp, 
  Eye,
  Plus,
  Settings,
  BarChart3,
  Calendar
} from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';

const AdminDashboard: React.FC = () => {
  const { colleges, newsArticles, pages } = useAdmin();

  const stats = [
    {
      title: 'Total Colleges',
      value: colleges.length.toString(),
      icon: GraduationCap,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'News Articles',
      value: newsArticles.length.toString(),
      icon: FileText,
      color: 'bg-green-500',
      change: '+8%'
    },
    {
      title: 'Pages',
      value: pages.length.toString(),
      icon: MessageSquare,
      color: 'bg-purple-500',
      change: '+5%'
    },
    {
      title: 'Monthly Views',
      value: '45.2K',
      icon: Eye,
      color: 'bg-orange-500',
      change: '+23%'
    }
  ];

  const quickActions = [
    {
      title: 'Add New College',
      description: 'Add a new college to the database',
      icon: Plus,
      link: '/admin/colleges/new',
      color: 'bg-blue-500'
    },
    {
      title: 'Create News Article',
      description: 'Publish latest education news',
      icon: FileText,
      link: '/admin/news/new',
      color: 'bg-green-500'
    },
    {
      title: 'Add New Page',
      description: 'Create a new website page',
      icon: Plus,
      link: '/admin/pages/new',
      color: 'bg-purple-500'
    },
    {
      title: 'Site Settings',
      description: 'Configure website settings',
      icon: Settings,
      link: '/admin/settings',
      color: 'bg-gray-500'
    }
  ];

  const recentActivity = [
    { action: 'New college added', item: 'IIT Bangalore', time: '2 hours ago' },
    { action: 'News article published', item: 'JEE Main 2024 Updates', time: '4 hours ago' },
    { action: 'Page updated', item: 'About Us', time: '1 day ago' },
    { action: 'College updated', item: 'AIIMS Delhi', time: '2 days ago' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your site.</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>{new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`${action.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                      <action.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-orange-600">
                        {action.title}
                      </h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.item}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Chart Placeholder */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Site Analytics</h2>
          <BarChart3 className="h-5 w-5 text-gray-400" />
        </div>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">Analytics chart would go here</p>
            <p className="text-sm text-gray-400">Connect to analytics service for real data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;