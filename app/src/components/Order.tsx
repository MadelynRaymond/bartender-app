import React from 'react'
import QueueItem, { QueueItemProps } from './QueueItem'



export default function Order({contains, orderId}:{contains: QueueItemProps[], orderId: number}) {
  return (
    <>
        {contains.map((item: QueueItemProps) => <QueueItem orderId={orderId} key={item.cocktail.cocktailId} cocktail={item.cocktail} quantity={item.quantity}/>)}
    </>
  )
}
