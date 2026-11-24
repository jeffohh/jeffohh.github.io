import { Badge, Container, Text } from '@chakra-ui/react'
import { Title } from '../../components/work'
import Layout from '../../components/layouts/article'

const UISystemWriteup = () => (
    <Layout title="UI System Writeup">
        <Container maxW="container.sm">
            <Title parent="Posts" href="/posts">
                UI System Writeup <Badge>2026</Badge>
            </Title>
            <Text>Writeup coming soon.</Text>
        </Container>
    </Layout>
)

export default UISystemWriteup
