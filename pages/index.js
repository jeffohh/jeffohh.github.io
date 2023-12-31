import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    Link,
    useColorModeValue, 
    Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'

const Page = ( ) => {
    return (
        <Layout>
            <Container>
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
                </Box>

                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/icons/profile.png"
                        alt="Profile Image"
                    />
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
                        I love designing games and am excited to apply what I learn in university into my future games.
                    </Paragraph>

                    <Box align="center" my={4}>
                        <NextLink href="/works">
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
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Hobbies 😎
                    </Heading>
                    <Paragraph>
                        Developing Games, Drawing, Violin, Guitar, Photography, Freestyle Skateboarding
                    </Paragraph>
                </Section>
                
            </Container>
        </Layout>
    )
}

export default Page