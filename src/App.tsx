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

const Box = ({ span, layoutId, onClick }: { 
    span?: boolean, 
    layoutId?: string,
    onClick?: () => void 
}) => {
    return (
        <motion.div
            onClick={onClick}
            className={`h-40 bg-white rounded-3xl font-black flex items-center justify-center text-4xl shadow-lg ${
                span ? 'col-span-2' : ''
            }`}
            // variants={variants}
            // initial='entry'
            // animate='center'
            // exit='exit'
            layoutId={layoutId}
        >
        </motion.div>
    )
}

const App = () => {
    const [id, setId] = useState<null | string>(null);
    console.log(id);
    return (
        <motion.div className='flex items-center justify-center h-screen w-screen bg-gradient-to-tr from-[#0f92e3] to-[#b9dc1e]'>
            <div className='w-3/5 grid grid-cols-3 gap-5'>
                {["1", "2", "3", "4"].map(
                    (n) => <Box layoutId={n} key={n} onClick={() => setId(n)} span={n === '4' || n === '1'}/>
                )}
            </div>
            <AnimatePresence>
                {id && (
                    <motion.div 
                        className='w-full h-full flex items-center justify-center absolute top-0 left-0'
                        onClick={() => setId(null)}
                        initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                        animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                        exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                    >
                        <motion.div className='w-80 h-40 bg-white rounded-3xl font-black flex items-center justify-center text-4xl shadow-lg' layoutId={id}>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
};
export default App;
