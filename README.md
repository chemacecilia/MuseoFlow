# MuseoFlow · IVAM (Institut Valencià d'Art Modern)

Aplicación web interactiva desarrollada a partir del diseño oficial de Figma para **MuseoFlow - Recorridos Narrativos del IVAM**.

## 🎨 Sobre el Proyecto

MuseoFlow es una experiencia digital museística que propone una forma diferente de recorrer las colecciones del IVAM a través de cuatro miradas ("Otras formas de mirar"): **Color**, **Identidad**, **Conflicto** y **Rutas por definir**. 

El prototipo implementa con máxima fidelidad visual y funcional el recorrido completo de la ruta **Conflicto** (así como la exploración inicial de **Identidad** y **Color**), incluyendo el mapa cartográfico interactivo de 12 paradas, la exploración de obras clave como *Guerrapittura*, explicaciones auditivas con reproductor interactivo, documentos complementarios como *Hintergrund*, escaneo simulado de códigos QR con visor de cámara para *El acorazado Potemkin*, preguntas pedagógicas con retroalimentación, modales de reflexión y selector multilingüe (7 idiomas).

---

## 🛠 Tecnologías Utilizadas

- **React 18** (Functional Components, Hooks, Context API)
- **TypeScript** (Tipado estricto de rutas, paradas, preguntas, opciones y estados)
- **Vite 5** (Entorno de desarrollo y bundler ultra-rápido)
- **CSS3 / Modern CSS** (Diseño basado en tokens exactos de Figma, tipografías Lora & Inter, animaciones de retícula láser y diseño responsive)
- **Lucide React** (Iconografía fiel a Figma: `ArrowLeft`, `ArrowRight`, `Lock`, `CheckCircle`, `Headphones`, `Play`, `Pause`, `Camera`, `ScanLine`, etc.)
- **Web Audio API** (Soporte auditivo ambiental interactivo para el reproductor de audio)

---

## 🚀 Instalación y Ejecución Local

### Prerrequisitos
- **Node.js** (v18 o superior)
- **npm** (v9 o superior)

### Pasos

1. **Clonar o situarse en el repositorio:**
   ```bash
   cd MuseoFlow
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en modo de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación se iniciará en `http://localhost:3000` (o el puerto indicado en la consola).

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

5. **Previsualizar la compilación de producción:**
   ```bash
   npm run preview
   ```

---

## 📱 Pantallas y Funcionalidades Implementadas

| Pantalla | Node ID Figma | Descripción e Interacciones |
|---|---|---|
| **Pantalla 1: Bienvenida** | `6:1315` | Cabecera con marca IVAM y selector de idioma activo. Introducción editorial. Hero con fotografía de la galería de arte moderno. 4 tarjetas de ruta interactivas (**Color**, **Identidad**, **Conflicto**, **Ruta por definir**). |
| **Pantalla 2: Mapa narrativo** | `6:1371` / `147:23` | Cartografía interactiva con sendero visual para las rutas *Conflicto* e *Identidad*. Doce hitos conectados con halo pulsante para la parada activa. Hitos bloqueados/desbloqueados dinámicamente según el progreso. Botón "Comenzar" y leyenda explicativa. |
| **Pantalla 3: Parada 01 · Guerrapittura** | `6:1435` | Cabecera con botón de mapa rápido y retroceso. Barra de progreso de 12 segmentos. Reproducción de la obra con marco magenta. Pregunta interactiva con 3 opciones seleccionables (A, B, C) y botón "Enviar respuesta" con validación de estado. |
| **Pantalla 4: Parada 01 · Explicación y Audio** | `6:1494` | Estado completado (1/12). Tarjeta con respuesta de referencia y checkmark. Reproductor de audio visual interactivo (Play/Pause, velocidad 1x/1.25x/1.5x, barra de progreso con scrubber e indicador de tiempo). Explicación editorial. Tarjeta de enlace al documento adicional *Hintergrund*. Botón de continuación a la Parada 02. |
| **Pantalla 4A: Hintergrund · Obra y Contexto** | `220:2` | Vista monográfica de la carpeta de George Grosz (1928). Reproducción artística, créditos editoriales, ensayo de análisis crítico (*El dibujo como denuncia*), botón para continuar hacia la parada 02 y botón para volver a la explicación. |
| **Pantalla 5: Parada 02 · Escaneo y Pregunta** | `16:232` | Progreso actualizado a 2 paradas. Visor de escaneo con retícula de enfoque, icono de cámara, línea de escaneo animada por láser y botón "Escanear QR de la obra" que activa el fotograma recuperado. Pregunta sobre *El acorazado Potemkin*, selección interactiva y confirmación. |
| **Modal: QR · El acorazado Potemkin** | `147:349` | Diálogo emergente con el fotograma restaurado de Eisenstein (1925), créditos de dominio público, provocación pedagógica y botón "Volver a la pregunta". |
| **Modal: Parada 02 · Reflexión** | `147:359` | Diálogo de reflexión final sobre la parada 02: conclusión sobre el montaje cinematográfico como arma política, revisión de la respuesta escogida y acciones para "Volver al mapa" o "Revisar mi respuesta". |
| **Selección de Idioma** | `180:2` | Menú completo con 7 idiomas disponibles: Español (ES), English (EN), Valencià (VA), Français (FR), Deutsch (DE), Italiano (IT) y Русский (RU). Modifica en tiempo real el idioma de la interfaz y la insignia de cabecera. |
| **Inspector Desktop** | Extra UX | Barra superior para tablet/escritorio que permite a revisores y evaluadores saltar rápidamente a cualquiera de las pantallas del flujo manteniendo el marco de visualización móvil original de 402px centrado con sombras de exposición. |

---

## 🎨 Fidelidad de Diseño y Recursos Originales

- **Imágenes originales extraídas de Figma:**
  - `galeria_arte_moderno.png`
  - `guerrapittura.png`
  - `hintergrund.png`
  - `potemkin.png`
  - `sendero_conflicto.png`
  - `sendero_identidad.png`
  - `ver_mapa.svg`
  - `halo_disponibilidad.svg`
- **Tipografías:**
  - `Lora` para títulos editoriales y preguntas (reproduciendo exactamente el estilo tipográfico humanista/serif del museo).
  - `Inter` para subtítulos, etiquetas, navegación, botones y cuerpos de texto.
- **Paleta de color:**
  - Fondo papel cálido: `#fffdfa`
  - Texto primario: `#24231f`
  - Texto secundario: `#69665e`
  - Bordes neutros: `#d7d2c7` / `#ded7d0`
  - Acento Conflicto: `#b22d6e` / Suave: `#fceaf2`
  - Acento Identidad: `#b54b10` / Suave: `#fff0e3`
  - Fondo oscuro de herramientas (escáner/audio): `#24231f`
