// import { Props } from 'next/script'
import React, { FC } from 'react'
import { LibrosCard } from './LibrosCard'
import { IProducto } from '@/interfaces/IProductos'

interface Props {
    libros: IProducto[];
}

export const LibrosCardList: FC<Props> = ({ libros }) => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* Aquí mapeas las tarjetas */}
            {libros.map((libro) => (
                <article key={libro.isbn}>
                    <LibrosCard libro={libro} />
                </article>
            ))}
        </section>
    )
}
