import React from 'react';
import styled from 'styled-components';


const ServicesWrapper = styled.section`
    background: #ffffff;
    width: 100%;
    height: auto;
`

const ContentWrapper = styled.div`
    padding: 60px 0;
`

const FeatureContent = styled.div`
    margin-top: 30px;
`

const FeatureTitleDescription = styled.div`
    margin-top: 10px;
`

const Services = () => {
    return (
        <ServicesWrapper>
            <div className="container text-center">
                <ContentWrapper>
                    <div>
                        <h3>Features & Services</h3>
                    </div>
                    <FeatureContent className="feature-content">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={"/static/images/feature1.png"} alt="Features & Services" />
                                <FeatureTitleDescription>
                                    <h6>Content Moderation</h6>
                                    <p>Video Content Analyzed to Ensure Healthy Foreground for Publishers & Advertisers</p>
                                </FeatureTitleDescription>
                            </div>
                            <div className="col-md-3">
                                <img src={"/static/images/feature2.png"} alt="Features & Services" />

                                <FeatureTitleDescription className="content">
                                    <h6>In-Video Advertisements</h6>
                                    <p>World Class AI Carves Out New 'Blank Spaces' to Serve New Stunning Automated Ads</p>
                                </FeatureTitleDescription>

                            </div>
                            <div className="col-md-3">
                                <img src={"/static/images/feature3.png"} alt="Features & Services" />
                                <FeatureTitleDescription className="content">
                                    <h6>Product Recognition</h6>
                                    <p>Unique AI that identifies 100M+ SKU's to Drive Up Value of Every Video</p>
                                </FeatureTitleDescription>
                            </div>
                            <div className="col-md-3">
                                <img src={"/static/images/feature4.png"} alt="Features & Services" />
                                <FeatureTitleDescription className="content">
                                    <h6>Automated Shoppable Video</h6>
                                    <p>Seamless Curation of Native Ads Program to Drive in-App Purchases with One Click</p>
                                </FeatureTitleDescription>
                            </div>
                        </div>
                    </FeatureContent>
                </ContentWrapper>

            </div>
        </ServicesWrapper>

    )
}

export default Services