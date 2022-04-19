
import ruleta from "../images/ruletasupply.png"

import token from "../images/redbox.png"


export function Tokenomics() {
  return (
    <section className="tokenomic" id="tokenomics">
      <div className="container">
        <h1>Tokenomics</h1>
        <div className="row justify-content-center">
         
         
          <div className="col-md-6 d-flex  justify-content-center">
            <img src={ruleta} className="ruleta" alt="" />
          </div>
        </div>
      </div>
      <img className="token" id="token1" src={token} alt="token" />
      <img className="token" id="token2" src={token} alt="token" />
      <img className="token" id="token3" src={token} alt="token" />
      <img className="token" id="token4" src={token} alt="token" />


      <img className="token" id="token7" src={token} alt="token" />
      <img className="token" id="token8" src={token} alt="token" />
      <img className="token" id="token9" src={token} alt="token" />
      <img className="token" id="token10" src={token} alt="token" />

    </section>
  )
}
