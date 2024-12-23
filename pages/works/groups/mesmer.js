import { Container, Badge, Link, List, ListItem, Box, Heading, Divider } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../../components/work"
import P from '../../../components/paragraph'
import MediaGrid from '../../../components/media-grid'
import Layout from '../../../components/layouts/article'

const media2017 = [
    { type: "video", src: "/images/groups/mesmer/2017-1.mp4" },
    { type: "video", src: "/images/groups/mesmer/2017-2.mp4" },
    { type: "image", src: "/images/groups/mesmer/2017-3.png" },
];

const media2021 = [
    { type: "image", src: "/images/groups/mesmer/2021-1.png" },
    { type: "video", src: "/images/groups/mesmer/2021-2.mp4" },
    { type: "video", src: "/images/groups/mesmer/2021-3.mp4" },
    { type: "video", src: "/images/groups/mesmer/2021-4.mp4" },
];

const Work = () => {
    return (
        <Layout title="Mesmer">
            <Container maxW="container.sm">
                <Title>
                    Mesmer <Badge>2017</Badge> <Badge>2021</Badge>
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
                        <Link href="https://www.roblox.com/groups/3443488/Mesmer">
                            https://www.roblox.com/groups/3443488/Mesmer <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>ROBLOX</span>
                    </ListItem>
                </List>
                <Box w="100%" h="150px" mb={4} display="flex" justifyContent="center" alignItems="center">
                    <Box w="150px" h="150px">
                        <WorkImage src="/images/icons/mesmer.png" alt="Mesmer"/>
                    </Box>
                </Box>

                <Heading as="h3" variant="section-title">
                    2017
                </Heading>
                <MediaGrid mediaItems={media2017} />
                <Divider my={6}/>

                <Heading as="h3" variant="section-title">
                    2021
                </Heading>
                <MediaGrid mediaItems={media2021} />
                <Divider my={6}/>

            </Container>
        </Layout>
    )
}

export default Work