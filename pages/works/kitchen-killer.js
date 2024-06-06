import { Container, Badge, Link, List, ListItem, AspectRatio } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Kitchen Killer">
            <Container maxW="container.sm">
                <Title>
                Kitchen Killer <Badge>2023</Badge>
                </Title>
                <P>
                    An educational cooking app.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Software Architect/Engineer & Component Designer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/jeffohh/Kitchen-Killers">
                            https://github.com/jeffohh/Kitchen-Killers <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows, Mac</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/kitchen-killer.png" alt="Kitchen Killer"/>
                <AspectRatio maxW="640px" ratio={16/9} my={4}>
                    <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/DkNrhFkvyZk?si=RPIMHhh3ml7MrWuT"
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