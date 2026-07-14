# 🐾 Expediciones con Lucio — App (V2)

PWA estática de costo $0, ahora en formato videojuego. Sin backend, sin API keys: el contenido vive en `expediciones.js` y el progreso de Cami en el localStorage de su celular.

## Archivos
| Archivo | Qué es |
|---------|--------|
| `index.html` | Toda la app: motor de escenas (visual novel), mini-juegos, desafío, XP/souvenirs/guardarropa |
| `expediciones.js` | Las expediciones semanales — **esto es lo único que se edita cada semana** |
| `packs.js` | Contenido V1 (legado, ya no se carga) |
| `manifest.webmanifest` | Hace que sea instalable como app en el celular |
| `sw.js` | Service worker: funciona offline. Subir `VERSION` al publicar expedición nueva |
| `icon.svg` | Ícono de la app |

## Estructura de una expedición (V2)
Cada semana = un destino. Por día (L–V): `escenas` (nodos de diálogo con `decision`/`id`/`salta` para ramificar), `minijuego` (`parejas` u `orden`), `excavacion` (2 hallazgos profundos, +15 xp c/u), `charla` (preguntas estilo RPG con `extra` de seguimiento, +10 xp c/u) y `souvenir`.

**Láminas (desde V4):** cualquier nodo de escena o sección de excavación puede llevar `lamina: {svg, pie}` — una ilustración SVG inline (viewBox ~320×200, colores planos de la paleta de la app: #b85c38, #f2e7d3, #2b6a8f, #5a6e5a, #7a7266, textos ≥10px #2e2a26) con pie de foto. Regla: 1 lámina por día mínimo, en el concepto más visual (un arco, un patrón, un corte, una planta). Verificar que ningún `<text>` se salga del viewBox. Son didácticas tipo diagrama, no fotos — funcionan offline y pesan bytes. Sábado: `desafio` (8 preguntas, 3 vidas → sello + accesorio para Lucio). Domingo: `biblioteca` (documental, anime, música, libro). El `PROLOGO` se juega una sola vez.

**Economía:** misión 80 xp + bono de prueba (40 perfecta / 25 con ≤2 errores / 15). Página de Dante +50. Regalo de Victoria +10/+25. Nivel cada 300 xp. Accesorios de Lucio: `panoleta` (prólogo), `kasa` (Japón) — agregar el dibujo del accesorio nuevo en `lucioSVG()` y su nombre en `ACCESORIOS` al crear una expedición con accesorio nuevo.

## Módulo "La Manada" (V3)
Cada expedición debe incluir: `dante: {titulo, historia, consejo}` (la estrella de Dante en el campamento — historia del Gran Explorador en ese destino, tono cálido y heroico, jamás triste); `pagina: {dia, nodo, titulo, texto}` (página de la bitácora de Dante escondida en un nodo de una ruta de decisión — +50 xp, coleccionable hacia la expedición final "Siberia: tras las huellas de Dante"); `datosVictoria: [5 datos]` (pool del regalo diario de Victoria, idealmente con tema animal/perruno del destino). Dibujos: `danteSVG()` (husky negro/crema, ojos azul pálido, estrella dorada) y `victoriaSVG()` (gran danesa negra, collar rojo) en index.html.

## Probar en local
Desde `Personal/Ocio/`:
```powershell
python -m http.server 8123 --directory "Sensei de Hobbies Cami/app"
```
Abrir `http://localhost:8123`. Para ver toda la semana desbloqueada (quiz y backstage incluidos): `http://localhost:8123/?demo=1`.

## Publicar en GitHub Pages (Fase 3)
1. Crear repo (ej. `pasaporte-hobbies`) y subir el contenido de `app/`.
2. Settings → Pages → Deploy from branch → `main` / root.
3. La app queda en `https://<usuario>.github.io/pasaporte-hobbies/`.
4. En el celular de Cami: abrir la URL en Chrome → menú → **"Agregar a pantalla de inicio"**. Queda instalada como app y funciona offline.

## Ritual semanal (con Claude Code)
Cada domingo/lunes, en una sesión de Claude Code sobre esta carpeta:
> "Genera la expedición de la semana que empieza el lunes YYYY-MM-DD con destino X, siguiendo el formato de expediciones.js"

Claude agrega la expedición al inicio del array en `expediciones.js`, sube `VERSION` en `sw.js` y hace push al repo. Cami recibe el destino nuevo automáticamente al abrir la app.

## Cómo funciona el desbloqueo (por progreso, desde 2026-07-04)
- **A su ritmo**: la misión N se abre al completar la N-1 (la 1 se abre con el prólogo). El desafío se abre con las 5 misiones; el campamento, con el desafío. `?demo=1` abre todo.
- Sin candados por calendario: puede jugarse la expedición entera en un día o repartirla en la semana. La expedición activa es siempre la más reciente del array; la nueva se publica cada domingo/lunes.
- La racha 🔥 cuenta días consecutivos abriendo la app. El progreso V1 se migra a XP automáticamente la primera vez.
