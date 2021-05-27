import React from 'react';
import styled from 'styled-components';

const PartnersWrapper = styled.section`
    background: #ffffff;
    width: 100%;
    height: auto;
`

const ContentWrapper = styled.div`
    padding: 60px 0;
`

const PartnerItem = styled.div`
    margin-bottom: 20px;
`

const PartnersName = styled.h6`
    margin: 20px 0 0 0;
`

const ImageCarouselWrapper = styled.div`
    margin-top: 40px;
`

const Partners = () => {
    return (
        <PartnersWrapper className="partners-wrapper">
            <div className="container text-center">
                <ContentWrapper>
                    <div className="title">
                        <h3>Our Partners</h3>
                    </div>
                    <ImageCarouselWrapper>
                        <div className="row">
                            <PartnerItem className="col-6 col-md-3">
                                <img src={"/static/images/facebook.png"} alt="Partners" />
                                <PartnersName>Youtube</PartnersName>
                            </PartnerItem>
                            <PartnerItem className="col-6 col-md-3">
                                <img src={"/static/images/tiktok.png"} alt="Partners" />
                                <PartnersName>TikTok</PartnersName>
                            </PartnerItem>
                            <PartnerItem className="col-6 col-md-3">
                                <img src={"/static/images/youtube.png"} alt="Partners" />
                                <PartnersName>Facebook</PartnersName>
                            </PartnerItem>
                            <PartnerItem className="col-6 col-md-3">
                                <img src={"/static/images/youtube.png"} alt="Partners" />
                                <PartnersName>Instagram</PartnersName>
                            </PartnerItem>
                        </div>
                    </ImageCarouselWrapper>
                </ContentWrapper>
            </div>
        </PartnersWrapper>
    )
}

export default Partners