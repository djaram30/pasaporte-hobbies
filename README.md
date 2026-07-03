# 📔 Pasaporte de Hobbies — App

PWA estática de costo $0. Sin backend, sin API keys: el contenido vive en `packs.js` y el progreso de Cami en el localStorage de su celular.

## Archivos
| Archivo | Qué es |
|---------|--------|
| `index.html` | Toda la app (diseño + lógica) en un solo archivo |
| `packs.js` | Los packs semanales de contenido — **esto es lo único que se edita cada semana** |
| `manifest.webmanifest` | Hace que sea instalable como app en el celular |
| `sw.js` | Service worker: funciona offline. Subir `VERSION` al publicar pack nuevo |
| `icon.svg` | Ícono de la app |

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
> "Genera el pack de la semana que empieza el lunes YYYY-MM-DD con tema principal X y alterno Y, siguiendo el formato de packs.js"

Claude agrega el objeto nuevo al inicio del array en `packs.js`, se sube `VERSION` en `sw.js`, y se hace push al repo. Cami recibe el tema nuevo automáticamente al abrir la app.

## Cómo funciona el desbloqueo
- Cada pack tiene `inicio` (el lunes de su semana). La cápsula del día `i` se desbloquea cuando `hoy >= inicio + i`.
- Lun–Vie: cápsulas · Sáb: quiz (4/5 para ganar insignia) · Dom: backstage.
- Niveles por tema: Curiosa (≥1 cápsula) → Aprendiz (5 cápsulas) → Conocedora (quiz aprobado).
- La racha 🔥 cuenta días consecutivos abriendo la app.
