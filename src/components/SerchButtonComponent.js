import React from 'react'
import { Input, Button } from 'semantic-ui-react'

const SerchButtonComponent = () => (

    <div class="column">
        <Input type='text' placeholder='Search...' floated='right' action>
            <input />
            <Button type='submit'>Search</Button>
        </Input>
    </div>
)
export default SerchButtonComponent