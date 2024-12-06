import { useEffect, useRef } from 'react';
import {
    DivImgAbout,
    DivLinkTextAbout,
    DivTextAbout,
    DivTextImgAbout,
    SectionAbout
} from '../style/aboutstyle';
import { LinkNav } from '../style/headerstyle';
import ImgPerfil from '../../assets/foto-perfilCF.png';
import CurricuLum from '../../assets/file/cv.pdf';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutComponents = () => {
    const aboutRef = useRef({});
    const titleAboutRef = useRef({});
    const imageAboutRef = useRef({});
    const textAboutRef = useRef({});

    useEffect(() => {
        const about = aboutRef.current;
        const titleAbout = titleAboutRef.current;
        const imageAbou = imageAboutRef.current;
        const textAbou = textAboutRef.current;

        gsap.fromTo(titleAbout, {
            opacity: 0,
            y: 200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: about,
                start: 'top center',
            },
        });

        gsap.fromTo(imageAbou, {
            opacity: 0,
            x: 200,
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: about,
                start: 'top center',
            },
        });

        gsap.fromTo(textAbou, {
            opacity: 0,
            x: -200,
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: about,
                start: 'top center',
            },
        });
    }, []);

    return (
        <SectionAbout
            id='about_me'
            ref={aboutRef}
        >
            <h3 ref={titleAboutRef}>
                Sobre mim
            </h3>
            <DivTextImgAbout>
                <DivImgAbout ref={imageAboutRef}>
                    <img
                        src={ImgPerfil}
                        alt='foto sobre mim'
                    />
                </DivImgAbout>
                <DivTextAbout ref={textAboutRef}>
                    <p>
                        <strong>Olá! Me chamo Humberto Ribeiro e sou um desenvolvedor
                            Full-Stack em formação! 📚</strong>
                        Gosto MUITO da área de tecnologia, e tenho certeza que posso
                        contribuir em qualquer time com as minhas habilidades.
                    </p>
                    <p>
                        Sou técnico em Telecomunicações e Dev. em sistema Web 👨‍🎓.
                        Estou sempre me desafiando com novos projetos e participando
                        de comunidades de programação para buscar feedback de outros
                        desenvolvedoras e desenvolvedores. Além de tentar ajudar
                        essas pessoas com o que eu já aprendi. 😁
                    </p>
                    <p>
                        Ah, gosto de jogos, filmes, séries, animes e outras nerdices. 💜
                    </p>
                    <DivLinkTextAbout>
                        <LinkNav
                            href={CurricuLum}
                            aria-label='Botão para curriculum'
                            target='_blank'
                            rel='noopener'
                        >
                            <span>
                                Veja meu CV
                            </span>
                        </LinkNav>
                    </DivLinkTextAbout>
                </DivTextAbout>
            </DivTextImgAbout>
        </SectionAbout>
    );
};