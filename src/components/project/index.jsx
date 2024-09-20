import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import LogoBfn from '../../assets/LOGOBFN.png';
import { DivDivProjects, DivProjectsBack, DivProjectsFront, DivSectionProjects, LinkProjects, ParagraphPrimary, ParagraphSecondary, SectionProjects, SpanDivLinks } from '../style/projectsstyle';
const projects = [
    {
        id: 'consultorio-app',
        github: 'https://github.com/HumbertoFox/consultorio-app',
        live: 'https://consultorio-app.vercel.app/',
        description: 'Projeto desenvolvido com React+Vite HTML, CSS, JavaScript e TypeScript',
        title: 'Projeto App Consultório'
    },
    {
        id: 'project-frontent0',
        github: 'https://github.com/HumbertoFox/interactive-card-details-form',
        live: 'https://humbertofox.github.io/interactive-card-details-form/',
        description: 'Projeto desenvolvido com HTML, CSS e JavaScript.',
        title: 'Projeto Interative Card FrontEnd'
    },
    {
        id: 'pizzaria-app',
        github: 'https://github.com/HumbertoFox/pizzaria',
        live: 'https://pizzaria-beige-seven.vercel.app/',
        description: 'Projeto desenvolvido com HTML, CSS, JavaScript e TypeScript.',
        title: 'Projeto de Teste Pessoal de Pizzaria'
    },
    {
        id: 'project-frontent1',
        github: 'https://github.com/HumbertoFox/advice-generator-app-solution',
        live: 'https://humbertofox.github.io/advice-generator-app-solution/',
        description: 'Projeto desenvolvido com HTML, CSS, JavaScript e API gerador de conselhos.',
        title: 'Projeto de teste para o Frontend Mentor'
    },
    {
        id: 'project-pokedex',
        github: 'https://github.com/HumbertoFox/exercicio-quest05',
        live: 'https://exercicio-quest05.vercel.app/',
        description: 'Projeto desenvolvido com HTML, CSS, JavaScript, API, React+Vite.',
        title: 'Projeto de Teste Dev em Dobro PokéDex'
    },
    {
        id: 'donationsvite-app',
        github: 'https://github.com/HumbertoFox/projeto-0-react',
        live: 'https://projeto-0-react.vercel.app/',
        description: 'Projeto desenvolvido com React+Vite HTML, CSS, JavaScript.',
        title: 'Projeto App Cadastro de Doadores e Doação'
    },
    {
        id: 'filmes-app',
        github: 'https://github.com/HumbertoFox/films-app/',
        live: 'https://films-app-betofoxnet-info-projects.vercel.app/',
        description: 'Projeto desenvolvido com React+next HTML, CSS, JavaScript, TypeScript.',
        title: 'Projeto de teste Consumo de Api'
    },
    {
        id: 'donationsnext-app',
        github: 'https://github.com/HumbertoFox/donation-app/',
        live: 'https://donation-app-appdoantions.up.railway.app/',
        description: 'Projeto desenvolvido com React+next HTML, CSS, JavaScript e TypeScript.',
        title: 'Projeto de Teste para Registro de Doações'
    }
];
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
                {projects.map((project, index) => (
                    <DivDivProjects key={index}>
                        <DivProjectsFront>
                            <LinkProjects href={project.github} target='_blank' rel='noopener'>
                                <img src={LogoBfn} alt='Logo BetoFoxNet_Info' />
                                <SpanDivLinks>BetoFoxNet_Info</SpanDivLinks>
                                <div>
                                    <ParagraphPrimary>Projeto desenvolvido por Humberto Ribeiro 😎</ParagraphPrimary>
                                    <ParagraphSecondary>🔗 GitHub Repositório</ParagraphSecondary>
                                </div>
                            </LinkProjects>
                        </DivProjectsFront>
                        <DivProjectsBack className={`back${index}`}>
                            <LinkProjects href={project.live} target='_blank' rel='noopener'>
                                <FontAwesomeIcon icon={faGithub} />
                                <SpanDivLinks>{project.title}</SpanDivLinks>
                                <div>
                                    <ParagraphPrimary>{project.description}</ParagraphPrimary>
                                    <ParagraphSecondary>🔗 Page</ParagraphSecondary>
                                </div>
                            </LinkProjects>
                        </DivProjectsBack>
                    </DivDivProjects>
                ))}
            </DivSectionProjects>
        </SectionProjects>
    );
};