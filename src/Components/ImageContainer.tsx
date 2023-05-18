import { FC } from 'react';

interface ImageContainer {
    products: string[],
    setImage: any
}

const ImageContainer: FC<ImageContainer> = ({products, setImage}) => {

  const handleIframeLoad = (iframeID: string, index: number) => {
    const img = document.getElementById(iframeID).contentWindow.document.getElementsByClassName("mimg rms_img").[0];

    setImage((imgs: string[]) => imgs.splice(index, 1, img));
  }

  return (
    <div>
        {
           products.map((product, index) => 
            <iframe 
              id={product}
              src={`https://www.bing.com/images/search?q=${product}`} 
              onLoad={this.handleIframeLoad}
            />            
           )
        }
    </div>
  );
}

export default ImageContainer;