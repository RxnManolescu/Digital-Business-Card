
import avatar from '../assets/avatar.jpg'
import linkedInIcon from '../assets/linkedin-icon.png'

export default function Info() {
    return (
        <div className="info-container">
            <img src={avatar} alt="Roxana's avatar picture"  className='avatar-img'/>
            <div className="info-details">
                <h1 className="name">Roxana Manolescu</h1>
                <p className="occupation">Frontend Developer</p>
                <a href="https://www.linkedin.com/in/roxana-manolescu" className='linkedIn-link-container' target='_blank'>
                    <img src={linkedInIcon} alt="" className='linkedin-icon' />
                    LinkedIn
                </a>
            </div>
        </div>
    )
}