@@ .. @@
   const navigationItems = [
     {
       title: 'Colleges',
       items: [
-        { name: 'All Colleges', path: '/colleges' },
-        { name: 'Engineering', path: '/engineering' },
-        { name: 'Medical', path: '/medical' },
-        { name: 'Management', path: '/mba' },
-        { name: 'Arts & Science', path: '/arts' }
+        { name: 'All Colleges', path: '/colleges' },
+        { name: 'Engineering', path: '/engineering' },
+        { name: 'Medical', path: '/medical' },
+        { name: 'Management', path: '/mba' },
+        { name: 'Arts & Science', path: '/arts' },
+        { name: 'Science', path: '/science' },
+        { name: 'Commerce', path: '/commerce' },
+        { name: 'Law', path: '/law' },
+        { name: 'Agriculture', path: '/agriculture' },
+        { name: 'Design', path: '/design' },
+        { name: 'Education', path: '/education' }
       ]
     },
     {
       title: 'Exams',
       items: [
         { name: 'All Exams', path: '/exams' },
-        { name: 'JEE Main', path: '/exams?filter=jee-main' },
-        { name: 'NEET', path: '/exams?filter=neet' },
-        { name: 'CAT', path: '/exams?filter=cat' },
-        { name: 'GATE', path: '/exams?filter=gate' }
+        { name: 'JEE Main', path: '/exams?exam=jee-main' },
+        { name: 'NEET', path: '/exams?exam=neet' },
+        { name: 'CAT', path: '/exams?exam=cat' },
+        { name: 'GATE', path: '/exams?exam=gate' },
+        { name: 'CLAT', path: '/exams?exam=clat' },
+        { name: 'CUET', path: '/exams?exam=cuet' }
       ]
     },
     {
       title: 'Courses',
       items: [
         { name: 'All Courses', path: '/courses' },
-        { name: 'B.Tech', path: '/courses?filter=btech' },
-        { name: 'MBBS', path: '/courses?filter=mbbs' },
-        { name: 'MBA', path: '/courses?filter=mba' },
-        { name: 'B.Sc', path: '/courses?filter=bsc' }
+        { name: 'B.Tech', path: '/courses?course=btech' },
+        { name: 'MBBS', path: '/courses?course=mbbs' },
+        { name: 'MBA', path: '/courses?course=mba' },
+        { name: 'B.Sc', path: '/courses?course=bsc' },
+        { name: 'B.A.', path: '/courses?course=ba' },
+        { name: 'B.Com', path: '/courses?course=bcom' }
       ]
     },
     {
       title: 'News',
       items: [
         { name: 'All News', path: '/news' },
-        { name: 'Admission News', path: '/news?category=admission' },
-        { name: 'Exam Updates', path: '/news?category=exam' },
-        { name: 'Results', path: '/news?category=results' }
+        { name: 'Admission News', path: '/news?category=Admission' },
+        { name: 'Exam Updates', path: '/news?category=Exam' },
+        { name: 'Results', path: '/news?category=Results' },
+        { name: 'Placement News', path: '/news?category=Placement' },
+        { name: 'Policy Updates', path: '/news?category=Policy' }
       ]
     },
     {
       title: 'More',
       items: [
         { name: 'Scholarships', path: '/scholarships' },
         { name: 'Study Abroad', path: '/study-abroad' },
         { name: 'College Predictor', path: '/college-predictor' },
-        { name: 'Reviews', path: '/reviews' }
+        { name: 'Reviews', path: '/reviews' },
+        { name: 'Universities', path: '/universities' },
+        { name: 'About Us', path: '/about' },
+        { name: 'Write Review', path: '/write-review' }
       ]
     }
   ];