import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import icon from '../public/images/icon.png'
import thumbAceslinger from '../public/works/aceslinger.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="aceslinger"
                            title="Aceslinger"
                            thumbnail={thumbAceslinger}
                        >
                            A ROBLOX game
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="title" title="Title" thumbnail={thumbAceslinger}>
                            The quick brown fox jumps over the lazy dog.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works