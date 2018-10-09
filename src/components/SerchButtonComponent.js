import React from 'react'
import { Input, Button } from 'semantic-ui-react'

const SerchButtonComponent = () => (

    <Input type='text' placeholder='Search...' floated='right' action>
        <input />
        <Button type='submit'>Search</Button>
    </Input>
)
export default SerchButtonComponent