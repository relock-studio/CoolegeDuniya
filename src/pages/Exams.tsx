const Exams: React.FC = () => {
   const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const examParam = searchParams.get('exam');
    if (examParam) {
      const examMap: { [key: string]: string } = {
        'jee-main': 'Engineering',
        'jee-advanced': 'Engineering',
        'neet': 'Medical',
        'cat': 'Management',
        'gate': 'Engineering',
        'clat': 'Law',
        'cuet': 'Arts',
        'mat': 'Management',
        'xat': 'Management'
      };
      setSelectedCategory(examMap[examParam] || 'All');
    }
  }, [searchParams]);
   const [searchParams] = useSearchParams();
   
   useEffect(() => {
     const examParam = searchParams.get('exam');
     if (examParam) {
       const examMap: { [key: string]: string } = {
         'jee-main': 'Engineering',
         'neet': 'Medical',
         'cat': 'Management',
         'gate': 'Engineering',
         'clat': 'Law',
         'cuet': 'Arts'
       };
       setSelectedCategory(examMap[examParam] || 'All');
    }
import { useSearchParams } from 'react-router-dom';
  }, [searchParams]);
}