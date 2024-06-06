import { Container, Badge, Link, List, ListItem, AspectRatio } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Sprite Editor">
            <Container maxW="container.sm">
                <Title>
                Sprite Editor <Badge>2023</Badge>
                </Title>
                <P>
                    A sprite editor app.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Software Architect/Engineer & Component Designer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/jeffohh/Sprite-Editor">
                            https://github.com/jeffohh/Sprite-Editor <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows, Mac</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/sprite-editor.png" alt="Sprite Editor"/>
                <AspectRatio maxW="640px" ratio={16/9} my={4}>
                    <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/YeS-IimQMaE?si=qb0X6NIpQMS_FTM2"
                    title="YouTube video player"
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