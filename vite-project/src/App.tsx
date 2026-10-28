import { motion } from "motion/react"
import { useState } from "react"

const box = {
  width: 100,
  height: 100,
  backgroundColor: "red",
  borderRadius: 5,
}

// interuptor

let interuptorVisual = {
  width: 130,
  height: 30,
  backgroundColor: "green",
  borderRadius: 300,
  display: "flex",
  justifyContent: "right",
  alingItens: "center",
  padding: 16,
  backgroundImage: "url('./3D_1.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
}

let interuptorVisual2 = {
  width: 30,
  height: 30,
  backgroundColor: "white",
  borderRadius: 300,
}

//Carrossel

const CarrosselVisual = {
  width: 600,
  height: 590,
  backgroundColor: "green",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alingItens: "center",
  padding: 16,
  gap: 16,
}

const CarrosselVisual2 = {
  backgroundColor: "white",
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  alingItens: "center",
  padding: 16,
  gap: 16,
}

const imagemVisual = {
  width: 600,
  backgroundColor: "white",
  borderRadius: 10,
}

const botaoVisual = {
  width: 100,
  height: 100,
  backgroundColor: "green",
  display: "flex",
  justifyContent: "center",
  alingItens: "center",
  borderRadius: 5,
}

function App() {
  const [interuptorEstado, setInteruptorEstado] = useState("on") // Criação de variavel estado do interuptor
  const [carrosselEstado, setCarrosselEstado] = useState(0) // Criação de variavel estado do interuptor
  function interuptor(){ // Função do botão interuptor
    if (interuptorEstado == "on"){ // Função de liga e desliga do estado do interuptor
      setInteruptorEstado("off") // Definir com desligado
    } else {
      setInteruptorEstado("on") // Definir com ligado
    }
  }
  function avancarCarrossel(){ // Função do botão avaçar carrossel
    if (carrosselEstado == 3){ // Função de liga e desliga do estado do interuptor
      setCarrosselEstado(0)
    } else {
      setCarrosselEstado(carrosselEstado+1)
    }
  }

    function voltarCarrossel(){ // Função do botão voltar carrossel
    if (carrosselEstado == 0){ // Função de liga e desliga do estado do interuptor
      setCarrosselEstado(3)
    } else {
      setCarrosselEstado(carrosselEstado-1)
    }
  }

  return (
    <>
      <h1>Botão animado: </h1>
      <motion.div // Botão animado
            style={box} // estilo
            initial={{ opacity: 0, scale: 0 }} // animação de inicio
            animate={{ opacity: 1, scale: 1, rotate: 360 }} // Animação ativa
            whileHover={{ scale: 1.2 }} // Animação de cursor em cima do objeto
            whileTap={{ scale: 0.8 }} // Animação de Click no objeto
            transition={{ duration: 0.5 }} // Configuração de transição
        />
      <motion.div // Botão animado
            style={box} // Estilo
            initial={{ opacity: 0, scale: 0 }} // animação de inicio
            animate={{ opacity: 1, scale: 1, rotate: 360 }} // Animação ativa
            whileHover={{ scale: 1.2 }} // Animação de cursor em cima do objeto
            whileTap={{ scale: 0.8 }} // Animação de Click no objeto
            transition={{ // Configuração de transição
              type: "spring", // configuração de transição tipo mola "spring"
              visualDuration: 0.2, // Configuração de duração visual
              bounce: 0.2, // Configuração de transição
              duration: 0.1, // Configuração de transição ricocheteada
              ease: "easeInOut" // Configuração de transição de entrada suave e saida suave
            }}
        />
      <h1>Interuptor animado: </h1>
        <motion.div // interuptor animado
            style={interuptorVisual} // Estilo
            initial={{ opacity: 0, scale: 0 }} // animação de inicio
            animate={{ opacity: 1, scale: 1, rotate: 360, // animação ativa
              backgroundColor: (interuptorEstado == "on" ? "#008000" : "#ff0000"), // Mudar cor de fundo por meio do estado da variável interuptorEstado.
              justifyContent: (interuptorEstado == "on" ? "right" : "left")}} // Mudar posição do elemento entro da div por meio do estado da variável interuptorEstado.
            whileHover={{ scale: 1.2 }} // Animação de cursor em cima do objeto
            whileTap={{ scale: 0.8 }} // Animação de Click no objeto
            transition={{ // Configuração de transição
              type: "spring", // configuração de transição tipo mola "spring"
              visualDuration: 0.2, // Configuração de duração visual
              bounce: 0.2, // Configuração de transição
              duration: 0.1, // Configuração de transição ricocheteada
              ease: "easeInOut" // Configuração de transição de entrada suave e saida suave
            }}
            onClick={interuptor} // ligar função a interação do botão interuptor
        >
          <motion.img
            src="./3D_2.png"
            style={interuptorVisual2}
          />
        </motion.div>
      <p>{interuptorEstado}</p>
      <h1>Carrossel animado: </h1>
      <motion.div // Div
        style={CarrosselVisual} // Estilo
        initial={{ opacity: 0, scale: 0 }} // animação de inicio
        animate={{ opacity: 1, scale: 1, rotate: 360 }} // Animação ativa
        >

        <motion.img // Imagem 1 do carrosel
            src={(carrosselEstado == 0 ? "./Teste1.png" // Imagem 1
               : carrosselEstado == 1 ? "./Teste2.png" // Imagem 2
                : carrosselEstado == 2 ? "./Teste3.png" // Imagem 3
                 : "./Teste4.png")} // Imagem 4
            style={imagemVisual} // Estilo
          />
        <motion.div // Div
          style={CarrosselVisual2}>
            <motion.div // Botão animado
              style={botaoVisual} // estilo
              animate={{ opacity: 1, scale: 1 }} // Animação ativa
              whileHover={{ scale: 1.2 }} // Animação de cursor em cima do objeto
              whileTap={{ scale: 0.8 }} // Animação de Click no objeto
              transition={{ // Configuração de transição
                type: "spring", // configuração de transição tipo mola "spring"
                visualDuration: 0.2, // Configuração de duração visual
                bounce: 0.2, // Configuração de transição
                duration: 0.1, // Configuração de transição ricocheteada
                ease: "easeInOut" // Configuração de transição de entrada suave e saida suave
              }}
              onClick={voltarCarrossel} // ligar função a interação do botão voltar
             >
              <h1>◄</h1>
             </motion.div>
            <motion.div // Botão animado
              style={botaoVisual} // estilo
              animate={{ opacity: 1, scale: 1 }} // Animação ativa
              whileHover={{ scale: 1.2 }} // Animação de cursor em cima do objeto
              whileTap={{ scale: 0.8 }} // Animação de Click no objeto
              transition={{ // Configuração de transição
                type: "spring", // configuração de transição tipo mola "spring"
                visualDuration: 0.2, // Configuração de duração visual
                bounce: 0.2, // Configuração de transição
                duration: 0.1, // Configuração de transição ricocheteada
                ease: "easeInOut" // Configuração de transição de entrada suave e saida suave
              }}
              onClick={avancarCarrossel} // ligar função a interação do botão avançar
            >
              <h1>►</h1>
            </motion.div>
        </motion.div>
      </motion.div>
      <p>{carrosselEstado}</p>
    </>
    
  )
}
export default App