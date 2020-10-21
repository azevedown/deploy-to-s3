import React, { useEffect, useState, useMemo } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, useLocation } from 'react-router-dom';
import { Wrapper } from './breadcrumbs.molecule.style'
import { routes } from './../../../../constants';
import { useTranslation } from 'react-i18next';
import { Routers } from '../../../../models';

export const BreadcrumbMolecule = () => {
    let location = useLocation();

    const { t } = useTranslation();

    //const { routerParamContext } = useSessionContext();

    const [show, setShow] = useState(false);
    const [routesHistory, setRoutesHistory] = useState<Routers[]>([]);

    const stringToRegex = (item: string) => {
        let value = item.replace(/:.+/, "\\w+");
        return new RegExp(`^${value}$`);
    }

    const routesRegex = useMemo(() => {
        return routes.map(m => {
            return { ...m, pathMatch: stringToRegex(m.path) } as Routers;
        });
    }, []);

    const setBreadcrumbItem = (router: Routers) => {
        let routers = [router];
        let route = router.backTo ?? '/';

        while (route !== '/') {// eslint-disable-next-line 
            const routeFind = routesRegex.find(f => f.path === route);
            if (routeFind) {
                routers.unshift(routeFind)
                route = routeFind.backTo ?? '/';
            } else {
                route = '/';
            }
        }

        setRoutesHistory(routers);
    }

    const getPathRoute = (path: string) => {
        /*
        if (path.includes(':')) {
            const param = path.replace(/^[^:]+/, '');
            const paramValue = routerParamContext.find(f => f.param === param);

            if (paramValue) {
                return path.replace(paramValue.param, paramValue.value);
            } else {
                return '/';
            }
        }
        */
        return path;
    }

    useEffect(() => {
        setShow(location.pathname !== '/');
        const routerLocation = routesRegex.find(f => f.pathMatch && location.pathname.match(f.pathMatch));
        if (routerLocation)
            setBreadcrumbItem(routerLocation);
    }, [location]);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {show && (
                <Wrapper>
                    <Breadcrumb>
                        <Breadcrumb.Item linkAs={'div'}><Link to={'/'}>{t('Home')}</Link></Breadcrumb.Item>
                        {routesHistory.map((m, i) =>
                            routesHistory.length - 1 === i ?
                                (
                                    <Breadcrumb.Item key={'Breadcrumb.Item-active'} active>{t(m.title)}</Breadcrumb.Item>
                                ) : (
                                    <Breadcrumb.Item key={`Breadcrumb.Item-${i}`} linkAs={'div'}><Link to={getPathRoute(m.path)} >{t(m.title)}</Link></Breadcrumb.Item>
                                )
                        )}
                    </Breadcrumb>
                </Wrapper>
            )}
        </>
    );
};
