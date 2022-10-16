import Col from "../components/Col";
import Row from "../components/Row";
import Image from "next/image";
import Container from "../components/Container";
import styles from "../styles/Footer.module.scss";
import { isMobile } from "react-device-detect";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col xs="12" md="6">
              <div className={styles.footer__logo}>
              {/* Busdy Token's&nbsp; */}
                <a href="https://busdytokenbsc.com">
                  <Image
                    styles={{ marginRight: "3rem" }}
                    src="/images/TT Logo Main_silver.png"
                    alt="Blockblend"
                    width={110}
                    height={110}
                    layout="fixed"
                  />
                </a>
                <span><span style={{fontSize: "0.8rem"}}>Powered by</span><a href="https://blockblend.io/">Blockblend </a></span>
              </div>
            </Col>
            <Col xs="12" md="6" customClass={styles.footer__right}>
              <ul className={styles.footer__links}>
                <li>
                  <a rel="noreferrer" href="https://t.me/TiddyTwister" target="_blank">Telegram</a>
                </li>
                <li>
                  <a rel="noreferrer" href="https://twitter.com/TheTiddyTwister" target="_blank">Twitter</a>
                </li>
                <li>
                  <a rel="noreferrer" href="https://www.reddit.com/user/The_Tiddy_Twister/" target="_blank">Reddit</a>
                </li>
                <li>
                  <a href="https://medium.com/@tiddytwistertoken/" target="_blank" rel="noreferrer">Medium</a>
                </li>
                <li>
                  <a rel="noreferrer" href="https://discord.gg/9kWZtmxFmA" target="_blank">Discord</a>
                </li>
                <li>
                  <a rel="noreferrer" href="https://www.youtube.com/watch?v=5Fbfhgx31Pw&t=57s&ab_channel=BusdyToken" target="_blank">YouTube Tutorial</a>
                </li>
                {/* <li>
                  <a rel="noreferrer" href="https://bscscan.com/address/0x5bebfab847dd89b1d03ca654685bac07aa01224e" target="_blank">Contract (BSC)</a>
                </li> */}
                <li>
                  <a rel="noreferrer" href="https://audits.solidgrp.io/blockblend/summary" target="_blank">Audit</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="12">
              <div style={{width:'90%', margin: 'auto'}}>
                <p style={{fontSize:'12px'}}>
                Please note there are always risks associated with smart-contracts. Please use at your own risk. tiddytwister.com and busdytokenbsc.com are not registered brokers, analysts, or investment advisors. Nor are they offering any legal advice. Everything provided on this site is purely for informational, educational or entertainment purposes. All information contained herein should be independently verified and confirmed. We do not accept any liability for any loss or damage whatsoever caused in reliance upon such information or services. Please be aware of the risks involved with any trading done in any financial market. Do not trade with money you cannot afford to lose. Owners accept no liability for use of this application.
                </p>
              <p>
                BlockBlend is a developmental platform. Please use at your own risk.
                Blockblend.io &copy; 2022 • All rights reserved.<br />
              </p>

              </div>

            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
