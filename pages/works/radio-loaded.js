import { Container, Badge, Link, List, ListItem, AspectRatio } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Radio Loaded">
            <Container maxW="container.sm">
                <Title>
                    Radio Loaded <Badge>2023</Badge>
                </Title>
                <P>
                    A rhythm based third-person shooter game.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Lead Engineer, UI Designer & Animator</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <span>N/A</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/radio-loaded.png" alt="Radio Loaded"/>
                <WorkImage src="/images/works/radio-loaded/1.png" alt="radio-loaded-ss1"/>
                <WorkImage src="/images/works/radio-loaded/2.png" alt="radio-loaded-ss2"/>
                <WorkImage src="/images/works/radio-loaded/3.png" alt="radio-loaded-ss3"/>
                <AspectRatio maxW="640px" ratio={16/9} my={4}>
                    <iframe width="1128" height="644"
                    src="https://www.youtube.com/embed/jFtLOKybEis"
                    title="Radio Loaded - Trailer"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                    </iframe>
                </AspectRatio>
            </Container>
        </Layout>
    )
}

export default Work