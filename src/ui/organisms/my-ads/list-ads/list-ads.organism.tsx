import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { paths } from "../../../../constants";
import { useKbb, useManhein } from "../../../../hooks";
import {
  CustomerModel,
  PriceAdvisorRequest,
  StatusAd,
} from "../../../../models";
import { CardAd } from "../../../molecules";
import { WrapperCards, CardStyle } from "./list-ads.organism.style";

interface IListAds {
  idAd: number;
  idVehicle: number;
  photo: string;
  plate: string;
  title: string;
  price: number;
  priceStart: number;
  priceEnd: number;
  status: StatusAd;
  colorId: number;
  coast: number;
  kbbStateId: number;
  mileage: number;
  gradeId: number;
  year: number;
}

export const ListAds: React.FC = () => {
  const { t } = useTranslation();

  const { getAllAds, getCustomer } = useManhein();
  const { GetVehicle, GetVehiclePrices } = useKbb();

  const history = useHistory();

  const [customer, setCustomer] = useState<CustomerModel>();
  const [listAds, setListAds] = useState<IListAds[]>();
  const [loadVehicle, setLoadVehicle] = useState(true);
  const [loadPrices, setLoadPrices] = useState(true);
  const loading = t("Loading...");

  useEffect(() => {
    getCustomer()
      .then((customer) => setCustomer(customer))
      .catch(() => setCustomer(undefined));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getStatus = (status: number): StatusAd => {
    switch (status) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        return StatusAd.Incomplete;
      case 5:
        return StatusAd.Inspection;
      case 6:
        return StatusAd.NoOffer;
      case 7:
        return StatusAd.OfferAccepted;
      case 8:
        return StatusAd.Done;
      case 10:
        return StatusAd.Inactive;
      case 9:
      default:
        return StatusAd.WaitingAuction;
    }
  };

  useEffect(() => {
    if (customer)
      getAllAds()
        .then((ads) =>
          setListAds(
            ads.map((m) => {
              return {
                idVehicle: m.vehicleId,
                idAd: m.id,
                title: loading,
                plate: m.plate,
                price: m.sellValue,
                mileage: m.mileage,
                gradeId: m.vehicleGradeId,
                kbbStateId: isNaN(Number(customer.address?.state))
                  ? 25
                  : Number(customer.address?.state),
                status: getStatus(m.step),
              } as IListAds;
            })
          )
        )
        .catch(() => setListAds([]));
  }, [customer]); // eslint-disable-line react-hooks/exhaustive-deps

  const vehicleAd = async (list: IListAds[]) => {
    const newListAds = await Promise.all(
      list.map(async (m) => {
        const vehicle = await GetVehicle(m.idVehicle);
        return {
          ...m,
          photo: vehicle.firstMediaCompleteURLMedium,
          title: vehicle.brandName,
          year: vehicle.year,
        } as IListAds;
      })
    );
    setLoadVehicle(false);
    setListAds(newListAds);
  }; // eslint-disable-line react-hooks/exhaustive-deps

  const vehiclePrice = async (list: IListAds[]) => {
    const newListAds = await Promise.all(
      list.map(async (m) => {
        const request = {
          colorID: m.colorId ?? null,
          equipmentCost: m.coast ?? 0,
          locationStateID: m.kbbStateId,
          mileage: m.mileage ? m.mileage : 200000,
          vehicleGradeID: m.gradeId ? m.gradeId : 3,
          vehicleID: m.idVehicle,
          vehiclePriceTypeID: 1,
          year: m.year,
        } as PriceAdvisorRequest;

        const price = await GetVehiclePrices(request);
        return {
          ...m,
          priceStart: price.priceLow,
          priceEnd: price.priceHigh,
        } as IListAds;
      })
    );
    setLoadPrices(false);
    setListAds(newListAds);
  }; // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (listAds && loadVehicle) {
      vehicleAd(listAds);
    }
  }, [listAds]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (listAds && loadPrices && !loadVehicle) {
      vehiclePrice(listAds);
    }
  }, [listAds]); // eslint-disable-line react-hooks/exhaustive-deps

  const setButton = (status: StatusAd, id: number): any => {
    switch (status) {
      case StatusAd.Incomplete:
        return {
          onClick: () =>
            history.push(paths.vehicleRegister().replace(":id", id.toString())),
        };

      default:
        return {};
    }
  };

  return (
    <WrapperCards>
      {listAds && listAds.length === 0 && t("No results found")}
      {listAds && listAds.length > 0 ? (
        listAds.map((m, i) => (
          <CardStyle key={i}>
            <CardAd
              photo={m.photo}
              plate={m.plate}
              title={m.title}
              price={m.price}
              priceStart={m.priceStart}
              priceEnd={m.priceEnd}
              status={m.status}
              button={setButton(m.status, m.idAd)}
            />
          </CardStyle>
        ))
      ) : (
        <div
          className={"h-100 d-flex align-items-center justify-content-center"}
        >
          <Spinner animation="border" />
        </div>
      )}
      {/* <CardStyle>
        <CardAd
          photo={
            "https://static.kbb.com.br/pkw/p/p78a617ab-8742-4ff4-b8fe-5094c8d8b6b4.jpg"
          }
          plate={"ISS-9873"}
          title={
            "AUDI A1 SPORTBACK AMBITION 1.4 16V TFSI STRONIC 185 CV ANO 2016"
          }
          price={86000}
          priceStart={84828}
          priceEnd={89492}
          status={StatusAd.Incomplete}
        />
      </CardStyle>
      <CardStyle>
        <CardAd
          photo={
            "https://static.kbb.com.br/pkw/p/p78a617ab-8742-4ff4-b8fe-5094c8d8b6b4.jpg"
          }
          plate={"ISS-9873"}
          title={
            "AUDI A1 SPORTBACK AMBITION 1.4 16V TFSI STRONIC 185 CV ANO 2016"
          }
          price={86000}
          priceStart={84828}
          priceEnd={89492}
          status={StatusAd.Inspection}
          button={{
            type: "secondary",
            text: t("Edit ad"),
          }}
        />
      </CardStyle>
      <CardStyle>
        <CardAd
          photo={
            "https://static.kbb.com.br/pkw/p/p78a617ab-8742-4ff4-b8fe-5094c8d8b6b4.jpg"
          }
          plate={"ISS-9873"}
          title={
            "AUDI A1 SPORTBACK AMBITION 1.4 16V TFSI STRONIC 185 CV ANO 2016"
          }
          price={86000}
          priceStart={84828}
          priceEnd={89492}
          status={StatusAd.Inactive}
          button={{
            type: "primary",
            text: t("Reactive ad"),
          }}
        />
      </CardStyle>
      <CardStyle>
        <CardAd
          photo={
            "https://static.kbb.com.br/pkw/p/p78a617ab-8742-4ff4-b8fe-5094c8d8b6b4.jpg"
          }
          plate={"ISS-9873"}
          title={
            "AUDI A1 SPORTBACK AMBITION 1.4 16V TFSI STRONIC 185 CV ANO 2016"
          }
          price={86000}
          priceStart={84828}
          priceEnd={89492}
          status={StatusAd.OfferRefused}
        />
      </CardStyle>
      <CardStyle>
        <CardAd
          photo={
            "https://static.kbb.com.br/pkw/p/p78a617ab-8742-4ff4-b8fe-5094c8d8b6b4.jpg"
          }
          plate={"ISS-9873"}
          title={
            "AUDI A1 SPORTBACK AMBITION 1.4 16V TFSI STRONIC 185 CV ANO 2016"
          }
          price={86000}
          priceStart={84828}
          priceEnd={89492}
          status={StatusAd.OfferPending}
        />
      </CardStyle>
      <CardStyle>
        <CardAd
          photo={
            "https://static.kbb.com.br/pkw/p/p78a617ab-8742-4ff4-b8fe-5094c8d8b6b4.jpg"
          }
          plate={"ISS-9873"}
          title={
            "AUDI A1 SPORTBACK AMBITION 1.4 16V TFSI STRONIC 185 CV ANO 2016"
          }
          price={86000}
          priceStart={84828}
          priceEnd={89492}
          status={StatusAd.OfferAccepted}
        />
      </CardStyle>
      <CardStyle>
        <CardAd
          photo={
            "https://static.kbb.com.br/pkw/p/p78a617ab-8742-4ff4-b8fe-5094c8d8b6b4.jpg"
          }
          plate={"ISS-9873"}
          title={
            "AUDI A1 SPORTBACK AMBITION 1.4 16V TFSI STRONIC 185 CV ANO 2016"
          }
          price={86000}
          priceStart={84828}
          priceEnd={89492}
          status={StatusAd.Schedule}
        />
      </CardStyle> */}
    </WrapperCards>
  );
};
