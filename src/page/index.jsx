import { MainPage } from '../components/style/pagestyle';
import { HeaderComponents } from '../components/header';
import { StartComponents } from '../components/start';
import { AboutComponents } from '../components/about';
import { SkillsComponents } from '../components/skills';
import { ProjectsComponents } from '../components/project';
import { FooterComponents } from '../components/footer';

export const AppPage = () => {
    return (
        <MainPage>
            <HeaderComponents />
            <StartComponents />
            <AboutComponents />
            <SkillsComponents />
            <ProjectsComponents />
            <FooterComponents />
        </MainPage>
    );
};