const Exams: React.FC = () => {
   const [selectedCategory, setSelectedCategory] = useState('All');
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
  }, [searchParams]);
}