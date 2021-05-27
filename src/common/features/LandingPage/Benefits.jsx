import React from 'react';
import styled from 'styled-components';
// import ListStyleIcon from '../../../assets/images/list-icon.png';

const BenefitsWrapper = styled.section`
    background: #ffffff;
    width: 100%;
    height: auto;
`

const ContentWrapper = styled.div`
    padding: 60px 0;
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media (max-width: 766px) {
        margin-top: 40px;
    }
`

const Title = styled.div`
    margin-bottom: 20px;
`

const Image = styled.img`
    width: 100%;
    max-height: 390px;
    @media (min-width: 1200px) {
        width: 80%;
    }
`

const UL = styled.ul`
    margin-top: 10px;   
`

const ListEl = styled.li`
    font-weight: 500;
    line-height: 1.8;
    list-style: none;

    :before {
        content: '';
        display: inline-block;
        width: 18px;
        height: 16px;
        margin-right: 10px;
        background-image: url('${"/static/images/list-icon.png"}');
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media (min-width: 1200px) {
        margin-bottom: 10px;
    }
`

const Benefits = () => {
    return (
        <BenefitsWrapper className="main-wrapper-background">
            <div className="container">
                <ContentWrapper>
                    <div className="row">
                        <FlexContainer className="col-md-6">
                            <Image src={"/static/images/benefits.png"} alt="Benefits" />
                        </FlexContainer>

                        <FlexContainer className="col-md-6">
                            <div>
                                <Title>
                                    <h2>Benefits</h2>
                                </Title>
                                <div className="sub-title">
                                    <p>Lorem Ipsum is simply dummy text of the printing and another typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                </div>
                                <div className="list-benefits">
                                    <UL>
                                        <ListEl>Lorem Ipsum is simply dummy text of the another printing and typesetting industry.</ListEl>
                                        <ListEl>Lorem Ipsum is simply dummy text of the another printing and typesetting industry.</ListEl>
                                        <ListEl>Lorem Ipsum is simply dummy text of the another printing and typesetting industry.</ListEl>
                                    </UL>
                                </div>
                            </div>
                        </FlexContainer>
                    </div>
                </ContentWrapper>
            </div>
        </BenefitsWrapper>
    )
}

export default Benefits