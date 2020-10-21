export interface Routers {
    path: string;
    pathMatch?: RegExp;
    component: () => JSX.Element | React.FunctionComponent<any>;
    template: () => JSX.Element | React.FunctionComponent<any>;
    title: string;
    backTo?: string;
}