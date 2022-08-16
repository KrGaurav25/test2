import AuthContext from "./AuthContext"
import { Card, Button } from "react-bootstrap"
import { useContext } from "react"
import React from "react"
import students from "./Data"
const Dashboard=()=>{
    const authStatus=useContext(AuthContext)
    return(
        // Login status
        <div>
            {
                authStatus.loginStatus?<div>
            <h3>This is Dashboard Page</h3>

            {
                students.map((item, i) =>
                    <Card key={i} style={{ width: "18rem", float: "left", margin: "5px", backgroundColor: "black", color: "white" }}>
                        <Card.Body>
                            Id: {i + 1}<br />
                            Name: {item.name}<br />
                            Email: {item.email}<br />
                            Contact: {item.contact}<br />
                            <Button style={{ margin: "5px" }}>Proceed To Shopping</Button>
                        </Card.Body>
                    </Card>
                )
            }            
                </div>:<h1>Please login</h1>
            }
            
        </div>
    )
}
export default Dashboard