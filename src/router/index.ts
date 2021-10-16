import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Portfolio from "../pages/Portfolio";
import Films from "../pages/Films";
import Life from "../pages/Life";

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
    {path: RouteNames.HOME, exact: true, component: Home},
    {path: RouteNames.PROJECTS, exact: true, component: Projects},
    {path: RouteNames.ABOUT, exact: true, component: About},
    {path: RouteNames.CONTACT, exact: true, component: Contact},
    {path: RouteNames.PORTFOLIO, exact: true, component: Portfolio},
    {path: RouteNames.FILMS, exact: true, component: Films},
    {path: RouteNames.LIFE, exact: true, component: Life}
]