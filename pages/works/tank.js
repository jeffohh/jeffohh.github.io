import { Container, Badge, Link, List, ListItem, AspectRatio } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Tank: War of Walls">
            <Container maxW="container.sm">
                <Title>
                Tank: War of Walls <Badge>2025</Badge>
                </Title>
                <P>
                    Step into the arena in Trap Tank, a fast-paced reimagining of Atari's classic Tank (1974).
                    You have 2 minutes to destroy as many enemy tanks as possible—but it's not just about firepower!
                </P>
                <br></br>
                <P>
                    Tank: War of Walls was a 3-week project created in collaboration of
                    Shuowei Wu,
                    Yunzheng Cai,
                    Jeffrey Le (<Link href="https://github.com/jeffohh">@jeffohh</Link>),
                    Minghao Yang (Benjamin) (<Link href="https://github.com/Benjamin5774">@Benjamin5774</Link>),
                    Karianne Hutchinson,
                    Jiawei Shao,
                    Warren Yan,
                    and Lin Lin (<Link href="https://github.com/Iliac-dot">@Iliac-dot</Link>).
                    This served as one of our EAE 6100 Rapid Prototyping projects for
                    the Masters Entertainment Arts and Engineering program at the University of Utah.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Engineer, UI Engineer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://benjaminy.itch.io/tank">
                            https://benjaminy.itch.io/tank <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>WebGL, Android</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/tank/pitch.png" alt="Pitch"/>
                <WorkImage src="/images/works/tank.png" alt="Tank Title"/>
                <WorkImage src="/images/works/tank/1.png" alt="Map 1"/>
                <WorkImage src="/images/works/tank/2.png" alt="Victory Screen"/>
                <WorkImage src="/images/works/tank/3.png" alt="Map 2"/>
            </Container>
        </Layout>
    )
}

export default Work