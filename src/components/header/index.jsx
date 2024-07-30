import LogoBtn from '../../assets/LOGOBFN.png';
import { Header, LinkLogo, LinkNav, LogoImg, NavHeader } from '../style/headerstyle';

export const HeaderComponents = () => {
    return (
        <Header>
            <LinkLogo title='Logo' href='#' aria-label='Icon Logo'>
                <LogoImg src={LogoBtn} alt='Logo BetoFoxNet_Info' />
            </LinkLogo>
            <NavHeader>
                <LinkNav title='Sobre Mim' href='#sobre-min' aria-label='Button Sobre Min' rel='noopener'><span>sobre mim</span></LinkNav>
                <LinkNav title='Habilidades' href='#habilidades' aria-label='Button Habilidades' rel='noopener'><span>habilidades</span></LinkNav>
                <LinkNav title='Projetos' href='#projetos' aria-label='Button Projetos' rel='noopener'><span>meus projetos</span></LinkNav>
            </NavHeader>
        </Header>
    );
};