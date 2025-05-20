<h1 align="center">🧱 Arquetipo de Microfrontend para ORKESTER - BAM</h1>
 
<div align="center">
  <picture >
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/fernando-jaramillo-pragma/fernando-jaramillo-pragma/blob/cea4d0f148a7a46b43ab1bf84c7f4e456a166e09/tecnologias/pragma_solido_ok.png">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/fernando-jaramillo-pragma/fernando-jaramillo-pragma/blob/cea4d0f148a7a46b43ab1bf84c7f4e456a166e09/tecnologias/pragma_blanco_ok.png">
    <img alt="Logo Pragma" src="https://github.com/fernando-jaramillo-pragma/fernando-jaramillo-pragma/blob/cea4d0f148a7a46b43ab1bf84c7f4e456a166e09/tecnologias/pragma_blanco_ok.png" width="auto" height="50px">
  </picture>
</div>
<p align="center">
  <img src="https://github.com/fernando-jaramillo-pragma/fernando-jaramillo-pragma/blob/56dde5d42a52d5a25e890c03785a28c9047b2263/tecnologias/angular_ok.png" alt="angular-logo" width="auto" height="100px"/>
  </p>
Este proyecto es un arquetipo diseñado para acelerar y estandarizar la creación de microfrontends en Angular que se integran en la plataforma ORKESTER de BAM (desarrollada por Pragma). Proporciona una configuración inicial casi completa, facilitando tanto el desarrollo local como la integración y despliegue en los entornos corporativos de BAM.

## 📌 ¿Qué es ORKESTER?

ORKESTER es una plataforma desarrollada por Pragma para BAM, que actúa como un escritorio centralizado para los ejecutivos del banco. Integra diferentes paneles de control de múltiples proyectos como microfrontends bajo una arquitectura basada en Single-SPA.

## 🎯 Propósito del Arquetipo

Este arquetipo tiene como objetivo:

- ⚙️ **Automatizar** la configuración inicial del microfrontend.
- 📐 **Estandarizar** la conexión con la plataforma **ORKESTER**.
- 🗄️ **Facilitar** la conexión con bases de datos asociadas.
- 🚀 **Simplificar** el proceso de despliegue continuo (CI/CD).
- 💡 **Permitir** a los equipos enfocarse en la lógica del negocio, evitando configuraciones técnicas repetitivas.

## 🚀 Características principales

✅ Compatible con Angular 15+.

✅ Integración lista con Single-SPA.

✅ Configuración para desarrollo local con entorno simulado de ORKESTER.

✅ Archivos de configuración prelistos para conexión con la plataforma y la base de datos.

✅ Scripts de despliegue automatizados.

✅ Interoperabilidad con otros microfrontends.

# ⚙️ Requisitos Previos

Antes de utilizar este arquetipo, asegúrate de contar con los siguientes requisitos:

- 🟢 **Node.js** versión **18 o superior**
- 🅰️ **Angular CLI** instalado globalmente (`npm install -g @angular/cli`)
- 🧰 **Git** instalado y configurado
- 🔐 **Acceso** al repositorio corporativo de **BAM**
- 🌐 **Acceso** a la plataforma **ORKESTER**

# 🛠️ Instalación y Configuración

## 1. Clonar el arquetipo

git clone https://git.bam.com/orkester/micro-orkester-archetype.git
cd mfe-orkester-remote

## 2. Instalar dependencias

npm install

# Cambio de nombre del Selector principal

Para cambiar el nombre del selector principal (actualmente es <mfe-orkester-remote> ):
1-Ir al archivo app.component.ts y cambiar el nombre en la configuracion de @Component en nombre del selector
2- Ir al archivo main.single-spa.ts y actualizar el nombre del selector en el atributo template por el nombre del selector configurado anteriormente en el archivo app.component.ts

# Conectar el microFrontends con Orkester

Para conectar el microfrontend con orkester de forma local solo necesitas ir al archivo y cambiar o agregar la informacion en el menu para presentar

## 📦 Ejemplo de Configuración

```json
{
  "id": 6732,
  "level": 2,
  "name": "codigos promocionales",
  "father": 673,
  "key_route": "/mfe-orkester-remote/Ruta",
  "icon": null,
  "name_microfrontend": "mfe-orkester-remote",
  "link_microfrontend": "http://localhost:4200/main.js",
  "microPath": "/efecto-bam/",
  "fav": false
}
```

Name: nombre del micro en el menu.
key*route: ruta completa de muestro componente dentro del microfrontends para mostrar
name_microfrontend: nombre especifico de nuestro microfrontend
link_microfrontend: ruta de muestro microfrontends eje*'http://localhost:4200/main.js'
microPath: ruta principal de nuestro microfrontend

# Rutas centro del microFrontend

## 🧩 Ejemplo de Rutas

```ts
const routes: Routes = [
  {
    path: "layouts/mfe-orkester-remote",
    children: [
      {
        path: "componente",
        component: ComponenteComponent,
      },
    ],
  },
];
```

Este ejemplo muestra como configurar las rutas en el microfrontends, en le path principal por defecto y obligatoriamente debene llevar la ruta 'layouts' la ciaul ayuda a determinar las rutas en orkester.

# Archivos importantes.

## 🌐 Uso del archivo `proxy.config.js`

Este archivo permite redireccionar y reescribir solicitudes HTTP locales hacia los entornos correspondientes de la plataforma BAM, facilitando el consumo de APIs durante el desarrollo sin problemas de CORS ni configuraciones adicionales.

### 📁 Ubicación del archivo

El archivo `proxy.config.js` se encuentra dentro de la carpeta `Miselaneos` del arquetipo.

### 🚀 ¿Cómo usarlo?

1. **Copiar el archivo**  
   Copia el archivo `proxy.config.js` desde la carpeta `Miselaneos` al directorio raíz del repositorio local de **ORKESTER**.

2. **Ejecutar Angular con proxy**  
   Inicia la aplicación utilizando el siguiente comando para que Angular utilice la configuración de proxy:

   ```bash
   ng serve --proxy-config ./proxy.config.js
   ```

## Clonando el Repositorio

Puede realizar el clonado segun la version y rama respectiva, si no desea conservar historial de commits sugerimos:

```bash
git clone --depth=1 --branch <nombre-rama> <URL_DEL_REPO>
```

## Servidor de Desarrollo

Ejecute `ng serve` o `npm run start` para un servidor de desarrollo. Navegue hasta `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos fuente. Admite componentes independientes.

```bash
ng serve
```

```bash
npm start
```

Para ejecutar las pruebas unitarias a través de [JEST](https://jestjs.io/docs/getting-startedo). De forma predeterminada, AppComponent evalúa 3 pruebas unitarias. Cada componente debe contener pruebas unitarias y una covertura minima del 80%.

Ejeucte los comandos según corresponda:

```bash
npm run test
```

```bash
npm run test:watch
```

```bash
npm run test:coverage
```
