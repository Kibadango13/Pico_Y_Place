import React from "react";
import Head from "next/head";

import TrafficRegulationPredictor from "components/global/TrafficRegulationPredictor/TrafficRegulationPredictor";
import ContentWrapper from "../../ContentWrapper/ContentWrapper";
import Styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";

const Home: React.FC<Props> = props => {
  return (
    <Styles className="Home">
      <Head>
        <title>Pico y Placa</title>
      </Head>
      <header className="Home__header" />
      <main className="Home__main">
        <ContentWrapper>
          <img
            src="https://www.adipiscor.com/img/uploads/images/pico_y_placa_quito.jpg"
            alt="Italian Trulli"
            className="Home__image"
          />
          <TrafficRegulationPredictor />
        </ContentWrapper>
      </main>
      <footer className="Home__footer" />
    </Styles>
  );
};

Home.defaultProps = {};

export default Home;
