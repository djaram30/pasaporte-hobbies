// Packs semanales del Sensei de Hobbies.
// Ritual semanal: Claude Code genera un objeto nuevo y lo agrega al inicio de este array.
// Formato de fechas: "YYYY-MM-DD" (inicio = lunes de la semana).
window.SENSEI_PACKS = [
  {
    id: "2026-w27",
    inicio: "2026-06-29",
    tracks: {
      A: {
        tema: "Antropología",
        subtitulo: "La ciencia de lo que nos hace humanos",
        emoji: "🗿",
        color: "#b85c38",
        insignia: "Exploradora de lo Humano",
        dias: [
          {
            titulo: "Bienvenida al hobby: ¿qué es la antropología?",
            concepto:
              "La antropología es la disciplina que estudia qué nos hace humanos — en todas las épocas y en todos los lugares. No pregunta \"¿qué pasó?\" como la historia, sino \"¿por qué los humanos hacemos lo que hacemos?\". Tiene cuatro ramas: la cultural (costumbres y sociedades vivas), la arqueología (sociedades del pasado a través de sus objetos), la lingüística (cómo el lenguaje moldea el pensamiento) y la biológica (nuestra evolución como especie).",
            historia:
              "Nació como ciencia en el siglo XIX, cuando los europeos empezaron a preguntarse en serio por los pueblos que encontraban en sus colonias. Empezó con mucho prejuicio — y su gran giro fue aprender a estudiar a los demás sin asumir que \"nuestra\" forma de vivir es la medida de todo.",
            dato:
              "En Papúa Nueva Guinea, un país del tamaño de Colombia dividido en dos, se hablan más de 800 lenguas vivas — cerca del 10% de todas las lenguas del planeta.",
            reto:
              "Mañana, durante tu rutina de la mañana, obsérvate como si fueras una antropóloga alienígena: ¿por qué desayunas *eso*? ¿Quién decidió que así se saluda? Anota una costumbre tuya que de repente te parezca rara."
          },
          {
            titulo: "Cultura: el sistema operativo invisible",
            concepto:
              "La cultura es el software compartido que traes instalado sin haberlo descargado: qué es de buena educación, qué distancia guardas al hablar, qué se come y qué \"no se come\". Como ingeniera lo vas a ver clarísimo: la cultura funciona como las tolerancias de un plano — nadie las menciona en la conversación, pero si te sales de ellas, todo el ensamble falla. El principio clave es el *relativismo cultural*: entender cada práctica dentro de su propio sistema antes de juzgarla con el tuyo.",
            historia:
              "En 1871 Edward Tylor dio la primera definición moderna de cultura. Décadas después, Franz Boas — el padre de la antropología moderna — demostró contra el racismo científico de su época que ninguna cultura es \"más evolucionada\" que otra: son sistemas distintos resolviendo problemas distintos.",
            dato:
              "Saludos válidos en el mundo: frotarse la nariz (inuit y maoríes), sacar la lengua (Tíbet, señal de respeto), y en Colombia... preguntarte \"¿qué más?\" sin esperar de verdad la respuesta.",
            reto:
              "Detecta 3 reglas no escritas de tu oficina — cosas que nadie dice pero todos cumplen. Pista: piensa en quién habla primero en las reuniones y a quién se le copia en los correos."
          },
          {
            titulo: "El método: vivir dentro del experimento",
            concepto:
              "El superpoder de la antropología es la *observación participante*: en vez de mandar encuestas, el antropólogo se va a vivir meses o años dentro de la comunidad que estudia — aprende la lengua, pesca con ellos, va a sus fiestas. El resultado escrito se llama *etnografía*. Es lo más parecido a ser protagonista de un isekai: te despiertas en un mundo con reglas que no conoces y tu misión es entenderlas desde adentro.",
            historia:
              "El método nació casi por accidente: Bronisław Malinowski quedó varado en las islas Trobriand (Pacífico) cuando estalló la Primera Guerra Mundial. Atrapado años allí, no le quedó otra que convivir de verdad — y de esa \"mala suerte\" salió el estándar de oro de la disciplina.",
            dato:
              "En Trobriand, Malinowski documentó el *anillo Kula*: collares y brazaletes de concha que viajan en canoa entre islas, en direcciones opuestas, durante generaciones. No valen por lo que son sino por su historia — cada objeto acumula prestigio con cada viaje. ¿Te suena a los objetos legendarios de los animes?",
            reto:
              "Haz 15 minutos de etnografía en una cafetería o en el almuerzo de tu oficina: solo observa y anota. ¿Cómo se reparten las mesas? ¿Quién se sienta con quién? ¿Qué rituales tiene la fila?"
          },
          {
            titulo: "Ritos de paso: cómo las culturas marcan los cambios",
            concepto:
              "Toda cultura marca las transiciones importantes de la vida con *ritos de paso*: nacimiento, adultez, matrimonio, muerte. Arnold van Gennep descubrió que casi todos siguen la misma estructura de 3 fases: **separación** (sales de tu estado anterior), **liminalidad** (el limbo — ya no eres lo viejo, todavía no eres lo nuevo) y **reincorporación** (la comunidad te recibe con tu nuevo estatus).",
            historia:
              "Van Gennep publicó *Los ritos de paso* en 1909 y Victor Turner amplió luego la idea de liminalidad: en ese limbo las reglas normales se suspenden — por eso las despedidas de soltera se permiten locuras que ningún otro día se permitirían.",
            dato:
              "La liminalidad explica por qué los aeropuertos se sienten tan raros: son espacios liminales puros — no estás ni aquí ni allá, el tiempo funciona distinto y comer pizza a las 6 a.m. parece normal. En Japón, el *seijin shiki* (ceremonia de los 20 años) es un rito de paso nacional: sale en mil animes.",
            reto:
              "Toma un rito de paso que hayas vivido — tu grado de ingeniera, por ejemplo — y sepáralo en las 3 fases. ¿Cuál fue tu momento liminal?"
          },
          {
            titulo: "Antropología aplicada: tu trabajo es un campo de estudio",
            concepto:
              "La antropología salió de la selva y entró a las empresas: Intel, IDEO y Google contratan antropólogos para entender cómo la gente usa de verdad los productos. Y hay una rama que te toca directo: la *antropología de los negocios interculturales*. Trabajar con una empresa china es hacer etnografía a diario — conceptos como *guanxi* (关系, la red de relaciones y favores que sostiene los negocios) y *mianzi* (面子, \"la cara\": el prestigio que se da, se gana y jamás se hace perder en público) explican cosas que ningún manual comercial te enseñó.",
            historia:
              "La antropología aplicada explotó en los 80–90 cuando las tecnológicas descubrieron que la gente no usa los productos como dicen las encuestas, sino como muestra la observación. El estudio del guanxi es hoy un campo académico entero.",
            dato:
              "Un clásico del mianzi: un cliente chino rara vez te dirá \"no\" directo — dirá \"lo vamos a estudiar\" (再研究研究). Decir \"no\" de frente haría perder cara a ambos.",
            reto:
              "En tu próxima reunión o chat con tus colegas o clientes chinos, identifica un momento de guanxi (un favor, un gesto que alimenta la relación) o de mianzi (algo que se dijo con rodeos para cuidar la cara). Anótalo — acabas de hacer antropología aplicada."
          }
        ],
        quiz: {
          preguntas: [
            {
              q: "¿Cuál de estas NO es una de las cuatro ramas de la antropología?",
              opciones: ["Cultural", "Lingüística", "Astronómica", "Biológica"],
              correcta: 2
            },
            {
              q: "El 'relativismo cultural' propone…",
              opciones: [
                "Que todas las culturas son iguales entre sí",
                "Entender cada práctica dentro de su propio sistema antes de juzgarla",
                "Que la cultura es relativa al clima",
                "Que no se puede estudiar otra cultura"
              ],
              correcta: 1
            },
            {
              q: "¿Qué le pasó a Malinowski para que 'inventara' la observación participante?",
              opciones: [
                "Ganó una beca para vivir en el Pacífico",
                "Quedó varado en las islas Trobriand por la Primera Guerra Mundial",
                "Naufragó buscando el anillo Kula",
                "Lo enviaron como misionero"
              ],
              correcta: 1
            },
            {
              q: "Las 3 fases de un rito de paso según Van Gennep son…",
              opciones: [
                "Nacimiento, adultez y muerte",
                "Preparación, ceremonia y fiesta",
                "Separación, liminalidad y reincorporación",
                "Iniciación, prueba y recompensa"
              ],
              correcta: 2
            },
            {
              q: "En la cultura de negocios china, el 'mianzi' (面子) se refiere a…",
              opciones: [
                "La red de contactos y favores",
                "El prestigio o 'cara' que se cuida y jamás se hace perder en público",
                "El regalo que abre una negociación",
                "El contrato verbal"
              ],
              correcta: 1
            }
          ]
        },
        backstage: {
          documental: {
            titulo: "Human (2015, Yann Arthus-Bertrand)",
            nota: "2.000 entrevistas en 60 países sobre lo que nos hace humanos. Gratis en YouTube en HD. Es LA película antropológica para empezar."
          },
          anime: {
            titulo: "Golden Kamuy",
            nota: "Aventura en Hokkaido que es, en secreto, la mejor clase de cultura ainu jamás animada: comida, lengua, rituales de caza. Los fans ainu la celebran por su rigor."
          },
          musica: {
            titulo: "Field recordings & world music",
            nota: "Busca en Spotify 'Smithsonian Folkways' — el archivo sonoro de la humanidad: cantos inuit, gamelán, música del Chocó. Antropología para los oídos."
          }
        }
      },
      B: {
        tema: "Arquitectura",
        subtitulo: "Aprender a leer edificios",
        emoji: "🏛️",
        color: "#5a6e5a",
        insignia: "Lectora de Edificios",
        dias: [
          {
            titulo: "Los edificios hablan: firmitas, utilitas, venustas",
            concepto:
              "Leer un edificio es como leer un plano: una vez sabes qué buscar, no puedes dejar de verlo. El marco más viejo y más útil lo dio Vitruvio hace 2.000 años: toda buena arquitectura equilibra *firmitas* (que no se caiga — tu terreno, ingeniera), *utilitas* (que sirva para lo que fue hecha) y *venustas* (que emocione). Cuando un edificio te incomoda, casi siempre es porque una de las tres falló.",
            historia:
              "Vitruvio era ingeniero militar de Julio César y escribió *De architectura*, el único tratado de arquitectura que sobrevivió de la antigüedad. Cuando lo redescubrieron en el Renacimiento, se volvió el manual que formó a todos los grandes — el Hombre de Vitruvio de Da Vinci es un homenaje directo.",
            dato:
              "El Partenón no tiene casi ninguna línea recta de verdad: las columnas se inclinan hacia adentro y el piso se curva hacia arriba unos centímetros — correcciones ópticas para que el ojo humano lo vea perfectamente recto.",
            reto:
              "Mira el edificio donde vives o trabajas y califícalo de 1 a 10 en las tres: ¿firmitas, utilitas, venustas? ¿Cuál sacrificaron?"
          },
          {
            titulo: "El arco: el truco de la compresión",
            concepto:
              "Aquí vas a gozar: la piedra aguanta muchísima compresión pero casi nada de tracción. El arco es el truco geométrico que convierte todas las cargas en compresión pura — cada dovela empuja a la siguiente y el peso baja en curva hasta los apoyos. Sin acero, sin cemento armado: pura estática bien pensada. Del arco salen la bóveda (un arco extruido) y la cúpula (un arco en revolución) — sí, exactamente como en CAD.",
            historia:
              "Los romanos no inventaron el arco (los etruscos ya lo usaban) pero lo industrializaron: acueductos, puentes, el Coliseo. Su obra maestra es el Panteón de Roma (año 126): una cúpula de concreto de 43 metros de luz que sigue siendo la más grande del mundo en concreto no reforzado. Casi 1.900 años después.",
            dato:
              "La 'clave' del arco — la piedra central que se pone de última — es la única que trabaja trabando todo el sistema. De ahí viene la expresión 'pieza clave'. Y el Panteón se aligera hacia arriba: el concreto de la cúpula lleva piedra pómez en la parte alta. Optimización de materiales, siglo II.",
            reto:
              "Sal a cazar arcos: encuentra 3 en tu ciudad (puertas, puentes, iglesias) y fíjate si son de medio punto (romano), apuntados (gótico) o de herradura (árabe)."
          },
          {
            titulo: "Gótico: esqueletos de piedra y luz",
            concepto:
              "El gótico es un diagrama de fuerzas hecho edificio. El problema: querían muros llenos de vidrio, pero el muro era lo que cargaba el techo. La solución: sacar la estructura al exterior — los *arbotantes* son puntales que reciben el empuje lateral de las bóvedas y lo bajan a tierra por fuera del edificio. El muro dejó de trabajar y pudo volverse vitral. Es literalmente ver el diagrama de cargas expuesto, como una máquina sin carcasa.",
            historia:
              "Nació hacia 1140 en Saint-Denis, cerca de París, cuando el abad Suger quiso una iglesia llena de luz — para él la luz era lo divino. En 100 años las catedrales compitieron por altura como los rascacielos hoy: Beauvais intentó 48 metros de bóveda… y se le cayó dos veces. Prueba y error a escala de siglos.",
            dato:
              "Notre-Dame, Chartres o la Sagrada Familia (gótico reinventado por Gaudí, que calculaba las formas colgando cadenas con pesos y fotografiando el resultado al revés: la catenaria invertida es compresión pura — el mismo principio del arco que viste ayer).",
            reto:
              "Busca fotos de la catedral de Chartres por fuera: ahora que sabes qué es un arbotante, ya no verás 'decoración' — verás el sistema estructural. Dibuja el flujo de cargas en una servilleta."
          },
          {
            titulo: "La casa como máquina: el modernismo",
            concepto:
              "A inicios del siglo XX el hormigón armado y el acero cambiaron las reglas: la fachada ya no carga — carga la estructura interna. Le Corbusier lo resumió en una frase hecha para una ingeniera mecánica: *\"la casa es una máquina de habitar\"*. Fuera ornamento, planta libre, ventanas horizontales, pilotes, terraza-jardín. La Bauhaus (la escuela alemana) convirtió eso en método: la forma sigue a la función.",
            historia:
              "La Bauhaus duró solo 14 años (1919–1933, la cerraron los nazis) pero sus profesores emigraron y sembraron el diseño moderno en todo el mundo: de ahí sale la estética de tu celular, tu silla de oficina y medio IKEA. En Latinoamérica el modernismo se volvió emoción con Luis Barragán (México): muros rosados, agua y silencio — modernismo con alma.",
            dato:
              "La Villa Savoye de Le Corbusier (1929), el manifiesto construido del modernismo, era técnicamente un desastre: goteras por todos lados. La dueña amenazó con demandarlo. Firmitas: 4/10. Venustas: 11/10.",
            reto:
              "Busca la Casa Gilardi de Barragán y la Villa Savoye. Mismo movimiento, dos temperamentos. ¿Cuál pondría Cami en su pasaporte? ¿Por qué?"
          },
          {
            titulo: "Japón: el poder del espacio vacío",
            concepto:
              "La arquitectura japonesa piensa al revés que la occidental: no diseña los objetos sino el vacío entre ellos. Ese concepto se llama *ma* (間) — el intervalo, la pausa cargada de significado. Casas de madera y papel que se desarman y reconfiguran, la naturaleza enmarcada como un cuadro, materiales que se dejan envejecer con dignidad (*wabi-sabi*). Si has visto una película de Ghibli o de Makoto Shinkai, ya sentiste el *ma*: esos planos 'vacíos' de nubes, rieles y cuartos en silencio no son relleno — son la respiración de la historia.",
            historia:
              "El Santuario de Ise se demuele y reconstruye idéntico cada 20 años desde hace 1.300 años: el edificio no es el objeto sino el conocimiento para hacerlo. Tras la guerra, Japón fusionó esa tradición con el hormigón: Tadao Ando — boxeador sin título de arquitecto — se volvió maestro mundial haciendo muros de concreto que enmarcan luz, agua y viento.",
            dato:
              "La Iglesia de la Luz de Ando (Osaka, 1989) es una caja de concreto con una cruz de pura luz: una ranura en el muro. Material más barato imposible, emoción máxima. Venustas con presupuesto de firmitas.",
            reto:
              "Vuelve a ver los primeros 5 minutos de tu película de Ghibli o Shinkai favorita contando los planos sin personajes. Ese es el *ma*. Después mira tu sala: ¿dónde le falta vacío?"
          }
        ],
        quiz: {
          preguntas: [
            {
              q: "Las tres cualidades de Vitruvio para la buena arquitectura son…",
              opciones: [
                "Forma, función y estructura",
                "Firmitas, utilitas y venustas",
                "Solidez, economía y rapidez",
                "Luz, espacio y material"
              ],
              correcta: 1
            },
            {
              q: "El arco funciona porque…",
              opciones: [
                "Convierte las cargas en compresión pura, que la piedra resiste muy bien",
                "Distribuye las cargas en tracción",
                "Es más liviano que un dintel",
                "El mortero pega las piedras con mucha fuerza"
              ],
              correcta: 0
            },
            {
              q: "¿Para qué sirven los arbotantes de una catedral gótica?",
              opciones: [
                "Para decorar el exterior",
                "Para sostener las campanas",
                "Para recibir el empuje lateral de las bóvedas y llevarlo a tierra por fuera",
                "Para proteger los vitrales de la lluvia"
              ],
              correcta: 2
            },
            {
              q: "\"La casa es una máquina de habitar\" es una frase de…",
              opciones: ["Gaudí", "Le Corbusier", "Tadao Ando", "Luis Barragán"],
              correcta: 1
            },
            {
              q: "En la arquitectura japonesa, el 'ma' (間) es…",
              opciones: [
                "El jardín zen de piedras",
                "La madera sin tratar",
                "El techo curvo de los templos",
                "El espacio vacío o intervalo cargado de significado"
              ],
              correcta: 3
            }
          ]
        },
        backstage: {
          documental: {
            titulo: "Abstract: The Art of Design — ep. Bjarke Ingels (Netflix)",
            nota: "Un arquitecto danés que diseña como si jugara: una planta de energía con pista de esquí en el techo. El episodio perfecto para enamorarse de la arquitectura."
          },
          anime: {
            titulo: "Your Name (Kimi no Na wa) — misión: mirar solo los fondos",
            nota: "Makoto Shinkai dibuja Tokio y la provincia japonesa con obsesión arquitectónica. Vela (otra vez) fijándote solo en los espacios: ahí está todo el 'ma' de la cápsula del viernes."
          },
          musica: {
            titulo: "Ryuichi Sakamoto — async",
            nota: "Sakamoto compuso este disco imaginando 'la banda sonora de una casa de Tarkovsky'. Es arquitectura sonora: espacio, silencio y materiales. Para oír con audífonos un domingo."
          }
        }
      }
    }
  }
];
