import React from 'react';
import styled from 'styled-components';


const ContactWrapper = styled.section`
    background: #EDD4BA;
    width: 100%;
    height: auto;
`

const ContentWrapper = styled.div`
    padding: 60px 0;
`

const Contact = () => {
    return (
        <ContactWrapper>
            <div className="container">
                <ContentWrapper>
                    <h1>Contact Information & Get in Touch Here</h1>
                </ContentWrapper>
            </div>
        </ContactWrapper>
    )
}

export default Contact

