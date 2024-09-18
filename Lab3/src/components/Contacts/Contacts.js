import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="contacts">
      <img src="./photo.jpg" className="photo" />
      <h4>Contacts</h4>
      <ul className="conntacts_list">
        <li>kyryll2016@gmail.com</li>
        <li>+380686068152</li>
      </ul>
      <h4>Socials</h4>
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/kyrylo-muzychka-1a0a1b2a2/"
          target="_blank"
        >
          <img
            src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=flat-square&logo=linkedin&logoColor=white"
            alt="LinkedIn"
          />
        </a>
        <a href="https://www.instagram.com/k.muzychka_/" target="_blank">
          <img
            src="https://img.shields.io/badge/Instagram-%23E4405F.svg?&style=flat-square&logo=instagram&logoColor=white"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100011341651597&locale=uk_UA"
          target="_blank"
        >
          <img
            src="https://img.shields.io/badge/Facebook-%231877F2.svg?&style=flat-square&logo=facebook&logoColor=white"
            alt="Facebook"
          />
        </a>
      </div>
    </div>
  );
}
