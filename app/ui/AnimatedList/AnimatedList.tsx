import React from 'react';
import { motion } from 'framer-motion';

interface Item {
    name: string;
    icon: any;
  }

interface Props{
    items: Item[];
}

function AnimatedList({ items }: Props)  {

  return (
    <motion.ul
      className="flex gap-3"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          }
        }
      }}
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.5 + index * 0.20 }}
        >
          <item.icon name={item.name} className="bg-zinc-800 w-5 lg:w-10" />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default AnimatedList;