import React,{useState} from 'react'

const OnlyContactus = () => {
    
    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        message:""
    });

    let name,value;
    const getUserdata=(event)=>{
        name=event.target.name;
        value=event.target.value;
        setUser({...user,[name]:value})
        
    }
    const postData=async(e)=>{
        e.preventDefault();

        const{name,email,phone,address,message}=user;

        if(name&&email&&phone&&address&&message){
            const resp =await fetch("https://reactcontactusform-default-rtdb.firebaseio.com/contactusformDB1.json"
        ,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name,email,phone,address,message
            })
        }
        );
        if(resp){
            setUser({
                name:"",
                email:"",
                phone:"",
                address:"",
                message:""
            });
            alert("Data stored successfully..");
        }
        }else{
            alert("please fill all the data");
        }
        


    }


    return (
      
        <div className="container">
          <br/>
          <br/>
          <br/>
          <div className="row">
            <div className="col-10 col-xl-10 mx-auto">
            <h3 className="text-center">Get in Touch with Success</h3>
           <h2 className="text-center">Please fill the below Details</h2>
           <hr className="w-25 mx-auto"/>

            <form method="POST">    
                <div className="form-group">
                <label for="name">Enter youre Name &nbsp; *</label>
                <input type="text" required onChange={getUserdata} value={user.name} name="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter youre Name" />
                </div>
                
                <div className="form-group">
                <label for="exampleInputEmail1">Email address &nbsp; *</label>
                <input type="email" required onChange={getUserdata} value={user.email} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                <label for="mobile">Mobile Number &nbsp; *</label>
                <input type="number" name="phone" required onChange={getUserdata} value={user.phone} className="form-control" id="mobile" aria-describedby="emailHelp" placeholder="Enter mobile number" />
                </div>

                <div className="form-group">
                <label for="address">Address &nbsp; *</label>
                <input type="text" name="address" onChange={getUserdata} value={user.address} className="form-control" id="address" aria-describedby="emailHelp" placeholder="Enter Address " />
                </div>

                
                <div className="form-group">
                <label for="message">What Purpose you want to be here ? </label><br></br>
                <div className="form-group">
                <textarea id="message" className="textArea" placeholder="Ex. i want to learn testing (or) i want to be a web developer" onChange={getUserdata} value={user.message} name="message"></textarea>
                </div>
                </div>


                <button type="submit" onClick={postData} className="btn btn-primary">Submit</button>
            </form>
            </div>
          </div>
          
            
        </div>
    )
}

export default OnlyContactus
