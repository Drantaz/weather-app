import Image from 'next/image'
import React from 'react'

const ErrorMsg = ({data}:any) => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-3 bg-white dark:bg-background py-72'>
      <Image src="/images/warning.png" alt='hello' height={200} width={200}/>
      <div className="mt-4 text-center text-2xl font-normal">{data}</div>
    </div>
  )
}

export default ErrorMsg