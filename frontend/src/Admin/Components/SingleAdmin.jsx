import React from 'react'

const SingleAdmin = ({status,img,name,mail,phone,permissions,role,delAdmin}) => {
  return (
    <>
    <div className='w-[800px] bg-[#f4f1ed] min-h-[500px] max-w-[90%] m-auto'>


            <div className='h-[300px] w-[300px] rounded-full m-auto'>
                <img src={img} alt="" className='h-full w-full object-cover' />
            </div>
            <div className='m-auto w-[90%] flex items-center flex-col justify-center py-5'>
                <h1 className='text-3xl text-[#272727] pb-1'>{name}</h1>
               <div className='flex gap-8 items-center '>
               <h2 className='text-justify text-l text-[gray]'>{mail}</h2>
               <h2 className='text-justify text-l text-[gray]'>{phone}</h2>
               </div>
            </div>
            <div className="mx-auto w-fit px-2 rounded-full cursor-pointer text-lg font-semibold text-[#f4f1ed] bg-[#333] hover:bg-black hover:text-white" onClick={delAdmin}>Remove User</div>

    </div>


    <div className='p-5 w-[90%] m-auto h-auto flex items-center justify-center flex-col border border-[#f48657]'>
        <div className='w-full flex items-center justify-between'>
            <p className='text-2xl font-extrabold flex-1 text-center text-[#f48657] bg-slate-100 py-3 mr-2'>Attributes</p>
            <p className='text-2xl font-extrabold flex-1 text-center text-[#f48657] bg-slate-100 py-3 mr-2'>Value</p>
            <p className='text-2xl font-extrabold flex-1 text-center text-[#f48657] bg-slate-100 py-3'>Action</p>
        </div>

        <div className='flex items-center justify-between w-full text-center'>
            <ul className='px-2 mr-2 text-start w-full text-l font-semibold text-gray-700'>
                <li className='py-1 mb-1'>Status</li>
                <li className='py-1 mb-1'>role</li>
                <li className='py-1 mb-1'>Permissions</li>
            </ul>
            <ul className='px-2 mr-2 text-center w-full text-l font-semibold text-gray-700'>
                <li className='py-1 mb-1'>{status}</li>
                <li className='py-1 mb-1'>{role}</li>
                <li className='py-1 mb-1'>{permissions}</li>
            </ul>
            <ul className='px-2 text-center w-full text-l font-semibold text-gray-700'>
                <li className='py-1 mb-1 cursor-pointer'>{status==='active'|| status==='Active'? "Block Admin":"Unblock Admin"}</li>
               <li className='py-1 mb-1 cursor-pointer'>-</li>
               <li className='py-1 mb-1 cursor-pointer'>-</li>
            </ul>
        </div>

            
            
            
    </div>  
</>
  )
}

export default SingleAdmin