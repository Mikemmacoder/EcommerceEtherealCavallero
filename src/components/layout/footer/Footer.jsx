import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="containerImg">
        <img
          src="https://res.cloudinary.com/dmmszaubf/image/upload/v1689791873/ethereal-logo-blanco_j1seyl.png"
          alt="Logo Ethereal"
          width={320}
        />
      </div>
      <p>© 2023 ethereal - Córdoba Argentina</p>
      <div className="iconsContainer">
        <a href="https://wa.me/+543512086395" target="blank">
          <WhatsAppIcon id="icon" />
        </a>
        <a href="https://www.instagram.com/ulauladesign/" target="blank">
          <InstagramIcon id="icon" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100069033886169"
          target="blank"
        >
          <FacebookIcon id="icon" />
        </a>
        <a href="https://www.youtube.com/" target="blank">
          <YouTubeIcon id="icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
