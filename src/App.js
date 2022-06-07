import Container, { ContainerFluid } from './UI/Container/Container'
import NavigationSection from './Sections/NavigationSection'
import HeroSection from './Sections/HeroSection'

function App() {
  return (
    <ContainerFluid>
      <NavigationSection />
      <Container>
        <HeroSection headerText={'Welcome to Cairo Dinner!'}>
          <p>Order your food online. Shipping anywhere in Cairo.</p>
          <p>Enjoy delicious traditional Egyptian food.</p>
          <p>Shipping Meat, Fruit, Vegetables, Dairy Products, Desserts, & more!</p>
        </HeroSection>
      </Container>
    </ContainerFluid>
  );
}

export default App;
