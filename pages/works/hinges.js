import { Container, Badge, Link, List, ListItem, AspectRatio, SimpleGrid, Box, Heading, Stack, Text } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const TEAM = {
    Art: [
        { name: 'Jiawei "Tony" Shao' },
        { name: "Yichen Yang" },
        { name: "Ziyue Chang" },
    ],
    "Tech Art": [
        { name: "Rachel Buzarde" },
        { name: "Yutian Lei" },
        { name: "Grace Stewart" },
    ],
    Engineering: [
        { name: "Hayes Geldmacher" },
        {
            name: "Jeffrey Le",
            github: "https://github.com/jeffohh",
        },
        { name: "Angelina Bologna" },
        { name: "Ethan Bock" },
        { name: 'Zimo "Andrea" Huang' },
    ],
    Design: [
        { name: 'Murong "Juno" Jing' },
        { name: "Alfred An" },
        { name: "Yurui Leng" },
    ],
    Production: [
        { name: "Kyle Vest" },
        { name: "Eric Chen" },
    ],
};

const Work = () => {
    return (
        <Layout title="Hinges">
            <Container maxW="container.sm">
                <Title>
                Hinges <Badge>2026</Badge>
                </Title>
                <P>
                    Hinges is an alternative controller game that uses a real physical door as the main controller.
                </P>
                <br></br>
                <P>
                    In the game, you play as the night security guard of a small motel in a remote town.
                    By physically opening, closing, and unlocking the door, and other interactions with the door,
                    you investigate strange rooms and search for the cause of the motel's unusually high water and
                    electricity bills, as well as the mysterious abnormalities hidden inside the rooms.
                </P>
                <br></br>
                <P>
                    Every action you take at the door directly affects what happens in the game,
                    turning simple everyday movements into tense, meaningful decisions.
                </P>
                <br></br>
                <P>
                    Hinges was a semester long project created in collaboration of Peephole Interactive.
                    This served as our final GAMES 6110 Game Studio project for
                    the Masters Entertainment Arts and Engineering program at the University of Utah.
                </P>
                <br></br>
                <Box>
                    <Heading align="center" size="md" mb={6}>
                        Peephole Interactive
                    </Heading>

                    <Stack gap={4}>
                        {Object.entries(TEAM).map(([discipline, members]) => (
                            <SimpleGrid
                                key={discipline}
                                columns={{ base: 1, md: 2 }}
                                columnGap={8}
                            >
                                <Text
                                    fontWeight="bold"
                                    color="orange.300"
                                    textTransform="uppercase"
                                    fontSize="sm"
                                >
                                    {discipline}
                                </Text>

                                <Stack gap={0}>
                                    {members.map((member) => (
                                        <P key={member.name} color="gray.300">
                                            {member.github ? (
                                                <>
                                                    {member.name} (
                                                    <Link href={member.github} isExternal>
                                                        @jeffohh
                                                    </Link>
                                                    )
                                                </>
                                            ) : (
                                                member.name
                                            )}
                                        </P>
                                    ))}
                                </Stack>
                            </SimpleGrid>
                        ))}
                    </Stack>
                </Box>
                
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Hardware Engineer & Hardware Designer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/hayesGeldmacher/Hinges">
                            https://github.com/hayesGeldmacher/Hinges<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Alternative Controller</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/hinges/pitch.png" alt="Hinges Pitch Poster"/>
                <WorkImage src="/images/works/hinges.png" alt="Hinges Poster"/>
                <AspectRatio maxW="640px" ratio={16/9} my={4}>
                    <iframe width="1128" height="644"
                    src="https://www.youtube.com/embed/I29hsZMN4ho"
                    title="Radio Loaded - Trailer"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                    </iframe>
                </AspectRatio>
                <AspectRatio maxW="640px" ratio={16/9} my={4}>
                    <iframe width="1128" height="644"
                    src="https://www.youtube.com/embed/OF54tLG44Ok"
                    title="Radio Loaded - Trailer"
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