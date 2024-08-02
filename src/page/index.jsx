import { MainPage } from '../components/style/pagestyle';
import { HeaderComponents } from '../components/header';
import { StartComponents } from '../components/start';
import { AboutComponents } from '../components/about';
import { SkillsComponents } from '../components/skills';

export const AppPage = () => {
    return (
        <MainPage>
            <HeaderComponents />
            <StartComponents />
            <AboutComponents />
            <SkillsComponents />
        </MainPage>
    );
};