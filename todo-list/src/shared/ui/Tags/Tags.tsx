import React from 'react'
import { Important } from './Important/Important'

import styles from './Tags.module.scss'
import { Done } from './Done/Done'

interface TagProps {
  isImportant?: boolean
  isCompleted?: boolean
}

export const Tags: React.FC<TagProps> = ({ isImportant, isCompleted }) => {
  const isAll = isImportant && isCompleted

  if (isAll) {
    return (
      <div className={styles.wrapper}>
        <Important />
        <Done />
      </div>
    )
  }

  if (isImportant && !isCompleted) {
    return (
      <div className={styles.wrapper}>
        <Important />
      </div>
    )
  }

  if (isCompleted && !isImportant) {
    return (
      <div className={styles.wrapper}>
        <Done />
      </div>
    )
  }
}
