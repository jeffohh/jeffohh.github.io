import { Container, Badge, Link, List, ListItem, AspectRatio } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Inferno Inc.">
            <Container maxW="container.sm">
                <Title>
                Inferno Inc. <Badge>2025</Badge>
                </Title>
                <P>
                    WIP.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Engineer, UI Animator & Designer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://kelley-n.itch.io/inferno-inc">
                            https://kelley-n.itch.io/inferno-inc<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/inferno-inc.png" alt="Inferno Inc. Title"/>
                <WorkImage src="/images/works/inferno-inc/1.png" alt="Limbo Level"/>
                <WorkImage src="/images/works/inferno-inc/2.png" alt="Task View"/>
                <WorkImage src="/images/works/inferno-inc/3.png" alt="Lust Level"/>
                <AspectRatio maxW="640px" ratio={16/9} my={4}>
                    <video controls src="/images/works/inferno-inc/4.mp4" />
                </AspectRatio>
            </Container>
        </Layout>
    )
}

export default Work