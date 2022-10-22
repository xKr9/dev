import React from 'react'
import { motion } from 'framer-motion'

export default function Underline() {
  return (
    <motion.div
    initial={{ width: '0%' }}
    animate={{ width: '100%' }}
    exit={{ width: '0%'}}
    transition={{ duration: 1 }}
    className="w-1/4 h-1 bg-primary">

    </motion.div>
  )
}
