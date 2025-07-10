const News: React.FC = () => {
   const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);
   const [searchParams] = useSearchParams();
   
   useEffect(() => {
     const categoryParam = searchParams.get('category');
     if (categoryParam) {
       setSelectedCategory(categoryParam);
     }
import { useSearchParams } from 'react-router-dom';
   }, [searchParams]);
}