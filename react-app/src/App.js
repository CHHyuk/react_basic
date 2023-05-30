import logo from './logo.svg';
import './App.css';
function Header(props) {
  return <header>
  <h1><a href="">{props.title}</a></h1>
</header>
}

function Nav(props) {
  const lis = []

  for(let i = 0 ; i< props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }

  return (<nav>
    <ul>
      {lis}
    </ul>
  </nav>)
}

function Article(props) {
  return (<article>
    <h2>{props.title}</h2>
    {props.body}
  </article>)
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ]
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
      <Article title="Hi" body="Hello, REACT"></Article>
    </div>
  );
}

export default App;
