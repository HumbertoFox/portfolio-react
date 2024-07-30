import LogoBtn from '../../assets/LOGOBFN.png';
import { Header, LinkLogo, LinkNav, LogoImg, NavHeader } from '../style/headerstyle';

export const HeaderComponents = () => {
    return (
        <Header>
            <LinkLogo title='Logo' href='#'>
                <LogoImg src={LogoBtn} alt='Logo BetoFoxNet_Info' />
            </LinkLogo>
            <NavHeader>
                <LinkNav title='Sobre Mim' href='#sobre-min'><span>sobre mim</span></LinkNav>
                <LinkNav title='Habilidades' href='#habilidades'><span>habilidades</span></LinkNav>
                <LinkNav title='Projetos' href='#projetos'><span>meus projetos</span></LinkNav>
            </NavHeader>
        </Header>
    );
};