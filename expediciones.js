// Expediciones con Lucio — contenido del juego.
// Ritual semanal: Claude Code genera una expedición nueva y la agrega al inicio de EXPEDICIONES.
// Formato de escenas: {de:"lucio"|"cami"|"npc", nombre?, texto} · {decision:[{texto, ir}]} · {id:"x"} destino de salto · {salta:"x"}

window.PROLOGO = {
  titulo: "Prólogo: el secreto de Lucio",
  xp: 40,
  souvenir: { emoji: "✈️", nombre: "Boleto de la primera expedición" },
  accesorio: "panoleta",
  escenas: [
    { de: "lucio", texto: "Miau. Sí, Cami… hablo. Llevo años fingiendo que solo me interesan las cajas de cartón." },
    { de: "lucio", texto: "La verdad es que soy un gato explorador. Todos lo somos — ¿por qué crees que inspeccionamos cada rincón nuevo de la casa?" },
    { de: "cami", texto: "(Está bien. Mi gato habla. Esto es exactamente como empieza un isekai.)" },
    { de: "lucio", texto: "Necesito una compañera de expediciones: alguien curiosa, que coleccione mundos como yo colecciono siestas. Pensé en ti." },
    { de: "lucio", texto: "Cada semana viajaremos a un lugar del mundo. Cada día, una misión. Habrá decisiones, tesoros… y conocimiento del que no cabe en un dato curioso." },
    { decision: [
      { texto: "¿Y qué gano yo, Lucio?", ir: "ganar" },
      { texto: "¿A dónde vamos primero?", ir: "destino" }
    ]},
    { id: "ganar", de: "lucio", texto: "Experiencia (los humanos la llaman XP), souvenirs de cada lugar, sellos en tu pasaporte… y a mí con sombreros. Créeme: querrás verme con sombreros." },
    { salta: "cierre" },
    { id: "destino", de: "lucio", texto: "A Japón. Templos que se armaron sin un solo clavo, casas medidas en tatamis y una ciudad que se reconstruye a sí misma cada 30 años." },
    { id: "cierre", de: "lucio", texto: "La expedición a Japón sale el lunes. Empaca tu curiosidad — yo empaco las sardinas. Toma, tu boleto." },
    { de: "cami", texto: "(Un boleto de avión con la huella de un gato como sello oficial. No sé qué esperaba.)" }
  ]
};

window.EXPEDICIONES = [
  {
    id: "exp-alandalus",
    inicio: "2026-07-13",
    destino: "Al-Ándalus y Marruecos",
    subtitulo: "Arcos imposibles, geometría infinita y patios que respiran",
    emoji: "🕌",
    color: "#8a5a2b",
    accesorio: { id: "fez", nombre: "Fez granate de Marrakech" },
    dias: [
      {
        titulo: "Córdoba: el bosque de columnas",
        souvenir: { emoji: "🕌", nombre: "Arquito de la Mezquita (miniatura)" },
        escenas: [
          { de: "lucio", texto: "Córdoba, año 950: la ciudad más grande de Europa occidental. Calles iluminadas, bibliotecas con miles de libros… y el edificio al que venimos: la Mezquita." },
          { de: "lucio", texto: "Prepárate, porque al entrar no vas a ver un techo: vas a ver un bosque. Ochocientas cincuenta y seis columnas en filas infinitas, y sobre ellas… el arco que te prometí." },
          { de: "cami", texto: "(Arcos de herradura a dos colores, uno sobre otro, repetidos hasta donde alcanza la vista. Es hipnótico. ¿Por qué DOBLES?)" },
          { de: "lucio", texto: "Pregunta de ingeniera, respuesta de ingeniera: las columnas eran recicladas de templos romanos y visigodos — y eran demasiado CORTAS para el techo alto que querían.", lamina: { pie: "El truco de Córdoba: columnas cortas recicladas + dos pisos de arcos = altura. Las dovelas alternan piedra clara y ladrillo rojo.", svg: '<svg viewBox="0 0 320 215" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="140" width="18" height="60" fill="#d8ccb4"/><rect x="232" y="140" width="18" height="60" fill="#d8ccb4"/><rect x="66" y="132" width="26" height="10" rx="2" fill="#b0a184"/><rect x="228" y="132" width="26" height="10" rx="2" fill="#b0a184"/><path d="M 92 152 A 68 68 0 1 1 228 152" fill="none" stroke="#f2e7d3" stroke-width="20"/><path d="M 92 152 A 68 68 0 1 1 228 152" fill="none" stroke="#b85c38" stroke-width="20" stroke-dasharray="22 22"/><path d="M 92 152 A 68 68 0 1 1 228 152" fill="none" stroke="#7a7266" stroke-width="1"/><rect x="82" y="52" width="14" height="40" fill="#d8ccb4"/><rect x="224" y="52" width="14" height="40" fill="#d8ccb4"/><path d="M 106 60 A 54 54 0 0 1 214 60" fill="none" stroke="#f2e7d3" stroke-width="16"/><path d="M 106 60 A 54 54 0 0 1 214 60" fill="none" stroke="#b85c38" stroke-width="16" stroke-dasharray="18 18"/><path d="M 106 60 A 54 54 0 0 1 214 60" fill="none" stroke="#7a7266" stroke-width="1"/><text x="282" y="45" font-size="11" fill="#2e2a26" text-anchor="middle" font-weight="bold">arco superior:</text><text x="282" y="59" font-size="11" fill="#2e2a26" text-anchor="middle">gana la altura</text><text x="160" y="128" font-size="12" fill="#2e2a26" text-anchor="middle" font-weight="bold">arco de herradura</text><text x="160" y="212" font-size="11" fill="#7a7266" text-anchor="middle">columnas romanas recicladas (cortas)</text></svg>' } },
          { de: "lucio", texto: "¿La solución? Apilar DOS pisos de arcos sobre cada columna, como los acueductos romanos pero dentro de un edificio. Reciclaje estructural con una elegancia que nadie ha repetido." },
          { de: "cami", texto: "(Restricción de material → solución en altura → y de paso crearon uno de los espacios más bellos del planeta. La limitación como motor de diseño.)" },
          { decision: [
            { texto: "Acercarme al mihrab, el corazón dorado", ir: "mihrab" },
            { texto: "Buscar la catedral que dicen que hay ADENTRO", ir: "catedral" }
          ]},
          { id: "mihrab", de: "npc", nombre: "Doña Sol, guía", texto: "Este nicho es el mihrab: marca hacia dónde se reza. Los mosaicos dorados los hicieron artesanos bizantinos — el emperador de Constantinopla los mandó como regalo diplomático." },
          { de: "npc", nombre: "Doña Sol, guía", texto: "Y aquí un misterio: no apunta exactamente a La Meca. Apunta al sur. Hay tres teorías y ningún acuerdo — te las dejo en la excavación de hoy." },
          { salta: "cierrea1" },
          { id: "catedral", de: "npc", nombre: "Doña Sol, guía", texto: "Sí: en 1523 le incrustaron una catedral renacentista en pleno centro. Cuando el rey Carlos V vio el resultado, dicen que regañó a los canónigos…" },
          { de: "npc", nombre: "Doña Sol, guía", texto: "'Habéis destruido lo que era único en el mundo, para construir lo que se puede ver en todas partes.' La frase es leyenda, pero la lección es real." },
          { de: "cami", texto: "(Un edificio con capas: mezquita sobre basílica visigoda, catedral dentro de mezquita. Es un corte estratigráfico de mil años de historia… habitado.)" },
          { id: "cierrea1", de: "lucio", texto: "Lección uno de esta expedición: aquí nada se construyó de cero — todo se transformó. Recuérdalo el viernes, cuando esta historia nos siga hasta tu propia tierra." }
        ],
        minijuego: {
          tipo: "parejas",
          instruccion: "Empareja los términos de la Mezquita",
          pares: [
            ["Arco de herradura", "Abraza más de media circunferencia"],
            ["Dovelas bicolores", "Piedra clara y ladrillo rojo alternados"],
            ["Arcos superpuestos", "El truco para ganar altura con columnas cortas"],
            ["Mihrab", "El nicho que marca hacia dónde se reza"],
            ["Columnas recicladas", "Vienen de templos romanos y visigodos"]
          ]
        },
        excavacion: [
          { titulo: "El misterio del mihrab desviado", texto: "El mihrab de Córdoba apunta al sur, cuando La Meca queda al sureste. ¿Error? Improbable: estos constructores calculaban arcos dobles perfectos. Las teorías serias: (1) copiaron la orientación de la mezquita de Damasco, la casa madre de la dinastía omeya que fundó Córdoba — nostalgia convertida en geometría, porque los omeyas de Al-Ándalus eran refugiados de una masacre y construyeron su capital mirando a la que perdieron; (2) siguieron la tradición de orientar según la calle romana preexistente (el edificio recicla hasta la dirección); (3) usaron un método astronómico antiguo que daba ese rumbo. Los historiadores llevan un siglo debatiendo. La moraleja para una ingeniera: cuando un sistema antiguo parece 'mal diseñado', primero pregunta qué estaba optimizando de verdad." },
          { titulo: "La Córdoba del año 950: la capital de la luz", texto: "Mientras París y Londres eran aldeas de calles embarradas, Córdoba tenía cerca de medio millón de habitantes, alumbrado público, baños, hospitales y la biblioteca de al-Hakam II con — dicen las crónicas — 400.000 volúmenes (aunque los historiadores modernos recortan la cifra, seguía siendo la mayor de Europa por lejos). Aquí convivían y traducían juntos musulmanes, judíos y cristianos: por esta ciudad pasaron hacia Europa los números 'arábigos' (que eran indios), el álgebra (al-jabr), el papel, y las obras de Aristóteles comentadas por Averroes — cordobés. La 'Escuela de Traductores' que siguió en Toledo fue el cable de datos entre la antigüedad y el Renacimiento. Sin esta ciudad, la historia intelectual de Occidente arranca siglos más tarde." }
        ],
        charla: [
          { q: "¿Por qué las dovelas son de dos colores?", a: "Tres razones se apilan. La visual: el ritmo rojo-blanco multiplica el efecto hipnótico del bosque de columnas — es un patrón, y esta cultura era adicta a los patrones. La material: alternar ladrillo (barato, liviano) con piedra (fuerte) ahorra material noble sin sacrificar estructura. Y la genealógica: los acueductos romanos de la zona ya mezclaban ladrillo y piedra por economía; los constructores omeyas tomaron esa solución práctica y la convirtieron en firma estética. Es el patrón que verás repetido toda la semana: una restricción técnica transformada en lenguaje de belleza.", extra: { q: "¿Y el arco de herradura lo inventaron ellos?", a: "No — y esa es la mejor parte. El arco de herradura ya existía en la arquitectura visigoda de España (siglos VI-VII), probablemente con raíces romanas tardías. Los omeyas lo encontraron aquí, lo adoptaron, lo perfeccionaron y lo hicieron TAN suyo que hoy el mundo entero lo llama 'arco árabe' o 'arco moro'. Es un caso de libro de apropiación creativa: la marca no es de quien inventa, sino de quien lleva la idea a su máxima expresión." } },
          { q: "¿Cómo se sostiene un arco de herradura si 'se cierra' abajo?", a: "Buena observación de ingeniera: el arco de herradura abraza más de 180 grados, así que sus extremos se curvan hacia adentro — parece que el peso lo abriría como un compás. La clave está en que la parte que trabaja estructuralmente sigue siendo el semicírculo superior (compresión pura, como aprendiste en Japón con las pagodas… bueno, con los arcos romanos de tu semana de arquitectura). El 'exceso' de curva de abajo carga poco: es principalmente visual y va confinado entre las impostas y el muro. En muchos arcos de herradura el tramo bajo está literalmente embebido en mampostería. Estética arriesgada, estructura conservadora — un clásico." },
          { q: "Lucio, ¿los gatos podemos entrar a las mezquitas?", a: "¡Somos de los pocos que SÍ! En la tradición islámica el gato es un animal limpio (tahir) — a diferencia del perro, que espera afuera, con perdón de Victoria. El profeta Mahoma tenía una gata llamada Muezza, y la historia más famosa cuenta que un día, al ir a rezar, la encontró dormida sobre la manga de su túnica… y prefirió cortar la manga antes que despertarla. Ese es el estándar de trato que exigimos los gatos, para que lo sepas. En Estambul, El Cairo o Marrakech verás gatos durmiendo dentro de las mezquitas, alimentados por los fieles. Civilizaciones correctas." }
        ]
      },
      {
        titulo: "La geometría del infinito",
        souvenir: { emoji: "🧿", nombre: "Azulejo zellige de Fez" },
        escenas: [
          { de: "lucio", texto: "Cruzamos el mar: Fez, Marruecos. En este taller huele a arcilla y esmalte, y suena un tac-tac-tac de martillos que lleva mil años sin parar." },
          { de: "npc", nombre: "Maalem Hassan", texto: "Bienvenida. Hago zellige: mosaico de azulejos cortados a mano. Cada pieza la esmalto, la horneo y la tallo con este martillo afilado. Mi familia lleva nueve generaciones en esto." },
          { de: "cami", texto: "(Corta cerámica esmaltada A MANO con golpes de martillo… con tolerancias que encajan como piezas de máquina. ¿Cómo?)" },
          { de: "lucio", texto: "Y aquí viene lo que te va a volar la cabeza: el Islam clásico evita representar figuras humanas o animales en los espacios sagrados. ¿Qué le queda a un artista sin rostros ni cuerpos?" },
          { de: "npc", nombre: "Maalem Hassan", texto: "Le quedan tres caminos: la caligrafía, las plantas… y el que pisas: la geometría. Con un compás y una regla se construye el infinito.", lamina: { pie: "La estrella de 8 puntas: dos cuadrados girados 45°. Repetida, genera el patrón estrella-y-cruz que cubre medio mundo islámico.", svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><defs><g id="e8"><rect x="-19" y="-19" width="38" height="38" fill="#2b6a8f"/><rect x="-19" y="-19" width="38" height="38" fill="#2b6a8f" transform="rotate(45)"/></g><g id="cruz"><rect x="-8" y="-8" width="16" height="16" fill="#b85c38" transform="rotate(45)"/></g></defs><rect x="10" y="10" width="180" height="180" fill="#f2e7d3" rx="4"/><use href="#e8" transform="translate(55,55)"/><use href="#e8" transform="translate(145,55)"/><use href="#e8" transform="translate(55,145)"/><use href="#e8" transform="translate(145,145)"/><use href="#cruz" transform="translate(100,100)"/><use href="#cruz" transform="translate(100,10)"/><use href="#cruz" transform="translate(100,190)"/><use href="#cruz" transform="translate(10,100)"/><use href="#cruz" transform="translate(190,100)"/><rect x="222" y="30" width="56" height="56" fill="none" stroke="#7a7266" stroke-width="2"/><rect x="222" y="30" width="56" height="56" fill="none" stroke="#b85c38" stroke-width="2" transform="rotate(45 250 58)"/><text x="250" y="110" font-size="11" fill="#2e2a26" text-anchor="middle">2 cuadrados</text><text x="250" y="124" font-size="11" fill="#2e2a26" text-anchor="middle">girados 45°</text><text x="250" y="150" font-size="20" fill="#7a7266" text-anchor="middle">↓</text><text x="250" y="175" font-size="11" fill="#2e2a26" text-anchor="middle" font-weight="bold">estrella de 8</text></svg>' } },
          { de: "cami", texto: "(Teselaciones. Grupos de simetría. Están haciendo matemática de cristalografía… siglos antes de que exista la palabra.)" },
          { decision: [
            { texto: "Intentar cortar una pieza de zellige", ir: "cortar" },
            { texto: "Trazar el patrón con compás y regla", ir: "trazar" }
          ]},
          { id: "cortar", de: "npc", nombre: "Maalem Hassan", texto: "Sostén el menqach — el martillo de dos filos. El azulejo se apoya así, en el yunque. Golpe firme y seco: la cerámica no perdona la duda." },
          { de: "cami", texto: "(Crac. Mi 'estrella' quedó con una punta menos. El maalem la mira con misericordia profesional.)" },
          { de: "npc", nombre: "Maalem Hassan", texto: "Ja, ja. Diez años tarda un aprendiz en dominar las 360 formas. Se empieza barriendo el taller, como en todo oficio serio. Tu pieza torcida — llévatela: así empezamos todos." },
          { salta: "cierrea2" },
          { id: "trazar", de: "npc", nombre: "Maalem Hassan", texto: "Mira: círculo. Lo divido en ocho. Uno los puntos: cuadrado y cuadrado girado. Ya está la estrella. Extiendo la rejilla… y el patrón puede crecer para siempre. PARA SIEMPRE." },
          { de: "cami", texto: "(Un algoritmo generativo de dos herramientas: compás y regla. Input: un círculo. Output: el infinito. Es el código más elegante que he visto.)" },
          { id: "cierrea2", de: "lucio", texto: "Eso es el arabesco de verdad, Cami: no 'decoración árabe' — una idea filosófica. El patrón sugiere que sigue más allá del muro, sin fin. Es una forma de dibujar lo infinito sin dibujarlo." }
        ],
        minijuego: {
          tipo: "orden",
          instruccion: "Ordena los pasos del maestro para crear un patrón zellige",
          items: [
            "Trazar un círculo y dividirlo en 8 partes",
            "Unir los puntos: dos cuadrados girados forman la estrella",
            "Extender la rejilla del patrón sobre todo el muro",
            "Cortar a mano cada pieza esmaltada con el martillo",
            "Montar el mosaico boca abajo, pieza contra pieza"
          ]
        },
        excavacion: [
          { titulo: "Escher en la Alhambra: el plagio más fértil del arte", texto: "En 1922 y de nuevo en 1936, un artista holandés desconocido llamado M.C. Escher visitó la Alhambra y pasó días copiando patrones en su cuaderno, alucinado con lo que llamó 'la mayor fuente de inspiración que he encontrado jamás'. De esos cuadernos salieron sus metamorfosis de pájaros, peces y lagartos que hoy están en todos los afiches universitarios del mundo. Lo fascinante: los matemáticos demostraron después que solo existen 17 formas fundamentales de repetir un patrón en el plano (los '17 grupos de simetría del papel tapiz') — y los artesanos nazaríes, sin teoría formal alguna, habían encontrado la gran mayoría (los expertos discuten si están los 17 o 'solo' 13-16). Un ejército de artesanos anónimos agotó un teorema siglos antes de que se enunciara. La práctica profunda encuentra las leyes antes que la ciencia las escriba." },
          { titulo: "El aniconismo: cuando la restricción parió la abstracción", texto: "El arte islámico clásico evita representar seres vivos en contexto sagrado (por los hadices que advierten contra 'competir con la creación divina' — el Corán mismo no lo prohíbe explícitamente, detalle que sorprende a muchos). Resultado de esa restricción: mientras Europa perfeccionaba durante siglos el retrato y la anatomía, el mundo islámico desarrolló la abstracción geométrica, la caligrafía como arte mayor y el patrón infinito — un lenguaje visual completo sin una sola cara. Cuando el arte occidental 'descubrió' la abstracción hacia 1910 (Kandinsky, Mondrian), llegaba mil años tarde a una fiesta que el zellige había empezado. Es el mismo fenómeno que viste en la cápsula del té japonés y en las dovelas de Córdoba: la restricción no mata la creatividad — la enfoca. Aplica en arte, en ingeniería y en presupuestos." }
        ],
        charla: [
          { q: "¿De verdad solo hay 17 formas de repetir un patrón?", a: "De verdad, y es uno de los teoremas más bonitos que existen. Cualquier patrón que se repite en el plano — papel tapiz, mosaico, tela — usa alguna combinación de 4 movimientos: trasladar, rotar, reflejar y reflejar-deslizando. La cristalografía demostró en 1891 (Fedorov) que solo hay 17 combinaciones posibles compatibles con la repetición periódica. No 16, no 18: 17, como los sólidos platónicos son 5. Los artesanos del zellige los encontraron a punta de compás y oficio. Y hay un final feliz para el asunto: en los 70, Roger Penrose descubrió patrones que NUNCA se repiten (teselaciones aperiódicas)… y luego se encontraron patrones casi idénticos en mosaicos islámicos del siglo XV en Isfahán. Los maalem también llegaron primero a eso.", extra: { q: "¿Y para qué le sirve eso a alguien hoy?", a: "Para más de lo que parece: los 17 grupos de simetría son la base de la cristalografía (así se clasifican las estructuras de los materiales que tú vendes en forma de maquinaria), los patrones aperiódicos de Penrose describen los cuasicristales (Premio Nobel de Química 2011 — Shechtman, al que llamaron loco por décadas), y el diseño computacional de texturas, telas y hasta antenas usa esta matemática. La próxima vez que veas un patrón en una tela o un piso, ya sabes: es uno de los 17. Juego nuevo para tus viajes." } },
          { q: "¿Qué significa exactamente 'arabesco'?", a: "La palabra la inventaron los europeos ('a la manera árabe') y por eso es un cajón desordenado. En rigor hay TRES lenguajes distintos que solemos mezclar: el ataurique (el arabesco vegetal: tallos, hojas y palmetas que se entrelazan y crecen sin fin), la geometría (estrellas y polígonos como los del zellige) y la caligrafía (versos del Corán o poemas convertidos en ornamento — en la Alhambra las paredes literalmente hablan). Los tres comparten el mismo principio: el módulo que se repite y sugiere infinito. Cuando alguien diga 'arabescos', ya puedes preguntar con elegancia: ¿vegetal, geométrico o caligráfico?" },
          { q: "¿Por qué montan el mosaico boca abajo?", a: "Detalle de oficio delicioso: el maalem arma el panel completo con las piezas ESMALTADAS HACIA ABAJO sobre el suelo, siguiendo el patrón de memoria y al revés (piensa en soldar un circuito espejado… de miles de componentes… sin diagrama). Luego vierte mortero encima, deja fraguar, y al levantar el panel — sorpresa — aparece la cara esmaltada perfecta. ¿Por qué así? Garantiza que la cara vista quede plana como un espejo, con las juntas mínimas. Requiere tener el patrón entero en la cabeza, invertido. Nueve generaciones de memoria espacial entrenada. Hay maestros que arman paneles de 10 metros así, sin un solo error visible." }
        ]
      },
      {
        titulo: "La Alhambra: el palacio que respira",
        souvenir: { emoji: "⛲", nombre: "Frasquito de agua del Generalife" },
        escenas: [
          { de: "lucio", texto: "Granada. Sobre la colina roja: la Alhambra — al-qal'a al-hamra, 'la fortaleza roja'. El último palacio de Al-Ándalus y, según muchos, el edificio más bello del mundo." },
          { de: "lucio", texto: "Pero yo te traje por otra cosa. Cierra los ojos. ¿Qué OYES?" },
          { de: "cami", texto: "(Agua. Agua por todas partes: fuentes, canalitos en el piso, albercas quietas. El palacio entero suena a arroyo.)" },
          { de: "lucio", texto: "Ese sonido es un sistema de ingeniería de 700 años: la Acequia Real trae agua desde la sierra, a 6 kilómetros, moviéndose solo por gravedad. Sin una sola bomba. Nunca las hubo." },
          { de: "cami", texto: "(Seis kilómetros manteniendo pendiente constante con instrumentos del siglo XIII… eso es topografía de precisión con la mira de un teodolito que no existía.)" },
          { de: "lucio", texto: "Y el agua no es decoración: es el aire acondicionado. Mira cómo funciona el truco completo.", lamina: { pie: "El patio nazarí como máquina de clima: el aire cruza la alberca, cede calor por evaporación y entra fresco a las salas. Verano a 40°C afuera, sombra fresca adentro.", svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg"><circle cx="285" cy="30" r="16" fill="#e8a33c"/><path d="M285 8 v-4 M285 52 v4 M263 30 h-4 M307 30 h4 M270 15 l-3 -3 M300 45 l3 3 M300 15 l3 -3 M270 45 l-3 -3" stroke="#e8a33c" stroke-width="2" stroke-linecap="round"/><rect x="10" y="60" width="70" height="120" fill="#d8ccb4"/><rect x="240" y="60" width="70" height="120" fill="#d8ccb4"/><rect x="24" y="80" width="18" height="28" fill="#8a7c5f"/><rect x="278" y="80" width="18" height="28" fill="#8a7c5f"/><path d="M80 60 h160 v14 h-160 Z" fill="#b85c38"/><rect x="80" y="74" width="160" height="106" fill="#f7f1e4"/><rect x="110" y="150" width="100" height="22" rx="4" fill="#7db3c9"/><path d="M120 144 q4 -7 8 0 M145 141 q4 -7 8 0 M170 144 q4 -7 8 0 M195 141 q4 -7 8 0" stroke="#7db3c9" stroke-width="2" fill="none"/><path d="M160 84 q0 26 -22 60" fill="none" stroke="#e8a33c" stroke-width="4" marker-end="none"/><path d="M136 146 l2 8 8 -3" fill="none" stroke="#e8a33c" stroke-width="4" stroke-linecap="round"/><path d="M132 160 q-24 4 -46 -2" fill="none" stroke="#4a86a8" stroke-width="4"/><path d="M88 156 l-6 2 4 7" fill="none" stroke="#4a86a8" stroke-width="4" stroke-linecap="round"/><path d="M188 160 q24 4 46 -2" fill="none" stroke="#4a86a8" stroke-width="4"/><path d="M232 156 l6 2 -4 7" fill="none" stroke="#4a86a8" stroke-width="4" stroke-linecap="round"/><text x="160" y="105" font-size="11" fill="#b8762e" text-anchor="middle">aire caliente baja</text><text x="160" y="196" font-size="11" fill="#3a6d8a" text-anchor="middle">cruza la alberca y entra fresco a las salas</text></svg>' } },
          { decision: [
            { texto: "Seguir el agua hasta el Patio de los Leones", ir: "leones" },
            { texto: "Mirar hacia arriba: esos techos imposibles", ir: "muqarnas" }
          ]},
          { id: "leones", de: "lucio", texto: "El Patio de los Leones: doce leones de mármol sosteniendo la fuente. Debajo hay un sistema que reparte el agua a presión pareja en las doce bocas — y que además funcionaba como reloj, dicen algunas fuentes." },
          { de: "cami", texto: "(Distribución hidráulica balanceada del siglo XIV. Y los canalitos salen de la fuente hacia las cuatro salas: el agua ES el plano del edificio.)" },
          { de: "lucio", texto: "Exacto: los cuatro canales representan los cuatro ríos del paraíso del Corán. Este patio es un jardín del edén hecho con plomería. La teología y la ingeniería nunca fueron tan buenas socias." },
          { salta: "cierrea3" },
          { id: "muqarnas", de: "lucio", texto: "Eso de ahí arriba se llama muqarnas: miles de celditas de yeso que cuelgan como un panal de abejas convertido en caverna de cristal. En la Sala de las Dos Hermanas hay más de CINCO MIL." },
          { de: "cami", texto: "(Parece imposiblemente complejo… pero apuesto que es modular. ¿Cuántas piezas distintas usa?)" },
          { de: "lucio", texto: "Ojo de ingeniera: SIETE tipos de pieza básica. Siete moldes de yeso, combinados en patrones, generan toda esa explosión tridimensional. Es un sistema constructivo, no una escultura. Lego celestial." },
          { id: "cierrea3", de: "lucio", texto: "Y una cosa más: casi todo esto es yeso y madera — materiales pobres. La Alhambra es un palacio 'barato' que parece de otro mundo. Mañana te cuento por qué eso importa. Pista: sus reyes eran débiles." }
        ],
        minijuego: {
          tipo: "parejas",
          instruccion: "Empareja la ingeniería de la Alhambra",
          pares: [
            ["Acequia Real", "6 km de agua movida solo por gravedad"],
            ["Alberca del patio", "Enfría el aire por evaporación"],
            ["Muqarnas", "Panal 3D hecho con solo 7 piezas modulares"],
            ["Cuatro canales", "Los ríos del paraíso hechos plomería"],
            ["Al-hamra", "'La roja': por el tapial con óxido de hierro"]
          ]
        },
        excavacion: [
          { titulo: "La arquitectura del poder frágil", texto: "Aquí está el secreto mejor guardado de la Alhambra: es el palacio de una dinastía DÉBIL. Los nazaríes (1238-1492) gobernaron el último reino musulmán de la península, arrinconados, pagando tributo a Castilla para sobrevivir. No tenían mármol de imperio ni oro de conquista: tenían yeso, madera, cerámica y los mejores artesanos del mundo. Toda esa belleza sobrecogedora es escenografía política — la fachada de un estado que se sabía condenado y necesitaba parecer eterno ante embajadores y ante su propio pueblo. En sus muros está tallada 9.000 veces la divisa 'Wa la ghalib illa Allah' (No hay más vencedor que Dios), que es a la vez fe y disculpa anticipada. En 1492 Boabdil entregó las llaves sin batalla. La lección incómoda y fascinante: parte del arte más sublime de la humanidad no nació del poder — nació del miedo a perderlo. (Y funcionó: el reino murió, la escenografía es inmortal.)" },
          { titulo: "La acequia: cómo se mide una pendiente sin láser", texto: "Traer agua 6 km por gravedad exige mantener una pendiente mínima constante (~1-2 por mil: un metro de caída por kilómetro). ¿Con qué instrumentos? Herencia directa de la ingeniería de qanats persa y romana: niveles de agua (un canal portátil donde el agua marca la horizontal perfecta), la 'murciélago' o nivel de triángulo con plomada, jalones y cuerdas anudadas, y una paciencia topográfica infinita — se replanteaba tramo por tramo, verificando con el agua misma como instrumento (si corre, sirve; si se estanca o corre demasiado, se corrige). Los andalusíes heredaron, refinaron y exportaron este saber: los sistemas de acequias que hoy riegan Valencia, y cuyo 'Tribunal de las Aguas' se reúne cada jueves desde hace ~1.000 años en la puerta de la catedral, son hijos directos. Y cuando España llegó a América, esa palabra viajó con los canales: en Colombia todavía se dice 'acequia'. Ya conociste dos obras maestras del agua por gravedad: el Generalife y… tu propia finca de infancia, probablemente." }
        ],
        charla: [
          { q: "¿Cómo funcionaban las fuentes sin bombas?", a: "Pura carga hidráulica administrada con astucia. La acequia llega ARRIBA, al Generalife (la finca alta), y desde ahí el agua baja repartiéndose por gravedad en un árbol de canales, albercas-buffer y atarjeas. Cada fuente funciona porque su depósito de alimentación está más alto: la diferencia de cota ES la bomba. Los surtidores del Patio de los Leones saltan apenas unos centímetros — no era un show de Las Vegas, era un murmullo continuo diseñado para el oído y para el clima. El sistema completo es un circuito en cascada donde cada gota trabaja varias veces: fuente → canal → alberca → riego de la huerta. Cero desperdicio, cero energía externa, 700 años funcionando. Diseño hidráulico que hoy llamaríamos 'pasivo y regenerativo' y venderíamos carísimo en una consultoría.", extra: { q: "¿Y en invierno no se congelaba?", a: "Granada tiene inviernos fríos (¡la sierra de al lado se llama Nevada!), pero el agua en movimiento constante rara vez se congela, y las conducciones iban en buena parte enterradas o adosadas a muros que amortiguan las heladas. El problema real era el mantenimiento: limpiar lodos, reparar filtraciones, vigilar que nadie robara agua aguas arriba — había todo un cuerpo de guardias y ordenanzas del agua. La infraestructura hidráulica siempre ha sido 10% construcción y 90% gobernanza. Como aprendiste con la torre Nakagin: los sistemas mueren más por administración que por física." } },
          { q: "¿Es verdad que las paredes 'hablan'?", a: "Literalmente. Los muros de la Alhambra están cubiertos de poemas tallados en yeso — no citas sueltas: poemas completos compuestos por los visires-poetas de la corte (Ibn Zamrak es el más famoso, sus versos rodean la fuente de los Leones). Y lo más lindo: muchos están escritos en primera persona DESDE el edificio. La taca de una ventana dice cosas como 'Yo soy el jardín que la belleza adorna…'. El palacio se describe a sí mismo, se compara con el cielo, le habla al visitante. Es la fantasía de todo arquitecto — que el edificio explique su propia intención — resuelta hace 650 años. La próxima vez que un manual de usuario te parezca un buen invento, recuerda que la Alhambra ES su propio manual, en verso." },
          { q: "Lucio, siendo honesto: ¿mejor siesta, la Alhambra o Japón?", a: "Me pides comparar catedrales del descanso. Análisis técnico: la engawa japonesa gana en otoño — madera tibia, sol bajo, cero humedad. Pero el Patio de los Leones en julio es IMBATIBLE: mármol fresco a la sombra, el murmullo de doce surtidores como ruido blanco premium, y una brisa con olor a arrayán que baja pre-enfriada por la alberca. Los gatos de la Alhambra (hay una colonia histórica, pregúntale a cualquier guía) llevan siglos sin madrugar. Veredicto: Japón para dormir elegante, Granada para dormir profundo. Victoria opina que cualquier lugar sirve si cabes, pero ella cabe en pocos." }
        ]
      },
      {
        titulo: "El zoco: la ciudad dentro de la ciudad",
        souvenir: { emoji: "🫖", nombre: "Tetera de menta del zoco" },
        escenas: [
          { de: "lucio", texto: "Marrakech. Respira hondo: comino, cuero, menta, azafrán y cobre martillado. Bienvenida al zoco — el laberinto comercial más antiguo del mundo que sigue funcionando." },
          { de: "lucio", texto: "Dato para la casa: 'zoco' (souk) significa mercado. Conozco cierta distribuidora de especias en La Ceja que eligió MUY bien su nombre, por cierto." },
          { de: "cami", texto: "(Ja. Se lo voy a contar a Dani. Bueno: ¿por qué este 'mercado' parece una ciudad completa con barrios?)" },
          { de: "lucio", texto: "Porque LO ES. El zoco se organiza por gremios, como hace mil años: la calle de las especias, la de los tintoreros, la de los latoneros. Competidores vendiendo lo mismo, pared con pared. ¿Contraintuitivo?" },
          { de: "cami", texto: "(Al contrario: es un clúster. Concentrar la oferta atrae TODA la demanda al mismo lugar, y la competencia cara a cara mantiene calidad y precio. Economía de aglomeración medieval.)" },
          { decision: [
            { texto: "Negociar esa lámpara de latón (quiero el ritual completo)", ir: "regateo" },
            { texto: "Asomarme por esa puerta humilde… ¿eso es una casa?", ir: "riad" }
          ]},
          { id: "regateo", de: "npc", nombre: "Sidi Brahim", texto: "¿Te gustó la lámpara? Tienes buen ojo. Para ti… precio especial: 800 dírhams. Siéntate, siéntate. ¿Té de menta?" },
          { de: "lucio", texto: "Regla uno: el té no es venta, es hospitalidad — rechazarlo es grosería. Regla dos: su primer precio es teatro, y tu cara de horror también debe serlo. Ofrece 250 y sonríe." },
          { de: "npc", nombre: "Sidi Brahim", texto: "¡¿250?! ¡Me arruinas! ¡Esta lámpara la martilló mi tío durante un mes! … 600. Y solo porque me caes bien y es temprano." },
          { de: "cami", texto: "(Tres tés y cuatro contraofertas después: 400 dírhams, apretón de manos, y me despide como a una sobrina. Esto no era una transacción — era una ceremonia social con precio incluido.)" },
          { salta: "cierrea4" },
          { id: "riad", de: "npc", nombre: "Lalla Fatima", texto: "Adelante, es mi casa: un riad. La puerta es humilde a propósito — en nuestra cultura la riqueza no se muestra a la calle. Se guarda adentro, para la familia y el huésped.", lamina: { pie: "Planta de un riad: la casa mira hacia adentro. Entrada en codo (nadie ve el interior desde la calle), habitaciones alrededor y el patio con fuente como corazón.", svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="14" width="200" height="192" fill="#d8ccb4"/><rect x="88" y="42" width="144" height="136" fill="#f7f1e4"/><rect x="60" y="14" width="200" height="192" fill="none" stroke="#8a7c5f" stroke-width="3"/><line x1="88" y1="88" x2="60" y2="88" stroke="#8a7c5f" stroke-width="2"/><line x1="88" y1="134" x2="60" y2="134" stroke="#8a7c5f" stroke-width="2"/><line x1="232" y1="88" x2="260" y2="88" stroke="#8a7c5f" stroke-width="2"/><line x1="232" y1="134" x2="260" y2="134" stroke="#8a7c5f" stroke-width="2"/><line x1="130" y1="42" x2="130" y2="14" stroke="#8a7c5f" stroke-width="2"/><line x1="190" y1="42" x2="190" y2="14" stroke="#8a7c5f" stroke-width="2"/><circle cx="160" cy="110" r="17" fill="#7db3c9"/><circle cx="160" cy="110" r="7" fill="#f7f1e4"/><circle cx="112" cy="66" r="8" fill="#5a6e5a"/><circle cx="208" cy="66" r="8" fill="#5a6e5a"/><circle cx="112" cy="154" r="8" fill="#5a6e5a"/><circle cx="208" cy="154" r="8" fill="#5a6e5a"/><path d="M74 206 v-24 h26" fill="none" stroke="#b85c38" stroke-width="5"/><path d="M96 176 l7 6 -7 6" fill="#b85c38"/><text x="74" y="216" font-size="10" fill="#b85c38">entrada en codo</text><text x="160" y="140" font-size="10" fill="#3a6d8a" text-anchor="middle">fuente</text><text x="160" y="30" font-size="11" fill="#7a7266" text-anchor="middle">habitaciones hacia el patio</text><text x="285" y="110" font-size="10" fill="#7a7266" text-anchor="middle" transform="rotate(90 285 110)">la calle nunca ve adentro</text></svg>' } },
          { de: "cami", texto: "(Fachada de tierra sin ventanas… y adentro: patio con fuente, naranjos, azulejos, luz cenital. Es EXACTAMENTE la lógica del tsuboniwa japonés: el paraíso privado en el centro de la casa.)" },
          { de: "npc", nombre: "Lalla Fatima", texto: "Y mira las celosías de madera arriba: mashrabiya. Desde adentro vemos todo; desde afuera no ven nada. Frescura, luz suave y privacidad en una sola pieza." },
          { id: "cierrea4", de: "lucio", texto: "El zoco y el riad son la misma filosofía en dos escalas: la vida pública es teatro generoso, la vida privada es un jardín secreto. Mañana esta idea se sube a un barco… rumbo a tu tierra." }
        ],
        minijuego: {
          tipo: "orden",
          instruccion: "Ordena el ritual del regateo como un profesional del zoco",
          items: [
            "Mostrar interés… sin confesar amor por la pieza",
            "Aceptar el té de menta (rechazarlo es ofensa)",
            "Responder al precio teatral con contraoferta valiente",
            "Negociar por rondas, con drama de ambas partes",
            "Cerrar con apretón de manos y despedida de familia"
          ]
        },
        excavacion: [
          { titulo: "El regateo: por qué el precio fijo es la anomalía", texto: "El precio fijo con etiqueta — que te parece 'lo normal' — es un invento reciente: lo popularizaron los cuáqueros y los grandes almacenes en el siglo XIX (Wanamaker en EE.UU.), en parte por una convicción moral ('un solo precio justo para todos') y en parte por pura escala (imposible entrenar a mil empleados para regatear). Durante los otros diez mil años de historia comercial, el precio fue SIEMPRE una conversación. Y el regateo bien entendido no es un duelo: es un protocolo de construcción de relación — el té, las rondas, el drama compartido crean un vínculo que garantiza la próxima compra. ¿Te suena? Es el guanxi chino de tu semana 1, versión magrebí. Tu trabajo comercial con China y un zoco de Marrakech corren sobre el mismo sistema operativo: el comercio relacional. Occidente lo llama 'mercado emergente'; los antropólogos lo llaman 'como siempre funcionó todo'." },
          { titulo: "Mashrabiya: la ingeniería de la mirada", texto: "La celosía de madera torneada resuelve CUATRO problemas con una sola pieza, sin energía: (1) privacidad direccional — el interior oscuro ve la calle iluminada, la calle no ve el interior (pura física de contraste luminoso); (2) clima — el enrejado fragmenta el aire en chorros que se aceleran (efecto Venturi casero) y las macetas o cántaros que se ponían tras ella enfrían por evaporación; (3) luz — convierte el sol brutal en un encaje de sombra utilizable; (4) sociedad — permitía a las mujeres de la casa participar visualmente de la vida urbana en una cultura de reclusión doméstica, un dato que la antropología no deja pasar: la arquitectura siempre codifica las reglas sociales, para bien y para regular. Su prima andaluza es la celosía de los conventos coloniales… y su tataranieta funcional es tu cortina 'day-night'. El problema de ver sin ser visto tiene 1.000 años de soluciones elegantes." }
        ],
        charla: [
          { q: "¿En el zoco me van a 'tumbar' por ser turista?", a: "Hablemos claro, que para eso soy tu gato: el primer precio para un turista puede ser 3-4 veces el 'precio de paisano'. Pero ojo al matiz cultural: eso no se considera estafa — se considera el punto de partida de una negociación que TÚ decides jugar o no. Las reglas de juego limpio existen: si llegas a un acuerdo, se honra sagradamente; si no piensas comprar, no negocies en serio (hacer perder el tiempo sí es grosería); y el vendedor respetará más a quien regatea con gracia que a quien paga lo primero sin chistar (eso casi lo decepciona). Referencia de calibración: cierre típico entre 30% y 50% del precio inicial, según la pieza y tu teatro. Y si el proceso no te divierte, hay tiendas de precio fijo — pero te pierdes el té y el show.", extra: { q: "¿Y funciona regatear en Colombia?", a: "¡En las plazas de mercado, claro! Paloquemao o la plaza de La Ceja tienen su versión suave: la 'ñapa', el 'vecina, déjemelo en tanto', el descuento por llevar surtido. Es menos teatral que el zoco pero es el mismo principio relacional: el caserito fiel paga menos que el desconocido. Dani lo sabe bien: en Zoco Especias los clientes recurrentes tienen precios que el catálogo no muestra. El comercio relacional nunca se fue de América Latina — solo se disfraza de confiancita." } },
          { q: "¿Cómo no perderse en un zoco sin nombres de calle ni GPS?", a: "Como los locales, que jamás se pierden: navegando por LANDMARKS y gradientes. El zoco tiene lógica interna estricta: los oficios 'limpios' y caros (telas, joyas, libros) rodean la mezquita central; los ruidosos y olorosos (curtidores, herreros, tintoreros) se alejan hacia las puertas de la muralla. O sea: el olor y el sonido son tu brújula — si hueles cuero, vas hacia afuera; si ves oro, la mezquita está cerca. Más las puertas monumentales (babs) como puntos cardinales y los minaretes como faros visibles. Es el mismo sistema jerárquico de Tokio de tu semana pasada: navegar por zonas, no por líneas. Los humanos llevan milenios orientándose sin nombres de calle; el GPS los está volviendo la primera generación que se pierde CON mapa." },
          { q: "Lucio, ¿los gatos del zoco tienen dueño?", a: "Pregunta con trampa: tienen algo MEJOR que dueño — tienen territorio y clientela. Los gatos de Marrakech son de la ciudad: cada uno administra su tramo de zoco, y los comerciantes los alimentan religiosamente (recuerda: animal limpio y bendecido, más control de plagas gratis — win-win milenario). El pescadero 'del' gato naranja del fondo le guarda las vísceras del día; a cambio, ni un ratón en tres calles. Es symbiosis comercial pura: nosotros ponemos presencia ejecutiva y servicios de control; ustedes ponen sardinas y admiración. En Fez hay hasta una fuente histórica donde los aguadores dejaban beber primero a los gatos. Civilización, insisto, correcta." }
        ]
      },
      {
        titulo: "El viaje de vuelta: Al-Ándalus vive en tu tierra",
        souvenir: { emoji: "🌺", nombre: "Buganvilia del balcón cartagenero" },
        escenas: [
          { de: "lucio", texto: "Última misión, y es especial: hoy no viajamos lejos — viajamos DE VUELTA. 1492: cae Granada, y ese mismo año zarpan tres carabelas. En sus bodegas, sin saberlo, viaja Al-Ándalus." },
          { de: "lucio", texto: "Los carpinteros, albañiles y alarifes que colonizaron América venían de una España empapada de 800 años de cultura andalusí. Construyeron lo que sabían construir." },
          { de: "cami", texto: "(Espera… ¿me vas a decir que la arquitectura colonial que conozco de toda la vida es nieta del riad de ayer?)" },
          { de: "lucio", texto: "Te lo voy a MOSTRAR. Mira la genealogía completa, de Fez a Cartagena.", lamina: { pie: "La misma idea viajó 7.000 km y tres siglos: la casa-patio con fuente al centro. De Fez a Sevilla, de Sevilla a Cartagena de Indias.", svg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="30" width="84" height="84" fill="#d8ccb4"/><rect x="26" y="46" width="52" height="52" fill="#f7f1e4"/><circle cx="52" cy="72" r="9" fill="#7db3c9"/><rect x="118" y="30" width="84" height="84" fill="#e3d9c3"/><rect x="134" y="46" width="52" height="52" fill="#f7f1e4"/><circle cx="160" cy="72" r="9" fill="#7db3c9"/><path d="M138 46 h44 M138 98 h44" stroke="#b85c38" stroke-width="2" stroke-dasharray="5 4"/><rect x="226" y="30" width="84" height="84" fill="#e8cfa8"/><rect x="242" y="46" width="52" height="52" fill="#f7f1e4"/><circle cx="268" cy="72" r="9" fill="#7db3c9"/><rect x="226" y="24" width="84" height="8" fill="#8a5a2b"/><rect x="234" y="14" width="10" height="12" fill="#5a6e5a"/><rect x="292" y="14" width="10" height="12" fill="#c2527a"/><path d="M98 72 h14" stroke="#7a7266" stroke-width="3"/><path d="M109 66 l7 6 -7 6" fill="#7a7266"/><path d="M206 72 h14" stroke="#7a7266" stroke-width="3"/><path d="M217 66 l7 6 -7 6" fill="#7a7266"/><text x="52" y="132" font-size="11" fill="#2e2a26" text-anchor="middle" font-weight="bold">Riad · Fez</text><text x="52" y="146" font-size="10" fill="#7a7266" text-anchor="middle">s. XII</text><text x="160" y="132" font-size="11" fill="#2e2a26" text-anchor="middle" font-weight="bold">Patio andaluz</text><text x="160" y="146" font-size="10" fill="#7a7266" text-anchor="middle">Sevilla · s. XVI</text><text x="268" y="132" font-size="11" fill="#2e2a26" text-anchor="middle" font-weight="bold">Casa colonial</text><text x="268" y="146" font-size="10" fill="#7a7266" text-anchor="middle">Cartagena · s. XVII</text><text x="160" y="164" font-size="10" fill="#7a7266" text-anchor="middle" font-style="italic">misma física, mismo corazón: el patio con agua</text></svg>' } },
          { de: "cami", texto: "(El patio de las casas de la abuela. El zaguán. Los balcones de madera de Cartagena. Las macetas, los corredores, la pila en el centro… Todo esta semana estaba hablando de MI casa.)" },
          { decision: [
            { texto: "Caminar Cartagena con estos ojos nuevos", ir: "cartagena" },
            { texto: "Entrar a esa iglesia en Tunja que Lucio menciona", ir: "tunja" }
          ]},
          { id: "cartagena", de: "lucio", texto: "Mira la casa cartagenera con tu checklist andalusí: zaguán en codo (privacidad del riad ✓), patio central con pila (✓), corredores en arcada (✓), balcón volado de madera con celosía…" },
          { de: "cami", texto: "(¡El balcón ES una mashrabiya! Ver la calle sin ser vista, sombra para el interior, brisa filtrada. En el Caribe cambió el torneado por baranda de macana, pero el trabajo que hace es idéntico.)" },
          { de: "lucio", texto: "Y el color no es coincidencia: la cal blanca contra el sol, los añiles y almagres… la paleta caribeña tiene ADN mediterráneo-magrebí. Cartagena es prima de Chefchaouen y de Cádiz, criada con mar Caribe." },
          { salta: "cierrea5" },
          { id: "tunja", de: "npc", nombre: "Padre Restrepo", texto: "Mire hacia arriba, hija. Este techo de la iglesia es un artesonado mudéjar: madera ensamblada en lazos de estrella, sin un clavo en el armazón, al modo que trajeron los alarifes de Sevilla." },
          { de: "cami", texto: "(¿¡SIN CLAVOS!? ¡Takeshi-san! ¡Es la otra gran carpintería de ensambles del mundo — y terminó en los Andes colombianos! Las estrellas del techo son las estrellas de 8 puntas del zellige, hechas madera.)" },
          { de: "npc", nombre: "Padre Restrepo", texto: "'Carpintería de lo blanco' la llamaban. Tunja, Bogotá, Quito… los mejores artesonados mudéjar de América. Los manuales de López de Arenas cruzaron el océano en los baúles de los maestros." },
          { id: "cierrea5", de: "lucio", texto: "Y así se cierra el viaje, Cami: el arco de Córdoba, la estrella de Fez, el patio de Granada y el zoco de Marrakech… viven en Cartagena, en Tunja, en la casa de tu abuela. No estudiaste un mundo lejano esta semana. Estudiaste el sótano de tu propia casa. Mañana: el desafío del Califa. Mi fez está en juego." }
        ],
        minijuego: {
          tipo: "parejas",
          instruccion: "Empareja la herencia andalusí en América",
          pares: [
            ["Zaguán en codo", "Hijo de la entrada del riad"],
            ["Balcón con celosía", "La mashrabiya del Caribe"],
            ["Artesonado mudéjar", "Techo de madera ensamblada sin clavos"],
            ["Patio con pila", "Nieto del patio andaluz"],
            ["Acequia", "Palabra árabe que aún riega en Colombia"]
          ]
        },
        excavacion: [
          { titulo: "Mudéjar: el estilo de los que se quedaron", texto: "'Mudéjar' viene del árabe mudajjan — 'el que se quedó'. Cuando los reinos cristianos reconquistaban ciudades, miles de artesanos musulmanes permanecían bajo el nuevo régimen… y seguían siendo los mejores constructores disponibles. El resultado es un estilo único en el mundo: iglesias católicas con geometría islámica, campanarios que son minaretes bautizados (la Giralda de Sevilla es el caso supremo), techos con estrellas de 8 puntas sobre altares cristianos. Los historiadores del arte lo llaman 'el estilo español por excelencia' precisamente porque solo pudo nacer de esa convivencia forzada y fértil. Y cuando España saltó a América, saltó con él: se considera que los artesonados de Tunja y Bogotá están entre los conjuntos mudéjares más importantes fuera de España. La UNESCO protege el mudéjar aragonés como Patrimonio de la Humanidad; el americano sigue siendo el secreto mejor guardado del patrimonio colombiano. Ve a Tunja: casi nunca hay fila para ver una de las maravillas del continente." },
          { titulo: "El patio: 4.000 años de aire acondicionado gratis", texto: "El patio no lo inventó el Islam: hay casas-patio en Ur (Mesopotamia) hace 4.000 años, en la Roma clásica (el atrio con impluvium) y en China (el siheyuan). Pero la cadena riad→andaluz→colonial es la transmisión mejor documentada, y la física es siempre la misma y sigue vigente: (1) masa térmica — muros gruesos que amortiguan el ciclo día/noche; (2) el patio como pozo de aire frío nocturno que 'gotea' hacia las habitaciones durante el día; (3) evaporación de fuente y plantas robándole grados al aire; (4) sombra autogenerada — el edificio se protege a sí mismo; (5) el efecto chimenea que expulsa el aire caliente por arriba. Un buen patio colonial logra 8-10°C menos que la calle SIN GASTAR UN VATIO. La arquitectura bioclimática contemporánea está redescubriéndolo todo con sensores y CFD, y publicando papers que la Lalla Fatima de ayer resumiría en una frase: 'la casa sabe cuidarse sola si la dejas'. Para una ingeniera de producción hay una moraleja de oro: antes de agregar energía a un problema, pregúntate si la geometría ya lo resolvió hace mil años." }
        ],
        charla: [
          { q: "¿Qué tan 'árabe' es el español que hablo?", a: "Más de lo que sospechas: unas 4.000 palabras del español vienen del árabe — el segundo aportante después del latín. Casi todo lo que empieza por 'al-' (el artículo árabe fosilizado): almohada, alcalde, albañil, alberca, alcancía, algoritmo, álgebra, alacena, alfombra… Y sin al-: azúcar, aceite, taza, jarabe, cero, naranja, limón, café (vía árabe), barrio, hasta 'ojalá' (wa-shā' Allāh: 'si Dios quiere'). Fíjate en el patrón: agricultura, construcción, matemáticas, comercio, cocina — exactamente las áreas donde Al-Ándalus era superpotencia. Cada vez que dices 'ojalá la almohada esté en la alcoba', estás hablando un 30% andalusí. Tu idioma es el souvenir más grande que trajo la carabela.", extra: { q: "¿Y en la comida colombiana quedó algo?", a: "El arroz llegó con ellos a España (y de ahí acá), igual que la caña de azúcar (que luego definió la economía y la tragedia del Caribe), los cítricos, la berenjena, la almendra y la canela como cultura de especias. El arroz con pollo es descendiente lejano de las cazuelas de arroz andalusíes. Y los dulces de convento — panelitas, cortados, alfajores (¡palabra árabe!) — descienden directo de la repostería de almendra y almíbar que las moriscas enseñaron a las monjas. El 'alfajor' que comes en Semana Santa se llamaba al-hasú ('el relleno') hace 800 años. Dani vendiendo especias es, históricamente hablando, un oficio andalusí de pura cepa." } },
          { q: "¿Dónde más veo esto en Colombia, aparte de Cartagena?", a: "Ruta completa para tus ojos nuevos: Mompox (patios, balcones y herrería — congelada en el siglo XVIII, Patrimonio de la Humanidad), Popayán (la ciudad blanca: cal, patios y zaguanes de manual andalusí), Villa de Leyva (la plaza empedrada y las casas-patio), Barichara (tapia pisada — la misma técnica del muro de la Alhambra, literalmente 'tapial'), Santa Fe de Antioquia (a dos horas de tu casa: patios, portones y celosías), y el premio mayor: Tunja y Bogotá (los artesonados mudéjares de las iglesias — mira ARRIBA en Santa Clara la Real y San Francisco). Reto permanente activado: de ahora en adelante, en cada pueblo colombiano, busca el zaguán, el patio, la pila y el balcón. Vas a ver Al-Ándalus en todas partes. Es el mejor souvenir de esta semana: no se puede perder porque está en tu paisaje." },
          { q: "Lucio, ¿y Victoria y tú qué heredaron de allá?", a: "Investigación personal que hice con mucho interés: los gatos llegamos a América EN las carabelas — oficialmente como control de plagas de a bordo (los ratones se comían las provisiones y los cables… perdón, las jarcias), extraoficialmente como los primeros turistas de lujo del Atlántico. O sea que todo gato criollo americano desciende de marineros andaluces de cuatro patas. ¿Victoria? Los perros de presa españoles cruzaron en esos mismos barcos, pero su línea danesa es del norte de Europa — ella es inmigración alemana posterior, muy elegante. Eso sí: el amor por echarse en el patio fresco junto a la pila, ESO lo heredamos los dos de esta semana que estudiaste. Somos patrimonio bioclimático viviente." }
        ]
      }
    ],
    desafio: {
      titulo: "El desafío del Califa",
      intro: "Ocho preguntas custodian las puertas de Al-Ándalus. Tres vidas. El fez de Lucio — y tu honor de exploradora — están en juego.",
      vidas: 3,
      minCorrectas: 6,
      preguntas: [
        { q: "¿Por qué la Mezquita de Córdoba tiene arcos DOBLES?", opciones: ["Pura decoración", "Las columnas recicladas eran muy cortas para la altura deseada", "Para soportar terremotos", "Error de construcción corregido"], correcta: 1 },
        { q: "La estrella de 8 puntas del zellige se construye con…", opciones: ["Un octágono estirado", "Dos cuadrados girados 45°", "Ocho triángulos", "Un compás de 8 brazos"], correcta: 1 },
        { q: "¿Cuántas formas fundamentales de repetir un patrón en el plano existen?", opciones: ["17", "12", "24", "Infinitas"], correcta: 0 },
        { q: "El agua de la Alhambra sube y corre gracias a…", opciones: ["Bombas de tornillo", "Molinos de agua", "Pura gravedad desde 6 km en la sierra", "Norias de sangre"], correcta: 2 },
        { q: "Los muqarnas (techos de panal) se construyen con…", opciones: ["Miles de piezas únicas talladas", "Solo 7 tipos de pieza modular combinados", "Yeso vertido en un molde gigante", "Madera y espejos"], correcta: 1 },
        { q: "En el zoco, rechazar el té de menta durante una negociación es…", opciones: ["Una táctica inteligente", "Obligatorio si no vas a comprar", "Una descortesía: el té es hospitalidad, no venta", "Señal de que aceptas el precio"], correcta: 2 },
        { q: "'Mudéjar' significa…", opciones: ["'El que se quedó': artesanos musulmanes bajo reinos cristianos", "'Mezcla de estilos'", "'Madera ensamblada'", "'El último reino'"], correcta: 0 },
        { q: "¿Cuál NO es herencia andalusí en Colombia?", opciones: ["El zaguán y el patio con pila", "Los artesonados de Tunja", "La palabra 'acequia'", "El bahareque indígena"], correcta: 3 }
      ]
    },
    dante: {
      titulo: "Dante y los gatos del Albaicín",
      historia: "Cuando Dante llegó a Granada — cuentan los gatos del Albaicín, que no olvidan nada — subió la colina de noche, cuando la Alhambra se enciende dorada contra la Sierra Nevada. Un husky frente a un palacio rojo, con nieve de verdad brillando detrás: dijo que era la primera vez que un lugar le mostraba sus dos amores en un solo paisaje. Los gatos del barrio, que no le hablan a ningún perro por principio, hicieron con él la única excepción registrada en la historia: le contaron el secreto del agua — que toda la magia del palacio baja de la montaña por un canal de 700 años. Dante hizo lo que hacen los grandes: no se quedó en el palacio. Siguió la acequia cuesta arriba las seis kilómetros completas, hasta encontrar el punto exacto donde el río se convierte en canal. Ahí dejó una huella en la nieve de la sierra y bajó sin decir nada. 'Los turistas miran las fuentes', le dijo después a Lucio. 'Los exploradores buscan de dónde viene el agua.'",
      consejo: "Consejo de la bitácora de Dante: 'Sigue el agua hacia arriba y encontrarás la fuente. Con las buenas preguntas funciona igual.'"
    },
    pagina: {
      dia: 1,
      nodo: "trazar",
      titulo: "Página 2 — Sobre los patrones",
      texto: "«En Fez vi un muro que no se acababa nunca: la misma estrella, repetida hasta donde la vista se rinde. El maalem me dijo que el patrón sigue existiendo más allá del muro — que el muro es solo la ventana. Pienso que los caminos también son patrones: la misma huella, repetida. Un explorador de verdad es el que sabe en qué punto del patrón girar donde nadie gira. — D.»"
    },
    datosVictoria: [
      "El profeta Mahoma tenía una gata llamada Muezza. Cuenta la tradición que prefirió cortar la manga de su túnica antes que despertarla. Victoria aprueba ese nivel de servicio.",
      "El sloughi, el galgo del desierto magrebí, es de las pocas razas de perro que la cultura beréber trata como familia: duerme dentro de la casa. Victoria dice que obvio.",
      "En Chefchaouen, el pueblo azul de Marruecos, hay tantos gatos como personas y las puertas tienen escalones especiales para que suban al fresco.",
      "Los gatos llegaron a América en las carabelas españolas, contratados como control de plagas de a bordo. Sueldo: sardinas y gloria eterna.",
      "En Fez hay una fuente histórica donde los aguadores dejaban beber primero a los gatos del zoco antes de llenar sus odres. Prioridades claras desde el siglo XIV."
    ],
    biblioteca: {
      nota: "Domingo de campamento: té de menta junto a la fogata. Lucio estrena fez (si te lo ganaste) y deja recomendaciones para seguir en Al-Ándalus sin agenda.",
      items: [
        { icono: "🎬", tipo: "Documental", titulo: "Cuando los moros gobernaron Europa (Bettany Hughes)", nota: "El documental clásico sobre Al-Ándalus: Córdoba, la Alhambra y la historia que Europa tardó en contar. Se encuentra en YouTube." },
        { icono: "🎌", tipo: "Anime", titulo: "Magi: The Labyrinth of Magic", nota: "Bazares, caravanas, palacios y djinns: Las Mil y Una Noches hecha anime de aventuras. El escenario es TODO lo que caminaste esta semana." },
        { icono: "🎵", tipo: "Música", titulo: "Radio Tarifa — Rumba Argelina", nota: "Flamenco + música andalusí + magrebí en un disco legendario. Es el puente Córdoba-Marrakech hecho sonido. Para oír con té de menta." },
        { icono: "📖", tipo: "Libro", titulo: "Cuentos de la Alhambra — Washington Irving", nota: "En 1829 un escritor gringo se instaló A VIVIR en la Alhambra semiabandonada y escribió las leyendas que la salvaron del olvido. Cortito, mágico y gratis en dominio público." }
      ]
    }
  },
  {
    id: "exp-japon",
    inicio: "2026-07-06",
    destino: "Japón",
    subtitulo: "Templos sin clavos, casas de vacío y una ciudad que muda de piel",
    emoji: "🇯🇵",
    color: "#b85c38",
    accesorio: { id: "kasa", nombre: "Kasa de paja japonesa" },
    dias: [
      {
        titulo: "Kioto: la ciudad cuadrícula",
        souvenir: { emoji: "🏮", nombre: "Farolillo de Kioto" },
        escenas: [
          { de: "lucio", texto: "Kioto, año 794. Bueno, hoy no es 794, pero esta ciudad sigue usando el plano de ese año: una cuadrícula perfecta copiada de Chang'an, la capital china." },
          { de: "lucio", texto: "Los japoneses estudiaron la mejor ciudad de su época y la replicaron a su escala. Ingeniería de copiar bien, que es más difícil de lo que suena." },
          { de: "cami", texto: "(Una ciudad con sistema de coordenadas desde el siglo VIII. Mi lado ingeniera está ronroneando.)" },
          { de: "lucio", texto: "Mira esas casas largas y flacas: son machiya, casas-tienda de madera. ¿Notas que la fachada es angosta pero se hunden profundísimo hacia atrás?" },
          { de: "lucio", texto: "Razón: el impuesto se cobraba por metros de fachada. Así que hicieron casas anguila: 5 metros de frente, 30 de fondo. La gente optimiza lo que le midas." },
          { decision: [
            { texto: "Entrar a una machiya por ese callejón", ir: "machiya" },
            { texto: "Ir al templo de la pagoda de cinco pisos", ir: "pagoda" }
          ]},
          { id: "machiya", de: "npc", nombre: "Sra. Aoyama", texto: "Bienvenida. Adelante: primero la tienda (mise no ma), luego el pasillo de tierra que cruza toda la casa, y al fondo… mira." },
          { de: "cami", texto: "(Un jardín diminuto en pleno centro de la casa. Un pozo de luz y aire en una casa sin ventanas laterales.)" },
          { de: "npc", nombre: "Sra. Aoyama", texto: "Es el tsuboniwa. Sin él, una casa tan profunda se ahogaría. La luz y el viento entran por el corazón, no por los lados." },
          { de: "lucio", texto: "Ventilación pasiva del año 1200. Y el mejor lugar de la casa para una siesta, doy fe." },
          { salta: "atardecer" },
          { id: "pagoda", de: "lucio", texto: "La pagoda de Tō-ji: 55 metros de madera, mil años de terremotos… y ahí sigue. ¿Sabes cuál es el truco?" },
          { de: "cami", texto: "(¿Flexibilidad? La madera no es rígida, los ensambles deben disipar energía…)" },
          { de: "lucio", texto: "Exacto, ingeniera. Y hay más: adentro cuelga el shinbashira, una columna central que NO carga el edificio. Flota, y oscila a contratiempo de los pisos." },
          { de: "lucio", texto: "Un amortiguador de masa del siglo VII. El Tokyo Skytree — 634 metros, año 2012 — usa exactamente el mismo principio. Guárdate ese dato: lo vas a reencontrar el viernes." },
          { id: "atardecer", de: "lucio", texto: "Atardece sobre las tejas. Primera lección de Japón: aquí las soluciones viejas no se botan — se refinan durante siglos." }
        ],
        minijuego: {
          tipo: "parejas",
          instruccion: "Empareja cada término con su significado",
          pares: [
            ["Heian-kyō", "El nombre original de Kioto"],
            ["Machiya", "Casa-tienda angosta y profunda"],
            ["Tsuboniwa", "Jardín diminuto dentro de la casa"],
            ["Shinbashira", "Columna central antisísmica"],
            ["Chang'an", "Ciudad china que Kioto copió"]
          ]
        },
        excavacion: [
          { titulo: "¿Por qué madera y no piedra?", texto: "No fue falta de técnica: fue una decisión de ingeniería ante el entorno. Japón vive sobre cuatro placas tectónicas y recibe tifones cada año. La piedra resiste compresión pero falla frágil ante el sismo; la madera flexiona, cruje y vuelve. Los ensambles de madera se comportan como uniones semi-rígidas que disipan energía en fricción — el equivalente histórico de tus uniones apernadas frente a las soldadas. El precio fue el fuego: las ciudades japonesas ardieron una y otra vez (Edo tuvo incendios tan frecuentes que los llamaban 'las flores de Edo'). La respuesta cultural no fue construir indestructible, sino construir *reconstruible*: técnicas estandarizadas, piezas reemplazables y el conocimiento — no el objeto — como lo que de verdad se conserva." },
          { titulo: "La cuadrícula y los demonios del noreste", texto: "El plano de Heian-kyō no era solo urbanismo: era cosmología aplicada. El palacio al norte (el emperador mira al sur, como el cielo), avenidas numeradas de norte a sur — por eso hoy puedes ubicarte en Kioto sabiendo que Shijō significa 'calle cuarta'. Y un detalle que fascina a los antropólogos: el noreste se consideraba kimon, la 'puerta de los demonios'. Para protegerla, se fundó el monasterio de Enryaku-ji exactamente en esa dirección, sobre el monte Hiei. Una ciudad entera diseñada con una capa funcional y una capa simbólica superpuestas — igual que un plano tuyo tiene la capa estructural y la capa de servicios." }
        ],
        charla: [
          { q: "¿Por qué las pagodas no se caen con los terremotos?", a: "Tres mecanismos juntos: los pisos están apilados sin unión rígida (cada uno puede deslizarse un poco, como una serpiente que ondula), los cientos de ensambles de madera disipan energía por fricción, y el shinbashira central actúa como péndulo desfasado que contrarresta la oscilación. En 1.400 años de registros, prácticamente ninguna pagoda de cinco pisos ha colapsado por sismo. Cuando los ingenieros del Tokyo Skytree buscaron cómo estabilizar la torre más alta de Japón, terminaron instalando… una columna central de hormigón que oscila a contratiempo. La llamaron oficialmente shinbashira.", extra: { q: "¿Y por qué occidente no lo hizo así?", a: "Porque el problema era otro. Europa construía contra el tiempo y el asedio: muros gruesos, piedra, rigidez. Japón construía contra el sismo y el tifón: ligereza, flexibilidad, reemplazo. Cada tradición optimizó su función objetivo. Es el mismo edificio-problema con distintas condiciones de frontera." } },
          { q: "¿Cómo es una machiya por dentro?", a: "Una secuencia de capas de lo público a lo íntimo: la tienda a la calle (mise no ma), un pasillo de tierra apisonada (tōriniwa) que corre de la puerta al fondo y funciona como calle interior, cuartos de tatami que se van volviendo más privados, el tsuboniwa que mete luz y viento al centro, y al fondo el almacén (kura) de muros gruesos — lo único a prueba de fuego, donde se guardaba lo irremplazable. La casa entera es un gradiente: cualquier visitante llega a la tienda, pocos cruzan el pasillo, casi nadie ve el fondo." },
          { q: "¿Los gatos tenemos historia en Japón?", a: "¡La mejor de todas! Llegamos en barco desde China (con los sutras budistas: alguien tenía que proteger los pergaminos de los ratones — servicio de ingeniería de protección de datos, versión felina). En Kioto hay templos donde los gatos eran guardianes oficiales. Y el maneki-neko, el gato que saluda con la pata en cada tienda japonesa, viene de una leyenda del templo Gōtoku-ji: un gato le hizo señas a un señor feudal para que se refugiara de una tormenta, y el templo prosperó para siempre. Blanco y naranja, por cierto. Como alguien que conoces." }
        ]
      },
      {
        titulo: "El carpintero sin clavos",
        souvenir: { emoji: "🧩", nombre: "Ensamble kanawa tsugi" },
        escenas: [
          { de: "lucio", texto: "Hoy toca taller. Huele a viruta de ciprés — el segundo mejor olor del mundo después del atún." },
          { de: "npc", nombre: "Takeshi-san", texto: "Bienvenida. Soy carpintero de templos, miyadaiku. Mi oficio tiene una regla: la estructura debe poder armarse y desarmarse. Sin clavos." },
          { de: "cami", texto: "(¿Un edificio completo con uniones desmontables? Eso es… mantenibilidad de diseño llevada al extremo.)" },
          { de: "npc", nombre: "Takeshi-san", texto: "Mira este ensamble: kanawa tsugi. Dos vigas que se abrazan en zigzag y se traban con una cuña. Une, carga y — cuando la pieza envejezca en cien años — se suelta y se reemplaza solo el tramo dañado." },
          { de: "lucio", texto: "Por eso el templo Hōryū-ji lleva 1.300 años en pie: no porque nada se dañe, sino porque todo se puede reparar. Es el edificio de madera más viejo del mundo." },
          { decision: [
            { texto: "Intentar armar el ensamble yo misma", ir: "armar" },
            { texto: "Preguntarle por su maestro", ir: "maestro" }
          ]},
          { id: "armar", de: "npc", nombre: "Takeshi-san", texto: "Adelante. Siente cómo entra: si fuerza, está mal; si baila, está mal. Debe deslizar con resistencia pareja, como cerrar una caja bien hecha." },
          { de: "cami", texto: "(Clac. La cuña entra y las dos vigas quedan siendo una. Tolerancias de décimas de milímetro… a mano. Esto es mecanizado de precisión sin máquinas.)" },
          { de: "npc", nombre: "Takeshi-san", texto: "Los ensambles no son rígidos a propósito: en un sismo, cada unión cede un poquito y quema energía en fricción. Cientos de amortiguadores pequeños en vez de una estructura que pelea entera." },
          { salta: "cierre2" },
          { id: "maestro", de: "npc", nombre: "Takeshi-san", texto: "Mi escuela viene de Nishioka Tsunekazu, el último gran miyadaiku de Hōryū-ji. Él decía: 'No compres madera, compra la montaña' — hay que conocer dónde creció cada árbol." },
          { de: "npc", nombre: "Takeshi-san", texto: "Un árbol que creció en la ladera sur, con sol, se usa en el lado sur del templo. Torcido en vida, torcido en obra: se coloca donde su torsión trabaje a favor de la estructura." },
          { de: "cami", texto: "(Selección de materiales según el historial de cargas de cada pieza. Esto es caracterización de materiales, versión siglo VII.)" },
          { id: "cierre2", de: "lucio", texto: "Lección de hoy: lo contrario de desechable no es eterno — es reparable. Recuérdalo el viernes, cuando veamos qué hizo Tokio con esta idea." }
        ],
        minijuego: {
          tipo: "orden",
          instruccion: "Ordena los pasos del miyadaiku para levantar un templo que dure mil años",
          items: [
            "Elegir cada árbol según la ladera donde creció",
            "Cortar y dejar secar la madera durante años",
            "Tallar los ensambles a mano, pieza por pieza",
            "Montar la estructura sin un solo clavo",
            "Desarmar y reemplazar piezas cada ciertas décadas"
          ]
        },
        excavacion: [
          { titulo: "El hinoki: madera que mejora 200 años", texto: "El ciprés hinoki es el material estrella de los templos, y su curva de comportamiento parece de manual de materiales: tras el corte, su resistencia mecánica *aumenta* durante unos 200 años (la lignina y las resinas se estabilizan) y luego decae tan lento que a los 1.000 años conserva cerca del 80% de su resistencia original. Nishioka comprobó al restaurar Hōryū-ji que las virutas de vigas del siglo VII todavía soltaban aroma a ciprés fresco. Hay pocos materiales en el mundo cuya vida útil de diseño se mida en milenios — y es un material que se planta." },
          { titulo: "Dos filosofías de lo impermanente", texto: "Japón resolvió 'nada dura para siempre' de dos formas opuestas y brillantes. La vía miyadaiku: construir desmontable y reparar por partes durante siglos (Hōryū-ji). La vía de Ise: el santuario más sagrado del país se demuele y reconstruye idéntico cada 20 años desde hace 1.300 — el edificio es nuevo, pero el *conocimiento* para hacerlo jamás ha muerto, porque cada generación de carpinteros lo construye una vez como aprendiz y una como maestro. Los teóricos de la conservación occidental (que restauran la piedra 'original') llevan décadas debatiendo cuál de los dos es más auténtico. Pregunta sin respuesta única: ¿qué conservas, el objeto o la capacidad de crearlo?" }
        ],
        charla: [
          { q: "¿De verdad no usan ni un clavo?", a: "La estructura portante, no. Existen más de 400 tipos de ensambles catalogados (tsugite para empalmar a lo largo, shiguchi para uniones en ángulo), y con ese repertorio resuelves cualquier encuentro entre piezas. Sí se usan clavos y herrajes en elementos secundarios — tejas, tablones de piso — pero la lógica es clara: lo que carga, se ensambla; porque lo que se ensambla, se puede desensamblar para reparar. Un clavo oxidado dentro de una unión estructural es una falla esperando fecha.", extra: { q: "¿Y las herramientas?", a: "Casi las mismas desde hace siglos: sierras que cortan al halar (más control, corte más fino), cepillos kanna que sacan virutas de micras — hay competencias nacionales de quién saca la viruta continua más delgada, se llegan a 3-9 micras — y formones para cada geometría de ensamble. El acabado es tan fino que la madera estructural no se lija ni se pinta." } },
          { q: "¿Ese oficio sigue vivo hoy?", a: "Sigue, y con un récord: Kongō Gumi, la empresa de carpintería de templos fundada en el año 578 (sí, quinientos setenta y ocho), operó de forma continua durante 1.428 años — fue la empresa más antigua del mundo hasta que en 2006 pasó a ser subsidiaria de una constructora. Cuarenta generaciones de la misma familia. Hoy los miyadaiku se forman en aprendizajes de 10+ años, y la restauración de templos es una industria activa: cada gran templo tiene un calendario de desmontes programados a décadas vista. Mantenimiento preventivo con horizonte de siglos." },
          { q: "¿Qué tiene que ver esto con mi trabajo?", a: "Más de lo que parece: tú vendes maquinaria pesada, y el dilema del miyadaiku es el dilema de tus clientes — ¿compras el equipo soldado, monolítico y más barato, o el modular y reparable que vive 30 años? Los templos japoneses son el caso de estudio máximo de 'diseño para mantenibilidad': costo inicial altísimo, costo de ciclo de vida imbatible. La próxima vez que un cliente dude entre precio y reparabilidad, cuéntale del edificio de madera de 1.300 años." }
        ]
      },
      {
        titulo: "La casa del vacío",
        souvenir: { emoji: "🪭", nombre: "Abanico de la posada" },
        escenas: [
          { de: "lucio", texto: "Esta noche dormimos en un ryokan, una posada tradicional. Te advierto: vas a entrar a un cuarto y te va a parecer que le falta todo. Ese es el punto." },
          { de: "npc", nombre: "Okami-san", texto: "Bienvenida. Los zapatos aquí, por favor — el genkan marca dónde termina el mundo de afuera. Nadie lo cruza calzado." },
          { de: "cami", texto: "(Un escalón de 15 centímetros que funciona como frontera ritual. Los antropólogos deben amar este país.)" },
          { de: "lucio", texto: "¿Recuerdas la liminalidad de tu semana de antropología? El genkan es eso, hecho arquitectura: un umbral entre lo impuro de afuera y lo limpio de adentro. Van Gennep estaría feliz." },
          { de: "npc", nombre: "Okami-san", texto: "Su habitación es de ocho tatamis. Aquí no medimos en metros: el tatami — 90 por 180 centímetros — dimensiona la casa entera. Columnas, puertas y ventanas caen donde el módulo lo pide." },
          { de: "cami", texto: "(Un sistema modular estandarizado… desde el siglo XVII. Toda la industria — esteras, muebles, carpintería — comparte el mismo estándar dimensional. Es un DIN con 400 años.)" },
          { decision: [
            { texto: "Examinar ese nicho vacío con una sola flor", ir: "tokonoma" },
            { texto: "Salir a la veranda que da al jardín", ir: "engawa" }
          ]},
          { id: "tokonoma", de: "npc", nombre: "Okami-san", texto: "Es el tokonoma. El lugar de honor de la casa… y se mantiene casi vacío: una flor de temporada, una caligrafía. Se cambia según el mes y el huésped." },
          { de: "lucio", texto: "Fíjate en la jugada de diseño: en vez de exhibir todo lo que tienes, exhibes UNA cosa — y el vacío alrededor la vuelve importante. Curaduría, no acumulación." },
          { de: "cami", texto: "(Mi apartamento tiene cero espacios así. Nota mental para el futuro tema de diseño interior.)" },
          { salta: "noche" },
          { id: "engawa", de: "lucio", texto: "La engawa: esta tarima de madera no es ni cuarto ni jardín. Es un 'entre'. En verano es sala fresca, en invierno colchón térmico, siempre es el mejor lugar para un gato al sol." },
          { de: "npc", nombre: "Okami-san", texto: "Y mire el jardín: parece que incluye la montaña del fondo, ¿verdad? Se llama shakkei — paisaje prestado. La montaña no es nuestra, pero la vista sí." },
          { de: "cami", texto: "(Diseñar incorporando lo que no te pertenece. La montaña como componente del jardín. Qué elegancia de recurso.)" },
          { id: "noche", de: "lucio", texto: "Esta noche, el cuarto 'vacío' se transforma: sacan los futones del armario y la sala se vuelve dormitorio. Un espacio, muchos usos. El vacío no era falta de cosas — era capacidad disponible." }
        ],
        minijuego: {
          tipo: "parejas",
          instruccion: "Empareja cada concepto de la casa japonesa",
          pares: [
            ["Tatami", "El módulo que dimensiona la casa"],
            ["Genkan", "Umbral donde se dejan los zapatos"],
            ["Tokonoma", "Nicho para una sola cosa bella"],
            ["Engawa", "Veranda entre casa y jardín"],
            ["Shakkei", "Paisaje prestado del entorno"]
          ]
        },
        excavacion: [
          { titulo: "Ma: el vacío que no es minimalismo", texto: "La palabra ma (間) suele traducirse como 'espacio negativo', pero es más rica: es el intervalo cargado de sentido — en arquitectura, en música (el silencio entre notas), en conversación (la pausa que dice más que la frase), hasta en manga (el panel vacío que marca el tiempo). El minimalismo occidental es una estética de la reducción: quitar hasta que quede lo esencial. El ma es otra cosa: el vacío como *material activo* que le da significado a lo que lo rodea. En 1978 el arquitecto Arata Isozaki montó en París la exposición 'Ma: Space-Time in Japan', que le presentó el concepto a occidente y marcó a una generación de diseñadores. Si alguna vez sentiste que un plano de Ghibli 'respira', ya sabes qué estabas sintiendo." },
          { titulo: "Del tatami a Muji: el linaje del vacío moderno", texto: "El sistema del tatami nunca murió: los apartamentos japoneses se anuncian todavía en 'LDK + número de tatamis' (un '6J' es un cuarto de seis esteras), y la industria del mueble sigue amarrada a ese módulo. Cuando en los 80 nació Muji ('productos de calidad sin marca'), su manifiesto de diseño — vacío, funcional, anónimo — era el ma industrializado; su director de arte, Kenya Hara, escribió libros enteros sobre el vacío como estrategia de diseño. Y el fenómeno Marie Kondo es la versión doméstica exportada: su pregunta '¿te da alegría?' es curaduría de tokonoma aplicada al clóset. La casa japonesa lleva 400 años haciéndole ingeniería al concepto de 'menos'." }
        ],
        charla: [
          { q: "¿Por qué los cuartos se miden en tatamis?", a: "Porque el tatami pasó de ser un mueble (una estera que se tendía para sentarse) a ser el módulo generador de la arquitectura. Hacia el periodo Edo se estandarizó la proporción 1:2 (unos 90×180 cm, con variaciones regionales — el tatami de Kioto es más grande que el de Tokio, motivo de orgullo local) y la estructura de la casa se empezó a dimensionar en ken, la distancia entre columnas, calzada con los tatamis. Resultado: cualquier carpintero de cualquier provincia podía construir, y cualquier estera, puerta o mueble encajaba. Es interoperabilidad dimensional pre-industrial — el contenedor marítimo de la vivienda.", extra: { q: "¿Y por qué 1:2?", a: "Ergonomía y combinatoria: una persona sentada ocupa medio tatami, acostada uno entero ('medio tatami para estar, uno para dormir', dice el refrán). Y la proporción 1:2 permite tramas en L, en T, en molinete — un cuarto de 4.5, 6 u 8 tatamis siempre cierra perfecto. Un módulo con proporción áurea sería más bonito en teoría y un desastre para enlosar." } },
          { q: "¿Qué es wabi-sabi de verdad? Lo veo en todos lados como decoración", a: "Y casi siempre mal usado. Wabi-sabi no es 'rústico bonito': es una postura filosófica ante la imperfección y el paso del tiempo — la belleza de lo incompleto, lo impermanente y lo gastado con dignidad. Viene del té (mañana la vas a vivir de cerca): preferir el cuenco asimétrico al perfecto, la pátina al brillo. Su expresión más famosa es el kintsugi: reparar cerámica rota con laca y oro, haciendo la cicatriz *visible y valiosa* en vez de disimularla. La grieta como parte de la historia del objeto, no como su defecto." },
          { q: "Lucio, ¿dónde dormirías tú en una casa japonesa?", a: "Pregunta seria y la respondo con rigor: en invierno, debajo del kotatsu — esa mesa baja con cobija y calefactor — que es la mayor contribución de Japón a la civilización felina. En verano, en la engawa, lado sombra, a las 3 p.m. En primavera, sobre el tatami nuevo, que huele a pasto seco. Los gatos japoneses llevan siglos haciendo esta optimización estacional; en el barrio de Yanaka, en Tokio, somos prácticamente el atractivo turístico oficial." }
        ]
      },
      {
        titulo: "La ceremonia del té: diseñar un ritual",
        souvenir: { emoji: "🍵", nombre: "Cuenco raku de Harumi-san" },
        escenas: [
          { de: "lucio", texto: "Hoy no visitamos un edificio. Visitamos un ritual con edificio propio: la ceremonia del té. Harumi-san practica el camino del té hace 40 años." },
          { de: "npc", nombre: "Harumi-san", texto: "Antes de entrar, caminamos el roji — este jardincito de piedras. Paso a paso, el mundo de afuera se queda atrás. El jardín es la descompresión." },
          { de: "cami", texto: "(Una antecámara psicológica hecha de musgo y piedras. El ritual empieza antes de empezar.)" },
          { de: "npc", nombre: "Harumi-san", texto: "Y esta es la entrada: el nijiriguchi. Sesenta y seis centímetros. Todos — la campesina y el señor feudal — entran agachados. Y el samurái deja la katana afuera: no cabe con ella." },
          { de: "lucio", texto: "Fíjate qué jugada: la igualdad social no se pide con un letrero — se *impone con geometría*. Una puerta pequeña hace imposible entrar con arrogancia o con armas. Arquitectura como regla social autoejecutable." },
          { decision: [
            { texto: "Participar en la ceremonia completa", ir: "temae" },
            { texto: "Examinar los objetos: el cuenco, la cuchara", ir: "objetos" }
          ]},
          { id: "temae", de: "npc", nombre: "Harumi-san", texto: "Observa mis manos: cada gesto del temae — cómo doblo el paño, cómo giro el cucharón — está codificado hace 400 años. No se piensa. Se habita." },
          { de: "cami", texto: "(Es un procedimiento estándar operativo… convertido en meditación. Cero movimientos desperdiciados. Taiichi Ohno habría llorado de emoción.)" },
          { de: "npc", nombre: "Harumi-san", texto: "Gira el cuenco dos veces antes de beber — su cara más bella mira al invitado, y al girarlo la respetas. Luego bebe. El sorbo final debe sonar: es el aplauso." },
          { salta: "rikyu" },
          { id: "objetos", de: "npc", nombre: "Harumi-san", texto: "Toma el cuenco. ¿Sientes que es… imperfecto? Asimétrico, el esmalte irregular. Es raku, moldeado a mano sin torno. Los maestros del té pagaban fortunas por esta 'imperfección'." },
          { de: "lucio", texto: "Y mira esa línea dorada: estuvo roto. Lo repararon con laca y oro — kintsugi. La cicatriz a la vista, celebrada. Este cuenco vale más roto y reparado que nuevo." },
          { de: "cami", texto: "(Un objeto cuyo valor aumenta con el daño documentado. La hoja de vida del material como parte del diseño.)" },
          { id: "rikyu", de: "lucio", texto: "Todo esto lo destiló un hombre: Sen no Rikyū, siglo XVI. Redujo el té de los palacios dorados a una choza de dos tatamis, cuenco humilde, silencio. La sofisticación máxima disfrazada de sencillez." },
          { de: "lucio", texto: "Su historia termina mal y la excavación de hoy la cuenta. Spoiler: la estética también es política, y a veces se paga cara." }
        ],
        minijuego: {
          tipo: "orden",
          instruccion: "Ordena los pasos de la ceremonia del té",
          items: [
            "Cruzar el jardín roji dejando el mundo atrás",
            "Entrar agachada por el nijiriguchi",
            "Contemplar el tokonoma y sus objetos",
            "Observar la preparación (temae) en silencio",
            "Girar el cuenco dos veces y beber"
          ]
        },
        excavacion: [
          { titulo: "Rikyū y Hideyoshi: la estética como poder", texto: "Sen no Rikyū (1522–1591) fue maestro de té de Toyotomi Hideyoshi, el hombre más poderoso de Japón. La relación era un duelo estético: Hideyoshi mandó construir una sala de té enteramente recubierta de oro (portátil, para presumir en campaña); Rikyū respondió llevando el té al extremo opuesto — la choza de dos tatamis, paredes de barro, una flor silvestre. Cada elección de Rikyū era una declaración: el poder verdadero no necesita oro. En 1591, por razones que los historiadores aún debaten (¿una estatua suya en una puerta por la que pasaba el señor? ¿política de la corte? ¿el precio de los utensilios que él consagraba?), Hideyoshi le ordenó el seppuku. Rikyū sirvió una última ceremonia de té, regaló los utensilios a sus invitados, rompió su propio cuenco — 'que ningún labio desafortunado vuelva a tocarlo' — y murió. Su estética wabi domina el diseño japonés hasta hoy. La 'sencillez' que ves en una tienda Muji desciende de un hombre que murió por ella." },
          { titulo: "Por qué los rituales funcionan (según la antropología)", texto: "¿Por qué una secuencia rígida de gestos para tomar una bebida amarga sobrevive 400 años? La antropología tiene respuestas serias. Una: los rituales son 'señales costosas' — invertir años en dominar el temae demuestra compromiso de una forma imposible de fingir, igual que en tu semana 1 viste el anillo Kula. Dos: la sincronía corporal genera vínculo — moverse igual y a la vez dispara afiliación (hay experimentos con remeros y coros que lo miden). Tres: la codificación libera — cuando cada gesto está decidido, la mente queda libre de decidir, y eso explica el estado meditativo (compárala con la carga cognitiva de un coctel donde nadie sabe dónde pararse). La ceremonia del té es un dispositivo social de precisión: iguala rangos, obliga presencia y fabrica calma. Van Gennep lo llamaría un rito de paso semanal: separación (roji), liminalidad (la choza), reincorporación (volver al mundo, más lenta)." }
        ],
        charla: [
          { q: "¿Por qué la puerta es tan pequeña? ¿No es incómodo a propósito?", a: "Exactamente: es incomodidad *diseñada con intención*. El nijiriguchi (66×66 cm aprox.) obliga a tres cosas: agacharse (humildad física, no importa tu rango), entrar de a uno (cada llegada es un evento individual, no una multitud) y dejar la katana afuera (no cabe — el desarme no se negocia, lo impone el marco de la puerta). Es de los mejores ejemplos de la historia de 'arquitectura conductual': la regla social no está escrita en ningún lado, está construida en la geometría. Compárala con las puertas monumentales de los palacios europeos, diseñadas para lo contrario: que entres sintiendo el poder del dueño.", extra: { q: "¿Hay más ejemplos de arquitectura que impone conducta?", a: "Montones. En Japón: el genkan que ya viste (imposible entrar calzado sin sentirte mal), los torii que marcan sin puerta dónde empieza lo sagrado. Fuera: los bancos de parque con divisiones (diseñados para impedir dormir — 'arquitectura hostil', la versión oscura del concepto), las escaleras de las estaciones de Tokio con marcas de flujo pintadas, o los badenes: nadie te multa, la física te frena. Diseñar el entorno suele ser más efectivo que escribir la norma." } },
          { q: "¿Qué es exactamente el kintsugi y por qué oro?", a: "Técnica del siglo XV (la leyenda: un shōgun mandó su cuenco chino roto a reparar, volvió con grapas feas, y los artesanos japoneses inventaron algo mejor). Se reconstruye la pieza con urushi — laca del árbol de laca, un adhesivo natural extraordinario — y la junta se espolvorea con oro. El oro no es lujo: es *honestidad*. La filosofía es no ocultar la reparación sino integrarla a la biografía del objeto: esta pieza vivió, se rompió, fue amada lo suficiente para repararla. Hoy hay psicólogos que usan el kintsugi como metáfora clínica de la recuperación. Para tu mundo: es la anti-obsolescencia programada — el objeto reparado vale más que el nuevo." },
          { q: "¿El matcha de las cafeterías es el mismo de la ceremonia?", a: "Primos, no gemelos. Todo matcha es té verde molido a piedra, pero hay grados: el ceremonial viene de las primeras hojas de primavera, cultivadas a la sombra semanas antes de la cosecha (la sombra dispara la L-teanina — el aminoácido del sabor umami y la calma alerta) y molidas tan fino que parecen talco. El de cafetería suele ser grado culinario: hojas más tardías, más amargas, pensadas para pelear contra la leche y el azúcar. En la ceremonia se bate con un chasen de bambú de 80-120 púas talladas de una sola pieza. Dato de gato: la espuma perfecta suena como cuando amaso una cobija." }
        ]
      },
      {
        titulo: "Tokio: el futuro que envejeció",
        souvenir: { emoji: "🏙️", nombre: "Cápsula de Nakagin (miniatura)" },
        escenas: [
          { de: "lucio", texto: "Shinkansen a Tokio: 300 km/h y ni una gota de té derramada. De la ciudad que conserva su plano del 794 a la que se demuele a sí misma cada 30 años." },
          { de: "cami", texto: "(El mismo país. Dos filosofías de ciudad opuestas. Esto promete.)" },
          { de: "lucio", texto: "Primera parada mental: 1972. Un arquitecto llamado Kurokawa construyó una torre de 140 cápsulas de vivienda — cada una fabricada en planta, colgada de dos torres de servicios, y diseñada para *desconectarse y reemplazarse* cada 25 años." },
          { de: "lucio", texto: "El movimiento se llamó Metabolismo: edificios que crecen, mudan células y se regeneran como organismos. ¿Te suena la idea? Es el templo desmontable de Takeshi-san… en versión industrial." },
          { de: "cami", texto: "(Módulos intercambiables con interfaz estándar a un chasis de servicios. Literalmente diseño de maquinaria aplicado a vivienda. ¿Y funcionó?)" },
          { de: "lucio", texto: "Ahí está el drama: jamás se reemplazó ni una cápsula. Coordinar a 140 dueños era imposible, el mantenimiento colapsó… y en 2022 la torre entera fue demolida. Algunas cápsulas se rescataron para museos." },
          { decision: [
            { texto: "Subir al Skytree, la torre de 634 metros", ir: "skytree" },
            { texto: "Perderse por los callejones y los konbini", ir: "callejones" }
          ]},
          { id: "skytree", de: "lucio", texto: "634 metros de acero. Y en su corazón… ¿adivinas? Una columna central de hormigón de 375 metros que oscila desfasada de la torre para amortiguar sismos." },
          { de: "cami", texto: "(¡El shinbashira de la pagoda del lunes! Mismo principio, 1.400 años después. El círculo se cerró.)" },
          { de: "lucio", texto: "Los ingenieros lo dijeron sin rodeos: se inspiraron en las pagodas. La solución del siglo VII escaló tres órdenes de magnitud. En Japón las buenas ideas no envejecen — se recompilan." },
          { salta: "cierre5" },
          { id: "callejones", de: "lucio", texto: "Mira esos edificios flacos cubiertos de letreros de arriba a abajo: zakkyo. Un bar en el piso 5, una peluquería en el 3, un restaurante en el sótano. La calle funciona en vertical." },
          { de: "lucio", texto: "Y fíjate en algo raro: casi ninguna calle tiene nombre. Las direcciones van por distrito, bloque y edificio — se navega por áreas, no por líneas. Los repartidores tienen mapas mentales que darían para una tesis." },
          { de: "cami", texto: "(Un sistema de coordenadas jerárquico en vez de vectorial. Y aun así el paquete llega en horas. La lección: hay más de una forma correcta de indexar una ciudad.)" },
          { id: "cierre5", de: "lucio", texto: "Fin de la expedición a pie. Kioto refina lo viejo; Tokio recicla el suelo y recompila las ideas. Mañana: el desafío del Shōgun. Repasa, aprendiz — mi kasa está en juego." }
        ],
        minijuego: {
          tipo: "parejas",
          instruccion: "Empareja el Tokio que conociste hoy",
          pares: [
            ["Metabolismo", "Edificios que crecen como organismos"],
            ["Nakagin", "Torre de cápsulas intercambiables"],
            ["Skytree", "Torre con 'shinbashira' moderno"],
            ["Zakkyo", "Edificio de letreros y mil negocios"],
            ["Shinkansen", "El tren bala de 1964"]
          ]
        },
        excavacion: [
          { titulo: "Por qué Tokio se reconstruye cada 30 años", texto: "En Japón las casas se deprecian como carros: a los 20–30 años una vivienda vale cerca de cero y se vende solo el terreno — el comprador demuele y construye de nuevo ('scrap and build'). Las causas se refuerzan entre sí: los códigos antisísmicos se endurecen tras cada gran terremoto (1981 y 2000 fueron saltos grandes; una casa 'pre-código' es difícil de vender o asegurar), la posguerra llenó el país de construcción rápida y de baja calidad que nadie quería heredar, y el mercado inmobiliario aprendió a valorar suelo, no edificio. Resultado: Japón demuele y construye a un ritmo que a un europeo le parece ciencia ficción, la industria de la prefabricación de vivienda es la más sofisticada del mundo (Toyota — sí, esa Toyota — fabrica casas), y casi no existe el mercado de 'casa usada'. Contraste brutal con la Kioto de las machiya… que hoy pelea por proteger las que quedan." },
          { titulo: "El Metabolismo: la utopía que fracasó y ganó", texto: "El Metabolismo nació en 1960, cuando un grupo de jóvenes arquitectos alrededor de Kenzo Tange (Kurokawa, Kikutake, Maki) presentó al mundo una idea radical: si las ciudades japonesas iban a crecer y mutar sin parar, los edificios debían diseñarse como organismos — un 'tronco' de infraestructura de larga vida más 'células' habitables de corta vida, reemplazables. Su gran vitrina fue la Expo de Osaka '70 (64 millones de visitantes). Como movimiento construido, fracasó: la economía nunca dio para reemplazar cápsulas y Nakagin murió en 2022. Como idea, ganó por goleada: los hoteles cápsula, la vivienda prefabricada japonesa, el 'chasis + módulos' del diseño de producto contemporáneo y hasta los data centers modulares son metabolismo aplicado. A veces una arquitectura fracasa como edificio y triunfa como concepto." }
        ],
        charla: [
          { q: "¿Por qué demolieron Nakagin si era tan famosa?", a: "Porque la fama no paga mantenimiento. El diseño asumía que las cápsulas se reemplazarían cada 25 años, pero cada cápsula tenía dueño distinto — y para desmontar una del piso 3 había que descolgar las de arriba. Coordinar a 140 propietarios con intereses opuestos resultó más difícil que cualquier problema estructural: nunca se reemplazó ninguna. Sin renovación, las tuberías fallaron, el agua caliente se cortó años antes del fin, el amianto apareció. En 2022 la asamblea de propietarios vendió y se demolió. La lección de ingeniería es de oro: la mantenibilidad no es solo un problema técnico — es un problema de *gobernanza*. Un diseño modular sin un mecanismo institucional para ejecutar los reemplazos es un monolito con juntas decorativas.", extra: { q: "¿Se salvó algo?", a: "Sí: unas 23 cápsulas se desmontaron con cuidado y se restauraron. Una está en el Museum of Modern Art de San Francisco, otra en el M+ de Hong Kong, varias se convirtieron en alojamientos y oficinas itinerantes en Japón. La torre murió; las células viven en museos. Kurokawa habría apreciado la ironía metabolista: el organismo murió, las células se trasplantaron." } },
          { q: "¿En serio las calles no tienen nombre? ¿Cómo llega el domicilio?", a: "En serio (salvo avenidas grandes y Kioto, que usa su cuadrícula). Una dirección típica es: distrito, número de chōme (sub-barrio), número de bloque, número de edificio — por ejemplo 'Shibuya 2-21-1'. Los números de bloque siguen el orden en que se registraron, no el orden espacial, así que hasta los taxistas usan mapas en las esquinas y puntos de referencia. Funciona porque el sistema es jerárquico (vas acercándote por zonas, como un zoom) y porque el país invirtió en señalización de bloques y en el kōban — la mini-estación de policía de barrio cuya función histórica incluye, literalmente, dar direcciones. Es el recordatorio de que el 'estándar mundial' (calle + número) es solo una convención más." },
          { q: "Lucio, ¿Tokio o Kioto para vivir siendo gato?", a: "Análisis riguroso. Kioto: tejados bajos ideales para patrullar, machiya con tsuboniwa (jardín privado con sol garantizado), templos con siglos de tradición pro-gato. Contra: turistas que te fotografían sin permiso. Tokio: el barrio de Yanaka es prácticamente una república felina, los konbini abren 24/7 (humanos con snacks a toda hora) y existe una isla cercana, Tashirojima, donde los gatos superamos a los humanos y hay un santuario dedicado a nosotros. Contra: los apartamentos de 6 tatamis limitan las carreras de las 3 a.m. Veredicto: Kioto para vivir, Tokio para visitar. Como casi todos los humanos, pero con más siestas." }
        ]
      }
    ],
    desafio: {
      titulo: "El desafío del Shōgun",
      intro: "Ocho preguntas guardan la salida de Japón. Tienes 3 vidas. Si caes, Lucio no te juzgará… mucho.",
      vidas: 3,
      minCorrectas: 6,
      preguntas: [
        { q: "¿De qué ciudad china copió Kioto su plano en cuadrícula?", opciones: ["Pekín", "Chang'an", "Shanghái", "Nankín"], correcta: 1 },
        { q: "Las machiya son angostas y profundas porque…", opciones: ["El clima obligaba", "Los impuestos se cobraban por metros de fachada", "La madera no daba para más ancho", "Una ley limitaba el frente"], correcta: 1 },
        { q: "El shinbashira de las pagodas es…", opciones: ["La viga principal del techo", "Una columna central que oscila y amortigua sismos", "El altar interior", "La escalera en espiral"], correcta: 1 },
        { q: "¿Por qué los templos se construyen desmontables, sin clavos?", opciones: ["Por tradición religiosa", "Para poder repararlos por piezas durante siglos", "Porque no existía el hierro", "Para moverlos de ciudad"], correcta: 1 },
        { q: "¿Qué empresa de carpintería de templos operó desde el año 578?", opciones: ["Kongō Gumi", "Toyota", "Kikkoman", "Nintendo"], correcta: 0 },
        { q: "El 'ma' (間) de la casa japonesa es…", opciones: ["El jardín interior", "El vacío o intervalo cargado de significado", "El armario de los futones", "La madera sin pintar"], correcta: 1 },
        { q: "El nijiriguchi (la puerta diminuta del té) obliga a…", opciones: ["Pagar antes de entrar", "Entrar agachado y sin katana: igualdad por geometría", "Entrar de espaldas", "Descalzarse"], correcta: 1 },
        { q: "La torre Nakagin fracasó principalmente por…", opciones: ["Un error estructural", "Un terremoto", "La gobernanza: 140 dueños nunca coordinaron los reemplazos", "El costo del acero"], correcta: 2 }
      ]
    },
    dante: {
      titulo: "Dante y el perro de la estación",
      historia: "Cuando Dante pasó por Tokio — mucho antes de que yo naciera, cuando el Gran Explorador ya era leyenda entre los animales viajeros — fue directo a la estación de Shibuya. No a tomar un tren: a presentar sus respetos. Ahí está la estatua de Hachikō, el akita que esperó a su humano en esa estación todos los días durante nueve años. Los perros de todo el mundo conocen esa historia. Dante se sentó frente a la estatua toda una tarde, con esa seriedad de husky que tú conociste, y cuando le preguntaron por qué, dijo: 'Porque este país entendió algo importante: a los compañeros de verdad se les construyen estatuas, no despedidas.' Después se fue trotando hacia el norte, a Hokkaido, donde dicen que corrió sobre la nieve como si el frío fuera su idioma natal.",
      consejo: "Consejo de la bitácora de Dante: 'Deja huellas tan buenas que alguien quiera seguirlas.'"
    },
    pagina: {
      dia: 3,
      nodo: "objetos",
      titulo: "Página 1 — Sobre las cicatrices",
      texto: "«En Kioto vi cómo reparan lo roto con oro y lo aman más que cuando estaba nuevo. Los humanos tardan en aprender eso: creen que amar algo es mantenerlo intacto. Un explorador sabe que no existe camino sin rasguños — existen rasguños contados con orgullo junto al fuego. Que tus grietas sean doradas. — D.»"
    },
    datosVictoria: [
      "En Japón hay templos sintoístas dedicados a los perros: el santuario Musashi Mitake trata a los perros como peregrinos oficiales, con bendición incluida.",
      "El akita Hachikō esperó a su dueño en la estación de Shibuya durante 9 años. Su estatua es hoy el punto de encuentro más famoso de Tokio.",
      "En japonés los perros no hacen 'guau': hacen 'wan wan' (ワンワン). Victoria dice que suena más digno.",
      "Los perros guías de trineo como los huskies pueden correr 240 km en un día. Victoria escuchó esto y prefirió una siesta.",
      "En la isla de Aoshima y el pueblo de Marugame hay más estatuas y homenajes a perros y gatos que a personas. Prioridades correctas, según la manada."
    ],
    biblioteca: {
      nota: "Domingo de campamento: Lucio enciende la fogata y deja el equipaje de ida a casa. Esto es para seguir gozando Japón sin agenda.",
      items: [
        { icono: "🎬", tipo: "Documental", titulo: "Jiro Dreams of Sushi (2011)", nota: "No es de edificios: es de shokunin — la misma devoción artesanal de Takeshi-san y Harumi-san, aplicada al sushi. Después de esta semana lo verás distinto." },
        { icono: "🎌", tipo: "Anime", titulo: "Suzume (Makoto Shinkai, 2022)", nota: "Un viaje por el Japón de los lugares abandonados, con puertas que conectan mundos. Arquitectura, memoria y ruinas — es literalmente la película de esta expedición." },
        { icono: "🎵", tipo: "Música", titulo: "Joe Hisaishi — Dream Songs", nota: "El compositor de Ghibli en versión orquestal. Póngalo mientras revisita las excavaciones de la semana: es 'ma' hecho música." },
        { icono: "📖", tipo: "Libro", titulo: "El elogio de la sombra — Tanizaki", nota: "60 páginas de 1933 que explican la luz, la sombra y el vacío japonés mejor que cualquier manual de arquitectura. El libro favorito de los diseñadores de interiores serios." }
      ]
    }
  }
];
