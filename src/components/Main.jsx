import { useState } from "react"

export default function Main(){
    const [nome, setNome] = useState("");7
    return(<main>
        <input type="text" name="" id="" onChange={ (event) => setNome(event.target.value)}/>
    </main>

    )
};