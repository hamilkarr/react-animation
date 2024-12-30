import { motion } from 'framer-motion';

const variants = {
    start: {
        opacity: 0,
        scale: 0.5
    },
    end: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            delay: 0.5,
            delayChildren: 0.6,
            staggerChildren: 0.2,
            duration: 0.5
        }
    }
}

const circleVariants = {
    start: {
        opacity: 0,
        y: 20
    },
    end: {
        opacity: 1,
        y: 0
    }
}

const Circle = () => {
    return (
        <motion.div className='w-16 h-16 bg-white rounded-full place-self-center' variants={circleVariants}>
        </motion.div>
    )
}

const App = () => {
    return (
        <div className='bg-gradient-to-tr from-[#ee0099] to-[#dd00ee] flex items-center justify-center h-screen w-screen'>
            <motion.div
                className='w-48 h-48  bg-white/20  rounded-3xl shadow-lg grid grid-cols-2'
                variants={variants}
                initial='start'
                animate='end'
            >
                <Circle/>
                <Circle/>
                <Circle/>
                <Circle/>
            </motion.div>
        </div>
    )
};
export default App;
