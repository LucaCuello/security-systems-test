# Security and System [Prueba técnica]

## Deploy en Vercel

Para visitar el deploy en vercel, [hacer click aquí.](https://securityandsystem-test.vercel.app/)

## Instalar el proyecto

Para correr el proyecto en local, se debe:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abrir [http://localhost:3000](http://localhost:3000) con tu navegador.

## Sobre el proyecto

Para realizar esta prueba técnica, utilicé la última versión de Next junto a TypeScript para más prolijidad. Antes de comenzar a programar, hice un wireframe en Figma para tener como guía, que se puede ver [visitando este link](https://www.figma.com/design/x9XnPPkSsrh1mMKS19IBSv/Security-and-System?node-id=0-1&t=02lbTqVQ4OcdkBhs-1)

Traté de hacer un diseño simple, minimalista y atractivo. Los estilos están hechos con CSS Modules y no se utilizó ninguna librería de componentes o de clases como Bootstrap o Tailwind. Hice mis propios componentes tal lo pedía la prueba técnica, e hice uso de ramas de Github para mantener un flujo de trabajo ordenado.

Librerías que si utilicé:

- React Hook Form para validación de formulario.
- Framer Motion para unas sutiles animaciones al cargar la página.
- CLSX para manejar estilos condicionales.
- Sonner para el uso de toasts al mandar el formulario.
