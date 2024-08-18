import { Container, Badge, Link, List, ListItem, Box, Heading, Divider } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../../components/work"
import P from '../../../components/paragraph'
import MediaGrid from '../../../components/media-grid'
import Layout from '../../../components/layouts/article'

const media2017 = [
    { type: "video", src: "/images/groups/arvorian-confederation/2017-1.mp4" },
    { type: "video", src: "/images/groups/arvorian-confederation/2017-2.mp4" },
    { type: "video", src: "/images/groups/arvorian-confederation/2017-3.mp4" },
    { type: "video", src: "/images/groups/arvorian-confederation/2017-4.mp4" },
    { type: "image", src: "/images/groups/arvorian-confederation/2017-5.png" },
];

const media2018 = [
    { type: "image", src: "/images/groups/arvorian-confederation/2018-1.png" },
];


const Work = () => {
    return (
        <Layout title="Arvorian Confederation">
            <Container maxW="container.sm">
                <Title>
                    Arvorian Confederation <Badge>2017 - 2018</Badge>
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
                        <span>Scripter, Animator, UI Designer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.roblox.com/groups/2843089/Arvorian-Confederation">
                            https://www.roblox.com/groups/2843089/Arvorian-Confederation <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>ROBLOX</span>
                    </ListItem>
                </List>
                <Box w="100%" h="150px" mb={4} display="flex" justifyContent="center" alignItems="center">
                    <Box w="150px" h="150px">
                        <WorkImage src="/images/icons/arvorian-confederation.png" alt="Arvorian Confederation"/>
                    </Box>
                </Box>

                <Heading as="h3" variant="section-title">
                    2017
                </Heading>
                <MediaGrid mediaItems={media2017} />
                <Divider my={6}/>

                <Heading as="h3" variant="section-title">
                    2018
                </Heading>
                <MediaGrid mediaItems={media2018} />
                <Divider my={6}/>

            </Container>
        </Layout>
    )
}

export default Work