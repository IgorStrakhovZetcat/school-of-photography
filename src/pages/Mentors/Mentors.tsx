import Mentor from '../../componnents/Mentor/Mentor';
import styles from './Mentors.module.scss'

import image1 from '../../componnents/images/Mentors/mentor1.jpg'
import image2 from '../../componnents/images/Mentors/mentor2.jpg'
import image3 from '../../componnents/images/Mentors/mentor3.jpg'


const Mentors: React.FC = () => {

    return <div className={styles.root}>

        <div className={styles.best}>Best</div>
        <div className={styles.mentors1}>MENTORS</div>
        <div className={styles.mentors2}>MENTORS</div>

        <div className={styles.boxMentors}>
            <Mentor id={1} name={'Beth Owens'} age={28} experience={10} image={image1}/>
            <Mentor id={2} name={'Bryan Johnson'} age={35} experience={18} image={image2}/>
            <Mentor id={3} name={'Monika Carey'} age={24} experience={6} image={image3}/>

        </div>

    </div>
}

export default Mentors;