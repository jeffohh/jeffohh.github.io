import { Container, Badge, Link, List, ListItem, AspectRatio } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Tanaka's Day">
            <Container maxW="container.sm">
                <Title>
                Tanaka's Day <Badge>2025</Badge>
                </Title>
                <P>
                    Tanaka's Day is a narrative-driven prototype about repetition, doubt, and the quiet weight of perfectionism. 
                </P>
                <br></br>
                <P>
                    You play as Tanaka Ryo, a finance clerk working late at the Arisaka Corporation.
                    The task seems simple — sort, approve, or reject incoming documents according to strict company rules.
                    Every decimal must be exact, every signature must be clear, every stamp perfectly placed. 
                </P>
                <br></br>
                <P>
                    But as time passes, Tanaka's thoughts begin to loop.
                    Did I check that number? Was the stamp straight?
                    Maybe I should look again.
                    The longer you work, the harder it becomes to separate duty from compulsion. 
                </P>
                <br></br>
                <P>
                    This short experience aims to give players a glimpse into the mental cycles experienced by those with Obsessive-Compulsive Disorder (OCD) — the constant urge to recheck, the fear of mistakes, and the exhaustion of never feeling done.
                </P>
                <br></br>
                <P>
                    Tanaka's Day was a 3-week project created in collaboration of
                    Lexie,
                    Lexuan (Price) Chen,
                    Xiangyu (Raphael) Shi,
                    Jeffrey Le  (<Link href="https://github.com/jeffohh">@jeffohh</Link>),
                    Kedar Wakade,
                    Kaustubh Ranbhidkar,
                    and Kairui Xu.
                    This served as one of our EAE 6100 Rapid Prototyping projects for
                    the Masters Entertainment Arts and Engineering program at the University of Utah.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Engineer, UI Animator & Engineer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://nexiie.itch.io/tanakas-day">
                            https://nexiie.itch.io/tanakas-day<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/tanakas-day/pitch.jpg" alt="Pitch"/>
                <WorkImage src="/images/works/tanakas-day.png" alt="Tanaka Title"/>
                <WorkImage src="/images/works/tanakas-day/1.png" alt="TV Environment"/>
                <WorkImage src="/images/works/tanakas-day/2.png" alt="Desk Environment"/>
                <WorkImage src="/images/works/tanakas-day/3.png" alt="Office Environment"/>
            </Container>
        </Layout>
    )
}

export default Work