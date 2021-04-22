import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Om oss</Footer.Title>
                    <Footer.Link href="#">Tiba</Footer.Link>
                    <Footer.Link href="#">Andrea</Footer.Link>
                    <Footer.Link href="#">Rebecka</Footer.Link>
                    <Footer.Link href="#">Anna</Footer.Link>
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
                    <Footer.Title>Sociala medier</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}