import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'

function ProductCategories() {
    const navigate = useNavigate ()

  return (
    <div>
        <div>
            <div>
                <h2>PRODUCTS</h2>
            </div>
            <div>
                <button onClick={() => navigate('/galery')}>FITTINGS</button>
                <Link to="/products/ valve">               
                    <button>VALVES</button>
                </Link>
                <button onClick={() => navigate('/')}>INSTRUMENTS</button>
                <button onClick={() => navigate('/')}>GASKETS</button>
            </div>
            <div>
                <button onClick={() => navigate('/')}>FLANGES</button>
                <button onClick={() => navigate('/')}>FITTING INSTRUMENTS</button>
                <button onClick={() => navigate('/')}>PIPES / TUBES</button>
                <button onClick={() => navigate('bolt-nuts')}>BOLT & NUTS</button>
            </div>
        </div>
        
    </div>
  )
}

export default ProductCategories