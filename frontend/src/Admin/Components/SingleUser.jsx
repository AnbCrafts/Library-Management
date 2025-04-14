import React from 'react'

const SingleUser = ({borrowings,reserves,fine,status,validity,membership,img,name,mail,address,phone,delUser}) => {
  return (
    <> 
    <div className='w-[800px] min-h-[500px] max-w-[90%] m-auto'>


            <div className='h-[300px] w-[300px] rounded-full m-auto'>
                <img src={img} alt="" className='h-full w-full object-cover' />
            </div>
            <div className='m-auto w-[90%] flex items-center flex-col justify-center py-5'>
                <h1 className='text-3xl text-[#272727] pb-1'>{name}</h1>
               <div className='flex gap-8 items-center '>
               <h2 className='text-justify text-l text-[gray]'>{mail}</h2>
               <h2 className='text-justify text-l text-[gray]'>{phone}</h2>
               </div>
              <p className='text-center text-l text-[#393939] p-2 max-w-[400px]'>{address}</p> 
            </div>

            <div className="mx-auto w-fit px-2 rounded-full cursor-pointer text-lg font-semibold text-[#f4f1ed] bg-[#333] hover:bg-black hover:text-white" onClick={delUser}>Remove User</div>


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
                <li className='py-1 mb-1'>Fine</li>
                <li className='py-1 mb-1'>Membership type</li>
                <li className='py-1 mb-1'>Membership validity</li>
                <li className='py-1 mb-1'>Borrowings</li>
                <li className='py-1 mb-1'>Reserves</li>
            </ul>
            <ul className='px-2 mr-2 text-center w-full text-l font-semibold text-gray-700'>
                <li className='py-1 mb-1'>{status}</li>
                <li className='py-1 mb-1'>{fine}</li>
                <li className='py-1 mb-1'>{membership}</li>
                <li className='py-1 mb-1'>{validity}</li>
                <li className='py-1 mb-1'>{borrowings?borrowings:"No books borrowed"}</li>
                <li className='py-1 mb-1'>{reserves?reserves:"No Books reserved"}</li>
            </ul>
            <ul className='px-2 text-center w-full text-l font-semibold text-gray-700'>
                <li className='py-1 mb-1 cursor-pointer'>{status==='active'|| status==='Active'? "Block User":"Unblock user"}</li>
                <li className='py-1 mb-1 cursor-pointer'>{fine===0?"Charge fine":"Forgive"}</li>
                <li className='py-1 mb-1 cursor-pointer'>Remove</li>
                <li className='py-1 mb-1 cursor-pointer'>-</li>
                <li className='py-1 mb-1 cursor-pointer'>-</li>
                <li className='py-1 mb-1 cursor-pointer'>-</li>
            </ul>
        </div>

            
            
            
    </div>  
</>
  )
}

export default SingleUser