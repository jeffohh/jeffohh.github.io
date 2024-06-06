import { Container, Badge, Link, List, ListItem, Box, Heading, Divider} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../../components/work"
import P from '../../../components/paragraph'
import MediaGrid from '../../../components/media-grid'
import Layout from '../../../components/layouts/article'

const media2017 = [
    { type: "video", src: "/images/groups/daedalus-senate/2017-1.mp4" },
    { type: "video", src: "/images/groups/daedalus-senate/2017-2.mp4" },
    { type: "video", src: "/images/groups/daedalus-senate/2017-3.mp4" },
    { type: "image", src: "/images/groups/daedalus-senate/2017-4.png" },
];

const media2018 = [
    { type: "video", src: "/images/groups/daedalus-senate/2018-1.mp4" },
    { type: "video", src: "/images/groups/daedalus-senate/2018-2.mp4" },
    { type: "video", src: "/images/groups/daedalus-senate/2018-3.mp4" },
    { type: "video", src: "/images/groups/daedalus-senate/2018-4.mp4" },
    { type: "video", src: "/images/groups/daedalus-senate/2018-5.mp4" },
    { type: "video", src: "/images/groups/daedalus-senate/2018-6.mp4" },
    { type: "video", src: "/images/groups/daedalus-senate/2018-7.mp4" },
    { type: "video", src: "/images/groups/daedalus-senate/2018-8.mp4" },
    { type: "video", src: "/images/groups/daedalus-senate/2018-9.mp4" },
    { type: "video", src: "/images/groups/daedalus-senate/2018-10.mp4" },
    { type: "image", src: "/images/groups/daedalus-senate/2018-11.png" },
];

const media2019 = [
    { type: "video", src: "/images/groups/daedalus-senate/2019-1.mp4" },
    { type: "image", src: "/images/groups/daedalus-senate/2019-2.png" },
];

const media2020 = [
    { type: "gif", src: "/images/groups/daedalus-senate/2020-1.gif" },
    { type: "video", src: "/images/groups/daedalus-senate/2020-2.mp4" },
    { type: "image", src: "/images/groups/daedalus-senate/2020-3.png" },
];

const media2021 = [
    { type: "gif", src: "/images/groups/daedalus-senate/2021-1.gif" },
    { type: "gif", src: "/images/groups/daedalus-senate/2021-2.gif" },
];

const media2023 = [
    { type: "video", src: "/images/groups/daedalus-senate/2023-1.mp4" },
    { type: "video", src: "/images/groups/daedalus-senate/2023-2.mp4" },
    { type: "video", src: "/images/groups/daedalus-senate/2023-3.mp4" },
];

const media2024 = [
    { type: "gif", src: "/images/groups/daedalus-senate/2024-1.gif" },
];

const Work = () => {
    return (
        <Layout title="Daedalus Senate">
            <Container maxW="container.sm">
                <Title>
                    Daedalus Senate <Badge>2017 - Present</Badge>
                </Title>
                <P>
                    Back in 2017, I met an old friend who I used to play ROBLOX with from a group called
                    Frost Mage Clan. At the time, he was running his group, Daedalus Senate and I decided
                    to use my scripting knowledge to help him out with some things. Eventually, this lead
                    to him recruiting me on the spot as the Lead Scripter.
                </P>
                <br></br>
                <P>
                    I created various technologies such as raycasting guns, terminal systems, payload systems,
                    UI designs & animations, player movement systems, training systems, etc. I also participated
                    in map design and level balancing.
                </P>
                <br></br>
                <P>
                    Most, if not all, projects were done free-of-charge. This group allowed me to explore new
                    ways of scripting, providing an active platform to showcase my discoveries. I got to work
                    with assets and experiment with concepts that were never seen before in the gun fighting
                    community.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Lead Scripter</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.roblox.com/groups/2962857/Daedalus-Senate">
                            https://www.roblox.com/groups/2962857/Daedalus-Senate <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>ROBLOX</span>
                    </ListItem>
                </List>
                <Box w="100%" h="150px" mb={4} display="flex" justifyContent="center" alignItems="center">
                    <Box w="150px" h="150px">
                        <WorkImage src="/images/icons/daedalus-senate.png" alt="Daedalus Senate"/>
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

                <Heading as="h3" variant="section-title">
                    2019
                </Heading>
                <MediaGrid mediaItems={media2019} />
                <Divider my={6}/>

                <Heading as="h3" variant="section-title">
                    2020
                </Heading>
                <MediaGrid mediaItems={media2020} />
                <Divider my={6}/>

                <Heading as="h3" variant="section-title">
                    2021
                </Heading>
                <MediaGrid mediaItems={media2021} />
                <Divider my={6}/>

                <Heading as="h3" variant="section-title">
                    2023
                </Heading>
                <MediaGrid mediaItems={media2023} />
                <Divider my={6}/>

                <Heading as="h3" variant="section-title">
                    2023
                </Heading>
                <MediaGrid mediaItems={media2024} />
            </Container>
        </Layout>
    )
}

export default Work