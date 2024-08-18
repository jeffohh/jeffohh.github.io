import { Container, Badge, Link, List, ListItem, Box, Heading, Divider } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../../components/work"
import P from '../../../components/paragraph'
import MediaGrid from '../../../components/media-grid'
import Layout from '../../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="RSF">
            <Container maxW="container.sm">
                <Title>
                    RSF <Badge>2017</Badge>
                </Title>
                <P>
                    WIP...
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Scripter, UI Designer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.roblox.com/groups/14638/RSF">
                            https://www.roblox.com/groups/14638/RSF <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>ROBLOX</span>
                    </ListItem>
                </List>
                <Box w="100%" h="150px" mb={4} display="flex" justifyContent="center" alignItems="center">
                    <Box w="150px" h="150px">
                        <WorkImage src="/images/icons/rsf.png" alt="RSF"/>
                    </Box>
                </Box>

            </Container>
        </Layout>
    )
}

export default Work