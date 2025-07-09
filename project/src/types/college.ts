export interface College {
  id: string;
  name: string;
  location: string;
  city: 'Bangalore' | 'Delhi';
  image: string;
  rating: number;
  reviews: number;
  fees: {
    min: number;
    max: number;
  };
  courses: string[];
  established: number;
  type: 'Engineering' | 'Management' | 'Medical' | 'Arts' | 'Commerce' | 'Science';
  mode: 'Full-time' | 'Part-time' | 'Online';
  accreditation: string[];
  highlights: string[];
  description: string;
}

export interface FilterOptions {
  city: string;
  type: string;
  feesRange: [number, number];
  rating: number;
  searchQuery: string;
}