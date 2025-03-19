import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/footer";
import "./styles/styles.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col bg-primary min-h-screen text-white">
        <Header />
        <main className="flex flex-grow justify-center items-center">
          <HomePage />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
