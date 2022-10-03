import styles from './Home.module.scss'
import '../../fonts/Beardies.ttf'
import '../../fonts/New-YorkerC.ttf'
import urlImage1 from '../../componnents/images/Home/Home1.png'
import urlImage2 from '../../componnents/images/Home/Home2.png'
import urlImage3 from '../../componnents/images/Home/Home3.png'

const Home: React.FC = () => {




    return <div className={styles.root}>




        <span className={styles.learn}>learn</span>
        <div className={styles.photography1}>PHOTOGRAPHY</div>
        <div className={styles.photography2}>PHOTOGRAPHY</div>

        <div className={styles.never1}>NEVER</div>
        <div className={styles.never2}>NEVER</div>

        <div className={styles.like}>like</div>
        <div className={styles.before}>Before</div>


        <div className={styles.boxGetStarted}>

        </div>
        <div className={styles.getStarted}>get started</div>


        <div className={styles.box1}></div>

        <div className={styles.box2}></div>

        <div className={styles.box3}></div>

        <div className={styles.boxImg1}>
            <img className={styles.img1} src={urlImage1} alt={urlImage1} />
        </div>

        <div className={styles.boxImg2}>
            <img className={styles.img2} src={urlImage2} alt={urlImage2} />
        </div>

        <div className={styles.boxImg3}>
            <img className={styles.img3} src={urlImage3} alt={urlImage3} />
        </div>
    </div>
}
export default Home;