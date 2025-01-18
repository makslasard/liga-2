import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '@/app/providers/router/router'

export const AppRouter: React.FC = () => {
  // const isAuthUser = useTypedSelector(selectorUserIsAuth)
  const isAuthUser = true
  return (
    <Routes>
      {isAuthUser
        ? privateRoutes.map((router) => (
            <Route
              key={router.path}
              path={router.path}
              element={<router.component />}
            />
          ))
        : publicRoutes.map((router) => (
            <Route
              key={router.path}
              path={router.path}
              element={<router.component />}
            />
          ))}
      <Route path="*" element={<Navigate to={isAuthUser ? '/tasks' : '/'} />} />
    </Routes>
  )
}
