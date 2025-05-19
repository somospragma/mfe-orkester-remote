# 🧱 Arquetipo de Microfrontend para ORKESTER - BAM

Este proyecto es un arquetipo diseñado para acelerar y estandarizar la creación de microfrontends en Angular que se integran en la plataforma ORKESTER de BAM (desarrollada por Pragma). Proporciona una configuración inicial casi completa, facilitando tanto el desarrollo local como la integración y despliegue en los entornos corporativos de BAM.

## 📌 ¿Qué es ORKESTER?

ORKESTER es una plataforma desarrollada por Pragma para BAM, que actúa como un escritorio centralizado para los ejecutivos del banco. Integra diferentes paneles de control de múltiples proyectos como microfrontends bajo una arquitectura basada en Single-SPA.

## 🎯 Propósito del Arquetipo

Este arquetipo tiene como objetivo:

Automatizar la configuración inicial del microfrontend.

Estandarizar la conexión con la plataforma ORKESTER.

Facilitar la conexión con bases de datos asociadas.

Simplificar el proceso de despliegue continuo.

Permitir a los equipos centrarse en la lógica del negocio y no en la configuración técnica.

## 🚀 Características principales

✅ Compatible con Angular 15+.

✅ Integración lista con Single-SPA.

✅ Configuración para desarrollo local con entorno simulado de ORKESTER.

✅ Archivos de configuración prelistos para conexión con la plataforma y la base de datos.

✅ Scripts de despliegue automatizados.

✅ Interoperabilidad con otros microfrontends.

# ⚙️ Requisitos Previos

Node.js 18+

Angular CLI instalado globalmente

Git

Acceso al repositorio corporativo de BAM

Acceso a ORKESTER

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

## Ejemplo

{
id: 6732,
level: 2,
name: 'codigos promocionales',
father: 673,
key_route: '/mfe-orkester-remote/Ruta',
icon: null,
name_microfrontend: 'mfe-orkester-remote',
link_microfrontend: 'http://localhost:4200/main.js',
microPath: '/efecto-bam/',
fav: false,
},

Name: nombre del micro en el menu.
key*route: ruta completa de muestro componente dentro del microfrontends para mostrar
name_microfrontend: nombre especifico de nuestro microfrontend
link_microfrontend: ruta de muestro microfrontends eje*'http://localhost:4200/main.js'
microPath: ruta principal de nuestro microfrontend

# Rutas centro del microFrontend

Ejemplo:
const routes: Routes = [
{
path: 'layouts/mfe-orkester-remote',
children: [
{
path: 'componente',
component: componenteComponent,
}]}]
Este ejemplo muestra como configurar las rutas en el microfrontends, en le path principal por defecto y obligatoriamente debene llevar la ruta 'layouts' la ciaul ayuda a determinar las rutas en orkester.

# Archivos importantes.

## Proxy

Dentro de la carpeta Miselaneos existe un archivo con el nombre de proxy.config.js en el cual encontraras de forma detallada como configurarlo para usar las apis que necesites.
Para usarlo compia este archivo al repo local de Orkester y ejecuta con el siguiente comando ng serve --proxy-config ./proxy.config.js
