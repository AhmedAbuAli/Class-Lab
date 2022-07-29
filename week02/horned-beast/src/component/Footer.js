import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {
    render(){
        return (
            <>
    <MDBFooter style={{ marginTop : '100vh' }} className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          Horned Beast Project
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Ahmed Abu-Ali
        </a>
      </div>
    </MDBFooter>
            </>
            

        )
    }
}
export default Footer