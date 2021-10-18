import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Movies from './Movies'

function Home() {
    return (
        <div>
            <Container>
                <ImageSlider />
                <Viewers />
                <Movies />
            </Container>
        </div>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        content: '';
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`