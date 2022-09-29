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
                    <div className={`col-lg-7 col-12 ${Style.headlineText}`}>
                        <h5><b className={Style.secondaryColor}>Stable Crypto</b><br /> Checkout & Payments</h5>
                        <h6>Over 300m people now own $1 Trillion in <br /> crypto assets. It’s time for a welcome mat.</h6>

                        <div className="mt-5 pt-3">
                            <a href="#" className={Style.ctaBtn}>Book Demo Today</a>
                        </div>
                    </div>

                    <div className='col-md-5 mt-4 d-lg-block d-none'>
                        <img src="https://datamynt.com/nextimg/%2Fdatamynt-app.png/3840/75?url=%2Fdatamynt-app.png&w=3840&q=75" width="630" fetchPriority="high" height="702" style={{ maxWidth: "100%" }} alt="" />
                    </div>
                </div>

                <div className={`row ${Style.welcomeSection}`}>
                    <div className="col-md-6 d-lg-block d-none">
                        <img src="https://datamynt.com/iphone-header.png" width="636" style={{ maxWidth: "100%", marginTop: "-100px" }} alt="" />
                    </div>

                    <div className={`col-md-6 col-12 ${Style.welcomeText}`}>
                        <h2 class="text-white mb-5">Welcome to Datamynt</h2>
                        <p><span>DataMynt</span> introduces the digital golden era of merchant payment servicing with our stable
                            cryptocurrency checkout and payment solution.<br /><br /><span>Accept Bitcoin, Ethereum, and other cryptos</span> as payment<span>
                                without traditional crypto volatility.</span> One click, scan or send. It just works.
                        </p>

                        <div className='mt-5'>
                            <img src="https://datamynt.com/_next/image?url=%2Fapple.png&w=384&q=75" className='me-3' width="141" alt="" />
                            <img src="https://datamynt.com/_next/image?url=%2Fandroid.png&w=384&q=75" width="141" alt="" />
                        </div>
                    </div>
                </div>

                <div className={`row mt-lg-0 mt-5 ${Style.whyDataMynt}`}>
                    <div className="col-md-12">

                        <div className='text-center'>
                            <h2 className='text-white mb-4'>Why DataMynt?</h2>
                            <h3 className={Style.secondaryColor}>$800bn+</h3>
                            <p className='text-white'>Total wallet share available for purchases at <br /> Data Mynt merchants & partners</p>
                        </div>

                        <div className={`d-flex justify-content-center flex-lg-row flex-column text-white ${Style.sellingPoint}`}>
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
                    <a href="#" className={Style.ctaBtn}>Book Demo Today</a>
                </div>
            </section>

            <section id="pay-with-crypto">
                <div className={`row text-white ${Style.payWithCrypto}`}>
                    <div className={`col-lg-7 ${Style.payWithCryptoText}`}>
                        <h4>Get paid with crypto on your terms</h4>
                        <p className='mt-md-0 mt-4'>Invoice, Checkout Button, Mobile PoS, and QR code and settle in <br /> currency of choice</p>
                    </div>

                    <div className="col-lg-5 mt-md-0 mt-4 mb-md-0 mb-5">
                        <img src="https://datamynt.com/_next/image?url=%2Fcryptos-networks.png&w=1080&q=75" width="514" alt="" />
                    </div>
                </div>
            </section>

            <section id="simple-checkout">
                <div className={`row ${Style.simpleCheckout}`}>
                    <div className="col-lg-7 col-12">
                        <img src="https://datamynt.com/_next/image?url=%2Fcrypto-checkout.png&w=1080&q=75" width="489" alt="" />
                    </div>

                    <div className={`col-lg-5 col-12 ${Style.checkoutText}`}>
                        <h4 className='mb-3 mt-md-0 mt-5'>Simple crypto checkout & payments</h4>
                        <p>Accept touch-free payments from any wallet including Cash App, PayPal, and Coinbase</p>
                    </div>
                </div>
            </section>

            <section id="sell-online">
                <div className={`row text-white ${Style.sellOnline}`}>
                    <div className={`col-lg-7 col-12 ${Style.sellOnlineText}`}>
                        <h4 className='mb-3'>Sell in person and online</h4>
                        <p>Accept fast, secure payments in person via Mobile Point of Sale (iOS & Android) & online</p>
                    </div>

                    <div className="col-lg-5 col-12">
                        <img src="https://datamynt.com/_next/image?url=%2Fsell-in-person.png&w=1080&q=75" width="501" height="472" alt="" />
                    </div>
                </div>
            </section>

            <section id="easy-settle">
                <div className={`row ${Style.easySettle}`}>
                    <div className="col-md-7">
                        <img src="https://datamynt.com/_next/image?url=%2Fstelle.png&w=1080&q=75" width="508" alt="" />
                    </div>

                    <div className="col-md-5" style={{ marginTop: "60px" }}>
                        <h4 className='mb-2'>Settle in an easy, secure way</h4>
                        <p>In local currency options (e.g. USD, BRL, EUR)</p>
                    </div>
                </div>
            </section>

            <section id="track-sales">
                <div className={`row text-white ${Style.trackSales}`}>
                    <div className={`col-md-7 ${Style.trackSalesText}`}>
                        <h4 className='mb-3'>Track sales and engage customers</h4>
                        <p>Analyze your sales realtime and manage your customers in <br /> one place</p>
                    </div>

                    <div className="col-md-5">
                        <img src="https://datamynt.com/_next/image?url=%2Fweb-portal.svg&w=1080&q=75" width="515" alt="" />
                    </div>
                </div>
            </section>

            <section id="powerful-tools">
                <h2 className='text-lg-center text-left ps-lg-0 ps-4 mt-5 fw-bold'>Simple, powerful tools to help you integrate and analyse crpyto for <br /> your business</h2>
                <div className={`row ${Style.powerfulTools}`}>
                    <div className="col-md-7">
                        <ul>
                            <li>
                                <div className='d-flex'>
                                    <div className='me-4'>
                                        <img src="/checkbox.svg" alt="" />
                                    </div>

                                    <div className={Style.toolsList}>
                                        <span>API Integration</span><br />
                                        <span>Our API allows you to create seamless branded<br /> checkouts and workflows</span>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className='d-flex'>
                                    <div className='me-4'>
                                        <img src="/checkbox.svg" alt="" />
                                    </div>

                                    <div className={Style.toolsList}>
                                        <span>E-commerce Integration</span><br />
                                        <span>Our e-commerce integrations allows you to plug in with <br /> large e-commerce platforms, like Shopify</span>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className='d-flex'>
                                    <div className='me-4'>
                                        <img src="/checkbox.svg" alt="" />
                                    </div>

                                    <div className={Style.toolsList}>
                                        <span>Transaction Dashboard</span><br />
                                        <span>Our transaction dashboard gives you a one-stop shop for <br /> payments, invoicing, settlements, deposits and more</span>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className='d-flex'>
                                    <div className='me-4'>
                                        <img src="/checkbox.svg" alt="" />
                                    </div>

                                    <div className={Style.toolsList}>
                                        <span>Point of Sale (PoS) App</span><br />
                                        <span>Our Mobile App enables you to accept and collect crypto instantly <br /> from anywhere. Cash on Delivery Alternative.</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-5" style={{ marginTop: "60px" }}>
                        <img src="	https://datamynt.com/_next/image?url=%2Fpower-tools.png&w=1920&q=75" width="701" alt="" />
                    </div>
                </div>
            </section>

            <section>
                <div className={`row text-white text-center ${Style.tableMetrics}`}>
                    <div className="col-md-12">
                        <h2 className="fw-bold mb-5 mt-5">Your Trusted Stable Crypto Checkout Partner</h2>
                        <img src="https://datamynt.com/_next/image?url=%2Ftable_comparison.svg&w=3840&q=75" width="1155" alt="" />
                    </div>
                </div>
            </section>

            <section id="partners-opinion">
                <h3 className='text-center fw-bold mt-5 mb-5'>What our partners are saying</h3>
                <div className={`row ${Style.partnersOpinionSection}`}>
                    <div className={`col-md-6 mb-lg-0 mb-5 ${Style.partnersOpinion}`}>
                        <img src="/quote.svg" alt="" />
                        <p className='fw-bold'>“Thanks for DataMynt’s easy stable crypto checkout and invoicing solution, our business is booming”</p>
                        <h4 className='fw-bolder'>Cameron Resnick</h4>
                        <span className='fw-bold'>COO of Fly-Flat.com</span>
                    </div>

                    <div className={`col-md-6 ${Style.partnersOpinion}`}>
                        <img src="/quote.svg" alt="" />
                        <p className='fw-bold'>“Since we began accepting crypto at checkout thanks to DataMynt, new customer come in all the time asking to pay in Bitcoin!”</p>
                        <h4 className='fw-bolder'>Muhammad Mudassar</h4>
                        <span className='fw-bold'>Owner Ruffin Grocery</span>
                    </div>
                </div>
            </section>

            <section id="recognition-section">
                <div className={`row ${Style.recognitionSection}`}>
                    <h2 className='fw-bold text-center text-white mb-5 mt-5'>We’ve been recognized for the work we do</h2>
                    <div className="col-lg-4">
                        <img src="https://datamynt.com/_next/image?url=%2Ffintech.svg&w=828&q=75" width="400" alt="" />
                    </div>

                    <div className="col-lg-4">
                        <img src="https://datamynt.com/_next/image?url=%2Ffinance.svg&w=828&q=75" width="400" alt="" />
                    </div>

                    <div className="col-lg-4">
                        <img src="https://datamynt.com/_next/image?url=%2Fgrowth-list.svg&w=828&q=75" width="400" alt="" />
                    </div>
                </div>
            </section>

            <section id="investors-section" className={`row ${Style.investorSection}`}>
                <div className="row text-center">
                    <h2 className="text-center fw-bold">We’re supported by investors from</h2>
                    <div className="col-lg-3 mb-lg-0 mb-5">
                        <img src="https://datamynt.com/_next/image?url=%2Fcoinbase.svg&w=640&q=75" width="218.4" alt="" />
                    </div>

                    <div className="col-lg-3 mb-lg-0 mb-5">
                        <img src="https://datamynt.com/_next/image?url=%2Fpolygon.png&w=640&q=75" width="170.4" alt="" />
                    </div>

                    <div className="col-lg-3" style={{ marginTop: "-80px" }}>
                        <img src="https://datamynt.com/_next/image?url=%2Fhaven.svg&w=640&q=75" width="197" alt="" />
                    </div>

                    <div className="col-lg-3">
                        <img src="https://datamynt.com/_next/image?url=%2Fangelist.svg&w=640&q=75" width="218.4" alt="" />
                    </div>
                </div>

                <div className="row mt-3 ms-3 text-center">
                    <div className="col-lg-3 col-12 mt-lg-0 mt-5">
                        <img src="https://datamynt.com/_next/image?url=%2Fdomain.svg&w=640&q=75" width="213.4" alt="" />
                    </div>

                    <div className="col-lg-3 col-12" style={{ marginTop: "-40px" }}>
                        <img src="https://datamynt.com/_next/image?url=%2Funit.svg&w=384&q=75" width="129" alt="" />
                    </div>

                    <div className="col-lg-3 col-12">
                        <img src="https://datamynt.com/_next/image?url=%2F800.svg&w=256&q=75" width="106" alt="" />
                    </div>

                    <div className="col-lg-3 col-12 mt-lg-0 mt-5">
                        <img src="https://datamynt.com/_next/image?url=%2Fcustodia.svg&w=384&q=75" width="165" alt="" />
                    </div>
                </div>
            </section>

            <section id="contact-us">
                <div className={`row text-white text-center ${Style.contactUs}`}>
                    <h2 className='fw-bold'>Connect with us to get started</h2>
                    <div className="mt-5 pt-3">
                        <a href="#" className={Style.ctaBtn}>Book Demo Today</a>
                    </div>

                    <img src="/logo.svg" alt="" />
                </div>
            </section>
        </div>
    )
}

export default HomePage
