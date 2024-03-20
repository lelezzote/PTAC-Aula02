import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    return(
    <main>
        <form>
            <label>
        <input type="text" name="nome-contato" id="nome" value={nome} onChange={ (event) => setNome(event.target.value)}/>
        <input type="text" name="set-telefone" id="nome" value={nome} onChange={ (event) => setTelefone(event.target.value)}/>
        </label>
        {nome}
        {telefone}
         

         <button id="button">SALVAR</button>
        
        </form>
    </main>

    )
};


//set altera o stado
//nome = acesso
//setNome = altera


//const [telefone, setTelefone] = useState("");
//return(
 // <main>
 //<form>
//<input type="text" name="nome-conato" id="nome" value={nome} onChange={ (event) => setNome(event.target.value)}/>
 //</form>
  //</main>


//)