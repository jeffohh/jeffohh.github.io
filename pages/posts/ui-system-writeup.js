import { Badge, Code, Container, Divider, Flex, Heading, Image, Button, Icon, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import NextLink from 'next/link'
import Layout from '../../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import CodeBlock from '../../components/code-block'
import {
    SiGithub
} from 'react-icons/si'
import { FiTag } from 'react-icons/fi';

const UISystemWriteup = () => (
    <Layout title="UI System Writeup">
        <Container maxW="container.md">
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
                Work in progress
            </Heading>
            <Text>
                Project is missing <b>buttons</b> and doesn't support <b>hierarchies/parent-child</b>.
            </Text>

            <br></br>
            <Divider borderColor="blackAlpha.300" _dark={{ borderColor: 'whiteAlpha.300' }} />

            <Heading as="h4" fontSize={18} mt={6} mb={3}>
                Requirements
            </Heading>
            <UnorderedList paddingLeft={4} ml={4} my={4}>
                <ListItem>
                    Dependency on Graphics project
                </ListItem>
                <ListItem>
                    A high tolerance for submitting a mesh per letter
                </ListItem>
                <ListItem>
                    Render State Bits
                </ListItem>
                <ListItem>
                    Adjustments to make <Code>sUIDrawData</Code> fit your mesh and effect submission
                </ListItem>
            </UnorderedList>
            
            <Heading as="h4" fontSize={18} mt={6} mb={3}>
                Installation
            </Heading>
            <Text>
                To install, download the <Code>.zip</Code> file using the link below.
            </Text>

            <Flex justify="center" align="center" gap={3} my={5}>
                <NextLink
                    href="https://github.com/jeffohh/eae6320-ui-system"
                    target="_blank"
                >
                    <Button
                        leftIcon={<Icon as={SiGithub} />}
                        colorScheme="teal"
                    >
                        View Source
                    </Button>
                </NextLink>

                <NextLink
                    href="https://github.com/jeffohh/eae6320-ui-system/releases"
                    target="_blank"
                >
                    <Button
                        leftIcon={<Icon as={FiTag} />}
                        colorScheme="teal"
                    >
                        Releases
                    </Button>
                </NextLink>
            </Flex>

            <UnorderedList paddingLeft={4} ml={4} my={4}>
                <ListItem>
                    <Text>A UI folder that represents the UI project
                    you add to your Visual Studio Solution</Text>
                </ListItem>
                <ListItem>
                    <Code>uiQuad.lua</Code>, a normalized mesh used for rendering box frames
                </ListItem>
                <ListItem>
                    <Code>Vertex/uiFrame.shader</Code>, a shader used to translate uiQuad to screen space
                </ListItem>
                <ListItem>
                    <Code>Fragment/uiFrame.shader</Code>, a shader used to color UI
                </ListItem>

                <ListItem>
                    Font Packs
                </ListItem>

                <UnorderedList paddingLeft={4} ml={4} marginBottom={4}>
                    <ListItem>
                        Comic Sans MS
                    </ListItem>
                    <ListItem>
                        JetBrains Mono
                    </ListItem>
                </UnorderedList>
            </UnorderedList>

            
            <Flex gap={4} align="center">
                <Image src="/images/posts/ui-system-writeup/directory-1.png" alt="Directory Image 1" width="50%" />
                <Image src="/images/posts/ui-system-writeup/directory-2.png" alt="Directory Image 2" width="50%" />
            </Flex>

            <Heading as="h6" fontSize={16} mt={6} mb={3}>
                Updating <Code>AssetsToBuild.lua</Code>
            </Heading>
            <Text>
                With the addition of <Code>*.shader</Code> and <Code>*.lua</Code> meshes,
                we need to modify our <Code>AssetsToBuild.lua</Code> to build the required shaders
                and meshes for it to work. The <Code>Fonts</Code> folder has quite a lot of meshes —
                luckily, we can use Lua to append each item with code!
            </Text>
            <CodeBlock language="lua" diff>{`
local module = {
    shaders =
    {
+       { path = "Shaders/Fragment/uiFrame.shader", arguments = { "fragment" } },
+       { path = "Shaders/Vertex/uiFrame.shader", arguments = { "vertex" } },
    },

    meshes = {
+       "Meshes/uiQuad.lua",
    }
}

+for i = 33, 126 do -- dynamically add to meshes table ('!' = 33, '~' = 126)
+   module.meshes[#module.meshes + 1] = string.format( "Meshes/Fonts/%03d.lua", i )
+end

return module`}</CodeBlock>

<br></br>
<Divider borderColor="blackAlpha.300" _dark={{ borderColor: 'whiteAlpha.300' }} />

            <Heading as="h4" fontSize={18} mt={6} mb={3}>
                Quick Start
            </Heading>
<CodeBlock language="cpp">{`cResult cMyGame::Initialize() {
    // 1. Load shared UI quad mesh and shaders
    m_uiManager.Initialize();

    // 2. Creating & Adjusting a Frame
    m_frame = m_uiManager.CreateElement<UI::cUIFrame>();
    m_frame->anchorX = 0.5f; // [0.0f - 1.0f]
    m_frame->anchorY = 0.5f; // [0.0f - 1.0f]
    m_frame->position = UI:sUDim2(0.0f, 0.0f, 0.0f, 0.0f); // scaleX, offsetX, scaleY, offsetY
    m_frame->size = UI:sUDim2(0.25f, 0.0f, 0.25f, 0.0f);   // scaleX, offsetX, scaleY, offsetY
    m_frame->backgroundColor = UI::sColor::FromRGBA(255, 0, 0, 255)

    // 3. Creating & Adjusting a Label (extends cUIFrame)
    m_label = m_uiManager.CreateElement<UI::cUILabel>();
    m_label->textColor = UI::sColor::FromRGBA(255, 255, 255, 255);
    m_label->text = "hello world";         // displayed text
    m_label->textHeight = 2.0f;            // size of text
    m_label->letterSpacing = 17.0f;        // spacing between letters
    m_label->alignX = eTextAlignX::Center; // eTextAlignX::Left, eTextAlignX::Center, eTextAlignX::Right
    m_label->alignY = eTextAlignX::Center; // eTextAlignX::Top, eTextAlignX::Center, eTextAlignX::Bottom

    return Results::Success;
}

void cMyGame::SubmitDataToBeRendered(...) {
    // 4. Submit all active UI elements to Graphics
    uint16_t screenWidth, screenHeight;
    GetCurrentResolution(screenWidth, screenHeight);
    m_uiManager.Submit(screenWidth, screenHeight);
}

cResult cMyGame::CleanUp() {
    // 5. Release shared GPU resources and UI elements
    m_uiManager.CleanUp();
    return Results::Success;
}`}</CodeBlock>

            <Heading as="h4" fontSize={18} mt={6} mb={3}>
                Exporting Your Own Fonts
            </Heading>
            <Text>
                Each letter is a mesh representation of that letter. The mesh letter should be named it's ASCII encoded
                number (i.e. 'a' is <Code>097.lua</Code>, 'A' is <Code>065.lua</Code>). You can export your own letter
                mesh from Maya 2019 using the export plugin you made for it.
            </Text>
            <br></br>
            <Text>
                In Maya 2019 you need to: choose your font, type the letter you need, center the X alignment, turn off
                extrusions to make the mesh flat, and export that letter to it's according ASCII representation.
            </Text>

        </Container>
    </Layout>
)

export default UISystemWriteup
