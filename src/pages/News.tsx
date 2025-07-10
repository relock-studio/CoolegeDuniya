import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../components/SEO';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);