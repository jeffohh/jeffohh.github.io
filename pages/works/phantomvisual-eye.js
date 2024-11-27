import { Container, Badge, Link, List, ListItem, AspectRatio } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="PhantomVisual's Eye">
            <Container maxW="container.sm">
                <Title>
                PhantomVisual's Eye <Badge>2018</Badge>
                </Title>
                <P>
                    PhantomVisual's Eye (alias PVEye) is an open source project released in 2018 in which
                    users can deploy it in their own experiences to monitor exploiters through screen spectating
                    and client-side data. It's goal was to promote fair play throughout ROBLOX games.
                    Throughout its years of deployment, it has been used in over 1000+ experiences.
                </P>
                <br></br>
                <P>
                    PVEye provides a simple interface to monitor exploiters, allowing users to spectate players'
                    camera position, cursor position, and mouse/keyboard inputs. Additionally, each player sends
                    client-side data which gets passed to the server for verification.
                </P>
                <br></br>
                <P>
                    PVEye started out as a small closed project, deployed for the group Mesmer and Daedalus Senate.
                    It then gained traction after flagging a few exploiters publicly. Shortly after, the project released for
                    public use and was maintained until early 2019.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Scripter and UI Designer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://create.roblox.com/store/asset/2222057402/PhantomVisuals-Eye">
                            https://create.roblox.com/store/asset/2222057402/PhantomVisuals-Eye<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>ROBLOX</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/pveye.png" alt="PVEye UI"/>
            </Container>
        </Layout>
    )
}

export default Work