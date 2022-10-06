
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../config/service-config';
import { ClientData, emptyClientData } from '../../models/ClientData';
import { authAction } from '../../redux/actions';
import { StateType } from '../../redux/store';
import styles from './Header.module.scss'


const Header: React.FC = () => {
    const clientData: ClientData = useSelector<StateType, ClientData>(state => state.clientData);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();


    async function onLogout() {
        if(await authService.logout()) {
            
            dispatch(authAction(emptyClientData))
            navigate('/')
        }
       
    }

    
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
        <div className={styles.signInBox}>
            {clientData.email ? <div onClick={onLogout} className={styles.logOut}>Log out</div> : <a href='/signIn' className={styles.signIn}>Sign in</a>}
        </div>
        
    </div>
}

export default Header;
