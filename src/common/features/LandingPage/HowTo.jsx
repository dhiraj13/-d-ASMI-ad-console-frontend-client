import React from 'react';
import styled from 'styled-components';

const HowToWrapper = styled.section`
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
    margin-top: 5px;
`

const StepsWrapper = styled.div`
    margin-top: 60px;
    padding: 0 60px;
    @media (max-width: 766px) {
        padding: 0 20px;
        text-align: center;
    }
`
const StepWrapper = styled.div`
    margin-bottom: 25px;
`
const StepTitle = styled.div`
    font-weight: bold;
    margin: 5px 0 10px 0;
`

const HowTo = () => {
    return (
        <HowToWrapper className="howto-wrapper">
            <div className="container">
                <ContentWrapper>
                    <div className="title-subtitle text-center">
                        <div className="title">
                            <h3>How to use Ad Injection?</h3>
                        </div>
                        <Subtitle>
                            <p>Video Content Analyzed to Ensure Healthy Foreground for Publishers & Advertisers.</p>
                        </Subtitle>
                    </div>

                    <StepsWrapper className="steps-wrapper">
                        <div className="row">
                            <StepWrapper className="col-sm-6 col-md-4">
                                <StepTitle>Step 1</StepTitle>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </StepWrapper>
                            <StepWrapper className="col-sm-6 col-md-4">
                                <StepTitle>Step 1</StepTitle>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </StepWrapper>
                            <StepWrapper className="col-sm-6 col-md-4">
                                <StepTitle>Step 1</StepTitle>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </StepWrapper>
                            <StepWrapper className="col-sm-6 col-md-4">
                                <StepTitle>Step 1</StepTitle>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </StepWrapper>
                            <StepWrapper className="col-sm-6 col-md-4">
                                <StepTitle>Step 1</StepTitle>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </StepWrapper>
                            <StepWrapper className="col-sm-6 col-md-4">
                                <StepTitle>Step 1</StepTitle>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </StepWrapper>
                        </div>
                    </StepsWrapper>
                </ContentWrapper>
            </div>
        </HowToWrapper>
    )
}

export default HowTo