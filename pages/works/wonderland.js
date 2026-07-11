import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Wonderland">
            <Container maxW="container.sm">
                <Title>
                Wonderland <Badge>2023</Badge>
                </Title>
                <P>
                    Wonderland focuses on Ava as she faces a variety of fears related to growing up, all the while experiencing symptoms of Alice in Wonderland Syndrome.
                </P>
                <br></br>
                <P>
                    Wonderland was a 3-month project created in collaboration of
                    Jeffrey Le  (<Link href="https://github.com/jeffohh">@jeffohh</Link>),
                    Cleveland Parker (<Link href="https://github.com/clevelparker">@clevelparker</Link>),
                    Rachel Kletke (<Link href="https://github.com/Nitro-circus">@Nitro-circus</Link>),
                    Felisitas M Purnomo (<Link href="https://github.com/Felice234">@Felice234</Link>), and
                    Daming Li. This served as our EAE 3720 Alternative Game Development project for
                    the Entertainment Arts and Engineering program at the University of Utah.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Lead Engineer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://thelexshow.itch.io/wonderland">
                            https://thelexshow.itch.io/wonderland <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/wonderland.png" alt="Wonderland"/>
            </Container>
        </Layout>
    )
}

export default Work