
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { useMotionValue, useSpring, useTransform } from "motion/react"

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
} as const

const CarrosselVisual2 = {
  backgroundColor: "white",
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  alingItens: "center",
  padding: 16,
  gap: 16,
} as const

const imagemVisual = {
  width: 600,
  backgroundColor: "white",
  borderRadius: 10,
} as const

const botaoVisual = {
  width: 100,
  height: 100,
  backgroundColor: "green",
  display: "flex",
  justifyContent: "center",
  alingItens: "center",
  borderRadius: 5,
} as const

const navigationButton = {
  padding: "12px 18px",
  border: "none",
  borderRadius: 8,
  backgroundColor: "#242424",
  color: "white",
  cursor: "pointer",
  fontSize: 16,
}

const navigation = {
  display: "flex",
  gap: 12,
  marginBottom: 24,
}

function navigateTo(page: string) {
  window.location.hash = page
}

function Navigation() {
  return (
    <nav style={navigation}>
      <button style={navigationButton} onClick={() => navigateTo("/")}>Página principal</button>
      <button style={navigationButton} onClick={() => navigateTo("/pagina-2")}>Ir para página 2</button>
      <button style={navigationButton} onClick={() => navigateTo("/pagina-3")}>Ir para página 3</button>
    </nav>
  )
}

function PaginaPrincipal() {
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

function Pagina2() {
  const pointerX = useSpring(0, { stiffness: 180, damping: 22 })
  const pointerY = useSpring(0, { stiffness: 180, damping: 22 })
  const rotateX = useTransform(pointerY, [-1, 1], [12, -12])
  const rotateY = useTransform(pointerX, [-1, 1], [-16, 16])

  return (
    <>
      <Navigation />
      <motion.main
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: "grid", gap: 28, perspective: 1200 }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Página 2
        </motion.h1>
        <motion.div
          style={{
            position: "relative",
            width: 320,
            height: 220,
            transformStyle: "preserve-3d",
            rotateX,
            rotateY,
          }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.04 }}
          onPointerMove={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect()
            pointerX.set((event.clientX - bounds.left) / bounds.width * 2 - 1)
            pointerY.set((event.clientY - bounds.top) / bounds.height * 2 - 1)
          }}
          onPointerLeave={() => {
            pointerX.set(0)
            pointerY.set(0)
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 28,
              overflow: "hidden",
              background: "linear-gradient(145deg, rgba(79,70,229,0.96), rgba(34,211,238,0.92))",
              boxShadow: "0 35px 80px rgba(79, 70, 229, 0.45)",
              transform: "translateZ(45px)",
            }}
            animate={{ boxShadow: ["0 35px 80px rgba(79,70,229,.45)", "0 45px 95px rgba(34,211,238,.55)", "0 35px 80px rgba(79,70,229,.45)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              style={{ position: "absolute", width: 110, height: 110, borderRadius: "50%", background: "rgba(255,255,255,.25)", right: -25, top: -25 }}
              animate={{ x: [-10, 12, -10], y: [5, -12, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div style={{ position: "absolute", left: 28, bottom: 28, color: "white" }}>
              <strong style={{ fontSize: 24 }}>Experiência 3D</strong>
              <p style={{ marginBottom: 0, opacity: 0.85 }}>Profundidade e movimento</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          style={{ position: "relative", width: 320, height: 120 }}
          aria-label="Orbitas animadas"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 18 + index * 8,
                height: 18 + index * 8,
                borderRadius: "50%",
                background: ["#4f46e5", "#22d3ee", "#a855f7"][index],
                boxShadow: "0 10px 25px rgba(79,70,229,.35)",
              }}
              animate={{ x: [0, 110, 0, -110, 0], y: [0, -55, 0, 55, 0] }}
              transition={{ duration: 5 + index * 0.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
            />
          ))}
        </motion.div>
        <motion.div
          style={{ width: 320, height: 90, overflow: "hidden", borderRadius: 18, background: "#111827", display: "flex", alignItems: "center" }}
        >
          <motion.div
            style={{ display: "flex", gap: 18, whiteSpace: "nowrap", color: "white", fontWeight: 700, fontSize: 24 }}
            animate={{ x: [0, -420] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            MOVIMENTO • PROFUNDIDADE • INTERAÇÃO • MOVIMENTO • PROFUNDIDADE •
          </motion.div>
        </motion.div>
      </motion.main>
      <button style={navigationButton} onClick={() => navigateTo("/pagina-3")}>Abrir página 3</button>
    </>
  )
}

function Pagina3() {
  const cursorTargetX = useMotionValue(0)
  const cursorTargetY = useMotionValue(0)
  const cursorX = useSpring(cursorTargetX, { stiffness: 180, damping: 24 })
  const cursorY = useSpring(cursorTargetY, { stiffness: 180, damping: 24 })
  const magneticXTarget = useMotionValue(0)
  const magneticYTarget = useMotionValue(0)
  const magneticX = useSpring(magneticXTarget, { stiffness: 260, damping: 18 })
  const magneticY = useSpring(magneticYTarget, { stiffness: 260, damping: 18 })
  const [activeCard, setActiveCard] = useState(0)
  const galleryCards = [
    {
      src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85",
      title: "Orbital Eclipse",
      number: "01",
      accent: "#67e8f9",
    },
    {
      src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=85",
      title: "Nebula Protocol",
      number: "02",
      accent: "#c084fc",
    },
    {
      src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=900&q=85",
      title: "Deep Space Relay",
      number: "03",
      accent: "#f472b6",
    },
    {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
      title: "Synthetic Earth",
      number: "04",
      accent: "#34d399",
    },
  ]

  function moveCard(direction: number) {
    setActiveCard((current) => (current + direction + galleryCards.length) % galleryCards.length)
  }

  return (
    <>
      <Navigation />
      <motion.main
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ display: "grid", justifyItems: "start", gap: 28, perspective: 1000 }}
      >
        <h1>Página 3</h1>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "min(720px, 90vw)",
            display: "grid",
            gap: 18,
            padding: 28,
            borderRadius: 32,
            border: "1px solid rgba(103,232,249,.18)",
            background: "linear-gradient(145deg, rgba(5,12,30,.96), rgba(13,20,45,.88))",
            boxShadow: "0 35px 100px rgba(3,7,18,.5), inset 0 1px rgba(255,255,255,.06)",
            color: "white",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: "1px solid rgba(103,232,249,.15)", paddingBottom: 14 }}>
            <div>
              <span style={{ fontSize: 11, letterSpacing: 4, color: galleryCards[activeCard].accent }}>INFINITE ARCHIVE // 2088</span>
              <h2 style={{ margin: "5px 0 0", letterSpacing: 1 }}>{galleryCards[activeCard].title}</h2>
            </div>
            <strong style={{ fontSize: 28, color: galleryCards[activeCard].accent, textShadow: `0 0 18px ${galleryCards[activeCard].accent}` }}>{galleryCards[activeCard].number}</strong>
          </div>

          <div style={{ position: "relative", height: 430, perspective: 1400 }}>
            {galleryCards.map((card, index) => {
              let offset = index - activeCard
              if (offset > galleryCards.length / 2) offset -= galleryCards.length
              if (offset < -galleryCards.length / 2) offset += galleryCards.length
              const isActive = offset === 0

              return (
                <motion.div
                  key={card.number}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -70 || info.velocity.x < -500) moveCard(1)
                    if (info.offset.x > 70 || info.velocity.x > 500) moveCard(-1)
                  }}
                  animate={{
                    x: offset * 92,
                    y: Math.abs(offset) * 18,
                    z: isActive ? 80 : -Math.abs(offset) * 90,
                    rotateY: offset * -12,
                    rotateZ: offset * -2,
                    scale: isActive ? 1 : 0.82 - Math.abs(offset) * 0.05,
                    opacity: Math.abs(offset) > 2 ? 0 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  onClick={() => setActiveCard(index)}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 16,
                    width: "min(380px, 72vw)",
                    height: 380,
                    marginLeft: "min(-190px, -36vw)",
                    borderRadius: 24,
                    overflow: "hidden",
                    cursor: isActive ? "grab" : "pointer",
                    zIndex: galleryCards.length - Math.abs(offset),
                    boxShadow: isActive
                      ? `0 35px 90px ${galleryCards[index].accent}55, 0 0 0 1px ${galleryCards[index].accent}66`
                      : "0 18px 45px rgba(15,23,42,.18)",
                    transformStyle: "preserve-3d",
                  }}
                  whileDrag={{ cursor: "grabbing", scale: 1.03 }}
                >
                  <img
                    src={card.src}
                    alt={card.title}
                    draggable={false}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <motion.div
                    animate={isActive ? { x: ["-100%", "220%"] } : { x: "-100%" }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "35%",
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,.22), transparent)",
                      transform: "skewX(-18deg)",
                      pointerEvents: "none",
                    }}
                  />
                  {isActive && (
                    <div style={{
                      position: "absolute",
                      top: 14,
                      right: 14,
                      padding: "6px 9px",
                      borderRadius: 6,
                      border: `1px solid ${card.accent}`,
                      background: "rgba(3,7,18,.72)",
                      color: card.accent,
                      fontSize: 9,
                      letterSpacing: 2,
                    }}>
                      LIVE
                    </div>
                  )}
                  <div style={{
                    position: "absolute",
                    inset: "auto 0 0",
                    padding: "48px 24px 20px",
                    color: "white",
                    background: "linear-gradient(transparent, rgba(0,0,0,.75))",
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                    <strong>{card.title}</strong>
                    <span>{card.number}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <button style={navigationButton} onClick={() => moveCard(-1)}>Anterior</button>
            {galleryCards.map((card, index) => (
              <button
                key={card.number}
                aria-label={`Mostrar ${card.title}`}
                onClick={() => setActiveCard(index)}
                style={{
                  width: index === activeCard ? 28 : 8,
                  height: 8,
                  padding: 0,
                  border: 0,
                  borderRadius: 8,
                  cursor: "pointer",
                  backgroundColor: index === activeCard ? galleryCards[activeCard].accent : "#475569",
                  transition: "width 300ms ease, background-color 300ms ease",
                }}
              />
            ))}
            <button style={{ ...navigationButton, backgroundColor: galleryCards[activeCard].accent }} onClick={() => moveCard(1)}>Proximo</button>
          </div>
        </motion.section>
        <motion.div
          style={{
            position: "relative",
            width: 300,
            height: 190,
            transformStyle: "preserve-3d",
          }}
          initial={{ rotateY: -35, z: -80, opacity: 0 }}
          animate={{ rotateY: 0, z: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotateX: -7, rotateY: 9, z: 25 }}
        >
          {[0, 1, 2].map((layer) => (
            <motion.div
              key={layer}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 24,
                border: "1px solid rgba(255,255,255,.5)",
                background: layer === 0
                  ? "linear-gradient(145deg, #16a34a, #052e16)"
                  : "rgba(22,163,74,.16)",
                transform: `translateZ(${50 - layer * 32}px) translateY(${layer * 8}px)`,
                boxShadow: layer === 0 ? "0 30px 70px rgba(22,163,74,.38)" : "none",
              }}
              animate={layer === 0 ? { y: [0, -8, 0] } : undefined}
              transition={{ duration: 2.4 + layer * 0.4, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
          <motion.button
            style={{
              ...navigationButton,
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%) translateZ(70px)",
              backgroundColor: "white",
              color: "#14532d",
              fontSize: 18,
              boxShadow: "0 15px 35px rgba(0,0,0,.25)",
              zIndex: 5,
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            Explorar
          </motion.button>
        </motion.div>
        <motion.div
          onPointerMove={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect()
            cursorTargetX.set(event.clientX - bounds.left - bounds.width / 2)
            cursorTargetY.set(event.clientY - bounds.top - bounds.height / 2)
          }}
          onPointerLeave={() => {
            cursorTargetX.set(0)
            cursorTargetY.set(0)
          }}
          style={{
            position: "relative",
            width: 300,
            height: 150,
            borderRadius: 24,
            overflow: "hidden",
            background: "#052e16",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              width: 140,
              height: 140,
              borderRadius: "50%",
              left: "50%",
              top: "50%",
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
              background: "radial-gradient(circle, rgba(74,222,128,.75), rgba(74,222,128,0) 70%)",
            }}
          />
          {[0, 1, 2, 3].map((dot) => (
            <motion.span
              key={dot}
              style={{
                position: "absolute",
                left: 55 + dot * 55,
                top: 65,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#86efac",
              }}
              animate={{ y: [0, -18, 0], scale: [1, 1.5, 1] }}
              transition={{ duration: 1.4, delay: dot * 0.15, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </motion.div>
        <motion.button
          style={{
            ...navigationButton,
            background: "linear-gradient(135deg,#16a34a,#22d3ee)",
            fontSize: 18,
            boxShadow: "0 18px 40px rgba(22,163,74,.28)",
            x: magneticX,
            y: magneticY,
          }}
          onPointerMove={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect()
            magneticXTarget.set((event.clientX - bounds.left - bounds.width / 2) * 0.22)
            magneticYTarget.set((event.clientY - bounds.top - bounds.height / 2) * 0.22)
          }}
          onPointerLeave={() => {
            magneticXTarget.set(0)
            magneticYTarget.set(0)
          }}
          whileTap={{ scale: 0.92 }}
        >
          Botao magnetico
        </motion.button>
      </motion.main>
    </>
  )
}

function App() {
  const [page, setPage] = useState(window.location.hash || "#/")

  useEffect(() => {
    const updatePage = () => setPage(window.location.hash || "#/")
    window.addEventListener("hashchange", updatePage)
    return () => window.removeEventListener("hashchange", updatePage)
  }, [])

  if (page === "#/pagina-2") {
    return <Pagina2 />
  }

  if (page === "#/pagina-3") {
    return <Pagina3 />
  }

  return (
    <>
      <Navigation />
      <PaginaPrincipal />
    </>
  )
}
export default App