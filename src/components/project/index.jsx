import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import LogoBfn from '../../assets/LOGOBFN.png';
import {
    DivDivProjects,
    DivProjectsBack,
    DivProjectsFront,
    DivSectionProjects,
    LinkProjects,
    ParagraphPrimary,
    ParagraphSecondary,
    SectionProjects,
    SpanDivLinks
} from '../style/projectsstyle';

const projects = [
    {
        id: 'consultorio-app',
        github: 'https://github.com/HumbertoFox/consultorio-app',
        live: 'https://consultorio-app.vercel.app/',
        description: 'Projeto desenvolvido com Next.js, CSS, TypeScript, PostgreSql >> Vercel <<',
        title: 'Projeto App Consultório'
    },
    {
        id: 'project-nextjs',
        github: 'https://github.com/HumbertoFox/nextjs-dashboard',
        live: 'https://nextjs-dashboard-betofoxnet-info-projects.vercel.app/',
        description: 'Projeto desenvolvido com Framework Next.Js, Tailwind, TypeScript e PostgreSql, >> Vercel <<',
        title: 'Projeto FullStack Next.Js 15'
    },
    {
        id: 'pizzaria-app',
        github: 'https://github.com/HumbertoFox/pizzaria',
        live: 'https://pizzaria-beige-seven.vercel.app/',
        description: 'Projeto desenvolvido com Framework, Tailwind e TypeScript, >> Vercel <<',
        title: 'Projeto de Teste Pessoal de Pizzaria'
    },
    {
        id: 'project-Donations',
        github: 'https://github.com/HumbertoFox/donations-app',
        live: 'https://donations-app-donationsapp.up.railway.app/',
        description: 'Projeto desenvolvido com Framework, Laravel + Vite, Tailwind e PostgreSql, >> Railway <<',
        title: 'Projeto pessoal gestão de coleta de Doações'
    },
    {
        id: 'project-pokedex',
        github: 'https://github.com/HumbertoFox/exercicio-quest05',
        live: 'https://exercicio-quest05.vercel.app/',
        description: 'Projeto desenvolvido com HTML, CSS, JavaScript, API, React+Vite, >> Velcel <<',
        title: 'Projeto de Teste Dev em Dobro PokéDex'
    },
    {
        id: 'donationsvite-app',
        github: 'https://github.com/HumbertoFox/projeto-0-react',
        live: 'https://projeto-0-react.vercel.app/',
        description: 'Projeto desenvolvido com React+Vite HTML, CSS, JavaScript, >> Vercel <<',
        title: 'Projeto App Cadastro de Doadores e Doação'
    },
    {
        id: 'filmes-app',
        github: 'https://github.com/HumbertoFox/films-app/',
        live: 'https://films-app-betofoxnet-info-projects.vercel.app/',
        description: 'Projeto desenvolvido com React+next HTML, CSS, TypeScript, >> Vercel <<',
        title: 'Projeto de teste Consumo de Api'
    },
    {
        id: 'donationsnext-app',
        github: 'https://github.com/HumbertoFox/curso-laravel',
        live: 'https://curso-laravel-production.up.railway.app/',
        description: 'Projeto desenvolvido com Laravel + vite HTML, CSS, PHP, BootStrap, PostgreSql >> Railway <<',
        title: 'Projeto de Teste para Registro de Doações'
    },
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