import { Badge, Code, Container, Flex, Heading, Image, Button, Box, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import NextLink from 'next/link'
import Layout from '../../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'

const UISystemWriteup = () => (
    <Layout title="UI System Writeup">
        <Container maxW="container.sm">
            <Title parent="Posts" href="/posts">
                UI System Writeup <Badge>2026</Badge>
            </Title>
            <P>
                As part of GAMES 6320 Game Engineering II's project, we were to build our
                own game engine from the ground up. A task we were given was to extend the
                game engine with our own system such that our peers could use to implement
                into their own engine and use to create their own game.
            </P>

            <Heading as="h4" fontSize={18} mt={6} mb={3}>
                Requirements
            </Heading>
            <UnorderedList paddingLeft={4} ml={4} my={4}>
                <ListItem>
                    Dependency on Graphics project
                </ListItem>
                <ListItem>
                    Rendering Bits Support
                </ListItem>
            </UnorderedList>
            
            <Heading as="h4" fontSize={18} mt={6} mb={3}>
                Installation
            </Heading>
            <Text>
                To install, download the <Code>UI.zip</Code> file using the link below.
                The project comes with:
            </Text>
            <UnorderedList paddingLeft={4} ml={4} my={4}>
                <ListItem>
                    <Text>A UI folder that represents the UI project
                    you add to your Visual Studio Solution</Text>
                </ListItem>
                <ListItem>
                    <Code>uiQuad.lua</Code>, a normalized mesh used for rendering box frames
                </ListItem>
                <ListItem>
                    <Code>Fonts/...</Code>, mesh representations of letters
                </ListItem>
                <ListItem>
                    <Code>Vertex/uiFrame.shader</Code>, a shader used to translate uiQuad to screen space
                </ListItem>
                <ListItem>
                    <Code>Fragment/uiFrame.shader</Code>, a shader used to color UI
                </ListItem>
            </UnorderedList>

            <Flex gap={4} align="center">
                <Image src="/images/posts/ui-system-writeup/directory-1.png" alt="Directory Image 1" width="50%" />
                <Image src="/images/posts/ui-system-writeup/directory-2.png" alt="Directory Image 2" width="50%" />
            </Flex>

            <Box align="center" my={4}>
                <NextLink href={"/posts"} target='_blank'>
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
                        Google Drive Download (.zip)
                    </Button>
                </NextLink>
            </Box>
            <Heading as="h5" fontSize={16} mt={6} mb={3}>
                Updating <Code>AssetsToBuild.lua</Code>
            </Heading>
            <Text>
                
            </Text>
        </Container>
    </Layout>
)

export default UISystemWriteup
