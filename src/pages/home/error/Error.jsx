import './Error.css';
export default function Error(){
    return(
         <div className="error-wrap">
      <img className='img-wrap' src="data:image/png;base64,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" alt="" />
       </div>
    )
}