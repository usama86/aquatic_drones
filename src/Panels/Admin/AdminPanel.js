
import React from 'react';

import classes from './AdminPanel.module.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { FiUser } from "react-icons/fi";
import { FaShip,FaBell,FaPlus,FaCircle } from "react-icons/fa";
import {NavLink} from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



import MaterialTable from 'material-table';




import {Form} from 'react-bootstrap';


import './h.css';

// list of items


class AdminPanel extends React.Component {

    state={
      anchorEl:false,
      date:"",
      selected: 0,
      activeUserData:[
        {id:1,name:"Rijnmond(#001)"},
        {id:2,name:"VlieLand(#003)"}
      ],
      unactiveUserData:[
        {id:1,name:"JesseElmer(#002)"},
        {id:2,name:"Limburg(#004)"}
      ],

      columns: [
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ],
      data: [
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        {
          name: 'Zerya Betül',
          surname: 'Baran',
          birthYear: 2017,
          birthCity: 34,
        },
      ],


    }
    componentDidMount=()=>{
      setInterval(()=>{
          this.setState({
              date :new Date().toLocaleDateString(),
            //  Time:new Date().toLocaleTimeString()
          })
      },1000)
  };

     handleClick=()=> {
       this.setState({
        anchorEl:true
       });
   
    };
  
     handleClose=()=> {
      this.setState({
        anchorEl:null
       });
      
    };
    onSelect = key => {
      this.setState({ selected: key });
    };
  
  

    render(){

    return (


<div  className={classes.maindiv}  >
      


      <div >


      <div className={classes.navbar}>
      
      <FaShip size={30} color={"white"} style={{cursor: "pointer",paddingTop:"1%"}}/> 
      <FaBell size={38} color={"white"} style={{paddingLeft:"1.5%",paddingTop:"1%",cursor: "pointer"}}/> 
      <FiUser size={40} color={"white"} style={{paddingLeft:"1.5%",paddingTop:"1%",cursor: "pointer"}}  />

      <NavLink to = {{ pathname : '/'}} style={{paddingLeft:"30%",fontSize:"5",color:"white", textDecoration:"none"}}>Drones</NavLink> 
      <NavLink to = {{ pathname : '/'}} className={classes.midWords} style={{paddingLeft:"3%",color:"white", textDecoration:"none"}}>Routes</NavLink>
        
      </div>


      <div style={{paddingTop:"4%"}}>



      <React.Fragment >
      <CssBaseline />
      <Container fixed  >
        <Typography component="div" style={{  backgroundColor: 'rgb(249,246,245)',height: '100vh' }} >

          <div>
            
                    <div style={{paddingBottom:"3%"}}>

                    </div>
                      <div className={classes.formNav} >
                           
                           
                                  <span   
                                  style={{color:"white",paddingLeft:"3%",fontWeight:"lighter",cursor: "pointer"}}
                                  >
                                  Actuele Routes
                                  </span>
                                  <span   
                                  style={{color:"white",paddingLeft:"3%",fontWeight:"lighter",cursor: "pointer"}}
                                  >
                                  Ingeplande routes
                                  </span>
                                  <span   
                                  style={{color:"white",paddingLeft:"3%",fontWeight:"lighter",cursor: "pointer"}}
                                  >
                                  Geschidenis
                                  </span>
                                  <span   onClick={this.handleClick}
                                  style={{color:"white",paddingLeft:"54%",fontWeight:"lighter",cursor: "pointer"}}
                                  >
                                  Dawood
                                  </span>
                                  
                                          <Menu
                                            
                                            id="simple-menu"
                                            anchorEl={this.state.anchorEl}
                                            keepMounted
                                            open={Boolean(this.state.anchorEl)}
                                            onClose={this.handleClose}
                                            style={{cursor: "pointer",overflow: "visible",paddingBottom:"10%",marginLeft:"82%"}}
                                          >
                                            <MenuItem className="btn btn-primary btn-lg" data-toggle="modal" data-target="#AddCustomer"> My Profile</MenuItem>
                                            <MenuItem >Logout</MenuItem>
                                          </Menu>
                                  
                                  



    <div className="modal fade" id="AddCustomer">
    <div className="modal-dialog">
      <div className="modal-content">
      
      
        <div style={{fontSize:"20px"}} className="modal-header">
        <Form.Text  className="text-muted">
              My Profile
    </Form.Text>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div className="modal-body">
        <Form style={{fontSize:"15px"}} >
            

              <Form.Group controlId="2">
                <Form.Label style={{color:"black"}} >First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" onChange ={(event)=>this.getFirstName(event)} />
              </Form.Group>

                <Form.Group controlId="3">
                <Form.Label style={{color:"black"}} >Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" onChange={(event)=>this.getLastName(event)} />
              </Form.Group>

               <Form.Group controlId="4">
                <Form.Label style={{color:"black"}} >Email</Form.Label>
                <Form.Control type="email" placeholder="Email" onChange={(event)=>this.getEmail(event)} />
              </Form.Group>
              
              <Form.Group controlId="5">
                <Form.Label style={{color:"black"}} >Password</Form.Label>
                <Form.Control type="text" placeholder="Password" onChange={(event)=>this.getPassword(event)} />
              </Form.Group>

               <Form.Group controlId="6">
                <Form.Label style={{color:"black"}} >Registered Date</Form.Label>
                <Form.Control type="text" placeholder="yyyy-mm-dd" onChange={(event)=>this.getDate(event)} />
              </Form.Group>

              <Form.Group controlId="7">
                <Form.Label style={{color:"black"}} >Phone #</Form.Label>
                <Form.Control type="text" placeholder="Phone #"  onChange={(event)=>this.getMobileNo(event)} />
              </Form.Group>

              <Form.Group controlId="8">
                <Form.Label style={{color:"black"}} >Address</Form.Label>
                <Form.Control type="text" placeholder="Address" onChange={(event)=>this.getAddress(event)} />
              </Form.Group>

                          <button onClick={this.postDataHandler} type="button" class="btn btn-primary btn-lg">Update Profile</button>
                          
              </Form>;
                      </div>
                      
                    
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                      
                    </div>
                  </div>
                </div>





                      </div>

                      <div style={{paddingTop:"2%",paddingBottom:"2%",paddingLeft:"3%",display: 'inline-flex'}}>
                      
                           <div >
                                       
                                            <span style={{fontWeight:"500"}}>   Drones </span>

                                        
                                            <Typography   color="textSecondary" style={{paddingTop:"5%"}} >
                                            Actief
                                            </Typography>
                                            <div style={{paddingTop:"2%"}}>
                                                {this.state.activeUserData.map(user=>{
                                                  return(
                                                     <div key={user.id} style={{paddingTop:"3%"}}>
                                                            <span>
                                                                        <img src={require('../Assest/Images/insertImage.png')} 
                                                                        alt=""
                                                                        style={{height:"7%",width:"7%"}}
                                                                        
                                                                        />  
                                                                        <span style={{paddingLeft:"2%"}}>
                                                                        {user.name}
                                                                        </span>
                                                            </span>
                                                     </div> 

                                                  )

                                                })}
                                            </div>
                                            <div  style={{paddingTop:"3%"}}>
                                             
                                            <FaPlus color={"gray"}   />
                                            <span >           </span>
                                            <span style={{color:"gray"}} >Drone toevoegan</span>

                                            </div>
                                            <Typography style={{paddingTop:"6%"}}  color="textSecondary">
                                            Inactief
                                            </Typography>
                                            
                                            <div style={{paddingTop:"3%"}}>
                                                {this.state.unactiveUserData.map(user=>{
                                                  return(
                                                     <div key={user.id} style={{paddingTop:"3%"}}>
                                                            <span>
                                                                  <img src={require('../Assest/Images/insertImage.png')} 
                                                                  alt=""
                                                                  style={{height:"7%",width:"7%"}}
                                                                  
                                                                  />  
                                                                  <span style={{paddingLeft:"2%"}}>
                                                                    {user.name}
                                                                  </span>
                                                            </span>
                                                     </div> 

                                                  )

                                                })}
                                            </div>
                                            
                                   
                           </div>
                         
                         {/*Right side of admin */}
                           <div  >
                             

                                 <span >
                                            <img src={require('../Assest/Images/insertImage.png')} 
                                             alt=""
                                             style={{height:"15%",width:"15%"}}
                                            />
                                            
                                           <span style={{fontWeight:"500",fontSize:"150%",paddingLeft:"4%"}}> 
                                             Rijnmond (#001)
                                           </span>

                                  </span>



                                  <div style={{paddingTop:"8%"}}>

                                  <Card className={classes.cards}>
                                              <CardContent>
                                                <Typography style={{fontWeight:"500"}}  >
                                                  Gegevens
                                                </Typography>

                                                <hr
                                                        style={{

                                                            backgroundColor: "grey",
                                                            height: 1,
                                                            opacity:"0.2"
                                                        }}
                                                    />  
                                            <div style={{paddingTop:"4%"}}>    
                                                <Typography display="inline"  color="textSecondary">
                                                  Model
                                                </Typography>
                                                <Typography display="inline" style={{paddingLeft:"20%"}} >
                                                 AQ-001
                                                </Typography>
                                            </div>
                                            <div style={{paddingTop:"2%"}}>    
                                                <Typography display="inline"  color="textSecondary">
                                                  Bijnaam
                                                </Typography>
                                                <Typography display="inline" style={{paddingLeft:"17%"}} >
                                                 Rijnmond
                                                </Typography>
                                            </div>
                                            <div style={{paddingTop:"2%"}}>    
                                                <Typography display="inline"  color="textSecondary">
                                                  Status
                                                </Typography>
                                                <Typography display="inline" style={{paddingLeft:"19%"}} >
                                                <FaCircle size={15} color={"rgb(154,205,50)"} style={{cursor: "pointer",paddingBottom:"1%"}}/>
                                                
                                               
                                                 Actief
                                                </Typography>
                                            </div>
                                              
                                              
                                              </CardContent>
                                              
                                  </Card>






                                  </div>
                                  <div style={{paddingTop:"6%"}}>

                                  <MaterialTable
                                          style={{width:"120%"}}
                                          title="Metingen"
                                          columns={this.state.columns}
                                          data={this.state.data}
                                          editable={{
                                            onRowAdd: newData =>
                                              new Promise(resolve => {
                                                setTimeout(() => {
                                                  resolve();
                                                  const data = [...this.state.data];
                                                  data.push(newData);
                                                  this.setState({ ...this.state, data });
                                                }, 600);
                                              }),
                                            onRowUpdate: (newData, oldData) =>
                                              new Promise(resolve => {
                                                setTimeout(() => {
                                                  resolve();
                                                  const data = [...this.state.data];
                                                  data[data.indexOf(oldData)] = newData;
                                                  this.setState({ ...this.state, data });
                                                }, 600);
                                              }),
                                            onRowDelete: oldData =>
                                              new Promise(resolve => {
                                                setTimeout(() => {
                                                  resolve();
                                                  const data = [...this.state.data];
                                                  data.splice(data.indexOf(oldData), 1);
                                                  this.setState({ ...this.state, data });
                                                }, 600);
                                              }),
                                          }}
                                        />



                                  </div>


                                  <div style={{paddingTop:"5%"}}>
                                  </div>

              
              
                           </div>
                           
              
                      </div>

                      


           </div>
           

          </Typography>




      </Container>

    </React.Fragment>
    </div>

    


      </div>
      
      </div>

    
      
    
  );
  }
}

export default AdminPanel;
