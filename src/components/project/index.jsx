import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import LogoBfn from '../../assets/LOGOBFN.png';
import { DivDivProjects, DivProjectsBack, DivProjectsFront, DivSectionProjects, LinkProjects, ParagraphPrimary, ParagraphSecondary, SectionProjects, SpanDivLinks } from '../style/projectsstyle';

export const ProjectsComponents = () => {
    return (
        <SectionProjects id='projects'>
            <h5>Meus projetos</h5>

            <DivSectionProjects>
                <DivDivProjects>
                    <DivProjectsFront>
                        <LinkProjects href='https://github.com/HumbertoFox/projeto-1-react' target='_blank' rel='noopener'>
                            <img src={LogoBfn} alt='Logo BetoFoxNet_Info' />
                            <SpanDivLinks>BetoFoxNet_Info</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido por Humberto Ribeiro 😎</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Pages</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack>
                        <LinkProjects href='https://projeto-1-react.vercel.app/' target='_blank' rel='noopener'>
                        <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto App Consultório</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com React+Vite HTML, CSS e JavaScript</ParagraphPrimary>
                                <ParagraphSecondary>🔗 Ver no GitHub Pages</ParagraphSecondary>
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
                                <ParagraphSecondary>🔗 GitHub Pages</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack>
                        <LinkProjects href='https://humbertofox.github.io/interactive-card-details-form/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto Interative Card FrontEnd</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com HTML, CSS e JavaScript.</ParagraphPrimary>
                                <ParagraphSecondary>🔗 Ver no GitHub Pages</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsBack>
                </DivDivProjects>

                <DivDivProjects>
                    <DivProjectsFront>
                        <LinkProjects href='https://github.com/HumbertoFox/Interactive-rating-component' target='_blank' rel='noopener'>
                            <img src={LogoBfn} alt='Logo BetoFoxNet_Info' />
                            <SpanDivLinks>BetoFoxNet_Info</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido por Humberto Ribeiro 😎</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Pages</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack>
                        <LinkProjects href='https://humbertofox.github.io/Interactive-rating-component/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto de teste para o Frontend Mentor</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com HTML, CSS e JavaScript.</ParagraphPrimary>
                                <ParagraphSecondary>🔗 Ver no GitHub Pages</ParagraphSecondary>
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
                                <ParagraphSecondary>🔗 GitHub Pages</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack>
                        <LinkProjects href='https://humbertofox.github.io/advice-generator-app-solution/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto de teste para o Frontend Mentor</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com HTML, CSS, JavaScript e API gerador de conselhos.</ParagraphPrimary>
                                <ParagraphSecondary>🔗 Ver no GitHub Pages</ParagraphSecondary>
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
                                <ParagraphSecondary>🔗 GitHub Pages Versel</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack>
                        <LinkProjects href='https://exercicio-quest05.vercel.app/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto de teste Dev Em Dobro PokéDex</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com HTML, CSS, JavaScript, API, React+Vite.</ParagraphPrimary>
                                <ParagraphSecondary>🔗 Ver no GitHub Pages Versel</ParagraphSecondary>
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
                                <ParagraphSecondary>🔗 GitHub Pages</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack>
                        <LinkProjects href='https://projeto-0-react.vercel.app/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto App Cadastro de Doadores</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com React+Vite HTML, CSS, JavaScript.</ParagraphPrimary>
                                <ParagraphSecondary>🔗 Ver no GitHub Pages</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsBack>
                </DivDivProjects>

                <DivDivProjects>
                    <DivProjectsFront>
                        <LinkProjects href='https://github.com/HumbertoFox/FAQ-accordion-card' target='_blank' rel='noopener'>
                            <img src={LogoBfn} alt='Logo BetoFoxNet_Info' />
                            <SpanDivLinks>BetoFoxNet_Info</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido por Humberto Ribeiro 😎</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Pages</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack>
                        <LinkProjects href='https://humbertofox.github.io/FAQ-accordion-card/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto de teste para o Frontend Mentor</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com HTML, CSS, JavaScript.</ParagraphPrimary>
                                <ParagraphSecondary>🔗 Ver no GitHub Pages</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsBack>
                </DivDivProjects>

                <DivDivProjects>
                    <DivProjectsFront>
                        <LinkProjects href='https://github.com/HumbertoFox/intro-component-with-sign-up-form' target='_blank' rel='noopener'>
                            <img src={LogoBfn} alt='Logo BetoFoxNet_Info' />
                            <SpanDivLinks>BetoFoxNet_Info</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido por Humberto Ribeiro 😎</ParagraphPrimary>
                                <ParagraphSecondary>🔗 GitHub Pages</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsFront>
                    <DivProjectsBack>
                        <LinkProjects href='https://humbertofox.github.io/intro-component-with-sign-up-form/' target='_blank' rel='noopener'>
                            <FontAwesomeIcon icon={faGithub} />
                            <SpanDivLinks>Projeto de teste para o Frontend Mentor</SpanDivLinks>
                            <div>
                                <ParagraphPrimary>Projeto desenvolvido com HTML, CSS, JavaScript.</ParagraphPrimary>
                                <ParagraphSecondary>🔗 Ver no GitHub Pages</ParagraphSecondary>
                            </div>
                        </LinkProjects>
                    </DivProjectsBack>
                </DivDivProjects>
            </DivSectionProjects>
        </SectionProjects>
    );
};