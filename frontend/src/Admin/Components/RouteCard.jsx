import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom';

const RouteCard = ({address, title,desc,img}) => {
 
  const {Meta} = Card;
  return (
    <Link to={address}>
    <div className='min-h-[300px] min-w-[200px] max-w-[350px] '>

    <Card className='w-auto bg-[#f4f1ed] h-auto' hoverable
    cover = {<img src={img} alt='img' className='max-w-[200px] h-[200px] block m-auto'/>}
    >   
        <Meta title={<p className='text-2xl'>{title}</p>} description={<p className='font-semibold'>{desc}</p>} />
    </Card>
    </div>
    </Link>
        
        
    
  )
}

export default RouteCard