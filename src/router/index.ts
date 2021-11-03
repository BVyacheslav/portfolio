import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import PortfolioPage from "../pages/PortfolioPage";
import FilmsPage from "../pages/FilmsPage";
import LifeGamePage from "../pages/LifeGamePage";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    HOME = '/',
    PROJECTS = '/projects',
    ABOUT = '/about',
    CONTACT = '/contact',
    PORTFOLIO = '/projects/portfolio',
    FILMS = '/projects/films',
    LIFE = '/projects/life'
}

export const routes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, component: HomePage},
    {path: RouteNames.PROJECTS, exact: true, component: ProjectsPage},
    {path: RouteNames.ABOUT, exact: true, component: AboutPage},
    {path: RouteNames.CONTACT, exact: true, component: ContactPage},
    {path: RouteNames.PORTFOLIO, exact: true, component: PortfolioPage},
    {path: RouteNames.FILMS, exact: true, component: FilmsPage},
    {path: RouteNames.LIFE, exact: true, component: LifeGamePage}
]