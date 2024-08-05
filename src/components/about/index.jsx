import { useLayoutEffect, useRef } from 'react';
import ImgPerfil from '../../assets/foto-perfilCF.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DivImgAbout, DivLinkTextAbout, DivTextAbout, DivTextImgAbout, SectionAbout } from '../style/aboutstyle';
import { LinkNav } from '../style/headerstyle';

export const AboutComponents = () => {
    const element = useRef();
    const elementtimeline = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.context(() => {
            elementtimeline.current = gsap.timeline({
                scrollTrigger: {
                    trigger: '#textimg',
                    scrub: true,
                    start: 'top 620px',
                    end: 'bottom 560px'
                }
            }).fromTo('#title', {
                opacity: 0,
                y: 250
            }, {
                opacity: 1,
                y: 0
            }).fromTo('#img', {
                opacity: 0,
                x: 150
            }, {
                opacity: 1,
                x: 0
            }).fromTo('#text', {
                opacity: 0,
                x: -150
            }, {
                opacity: 1,
                x: 0
            })
        }, element);

        return () => {
            gsap.killTweensOf('#textimg');
        };
    }, []);
    return (
        <SectionAbout id='about_me' ref={element}>
            <h3 id='title'>Sobre mim</h3>
            <DivTextImgAbout id='textimg'>
                <DivImgAbout id='img'>
                    <img src={ImgPerfil} alt='foto sobre mim' />
                </DivImgAbout>
                <DivTextAbout id='text'>
                    <p>
                        <strong>Olá! Me chamo Humberto Ribeiro e sou um desenvolvedor Full-Stack em formação! 📚</strong>
                        Gosto MUITO da área de tecnologia, e tenho certeza que posso contribuir em qualquer time com as minhas habilidades.
                    </p>
                    <p>
                        Sou técnico em Telecomunicações e Dev. em sistema Web 👨‍🎓. Estou sempre me desafiando com novos projetos e participando de comunidades de programação para buscar feedback de outros desenvolvedoras e desenvolvedores. Além de tentar ajudar essas pessoas com o que eu já aprendi. 😁
                    </p>
                    <p>
                        Ah, gosto de jogos, filmes, séries, animes e outras nerdices. 💜
                    </p>
                    <DivLinkTextAbout>
                        <LinkNav href='./src/assets/file/cv.pdf' aria-label='Botão para curriculum' target='_blank' rel='noopener'>
                            <span>Veja meu CV</span>
                        </LinkNav>
                    </DivLinkTextAbout>
                </DivTextAbout>
            </DivTextImgAbout>
        </SectionAbout>
    );
};