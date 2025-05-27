import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Dice Time!">
            <Container maxW="container.sm">
                <Title>
                    Dice Time! <Badge>2024</Badge>
                </Title>
                <P>
                    Welcome to Dice Time! Compete against other players in gamemodes and roll your way to the top of the island.
                    Play it solo, duo, or squad — first team to the summit wins!
                </P>
                <br></br>
                <P>
                    Currently a work-in-progress!
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Solo Game Developer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.roblox.com/games/9562347216/Dice-Time">
                            https://www.roblox.com/games/9562347216/Dice-Time <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>PC</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/dice-time.png" alt="Dice Time"/>
            </Container>
        </Layout>
    )
}

export default Work