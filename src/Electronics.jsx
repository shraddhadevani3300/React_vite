
import Useref from "./Useref";
const Electronics=()=>{

    var arr=[
        {"name":"admin", "email": "admin@gmail.com"},
       { "name":"skywin", "email": "skywin@gmail.com" },
    ]
    return(
        <>
         <div className="container">
        <h1>Data of Users</h1>
        <table style={{"border": "1px solid "}} cellPadding={7} cellSpacing={0}>
            <tr>
                <th>NO</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr>
                {
                    arr.map((e,index)=>{
                        return(
                            <>
                            <td>{index+1}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            </>
                        )
                    })
                }
            </tr>
        </table>
        </div>
        {/* <Useref/> */}
        </>
    )
}
export default Electronics;