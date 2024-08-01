import { MainPage } from '../components/style/pagestyle';
import { HeaderComponents } from '../components/header';
import { StartComponents } from '../components/start';
import { AboutComponents } from '../components/about/about';

export const AppPage = () => {
    return (
        <MainPage>
            <HeaderComponents />
            <StartComponents />
            <AboutComponents />
        </MainPage>
    );
};