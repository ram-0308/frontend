import React from 'react'
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'

const BCard = ({bname,price,qty,city}) => (
  <Card>
    
    <CardContent>
      <CardHeader>{bname}</CardHeader>
      <CardMeta>{qty}</CardMeta>
      <CardDescription>
        {price}
      </CardDescription>
    </CardContent>
    <CardContent extra>
      <a>
        <Icon name='user' />
        {city}
      </a>
    </CardContent>
  </Card>
)

export default BCard