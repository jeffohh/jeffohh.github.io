import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Radio Loaded">
            <Container>
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
            </Container>
        </Layout>
    )
}

export default Work