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
                !pveye v2 <Badge>2025</Badge>
                </Title>
                <P>
                    PVEye is an open-source tool designed to watch a player's screen in real time to improve moderation,
                    ensure fair play, and enhance the spectating experience. Originally created to help detect cheaters,
                    PVEye now focuses on smooth, optimized screen viewing — with built-in support for basic cheat detection
                    like hitbox expanding.
                </P>
                <P>
                    !pveye v2 is the predecessor from my original PhantomVisual's Eye. It contains many improvements from the old version,
                    including creation of Broadcaster API to improve the structure of my code, Blink networking to improve client-server
                    network traffic, smart spectating streaming to stream data only when needed, usage of LemonSignal for clean code architecture,
                    and a clean new UI interface.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Scripter and UI Designer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://create.roblox.com/store/asset/109531212110960/pveye-v2">
                            https://create.roblox.com/store/asset/109531212110960/pveye-v2<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>ROBLOX</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/pveye-v2.png" alt="PVEye v2 UI"/>
                <AspectRatio maxW="640px" ratio={16/9} my={4}>
                    <video controls src="/images/works/pveye-v2/1.mp4" />
                </AspectRatio>
            </Container>
        </Layout>
    )
}

export default Work