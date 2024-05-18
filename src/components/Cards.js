import React from 'react'

import Card from './Card'


//  import image1 from '../assets/JavaLogo.jpg'
import image1 from '../assets/javascript.jpg'
import image2 from '../assets/python.jpg'
import image3 from '../assets/cobol.png'
import image4 from '../assets/MatlabLogo.png'




const cards = [
    {
        id:1,
        title:'Java Script',
        imagen: image1,
        instructor : 'Panfilo Dorantes',
        url: 'https://www.arimetrics.com/glosario-digital/javascript'
    },
    {
        id:2,
        title:'Phyton',
        imagen: image2,
        instructor : 'Angela Rios',
        url: 'https://www.python.org'
    },
    {
        id:3,
        title:'Cobol',
        imagen: image3,
        instructor : 'Benedicto',
        url: 'https://thepower.education/blog/todo-sobre-cobol-el-lenguaje-de-programacion'
    },
    {
        id:4,
        title:'MatLab',
        imagen: image4,
        instructor : 'Dr Jair Dexter',
        url: 'https://www.mathworks.com/products/matlab.html'
    }
]


export default function Cards() {
    console.log('' + cards)
  return (    
    //  Todo el contenido va dentro de un div siempre de los siempres
    <div className='container d-flex justify-content-center align-item-center h-100'>        
        <div className='row'>
            {
                cards.map(item => (
                    <div className='col-md-4' key={cards.id}>
                        <Card
                            key={item.id}
                            id = {item.id}
                            title = {item.title}
                            imagen = {item.imagen}
                            instructor = {item.instructor}
                            url = {item.url}
                        />
                    </div>
                ))
            }
            
        </div> 

    </div>
    //<div>Esto es un conjunto de Cards
        //<h1>Saludos desde el contenedor</h1>
        //<Card></Card>
    //</div>
    // Adentro del primer div
    //<div className='col-md-4'><Card></Card></div>    
    //<div className='col-md-4'><Card></Card></div>    
    //<div className='col-md-4'><Card></Card></div>

  )
}
