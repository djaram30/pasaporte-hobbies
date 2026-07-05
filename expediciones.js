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
