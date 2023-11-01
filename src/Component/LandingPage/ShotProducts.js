import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function ShotProducts() {
    const navigate = useNavigate ()

  return (
    <div>
    <div>
    <h2>PRODUCTS</h2>
</div>
<div>
    <button onClick={() => navigate('/galery')}>FITTINGS</button>
    <Link to="/products/valve">               
        <button>VALVES</button>
    </Link>
    <button onClick={() => navigate('/')}>INSTRUMENTS</button>
    <button onClick={() => navigate('/')}>GASKETS</button>
</div>
<div>
    <button onClick={() => navigate('/')}>FLANGES</button>
    <button onClick={() => navigate('/')}>FITTING INSTRUMENTS</button>
    <button onClick={() => navigate('/')}>PIPES / TUBES</button>
    
    <button onClick={() => navigate('/products/bolt-nuts')}>BOLT & NUTS</button>
</div>
    </div>
  )
}

export default ShotProducts