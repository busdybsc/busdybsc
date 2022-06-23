import { isMobile, browserName } from "react-device-detect";
import ScrollToTop from 'react-scroll-to-top';
import ReactGA from 'react-ga';
import {FaAngleDoubleDown, FaAngleUp} from 'react-icons/fa';

//UI Imports
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import MixerInterface from "../components/Mixer/MixerInterface";
import NETWORK_HELPER from "../lib/networkHelper";
import styles from "../styles/Dapp.module.scss";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function App() {
    const [connectedNetwork, setConnectedNetwork] = useState(false);
    const [connectedAddress, setConnectedAddress] = useState(false);
    const [inputNetworkData, setInputNetworkData] = useState(false);
    const [showBtnContent, setShowBtnContent] = useState(isMobile);

    const onConnect = false;

    const goToContent = () => {
        window.scrollTo({
            top: document.querySelector('.Dapp_dapp_box__QVPeC').scrollHeight,
            behavior: "smooth"
        })
    }

    const renderButton = () => {
        return <FaAngleDoubleDown className="icon-position icon-style" onClick={goToContent} />
    }

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    useEffect(() => {
        let dappBox = document.querySelector('.Dapp_dapp_box__QVPeC');
        if (isMobile) {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= dappBox.scrollHeight) {
                    setShowBtnContent(false);
                } else {
                    setShowBtnContent(true);
                }
            })
        }
    })

    useEffect(() => {
        setShowBtnContent(isMobile)
    }, [isMobile]);

    useEffect(() => {
        let netD = NETWORK_HELPER.getNetworkByChain(connectedNetwork);
        if (netD) {
            setInputNetworkData(netD);
        }
    }, [connectedNetwork]);

    return (
        <>
            <Header
                networkSetter={setConnectedNetwork}
                accountSetter={setConnectedAddress}
                onConnect={onConnect}
            />
            {showBtnContent && (
                     <div className="top-to-btm">
                        {/* {window.scrollX > document.querySelector('.Dapp_dapp_box__QVPeC').scrollHeight + document.querySelector('.Dapp_dapp_box__QVPeC').clientHeight() ? (
                            <FaAngleUp className="icon-position icon-style" onClick={goToContent} />
                        ) : (
                            <FaAngleDoubleDown className="icon-position icon-style" onClick={goToContent} />
                        )} */}
                        {renderButton()}
                    </div>
                )}
            <Container>
                <Row style={{borderBottom: '5px solid white'}}>
                <Col xs="12" sm="4" style={{backgroundColor: "#26262b", padding: "30px", borderRadius: "20px", height: "100%", width: 'auto', margin: 'auto', marginTop: 0, marginBottom: isMobile ? '20px' : 0, borderRight: isMobile ? '10px solid #E14D81' : '', borderLeft: isMobile ? '10px solid #E14D81' : ''}} >
                    <div style={{width: '100%', textAlign: 'center', paddingBottom: '30px'}}>
                        <Image src="/images/tlogo.png"  width={350} height={150} />
                    </div>
                        <div className="tiddy-container">
                            <h3 style={{color: "var(--primary-light)", fontSize: "1.375rem", fontWeight: 900}}>What is the Tiddy Twister?</h3>
                            <p>
                            Welcome to <a href="https://busdytokenbsc.com">BUSDY TOKEN'S</a> anonymous<strong> Cross-Chain Bridge</strong>, 
the "TIDDY TWISTER" powered by the security of <a href="https://blockblend.io">BLOCKBLEND</a> technology.
                            </p>
                            <p>
                            <strong>Discreetly</strong> transfer native tokens across multiple blockchains 
(wallet connection optional).  
                            </p>
                            <p>
                            The easiest, private, anonymous bridge available in defi.
                            </p>
                            <p>
                            <strong>The Secret Sauce?</strong>  The TIDDY TWISTER will hide your crypto currency 
transaction details, token origin and your destination wallet, using built
 in cross-chain functionality.   
</p><p>
<strong style={{color: "var(--primary-light)"}}>Your crypto.  Your privacy.</strong>
                            </p>
                        </div>
                    </Col>
                    {isMobile && (<><br /><br /></>)}
                    <MixerInterface
                        input_network={inputNetworkData}
                        user_account={connectedAddress}
                        onConnect={onConnect}
                    ></MixerInterface>
                    {!isMobile && (
                    <Image
                        src="/images/animegirl.png"
                        alt="$BUSDY"
                        width={433.1}
                        height={770}
                        // width={}
                        // height={130}
                    />
                    )}
                </Row>
                <Row customClass={styles.dapp__blocks}>
                    <Col xs="12" style={{paddingBottom: 0}}>
                        <h2 id="howitworks">
                            <span>The Mechanics of Tiddy Twisting</span>
                        </h2>
                    </Col>
                    <Col xs="12" sm="4">
                        <div>
                            <h3>DEPOSIT (Wallet Connected)</h3>
                            <p>1. Connect wallet at top right of page.<br />
                                2. From the pulldown menu, select the chains you are bridging from and too (Insure your wallet is connected to the network you are bridging from).<br />
                                3. Enter the recipient wallet address.<br />
                                4. Choose a fixed amount of tokens to send and click “next.”<br />
                                5. Review the details and retain the recovery key for your records.<br />
                                6. Click the “confirm transaction” button and sign the transaction in your wallet.<br />
                            </p>
                            <br /><br />
                            <h3>CUSTOM DEPOSIT (Wallet NOT Connected)</h3><br />
                            <p>
                    1. From the pulldown menu, select the chains you are bridging from and too.<br />
                    2. Enter the recipient wallet address (depending on use case, this may be the same address you are sending from).<br />
                    3. Ensure “custom” is selected and click “next.”<br />
                    4. Send the desired amount to the address provided within the displayed time limit (be sure to verify the recipient address).<br />
                    5. Be sure to send the correct currency (as chosen in step one) to the generated address provided. <br />
                    6. Review the details and retain the recovery key for your records.<br />
                            <br /></p>
                    <p><span style={{color: 'red'}}>IMPORTANT:</span> Pay close attention to the Min / Max values for the specified token, any amount of tokens sent outside of these ranges will fail and are NOT RECOVERABLE!
                            <br /><br />
                            <p><span style={{color: 'red'}}>NOTE:</span> The estimated delivery time will vary based on network usage an on-chain conditions.  

                        </p></p>
                        </div>
                    </Col>
                    <Col xs="12" sm="4">
                        <div>
                        <h3>ADVANCED SETTINGS</h3>
                            <p>
                            ADVANCED MODE opens a subset of features recommended for power users only. <br /><br /> These include custom time delay settings and the option to include a unique user secret phrase which will ensure singular us of dynamic addresses. 
                                <br />
                                <br />
                                For enterprise level privacy, we recommend using a higher timer delay of up to 24 hours.
                                <br /><br />
                                Selecting the "Custom" option allows you to deposit multiple times from alternate addresses provided you stay within the min/max value range and the order is fulfilled before the selected time period expires.
                                <br /><br />

                            </p>

                            <p>
<h3>DELIVERY</h3><br />
Your assets will arrive in the recipient wallet as the native tokens, NOT as wrapped tokens.<br />
<br />
For example, if you sent $ETH and the recipient network is Cronos, you will receive native $CRO tokens.
<br /><br />
                            </p>
                        </div>
                    </Col>
                    <Col xs="12" sm="4">
                        <div>
                            <p>
                            <h3>NEXT-LEVEL PRIVACY</h3><br />
The bridge has multiple use cases, sending isn't the twister's only trick.<br /><br/> For example, if a content creator wanted to receive anonymous crypto payments without exposing a private wallet address, they can generate a dynamic address within the app using an hour-long delay and take tips or payments from hundreds of people during a live stream or podcast, etc.<br />

                            </p>
                            <p>
                            With the present climate and impending government regulations coming to the crypto space, we firmly believe anonymity going forward is of the UTMOST importance and want to keep crypto the way Satoshi intended it to be -- <strong>PRIVATE</strong> and <strong>ANONYMOUS.</strong> <br/><br />

When on-ramping fiat (real world currency) into crypto, you are essentially linking your real world persona to a digital wallet. This almost defeats the original purpose of crypto. <br /><br />Using TIDDY TWISTER technology you can detach your crypto activity from your real world self forever and onwards. <br/><br />

Why...<br/><br /> With regulations, going forward, it's becoming evident that governing bodies are targeting the crypto space by putting forward such notions as "taxation on unrealised crypto gains" and "country-wide crypto bans", etc.

<br/><br />Tiddy Twister strongly believes what you choose to do with your crypto should be remain YOUR business and most importantly... kept PRIVATE. <br /><br />

                       </p>
                            
                        </div>
                    </Col>
                    {isMobile && (
                    <Image
                        styles={{ marginRight: "0"}}
                        src="/images/animegirl.png"
                        alt="$BUSDY"
                        width={433.1}
                        height={770}
                        // width={}
                        // height={130}
                    />
                    )}
                </Row>
            </Container>
        </>
    );
}
