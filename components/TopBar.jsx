import { motion } from 'framer-motion';
const TopBar = () => {
  return (
    <div className="w-full bg-black text-white p-2 text-center text-sm">
      <p className="">Secure Payment</p>
      <p className="hidden">
        Free Delivery on all orders over £50 + 60-day free return
      </p>
    </div>
  );
};

export default TopBar;
