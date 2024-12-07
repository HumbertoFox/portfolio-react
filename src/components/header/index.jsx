import { useEffect, useRef } from 'react';
import LogoBtn from '../../assets/LOGOBFN.png';
import {
    DivHeader,
    Header,
    LinkLogo,
    LinkNav,
    LogoImg,
    NavHeader
} from '../style/headerstyle';
import gsap from 'gsap';

// eslint-disable-next-line react/prop-types
export const HeaderComponents = ({ onCheckboxChange }) => {
    const headerRef = useRef({});

    const handleCheckboxChange = event => onCheckboxChange(event.target.checked);

    useEffect(() => {
        const header = headerRef.current;

        gsap.fromTo(header, {
            opacity: 0,
            y: -100,
        }, {
            opacity: 1,
            y: 0,
            ease: 'bounce.out',
            duration: 2,
        });
    }, []);

    return (
        <Header ref={headerRef}>
            <LinkLogo
                title='Link Page Html, Css, Js'
                href='https://humbertofox.github.io/portfolio/'
                aria-label='Icon Logo'
            >
                <LogoImg
                    src={LogoBtn}
                    alt='Logo BetoFoxNet_Info'
                />
            </LinkLogo>
            <DivHeader>
                <input
                    id='menu-hamburguer'
                    type='checkbox'
                    title='Menu'
                    onChange={handleCheckboxChange}
                />
                <label
                    htmlFor='menu-hamburguer'
                >
                    <div>
                        <span></span>
                    </div>
                </label>
                <NavHeader>
                    <LinkNav
                        title='Sobre Mim'
                        href='#about_me'
                        aria-label='Button Sobre Min'
                        rel='noopener'>
                        <span>
                            sobre mim
                        </span>
                    </LinkNav>
                    <LinkNav
                        title='Habilidades'
                        href='#skills'
                        aria-label='Button Habilidades'
                        rel='noopener'>
                        <span>
                            habilidades
                        </span>
                    </LinkNav>
                    <LinkNav
                        title='Projetos'
                        href='#projects'
                        aria-label='Button Projetos'
                        rel='noopener'>
                        <span>
                            meus projetos
                        </span>
                    </LinkNav>
                </NavHeader>
            </DivHeader>
        </Header>
    );
};