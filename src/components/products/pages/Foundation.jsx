import React, { useEffect } from "react";
import { RightBar } from "../RightBar";
import { Sidebar } from "../Sidebar";
import styled from "styled-components";
import { Review } from "../Review";
import { ContactUs } from "./ContactUs";
import { ShipProducts } from "../ShipProducts";
import { Form } from "../Form";
import { Categories } from "../Categories";
import { Main } from "./ProductsAndServices";

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  > div:first-child {
    width: 14%;
  }
  > div:last-child {
    width: 83%;
  }
`;

export const Foundation = () => {

  return (
    <Main>
      <Upper>
        <Sidebar label={"fdata"}/>
        <RightBar label={"fdata"}/>
      </Upper>
      <Review />
      <ContactUs />
      <ShipProducts label={"fdata"}/>
      <Form />
      <Categories />
    </Main>
  );
};
