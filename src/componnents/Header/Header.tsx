
import styles from './Header.module.scss'


const Header: React.FC = () => {



    return <div className={styles.root}>
        <div className={styles.menu}>
            <a className={styles.item} href={'/aboutus'}>
                <div >ABOUT US</div>
            </a>

            <div className={styles.line} />

            <a className={styles.item} href={'/courses'}>
                <div >COURSES</div>
            </a>

            <div className={styles.line} />

            <a className={styles.item} href={'/mentors'}>
                <div>MENTORS</div>
            </a>

            <a className={styles.item} href={'/'}>
                <div>CROP</div>
            </a>

            <a className={styles.item} href={'/studentswork'}>
                <div>STUDENT WORK</div>
            </a>

            <div className={styles.line} />

            <a className={styles.item} href={'/reviews'}>
                <div >REVIEWS</div>
            </a>

            <div className={styles.line} />

            <a className={styles.item} href={'/contacts'}>
                <div >CONTACTS</div>
            </a>
        </div>
    </div>
}

export default Header;