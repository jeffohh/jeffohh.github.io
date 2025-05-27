import { Container, Badge, Link, List, ListItem, AspectRatio } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Dinos TD">
            <Container maxW="container.sm">
                <Title>
                    Dinos TD <Badge>2025</Badge>
                </Title>
                <P>
                    Prepare for prehistoric pandemonium as you command a dinosaur herd against an insect invasion!
                    Control the battlefield by drawing paths, setting traps, and charting biomes.
                    Discover a diverse cast of dinosaurs with a range of unique abilities.
                    Get ready for a primordial tower-defense adventure! 
                </P>
                <br></br>
                <P>
                    Dinos TD was made under the Cretaceous Creations LLC which consists of 30+ EAE University students in
                    collaboration. This served as our capstone project for the Entertainment Arts and Engineering program
                    at the University of Utah.
                </P>
                <br></br>
                <P>
                    I initially worked as an Engineer doing prototyping and system designing. Towards the second half of the
                    project, I worked primarily as the lead UI designer in which I layed out, animated, and engineered most of
                    the project's UI.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Lead UI Designer & Animator, Engineer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://store.steampowered.com/app/3533920/Dinos_TD/">
                            https://store.steampowered.com/app/3533920/Dinos_TD/<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Steam, Windows</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/dinos-td.png" alt="Dinos TD"/>
                <AspectRatio maxW="640px" ratio={16/9} my={4}>
                    <iframe width="1128" height="644"
                    src="https://www.youtube.com/embed/hnaRhhj8leE"
                    title="Dinos TD Launch Trailer"
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