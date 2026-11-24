import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbGameDay from '../public/images/posts/gdac-first.jpg'
import thumbUISystem from '../public/images/posts/ui-system-writeup.svg'

const Posts = () => (
    <Layout title="Posts">
        <Container maxW="container.sm">
            <Heading as="h4" fontSize={20} mb={4}>
                Posts
            </Heading>
            <Section delay={0.2}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="🥇 First Place"
                        thumbnail={thumbGameDay}
                        href="https://eccles.utah.edu/news/big-winners-at-the-2023-game-day-analytics-challenge/"
                    >
                    2023 Game Day Analytics Challenge
                    </GridItem>
                    <GridItem
                        title="UI System Writeup"
                        thumbnail={thumbUISystem}
                        href="/posts/ui-system-writeup"
                        target="_self"
                    >
                        A writeup about the UI system.
                    </GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts