import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Aceslinger">
            <Container maxW="container.sm">
                <Title>
                    Aceslinger <Badge>2019</Badge>
                </Title>
                <P>
                    Duel your enemies, gain money, and collect and trade guns! Venture to become the richest, baddest gunslinger in the West!
                </P>
                <br></br>
                <P>
                    This project was a summer project I solo developed and released in 2019!
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Solo Game Developer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.roblox.com/games/3467066236/Aceslinger">
                            https://www.roblox.com/games/3467066236/Aceslinger <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>PC/Xbox/Mobile</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/aceslinger.png" alt="Aceslinger"/>
            </Container>
        </Layout>
    )
}

export default Work