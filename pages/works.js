import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem, GroupGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbDinosTD from '../public/images/works/dinos-td.png'
import thumbRadioLoaded from '../public/images/works/radio-loaded.png'
import thumbWonderland from '../public/images/works/wonderland.png'
import thumbAceslinger from '../public/images/works/aceslinger.png'
import thumbZippah from '../public/images/works/zippah.png'

import thumbKitchenKiller from '../public/images/works/kitchen-killer.png'
import thumbSpriteEditor from '../public/images/works/sprite-editor.png'
import thumbPVEye from '../public/images/works/pveye.png'

import iconSkyLantern from '../public/images/icons/sky-lantern.png'
import iconDaedalusSenate from '../public/images/icons/daedalus-senate.png'

import iconArvorianConfederation from '../public/images/icons/arvorian-confederation.png'
import iconNightfallClan from '../public/images/icons/nightfall-clan.png'
import iconRSF from '../public/images/icons/rsf.png'
import iconOutlawPosse from '../public/images/icons/outlaw-posse.png'
import iconMesmer from '../public/images/icons/mesmer.png'
import iconDominionOfValyria from '../public/images/icons/dominion-of-valyria.png'
import iconVestarianRepublic from '../public/images/icons/vestarian-republic.png'
import iconReignOfChaos from '../public/images/icons/reign-of-chaos.png'

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
                            <WorkGridItem id="dinos-td" title="Dinos TD" thumbnail={thumbDinosTD}>
                                A dinosaur-themed tower defense game.
                            </WorkGridItem>
                        </Section>
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
                            <WorkGridItem id="aceslinger" title="Aceslinger" thumbnail={thumbAceslinger}>
                                A multiplayer western-themed combat game.
                            </WorkGridItem>
                        </Section>
                        <Section>
                            <WorkGridItem id="zippah" title="Zippah" thumbnail={thumbZippah}>
                                A local-multiplayer dice game.
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
                        <Section>
                            <WorkGridItem id="phantomvisual-eye" title="PhantomVisual's Eye" thumbnail={thumbPVEye}>
                                An exploit-monitoring deployable app.
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
                            <GroupGridItem id="sky-lantern" thumbnail={iconSkyLantern}>
                                Sky Lantern
                            </GroupGridItem>
                        </Section>
                        <Section>
                            <GroupGridItem id="daedalus-senate" thumbnail={iconDaedalusSenate}>
                                Daedalus Senate
                            </GroupGridItem>
                        </Section>
                        <Section>
                            <GroupGridItem id="arvorian-confederation" thumbnail={iconArvorianConfederation}>
                                Arvorian Confederation
                            </GroupGridItem>
                        </Section>
                        <Section>
                            <GroupGridItem id="nightfall-clan" thumbnail={iconNightfallClan}>
                                Nightfall Clan
                            </GroupGridItem>
                        </Section>
                        <Section>
                            <GroupGridItem id="rsf" thumbnail={iconRSF}>
                                RSF
                            </GroupGridItem>
                        </Section>
                        <Section>
                            <GroupGridItem id="outlaw-posse" thumbnail={iconOutlawPosse}>
                                Outlaw Posse
                            </GroupGridItem>
                        </Section>
                        <Section>
                            <GroupGridItem id="mesmer" thumbnail={iconMesmer}>
                                Mesmer
                            </GroupGridItem>
                        </Section>
                        <Section>
                            <GroupGridItem id="dominion-of-valyria" thumbnail={iconDominionOfValyria}>
                                Dominion of Valyria
                            </GroupGridItem>
                        </Section>
                        <Section>
                            <GroupGridItem id="vestarian-republic" thumbnail={iconVestarianRepublic}>
                                Vestarian Republic
                            </GroupGridItem>
                        </Section>
                        <Section>
                            <GroupGridItem id="reign-of-chaos" thumbnail={iconReignOfChaos}>
                                Reign of Chaos
                            </GroupGridItem>
                        </Section>
                    </SimpleGrid>
                </Section>

            </Container>
        </Layout>
    )
}

export default Works