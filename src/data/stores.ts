export interface Store {
  id: string;
  name: string;
  image: string;
  description: string;
  advertisement: string;
}

export const stores: Store[] = [
  {
    id: '1',
    name: 'Alpha Market',
    image: 'https://via.placeholder.com/300x200?text=Alpha+Market',
    description: 'A local market offering fresh produce.',
    advertisement: 'Visit Alpha Market for the best organic fruits!'
  },
  {
    id: '2',
    name: 'Urban Store',
    image: 'https://via.placeholder.com/300x200?text=Urban+Store',
    description: 'Modern store with trendy products.',
    advertisement: 'Discover the latest trends at Urban Store!'
  },
  {
    id: '3',
    name: 'Country Market',
    image: 'https://via.placeholder.com/300x200?text=Country+Market',
    description: 'Traditional market with a variety of local goods.',
    advertisement: 'Experience authentic flavors at Country Market!'
  }
];