/* eslint-disable */
import logo from '../assets/GDSC-LOGO.png';


const Footer = () => {
  return (
    <div className="p-28">
      <footer id="contact" className="bg-transparent text-grey-500 py-16 p-20">
        <div className="container mx-auto flex justify-between">
          <div className="first-section flex gap-48  items-center space-x-6">
            <div className="text-center">
              <img src={logo} width={200} alt=""  className="mx-auto my-4" />
              <p className="text-lg">MIT ADT UNIVERSITY</p>
              <p className="text-sm">Copyright © 2021 All Rights Reserved.</p>
            </div>
            <div className="associate mr-12">
              <h4 className="text-xl font-semibold">Partners</h4>
              <ul>
                <li><a href="#">Women Techmakers</a></li>
                <li><a href="#">Google Developer Experts</a></li>
                <li><a href="#">Google Developers Groups</a></li>
              </ul>
            </div>
            <div className="associate mr-12">
              <h4 className="text-xl font-semibold">Developers</h4>
              <ul>
                <li><a href="#">Flutter</a></li>
                <li><a href="#">Google Cloud Platform</a></li>
                <li><a href="#">Code of conduct</a></li>
              </ul>
            </div>
            <div className="associate mr-12">
              <h4 className="text-xl font-semibold">Contribute</h4>
              <ul>
                <li><a href="#">Telegram</a></li>
                <li><a href="#">Discord</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
