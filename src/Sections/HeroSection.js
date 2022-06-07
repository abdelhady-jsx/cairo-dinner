import Hero from '../UI/Hero/Hero'

const HeroSection = ({ headerText, children }) => {
    return (
        <Hero>
          <h1>{headerText}</h1>
          {children}
        </Hero>
    )
}

export default HeroSection