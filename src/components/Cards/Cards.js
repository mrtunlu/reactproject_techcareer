import React from 'react';
import { IconContext } from 'react-icons/lib';
// resimler import edildi
import ekip1 from "../../images/ekip1.jpg"
import ekip2 from "../../images/ekip2.jpg"
import ekip3 from "../../images/ekip3.jpg"
import ekip4 from "../../images/ekip4.jpg"
import ekip5 from "../../images/ekip5.jpg"
import ekip6 from "../../images/ekip6.jpg"
import ekip7 from "../../images/ekip7.jpg"
import ekip8 from "../../images/ekip8.jpg"
//kart özellikleri import edildi
import {
CardsSection,
CardsWrapper,
CardsHeading,
CardsContainer,
CardsCard,
CardsCardInfo,
CardsCardImg,
Img,
CardsCardName,
CardsCardFrom,
CardsCardDesciriptions,
CardsCardDesciription,
CardsCardHobbies,
CardsCardHobby
} from './Cards.elements';

function Cards(
) {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <CardsSection>
        <CardsWrapper>
          {/* üst line */}
          <CardsHeading>Eğitmenlerimiz</CardsHeading>
          <CardsContainer>
            {/* 1.konuşmacı */}
            <CardsCard to='/login'>
              <CardsCardInfo>
                <CardsCardImg>
                <Img src={ekip7} alt="speaker1" />
                </CardsCardImg>
                <CardsCardName>ARTHUR</CardsCardName>
                <CardsCardFrom>ABD</CardsCardFrom>
                <CardsCardDesciriptions>
                  <CardsCardDesciription>Herkese merhaba! Ben Michigan, ABD'den Rachyl. Halk sağlığı diplomam var.</CardsCardDesciription>
                  </CardsCardDesciriptions>
                  <CardsCardHobbies>
                    <CardsCardHobby>
                    Traveling, hiking, watching
                    </CardsCardHobby>
                  </CardsCardHobbies>
              </CardsCardInfo>
            </CardsCard>
            {/* 2.konuşmacı */}
            <CardsCard to='/login'>
              <CardsCardInfo>
                <CardsCardImg>
                <Img src={ekip2} alt="speaker2" />
                </CardsCardImg>
                <CardsCardName>ODELİA</CardsCardName>
                <CardsCardFrom>Irlanda</CardsCardFrom>
                <CardsCardDesciriptions>
                  <CardsCardDesciription>Uygulamalı Psikoloji diplomam var. 40'tan fazla ülkeyi ziyaret ettim. </CardsCardDesciription>
                  </CardsCardDesciriptions>
                  <CardsCardHobbies>
                    <CardsCardHobby>
                    Moda ve yemek yapma
                    </CardsCardHobby>
                  </CardsCardHobbies>
              </CardsCardInfo>
            </CardsCard>
            {/* 3.konuşmacı */}
            <CardsCard to='/login'>
              <CardsCardInfo>
                <CardsCardImg>
                <Img src={ekip6} alt="speaker3" />
                </CardsCardImg>
                <CardsCardName>TARİK</CardsCardName>
                <CardsCardFrom>Morocco</CardsCardFrom>
                <CardsCardDesciriptions>
                  <CardsCardDesciription>İngilizce çalışmaları alanında lisans derecem var. TEFL eğitimi aldım ve üç yıldır İngilizce öğretiyorum</CardsCardDesciription>
                  </CardsCardDesciriptions>
                  <CardsCardHobbies>
                    <CardsCardHobby>
                    Koşu ve film izlemek
                    </CardsCardHobby>
                  </CardsCardHobbies>
              </CardsCardInfo>
            </CardsCard>
            {/* 4.konuşmacı */}
            <CardsCard to='/login'>
              <CardsCardInfo>
                <CardsCardImg>
                <Img src={ekip3} alt="speaker4" />
                </CardsCardImg>
                <CardsCardName>GLORİA</CardsCardName>
                <CardsCardFrom>Nijerya</CardsCardFrom>
                <CardsCardDesciriptions>
                  <CardsCardDesciription>
Merhaba, benim adım Gloria ve tıp okudum. Ben şefkatli ve sevecen biriyim.</CardsCardDesciription>
                  </CardsCardDesciriptions>
                  <CardsCardHobbies>
                    <CardsCardHobby>
                    Kitap okuma ve yüzme
                    </CardsCardHobby>
                  </CardsCardHobbies>
              </CardsCardInfo>
            </CardsCard>
          </CardsContainer>
        </CardsWrapper>
        {/* alt line */}
        <CardsWrapper>
        <CardsContainer>
            {/* 5.konuşmacı */}
            <CardsCard to='/login'>
              <CardsCardInfo>
                <CardsCardImg>
                <Img src={ekip4} alt="speaker5" />
                </CardsCardImg>
                <CardsCardName>MİLİCA</CardsCardName>
                <CardsCardFrom>Karadağ</CardsCardFrom>
                <CardsCardDesciriptions>
                  <CardsCardDesciription>Arkadaşlığa ve diyaloğa ya da başka bir deyişle nezaket ve empatiye değer veririm.</CardsCardDesciription>
                  </CardsCardDesciriptions>
                  <CardsCardHobbies>
                    <CardsCardHobby>
                   Spor ve Tarihi gezi
                    </CardsCardHobby>
                  </CardsCardHobbies>
              </CardsCardInfo>
            </CardsCard>
            {/* 6.konuşmacı */}
            <CardsCard to='/login'>
              <CardsCardInfo>
                <CardsCardImg>
                <Img src={ekip8} alt="speaker6" />
                </CardsCardImg>
                <CardsCardName>MECOLİ</CardsCardName>
                <CardsCardFrom>ABD</CardsCardFrom>
                <CardsCardDesciriptions>
                  <CardsCardDesciription>İnsanlarla çalışmayı seviyorum. Danışmanlık ve ihtiyacı olan insanlara yardım etme konusunda tutkuluyum.</CardsCardDesciription>
                  </CardsCardDesciriptions>
                  <CardsCardHobbies>
                    <CardsCardHobby>
                    Cooking, reading and watching movies
                    </CardsCardHobby>
                  </CardsCardHobbies>
              </CardsCardInfo>
            </CardsCard>
            {/* 7.konuşmacı */}
            <CardsCard to='/login'>
              <CardsCardInfo>
                <CardsCardImg>
                <Img src={ekip5} alt="speaker7" />
                </CardsCardImg>
                <CardsCardName>ABRA</CardsCardName>
                <CardsCardFrom>Almanya</CardsCardFrom>
                <CardsCardDesciriptions>
                  <CardsCardDesciription>
cana yakın bir insanım ve iyi bir mizah anlayışım olduğuna inanıyorum. yeni şeyler öğrenmeyi severim</CardsCardDesciription>
                  </CardsCardDesciriptions>
                  <CardsCardHobbies>
                    <CardsCardHobby>
                    Kitap okuma ve film izleme
                    </CardsCardHobby>
                  </CardsCardHobbies>
              </CardsCardInfo>
            </CardsCard>
            {/* 8.konuşmacı */}
            <CardsCard to='/login'>
              <CardsCardInfo>
                <CardsCardImg>
                <Img src={ekip1} alt="speaker8" />
                </CardsCardImg>
                <CardsCardName>DANEİLLE </CardsCardName>
                <CardsCardFrom>Filipinler</CardsCardFrom>
                <CardsCardDesciriptions>
                  <CardsCardDesciription>
Meslek olarak İngilizce öğretmeniyim. ben çok basit ve arkadaş canlısı bir insanım</CardsCardDesciription>
                  </CardsCardDesciriptions>
                  <CardsCardHobbies>
                    <CardsCardHobby>
                    Şarkı söylemek ve yemek yapmak
                    </CardsCardHobby>
                  </CardsCardHobbies>
              </CardsCardInfo>
            </CardsCard>
          </CardsContainer>
        </CardsWrapper>

      </CardsSection>
    </IconContext.Provider>
  );
}
export default Cards;