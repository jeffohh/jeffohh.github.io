import { Container, Badge, Link, List, ListItem, Box, Heading, Divider } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../../components/work"
import P from '../../../components/paragraph'
import MediaGrid from '../../../components/media-grid'
import Layout from '../../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Dominion of Valyria">
            <Container maxW="container.sm">
                <Title>
                    Dominion of Valyria <Badge>2017</Badge>
                </Title>
                <P>
                    WIP...
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Scripter, Animator, UI Designer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.roblox.com/groups/2658805/Dominion-of-Valyria">
                            https://www.roblox.com/groups/2658805/Dominion-of-Valyria <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>ROBLOX</span>
                    </ListItem>
                </List>
                <Box w="100%" h="150px" mb={4} display="flex" justifyContent="center" alignItems="center">
                    <Box w="150px" h="150px">
                        <WorkImage src="/images/icons/dominion-of-valyria.png" alt="Dominion of Valyria"/>
                    </Box>
                </Box>

            </Container>
        </Layout>
    )
}

export default Work