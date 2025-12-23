import { Container, Badge, Link, List, ListItem, AspectRatio } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Tank: War of Walls">
            <Container maxW="container.sm">
                <Title>
                Tank: War of Walls <Badge>2025</Badge>
                </Title>
                <P>
                    WIP.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Engineer, UI Engineer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://benjaminy.itch.io/tank">
                            https://benjaminy.itch.io/tank<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>WebGL, Android</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/tank/pitch.png" alt="Pitch"/>
                <WorkImage src="/images/works/tank.png" alt="Tank Title"/>
                <WorkImage src="/images/works/tank/1.png" alt="Map 1"/>
                <WorkImage src="/images/works/tank/2.png" alt="Victory Screen"/>
                <WorkImage src="/images/works/tank/3.png" alt="Map 2"/>
            </Container>
        </Layout>
    )
}

export default Work