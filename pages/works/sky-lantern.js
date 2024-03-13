import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Sky Lantern">
            <Container maxW="container.sm">
                <Title>
                    Sky Lantern <Badge>2019</Badge>
                </Title>
                <P>
                    My studio!
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Director</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.roblox.com/groups/3050300/Sky-Lantern">
                            https://www.roblox.com/groups/3050300/Sky-Lantern <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>ROBLOX</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/icons/sky-lantern.png" alt="Sky Lantern"/>            </Container>
        </Layout>
    )
}

export default Work