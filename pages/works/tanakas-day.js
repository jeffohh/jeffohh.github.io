import { Container, Badge, Link, List, ListItem, AspectRatio } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Tanaka's Day">
            <Container maxW="container.sm">
                <Title>
                Tanaka's Day <Badge>2025</Badge>
                </Title>
                <P>
                    WIP.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Engineer, UI Animator & Engineer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://nexiie.itch.io/tanakas-day">
                            https://nexiie.itch.io/tanakas-day<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/tanakas-day/pitch.jpg" alt="Pitch"/>
                <WorkImage src="/images/works/tanakas-day.png" alt="Tanaka Title"/>
                <WorkImage src="/images/works/tanakas-day/1.png" alt="TV Environment"/>
                <WorkImage src="/images/works/tanakas-day/2.png" alt="Desk Environment"/>
                <WorkImage src="/images/works/tanakas-day/3.png" alt="Office Environment"/>
            </Container>
        </Layout>
    )
}

export default Work