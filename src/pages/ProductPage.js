import React from 'react'
import {Table, Image ,Badge,Spinner,Button} from "react-bootstrap"
import axios from 'axios';
import {RiSendPlaneFill} from "react-icons/ri"
import { Link } from 'react-router-dom';
import { addtoCart } from '../redux/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux'

const ProductPage = () => {

    const[product, setProduct] = React.useState([])
    const[loading, setLoading] = React.useState(false)
    const[error, setError] = React.useState(null)

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cartReducer.cart)
    const total = useSelector((state) => state.cartReducer.total)

    const getData = async () =>{
        try{
            setLoading(true) 
            const resp = await axios.get('https://api.codingthailand.com/api/course')
            // console.log(resp.data)
            setProduct(resp.data.data)
        } catch(error){

            // console.log(error.response)
            setError(error)
        }
         finally {
             setLoading(false)
         }

    }

    React.useEffect(()  => {

         getData()

    },[])

    if (loading === true){
        return(
            <div className="text-center mt-5">
                <Spinner animation="border" variant="info" />
                </div>
        )
    }

    if (error){
        return(
            <div className="text-center mt-5 text-danger">
                <h4> Error form API, plese try again </h4>
                <p>{error.response.data.message}</p>
            </div>
        )
    }
    const addCart = (p) => {
         const product ={
             id: p.id,
             name: p.title,
             price: p.view, //สมมติ view = price
             qty: 1
         }

        // call action
        dispatch(addtoCart(product, cart))
        //console.log(p)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4">
                    <h2>ProductPage</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Detail</th>
                                <th>Created Date</th>
                                <th>View</th>
                                <th>Picture</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                product.map((p, index) => {
                                    return (
                                        <tr key={p.id}>
                                            <td>{p.id}</td>
                                            <td>{p.title}</td>
                                            <td>{p.detail}</td>
                                            <td>{p.date}</td>
                                            <td><Badge variant="primary">{p.view}</Badge></td>
                                            <td><Image src={p.picture} rounded width={60}/></td>
                                            <td><Button href={`/detail/${p.id}/title/${p.title}`} variant="dark">Click ME <RiSendPlaneFill/> </Button>
                                            <Button variant="outline-info" className="ml-2" onClick= { ()=> addCart(p) }>Buy </Button>
                                            </td>
                                            
                                        </tr>
                                    )
                
                                })
                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
