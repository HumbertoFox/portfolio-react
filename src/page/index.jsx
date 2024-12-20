import { useState } from 'react';
import { MainPage } from '../components/style/pagestyle';
import { HeaderComponents } from '../components/header';
import { StartComponents } from '../components/start';
import { AboutComponents } from '../components/about';
import { SkillsComponents } from '../components/skills';
import { ProjectsComponents } from '../components/project';
import { FooterComponents } from '../components/footer';

export const AppPage = () => {
    const [isChecked, setIsChecked] = useState(false);
    
    const handleCheckboxChange = elenent => setIsChecked(elenent);

    return (
        <MainPage>
            <HeaderComponents onCheckboxChange={handleCheckboxChange} />
            <StartComponents checkeds={isChecked} />
            <AboutComponents />
            <SkillsComponents />
            <ProjectsComponents />
            <FooterComponents />
        </MainPage>
    );
};