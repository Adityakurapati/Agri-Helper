import Image from "next/image";
import styles from "./home.module.css";
import { insertData } from '../lib/data.js'
export default async function Home ()
{
        // await insertData();
        return ( <main>
                <section className={ styles.container }>
                        <article className={ styles.textContainer }>
                                <h1 className={ styles.heading }>Creative Throught Web </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam quas quae!</p>
                                <div className={ styles.buttonsContainer }>
                                        <button className={ styles.button }>Learn More</button>
                                        <button className={ styles.button }>Start Here</button>
                                </div>
                                <div className={ styles.brands }>
                                        <Image src='/brands.png' alt="" className={ styles.brandImg } fill />
                                </div>
                        </article>
                        <article className={ styles.imgContainer }>
                                <Image src='/hero.gif' alt='' fill />
                        </article>
                </section>

        </main> );
}
