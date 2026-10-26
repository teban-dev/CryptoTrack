# CryptoTrack
This project is for training your habilities on trading and used only for educational purposes, is an entire web page with front and backend, using claude code to streamline the process

CRYPTOTRACK — FRONTEND (React + Vite)
Plataforma web para simulación y seguimiento de portafolios de criptomonedas
Universidad Industrial de Santander · Programación en la Web

=====================================================================
1. CÓMO EJECUTARLO EN EL COMPUTADOR LOCAL
=====================================================================
Requisitos: Node.js 20 o superior (incluye npm).

  1) Descomprimir el .zip y abrir una terminal dentro de la carpeta "cryptotrack".
  2) Instalar dependencias:      npm install
  3) Iniciar en modo desarrollo: npm run dev
     (se abre http://localhost:5173)
  Dependencias principales: react, react-router-dom, bootstrap y react-bootstrap.
  4) Para generar la versión de producción: npm run build
     (queda en la carpeta "dist"; se puede probar con: npm run preview)

Usuario de prueba (login simulado, Fase I):   usuario: admin   |   contraseña: 1234
También se puede crear una cuenta nueva desde "Crear cuenta" (vive solo en memoria).

=====================================================================
2. ESTRUCTURA DE CARPETAS
=====================================================================
cryptotrack/
├─ index.html ............. Documento base (idioma es, meta viewport responsive)
├─ package.json ........... Dependencias: react, react-dom, react-router-dom, bootstrap, react-bootstrap, vite
├─ vite.config.js ......... Configuración de Vite
├─ public/favicon.svg ..... Ícono del sitio
└─ src/
   ├─ main.jsx ............ Punto de entrada: estilos + proveedores de contexto
   ├─ App.jsx ............. Tabla de rutas (públicas y privadas)
   ├─ styles/ ............. Hojas de estilo separadas
   │   ├─ base.css ........ Tokens de diseño (colores, espacios), reset, tipografía y
   │   │                    puente con las variables --bs-* de Bootstrap (modo oscuro)
   │   ├─ layout.css ...... Contenedor, Navbar de react-bootstrap (fija y desplegable), footer
   │   ├─ components.css .. Personalización de Button, Form, Modal, Dropdown, Accordion,
   │   │                    Popover, Carousel, Toast, tablas, gráficos...
   │   └─ pages.css ....... Estilos propios de cada vista
   ├─ layouts/ ............ PublicLayout, PrivateLayout (con <Outlet/>) y RequireAuth
   ├─ components/ ......... Navbar, Footer, Hint (Popover), Captcha, PasswordField,
   │                        AuthForm, TradeModal, Charts (gráficas SVG),
   │                        Reveal (efecto fade con clases .fade/.show de Bootstrap)...
   ├─ pages/
   │   ├─ public/ ......... Home, About (Nosotros), LoginPage, NoPage (404)
   │   └─ private/ ........ Dashboard, Market, Watchlist, History, Assistant, Profile, Logout
   ├─ context/ ............ AuthContext (sesión), PortfolioContext (saldo, tenencias,
   │                        historial, watchlist, precios en vivo), ToastContext
   ├─ data/ ............... Datos de demostración (mock.js), equipo y redes (team.js),
   │                        contenido del plan (project.js)
   ├─ services/aiAssistant.js  Asistente de IA (simulado; aquí se conectará la API en Fase II)
   └─ utils/format.js ..... Formato de moneda, porcentajes y fechas

=====================================================================
2.1 COMPONENTES DE REACT-BOOTSTRAP UTILIZADOS (obligatorios de la Fase I)
=====================================================================
- Form (Form.Group, Form.Label, Form.Control, Form.Select, Form.Check, InputGroup):
  login, registro, captcha, filtros del historial, buscador, perfil y compra/venta.
- Modal: login (desde la barra), datos de cada integrante (footer), operar
  (compra/venta) y confirmaciones.
- Navbar (+ Toggle y Collapse) fija y desplegable · Nav · Dropdown (menú de usuario).
- Carousel (con efecto fade) · Accordion · Collapse · OverlayTrigger + Popover
  · Toast/ToastContainer · Button.
- Efecto fade: Modal, Carousel fade, Toast y el componente Reveal (clases .fade/.show).

=====================================================================
3. RUTAS
=====================================================================
Públicas : /  ·  /nosotros  ·  /login
Privadas : /privadas (Dashboard) · /privadas/mercado · /privadas/watchlist
           /privadas/historial · /privadas/asistente · /privadas/perfil · /privadas/logout
Si se intenta entrar a una ruta privada sin sesión, RequireAuth redirige a /login
(no existen "puertas traseras" escribiendo la URL).

=====================================================================
4. QUÉ ESTÁ SIMULADO EN ESTA FASE (SIN USAR BACKEND)
=====================================================================
- Login y registro: validan contra usuarios en memoria (AuthContext.jsx).
- Captcha: reto aritmético propio (Captcha.jsx). En Fase II -> Google reCAPTCHA.
- Precios: movimiento aleatorio cada 3,5 s (PortfolioContext.jsx). En Fase II -> CoinGecko.
- Compra/venta, historial, watchlist y snapshots: estado en memoria; se pierde al recargar.
- Asistente IA: reglas simples sobre los datos del portafolio (services/aiAssistant.js).
  En Fase II -> llamada a un modelo de lenguaje desde el backend.

It's still missing the BACKEND using the geckoAPI for the tracking of the crypto currencies
