import{_ as a,c as t,o as d,a1 as e}from"./chunks/framework.C7DjcIZG.js";const _=JSON.parse('{"title":"Programación de PLCs","description":"","frontmatter":{},"headers":[],"relativePath":"producto/7-PLC.md","filePath":"producto/7-PLC.md"}'),r={name:"producto/7-PLC.md"},o=e(`<h1 id="programacion-de-plcs" tabindex="-1">Programación de PLCs <a class="header-anchor" href="#programacion-de-plcs" aria-label="Permalink to &quot;Programación de PLCs&quot;">​</a></h1><p>Para el control de la planta se desarrollo las rutinas de control mediante studio 5000.</p><h2 id="dobladora-de-cajas" tabindex="-1">Dobladora de Cajas <a class="header-anchor" href="#dobladora-de-cajas" aria-label="Permalink to &quot;Dobladora de Cajas&quot;">​</a></h2><p>Una de las etapas a automatizar es el empaquetado donde se remplaza el trabajo manual por una dobladora de cajas. Para controlar su movimiento se inicia por identificar las señales que se conectarían al PLC.</p><h3 id="lista-de-entradas-y-salidas" tabindex="-1">Lista de Entradas y Salidas <a class="header-anchor" href="#lista-de-entradas-y-salidas" aria-label="Permalink to &quot;Lista de Entradas y Salidas&quot;">​</a></h3><table><thead><tr><th>Nombre</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td>actuador_derecho</td><td>Salida</td><td>Actuador en el lado derecho</td></tr><tr><td>actuador_frontal</td><td>Salida</td><td>Actuador en el frente</td></tr><tr><td>actuador_izquierdo</td><td>Salida</td><td>Actuador en el lado izquierdo</td></tr><tr><td>actuador_superior</td><td>Salida</td><td>Actuador en la parte superior</td></tr><tr><td>actuador_trasero</td><td>Salida</td><td>Actuador en la parte trasera</td></tr><tr><td>banda_1</td><td>Salida</td><td>Banda transportadora 1</td></tr><tr><td>banda_2</td><td>Salida</td><td>Banda transportadora 2</td></tr><tr><td>giro_piston_2</td><td>Salida</td><td>Giro del pistón 2</td></tr><tr><td>proximidad_1</td><td>Entrada</td><td>Sensor de proximidad 1</td></tr><tr><td>proximidad_2</td><td>Entrada</td><td>Sensor de proximidad 2</td></tr><tr><td>proximidad_3</td><td>Entrada</td><td>Sensor de proximidad 3</td></tr><tr><td>start</td><td>Entrada</td><td>Botón de inicio</td></tr><tr><td>stop</td><td>Entrada</td><td>Botón de parada</td></tr><tr><td>testigo</td><td>Salida</td><td>Indicador luminoso</td></tr></tbody></table><h3 id="etapas-y-logica-de-control" tabindex="-1">Etapas y lógica de control <a class="header-anchor" href="#etapas-y-logica-de-control" aria-label="Permalink to &quot;Etapas y lógica de control&quot;">​</a></h3><p>La empacadora se controla mediante un PLC el cual maneja una rutina main en desarrollada en lenguaje ladder que se encarga de controlar el comportamiento general, encargada del arranque y parada, selección de modo de operación entre producción y manual; así como el llamado a subrutinas de control que desarrollan la secuencia específica del movimiento. Dentro del modo manual se tiene control individual para cada una de las señales y se utiliza para la verificación de funcionamiento y ajuste de la máquina. Por otro lado el modo de producción tiene la rutina completa de movimiento efectuado por la máquina. La lógica de control de movimiento fue desarrollado en lenguaje GRAFCET.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>flowchart LR</span></span>
<span class="line"><span>  Start --&gt; Stop</span></span></code></pre></div>`,9),n=[o];function i(l,s,c,p,u,m){return d(),t("div",null,n)}const b=a(r,[["render",i]]);export{_ as __pageData,b as default};
