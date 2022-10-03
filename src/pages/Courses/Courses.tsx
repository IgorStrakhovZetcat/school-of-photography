import Course from '../../componnents/Course/Course';
import styles from './Courses.module.scss'
import urlImage1 from '../../componnents/images/Courses/course1.jpg'
import urlImage2 from '../../componnents/images/Courses/course2.jpg'
import urlImage3 from '../../componnents/images/Courses/course3.jpg'
import urlImage4 from '../../componnents/images/Courses/course4.jpg'



const Courses: React.FC = () => {


    return <div className={styles.root}>
        
        <div className={styles.our}>Our</div>
        <div className={styles.courses1}>COURSES</div>
        <div className={styles.courses2}>COURSES</div>

        <div className={styles.boxCourses}>

            <Course id={1} title={'Free Lesson'} price={0} image={urlImage1} duration={'2 hours'}/>
            <Course id={2} title={'Basic Course'} price={300} image={urlImage2} duration={'2 month, 2 times/week'}/>
            <Course id={3} title={'Advanced Course'} price={400} image={urlImage3} duration={'3 month, 2 times/week'}/>
            <Course id={4} title={'Pro Course'} price={500} image={urlImage4} duration={'3 month, 3 times/week'}/>
        </div>

    </div>
}

export default Courses;