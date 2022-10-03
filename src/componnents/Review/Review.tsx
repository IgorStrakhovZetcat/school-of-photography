import styles from './Review.module.scss'


type Props = {
    id: number,
    name: string,
    age: number,
    course: string,
    review: string,
    image: any,
    rating: number
}

const Review: React.FC<Props> = ({id, name, age, course, review, image, rating}) => {


    return <div className={styles.boxReview}>
        <div className={styles.frame}/>
        <img className={styles.image} src={image} alt={image}/>

        <div className={styles.boxDescription}>
            <div className={styles.name}>{name}</div>
            <div className={styles.age}><div className={styles.dot}/>Age: {age} years</div>
            <div className={styles.course}><div className={styles.dot}/>Course: {course}</div>
            <div className={styles.review}>{review}</div>
        </div>
        
    </div>
}

export default Review;