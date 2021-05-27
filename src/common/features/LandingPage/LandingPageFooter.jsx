import React from 'react';
import styled from 'styled-components';


const FooterWrapper = styled.section`
    background: #1A5E73;
    width: 100%;
    height: auto;
    color: #ffffff;
    text-align: center;
`

const ContentWrapper = styled.div`
    padding: 25px 0;
`

const LandingPageFooter = () => {
    return (
        <FooterWrapper className="content-wrapper">
            <div className="container">
                <ContentWrapper>
                    <p>Copyright &#169; All rights reserved | ASMI</p>

                </ContentWrapper>
            </div>
        </FooterWrapper>
    )
}

export default LandingPageFooter