import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from './ui/button'
import HackerBtn from './HackerBtn'

function DownLoadResumeBtn() {

  const downloadResume=()=>{
    const path='../../public/resume.docx';

    const link=document.createElement('a')
    link.href=path
    link.download='resume.docx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div className="h-fit  w-full mt-2 py-2 px-2 ">
    {/* <Link href="/" className={cn(buttonVariants({ variant: "default", size:"lg"}))}>
      <Download className="mx-1" />
      Download Resume
    </Link> */}
    
    <Link href="/files/resume.docx" download='resume.docx' className='inline-flex p-2 rounded-md border border-solid border-slate-600 gap-2 bg-slate-300 hover:bg-slate-400   '><Download></Download>Download Resume</Link>  
     
    {/* <Button variant='subtle' onClick={downloadResume}>Download Resume</Button> */}
    
  </div>
  )
}

export default DownLoadResumeBtn