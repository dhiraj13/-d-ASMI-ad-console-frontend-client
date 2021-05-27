import React from 'react';
import styled from 'styled-components';
import VideoPlayerImage from '../../../assets/images/video-player.png'

const BannerWrapper = styled.section`
    width: 100%;
    height: 100vh;
    background: transparent linear-gradient(293deg, #C3701D 0%, #1A5E73 100%) 0% 0% no-repeat padding-box;
    overflow: none;

    @media (max-width: 766px) {
        height: auto;
        padding: 80px 0;
    }
    
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    align-items: center;
    align-content: center;
`

const FlexItem = styled.div`
    display: block;
    flex-grow: 0;
    flex-basis: auto;
    align-self: stretch;
`

const BannerTitle = styled.h1`
    color: #ffffff;
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.45;

    @media (max-width: 1200px) {
        font-size: 3.4rem;
    }
    @media (max-width: 992px) {
        font-size: 2.8rem;
    }
`

const BannerDescription = styled.p`
    color: white;
    font-size: 1.3rem;
    font-weight: 400;

    @media (max-width: 992px) {
        font-size: 1rem;
    }
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`

const ImageContainer = styled.div`
    width: 100%;
    text-align: center;
`

const VideoPlayer = styled.img`
    width: '80%';
    @media (max-width: 768px) {
        width: 100%;
    }
`

const Banner = () => {


    return (
        <BannerWrapper>
            <div className="container" style={{ height: '100%' }}>
                <FlexContainer className="row">
                    <FlexItem className="col-md-6 py-4">
                        <BannerTitle>Welcome to the <p style={{ color: '#D59A60' }}>Ad Injection</p></BannerTitle>
                        <BannerDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the indus standard ever since the 1500s.</BannerDescription>
                        <button className="btn btn-primary btn-lg">Get Started</button>
                    </FlexItem>
                    <FlexItem className="col-md-6">
                        <ImageContainer>
                            <VideoPlayer src={VideoPlayerImage} alt="Add Video Player here" />
                        </ImageContainer>
                    </FlexItem>
                </FlexContainer>
            </div>
        </BannerWrapper>
    )
}

export default Banner