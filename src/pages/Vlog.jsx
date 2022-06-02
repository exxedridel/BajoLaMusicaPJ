import React from "react";
import "../styles/Vlog.scss";

const Vlog = () => {
  return (
    <>
      <header id="titulo">
        <h1>Bajo el Vlog</h1>
      </header>
      <section className="container">

        <article className="post">
          <h2>NIMB / Dificultades de ser músico en México</h2>
          <p>Minidocumental</p>
          <a href="https://silver-buttercream-9d33ca.netlify.app">
            <img src="" alt="capture3" />
          </a>
          <p>
            Este es un trabajo que tiene como finalidad documentar el trabajo y
            esfuerzo de las bandas nacionales por tener un lugar dentro de la
            escena musical; en esta ocasión y como primeros participantes
            tenemos a unos excelentes músicos conocidos como Nimb.
          </p>
          <p>
            Nimb es una banda mexicana originaria de León, Guanajuato que desde
            su formación en el 2015 se ha caracterizado por crear un sonido
            progresivo que combine la calma y la tempestad, tal como las nubes
            (nimbus) de donde proviene su nombre. -Marcos Emiliano Mosqueda
            Romero.
          </p>
          <p>
            Agradecimos a Aldo Montañez de Bunker Records por su participación y
            dejarnos grabar en su espacio. Síganos en nuestras redes sociales:
          </p>
          <ul>
            <li>
              <a href="https://nimb.bandcamp.com/">
                NIMB Bandcamp
              </a>
            </li>
            <li>
              <a href="mailto:nimbcontacto@gmail.com">
                NIMB contacto
              </a>
            </li>
          </ul>
          <div className="github-buttons">
            <a href="https://github.com/exxedridel/BajoLaMusicaPJ">
              <button className="button">SUSCRIBIRME</button>
            </a>
          </div>
        </article>

        <article className="post">
          <h2>
            NUEVO THEREMIN / ¿SE PUEDEN ESCUCHAR LAS BACTERIAS? / EL RUIDO NOS
            MATA
          </h2>
          <p>Video Blog</p>
          <a href="https://silver-buttercream-9d33ca.netlify.app">
            <img src="" alt="capture2" />
          </a>
          <p>
            Así es banda aquí estamos de nuevo platicando de cosas que nadie nos
            pidió pero que nos maman, así que si les interesa pasar un rato con
            nosotros escuchando sobre la batería y otros temas relacionados a la
            música, no duden en visitarnos.{" "}
          </p>
          <p></p>
          <div className="github-buttons">
            <a href="https://github.com/exxedridel/BajoLaMusicaPJ">
              <button className="button">SUSCRIBIRME</button>
            </a>
          </div>
        </article>

        <article className="post">
          <h2>Jorge Preza</h2>
          <p>Bajo el Jam</p>
          <a href="https://silver-buttercream-9d33ca.netlify.app">
            <img src="" alt="capture1" />
          </a>
          <p>
            Escuchen esta jam que para nosotros representa un momento muy perron
            con nuestro amigo Jorge Arturo Preza Ortiz. Conectamos ideas
            musicales super chido y nos divertimos harto improvisando aquel día.
          </p>
          <p>
            Vayan y sigan a Jorge Arturo Preza Ortiz mejor conocido como el
            Harry, es un música super activo que radica en la ciudad de
            Guanajuato capital🎵🎵
          </p>
          <ul>
            <li>
            <a href="https://www.facebook.com/jorgearturo.prezaortiz">
              Harry Facebook
            </a>
            </li>
          </ul>
          
          <div className="github-buttons">
            <a href="https://github.com/exxedridel/BajoLaMusicaPJ">
              <button className="button">SUSCRIBIRME</button>
            </a>
          </div>
        </article>

      </section>
    </>
  );
};

export default Vlog;
