import{_ as a,c as e,o as t,a1 as d}from"./chunks/framework.BtoQSCtf.js";const o="/Tile-Tech/assets/1molienda-SACMI-MTC.pzGnnFdA.png",r="/Tile-Tech/assets/1molienda-SACMI-MTC-2.Cz9kFFEd.png",i="/Tile-Tech/assets/1molienda-caracteristicas.CXhIe1-X.png",n="/Tile-Tech/assets/1atomizacion-diagrama.Dmog11lM.png",z=JSON.parse('{"title":"Analisís y  diseño","description":"","frontmatter":{},"headers":[],"relativePath":"producto/1-analisis-disenio.md","filePath":"producto/1-analisis-disenio.md"}'),s={name:"producto/1-analisis-disenio.md"},l=d('<h1 id="analisis-y-diseno" tabindex="-1">Analisís y diseño <a class="header-anchor" href="#analisis-y-diseno" aria-label="Permalink to &quot;Analisís y  diseño&quot;">​</a></h1><h2 id="descripcion-del-proceso-productivo-previo-a-intervencion" tabindex="-1">Descripción del proceso productivo previo a intervencion <a class="header-anchor" href="#descripcion-del-proceso-productivo-previo-a-intervencion" aria-label="Permalink to &quot;Descripción del proceso productivo previo a intervencion&quot;">​</a></h2><p>El proceso de la producción de baldosas cerámicas consta de las siguientes etapas:</p><h2 id="molienda" tabindex="-1">Molienda <a class="header-anchor" href="#molienda" aria-label="Permalink to &quot;Molienda&quot;">​</a></h2><p>En el proceso de molienda, las materias primas (arcilla 40-60%, feldespatos 20-30%, arenas 10-20% , carbonatos 5-10% y caolines 1-5%) se dosifican en proporciones específicas y se introducen en el molino MTC 041 [<a href="#referencias">1</a>]. Basado en su capacidad de 40000 litros y la tabla de caracteristicas estandar de de un molino se tiene que tiene una producción de 3500 kg/hora de material seco.</p><p>Dentro del molino, estos materiales se mezclan con agua y defloculantes, resultando en la formación de la barbotina, un compuesto líquido crucial para la fabricación de azulejos. La automatización de este proceso implica varios componentes y técnicas avanzadas. Las materias primas se transportan mediante un sistema de bandas transportadoras. Cada banda transportadora se ajusta individualmente para controlar la velocidad, lo que permite dosificar con precisión las proporciones de cada material. Estas bandas convergen en una banda transportadora común que lleva los materiales mezclados hacia el molino. Dentro del molino, un sensor de humedad infrarrojo mide continuamente el contenido de humedad de la barbotina. Este sensor emite datos en tiempo real a un sistema de control automatizado. Basándose en estas mediciones, el sistema ajusta una válvula de control de agua para mantener la humedad de la barbotina dentro de los parámetros especificados. Este ajuste se realiza mediante un actuador que regula la apertura y cierre de la válvula, asegurando una adición precisa de agua. La densidad de las barbotinas varía de 1690 a 1740 g/l [2]. En la molienda la barbotina sale con una humedad del 34% [<a href="#referencias">2</a>].</p><p><img src="'+o+'" alt="especificaciones de molino" width="60%"></p><p><img src="'+r+'" alt="especificaciones de molino" width="60%"></p><blockquote><p>Tomado de [1] pag 15</p></blockquote><table><thead><tr><th>dimension</th><th>units</th><th>MTC-035</th><th>MTC-041</th></tr></thead><tbody><tr><td>A</td><td>mm</td><td>10935</td><td>12230</td></tr><tr><td>B</td><td>mm</td><td>3570</td><td>3570</td></tr><tr><td>C</td><td>mm</td><td>4070</td><td>4070</td></tr><tr><td>D</td><td>mm</td><td>2200</td><td>2200</td></tr><tr><td>E</td><td>mm</td><td>2900</td><td>2900</td></tr><tr><td>F</td><td>mm</td><td>9255</td><td>10550</td></tr></tbody></table><p><img src="'+i+'" alt="Flujo de molino" width="60%"></p><blockquote><p>Tomado de [2] pag 68</p></blockquote><h3 id="atomizado" tabindex="-1">Atomizado <a class="header-anchor" href="#atomizado" aria-label="Permalink to &quot;Atomizado&quot;">​</a></h3><p>En el proceso de atomización, se inicia con la introducción de la barbotina obtenido del paso anterior en un cilindro cerrado, donde se expulsa mediante aspersión en un entorno controlado con corrientes de aire caliente. Esta operación provoca la reducción de la humedad de la barbotina, llevándolo a un estado sólido. Posteriormente, por efecto de la gravedad, el sólido resultante cae sobre una cinta transportadora que lo dirige hacia el siguiente proceso de fabricación. Se tiene que la planta cuenta con un atomizador ATM018 con una capacidad de producción de polvo atomizado de 4.240 kg/hora de polvo con humedad del 6% que representa 3985 kg/hora de polvo seco [<a href="#referencias">3</a>].</p><p><img src="'+n+'" alt="Diagrama de atomización" width="60%"></p><blockquote><p>Tomado de [2]</p></blockquote><table><thead><tr><th>DATOS TÉCNICOS</th><th></th><th>ATM006</th><th>ATM012</th><th>ATM018</th><th>AMT036</th><th>ATM052</th><th>ATM065</th></tr></thead><tbody><tr><td>Capacidad de evaporación nominal (a 0 mslm)</td><td>l/h</td><td>600</td><td>1.200</td><td>1.800</td><td>3.600</td><td>5.200</td><td>6.500</td></tr><tr><td>Producción atomizado (@ 34% H2O)</td><td>kg/h</td><td>1.410</td><td>2.830</td><td>4.240</td><td>8.490</td><td>12.260</td><td>15.320</td></tr><tr><td>Potencia térmica nominal instalada</td><td>kcal/h</td><td>540.000</td><td>1.050.000</td><td>1.500.000</td><td>3.000.000</td><td>4.300.000</td><td>5.500.000</td></tr><tr><td>Temperatura aire en entrada a la torre</td><td>°C</td><td>500-600</td><td>500-600</td><td>500-600</td><td>500-600</td><td>500-600</td><td>500-600</td></tr><tr><td>Temperatura aire en salida</td><td>°C</td><td>60-130</td><td>60-130</td><td>60-130</td><td>60-130</td><td>60-130</td><td>60-130</td></tr><tr><td>Temperatura polvo atomizado</td><td>°C</td><td>40-60</td><td>40-60</td><td>40-60</td><td>40-60</td><td>40-60</td><td>40-60</td></tr><tr><td>Humedad polvo atomizado</td><td>%</td><td>4-7</td><td>4-7</td><td>4-7</td><td>4-7</td><td>4-7</td><td>4-7</td></tr><tr><td>Consumo térmico específico</td><td>kcal/l</td><td>750-850</td><td>700-850</td><td>700-850</td><td>700-850</td><td>700-850</td><td>700-850</td></tr><tr><td>Número de LANZAS</td><td>n.</td><td>3</td><td>6</td><td>7</td><td>9</td><td>10</td><td>12</td></tr><tr><td>Boquillas - número máximo con LANZAS</td><td>n.</td><td>6</td><td>12</td><td>14</td><td>18</td><td>20</td><td>24</td></tr><tr><td>Boquillas - número máximo con CORONA</td><td>n.</td><td>6</td><td>12</td><td>15</td><td>20</td><td>28</td><td>32</td></tr><tr><td>Ciclones separadores</td><td>n°</td><td>1</td><td>1</td><td>1</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Potencia eléctrica nominal instalada</td><td>kW</td><td>14,0</td><td>22,5</td><td>35,5</td><td>63,5</td><td>90,0</td><td>125,0</td></tr></tbody></table><table><thead><tr><th>DATOS TÉCNICOS</th><th></th><th>ATM090</th><th>ATM110</th><th>ATM140</th><th>AMT180</th><th>ATM200</th><th>ATM250</th></tr></thead><tbody><tr><td>Capacidad de evaporación nominal (a 0 mslm)</td><td>l/h</td><td>9,000</td><td>11,000</td><td>14,000</td><td>18,000</td><td>20,000</td><td>25,000</td></tr><tr><td>Producción atomizado (@ 34% H2O)</td><td>kg/h</td><td>21,210</td><td>25,930</td><td>33,000</td><td>42,430</td><td>47,140</td><td>58,930</td></tr><tr><td>Potencia térmica nominal instalada</td><td>kcal/h</td><td>7,500M</td><td>9,200M</td><td>11,500M</td><td>15,000M</td><td>16,700M</td><td>21,000M</td></tr><tr><td>Temperatura aire en entrada a la torre</td><td>°C</td><td>500-600</td><td>500-600</td><td>500-600</td><td>500-600</td><td>500-600</td><td>500-600</td></tr><tr><td>Temperatura aire en salida</td><td>°C</td><td>60-130</td><td>60-130</td><td>60-130</td><td>60-130</td><td>60-130</td><td>60-130</td></tr><tr><td>Temperatura polvo atomizado</td><td>°C</td><td>40-60</td><td>40-60</td><td>40-60</td><td>40-60</td><td>40-60</td><td>40-60</td></tr><tr><td>Humedad polvo atomizado</td><td>%</td><td>4-7</td><td>4-7</td><td>4-7</td><td>4-7</td><td>4-7</td><td>4-7</td></tr><tr><td>Consumo térmico específico</td><td>kcal/l</td><td>700-850</td><td>700-850</td><td>700-850</td><td>700-850</td><td>700-850</td><td>700-850</td></tr><tr><td>Número de LANZAS</td><td>n.</td><td>12</td><td>13</td><td>14</td><td>18</td><td>18</td><td>24</td></tr><tr><td>Boquillas - número máximo con LANZAS</td><td>n.</td><td>24</td><td>26</td><td>28</td><td>36</td><td>36</td><td>48</td></tr><tr><td>Boquillas - número máximo con CORONA</td><td>n.</td><td>32</td><td>40</td><td>48</td><td>-</td><td>-</td><td>-</td></tr><tr><td>Ciclones separadores</td><td>n°</td><td>2</td><td>4</td><td>4</td><td>4</td><td>4</td><td>6</td></tr><tr><td>Potencia eléctrica nominal instalada</td><td>kW</td><td>150.5</td><td>182</td><td>230</td><td>355.5</td><td>355.5</td><td>407</td></tr></tbody></table><blockquote><p>Tomado de [3]</p></blockquote><h3 id="prensado" tabindex="-1">Prensado <a class="header-anchor" href="#prensado" aria-label="Permalink to &quot;Prensado&quot;">​</a></h3><p>En este proceso, el polvo atomizado resultante de la etapa de atomización se distribuye uniformemente en una bandeja, donde se aplica una fuerza entre 340 y 400 kg/cm² mediante una prensa hidráulica. Esta fuerza provoca que la humedad residual en el polvo facilite la formación de la pieza con una forma geométrica específica, en este caso, un cuadrado de 20x20 centímetros.</p><h3 id="secado" tabindex="-1">Secado: <a class="header-anchor" href="#secado" aria-label="Permalink to &quot;Secado:&quot;">​</a></h3><p>Los secadores horizontales son de tipo horno monoestrato de rodillos. En este caso las piezas se mueven por encima de los rodillos en horizontal y el aire caliente con el que entran en contacto viene de quemadores que están en los laterales del horno. La temperatura máxima de este tipo de secadores está en los 350oC y los ciclos de secado son menores, entre 15 y 25 minutos.</p><h3 id="esmaltado" tabindex="-1">Esmaltado: <a class="header-anchor" href="#esmaltado" aria-label="Permalink to &quot;Esmaltado:&quot;">​</a></h3><p>El esmaltado es un tratamiento que se utiliza para otorgar una serie de propiedades tecnicas y estéticas como la impermeabilidad, facilidad de limpieza, brillo, color,resistencia química y mecánica etc. El esmaltado se realiza en continuo y los métodos más empleados son: por pulverización, en cortina, en seco o las decoraciones. Al principio, cuando se aplican las capas de esmalte en el soporte cerámico, son plásticas pero debido a la succión y evaporación superficial del agua, se convierten en un recubrimiento compacto de partículas denominado capa consolidada. La serigrafía es el método más empleado para la decoración de baldosas cerámicas por su facilidad de aplicación en las líneas de esmaltado. Se usa en monococción, bicocción y tercer fuego. Controlador del caudal del esmalte.</p><h3 id="decoracion" tabindex="-1">Decoración: <a class="header-anchor" href="#decoracion" aria-label="Permalink to &quot;Decoración:&quot;">​</a></h3><p>Inspección visual automatizada.</p><h3 id="coccion" tabindex="-1">Cocción: <a class="header-anchor" href="#coccion" aria-label="Permalink to &quot;Cocción:&quot;">​</a></h3><p>Dos variables fundamentales en esta etapa son el ciclo térmico y la atmósfera del horno, que deben adaptarse a las características específicas de cada composición y tecnología de fabricación para obtener el producto cerámico deseado.</p><p>La etapa de cocción se divide en dos partes principales: calentamiento y enfriamiento. Durante la etapa de calentamiento, que abarca aproximadamente el 55-60% de la longitud del horno, las piezas se calientan gradualmente hasta alcanzar alrededor de 400°C. Este calentamiento inicial tiene como objetivo eliminar la humedad excesiva y los humos generados durante la combustión. Luego, se produce un aporte energético que facilita la oxidación de la materia orgánica y las impurezas, eliminando los gases generados y descomponiendo los carbonatos presentes en el soporte cerámico.</p><p>Es crucial que estas reacciones se completen antes de que la permeabilidad del esmalte y el soporte sea demasiado baja, lo que podría causar problemas como alteraciones de color o textura en las piezas. La etapa de cocción propiamente dicha es donde ocurre la sinterización de las piezas. Durante este proceso, el soporte cerámico experimenta una transformación química, pasando de una mezcla de materias primas a una estructura más compleja, con fases vitreas o cristalinas estables, dependiendo del tipo de composición.</p><p>El tiempo necesario en esta etapa es crucial para garantizar la vitrificación completa de la pieza y asegurar su estabilidad dimensional. Las temperaturas alcanzadas pueden oscilar entre 1130°C y 1200°C. Durante esta fase, y al final del calentamiento, las piezas experimentan una importante variación dimensional debido a la dilatación térmica, lo que debe ser considerado en el diseño de la pasta, el englobe y el esmalte para evitar problemas de curvatura en el producto final.</p><p>La etapa de enfriamiento, que comprende entre el 40% y el 50% de la longitud del horno, consta de tres etapas distintas: enfriamiento forzado a alta temperatura, enfriamiento natural y enfriamiento forzado a baja temperatura. Durante estas etapas, se utilizan diferentes métodos de enfriamiento para garantizar que las piezas se enfríen de manera controlada, minimizando así la posibilidad de roturas o defectos en el producto final. La transformación alotrópica del cuarzo a 537°C es un aspecto importante que se debe considerar durante el enfriamiento, ya que puede provocar roturas si no se controla adecuadamente.</p><p>Las dimensiones y curvatura de las piezas se miden de forma automática, pero la manipulación de los valores que determinan estas variables es manual. Se propone automatizar la manipulación de éstas. Adicionalmente, la inspección visual y control de temperatura del aire del quemador se realizan manualmente. Se propone su automatización.</p><h3 id="empaquetado" tabindex="-1">Empaquetado: <a class="header-anchor" href="#empaquetado" aria-label="Permalink to &quot;Empaquetado:&quot;">​</a></h3><p>El empaquetado ya se encuentra automatizado. Se propone una mejora de éste.</p><h2 id="vsm" tabindex="-1">VSM <a class="header-anchor" href="#vsm" aria-label="Permalink to &quot;VSM&quot;">​</a></h2><h2 id="cuellos-de-botella-y-areas-de-mejora" tabindex="-1">Cuellos de botella y áreas de mejora <a class="header-anchor" href="#cuellos-de-botella-y-areas-de-mejora" aria-label="Permalink to &quot;Cuellos de botella y áreas de mejora&quot;">​</a></h2><p>Entre las 588 muestras obtenidas, los defectos incluyen tipos de grietas (60,9%), esquinas rotas (9,9%), defectos de impresión y decoración (9,4%), bordes rotos (8%), defectos en el esmaltado inferior (5,4%), sombras ( 3,9%) y otros casos (2,6%). Teniendo en cuenta las cuestiones anteriores, se analizó el parámetro de tipos de grietas como la principal causa de creación de defectos en las baldosas, que se asoció con las máquinas de prensado</p><h2 id="indicadores-claves-de-diseno" tabindex="-1">Indicadores claves de diseño <a class="header-anchor" href="#indicadores-claves-de-diseno" aria-label="Permalink to &quot;Indicadores claves de diseño&quot;">​</a></h2><embed src="/Tile-Tech/KPI.pdf" type="application/pdf" width="100%" height="600px"><p><a href="/Tile-Tech/KPI.pdf">KPI</a></p><h2 id="modelos-usado-en-el-diseno" tabindex="-1">Modelos usado en el diseño <a class="header-anchor" href="#modelos-usado-en-el-diseno" aria-label="Permalink to &quot;Modelos usado en el diseño&quot;">​</a></h2><ul><li>caja de empaque tomado de <a href="https://grabcad.com/library/cardboard-insert-1" target="_blank" rel="noreferrer">Cardboard Insert</a></li></ul><h2 id="referencias" tabindex="-1">Referencias <a class="header-anchor" href="#referencias" aria-label="Permalink to &quot;Referencias&quot;">​</a></h2><ol><li>Catálogo de molinos de tambor continuo SACMI. <a href="/Tile-Tech/catalogos/1molienda_catalogo_Molino_MTC_SACMI.pdf">Catalogo de molinos SACMI</a></li><li>Tecnología cerámica aplicada SACMI, Asociación Española de Técnicos Cerámicos. 2004.<a href="https://sacmi.com/" target="_blank" rel="noreferrer">SACMI</a></li><li>Preparacion de polvos ceramicos atomizacion.<a href="https://sacmi.com/es-ES/ceramics/Azulejos/Preparacion-de-polvos-ceramicos/atomizacion/ATM" target="_blank" rel="noreferrer">SACMI</a></li></ol>',46),c=[l];function m(p,u,h,b,f,q){return t(),e("div",null,c)}const g=a(s,[["render",m]]);export{z as __pageData,g as default};
