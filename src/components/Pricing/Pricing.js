import React, { useContext } from "react";
import { Button } from "../../globalStyles";
import { GiCutDiamond, GiGoldBar,GiCrystalBars } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";
import { ProductContext } from "../../contexts/productContext";

function Pricing() {
  const [ , setProducts] = useContext(ProductContext);

  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Abonelik Seçenekleri</PricingHeading>
          <PricingContainer>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Standart Paket</PricingCardPlan>
                <PricingCardCost>₺900</PricingCardCost>
                <PricingCardLength>Aylık</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Günde 10 Dakika</PricingCardFeature>
                  <PricingCardFeature>Haftada 2 Gün</PricingCardFeature>
                  <PricingCardFeature>İkinci dili İngizlizce olan insanlarla konuş.</PricingCardFeature>
                </PricingCardFeatures>
                <Button
                  onClick={() =>
                    setProducts((state) => [
                      ...state,
                      { planName: "Standart Paket", planCost: "900" },
                    ])
                  }
                  primary
                >
                  Sepet Ekle
                </Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                <GiGoldBar/>
                </PricingCardIcon>
                <PricingCardPlan>Altın Paket</PricingCardPlan>
                <PricingCardCost>₺1.730</PricingCardCost>
                <PricingCardLength>Aylık</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Günde 20 Dakika</PricingCardFeature>
                  <PricingCardFeature>Haftada 3 Gün</PricingCardFeature>
                  <PricingCardFeature>Anadili İngizlizce olan insanlarla konuş.</PricingCardFeature>
                </PricingCardFeatures>
                <Button
                  onClick={() =>
                    setProducts((state) => [
                      ...state,
                      { planName: "Altın Paket", planCost: "1730" },
                    ])
                  }
                  primary
                >
                  Sepet Ekle
                </Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Elmas Paket</PricingCardPlan>
                <PricingCardCost>₺3.100</PricingCardCost>
                <PricingCardLength>Aylık</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Günde 30 Dakika</PricingCardFeature>
                  <PricingCardFeature>Haftada 5 Gün</PricingCardFeature>
                  <PricingCardFeature>Görüşme yapmadığınz günleri ileri tarihte kullanabilirsiniz.</PricingCardFeature>
                </PricingCardFeatures>
                <Button
                  onClick={() =>
                    setProducts((state) => [
                      ...state,
                      { planName: "Elmas Paket", planCost: "3100" },
                    ])
                  }
                  primary
                >
                  Sepet Ekle
                </Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;