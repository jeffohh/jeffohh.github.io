import NextLink from 'next/link'
import { 
    Button,
    Container, 
    Box, 
    Heading, 
    Image, 
    Link,
    List,
    ListItem,
    Icon,
    Text,
    useColorModeValue,
    chakra,
    Badge
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import {
    SiRoblox,
    SiGithub,
    SiLinkedin,
    SiYoutube
} from 'react-icons/si'
import { Meta } from "../components/work"


const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = ( ) => {
    return (
        <Layout>
            <Container maxW="container.sm">
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Welcome to my Portfolio!<br/><hr style={{margin: "10px 0 10px 0"}}/>I do scripting commissions and run my own ROBLOX studio called&nbsp;
                    <Link href="https://www.roblox.com/groups/3050300/Sky-Lantern" target='_blank'>
                        Sky Lantern
                    </Link>!
                </Box>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Jeffrey B. Le
                        </Heading>
                        <p>Computer Science Undergraduate</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Box
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            w="100px"
                            h="100px"
                            display="inline-block"
                            borderRadius="full"
                            overflow="hidden"
                        >
                            <ProfileImage
                                src="/images/icons/profile.png"
                                alt="Profile Image"
                                borderRadius="full"
                                width="100"
                                height="100"
                            />
                        </Box>
                    </Box>
                </Box>


                <Section delay={0.1}>

                    <Heading as="h3" variant="section-title">
                        About Me
                    </Heading>
                    <Paragraph>
                        I&apos;ve been a ROBLOX Developer since 2016 and have done various commissions involving
                        raycasting gun systems, gamemode systems (Team Deathmatch, Domination, Gun Game, Control Point, Payload,
                        Capture the Flag, etc.), and graphical user interfaces for management and game design.
                    </Paragraph>
                    <br></br>
                    <Paragraph>
                        I am currently studying at the University of Utah as an undergraduate, pursuing a Bachelors in Computer Science
                        with Entertainment Arts and Engineering Empahsis. 
                    </Paragraph>
                    <br></br>
                    <Paragraph>
                        I love designing games and am excited to apply what I learn in university into my future games/software.
                    </Paragraph>

                    <Box align="center" my={4}>
                        <NextLink scroll={false} href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
                                See Portfolio
                            </Button>
                        </NextLink>
                    </Box>

                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Associates of Computer Science at Salt Lake Community College.
                    </BioSection>
                    <BioSection>
                        <BioYear>2025</BioYear>
                        Bachelors of Computer Science with Entertainment Arts and Engineering Emphasis at University of Utah.
                        <Text align="center" mr={20} textIndent="0em" paddingLeft="0em">
                            <Badge><Link href="https://handbook.cs.utah.edu/2023-2024/CS/Academics/tracks.php" pl={2} pr={2} target="_blank">Tracks</Link></Badge>
                        </Text>
                        <Text textIndent="0em" paddingLeft="0em">
                            <Meta>Software Development</Meta>
                            <Meta>Computer Systems</Meta>
                            <Meta>Programming Languages</Meta>
                        </Text>
                    </BioSection>
                    <BioSection>
                        <BioYear>2027</BioYear>
                        Masters of Entertainment Arts and Engineering (Engineering Track) at University of Utah.
                    </BioSection>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Hobbies 😎
                    </Heading>
                    <Paragraph>
                        Developing Games, Drawing, Violin, Guitar, Photography, Freestyle Skateboarding
                    </Paragraph>
                </Section>
                
                <Section delay={0.5}>
                    <Heading as="h3" variant="section-title">
                        Socials
                    </Heading>
                    <List>

                        <ListItem>
                            <Link href='https://github.com/jeffohh' target='_blank'>
                                <Button
                                    variant="ghost"
                                    colorScheme='teal'
                                    leftIcon={<Icon as={SiGithub}/>}
                                >
                                    @jeffohh
                                </Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href='https://www.roblox.com/users/15912341/profile' target='_blank'>
                                <Button
                                    variant="ghost"
                                    colorScheme='teal'
                                    leftIcon={<Icon as={SiRoblox}/>}
                                >
                                    @PhantomVisual
                                </Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href='https://www.linkedin.com/in/jeffrey-brandon-le/' target='_blank'>
                                <Button
                                    variant="ghost"
                                    colorScheme='teal'
                                    leftIcon={<Icon as={SiLinkedin}/>}
                                >
                                    @jeffrey-brandon-le
                                </Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href='https://www.youtube.com/@jellohh' target='_blank'>
                                <Button
                                    variant="ghost"
                                    colorScheme='teal'
                                    leftIcon={<Icon as={SiYoutube}/>}
                                >
                                    @jellohh
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page