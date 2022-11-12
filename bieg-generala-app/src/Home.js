import React, { PureComponent } from "react";
import cementary from "./img/640px-Lusowo_cemetery_(Musniccy).jpg";
import { Link } from "react-router-dom";

class Home extends PureComponent {
  render() {
    return (
      <div>
        <header>
          <div className="header-container">
            <div className="header-description">
              <h1>
                Maraton Agnieszki "Gusi" Dowbor Muśnickiej
              </h1>
              <h3>Lusowo, 20.06.2021</h3>
            </div>
          </div>
        </header>
        <div className="content-container">
          <article className="content">
            <h2 style={{textAlign: "center"}}><Link to="/Results">Wyniki</Link></h2>
            <h3>Wstęp</h3>
            <p>
            Janina Lewandowska i Agnieszka Dowbor Muśnicka były córkami Generała Józefa Dowbora Muśnickiego.
            
            </p>
            <p>
              W rocznicę śmierci Agnieszki chcemy upamiętnić jej postać. 
              Urodziła się 7 września 1919 roku w Lusowie. Gdy miała zaledwie rok zmarła jej matka - żona generała Agnieszka z Korsuńskich.
              Jej studia w Państwowej Szkole Ogrodnictwa w Poznaniu zostały przerwane przez wybuch wojny.
              Z obawy przed opresją za zasługi swego ojca wyjechała do Warszawy, gdzie wstąpiła do podziemnej Organizacji Wojskowej "Wilki".
              Niestety już wiosną 1940 roku została aresztowana a następnie osadzona na Pawiaku. 20 lub 21 czerwca została zamordowana w Palmirach.
              Było to 2 miesiące po tym jak jej siostra zginęła w Katyniu.
            </p>
            <p style={{textAlign: "center"}}>
            <img src={cementary} ></img>
            </p>
            <p>
              W Lusowie znajduje się grób rodziny Muśnickich. 
              Obie siostry symbolizują wszystkie ofiary zbrodni w Katyniu i Palmirach dokonanych ponad 80 lat temu.
              Jako osoby związane z Lusowem tak jak Agnieszka chcemy aby pamięć o niej trwała.
            </p>
            <h3>Bieg</h3>
            <p>
              Trasa
              <br />Jest to bieg crossowy. Trasa dość trudna.
            <br />Całkowity dystans biegu to 42,195 kilometrów w jednej pętli. Trasa wiedzie przez ścieżki o naturalnym podłożu terenu wśród okolicznych łąk i lasów. 
            <br />Trasa przebiegać będzie m.in. przez las w Zakrzewie, gdzie podzczas II wojny światowej rostrzelani zostali Polscy obywatele.
            <br />Limit czasowy: 7h.
            <br />Na trasie będą dwa punkty odżywcze. Pierwszy z nich zlokalizowany na ok. 18 kilometrze, Drugi przy 34 kilometrze.
              <iframe
                title="Trasa biegu"
                frameBorder="0"
                scrolling="no"
                src="https://www.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id=75853508&measures=on&title=off&near=off&images=off&maptype=M&metricunits=on"                
                width="100%"
                height="700"
              ></iframe>
             
             
            </p>            
            <div className="content-container">
        <div className="content content-rules">
          <div className="content-rules-header">
            <h2>Regulamin</h2>
            <h3>Biegu Agnieszki Dowbor Muśnickiej</h3>
            <h3>20 czerwca 2021, Lusowo, 62-080 Tarnowo Podgórne</h3>
          </div>
          <hr></hr>
          <h3>1. ORGANIZATOR</h3>
          <p>
            Jolanta Witczak wraz z Towarzystem 
            Pamięci Gen. Józefa Dowbora Muśnickiego i Muzeum Powstańców
            Wielkopolskich. im. Gen. Józefa Dowbora Muśnickiego w Lusowie.            
          </p>
          <p>
            Wsparcie od Rady Sołeckiej wsi Lusowo, Gminy Tarnowo Podgórne i OSiR Tarnowo Podgórne.
            Serdecznie dziękujemy.
          </p>
          <h3>2. CEL</h3>
            <p>
            Upamiętnienie postaci Agnieszki Dowbor Muśnickiej.
            <br />
            Promocja sołectwa Lusowa i gminy Tarnowo Podgórne. <br />
            Przedstawienie walorów rekreacyjnych i przyrodniczych Gminy Tarnowo Podgórne, Jeziora
            Lusowskiego i przyległych terenów.
          </p>
          <h3>3. TERMIN I MIEJSCE </h3>
          <p>
            Start i meta biegu przy Muzeum Powstańców Wielkopolskich ulicy Ogrodowej 3a w
            Lusowie. Bieg odbędzie się z 20 czerwca 2021 r. Start planowany na godzinę 8:00.
            <br />
            Bazą bieg jest świetlica wiejska znajdująca się obok Muzeum.
            <br />
            Po biegu uczetnicy złożą kwiaty i zapalą znicz przy pamiątkowej tablicy na fasadzie Muzeum.
            Następnie wezmą udział w prelekcji dot. postaci Agnieszki Dowbor Muśnickiej.
          </p>
          <h3>4.TRASA I DYSTANSE</h3>
          <p>
            Trasa nie posiada atestu PZLA.
            <br />Jest to bieg crossowy. Trasa dość trudna.
            <br />Całkowity dystans biegu to 42,195 kilometrów w jednej pętli. Trasa wiedzie przez ścieżki o naturalnym podłożu terenu wśród okolicznych łąk i lasów. 
            <br />Trasa przebiegać będzie m.in. przez las w Zakrzewie, gdzie podzczas II wojny światowej rostrzelani zostali Polscy obywatele.
            <br />Limit czasowy: 7h.
            <br />Na trasie będą dwa punkty odżywcze. Pierwszy z nich zlokalizowany na ok. 18 kilometrze, Drugi przy 34 kilometrze.
          </p>
          <h3>5. ZASADY UCZESTNICTWA I ZGŁOSZENIA</h3>
          <p>
            Ustalony został limit 20 uczestników. <br />
            Każdy uczestnik biegu otrzymał indywidualne zaproszenie.
            <br />
            Organizator nie przewiduje dopuszczenia do biegu osób poniżej 18
            roku życia.
            <br />
            Bieg odbywa się bez profesjonalnego pomiaru czasu. Każdy uczetnik ma obowiązek zmierzyć czas i podać po biegu organizatorowi.
            <br />            
            Organizator nie zapewnia opieki medycznej.
            W biurze zawodów zawodnik zobowiązany jest okazać
            aktualne badanie lekarskie, bądź też podpisać oświadczenie o starcie
            na własną odpowiedzialność.
          </p>
          <h3>6. KLASYFIKACJA KOŃCOWA I NAGRODY</h3>
          <p>
            Przedstawiona zostanie jedna klasyfikacja – kategoria Open.<br />
            Oficjalne wyniki opublikowane będą na tej stronie oraz w serwisie Maratony Polskie.
            <br />
            Każdy uczestnik biegu otrzyma pamiątkowy medal.
          </p>
          <h3>7. OPŁATY</h3>
          <p>Nie ma opłaty startowej.</p>
          <h3>8. POSTANOWIENIA KOŃCOWE</h3>
          <p>
            Bieg ma charakter koleżeński i towarzyski.
            <br />
            Bieg odbędzie się bez względu na pogodę.
            <br />
            Uczestnicy mają obowiązek zachowania zasad fair play podczas trwania
            biegu i na trasie biegu.
            <br />
            Uczestnicy mają obowiązek dbać o czystość na trasie i w miejscu
            mety. <br />
            Uczestnicy mają obowiązek przestrzegania wytyczonych tras biegowych
            i nie zbaczać z nich aż do osiągnięcia linii mety. <br />
            Bieg nie jest ubezpieczony.
            <br />
            Zawodnicy startują na własną odpowiedzialność.
            <br />
            Organizator nie będzie odpowiadać za przedmioty pozostawione bez
            zabezpieczenia lub skradzione podczas imprezy.
            <br />
            Organizator zastrzega sobie prawo interpretacji niniejszego
            regulaminu.
            <br />
            Niniejszy regulamin zostanie wywieszony przed biegiem i każdy
            zawodnik będzie musiał podpisać, że zapoznał się z jego treścią
            podczas odbioru numeru startowego.
          </p>
          <p>Więcej informacji udziela Jolanta Witczak - tel.501 946 594</p>
        </div>
      </div>
          </article>

        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
