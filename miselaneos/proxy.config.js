
const PROXY_CONFIG = [
    {
      context: [
        "/scpco", // Este es el prefijo de ruta que quieres reescribir o manejar de manera especial
      ],
      target: "https://scpco.devbam.com",
      secure: false,
      changeOrigin: true,
      logLevel: "debug",
      pathRewrite: {'^/scpco' : '/paymentlink/v1/paymentLink/charge/loadfile'}, // Reescribe /api a '', esencialmente eliminándolo de la ruta
      onProxyReq: function (proxyReq, req, res) {
        
        console.log("Intercepted Request to:", req.headers);
        console.log("Intercepted complete request to:", req)

        // Obtener las cabeceras originales
        const originalHeaders = proxyReq.getHeaders();
  
        // Convertir las claves de las cabeceras a Mayúscula Inicial
        const convertedHeaders = Object.keys(originalHeaders).reduce((acc, current) => {
          const keyParts = current.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase());
          const capitalizedKey = keyParts.join('-');
          acc[capitalizedKey] = originalHeaders[current];
          return acc;
        }, {});
  
        // Eliminar todas las cabeceras originales
        Object.keys(originalHeaders).forEach(header => {
          proxyReq.removeHeader(header);
        });
  
        // Establecer las nuevas cabeceras con Mayúscula Inicial
        Object.entries(convertedHeaders).forEach(([key, value]) => {
          console.log("Setting header:", key, "to:", value);
          if (key == 'Authorization'){
            console.log("sisi aqui es");
           
            proxyReq.setHeader(key, value);
          }
          proxyReq.setHeader(key, value);
        });
        // console.log("autho:::::", proxyReq.headers['authorization'] )

        console.log('Cabeceras modificadas:', proxyReq.getHeaders());
  
      },
      onProxyRes: function (proxyRes, req, res) {
        console.log("Received Response for:", req.originalUrl);
      }
    },
    {
      context: [
        "/servops", // Este es el prefijo de ruta que quieres reescribir o manejar de manera especial
      ],
      target: "https://scop.devbam.com",
      secure: false,
      changeOrigin: true,
      logLevel: "debug",
      pathRewrite: {'^/servops' : ''}, // Reescribe /api a '', esencialmente eliminándolo de la ruta
      onProxyReq: function (proxyReq, req, res) {
        
        console.log("Intercepted Request to:", req.headers);
  
        // Obtener las cabeceras originales
        const originalHeaders = proxyReq.getHeaders();
  
        // Convertir las claves de las cabeceras a Mayúscula Inicial
        const convertedHeaders = Object.keys(originalHeaders).reduce((acc, current) => {
          const keyParts = current.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase());
          const capitalizedKey = keyParts.join('-');
          acc[capitalizedKey] = originalHeaders[current];
          return acc;
        }, {});
  
        // Eliminar todas las cabeceras originales
        Object.keys(originalHeaders).forEach(header => {
          proxyReq.removeHeader(header);
        });
  
        // Establecer las nuevas cabeceras con Mayúscula Inicial
        Object.entries(convertedHeaders).forEach(([key, value]) => {
          proxyReq.setHeader(key, value);
        });
  
        console.log('Cabeceras modificadas:', proxyReq.getHeaders());
  
      },
      onProxyRes: function (proxyRes, req, res) {
        console.log("Received Response for:", req.originalUrl);
      }
    },
    {
        context: [
          "/cmmsso", // Este es el prefijo de ruta que quieres reescribir o manejar de manera especial
        ],
        target: "https://cmmsso.qa-bam.com",
        secure: false,
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: {'^/cmmsso' : ''}, // Reescribe /api a '', esencialmente eliminándolo de la ruta
        onProxyReq: function (proxyReq, req, res) {
          console.log("request completo: ", req)
          console.log("Intercepted Request to:", req.headers);
    
          // Obtener las cabeceras originales
          const originalHeaders = proxyReq.getHeaders();
    
          // Convertir las claves de las cabeceras a Mayúscula Inicial
          const convertedHeaders = Object.keys(originalHeaders).reduce((acc, current) => {
            const keyParts = current.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase());
            const capitalizedKey = keyParts.join('-');
            acc[capitalizedKey] = originalHeaders[current];
            return acc;
          }, {});
    
          // Eliminar todas las cabeceras originales
          Object.keys(originalHeaders).forEach(header => {
            proxyReq.removeHeader(header);
          });
    
          // Establecer las nuevas cabeceras con Mayúscula Inicial
          Object.entries(convertedHeaders).forEach(([key, value]) => {
            let newValue = value;
            if (value[0]==="b") {
               newValue = value[0].toUpperCase() + value.slice(1);//capitalizamos la primera letra de la palabra Bearer
            }
            proxyReq.setHeader(key, newValue);
          });
    
          console.log('Cabeceras modificadas:', proxyReq.getHeaders());
    
        },
        onProxyRes: function (proxyRes, req, res) {
          console.log("Received Response for:", req.originalUrl);
        }
      },
      {
        context: [
          "/bass", // Este es el prefijo de ruta que quieres reescribir o manejar de manera especial
        ],
        target: "https://bbss.qa-bam.com",
        secure: false,
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: {'^/bass' : ''}, // Reescribe /api a '', esencialmente eliminándolo de la ruta
        onProxyReq: function (proxyReq, req, res) {
  
          console.log("Intercepted Request to:", req.headers);
    
          // Obtener las cabeceras originales
          const originalHeaders = proxyReq.getHeaders();
    
          // Convertir las claves de las cabeceras a Mayúscula Inicial
          const convertedHeaders = Object.keys(originalHeaders).reduce((acc, current) => {
            const keyParts = current.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase());
            const capitalizedKey = keyParts.join('-');
            acc[capitalizedKey] = originalHeaders[current];
            return acc;
          }, {});
    
          // Eliminar todas las cabeceras originales
          Object.keys(originalHeaders).forEach(header => {
            proxyReq.removeHeader(header);
          });
    
          // Establecer las nuevas cabeceras con Mayúscula Inicial
          Object.entries(convertedHeaders).forEach(([key, value]) => {
            proxyReq.setHeader(key, value);
          });
    
          console.log('Cabeceras modificadas:', proxyReq.getHeaders());
    
        },
        onProxyRes: function (proxyRes, req, res) {
          console.log("Received Response for:", req.originalUrl);
        }
        
         
      },
      
  ];
  
  module.exports = PROXY_CONFIG;