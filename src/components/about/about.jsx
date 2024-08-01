import ImgPerfil from '../../assets/foto-perfilCF.png';

export const AboutComponents = () => {
    return (
        <div id='about_me'>
            <div>
                <div>
                    <h2>Sobre mim</h2>
                </div>
                <div>
                    <div>
                        <img src={ImgPerfil} alt='foto sobre mim' />
                    </div>
                    <div>
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
                        <div>
                            <a href='./src/assets/file/cv.pdf' aria-label='Botão para curriculum' target='_blank' rel='noopener'>
                                <span>Veja meu CV</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};