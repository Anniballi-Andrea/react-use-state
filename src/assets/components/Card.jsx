import { useState } from "react"





export default function Card({ info }) {


    const [active, setActive] = useState(0)






    return (



        <div div className="card-body" >
            {
                info.map((el) => (
                    <button onClick={() => setActive(el.id)} key={el.id} className={`btn btn-primary m-3 ${active === el.id && "btn-warning"}`}>{el.name}</button>

                ))
            }


            {active !== 0 && <div className="container">

                {<h2 >{info.find((el) => el.id === active).name}</h2>}

                {<p >{info.find((el) => el.id === active).description}</p>}
            </div>}









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
