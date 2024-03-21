
import facebookIcon from '../assets/facebook-icon.png'
import githubIcon from '../assets/github-icon.png'
import instagramIcon from '../assets/instagram-icon.png'

export default function Footer() {
    return (
        <div className="footer-container">
            <a href="https://www.facebook.com/Rxn.Manolescu/" target='_blank'>
                <img src={facebookIcon} alt="facebook icon" />
            </a>
            <a href="https://www.instagram.com/rxn.man/" target='_blank'>
                <img src={instagramIcon} alt="instagram icon" />
            </a>
            <a href="https://github.com/RxnManolescu" target='_blank'>
                <img src={githubIcon} alt="GitHub icon" />
            </a>
        </div>
    )
}