import styles from './StudentsWork.module.scss'
import image1 from '../../componnents/images/StudentWork/sw1.jpg'
import image2 from '../../componnents/images/StudentWork/sw2.jpg'
import image3 from '../../componnents/images/StudentWork/sw3.jpg'
import image4 from '../../componnents/images/StudentWork/sw4.jpg'
import image5 from '../../componnents/images/StudentWork/sw5.jpg'
import image6 from '../../componnents/images/StudentWork/sw6.jpg'
import image7 from '../../componnents/images/StudentWork/sw7.jpg'


const StudentsWork: React.FC = () => {



    return <div className={styles.root}>
        <div className={styles.student1}>STUDENT</div>
        <div className={styles.student2}>STUDENT</div>

        <div className={styles.work}>Work</div>


        <div className={styles.box1}>
            <img className={styles.image1} src={image1} alt={image1} />
        </div>

        <div className={styles.box2}>
            <img className={styles.image2} src={image2} alt={image2} />
        </div>

        <div className={styles.box3}>
            <img className={styles.image3} src={image3} alt={image3} />
        </div>

        <div className={styles.box4}>
            <img className={styles.image4} src={image4} alt={image4} />
        </div>

        <div className={styles.box5}>
            <img className={styles.image5} src={image5} alt={image5} />
        </div>

        <div className={styles.box6}>
            <img className={styles.image6} src={image6} alt={image6} />
        </div>

        <div className={styles.box7}>
            <img className={styles.image7} src={image7} alt={image7} />
        </div>

    </div>
}


export default StudentsWork;