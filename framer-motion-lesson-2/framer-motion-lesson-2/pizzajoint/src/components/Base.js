import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    x: '100vw',
    opacity: 0
  },
  visable: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
      stiffness: 70
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const nextVariants = {
  hidden: {
    x: '-100vw'
  },
  visable: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 70
    }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 4px rgb(255,255,255)',
    boxShadow: '0px 0px 4px rgb(255,255,255)',
    transition: {
      duration: 0.5,
      yoyo: Infinity
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial='hidden'
      animate='visable'
      exit='exit'
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
            whileHover={{
              scale: 1.3,
              color: '#f8e112',
              originX: 0
            }}
            transition={{
              type: 'spring',
              stiffness: 200
            }}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={nextVariants}
        >
          <Link to="/toppings">
            <motion.button 
              variants={buttonVariants}
              whileHover='hover'
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;