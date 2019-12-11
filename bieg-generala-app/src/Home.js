import React, { PureComponent } from "react";
import wiki from "./img/wiki.jpg";
class Home extends PureComponent {
    render() {
        return (
            <div>
                <header>
                    <div className="header-container">
                        <div className="header-description">
                            <h1>
                                Bieg/Nordic walking pamięci generała Józefa
                                Dowbora-Muśnickiego
                            </h1>
                            <h3>Lusowo, 28.12.2019</h3>
                        </div>
                    </div>
                </header>
                <div className="content-container">
                    <div className="content">
                        <h3>Wstęp</h3>
                        <p>
                            Setna rocznica wybuchu Powstania Wielkopolskiego
                            obchodzona była niezwykle uroczyście. Niemniej przy
                            każdej kolejnej powinniśmy oddawać cześć i chwałę
                            lokalnym bohaterom, którzy w 1918 roku walczyli z
                            okupantem.
                        </p>
                        <p>
                            101 rocznica wydaje się nam dobrym pretekstem do
                            zainicjowania nowego zwyczaju. Coroczny bieg w
                            zimowych warunkach może być dobrą do okazją do
                            przypominania społeczeństwu o akcie bohaterstwa z
                            dawnych lat.
                        </p>
                        <p>
                            Powstanie miało charaker społecznego, lokalnego
                            zrywu. Nasza pierwsza edycja biegu będzie podobna.
                            Uczestnicy to lokalna społeczność oraz ich rodzina i
                            znajomi. Logistyka, która jest wymagana przy tego
                            zawodach zapewniona została dzięki lokalnym
                            darczyńcom i przedsięborcom.
                        </p>
                        <h3>Trasa</h3>
                        <p>
                            Trasa biegu wytyczona została głównie przy okolicach
                            Jeziora Lusowskiego. Jedna pętlą to trochę ponad 10
                            kilometrów. Najodważniejsi uczesnity będą zatem
                            biegli 10 okrążeń, tak aby na mecie mieć przebyte
                            101 kilometrów.
                            <iframe
                                title="Trasa biegu"
                                frameBorder="0"
                                scrolling="no"
                                src="https://www.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id=44342960&measures=on&title=off&near=off&images=off&maptype=M&metricunits=on"
                                width="100%"
                                height="700"
                            ></iframe>
                            <br />
                            <em>Trasa pojedynczego okrążenia</em>
                        </p>
                        <h3>Program</h3>
                        <div>
                            <h5>28.12.2019</h5> <br></br>
                            17:00-18:30 Otwarcie biura zawodów - wydawanie
                            numerów startowych
                            <br></br>
                            18:30 - Odprawa przed biegiem<br></br>
                            18:45 - Uroczyste przejście na cmentarz i zapalenie
                            znicza, złożenie kwiatów na grobie generała<br></br>
                            19:00 - START<br></br>
                            <h5>29.12.2019</h5>
                            <br></br>
                            11:00 - Koniec limitu czasowego. Uroczyste
                            zakończenie biegu.
                            <br></br>
                        </div>
                        <h3>Powstanie</h3>
                        <p>
                            Każdemu zainteresowanemu polecamy zapoznać się z
                            genezą wybuchu oraz przebiegiem Powstania
                            Wielkopolskiego.
                            <a href="https://pl.wikipedia.org/wiki/Powstanie_wielkopolskie">
                                <img
                                    src={wiki}
                                    alt="Wikipedia - Powstanie wielkopolskie"
                                ></img>
                            </a>
                            <em>
                                <a href="https://pl.wikipedia.org/wiki/Powstanie_wielkopolskie">
                                    <br></br>
                                    Wikipedia o Powstaniu Wielkopolskiem
                                </a>
                            </em>
                        </p>
                        <h3>Podziękowania</h3>
                        <p>
                            Serdecznie dziękujemy darczyńcom i
                            przedsiębiorstwom, które pomogły w organizacji
                            biegu:
                        </p>
                        <ul>
                            <li>Koło gospodyń wiejskich w Lusowie</li>
                            <li>
                                Muzeum Powstańców Wielkopolskich. im. Gen.
                                Józefa Dowbora Muśnickiego w Lusowie
                            </li>
                            <li>Ochotnicza Straż Pożarna w Lusowie</li>
                            <li>
                                Pałac Jaśminowy Batorowo - Danuta i Marek
                                Kucembowie
                            </li>
                            <li>Rada Sołecka, Lusowo</li>
                            <li>
                                Restauracja Stara Wozownia, Lusowo - Izabela
                                Hałas
                            </li>
                            <li>TAR-DROG, Tarnowo Podgórne</li>
                            <li>
                                Tarnowski Łącznik, Tarnowo Podgórne, Hubert
                                Szymkowiak
                            </li>
                            <li>
                                Towarzystwo Pamięci Gen. Józefa Dowbora
                                Muśnickiego
                            </li>
                            <li>Zespół Pieśni i Tańca Lusowiacy</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
