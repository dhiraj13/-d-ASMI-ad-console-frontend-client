import React from 'react';
import styled from 'styled-components'

const DemoWrapper = styled.section`
    background: #EAECEF;
    width: 100%;
    height: auto;
`
const ContentWrapper = styled.div`
    padding: 60px 0;
`
const Subtitle = styled.div`
    color: #707070;
    font-size: 14px;
    display: inline-block;
`
const VideoDemoWrapper = styled.div`
    margin-top: 30px;
`
const ImageCarouselFlex = styled.div`
    @media (max-width: 540px) {
        margin-top: 40px;
    }
`
const ImageItemContainer = styled.div`
    text-align: center;
    margin-bottom: 80px;
    
    :nth-child(3), :nth-child(4) { 
        margin-bottom: 0;
    }    
    @media (max-width: 766px) {
        margin-bottom: 40px;
    }
`
const Image = styled.img`
    width: 60%;
`

const VideoPlayer = styled.img`
    width: 100%;
    height: 100%;
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media (max-width: 540px) {
        display: block;
    }
`


const Demonstration = () => {
    return (
        <DemoWrapper className="background-wraper">
            <div className="container">
                <ContentWrapper>
                    <div className="title-subtitle text-center">
                        <h3>Demonstration</h3>
                        <Subtitle>Video Content Analyzed to Ensure healthy Foreground for Publishers & Advertisers</Subtitle>
                    </div>
                    <VideoDemoWrapper>
                        <FlexContainer className="row">
                            <div className="col-md-6 order-md-2">
                                <VideoPlayer src={"/static/images/demonstration-big.png"} alt="Demstration" />
                            </div>
                            <div className="col-md-6 order-md-1">
                                <ImageCarouselFlex className="row">
                                    <ImageItemContainer className="col-6"><Image src={"/static/images/demo1.png"} alt="Demonstration" /> </ImageItemContainer>
                                    <ImageItemContainer className="col-6"><Image src={"/static/images/demo2.png"} alt="Demonstration" /> </ImageItemContainer>
                                    <ImageItemContainer className="col-6"><Image src={"/static/images/demo3.png"} alt="Demonstration" /> </ImageItemContainer>
                                    <ImageItemContainer className="col-6"><Image src={"/static/images/demo4.png"} alt="Demonstration" /> </ImageItemContainer>
                                </ImageCarouselFlex>
                            </div>

                        </FlexContainer>
                    </VideoDemoWrapper>
                </ContentWrapper>
            </div>
        </DemoWrapper>
    )
}

export default Demonstration