import { AiOutlineShoppingCart, AiOutlineCreditCard } from 'react-icons/ai';
import { LiaTruckMovingSolid } from 'react-icons/lia';
import { LuPackageCheck } from 'react-icons/lu';

export const navItems = [
  { path: '/cart', 
    icon: AiOutlineShoppingCart, 
    label: 'CART',
  },
  { path: 'shipping', 
    icon: LiaTruckMovingSolid, 
    label: 'SHIPPING' 
  },
  {
    path: 'payment',
    icon: AiOutlineCreditCard,
    label: 'PAYMENT',
    rotateIcon: true,
  },
  { path: 'result', 
    icon: LuPackageCheck, 
    label: 'RESULT' 
  },
];
