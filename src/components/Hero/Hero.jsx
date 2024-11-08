import React from 'react'
import styles from "./Hero.module.css"
import Spline from '@splinetool/react-spline';


export const Hero = () => {
  return (
    <>
     <Spline scene="https://prod.spline.design/bDQgb1moh719Avab/scene.splinecode" />
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Emmanuel Okinyi</h1>
        <h2 className={styles.desciption}>is a full-stack developer with 2 years of experience using HTML, CSS, Javascript and React.
         I am passionate about tech, ready to dive into new projects with amazing software solutions. 
             Feel free to reach out to learn more. </h2>
        <a className={styles.contactBtn} href="mailto:emmanuelokinyi799@gmail.com">Contact me</a>
    </div>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
   </section> 
   </>
  )
}
