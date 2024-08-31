import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faWhatsapp, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { DivStartImg, DivStartSocial, PerfilImg, SectionDivStartImg, SectionDivStartText, SectionStart } from '../style/startstyle';
import ImgPrefil from '../../assets/foto-perfil.png';

// eslint-disable-next-line react/prop-types
export const StartComponents = ({ checkeds }) => {
    const selectStartAnimations = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            const windowStartTop = window.pageYOffset + window.innerHeight * -.5;
            if (selectStartAnimations.current) {
                const animationStart = selectStartAnimations.current;
                if (windowStartTop > animationStart.offsetTop) {
                    animationStart.classList.remove('animation');
                } else {
                    animationStart.classList.add('animation');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <SectionStart ref={selectStartAnimations} className='animation' data-animation='up' $checkedvalue={checkeds}>
            <SectionDivStartText>
                <p>Olá 🖖,</p>
                <h1>Sou o Humberto Ribeiro</h1>
                <h2>Desenvolvedor Full-Stack</h2>
                <DivStartSocial>
                    <a href='https://www.linkedin.com/in/humberto-ribeiro-sales/' aria-label='Icon para rede social linkedin' target='_blank' rel='noopener'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href='https://api.whatsapp.com/send/?phone=5581988075408&text&type=phone_number&app_absent=0' aria-label='Icon para rede social WhatsApp' target='_blank' rel='noopener'><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href='https://github.com/HumbertoFox/' aria-label='Icon para rede social GitHub' target='_blank' rel='noopener'><FontAwesomeIcon icon={faGithub} /></a>
                    <a href='https://www.instagram.com/betofoxnet_info/' aria-label='Icon para rede social Instagram' target='_blank' rel='noopener'><FontAwesomeIcon icon={faInstagram} /></a>
                </DivStartSocial>
            </SectionDivStartText>
            <SectionDivStartImg>
                <DivStartImg>
                    <PerfilImg src={ImgPrefil} alt='Foto de Perfil' />
                </DivStartImg>
            </SectionDivStartImg>
        </SectionStart>
    );
};