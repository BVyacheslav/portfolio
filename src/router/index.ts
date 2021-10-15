import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    HOME = '/',
    PROJECTS = '/projects',
    ABOUT = '/about',
    CONTACT = '/contact'
}

export const routes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, component: Home},
    {path: RouteNames.PROJECTS, exact: true, component: Projects},
    {path: RouteNames.ABOUT, exact: true, component: About},
    {path: RouteNames.CONTACT, exact: true, component: Contact}
]