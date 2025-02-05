import react from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePageTest from "./../assets/HomePageTest.png";
import {
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import lightbox1 from "./../assets/lightbox1.jpg";
import lightbox2 from "./../assets/lightbox2.jpg";
import lightbox3 from "./../assets/lightbox3.jpg";
import lightbox4 from "./../assets/lightbox4.jpg";
// import lightbox5 from './../assets/lightbox5.jpg';

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="home-page">
        <div className="first">
          <div className="left-home-side">
            <div className="left-heading">
              <h2>LabEase - Your path to Healthier Living.</h2>
            </div>
            <div className="left-txt">
              <p>
                Aliquid earum harum doloremque nemo est architecto quos nostrum
                provident vel? Quas.
              </p>
            </div>
            <div className="left-btn" style={{ display: "flex", gap: "10px" }}>
              <MDBBtn className="me-1" style={{ backgroundColor: "#75DBD0" }}>
                Get Started <MDBIcon fas icon="arrow-right" className="ms-1" />
              </MDBBtn>
              <MDBBtn
                className="me-1"
                color="#75DBD0"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                Speak to sales
              </MDBBtn>
            </div>
          </div>
          <div className="right-home-side">
            <img src={HomePageTest} alt="right test image" />
          </div>
        </div>

        {/* second */}

        <div className="second">
          <div className="Tooltip ">
            <MDBTooltip
              placement="top"
              wrapperProps={{ color: "#75DBD0" }}
              title="Health Pakages "
            >
              <ElectricBoltIcon
                style={{ backgroundColor: "#f8f9fa", color: "#75DBD0" }}
              />{" "}
              Health Pakages
            </MDBTooltip>
            <MDBTooltip
              wrapperProps={{ color: "#75DBD0", backgroundColor: "#f8f9fa" }}
              placement="top"
              title="Browse Tests"
            >
              <ElectricBoltIcon
                style={{ backgroundColor: "#f8f9fa", color: "#75DBD0" }}
              />{" "}
              Browse Tests
            </MDBTooltip>
            <MDBTooltip
              wrapperProps={{ color: "#75DBD0" }}
              placement="top"
              title="Upload Prescription"
            >
              <ElectricBoltIcon
                style={{ backgroundColor: "#f8f9fa", color: "#75DBD0" }}
              />{" "}
              Upload Prescription
            </MDBTooltip>
            <MDBTooltip
              wrapperProps={{ color: "#75DBD0" }}
              placement="top"
              title="Book Call"
            >
              <ElectricBoltIcon
                style={{ backgroundColor: "#f8f9fa", color: "#75DBD0" }}
              />{" "}
              Book Call
            </MDBTooltip>
          </div>
        </div>
        <div className="third">
          <div className="heading">
            <h2>Lab Tests By Health Concerns </h2>
          </div>
          <div className="lightbox">
            <div className="a">
              <img src={lightbox1} alt="a" />
            </div>
            <div className="b">
              <img src={lightbox2} alt="b" />
            </div>
            <div className="c">
              <img src={lightbox3} alt="c" />
            </div>
            <div className="d">
              <img src={lightbox4} alt="d" />
            </div>
          </div>
        </div>
        <div className="fourth">
  <div className="heading">
    <h2>Frequently Booked Packages</h2>
  </div>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <MDBCard alignment="center">
        <MDBCardHeader >Pakage</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Advance Renal Pakage</MDBCardTitle>
          <MDBBtn href="#"  className="custom-btn">Book Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
    <div className="col">
      <MDBCard alignment="center">
        <MDBCardHeader>Pakage</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Second Package</MDBCardTitle>
          <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
    <div className="col">
      <MDBCard alignment="center">
        <MDBCardHeader>Pakage</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Third Package</MDBCardTitle>
          <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  </div>
  <div className="mb-4"></div>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <MDBCard alignment="center">
        <MDBCardHeader>Pakage</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Fourth Package</MDBCardTitle>
          <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
    <div className="col">
      <MDBCard alignment="center">
        <MDBCardHeader>Pakage</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Fifth Package</MDBCardTitle>
          <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  
    <div className="col">
      <MDBCard alignment="center">
        <MDBCardHeader>Pakage</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Sixth Package</MDBCardTitle>
          <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  </div>

  <div className="mb-4"></div>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <MDBCard alignment="center">
        <MDBCardHeader>Pakage</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Seventh Package</MDBCardTitle>
          <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
    <div className="col">
      <MDBCard alignment="center">
        <MDBCardHeader>Pakage</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Eighth Package</MDBCardTitle>
          <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
    <div className="col">
      <MDBCard alignment="center">
        <MDBCardHeader>Pakage</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Ninth Package</MDBCardTitle>
          <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  </div>
</div>
        <div className="fifth">
         <div className="heading">
          <h2>Frequently Booked Tests</h2>
         </div>
     
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <MDBCard alignment="center">
        <MDBCardHeader>Pakage</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Advance Renal Pakage</MDBCardTitle>
          <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
    <div className="col">
      <MDBCard alignment="center">
        <MDBCardHeader>Pakage</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Second Package</MDBCardTitle>
          <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
    <div className="col">
      <MDBCard alignment="center">
        <MDBCardHeader>Pakage</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Third Package</MDBCardTitle>
          <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
