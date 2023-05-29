import logo from './logo.svg';
import './App.css';
function Header() {
  return <header>
  <h1><a href="">React</a></h1>
</header>
}

function Nav() {
  return (<nav>
    <ul>
      <li><a href="">html</a></li>
      <li><a href="">css</a></li>
      <li><a href="">js</a></li>
    </ul>
  </nav>)
}

function Article() {
  return (<article>
    <h2>welcome</h2>
    Hello, WEB
  </article>)
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
