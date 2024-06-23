import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import { MealProvider } from "./components/Container/MealItem/Meal";


function App() {
  return (
    <>
      <MealProvider>
        <Header />
        <Container />
      </MealProvider>
    </>
  );
}

export default App;
