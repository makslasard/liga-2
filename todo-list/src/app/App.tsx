import React from 'react'

import { Container } from '@mui/material'
import { AppRouter } from '@/app/providers/router/AppRouter/AppRouter'

import styles from './App.module.scss'

export const App: React.FC = () => {
    return (
        <div className={styles.container_app}>
            <Container maxWidth="sm">
                <AppRouter />
            </Container>
        </div>
    )
}
