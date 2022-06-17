import styles from '../styles/index.module.css';
import Image from 'next/image';
import rocket from '../public/rocket.jpeg';




function Home(){
    return(
        <div className = {styles.container}>

            <header className= {styles.header}>
                
                <nav>
                    <ul className = {styles.list}>
                        <li><a href = '#'>Projects</a></li>
                        <li><a href = '#'>Work experience</a></li>
                        <li><a href = '#'>contact</a></li>

                    </ul>
                </nav>


            </header>

            <main className = {styles.main}>

                <div className = {styles.content_left}>
                    <h1 className = {styles.firstTitle}>Christian Chavez</h1>
                    <h2 className = {styles.secondTitle}>Software engineer</h2>
                    <p className = {styles.paragraph}>
                        Thank you very much for taking the time to view my site! My name is Christian and I am a
                        self-taught developer that has a passion for STEM, and enjoy combat sports. If there is anything that I have learned
                        about myself from such sports, it's that no matter how tired I am, or how many times I get knocked down; I
                        always get up and am never discouraged. I have the same philosophy when it comes to problem solving, and learning anything in general.
                        No matter how difficult something is, I will always push through it and resolve the issue. 
                    </p>
                    
                </div>

                <div className = {styles.content_right}>
                   <img src = '/rocket.jpeg' className ={styles.rocket} />
                </div>

            </main>

        </div>
    )
}



export default Home;