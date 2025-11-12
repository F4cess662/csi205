import { Button, ButtonGroup } from 'react-bootstrap';
import React from 'react';

const AppFooter = () => {
    return (
      <div className="bg-success fs-5 text-center mb-3 text-white p-2">
        <p className='mb-2'>
          มหาวิทยาลัยศรีปทุม/คณะเทคโนโลยีสารสนเทศ/วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
        </p>
        <div className="text-center mb-3 d-flex justify-content-center align-items-center fs-4">
          <div>Contact Me:&nbsp;</div>
          <ButtonGroup>
            <Button
              variant="primary"
              href="https://www.facebook.com/suttipong.sumrit/"
              target="_blank"
              className="me-2 d-flex align-items-center"
            >
              <i className="bi bi-facebook me-2"></i> Facebook
            </Button>

            <Button
              variant="danger"
              href="https://www.instagram.com/f.stp_/?hl=en" 
              target="_blank"
              className="d-flex align-items-center"
            >
              <i className="bi bi-instagram me-2"></i> Instagram
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  };

export default AppFooter;
