import React from 'react'

import styles from './header.module.scss'
import { CreateTask } from '@/features/create-task'
import { SearchTask } from '@/features/search-task'
import { SelectFilters } from '@/features/select-filter'

export const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <CreateTask />
      </div>
      <div>
        <SearchTask />
      </div>
      <div>
        <SelectFilters />
      </div>
    </div>
  )
}
