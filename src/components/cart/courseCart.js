import React, { Component } from 'react';
import Header from '../resusableComponent/Heading';
import Img from 'gatsby-image';
import Heading from '../resusableComponent/Heading';
import { Card, Icon, Image } from 'semantic-ui-react'


class courseCart extends Component {
 constructor(props){
  super(props);     
    this.state={
        courses :props.courses.edges
    }
 }

    render() {
        console.log(this.state.courses);
        
        return (
            <section className="py-5 ">
                <div className="contaner">
                <Heading title="Course Cart"/>
                <div className="row ">
                    {
                        this.state.courses.map(({node}) =>{
                         return(
                             <Card className="mx-auto mr-10" key={node.id} >
                                 <Img fixed ={node.images.fixed} className="img"/>
                                 <Card.Content> 
                                 <Card.Header className="text-info text-center font-weight-bold ">{node.title}</Card.Header> 
                                 <Card.Description className="text-black text-left ml-2">
                                    {node.catagory}
                                </Card.Description>
                                <Card.Description className="text-black text-left ml-2">
                                    {node.discription.discription}
                                </Card.Description>
                                 <Card.Meta>
                                    <span className='text-success text-center'> ${node.price}</span>
                                </Card.Meta>
                            
                                 </Card.Content>    
                                 <button className="btn btn-warning btn-long"
                                  data-item-id ={node.id}
                                  data-item-title ={node.title}
                                  data-item-price ={node.price}
                                  data-item-catagory={node.catagory}
                                  data-item-url="https://learncodeonline.in"
                                  data-item-discription={node.discription.discription}
                                 >Join Now</button>
                                 
                             </Card>
                         )
                        })
                    }
                </div>
                </div>
              
             </section>
        )
    }
}

export default courseCart; 