<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:media="http://search.yahoo.com/mrss/">

  <xsl:template match="/">
    <html>
      <head>
        <link rel="stylesheet" href="productos.css" type="text/css"/>
        <title>Tienda de Armas</title>
      </head>
      <body>
        <header>
          <h1>
            <xsl:value-of select="catalog/producto/nombre"/>
          </h1>
        </header>
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Carrito</a>
            </li>
          </ul>
        </nav>
        <main>
          <div class="carrito">
            <xsl:for-each select="catalog/producto">
              <div class="producto">
                <img src="{media:content/@url}" alt="{media:content/media:description}"/>
                <div class="info">
                  <h3>
                    <xsl:value-of select="nombre"/>
                  </h3>
                  <p>Precio: <xsl:value-of select="precio"/></p>
                  <p>Cantidad: <xsl:value-of select="cantidad"/></p>
                </div>
              </div>
            </xsl:for-each>
            <div class="total">
              Total: $XXX.XX
            </div>
            <div class="comprar">
              <button>Comprar</button>
            </div>
          </div>
        </main>
        <footer>
          Derechos reservados &copy; 2023
        </footer>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
