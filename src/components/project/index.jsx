import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import LogoBfn from '../../assets/LOGOBFN.png';
import { DivDivProjects, DivProjectsBack, DivProjectsFront, DivSectionProjects, LinkProjects, ParagraphPrimary, ParagraphSecondary, SectionProjects, SpanDivLinks } from '../style/projectsstyle';

export const ProjectsComponents = () => {
    const selectProjectsAnimations = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            const windowProjectsTop = window.pageYOffset + window.innerHeight * .5;
            const animationsProjects = selectProjectsAnimations.current.querySelectorAll('[data-animation]');

            animationsProjects.forEach(animationProjects => {
                if (windowProjectsTop > animationProjects.offsetTop) {
                    animationProjects.classList.add('animation');
                } else {
                    animationProjects.classList.remove('animation');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <SectionProjects id='projects' ref={selectProjectsAnimations}>
            <h5 className='animation' data-animation="up">Meus projetos</h5>
            <DivSectionProjects className='animation' data-animation="left">
                <DivDivProjects>
                    <DivProjectsFront>
                        <LinkProjects href='https://github.com/HumbertoFox/consultorio-app' target='_blank' rel='noopener'>
                            <img src={LogoBfn} alt='Logo BetoFoxNet_Info' />
                            <SpanDivLinks>BetoFoxNet_Info</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido por Humberto Ribeiro 😎</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Repositório</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack className='back0'>
                        <LinkProjects href='https://consultorio-app.vercel.app/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto App Consultório</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com React+Vite HTML, CSS e JavaScript</ParagraphPrimary>
                                <ParagraphSecondary>🔗 Vercel Page</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsBack>
                </DivDivProjects>

                <DivDivProjects>
                    <DivProjectsFront>
                        <LinkProjects href='https://github.com/HumbertoFox/interactive-card-details-form' target='_blank' rel='noopener'>
                            <img src={LogoBfn} alt='Logo BetoFoxNet_Info' />
                            <SpanDivLinks>BetoFoxNet_Info</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido por Humberto Ribeiro 😎</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Repositório</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack className='back1'>
                        <LinkProjects href='https://humbertofox.github.io/interactive-card-details-form/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto Interative Card FrontEnd</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com HTML, CSS e JavaScript.</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Page</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsBack>
                </DivDivProjects>

                <DivDivProjects>
                    <DivProjectsFront>
                        <LinkProjects href='https://github.com/HumbertoFox/pizzaria' target='_blank' rel='noopener'>
                            <img src={LogoBfn} alt='Logo BetoFoxNet_Info' />
                            <SpanDivLinks>BetoFoxNet_Info</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido por Humberto Ribeiro 😎</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Repositório</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack className='back2'>
                        <LinkProjects href='https://pizzaria-beige-seven.vercel.app/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto de teste para o Frontend Mentor</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com HTML, CSS e JavaScript.</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Page</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsBack>
                </DivDivProjects>

                <DivDivProjects>
                    <DivProjectsFront>
                        <LinkProjects href='https://github.com/HumbertoFox/advice-generator-app-solution' target='_blank' rel='noopener'>
                            <img src={LogoBfn} alt='Logo BetoFoxNet_Info' />
                            <SpanDivLinks>BetoFoxNet_Info</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido por Humberto Ribeiro 😎</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Repositório</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack className='back3'>
                        <LinkProjects href='https://humbertofox.github.io/advice-generator-app-solution/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto de teste para o Frontend Mentor</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com HTML, CSS, JavaScript e API gerador de conselhos.</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Page</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsBack>
                </DivDivProjects>

                <DivDivProjects>
                    <DivProjectsFront>
                        <LinkProjects href='https://github.com/HumbertoFox/exercicio-quest05' target='_blank' rel='noopener'>
                            <img src={LogoBfn} alt='Logo BetoFoxNet_Info' />
                            <SpanDivLinks>BetoFoxNet_Info</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido por Humberto Ribeiro 😎</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Repositório</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack className='back4'>
                        <LinkProjects href='https://exercicio-quest05.vercel.app/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto de teste Dev Em Dobro PokéDex</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com HTML, CSS, JavaScript, API, React+Vite.</ParagraphPrimary>
                                <ParagraphSecondary>🔗 Versel page</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsBack>
                </DivDivProjects>

                <DivDivProjects>
                    <DivProjectsFront>
                        <LinkProjects href='https://github.com/HumbertoFox/projeto-0-react' target='_blank' rel='noopener'>
                            <img src={LogoBfn} alt='Logo BetoFoxNet_Info' />
                            <SpanDivLinks>BetoFoxNet_Info</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido por Humberto Ribeiro 😎</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Repositório</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack className='back5'>
                        <LinkProjects href='https://projeto-0-react.vercel.app/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto App Cadastro de Doadores</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com React+Vite HTML, CSS, JavaScript.</ParagraphPrimary>
                                <ParagraphSecondary>🔗 Vercel Page</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsBack>
                </DivDivProjects>

                <DivDivProjects>
                    <DivProjectsFront>
                        <LinkProjects href='https://github.com/HumbertoFox/films-app/' target='_blank' rel='noopener'>
                            <img src={LogoBfn} alt='Logo BetoFoxNet_Info' />
                            <SpanDivLinks>BetoFoxNet_Info</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido por Humberto Ribeiro 😎</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Repositório</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack className='back6'>
                        <LinkProjects href='https://films-app-betofoxnet-info-projects.vercel.app/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto de teste para o Frontend Mentor</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com HTML, CSS, JavaScript.</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Page</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsBack>
                </DivDivProjects>

                <DivDivProjects>
                    <DivProjectsFront>
                        <LinkProjects href='https://github.com/HumbertoFox/donation-app/' target='_blank' rel='noopener'>
                            <img src={LogoBfn} alt='Logo BetoFoxNet_Info' />
                            <SpanDivLinks>BetoFoxNet_Info</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido por Humberto Ribeiro 😎</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Repositório</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack className='back7'>
                        <LinkProjects href='https://donation-app-betofoxnet-info-projects.vercel.app/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto de teste para o Frontend Mentor</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com HTML, CSS, JavaScript.</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Page</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsBack>
                </DivDivProjects>
            </DivSectionProjects>
        </SectionProjects>
    );
};