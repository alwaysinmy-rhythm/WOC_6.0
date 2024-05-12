import React from 'react'
import {MDBFooter,MDBContainer,MDBCol,MDBRow,MDBIcon,MDBBtn} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const pagebottom = {
  marginTop : '150px'
}

function Footer() {
  return (
    <div style={pagebottom}>
    <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-2'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/IRCTCofficial/'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-2'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com/IRCTCofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-2'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://g.co/kgs/QpKwyZW'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-2'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/irctc.official/?hl=en'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-2'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/company/irctc'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-2'
            style={{ backgroundColor: '#333333' }}
            href='https://www.youtube.com/c/IRCTCOFFICIAL'
            role='button'
          >
            <MDBIcon fab icon='youtube' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://github.com/alwaysinmy-rhythm/WOC_6.0'>
          WOC 2024 React js 
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer