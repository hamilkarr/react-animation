import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const variants = {
    entry: (direction: number) => ({
        x: direction * 500,
        opacity: 0,
        scale: 0
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1
        }
    },
    exit: (direction: number) => ({
        x: direction * -500,
        opacity: 0,
        scale: 0,
        transition: {
            duration: 1
        }
    })
}

const Box = ({ children, custom }: { children: React.ReactNode; custom: number }) => {
    return (
        <motion.div 
            className='w-40 h-40 bg-white rounded-3xl font-black flex items-center justify-center text-4xl absolute top-40'
            custom={custom}
            variants={variants}
            initial='entry'
            animate='center'
            exit='exit'
        >
            {children}
        </motion.div>
    )
}

const App = () => {
    const [visible, setVisible] = useState(1);
    const [direction, setDirection] = useState(1);
    const nextPlease = () => {
        setVisible(prev => prev === 10 ? 10 : prev + 1);
        setDirection(1);
    }
    const prevPlease = () => {
        setVisible(prev => prev === 1 ? 1 : prev - 1);
        setDirection(-1);
    }
    return (
        <motion.div className='flex flex-col gap-5 items-center justify-center h-screen w-screen bg-gradient-to-tr from-[#0f92e3] to-[#b9dc1e] relative' >
            <AnimatePresence custom={direction} mode='wait'>
                <Box key={visible} custom={direction}>{visible}</Box>
            </AnimatePresence>
            <button onClick={nextPlease}>Next</button>
            <button onClick={prevPlease}>Prev</button>
        </motion.div>
    )
};
export default App;
