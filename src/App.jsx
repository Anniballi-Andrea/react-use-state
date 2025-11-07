import Card from "./assets/components/Card"


function App() {


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
    <>

      <div className="container">
        <div className="card mt-3">
          <div className="card-header">
            <h1>Learn Web development</h1>
          </div>
          <Card info={info} />
        </div>
      </div>

    </>
  )
}

export default App
