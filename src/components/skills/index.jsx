import { useEffect, useRef } from 'react';
import { DivSectionSkills, DivSkills, SectionSkills } from '../style/skillsstyle';
import { Html5Original, Css3Original, JavascriptOriginal, GithubOriginal, GitOriginal, ReactOriginal, VitejsOriginal, NextjsOriginal, PostgresqlOriginal, MariadbOriginal, PhpOriginal, ExpressOriginal, PrismaOriginal } from 'devicons-react';

export const SkillsComponents = () => {
    const selectSkillsAnimations = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            const windowSkillsTop = window.pageYOffset + window.innerHeight * .5;
            const animationsSkills = selectSkillsAnimations.current.querySelectorAll('[data-animation]');

            animationsSkills.forEach(animationSkills => {
                if (windowSkillsTop > animationSkills.offsetTop) {
                    animationSkills.classList.add('animation');
                } else {
                    animationSkills.classList.remove('animation');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <SectionSkills id='skills' ref={selectSkillsAnimations}>
            <h4 className='animation' data-animation='up'>Habilidades</h4>
            <DivSectionSkills className='animation' data-animation='left'>
                <DivSkills>
                    <Html5Original size='100' />
                    <span>HTML5</span>
                    <p>HTML é a base fundamental para a criação de páginas web. Ele fornece a estrutura, a semântica e os
                        elementos necessários para apresentar informações de forma organizada e acessível na web, além de
                        permitir a criação de links e a incorporação de mídia. É uma linguagem essencial para qualquer
                        desenvolvedor web!
                    </p>
                </DivSkills>

                <DivSkills>
                    <Css3Original size='100' />
                    <span>CSS3</span>
                    <p>CSS é essencial para controlar o estilo e o design de páginas web, tornando possível criar layouts
                        atraentes, responsivos e consistentes. Ele desempenha um papel fundamental na apresentação visual de
                        conteúdo na web e é uma ferramenta essencial para desenvolvedores web e designers!
                    </p>
                </DivSkills>

                <DivSkills>
                    <JavascriptOriginal size='100' />
                    <span>JavaScript</span>
                    <p>JavaScript é uma linguagem versátil que desempenha um papel fundamental no desenvolvimento web,
                        aplicativos móveis e em uma variedade de outras aplicações. É uma das linguagens mais amplamente
                        usadas no mundo da programação devido à sua flexibilidade e capacidade de criar experiências
                        interativas na web!
                    </p>
                </DivSkills>

                <DivSkills>
                    <GithubOriginal size='100' />
                    <span>GitHub</span>
                    <p>GitHub é uma plataforma essencial para desenvolvedores de software e equipes de desenvolvimento,
                        pois facilita o controle de versão, a colaboração, o compartilhamento de código e a gestão de projetos,
                        contribuindo para a eficiência e a qualidade do desenvolvimento de software!
                    </p>
                </DivSkills>

                <DivSkills>
                    <GitOriginal size='100' />
                    <span>Git</span>
                    <p>Git é uma ferramenta fundamental no desenvolvimento de software, fornecendo controle de versão,
                        colaboração em equipe, rastreamento de alterações e muitos outros recursos que tornam o desenvolvimento
                        de software mais eficiente, seguro e colaborativo. É uma ferramenta essencial para desenvolvedores e
                        equipes de desenvolvimento de software!
                    </p>
                </DivSkills>

                <DivSkills>
                    <ReactOriginal size='100' />
                    <span>React</span>
                    <p>React é uma biblioteca JavaScript desenvolvida pelo Facebook. É usada para construir interfaces de
                        usuário (UI) interativas e reativas para aplicações web. O principal objetivo do React é facilitar a
                        criação de componentes reutilizáveis e construir interfaces de usuário escaláveis. Além disso, o React
                        introduz um paradigma de programação chamado de programação declarativa!
                    </p>
                </DivSkills>

                <DivSkills>
                    <VitejsOriginal size='100' />
                    <span>Vite.Js</span>
                    <p>Vite é uma ferramenta de construção e desenvolvimento para aplicações web, criada por Evan You, o criador do Vue.js.
                        Ele se destaca por sua velocidade e eficiência, utilizando uma abordagem moderna para o desenvolvimento de projetos.
                        Aqui estão algumas características principais do Vite:
                        1. **Desenvolvimento Rápido**, 2. **Construção Otimizada**, 3. **Suporte a Múltiplos Frameworks**
                        4. **Configuração Simples**, 5. **Plugins**
                        Se você estiver pensando em usar Vite em seu próximo projeto seria uma ótima opção!
                    </p>
                </DivSkills>

                <DivSkills>
                    <NextjsOriginal size='100' />
                    <span>Next.Js</span>
                    <p>Next.js é um framework React desenvolvido pela Vercel que facilita a criação de aplicações web.
                        Ele é conhecido por oferecer uma série de recursos que melhoram a experiência de desenvolvimento e o desempenho das aplicações.
                        Aqui estão algumas das principais características do Next.js:
                        1. **Renderização Híbrida**, 2. **Geração de Sites Estáticos (SSG)**, 3. **Rotas Automáticas**, 4. **API Routes**
                        5. **Suporte a CSS e Sass**, 6. **Otimização de Imagens**, 7. **Desempenho e SEO**, 8. **Suporte a TypeScript**
                        9. **Ambiente de Desenvolvimento**,
                        Essas características fazem do Next.js uma escolha popular para desenvolvedores que querem criar aplicações React de forma rápida e eficiente.
                    </p>
                </DivSkills>

                <DivSkills>
                    <PostgresqlOriginal size='100' />
                    <span>PostgreSql</span>
                    <p>PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto e altamente avançado.
                        Ele é conhecido por sua robustez, escalabilidade e suporte a recursos avançados.
                        Aqui estão algumas das principais características do PostgreSQL:
                        Open Source, Compatibilidade com SQL, Extensibilidade, Suporte a ACID, Suporte a tipos de dados avançados,
                        Procedimentos armazenados e funções, Indexação avançada, Replicação e alta disponibilidade,
                        Comunidade ativa, Devido a essas características, o PostgreSQL é uma escolha popular para muitas aplicações,
                        desde pequenas startups até grandes corporações.
                    </p>
                </DivSkills>

                <DivSkills>
                    <MariadbOriginal size='100' />
                    <span>MariaDB</span>
                    <p>MariaDB é um sistema de gerenciamento de banco de dados relacional (RDBMS) que é um fork do MySQL,
                        criado por alguns dos desenvolvedores originais do MySQL após a aquisição deste último pela Oracle.
                        MariaDB é popular por ser uma alternativa de código aberto ao MySQL e oferece uma série de recursos e melhorias.
                        Aqui estão algumas das características principais do MariaDB:
                        1. **Código Aberto**, 2. **Compatibilidade com MySQL**, 3. **Desempenho Aprimorado**, 4. **Recursos Avançados**,
                        5. **Segurança**, 6. **Replicação e Escalabilidade**, 7. **Comunidade Ativa**, 8. **Interface de Linha de Comando**,
                        9. **Interface Gráfica**.
                    </p>
                </DivSkills>

                <DivSkills>
                    <PhpOriginal size='100' />
                    <span>PHP</span>
                    <p>PHP (Hypertext Preprocessor) é uma linguagem de programação amplamente utilizada para desenvolvimento web,
                        especialmente para a criação de sites dinâmicos e aplicações web.
                        Aqui estão algumas características e informações importantes sobre o PHP:
                        1. **Linguagem de Script do Lado do Servidor**, 2. **Facilidade de Aprendizado**, 3. **Integração com Bancos de Dados**
                        4. **Ampla Comunidade e Suporte**, 5. **Frameworks Populares**, 6. **Funcionalidades de Segurança**,
                        7. **Compatibilidade com HTML**, 8. **Hospedagem Acessível**, 9. **Suporte a Programação Orientada a Objetos**.
                    </p>
                </DivSkills>

                <DivSkills>
                    <ExpressOriginal size='100' />
                    <span>Express</span>
                    <p>Express é um framework web para Node.js que facilita a criação de servidores e aplicações web.
                        Ele é conhecido por sua simplicidade, flexibilidade e performance. Aqui estão alguns dos principais aspectos do Express:
                        1. **Minimalista e Flexível**, 2. **Middleware**, 3. **Roteamento**, 4. **Tratamento de Erros**, 5. **Suporte a View Engines**,
                        6. **Desempenho**, 7. **Comunidade e Ecossistema**, 8. **Documentação e Recursos**,
                        Express é amplamente utilizado em aplicações Node.js, desde APIs simples até aplicações web complexas.
                        Sua popularidade e flexibilidade o tornam uma escolha comum para desenvolvedores que buscam um framework leve e eficiente para construir aplicações de servidor.
                    </p>
                </DivSkills>

                <DivSkills>
                    <PrismaOriginal size='100' />
                    <span>Prisma</span>
                    <p>Prisma é uma ferramenta de ORM (Object-Relational Mapping) moderna e poderosa para Node.js e TypeScript,
                        que facilita a interação com bancos de dados relacionais. Ele ajuda a mapear dados entre o banco de dados e a aplicação de forma mais intuitiva e segura.
                        Aqui estão algumas das principais características e funcionalidades do Prisma:
                        1. **Cliente Prisma**, 2. **Prisma Migrate**, 3. **Prisma Studio**, 4. **Modelo de Dados Declarativo**,
                        5. **Suporte a Diversos Bancos de Dados**, 6. **Segurança e Validação**, 7. **Desempenho**, 8. **Integração com Ecosistema JavaScript/TypeScript**,
                        9. **Comunidade e Suporte**, No geral, o Prisma é uma ferramenta que visa simplificar e melhorar a experiência de desenvolvimento ao trabalhar com bancos de dados,
                        oferecendo uma maneira moderna e eficiente de lidar com dados em aplicações Node.js e TypeScript.
                    </p>
                </DivSkills>
            </DivSectionSkills>
        </SectionSkills>
    );
};