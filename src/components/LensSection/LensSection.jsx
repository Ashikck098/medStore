import React, { useState } from 'react'
import './LensSection.css'
import preview from "../../assets/preview.png";
import Tesseract from 'tesseract.js';
import { useNavigate } from 'react-router-dom';

const LensSection = () => {
    const navigate = useNavigate();
    const [previewSrc, setPreviewSrc] = useState(preview);
    const [file, setFile] = useState(preview);
    const [extractedText, setExtractedText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        
        if (!file || !file.type.startsWith('image/')) {
            setErrorMessage('Please select a valid image file.');
            return;
        }
    
        setErrorMessage('');
        displayImagePreview(file);
        setFile(file)
    }

    const displayImagePreview = (file) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            setPreviewSrc(event.target.result);
        };
        reader.readAsDataURL(file);
    }

    const handleExtractText = () => {
    
        showLoader(true);
        Tesseract.recognize(
            file,
            'eng',
            { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
             console.log(text);
            setExtractedText(text);
            showLoader(false);
        }).catch(error => {
            setErrorMessage('Error occurred during OCR processing.');
            showLoader(false);
        });
    }

    const handleClear = () => {
        
        setPreviewSrc(preview);
        setExtractedText('');
        setErrorMessage('');
    }

    const showLoader = (loading)=>{  
         if (loading) {
            setLoading(true);
         }else{
            setLoading(false);
         }
    }

  return (
<>
<div className="cartItems_main">
      <h1 className="cartItems_heading">
        Meds Lens
      </h1> 

      <section>
      <div class="container">
         
        
         <div id="previewContainer">
             <img id="preview" src={previewSrc} alt="Preview"/>
         </div>
        
        
         {errorMessage && <span className="error-message">{errorMessage}</span>}
        
         <div className='btnDiv'>
         <label for="fileInput" id="uploadBtn" >Upload Image</label>
         <input type="file" id="fileInput" onChange={handleFileInputChange}/>

          <button id="submitBtn" disabled={loading} onClick={handleExtractText}>
          {loading ? 'Extracting...' : 'Extract Text'}
          </button>
         </div>

     </div>
     
     <div class="container">
         
        
         <textarea id="extractedText" rows="10" cols="50" placeholder="Extracted Text" value={extractedText}></textarea>
      
         
         <button id="clearBtn" disabled={loading} onClick={handleClear}>Clear</button>
     </div>
     </section>
     
      <h5 className="continueShopping_text" onClick={() => navigate("/")}>
        Continue Shopping
      </h5>
    </div>
    
</>
  )
}

export default LensSection