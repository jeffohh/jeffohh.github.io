import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Zippah">
            <Container maxW="container.sm">
                <Title>
                Zippah <Badge>2021</Badge>
                </Title>
                <P>
                    Zippah is a local multiplayer dice game in which the goal is to get as much points as possible.
                    To score points, the player must have at least 2 die that have the same face. For those die, the
                    value of that face is acumulated to produce the score. Players will take turns until the max score
                    is reached.
                </P>
                <br></br>
                <P>
                    Zippah was created in collaboration of
                    Alan Romay  (<Link href="https://github.com/romay84">@romay84</Link>),
                    Burke Vance (<Link href="https://github.com/llamacorntrundle">@llamacorntrundle</Link>),
                    Jeffrey Le  (<Link href="https://github.com/jeffohh">@jeffohh</Link>), and
                    Steve Mills (<Link href="https://github.com/G33kySt3v3">@G33kySt3v3</Link>).
                    This project served as our CSIS 1410
                    final project for the Computer Science course at Salt Lake Community College.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Engineer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/jeffohh/Zippah">
                            https://github.com/jeffohh/Zippah<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/zippah.png" alt="Zippah"/>
                <WorkImage src="/images/works/zippah/1.png" alt="Zippah-preview-1"/>
                <WorkImage src="/images/works/zippah/2.png" alt="Zippah-preview-2"/>
                <WorkImage src="/images/works/zippah/3.png" alt="Zippah-preview-3"/>
            </Container>
        </Layout>
    )
}

export default Work