import { useState } from "react"
import LanguageCard from "./LanguageCard"
import NoLanguageCard from "./NoLanguageCard"





export default function Buttons({ info }) {


    const [active, setActive] = useState(0)






    return (



        <div div className="card-body" >
            {
                info.map((el) => (
                    <button onClick={() => setActive(el.id)} key={el.id} className={`btn btn-primary m-3 ${active === el.id && "btn-warning"}`}>{el.name}</button>

                ))
            }


            {active !== 0 ? <LanguageCard info={info} active={active} /> : <NoLanguageCard />}









        </div>

    )

}