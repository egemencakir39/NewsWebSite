import { Container } from '@mui/material'
import React, { ReactNode } from 'react'

interface PageContainerProps {
    children: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
    return (
        <Container maxWidth="lg" >
            {children}
        </Container>
    )
}

export default PageContainer