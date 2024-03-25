import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    return(
    <main>
        <form class="formulario">
            <div id="form-nome">
            <label class="label">Nome:</label>
        <input type="text" name="nome-contato" id="nome" value={nome} onChange={ (event) => setNome(event.target.value)}/>
        </div>
        <div id="form-tel">
        <label class="label-type">Telefone:</label>
        <input type="text" name="set-telefone" id="telefone" value={telefone} onChange={ (event) => setTelefone(event.target.value)}/>
        </div>
         
         
         <button id="button" class="button-form">SALVAR</button>
         

        {nome}
        {telefone}

         

        
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