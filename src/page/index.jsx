import { MainPage } from '../components/style/pagestyle';
import { HeaderComponents } from '../components/header';
import { StartComponents } from '../components/start';

export const AppPage = () => {
    return (
        <MainPage>
            <HeaderComponents />
            <StartComponents />
        </MainPage>
    );
};