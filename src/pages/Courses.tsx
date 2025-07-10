const Courses: React.FC = () => {
   const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const courseParam = searchParams.get('course');
    if (courseParam) {
      const courseMap: { [key: string]: string } = {
        'btech': 'Engineering',
        'mbbs': 'Medical',
        'mba': 'Management',
        'bsc': 'Science',
        'ba': 'Arts',
        'bcom': 'Commerce'
      };
      setSelectedCategory(courseMap[courseParam] || 'All');
    }
  }, [searchParams]);
   const [searchParams] = useSearchParams();
   
   useEffect(() => {
     const courseParam = searchParams.get('course');
     if (courseParam) {
       const courseMap: { [key: string]: string } = {
         'btech': 'Engineering',
         'mbbs': 'Medical',
         'mba': 'Management',
         'bsc': 'Science',
         'ba': 'Arts',
         'bcom': 'Commerce'
       };
       setSelectedCategory(courseMap[courseParam] || 'All');
    }
import { useSearchParams } from 'react-router-dom';
  }, [searchParams]);
}