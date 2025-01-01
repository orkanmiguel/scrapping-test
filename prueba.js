import * as cheerio from "cheerio";

// Tu contenido HTML
const htmlContent = `
<div>
   <tr>
     <td>
       <span>
         <b>NOMBRE(S) LOCAL(ES):</b><br />Aguila; aguila mora (Arg, Uru,
         Bol), aguia-chilena (Bra), aguila panamuna (Col), aguilucho
         pechinegro (Per).
         <p>
           <a><b>DISTRIBUCION EN CHILE:</b></a
           ><br />Arica a Antofagasta y desde Caldera a Tierra del Fuego.<br />
           Sin datos entre ambas zonas (zona de dispersion).
         </p>
         <p>
           <b>HABITAT:</b><br />en todo lugar, pero más numerosa en las zonas
           bajas de las cordilleras de la zona central; laderas vegetadas,
           estepas arbustivas y bosques; hasta los 2.200 msnm.
         </p>
         <p>
           <b>DESCRIPCION:</b><br />
           Largo: 65 - 80 cms. <br />
           Envergadura: 175 - 200 cms.<br />
           Peso: 2 kgms.<br />
           <b>Macho</b>: Cabeza, cuello, dorso, pecho, supracaudales y cola
           negros azulados. Garganta, abdómen, subcaudales y calzones blancos
           con estrias finas oscuras. Alas negras con cubiertas alares
           grisáceas; parte interior de las alas blanco sucio con estrias
           finas oscuras. Pico ganchudo, gris azulado en la punta y
           amarillento hacia la base. Patas amarillas con grandes uñas
           negras.
         </p>
         <p>
           <b>Hembra</b>: más grande que el macho; con las cubiertas
           secundarias y las supracaudales con tono rufo.
         </p>
         <p>
           <b>Inmaduro</b>: de color oscuro casi negro, con tonos de castaño
           rojizo. Por debajo más claro. Llega a su plumaje de adulto a los 3
           o 4 años.
         </p>
         <p>
           <b>ALIMENTACION:</b><br />Animales vivos, principalmente mamiferos
           como conejos o ratones; tambien culebras, perdices y otros, los
           cuales caza lanzándose en picada y apresándolos con sus poderosas
           patas, para luego matarlos enterrándoles su fuertes uñas o dándole
           golpes con su pico. Luego los lleva a un risco o a su nido para
           comérselo o alimentar a su familia.
         </p>
         <p>
           <b>REPRODUCCION:</b><br />Nido voluminoso en salientes o grietas
           de riscos, o en la copa de grandes árboles; hecho con ramas secas
           entrelazadas y forrado con crin o lana. Puede ser usado por varios
           años si no son molestados, ya que suelen parearse por toda la
           vida. Postura de 2 huevos, a veces 1 y rara vez 3; de color blanco
           o blanco con algunas pintas pardas; dimensiones de 67 x 52 mms.
           app.
         </p>
         <p>
           <b>OBSERVACIONES:</b><br />Esquiva y desconfiada, por lo que
           difícilmente se le puede ver de cerca.
         </p>
         <p>
           Le gusta volar aprovechando las corrientes de aire pudiendo
           vérsele en grandes planeos circulares.
         </p>
         <p>
           <b>DISTRIBUCION:</b> (Clements 6.9)<br />
           ssp. <i>australis</i>: cordillera de Los Andes desde O de
           Venezuela a Tierra del Fuego en
           <a target="_blank" href="https://www.avesdechile.cl/204.htm#a"
             ><b>Chile</b></a
           >
           y Argentina
         </p>
         <p>
           <b
             >CLASIFICACION
             <a
               href="https://www.iucnredlist.org/species/22695845/93530287"
               target="_blank"
               ><b>IUCN</b></a
             >
             (2019): LC</b
           ><br />
           Menor riesgo.<br />
         </p>
         <p><b>AMENAZAS</b>:<br /></p>
         <p>
           <b>VOCALIZACION</b>:<br />
           <a
             href="https://www.xeno-canto.org/species/Geranoaetus-melanoleucus"
             target="_blank"
             ><b>Xeno-Canto</b></a
           >
         </p></span
       >
     </td>
   </tr>
 </div>
`;

// Cargar el contenido HTML en cheerio
const $ = cheerio.load(htmlContent);

// Función para extraer el contenido de las etiquetas <b> y sus datos asociados
function extractData() {
  const data = {};
  $("b").each(function () {
    const key = $(this).text().replace(/:/g, "").trim();
    const value = $(this).parent().text().replace(key, "").trim();
    data[key] = value;
  });
  return data;
}

// Obtener los datos extraídos
const extractedData = extractData();
console.log(extractedData);
