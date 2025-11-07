import { useState } from "react"





export default function Card() {


    const [active, setActive] = useState(1)

    const info =
        [
            {
                id: 1,
                name: "HTML",
                description: " HTML (Hyper Text Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini"
            },
            {
                id: 2,
                name: 'CSS',
                description: "CSS (Cascading Style Sheets) si occupa dell'aspetto grafico gestendo elementi come colori, font, layout e animazioni, rendendo i siti più accattivanti e fruibili su diversi dispositivi.",
            },
            {
                id: 3,
                name: "JavaScript",
                description: "JavaScript è un linguaggio di programmazione e scripting che rende le pagine web interattive e dinamiche",
            },
            {
                id: 4,
                name: "NodeJs",
                description: "Node.js è  un ambiente di runtime open source che permette di eseguire codice JavaScript al di fuori del browser, principalmente per lo sviluppo di applicazioni server-side"
            },
            {
                id: 5,
                name: "Express",
                description: "Express è un framework web per Node.js, leggero, veloce e minimalista, utilizzato per costruire applicazioni web e API. Semplifica lo sviluppo web lato server fornendo una struttura solida e flessibile, gestendo attività come il routing e il middleware in modo efficiente e veloce. ",
            },
            {
                id: 6,
                name: "ReactJS",
                description: "ReactJs è una libreria JavaScript open-source per la creazione di interfacce utente (UI), si concentra sulla costruzione di componenti UI riutilizzabili, utilizzando una sintassi simile a HTML chiamata JSX, che viene poi convertita in codice JavaScript. ",
            },
        ]





    return (



        <div div className="card-body" >

            <button onClick={() => setActive(1)} key={1} className="btn btn-primary m-3">HTML</button>
            <button onClick={() => setActive(2)} key={2} className="btn btn-primary m-3">CSS</button>
            <button onClick={() => setActive(3)} key={3} className="btn btn-primary m-3">JavaScript</button>
            <button onClick={() => setActive(4)} key={4} className="btn btn-primary m-3">NodeJS</button>
            <button onClick={() => setActive(5)} key={5} className="btn btn-primary m-3">Express</button>
            <button onClick={() => setActive(6)} key={6} className="btn btn-primary m-3">ReactJS</button>
            {

                info.map((el) => (

                    <>
                        <div className="container">
                            {el.id === active && <h2>{el.name}</h2>}
                            {el.id === active && <p>{el.description}</p>}
                        </div>
                    </>



                ))
            }


        </div>

    )

}
/*
              <button className="btn btn-primary m-3">CSS</button>
              <button className="btn btn-primary m-3">JavaScript</button>
              <button className="btn btn-primary m-3">NodeJs</button>
              <button className="btn btn-primary m-3">Express</button>
              <button className="btn btn-primary m-3">ReactJS</button>




              <div className="container">
                  {el.id === active && <h2>{el.name}</h2>}
                  {el.id === active && <p>{el.description}</p>}
              </div>*/
