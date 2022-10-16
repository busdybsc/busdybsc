import Link from "next/link";
import Container from "../components/Container";
import HeaderNetworkSelector from "../components/HeaderNetworkSelector";
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import NETWORK_HELPER from "../lib/networkHelper";
import ConnectButtonHandler from "../components/ConnectButtonHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";

const Header = (props) => {
    const [connectedNetwork, setConnectedNetwork] = useState(undefined);
    const [mobileNav, setMobileNav] = useState(false);
    const [connectedAddress, setConnectedAddress] = useState(undefined);
    const [selectedNetwork, setSelectedNetwork] = useState(undefined);
    const [ headerStyle, setHeaderStyle ] = useState({height: '100%', margin: 0});
    const [ logoStyle, setLogoStyle ] = useState({height: '85px', width: '85px'});

    const mobileNavHandler = () => {
        setMobileNav(!mobileNav);
    }

    useEffect(() => {
        if (isMobile) {
            setHeaderStyle({width: '100px'})
        }
    }, [])

    useEffect(() => {
        if (isMobile) {
            setLogoStyle({...logoStyle, height: 'auto'});
        }
    }, [])

    useEffect(() => {
        if (typeof props.accountSetter != "undefined") {
            props.accountSetter(connectedAddress);
        }
    }, [connectedAddress]);

    useEffect(() => {
        if (typeof props.networkSetter != "undefined") {
            props.networkSetter(connectedNetwork);
        }

        if (connectedNetwork) {
            let network_data = NETWORK_HELPER.getNetworkByChain(
                connectedNetwork ? connectedNetwork : 1
            );
            setSelectedNetwork(network_data);
        }
    }, [connectedNetwork]);
    
    return (
        <>
            <header
                className={`${styles.header} ${props.layout == "main" && `fixed`
                    } ${mobileNav && `mobile`
                    }`}
            >
                <Container>
                    <div className={styles.header__row}>
                        <div className={styles.header__logo} onClick={() => window.location = 'https://www.tiddytwister.com'}>
                            <Link href="https://busdytokenbsc.com">
                                <>
                                <div className={styles.header__logo_img} style={{ width: !isMobile ? '85px' : 'auto', height: '85px'}}>
                                    <div className={styles.header__logo_inner}>
                                        <Image
                                            styles={{}}
                                            src="/images/TT Logo Main_silver.png"
                                            alt="$BUSDY"
                                            width={60}
                                            height={60}
                                            layout="responsive"
                                        />
                                    </div>
                              </div>
//                                 <div className={styles.header__logo_img}>
//                                     <div className={styles.header__logo_inner} style={headerStyle}>
//                                     <Image
//                                             styles={{}}
//                                             src="/images/busdy_token_header.png"
//                                             alt="$BUSDY"
//                                             width={370}
//                                             height={199}
//                                         />
//                                     </div>
//                                 </div>
                                </>
                            </Link>
                        </div>
                        <nav className={styles.header__nav}>
                            <ul>
                                {props.layout == "main" ? (
                                    <>
                                        <li>
                                            <a
                                                href={`${props.siteURL}#services`}
                                                onClick={props.onScroll}
                                            >
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href={`${props.siteURL}#tokenomics`}
                                                onClick={props.onScroll}
                                            >
                                                Tokenomics
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href={`${props.siteURL}#roadmap`}
                                                onClick={props.onScroll}
                                            >
                                                Roadmap
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                rel="noreferrer"
                                                href="https://docs.google.com/presentation/d/e/2PACX-1vToVQOF--cFZqaFfdwhhkdlVvNTP82LBdQMYzS66BBKYH1yP5d4KK1DFDYmkwDV4Q/pub?start=false&loop=false&delayms=3000"
                                                target="_blank"
                                            >
                                                Pitchdeck
                                            </a>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <a href="https://www.tiddytwister.com" rel="noreferrer">
                                                Website
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://tiddy-twister-token.gitbook.io/tiddy-twister-whitepaper/the-tiddy-twister" rel="noreferrer">
                                                Whitepaper
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a
                                                href="https://pancakeswap.finance/swap?outputCurrency=0x69B0af16FDd2E80968eb505cd41DC26efb2B80BF"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Buy
                                            </a>
                                        </li> */}
                                    </>
                                )}
                            </ul>
                        </nav>

                        {props.layout == "main" ? (
                            <div className={styles.header__buttons}>
                                <Link href="/app">Launch App</Link>
                            </div>
                        ) : (
                            <div className={styles.header__connect}>
                                <HeaderNetworkSelector
                                    selectedNetwork={selectedNetwork}
                                />

                                <ConnectButtonHandler
                                    setConnectedNetwork={setConnectedNetwork}
                                    setConnectedAddress={setConnectedAddress}
                                ></ConnectButtonHandler>
                            </div>
                        )}
                        <button onClick={mobileNavHandler} className={styles.header__nav_trigger}><FontAwesomeIcon
                            icon={faBars}
                        /></button>
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Header;
