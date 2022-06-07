import classes from './Hero.module.css'

const Hero = ({ children }) => {
    return (<div className={classes.hero}>
        {children}
    </div>)
}

export default Hero