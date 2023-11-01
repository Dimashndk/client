import React from 'react'
import { useNavigate } from 'react-router-dom'

function ShortAbout() {
    const navigate = useNavigate ()
  return (
    <div>
        <div>
            <h2> ABOUT US </h2>
        </div>
        <div>
            <p>
                PT GRACIA DIKATAMAS was incorporated on Jakarta established since year on 2007 as an EPC Contractor, Stockiest & Trading  Company to fulfill any rapid development of diversed modern  industry commands (Oil & Gas, petrochemical, others) an ever  increasing needs for industrial plants.
            </p>
            <br/>
            <p>
                PT GRACIA DIKATAMAS  not just an ordinary  supplier & trading company.  The  customer  satisfactory  and   prompt  delivery  are  our first policy.
                We could  support  any  industrial  need  and provides  all  areas of industry with our  stocks of  high  quality  metals,  fittings,  materials  &  instruments product with reasonable price.
            </p>
        </div>
        <div>
            <button onClick={() => navigate ('about-us')}> READ MORE </button>
        </div>
    </div>
  )
}

export default ShortAbout