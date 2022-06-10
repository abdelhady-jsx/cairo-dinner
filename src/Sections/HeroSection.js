import Hero from '../UI/Hero/Hero'
import classes from '../UI/Hero/Hero.module.css'
import healthyFoodClipart from '../Images/907-9070330_food-clipart-png-healthy-foods-clipart-png.png'

const HeroSection = () => {
    return (
        <Hero>
          <img src={healthyFoodClipart} alt={'Healthy food clipart - hero section'} className={classes.heroFoodClipart} />
          <h1>Welcome to Cairo Dinner!</h1>
          <h2>An Online Food Delivery App</h2>
          <p>Order your food online. Delivering anywhere in Greater Cairo.</p>
          <p>All food categories are available!</p>
        </Hero>
    )
}

export default HeroSection