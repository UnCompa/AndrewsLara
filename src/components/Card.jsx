import {motion} from 'framer-motion'

export default function Card(){
  return (
    <motion.div
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    class="p-4 h-full w-full font-Poppins bg-zinc-300">
      <h2 class="text-3xl py-3">El insano</h2>
      <h3 class="text-xl">Andrews Lara</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae
        magni iusto dicta, aliquid temporibus fuga dolorem voluptate amet
        consectetur nesciunt tempore delectus repellat, facilis velit laborum
        enim consequatur at.
      </p>
    </motion.div>
  );
};

