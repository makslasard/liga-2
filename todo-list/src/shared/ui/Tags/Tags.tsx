import React from 'react'
import { Important } from './Important/Important'

import styles from './Tags.module.scss'
import { Done } from './Done/Done'

interface TagProps {
  isImportant?: boolean
  isCompleted?: boolean
  isAll?: boolean // Добавлено поле isAll
}

export const Tags: React.FC<TagProps> = ({ isImportant, isCompleted }) => {
  const isAllTags = isImportant && isCompleted

  // const currentTagsTask = () => {
  //   switch () {
  //   }
  // }

  return (
    <div className={styles.wrapper}>
      {isImportant && <Important />}
      {isCompleted && <Done />}
      {isAllTags && (
        <>
          <Important />
          <Done />
        </>
      )}
    </div>
  )
}
