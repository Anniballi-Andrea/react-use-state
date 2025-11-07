export default function LanguageCard({ info, active }) {




    return (

        <div className="container">

            {<h2 >{info.find((el) => el.id === active).name}</h2>}

            {<p >{info.find((el) => el.id === active).description}</p>}
        </div>
    )
}