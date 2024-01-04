import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import { Box, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import pdfResume from '../public/pdfs/jle_resume-one.pdf'

const Resume = ( ) => {
    return (
        <Layout>
            {/* <Box align="center" my={4}>
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
            /> */}
        </Layout>
    )
}

export default Resume