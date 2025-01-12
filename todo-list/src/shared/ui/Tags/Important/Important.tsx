import React from 'react'

import styles from './Important.module.scss'
import { Typography } from '@mui/material'

export const Important: React.FC = () => {
  return (
    <div className={styles.tag_container}>
      <Typography variant="body2">Важная задача</Typography>
    </div>
  )
}
