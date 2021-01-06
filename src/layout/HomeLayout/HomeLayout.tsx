import React from "react";
import Head from "next/head";

import ContentWrapper from "components/ContentWrapper/ContentWrapper";
import TrafficRegulationPredictor from "components/global/TrafficRegulationPredictor/TrafficRegulationPredictor";
import Styles from "./HomeLayout.styles";
import { HomeLayoutProps as Props } from "./HomeLayout.types";

const HomeLayout: React.FC<Props> = props => {
  return (
    <Styles className="HomeLayout">
      <Head>
        <title>Pico y Placa</title>
      </Head>
      <header className="HomeLayout__header" />
      <main className="HomeLayout__main">
        <ContentWrapper>
          <img
            src="https://www.adipiscor.com/img/uploads/images/pico_y_placa_quito.jpg"
            alt="Italian Trulli"
            className="HomeLayout__image"
          />
          <TrafficRegulationPredictor />
        </ContentWrapper>
      </main>
      <footer className="HomeLayout__footer" />
    </Styles>
  );
};

HomeLayout.defaultProps = {};

export default HomeLayout;
