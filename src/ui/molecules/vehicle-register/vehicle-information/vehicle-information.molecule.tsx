import React, { useMemo } from 'react';


import { useTranslation } from 'react-i18next';
import { VehicleFeatures, VehicleFeaturesProps } from 'c4u-web-components';
import { useVehicleRegisterContext } from '../../../../hooks';
import { Wrapper } from './vehicle-information.molecule.style'

interface VehicleInformationProps {
    reduced: boolean;
}

export const VehicleInformation = (props: VehicleInformationProps): JSX.Element => {
    const { t } = useTranslation();

    const { vehicleContext } = useVehicleRegisterContext();

    const vehicleFeaturesProps = useMemo(() => {
        const propsComponent =  {
            reduced: props.reduced,
            vehicle: { ...vehicleContext?.vehicle as any, image: vehicleContext?.vehicle?.firstMediaCompleteURLMedium },
            handlers: {
            },
            texts: {
                share: {
                    titleShareVehicle: t('TitleShareVehicle'),
                    titleShareVehicleSuccess: t('TitleShareVehicleSuccess'),
                    subTitleShareVehicleSuccess: t('SubTitleShareVehicleSuccess'),
                    subTitleShareVehicle: t('subTitleShareVehicle'),
                    name: t('Name'),
                    email: t('Email'),
                    send: t('Send'),
                },
                icons: {
                    share: t('Share'),
                    print: t('Print'),
                    compare: t('Compare'),
                },
                category: t('Category'),
                seats: t('Seats'),
                doors: t('Doors'),
                engine: t('Engine'),
                emissionsCO2: t('Emissions CO2'),
                transmission: t('Transmission'),
                powerOf: t('Power Of'),
                aceleration: t('Aceleration'),
                traction: t('Traction'),
                fuel: t('Fuel'),
                consumption: t('Consumption'),
                city: t('City'),
                km_l: t('Km_l'),
                gramsByKm: t('Grams By Km'),
            }
        } as VehicleFeaturesProps;

        return propsComponent;
    }, [props.reduced, t, vehicleContext]);

    return (
        <>
            {vehicleContext?.vehicle &&
                <Wrapper>
                    <VehicleFeatures {...vehicleFeaturesProps} />
                    
                </Wrapper>
            }
        </>
    )
};
