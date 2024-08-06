import { useRef } from 'react';
import ImgPerfil from '../../assets/foto-perfilCF.png';
import { DivImgAbout, DivLinkTextAbout, DivTextAbout, DivTextImgAbout, SectionAbout } from '../style/aboutstyle';
import { LinkNav } from '../style/headerstyle';

export const AboutComponents = () => {
    const element = useRef();

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