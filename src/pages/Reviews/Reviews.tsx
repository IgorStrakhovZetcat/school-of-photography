import styles from './Reviews.module.scss'
import image1 from '../../componnents/images/Reviews/review1.jpg'
import image2 from '../../componnents/images/Reviews/review2.jpg'
import Review from '../../componnents/Review/Review'


const Reviews: React.FC = () => {
    const rev1 = 'This course went beyond my expectations! The lessons were very practical for aspiring photographers of the modern era, especially if one wants to really stick to the field of professional photography'
    const rev2 = 'It was an excellent course, highly practical and with lessons that go straight to the point, this is a course that invites you project yourself to advance and continue learning about photography'

    return <div className={styles.root}>
        <div className={styles.reviews1}>REVIEWS</div>
        <div className={styles.reviews2}>REVIEWS</div>
        <div className={styles.aboutus}>About us</div>

        <div className={styles.boxReviews}>
            <Review id={1} name={'Pamela Smith'} age={25} course={'Advansed'} review={rev1} image={image1} rating={5} />
            <Review id={1} name={'Peter Collin'} age={32} course={'Basic'} review={rev2} image={image2} rating={4.5} />
        </div>
    </div>
}

export default Reviews;