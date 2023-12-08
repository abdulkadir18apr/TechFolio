import React from 'react'
import "./contact.scss"
import { saveAs } from 'file-saver';

export default function ResumeModal({setShowResume}) {
  const handleDownload = () => {
    const pdfUrl = '/Abdul__Kadir.pdf'; 
    saveAs(pdfUrl, 'downloaded-file.pdf');
  };
  console.log(setShowResume)
  return (
    
    <div className='resumeModal'>
        <div className="imageContainer">
            <img src="/resume1.jpg" alt="resume" />
            <div className="controls">
                <button onClick={()=>setShowResume(false)}>Close</button>
                <button onClick={handleDownload}>Download</button>
            </div>    
        </div>
    </div>
  )
}
