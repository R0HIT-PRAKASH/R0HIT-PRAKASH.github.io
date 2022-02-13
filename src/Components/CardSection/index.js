import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-1.svg";
import Icon3 from "../../images/svg-1.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./CardSectionElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Header</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Header21</ServicesH2>
          <ServicesP>P tag P tag P tag P tag P tag P tag P tag</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Header22</ServicesH2>
          <ServicesP>
            P tag P tag P tag P tag P tag P tag P tag P tag P tag
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Header23</ServicesH2>
          <ServicesP>P tag P tag P tag v P tag P tag</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
