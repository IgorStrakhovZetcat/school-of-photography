import styles from './Mentor.module.scss'


type Props = {
    id: number,
    name: string,
    age: number,
    experience: number,
    image: any
}
const Mentor: React.FC<Props> = ({id, name, age, experience, image}) => {


    return <div className={styles.boxMentor}>
        <div className={styles.redBorder}/>
            
        <img className={styles.img} src={image} alt={image}/>

        <div className={styles.boxDescription}>
            <div className={styles.name}>{name}</div>
            <div className={styles.age}><div className={styles.dot}/>Age: {age} years</div>
            <div className={styles.experience}><div className={styles.dot}/>Experience: {experience} years</div>
        </div>

        

    </div>
}

export default Mentor;