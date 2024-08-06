import LogoBtn from '../../assets/LOGOBFN.png';
import { DivHeader, Header, LinkLogo, LinkNav, LogoImg, NavHeader } from '../style/headerstyle';

export const HeaderComponents = () => {
    return (
        <Header>
            <LinkLogo title='Link Page Html, Css, Js' href='https://humbertofox.github.io/portfolio/' aria-label='Icon Logo'>
                <LogoImg src={LogoBtn} alt='Logo BetoFoxNet_Info' />
            </LinkLogo>
            <DivHeader>
                <input id='menu-hamburguer' type='checkbox' title='Menu' />
                <label htmlFor='menu-hamburguer'>
                    <div>
                        <span></span>
                    </div>
                </label>
                <NavHeader>
                    <LinkNav title='Sobre Mim' href='#about_me' aria-label='Button Sobre Min' rel='noopener'><span>sobre mim</span></LinkNav>
                    <LinkNav title='Habilidades' href='#skills' aria-label='Button Habilidades' rel='noopener'><span>habilidades</span></LinkNav>
                    <LinkNav title='Projetos' href='#projects' aria-label='Button Projetos' rel='noopener'><span>meus projetos</span></LinkNav>
                </NavHeader>
            </DivHeader>
        </Header>
    );
};