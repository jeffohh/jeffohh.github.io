import { Container, Badge, Link, List, ListItem, AspectRatio } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Inferno Inc.">
            <Container maxW="container.sm">
                <Title>
                Inferno Inc. <Badge>2025</Badge>
                </Title>
                <P>
                    You've just been hired as the newest employee in Hell's most ambitious corporation.
                    Under new management, Inferno Inc. is on a mission to Make Hell More Efficient™,
                    and we need your help to reorganize the Nine Circles into a smooth-running machine of eternal torment. 
                </P>
                <br></br>
                <P>
                    Drag souls to their proper punishments, solve devilish puzzles,
                    and optimize damnation itself in this darkly comedic management sim meets puzzle adventure.
                </P>
                <br></br>
                <P>
                    Inferno Inc. was a 3-week project created in collaboration of
                    Alfred An,
                    Yuhan Lin,
                    Angelina Bologna,
                    Deepak Kari,
                    Jeffrey Le (<Link href="https://github.com/jeffohh">@jeffohh</Link>),
                    Yueling (Lily) Chen,
                    Ray Gan,
                    Yilun Tang,
                    Kairui Xu,
                    Warren Yan,
                    Lucas Ren,
                    JJ,
                    Yufan Lu,
                    Yuanlye Qiao,
                    and Nathan Kelley.
                    This served as one of our EAE 6100 Rapid Prototyping projects for
                    the Masters Entertainment Arts and Engineering program at the University of Utah.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Engineer, UI Animator & Designer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://kelley-n.itch.io/inferno-inc">
                            https://kelley-n.itch.io/inferno-inc<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/inferno-inc.png" alt="Inferno Inc. Title"/>
                <WorkImage src="/images/works/inferno-inc/1.png" alt="Limbo Level"/>
                <WorkImage src="/images/works/inferno-inc/2.png" alt="Task View"/>
                <WorkImage src="/images/works/inferno-inc/3.png" alt="Lust Level"/>
                <AspectRatio maxW="640px" ratio={16/9} my={4}>
                    <video controls src="/images/works/inferno-inc/4.mp4" />
                </AspectRatio>
            </Container>
        </Layout>
    )
}

export default Work