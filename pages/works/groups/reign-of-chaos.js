import { Container, Badge, Link, List, ListItem, Box, Heading, Divider } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../../components/work"
import P from '../../../components/paragraph'
import MediaGrid from '../../../components/media-grid'
import Layout from '../../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Reign of Chaos">
            <Container maxW="container.sm">
                <Title>
                    Reign of Chaos <Badge>2017</Badge>
                </Title>
                <P>
                    WIP...
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Scripter</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.roblox.com/groups/291845/Reign-of-Chaos">
                            https://www.roblox.com/groups/291845/Reign-of-Chaos <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>ROBLOX</span>
                    </ListItem>
                </List>
                <Box w="100%" h="150px" mb={4} display="flex" justifyContent="center" alignItems="center">
                    <Box w="150px" h="150px">
                        <WorkImage src="/images/icons/reign-of-chaos.png" alt="Reign of Chaos"/>
                    </Box>
                </Box>

            </Container>
        </Layout>
    )
}

export default Work