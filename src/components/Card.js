import React from 'react'

//  import image1 from '../assets/JavaLogo.jpg'



export default function Card({id, title, imagen, instructor, url}) {
  return (
    <div className='card text-center bg-dark'>

        <div className='card-body text-light'>
            <img src={imagen} alt='No Image' className='image-widht'/>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>
            Instructor: {instructor}
            </p>
            <a href={url} className='btn btn-outline-secondary rounded-0'>Ir al sitio web</a>
        </div>

    </div>
  )
}
