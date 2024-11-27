import { Container, Badge, Link, List, ListItem, AspectRatio } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Radio Loaded">
            <Container maxW="container.sm">
                <Title>
                    Radio Loaded <Badge>2023</Badge>
                </Title>
                <P>
                    Radio Loaded is a rhythm based third-person shooter game in which you play as Jeff, a hitman agent.
                    With a few guns, a pair of earbuds, and a walkman with some bangerbeats, you can get the job done.
                    Complete your contracts by shooting enemies to the beat of the music. The more on-time you are with
                    the beat, the more effective you'll get at killing enemies.
                </P>
                <br></br>
                <P>
                    Radio Loaded was a 3-month project created in collaboration of
                    Jeffrey Le  (<Link href="https://github.com/jeffohh">@jeffohh</Link>),
                    Junao Xiong (<Link href="https://github.com/SparkingBones">@SparkingBones</Link>),
                    Siyu Liu, and
                    Karston Modlinsky. This served as our EAE 3710 Traditional Game Development project for
                    the Entertainment Arts and Engineering program at the University of Utah.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Lead Engineer, UI Designer & Animator, Vision Holder</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/jeffohh/Radio-Loaded">
                            https://github.com/jeffohh/Radio-Loaded<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/radio-loaded/pitch.png" alt="Radio Loaded Pitch"/>
                <WorkImage src="/images/works/radio-loaded.png" alt="Radio Loaded"/>
                <WorkImage src="/images/works/radio-loaded/1.png" alt="radio-loaded-ss1"/>
                <WorkImage src="/images/works/radio-loaded/2.png" alt="radio-loaded-ss2"/>
                <WorkImage src="/images/works/radio-loaded/3.png" alt="radio-loaded-ss3"/>
                <AspectRatio maxW="640px" ratio={16/9} my={4}>
                    <iframe width="1128" height="644"
                    src="https://www.youtube.com/embed/jFtLOKybEis"
                    title="Radio Loaded - Trailer"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                    </iframe>
                </AspectRatio>
            </Container>
        </Layout>
    )
}

export default Work