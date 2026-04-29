# Publicar ELECOM Instalaciones

## 1. Crear repositorio en GitHub

1. Entra en GitHub.
2. Pulsa `New repository`.
3. Nombre: `elecom-instalaciones`.
4. Déjalo como `Public` o `Private`.
5. No marques plantillas ni README, porque este proyecto ya lo incluye.
6. Pulsa `Create repository`.

## 2. Subir archivos

Sube todos los archivos de esta carpeta al repositorio:

- `index.html`
- `styles.css`
- `script.js`
- `favicon.svg`
- `robots.txt`
- `sitemap.xml`
- `vercel.json`
- `README.md`

## 3. Publicar en Vercel

1. Entra en Vercel.
2. Pulsa `Add New Project`.
3. Importa el repositorio `elecom-instalaciones`.
4. Framework preset: `Other`.
5. Build command: vacío.
6. Output directory: vacío.
7. Pulsa `Deploy`.

## 4. Cambiar URL final

Cuando Vercel genere la URL final, cambia esa URL en:

- `index.html`, en `canonical`, `og:url` si se añade después y datos estructurados.
- `robots.txt`
- `sitemap.xml`
