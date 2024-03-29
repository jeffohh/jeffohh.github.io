import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import { Box, Button, Container } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import pdfResume from '../public/pdfs/jle_resume-one.pdf'

const Resume = ( ) => {
    return (
        <Layout>
            <Container  maxW="container.md">
                <Box align="center" my={4}>
                    <NextLink href={pdfResume} target='_blank'>
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
                            Open Resume
                        </Button>
                    </NextLink>
                </Box>

                <iframe
                src={pdfResume}
                width="100%"
                height="1080px"
                style={{ border: 'none' }}
                />

            </Container>
        </Layout>
    )
}

export default Resume