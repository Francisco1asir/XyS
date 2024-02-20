import Tabla1 from '@/components/commons/Tabla/Tabla1'
import { LibrosCard } from '@/components/public/libros/LibrosCard'
import { IProducto } from '@/interfaces/IProductos'
import { getLibros } from '@/model/libros/datalibro'
import React from 'react'

async function Productospage() {
  // async function getProductos() {
  //   const res = await fetch('http://localhost:3001/api/libros/listar', { cache: 'no-store' })
  //   if (!res.ok) {
  //     throw new Error('Failed to fetch data')
  //   }
  //   return res.json()
  // }
  const productos: IProducto[] = await getLibros()

  return (
    <>
      <h1 className='h1productos'>API PRODUCTOS</h1>
      <section>
        {
            productos.map((libro) => (
                <article>
                    <LibrosCard key={libro.isbn} libro={libro}/>
                </article>
            ))
        }
    </section>
      <hr />
    </>
    
  )
}
export default Productospage