/* import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; */

const SocialButton = ({faceIcon,gitHubIcon,linkedInIcon, textIcon}) => {
    return (
        <>
        <div className="iconStyle">
            <img className='icons' src={faceIcon} alt="" />
            <img className='icons' src={gitHubIcon} alt="" />
            <img className='icons' src={linkedInIcon} alt="" />
            {/* <FacebookRoundedIcon />
            <GitHubIcon />
            <LinkedInIcon /> */}
        </div>
        <p>{textIcon}</p>
        </>
    )
}

export default SocialButton