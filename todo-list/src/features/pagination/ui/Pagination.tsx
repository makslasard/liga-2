import React, { ChangeEvent, useEffect, useState } from 'react'
import {
  useTypedDispatch,
  useTypedSelector,
} from '@/app/store/types/typedHooks'
import { fetchTasksWithPagination } from '@/features/pagination/api/fetchTasksWithPagination'
import { Pagination as PaginationMUI } from '@mui/material'

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useTypedDispatch()
  const { totalCountTasks, isLoading } = useTypedSelector(
    (state) => state.allTasks
  )
  const pageSize = 5

  useEffect(() => {
    dispatch(
      fetchTasksWithPagination({ page: currentPage, pageSize: pageSize })
    )
  }, [currentPage])

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
  }
  const totalPages = Math.ceil(totalCountTasks / pageSize)

  return (
    <div>
      <PaginationMUI
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        disabled={isLoading}
      />
    </div>
  )
}
