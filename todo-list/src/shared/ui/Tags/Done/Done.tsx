import React from 'react'

import styles from './Done.module.scss'
import { Typography } from '@mui/material'

export const Done: React.FC = () => {
  return (
    <div className={styles.tag_container}>
      <Typography variant="body2">Done</Typography>
    </div>
  )
}
