import React from "react";
import {Form,FormControl} from 'react-bootstrap';

function FilterMovie({setSearch}){
  
    return(
        <div>
            <Form className="d-flex">
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" 
                             onChange={ e => setSearch(e.target.value)} />
            </Form>
        </div>
    )
}
export default FilterMovie;