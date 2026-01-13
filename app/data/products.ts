import { FaSearch, FaHamburger, FaDrumstickBite, FaLeaf, FaBeer, FaIceCream } from 'react-icons/fa';

export const categories = [
  { id: 'all', label: 'TODOS', icon: FaSearch },
  { id: 'burgers', label: 'SMASH BURGERS', icon: FaHamburger },
  { id: 'chicken', label: 'AVES', icon: FaDrumstickBite },
  { id: 'veggie', label: 'PLANT BASED', icon: FaLeaf },
  { id: 'drinks', label: 'COMBUSTÍVEL', icon: FaBeer },
  { id: 'shakes', label: 'SOBREMESAS', icon: FaIceCream },
];

export const products = [
  {
    id: 1,
    category: 'burgers',
    name: 'IRON MONSTER',
    description: 'Duplo smash 180g, bacon caramelizado, cheddar inglês, cebola crispy, maionese defumada no pão brioche.',
    specs: ['360g Carne', 'Pão Brioche', 'Defumado'],
    price: 42.90,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop',
    popular: true,
    bestseller: true
  },
  {
    id: 2,
    category: 'burgers',
    name: 'THE ANVIL (A BIGORNA)',
    description: 'Smash triplo, queijo gorgonzola fundido, rúcula selvagem e geléia de pimenta.',
    specs: ['540g Carne', 'Picante', 'Gorgonzola'],
    price: 48.90,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop',
    popular: false,
    bestseller: false
  },
  {
    id: 3,
    category: 'chicken',
    name: 'RUSTY CHICKEN',
    description: 'Sobrecoxa desossada empanada na farinha panko rústica, coleslaw e picles da casa.',
    specs: ['Crocante', 'Frango', 'Coleslaw'],
    price: 34.90,
    image: 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d?q=80&w=1000&auto=format&fit=crop',
    popular: true,
    bestseller: true
  },
  {
    id: 4,
    category: 'veggie',
    name: 'GREEN FACTORY',
    description: 'Burger de falafel e beterraba, cogumelos salteados, maionese de ervas e alface americana.',
    specs: ['Vegetariano', 'Cogumelos', 'Leve'],
    price: 36.90,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop',
    popular: false,
    bestseller: false
  },
  {
    id: 5,
    category: 'burgers',
    name: 'CLASSIC BOLT',
    description: 'Smash simples 90g, queijo prato, alface, tomate e molho especial.',
    specs: ['90g Carne', 'Clássico', 'Rápido'],
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop',
    popular: false,
    bestseller: false
  },
  {
    id: 6,
    category: 'shakes',
    name: 'OIL SHAKE',
    description: 'Milkshake de Oreo com calda de chocolate meio amargo e chantilly.',
    specs: ['500ml', 'Oreo', 'Doce'],
    price: 22.90,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1000&auto=format&fit=crop',
    popular: true,
    bestseller: false
  },
  {
    id: 7,
    category: 'drinks',
    name: 'IPA ARTESANAL',
    description: 'Cerveja Iron Ale, amargor médio e notas cítricas.',
    specs: ['473ml', '6.5% ABV', 'Lata'],
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=1000&auto=format&fit=crop',
    popular: false,
    bestseller: false
  },
  {
    id: 8,
    category: 'burgers',
    name: 'SMOKED INDUSTRIAL',
    description: 'Blend da casa defumado em lenha de macieira, onion rings.',
    specs: ['Defumado', 'Onion Rings'],
    price: 39.90,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop',
    popular: false,
    bestseller: true
  }
];
