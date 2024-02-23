import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbAceslinger from '../public/images/works/aceslinger.png'
import thumbRadioLoaded from '../public/images/works/radio-loaded.png'
import thumbWonderland from '../public/images/works/wonderland.png'

import thumbSpriteEditor from '../public/images/works/sprite-editor.png'
import thumbKitchenKiller from '../public/images/works/kitchen-killer.png'

import iconSkyLantern from '../public/images/icons/sky-lantern.png'
import iconDaedalusSenate from '../public/images/icons/daedalus-senate.png'


const Works = () => {
    return (
        <Layout>
            <Container maxW="container.sm">
                {/* Games */}
                <Section delay={0.2}>
                    <Heading as="h3" fontSize={20} mb={4}>
                        Games
                    </Heading>

                    <SimpleGrid columns={[1, 1, 2]} gap={6}>
                        <Section>
                            <WorkGridItem id="radio-loaded" title="Radio Loaded" thumbnail={thumbRadioLoaded}>
                                A rhythm based third-person shooter game.
                            </WorkGridItem>
                        </Section>
                        <Section>
                            <WorkGridItem id="wonderland" title="Wonderland" thumbnail={thumbWonderland}>
                                A puzzle horror game.
                            </WorkGridItem>
                        </Section>
                        <Section>
                            <WorkGridItem
                                id="aceslinger"
                                title="Aceslinger"
                                thumbnail={thumbAceslinger}
                            >
                                A multiplayer western-themed combat game.
                            </WorkGridItem>
                        </Section>
                    </SimpleGrid>
                </Section>

                {/* Software */}
                <Section delay={0.3}>
                    <Divider my={6}/>

                    <Heading as="h3" fontSize={20} mb={4}>
                        Software
                    </Heading>

                    <SimpleGrid columns={[1, 1, 2]} gap={6}>
                        <Section>
                            <WorkGridItem id="kitchen-killer" title="Kitchen Killer" thumbnail={thumbKitchenKiller}>
                                A asian cuisine cooking app.
                            </WorkGridItem>
                        </Section>
                        <Section>
                            <WorkGridItem id="sprite-editor" title="Sprite Editor" thumbnail={thumbSpriteEditor}>
                                A sprite editing app.
                            </WorkGridItem>
                        </Section>
                    </SimpleGrid>
                </Section>

                {/* Studio & Groups */}
                <Section delay={0.4}>
                    <Divider my={6}/>

                    <Heading as="h3" fontSize={20} mb={4}>
                        Studios & Groups
                    </Heading>

                    <SimpleGrid columns={[1, 1, 3]} gap={6}>
                        <Section>
                            <WorkGridItem id="sky-lantern" thumbnail={iconSkyLantern}>
                                Sky Lantern
                            </WorkGridItem>
                        </Section>
                        <Section>
                            <WorkGridItem id="daedalus-senate" thumbnail={iconDaedalusSenate}>
                                Daedalus Senate
                            </WorkGridItem>
                        </Section>
                    </SimpleGrid>
                </Section>

            </Container>
        </Layout>
    )
}

export default Works