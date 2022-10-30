import { useParams } from "react-router-dom"
const Bills = () => {
    let params = useParams()
    console.log(params)
    return (
        <h1>Invoice #123</h1>
    )
}

export default Bills