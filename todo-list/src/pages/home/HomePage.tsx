import React from 'react'

import { Pagination } from '@mui/material'
import { Header } from '@/widgets/header'

import styles from './HomePage.module.scss'
import { TaskList } from '@/widgets/task-list/ui/TaskList'

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container_home}>
      <header>
        <Header />
      </header>
      <main>
        <TaskList />
      </main>
      <footer>
        <Pagination count={10} shape="rounded" />
      </footer>
    </div>
  )
}
