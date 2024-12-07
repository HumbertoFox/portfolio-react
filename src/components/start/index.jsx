import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedinIn,
    faWhatsapp,
    faGithub,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
    DivStartImg,
    DivStartSocial,
    DivStartText,
    PerfilImg,
    SectionDivStartImg,
    SectionDivStartText,
    SectionStart
} from '../style/startstyle';
import ImgPrefil from '../../assets/foto-perfil.png';
import gsap from 'gsap';

// eslint-disable-next-line react/prop-types
export const StartComponents = ({ checkeds }) => {
    const textRef = useRef({});
    const socialRef = useRef({});
    const imageRef = useRef({});

    useEffect(() => {
        const text = textRef.current;
        const social = socialRef.current;
        const image = imageRef.current;

        gsap.fromTo(text, {
            opacity: 0,
            y: -300,
            scale: 0.5,
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
        });

        gsap.fromTo(social, {
            opacity: 0,
            y: 300,
            scale: 0.5,
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
        });

        gsap.fromTo(image, {
            opacity: 0,
            x: -500,
            scale: 0.5,
        }, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
        });

        const textContent = text.querySelector('h1').textContent;
        const letters = textContent.split('');
        text.querySelector('h1').innerHTML = '';
        letters.forEach(letter => {
            const span = document.createElement('span');
            span.innerText = letter;
            text.querySelector('h1').appendChild(span);
        });

        const spans = text.querySelectorAll('h1 span');
        gsap.fromTo(spans, {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power4.out',
        });
    }, []);
    return (
        <SectionStart
            $checkedvalue={checkeds}
        >
            <SectionDivStartText>
                <DivStartText ref={textRef}>
                    <p>Olá 🖖,</p>
                    <h1>Sou o Humberto Ribeiro</h1>
                    <h2>Desenvolvedor Full-Stack</h2>
                </DivStartText>
                <DivStartSocial ref={socialRef}>
                    <a
                        href='https://www.linkedin.com/in/humberto-ribeiro-sales/'
                        aria-label='Icon para rede social linkedin'
                        target='_blank'
                        rel='noopener'
                    >
                        <FontAwesomeIcon
                            icon={faLinkedinIn}
                        />
                    </a>
                    <a
                        href='https://api.whatsapp.com/send/?phone=5581988075408&text&type=phone_number&app_absent=0'
                        aria-label='Icon para rede social WhatsApp'
                        target='_blank'
                        rel='noopener'
                    >
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                        />
                    </a>
                    <a
                        href='https://github.com/HumbertoFox/'
                        aria-label='Icon para rede social GitHub'
                        target='_blank'
                        rel='noopener'
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                        />
                    </a>
                    <a
                        href='https://www.instagram.com/betofoxnet_info/'
                        aria-label='Icon para rede social Instagram'
                        target='_blank'
                        rel='noopener'
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                        />
                    </a>
                </DivStartSocial>
            </SectionDivStartText>
            <SectionDivStartImg>
                <DivStartImg ref={imageRef}>
                    <PerfilImg
                        src={ImgPrefil}
                        alt='Foto de Perfil'
                    />
                </DivStartImg>
            </SectionDivStartImg>
        </SectionStart>
    );
};