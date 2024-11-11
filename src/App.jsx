
import imgLogo from './assets/react-core-concepts.png';
import MyImage from './assets/components/MyImage';

const reactDescription =["Fundamental","crucial","Core"]
function genRandomInt(max){
  return Math.floor(Math.random()* (max + 1));
}
function Header() {
  const dynamicValue = reactDescription[genRandomInt(2)]
  // const img = {imgLogo}
  return(
    
    <header>
        <img src={imgLogo} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {dynamicValue} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

function App() {
  return (
    <div>
       <Header/>
       <MyImage />
      <main>
       
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
