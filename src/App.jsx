export default function App() {

  const nome = "João";
  const sobreNome = "Santos";

  return(
    <div>
        <h1>Hello World</h1>
        <p>Desenvolvido por: {nome}</p>
    </div>  
  );


}

import Footer from "./components/Footer";
export default function App() {
  return(  
  <main>
  <Footer/>
  </main>
  )
}