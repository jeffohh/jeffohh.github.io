import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Wonderland">
            <Container>
                <Title>
                Wonderland <Badge>2023</Badge>
                </Title>
                <P>
                    A puzzle horror game.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Lead Engineer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://thelexshow.itch.io/wonderland">
                            https://thelexshow.itch.io/wonderland <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/wonderland.png" alt="Wonderland"/>
            </Container>
        </Layout>
    )
}

export default Work