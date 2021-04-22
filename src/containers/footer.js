import React from 'react'
import Footer from '../components/footer'

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Om oss</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Kategorier</Footer.Title>
                    <Footer.Link href="#">Vego</Footer.Link>
                    <Footer.Link href="#">Kött</Footer.Link>
                    <Footer.Link href="#">Fisk</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Kontakta oss</Footer.Title>
                    <Footer.Link href="#">tara@info.se</Footer.Link>
                    <Footer.Link href="#">070 123 456 78</Footer.Link>
                    <Footer.Link href="#">Receptvägen 4, Stockholm</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#">Facebook</Footer.Link>
                    <Footer.Link href="#">Instagram</Footer.Link>
                    <Footer.Link href="#">Twitter</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}