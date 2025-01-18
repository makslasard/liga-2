import React from 'react'
import { Header } from '@/widgets/header'

import styles from './HomePage.module.scss'
import { TaskList } from '@/widgets/task-list/ui/TaskList'
import { Pagination } from '@/features/pagination/ui/Pagination'

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
        <Pagination />
      </footer>
    </div>
  )
}
