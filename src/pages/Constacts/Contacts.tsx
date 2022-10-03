import styles from './Contacts.module.scss'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RoomIcon from '@mui/icons-material/Room';
import PublicIcon from '@mui/icons-material/Public';
import EmailIcon from '@mui/icons-material/Email';
import { TextField } from '@mui/material';

const Contacts: React.FC = () => {


    return <div className={styles.root}>
        <div className={styles.getIn}>Get in</div>
        <div className={styles.touch1}>TOUCH</div>
        <div className={styles.touch2}>TOUCH</div>

        <div className={styles.frame}/>

        <div className={styles.boxFillOut}>
            <div className={styles.title}>Sign up for a free lesson</div>
            <div className={styles.text}>Leave a request and get certificate for the first lesson</div>
            <TextField className={styles.fieldName} id="standard-basic" label="Name" variant="standard" />
            <TextField className={styles.fieldPhone} id="standard-basic" label="Phone number" variant="standard" />
            <TextField className={styles.fieldEmail} id="standard-basic" label="Email" variant="standard" />
            <div className={styles.frameApply}/>
            <div className={styles.apply}>apply</div>
        </div>

        <LocalPhoneIcon className={styles.iconPhone} fontSize='large'/>
        <div className={styles.phoneNumber}>Phone number</div>
        <div className={styles.number}>+972 53 715 96 79</div>

        <RoomIcon className={styles.iconAddress} fontSize='large'/>
        <div className={styles.address}>Address</div>
        <div className={styles.addressEx}>Bat-Yam, Israel</div>

        <PublicIcon className={styles.iconSite} fontSize='large'/>
        <div className={styles.site}>Site</div>
        <a href='https://github.com/IgorStrakhovZetcat' className={styles.link}>github.com/IgorStrakhovZetcat</a>

        <EmailIcon className={styles.iconEmail} fontSize='large'/>
        <div className={styles.email}>Email</div>
        <div className={styles.linkEmail}>igor.strakhov13@gmail.com</div>

    </div>
}

export default Contacts;