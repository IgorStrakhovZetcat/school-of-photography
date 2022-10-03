import styles from './AboutUs.module.scss'
import '../../fonts/Beardies.ttf'
import '../../fonts/New-YorkerC.ttf'
import { TEXT_ABOUT_US } from '../../componnents/util/globalConstans'
import urlImage from '../../componnents/images/AboutUs/aboutUs.jpeg'


const AboutUs: React.FC = () => {
    

    return <div className={styles.root}>

    <div className={styles.about}>ABOUT</div>
    <div className={styles.us}>Us</div>
    <div className={styles.text}>{TEXT_ABOUT_US}</div>

    <div className={styles.box1}></div>
    <div className={styles.box2}></div>
    
    <div className={styles.box3}>
        <img className={styles.img} src={urlImage} alt={urlImage}/>
    </div>


    
    </div>
}

export default AboutUs;