<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xsl:stylesheet [
  <!ENTITY copy "entity-value">
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:media="http://search.yahoo.com/mrss/">

  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Carrito de Compras</title>
        <!-- <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"-->
        <link rel="stylesheet" type="text/css" href="carrito.css" />
      </head>
      <body>
        <header>
          <h1>
            <xsl:value-of select="catalog/@name" />
          </h1>
        </header>
        <nav>
          <ul>
            <li>
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="carrito.html">Carrito</a>
            </li>
            <li>
              <a href="contacto.html">Contactos</a>
            </li>
            <li>
              <a href="usuario.html">Gestion de Usuario</a>
            </li>
          </ul>
        </nav>
        <main>
          <section class="products container" id="lista-1">
            <div class="grid-container">
              <xsl:for-each select="catalog/producto">
                <div class="product">
                  <img src="{media:content/@url}" alt="{media:content/media:description}" />
                  <h3>
                    <xsl:value-of select="nombre" />
                  </h3>
                  <p>Precio: <xsl:value-of select="precio" /></p>
                  <p>Cantidad: <xsl:value-of select="cantidad" /></p>
                </div>
              </xsl:for-each>
              <!-- Agrega más productos según sea necesario -->
            </div>
          </section>
        </main>

        <footer>
          Derechos reservados &copy; 2023
        </footer>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>