import { useEffect, useRef } from 'react';
import { DivImgAbout, DivLinkTextAbout, DivTextAbout, DivTextImgAbout, SectionAbout } from '../style/aboutstyle';
import { LinkNav } from '../style/headerstyle';
import ImgPerfil from '../../assets/foto-perfilCF.png';
import CurricuLum from '../../assets/file/cv.pdf';

export const AboutComponents = () => {
    const selectAnimations = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const windowTop = window.pageYOffset + window.innerHeight * 0.4;
            const animations = selectAnimations.current.querySelectorAll('[data-animation]');

            animations.forEach(animation => {
                if (windowTop > animation.offsetTop) {
                    animation.classList.add('animation');
                } else {
                    animation.classList.remove('animation');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <SectionAbout id='about_me' ref={selectAnimations}>
            <h3 className='animation' data-animation="up">Sobre mim</h3>
            <DivTextImgAbout>
                <DivImgAbout className='animation' data-animation="right">
                    <img src={ImgPerfil} alt='foto sobre mim' />
                </DivImgAbout>
                <DivTextAbout className='animation' data-animation="left">
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
                        <LinkNav href={CurricuLum} aria-label='Botão para curriculum' target='_blank' rel='noopener'>
                            <span>Veja meu CV</span>
                        </LinkNav>
                    </DivLinkTextAbout>
                </DivTextAbout>
            </DivTextImgAbout>
        </SectionAbout>
    );
};