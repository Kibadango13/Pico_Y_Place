import React, { useEffect, useState } from "react";
import Head from "next/head";
import { message } from "antd";

import Button from "components/global/Button/Button";
import InputDatePicker from "components/form/InputDatePicker/InputDatePicker";
import InputForm from "components/form/InputForm/InputForm";
import InputTimePicker from "components/form/InputTimePicker/InputTimePicker";
import ContentWrapper from "../../ContentWrapper/ContentWrapper";
import Styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";

const Home: React.FC<Props> = props => {
  const [error] = useState("");

  useEffect(() => {
    message.error("Validación de los campos");
  }, []);

  return (
    <Styles className="Home">
      <Head>
        <title>Pico y Placa</title>
      </Head>
      <header className="Home__header" />
      <main className="Home__main">
        <ContentWrapper>
          <InputForm
            labelText="License plate number"
            value="value"
            name="document"
            className="PlansModal__input"
            onChange={(event: any) => {}}
            placeholder="Número de identificación del titular"
            error={error !== "" ? error : ""}
          />
          <InputDatePicker labelText="Date" error="" />
          <InputTimePicker labelText="Hora" />
          <Button
            onClick={() => {}}
            className="Home__appointment-button primary-gradient"
            text="Submit"
            textAlign="text-center"
          />
        </ContentWrapper>
      </main>
      <footer className="Home__footer" />
    </Styles>
  );
};

Home.defaultProps = {};

export default Home;
