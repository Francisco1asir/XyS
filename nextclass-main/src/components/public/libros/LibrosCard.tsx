import { IProducto } from '@/interfaces/IProductos'
import { Card, CardBody, CardHeader,Image } from '@nextui-org/react'
import React, { FC } from 'react'

interface Props {
    libro: IProducto;
}

export const LibrosCard: FC<Props> = ({ libro }) => {
    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">{libro.title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://www.65ymas.com/uploads/s1/76/67/77/foto.jpeg"
                    width={270}
                />
            </CardBody>
        </Card>
    );
};
