import { useState } from 'react';
import Style from './Home.module.scss';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/index';
import Image from 'next/image';
import SidePic from '../../public/sidepic.jpg';
import Ravenous from '../../public/ravenousmockup.jpg';

const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className={Style.homeContainer} id="home">
                <Navbar toggleIsOpen={toggleIsOpen} />
                <Sidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />

                <div className={`text-center p-1 ${Style.infoSection}`}>
                    <img src="https://datamynt.com/nextimg/%2Fcheck.png/48/75?url=%2Fcheck.png&w=48&q=75" className='pe-2' width="32" alt="" /><span>Start today and take advantage of 0% fees for 60days!</span>
                </div>

                <div className="row">
                    <div className={`col-md-7 ${Style.headlineText}`}>
                        <h5><b className={Style.secondaryColor}>Stable Crypto</b><br /> Checkout & Payments</h5>
                        <h6>Over 300m people now own $1 Trillion in <br /> crypto assets. It’s time for a welcome mat.</h6>

                        <div className="mt-5 pt-3">
                            <a href="#" className={Style.ctaBtn}>Book Demo Today</a>
                        </div>
                    </div>

                    <div className='col-md-5 mt-4'>
                        <img src="https://datamynt.com/nextimg/%2Fdatamynt-app.png/3840/75?url=%2Fdatamynt-app.png&w=3840&q=75" fetchPriority="high" style={{ maxWidth: "50rem", maxHeight: "80%" }} alt="" />
                    </div>
                </div>

                <div className="row" style={{ padding: "100px 200px 0 200px" }}>
                    <div className="col-md-6">
                        <img src="https://datamynt.com/iphone-header.png" style={{ maxWidth: "55rem", maxHeight: "80%", marginTop: "-100px" }} alt="" />
                    </div>

                    <div className={`col-md-6 ${Style.welcomeSection}`}>
                        <h2 class="text-white mb-5">Welcome to Datamynt</h2>
                        <p><span>DataMynt</span> introduces the digital golden era of merchant payment servicing with our stable
                            cryptocurrency checkout and payment solution.<br /><span>Accept Bitcoin, Ethereum, and other cryptos</span> as payment<span>
                                without traditional crypto volatility.</span> One click, scan or send. It just works.
                        </p>

                        <div className='mt-5'>
                            <img src="https://datamynt.com/_next/image?url=%2Fapple.png&w=384&q=75" className='me-3' width="141" alt="" />
                            <img src="https://datamynt.com/_next/image?url=%2Fandroid.png&w=384&q=75" width="141" alt="" />
                        </div>
                    </div>
                </div>

                <div className={`row ${Style.whyDataMynt}`}>
                    <div className="col-md-12">

                        <div className='text-center'>
                            <h2 className='text-white mb-4'>Why DataMynt?</h2>
                            <h3 className={Style.secondaryColor}>$800bn+</h3>
                            <p className='text-white'>Total wallet share available for purchases at <br /> Data Mynt merchants & partners</p>
                        </div>

                        <div className={`d-flex text-white ${Style.sellingPoint}`}>
                            <ul>
                                <li className='mb-5 me-5'>
                                    <div className='d-flex'>
                                        <div className='me-4'>
                                            <img src="/checkbox.svg" alt="" />
                                        </div>

                                        <div className={Style.benefits}>
                                            <span>NO CRYPTO VOLATILITY</span><br />
                                            <span>Immediate settlement in local currencies</span>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className='d-flex'>
                                        <div className='me-4'>
                                            <img src="/checkbox.svg" alt="" />
                                        </div>

                                        <div className={Style.benefits}>
                                            <span>OMNICHANNEL</span><br />
                                            <span>Mobile PoS, Checkout Button & API</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <ul>
                                <li className='mb-5'>
                                    <div className='d-flex'>
                                        <div className='me-4'>
                                            <img src="/checkbox.svg" alt="" />
                                        </div>

                                        <div className={Style.benefits}>
                                            <span>NO DECLINES OR CHARGEBACKS</span><br />
                                            <span>Avoid card payment fraud</span>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className='d-flex'>
                                        <div className='me-4'>
                                            <img src="/checkbox.svg" alt="" />
                                        </div>

                                        <div className={Style.benefits}>
                                            <span>24x7 x 365 DAYS / YEAR</span><br />
                                            <span>Instant global settlement anywhere</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section id="transaction-section">
                <div className={`text-center ${Style.transactionSection}`}>
                    <span><b>New Partners, Sellers and Merchants</b></span>
                    <h2 className='mb-5'><b>Get 0% Transaction Fees for 60 days</b></h2>
                    <a href="#" className={Style.ctaBtn} style={{ padding: "20px 185px" }}>Book Demo Today</a>
                </div>
            </section>

            <section id="pay-with-crypto">
                <div className={`row text-white ${Style.payWithCrypto}`}>
                    <div className="col-md-7" style={{ marginTop: "150px" }}>
                        <h4>Get paid with crypto on your <br /> terms</h4>
                        <p>Invoice, Checkout Button, Mobile PoS, and QR code and settle in <br /> currency of choice</p>
                    </div>

                    <div className="col-md-5">
                        <img src="https://datamynt.com/_next/image?url=%2Fcryptos-networks.png&w=1080&q=75" width="514" height="472" alt="" />
                    </div>
                </div>
            </section>

            <section id="simple-checkout">
                <div className={`row ${Style.simpleCheckout}`}>
                    <div className="col-md-7">
                        <img src="https://datamynt.com/_next/image?url=%2Fcrypto-checkout.png&w=1080&q=75" width="489" alt="" />
                    </div>

                    <div className="col-md-5" style={{ marginTop: "170px" }}>
                        <h4 className='mb-3'>Simple crypto checkout & <br />payments</h4>
                        <p>Accept touch-free payments from any wallet including<br /> Cash App, PayPal, and Coinbase</p>
                    </div>
                </div>
            </section>

            <section id="sell-online">
                <div className={`row text-white ${Style.sellOnline}`}>
                    <div className="col-md-7" style={{ marginTop: "200px" }}>
                        <h4 className='mb-3'>Sell in person and online</h4>
                        <p>Accept fast, secure payments in person via Mobile Point of <br /> Sale (iOS & Android) & online</p>
                    </div>

                    <div className="col-md-5">
                        <img src="https://datamynt.com/_next/image?url=%2Fsell-in-person.png&w=1080&q=75" width="501" height="472" alt="" />
                    </div>
                </div>
            </section>

            <section id="simple-checkout">
                <div className={`row ${Style.simpleCheckout}`}>
                    <div className="col-md-7">
                        <img src="https://datamynt.com/_next/image?url=%2Fstelle.png&w=1080&q=75" width="508" alt="" />
                    </div>

                    <div className="col-md-5" style={{ marginTop: "170px" }}>
                        <h4 className='mb-3'>Settle in an easy, secure way</h4>
                        <p>In local currency options (e.g. USD, BRL, EUR)</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
