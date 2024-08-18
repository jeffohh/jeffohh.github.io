import { Container, Badge, Link, List, ListItem, Box, Heading, Divider } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../../components/work"
import P from '../../../components/paragraph'
import MediaGrid from '../../../components/media-grid'
import Layout from '../../../components/layouts/article'

const media2017 = [
    { type: "image", src: "/images/groups/nightfall-clan/2017-1.png" },
    { type: "video", src: "/images/groups/nightfall-clan/2017-2.mp4" },
    { type: "video", src: "/images/groups/nightfall-clan/2017-3.mp4" },
];


const Work = () => {
    return (
        <Layout title="Nightfall Clan">
            <Container maxW="container.sm">
                <Title>
                    Nightfall Clan <Badge>2017</Badge>
                </Title>
                <P>
                    WIP...
                </P>
                <br></br>
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
                        <Link href="https://www.roblox.com/groups/85654/Nightfall-Clan">
                            https://www.roblox.com/groups/85654/Nightfall-Clan <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>ROBLOX</span>
                    </ListItem>
                </List>
                <Box w="100%" h="150px" mb={4} display="flex" justifyContent="center" alignItems="center">
                    <Box w="150px" h="150px">
                        <WorkImage src="/images/icons/nightfall-clan.png" alt="Nightfall Clan"/>
                    </Box>
                </Box>

                <Heading as="h3" variant="section-title">
                    2017
                </Heading>
                <MediaGrid mediaItems={media2017} />
                <Divider my={6}/>

            </Container>
        </Layout>
    )
}

export default Work