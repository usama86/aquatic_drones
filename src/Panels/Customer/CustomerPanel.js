
import React from 'react';

import classes from './CustomerPanel.module.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { FiUser } from "react-icons/fi";
import { FaShip,FaBell } from "react-icons/fa";

import {NavLink} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import ScrollMenu from 'react-horizontal-scrolling-menu';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';




import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import {Form} from 'react-bootstrap';

import TextField from '@material-ui/core/TextField';

import './h.css';

// list of items
const list = [
  { name: 'Drone 1' },
  { name: 'Drone 2' },
  { name: 'Drone 3' },
  { name: 'Drone 4' },
  { name: 'Drone 5' },
  { name: 'Drone 6' },
  { name: 'Drone 7' },
  { name: 'Drone 8' },
  { name: 'Drone 9' }
];



// One item component
// selected prop will be passed
const MenuItems = ({ text, selected }) => {
  return (
    <div className="menu-item">   
      <Card className={classes.cards}>
      <CardContent>
        <Typography style={{fontSize:"14",fontWeight:"bolder"}}  gutterBottom>
          {text}
        </Typography>
        
        <div style={{paddingTop:"5%",paddingBottom:"3%"}} >
        
        <Typography display="inline" style={{fontWeight:"500"}} component="h2">
         Route:
        </Typography>
        <Typography display="inline" className={classes.pos} color="textSecondary">
          WijnHaven 03
        </Typography>
        
        </div>
        
        <div style={{paddingBottom:"3%"}}>
        
        <Typography display="inline" style={{fontWeight:"500"}} component="h2">
         Tijd:
        </Typography>
        <Typography display="inline" style={{paddingLeft:"12%"}} color="textSecondary">
          09:30-18:00 + 25 minuten
        </Typography>
        
        </div>

        <div >
        
        <Typography display="inline" style={{fontWeight:"500"}} component="h2">
         Klant:
        </Typography>
        <Typography display="inline" style={{paddingLeft:"8%"}} color="textSecondary" >
          Hogeschool Rotterdam
        </Typography>
        
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" style={{paddingLeft:"10%"}}>Klik hier voor meer informatie</Button>
      </CardActions>
    </Card>









    </div>
  );
  
};

// All items component
// Important! add unique key
export const Menus = (list) => list.map(el => {
  const { name } = el;

  return (
    <MenuItems
      text={name}
      key={name}
    />
  );
});


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });




class Login extends React.Component {

    state={
      anchorEl:false,
      date:"",
      selected: 0
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

      const { selected } = this.state;
      // Create menu from items
      const menu = Menus(list, selected);
    return (


<div  className={classes.maindiv}  >
      <div className={classes.navbar}>
      
      <FaShip size={30} color={"white"} style={{cursor: "pointer",paddingTop:"1%"}}/> 
      <FaBell size={38} color={"white"} style={{paddingLeft:"1.5%",paddingTop:"1%",cursor: "pointer"}}/> 
      <FiUser size={40} color={"white"} style={{paddingLeft:"1.5%",paddingTop:"1%",cursor: "pointer"}}  />

      <NavLink to = {{ pathname : '/'}} style={{paddingLeft:"30%",fontSize:"5",color:"white", textDecoration:"none"}}>Drones</NavLink> 
      <NavLink to = {{ pathname : '/'}} className={classes.midWords} style={{paddingLeft:"3%",color:"white", textDecoration:"none"}}>Routes</NavLink>
        
      </div>


      <div style={{paddingTop:"4%"}}>

      <React.Fragment>
      <CssBaseline />
      <Container fixed >
        <Typography component="div" style={{ backgroundColor: 'rgb(249,246,245)', height: '100vh' }} >

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
                                    style={{cursor: "pointer",paddingBottom:"10%",marginLeft:"82%",marginBottom:"200px"}}
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

                      <div style={{paddingTop:"2%",paddingBottom:"2%"}}>
                      
                            <span style={{paddingLeft:"40%"}}>{this.state.date}</span>
                      
                      </div>

                      <div style={{paddingLeft:"3%",paddingRight:"3%"}}>
                        
                            <ScrollMenu
                                data={menu}
                                arrowLeft={ArrowLeft}
                                arrowRight={ArrowRight}
                                selected={selected}
                                onSelect={this.onSelect}
                              />
                        
                      </div>


                      <div style={{paddingTop:"3%",paddingLeft:"3%"}}>

                      <span style={{fontSize:"14",fontWeight:"bolder"}}>        Drone#1 Status:  </span>
        
                      </div>


            <div style={{paddingTop:"3%",paddingLeft:"3%", display: 'inline-flex'   }}>
                             
                <div>             
                              <Card   style={{width:"90%"}}>
                                        <CardActionArea>
                                          <CardMedia
                                            component="img"
                                            alt="Motor Temperature"
                                            height="140"
                                            image={require ("../Assest/Images/coverphoto.jpg")}
                                            title="Motor Temperature"
                                          />
                                          <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            Motor Temperature
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            Motor Temperature are cool.
                                            </Typography>
                                          </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                          <Button size="small" color="primary">
                                            Share
                                          </Button>
                                          <Button size="small" color="primary">
                                            Learn More
                                          </Button>
                                        </CardActions>
                              </Card>
                </div>
                <div>
                                <Card  style={{width:"90%"}}>
                                        <CardActionArea>
                                          <CardMedia
                                            component="img"
                                            alt="Motor Temperature"
                                            height="140"
                                            image={require ("../Assest/Images/coverphoto.jpg")}
                                            title="Motor Temperature"
                                          />
                                          <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            Accu Stand
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            Accu Stand are cool.
                                            </Typography>
                                          </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                          <Button size="small" color="primary">
                                            Share
                                          </Button>
                                          <Button size="small" color="primary">
                                            Learn More
                                          </Button>
                                        </CardActions>
                              </Card>
                </div>
                <div>
                                <Card  style={{width:"90%"}}>
                                        <CardActionArea>
                                          <CardMedia
                                            component="img"
                                            alt="Motor Temperature"
                                            height="140"
                                            image={require ("../Assest/Images/coverphoto.jpg")}
                                            title="Motor Temperature"
                                          />
                                          <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            Rpm
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            Rpm are cool.
                                            </Typography>
                                          </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                          <Button size="small" color="primary">
                                            Share
                                          </Button>
                                          <Button size="small" color="primary">
                                            Learn More
                                          </Button>
                                        </CardActions>
                              </Card>
                </div>
                <div>
                                <Card  style={{width:"90%"}}>
                                        <CardActionArea>
                                          <CardMedia
                                            component="img"
                                            alt="Motor Temperature"
                                            height="140"
                                            image={require ("../Assest/Images/coverphoto.jpg")}
                                            title="Motor Temperature"
                                          />
                                          <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            Zonnocel informatie
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            Zonnocel informatie are cool.
                                            </Typography>
                                          </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                          <Button size="small" color="primary">
                                            Share
                                          </Button>
                                          <Button size="small" color="primary">
                                            Learn More
                                          </Button>
                                        </CardActions>
                              </Card>
                  </div>

            </div>
            <div style={{paddingTop:"3%"}}>

          



      



            </div>


           </div>
           

          </Typography>




      </Container>

    </React.Fragment>


    


      </div>
      
      </div>

    
      
    
  );
  }
}

export default Login;
