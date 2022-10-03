import styles from './Course.module.scss'


type Props = {
    id: number,
    title: string,
    price: number,
    image: string,
    duration: string
}

const Course: React.FC<Props> = ({id, title, price, image, duration}) => {

    return <div className={styles.boxCourse}>
        <div className={styles.redBox}/>
        <div className={styles.courseBorder}>
           <img className={styles.img} src={image} alt={image}></img>
           <div className={styles.titlePic}>{title}</div>
        </div>

        <div className={styles.boxDescription}>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{price}$</div>
            <div className={styles.duration}><div className={styles.dot}/>{duration}</div>
        </div>
        

        <div className={styles.boxButton}>
            <div className={styles.boxsignup}/>
            <div className={styles.signup}>sign up</div>
            <div className={styles.learnmore}><div className={styles.line}/>learn more</div>
        </div>

    </div>
}

export default Course;