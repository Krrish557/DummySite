import footerimg from "../../assets/footer.jpg";
import ig from "../../assets/icons/instagram.png";
import fb from "../../assets/icons/facebook.png";
import li from "../../assets/icons/linkedin.png";
import wa from "../../assets/icons/whatsapp.png";
function Footer() {
  return (
    <>
      <div id="footer">
        <footer>
          <p>
            {" "}
            To contact me you can mail me on{" "}
            <a
              href="mailto:dhruvkataria740@gmail.com"
              style={{ color: "white" }}
            >
              dhruvkataria740@gmail.com.
            </a>
          </p>
          <img src={footerimg} id="footimg" />
          <div id="footerContainer1">
            <h4>Categories</h4>
            <h5>Home</h5>
            <h5>Order</h5>
            <h5>Local For Vocal</h5>
            <h5>Cart</h5>
          </div>
          <div id="footerContainer2">
            <h4>Customer Service</h4>
            <h5>Return Policy</h5>
            <h5>About</h5>
            <h5>Contact</h5>
          </div>
          <div id="footerContainer3">
            <h4>Services</h4>
            <h5>Terms and Conditions</h5>
            <h5>Privacy</h5>
          </div>
          <div id="footerContainer4">
            <h4>Connect with us</h4>
            <h5 id="contactLogo">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ig} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fb} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={li} />
              </a>
              <a
                href="https://web.whatsapp.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={wa} />
              </a>
            </h5>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
