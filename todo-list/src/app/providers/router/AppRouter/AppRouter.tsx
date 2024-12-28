import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '@/app/providers/router/router'

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            {publicRoutes.map((router) => (
                <Route
                    path={router.path}
                    element={router.component}
                    key={router.path}
                />
            ))}
        </Routes>
    )
}
