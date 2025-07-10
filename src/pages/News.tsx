const News: React.FC = () => {
   const [selectedCategory, setSelectedCategory] = useState('All');
   const [searchParams] = useSearchParams();
   
   useEffect(() => {
     const categoryParam = searchParams.get('category');
     if (categoryParam) {
       setSelectedCategory(categoryParam);
     }
   }, [searchParams]);
}