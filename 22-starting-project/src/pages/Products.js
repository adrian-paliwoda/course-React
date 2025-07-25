import { Link } from "react-router-dom"


const PRODUCTS = [
    {id:'p1', title:'Product 1'},
    {id:'p2', title:'Product 2'},
    {id:'p3', title:'Product 3'}
]

export default function ProductsPage(){
    return <>
    <h1>My Products Page</h1>
    <ul>
        {PRODUCTS.map(p => (<li key={p.id}><Link to={p.id} relative="route" >{p.title}</Link></li>))}
    </ul>
    </>
}