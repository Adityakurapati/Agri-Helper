import Image from 'next/image';
import styles from './about.module.css'
const AboutPage=() =>
{
        return (
                <div className={ styles.container }>
                        <div className={ styles.textContainer }>
                                <h1 className={ styles.title }>Aboutn Agency</h1>
                                <p className={ styles.heading }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt commodi illum at amet officia beatae.</p>
                                <p className={ styles.discription }>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates molestiae voluptatem qui.
                                </p>
                                <div className={ styles.boxes }>
                                        <div className={ styles.box }>
                                                <h1>10+</h1>
                                                <p>Year Of Experiance</p>
                                        </div>
                                        <div className={ styles.box }>
                                                <h1>10+</h1>
                                                <p>Year Of Experiance</p>
                                        </div>
                                        <div className={ styles.box }>
                                                <h1>10+</h1>
                                                <p>Year Of Experiance</p>
                                        </div>
                                </div>
                        </div>
                        <div className={ styles.imgContainer }>
                                <Image src='/about.png' alt='about ' fill className={ styles.img } />
                        </div>
                </div>
        )
}

export default AboutPage
