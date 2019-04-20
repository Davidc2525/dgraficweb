import React, { Component } from 'react';
import logo from './logo_.png';

import img_1 from './img_1.png';
import img_2 from './img_2.svg';
import img_3 from './img_3.svg';
import img_4 from './img_4.png';
import img_5 from './img_5.png';
import img_6 from './img_6.svg';
import img_7 from './img_7.png';
import img_8 from './img_8.png';
import img_9 from './img_9.png';
import img_10 from './img_10.png';
import img_11 from './img_11.png';
import img_12 from './img_12_.png';
import img_13 from './img_13_.png';
import img_14 from './img_14_.png';
import img_15 from './img_15_.png';
import img_16 from './img_16.svg';
import img_17 from './img_17.svg';
import img_18 from './img_18.png';
import img_19 from './img_19.png';
import img_20 from './img_20.png';
import img_21 from './img_21.png';
import img_22 from './img_22.jpg';
import img_23 from './img_23.png';
import img_24 from './img_24.png';
import img_25 from './img_25.png';
import img_26 from './img_26.png';
import img_27 from './img_27.png';

import './App.css';

import {
  Anchor,
 Box,
 Button,
 Collapsible,
 Heading,
 Grommet,
 Layer,
 Grid,
 Paragraph,
 ResponsiveContext,
 Image,
 
} from 'grommet';
import { FormClose, Notification,Announce,Favorite,Code,Cube,Brush,Play,Phone,FacebookOption,Facebook,Twitter,Instagram,Linkedin,Google,Mail} from 'grommet-icons';

var intRan = _ => Math.floor(Math.random() * 255);

var toHex = int => (int).toString(16)

var ranColor = _ => "#" + toHex(intRan()) + toHex(intRan()) + toHex(intRan())

const theme = {
  global: {
    colors: {
        brand: '#7D4CDB',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

var _fase_1 = [
  { title: "PROFESIONAL", img: img_1, content: "Nuestro equipo de trabajo cuenta con lo necesario a nivel empresarial entregamos productos dentro de la linea estandard de la industria." },
  { title: "RESPONSAVILIDAD", img: img_2, content: "Mi abuelo siempre decia que cuando estrechas la mano de una amigo haces una promesa, te despides con la promesa de volver a verse. Cuando estrechamos tu mano nos sentimos comprometidos porque queremos que regreses." },
  { title: "ESFUERZO", img: img_3, content: "En dgrafic no nos basta con culminar un producto, sabemos lo importante que es tu tiempo por eso aplicamos una fuerza aplastante que estira nuestra creatividad al maximo para garantizarte lo mejor en el menor tiempo posible." },
  { title: "AMOR", img: img_4, content: "Sabemos que tu negocio es tu pasion por eso cada producto que sale de nuestras manos lleva un pedazo del corazon de cada uno de nuestros empleados todo para asegurar esa chispa invisible de creatividad que hace la diferencia." },
  { title: "A TIEMPO", img: img_5, content: "Sabemos q tu tiempo es muy importante, por eso trabajamos de forma optimizada para responder tus necesidades lo antes posible" },
]

var cube = [
    [
        {img:img_19,title:"Avisos y Pendones",content:"contenido pendones "},
        // {img:img_7,title:"avisos",content:"contenido avisos"},
        {img:img_10,title:"Video y Animacion",content:"contenido  video"},
    ],
    [
        {img:img_23,title:"Paginas Web",content:"contenido  web"},
        {img:img_24,title:"Desarrollo de Software",content:"contenido  software"},
    ],
    [
      {img:img_22,title:"SEO, Social Media y Marketing",content:"contenido  SEO"}
    ]
    /* [
      {img:img_7,title:"marketing",content:"contenido  marketing"},
    ] */
]

/**/

var Box_border_imags = props => (
    <Box  
    background="white" 
    style={{borderRadius:"5em"}} 
    margin="medium"  
    border={{ color: 'white', size: 'large' }}
    >                           
        <Box direction="row"  flex gap="small">
          {
          props.imgs
          .map(img => (
            <Box height="xsmall" width="xsmall" className="img_hover">
              <Image
                fit="contain"
                src={img}
              />
            </Box>
          ))
          }
       </Box>
    </Box>
);
/*  */
var comp_web = props => (
  <Box direction={"column"} align="center">
    <Box>
      <Box_border_imags imgs={[img_16,img_27,img_17,img_18]}/>
    </Box>
    
    <Heading level="4">WEB</Heading>
    
  </Box>
);



var comp_seo_media = props => (
  <Box direction={"column"} align="center">
    <Box>
      <Box 
      justify="center"
      align="center"
      background="white" 
      style={{borderRadius:"5em"}}        
      border={{ color: 'white', size: 'small' }}
      direction="row" 
      flex 
      wrap 
      
      width="small">
          {
            [Facebook,Twitter,Instagram,Linkedin,Google,Mail]
            .map(I_con=>(
                <Box className={"img_hover"} pad="medium"><I_con color='plain' size='large'/></Box>
            ))
          }

      </Box>    
    </Box>
    
    <Box>
       <Heading level="4">SEO, Social Media</Heading>
    </Box>
  </Box>
);

var comp_marketing = props => (
  <Box direction={"column"} align="center">
    <Box>
       <Box  
        background="white" 
        style={{borderRadius:"5em"}}        
        border={{ color: 'white', size: 'small' }}
        > 
          <Image
            fit="contain"
            src={img_26}
          />
      </Box>    
    </Box>
    
    <Box>
       <Heading level="4">Marketing</Heading>
    </Box>
  </Box>
);


const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='white'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    //elevation='large'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "publicidad",
      cur_color: "#282c34",
      showSidebar: false,
    }

    this.rets = [];
    for (let x = 0; x < 10; x++) {
      this.rets[x] = x;;
    }

    var index = 0;
    let msgs = ["publicidad", "diseño web", "software", "avisos", "pendones","marketing","SEO","social media","video"]
    var index_c = 0;
    let colors = []
    for (let x = 0; x < 1000; x++) {
      colors[x] = ranColor();
    }
    setInterval(_ => {
      var n = Math.floor(Math.random() * 500);
      this.setState({gli:n<=100});
      setTimeout(_=>{
        this.setState({gli:false});
      },200)
    }, 1000)

    setInterval(_ => {
      this.setState({msg:msgs[index]});

      index++;
      if(index>msgs.length-1){index=0}
    }, 2000)

   
  }

  render() {
  const { showSidebar } = this.state;
  var p_size = showSidebar?"small":"large";
    return (
<Grommet theme={theme} full>
 <ResponsiveContext.Consumer>
   {size => (
      <Box >
        <AppBar>
           <Box  align='center' flex direction='row' >
              <Heading color="brand" level='2' margin='none'>D</Heading>
              <Heading color="dark-1" level='2' margin='none'>GRAFIC</Heading>
          </Box>
          
          {/*<Button
            icon={<Notification />}
            onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
          />*/}
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }} >
        
           <Box direction="column" >    
            
              {/*header*/}
              <Box className="header_h" style={{backgroundColor:this.state.gli?"black":"white",transform:"skewY(6deg)"}}>
               
                <Box align='center'  style={{transform:"skewY(-6deg)"}} >
                  <Heading  color={this.state.gli ? "white" : "dark-1"} level='1' size="xlarge" >DGRAFIC</Heading>

                  <Box direction="row">
                    <Announce  color={this.state.gli ? "white" : "brand"} size='large' />
                  </Box>
                  <Heading  color={this.state.gli ? "white" : "dark-1"} level='4'>Tu mejor opcion en {this.state.msg}</Heading>
                </Box>
    
              </Box>
              {}
              
              <Box background='accent-3' style={{transform:"skewY(6deg)"}} >
                
                <Box align="center" pad="large"  style={{transform:"skewY(-6deg)"}}>
                  
                      <Heading  level='1' size="large" >
                        Somos esa parte de tu idea que te hace falta                      
                      </Heading>

                      <Favorite color="dark-1" size="large"/>
                      
                      {                          
                        _fase_1.map((item, x) => (

                          <Box direction={size=="small"?"column":(x%2 == 0 ? "row" : "row-reverse")} align="center">
                            <Box height="small" width="medium">
                              <Image
                                fit="contain"
                                src={item.img}
                              />
                            </Box>
                            <Box>
                              <Paragraph className="text_jus" margin="small" size="medium">
                               {item.title}. {item.content}
                              </Paragraph>
                            </Box>
                          </Box>

                          ))
                      }
                      
                
                </Box>
              
              </Box>
              
             
              
              {}
              <Box background="white" pad="large" style={{transform:"skewY(-6deg)"}}>
                <Box align="center" style={{transform:"skewY(6deg)"}}>
                    <Heading  level='1' size="large" >
                       Todo lo que necesitas en un solo lugar
                      
                      </Heading>
                      <Cube size="large"/>
                      
                      <Paragraph className="text_jus" size="large">
                        No es necesario que des tantas vueltas para encontrar lo que necesesitas, DGRAFIC tiene todo para ti y tu negocio.
                      </Paragraph>
                      
                      
                      {
                        cube.map(x => (
                          <Box direction={size=="small"?"column":"row"}  align="center" justify="center">
                            {x.map(y => (
                              <Box pad="small" align="center" justify="center">

                                <Box height="medium" width="medium"
                                 border={{ color: size=="small"?"brand":'white', size: 'large' }}
                                 style={{borderRadius:"5em"}}
                                >
                                  <Image
                                    fit="contain"
                                    src={y.img}
                                  />
                                </Box>
                                <Paragraph color="brand" size="medium">{y.title}</Paragraph>
                                {/* <Paragraph size="large">{y.content}</Paragraph> */}

                              </Box>
                            ))}
                          </Box>
                        ))
                      }
                                             
                </Box>
                
              </Box>
              {}
              
              {}
              <Box  background="dark-2"  pad="large" style={{transform:"skewY(6deg)"}} >
              
                <Box align="center" style={{transform:"skewY(-6deg)"}} >
                
                     <Heading  level='1' size="large" >
                        Dale movimiento a tus ideas
                     </Heading>
                     
                     <Play color="white" size="large"/>

                     <Heading  level='2' >
                        Videos, spots 
                     </Heading>
                     

                    
                     <Box>
                     
                     {/*video*/}
                      <Box direction={size=="small"?"column":"row"} align="center">  
                      
                          <Box_border_imags imgs={[img_9,img_11,img_25]}/>
                          
                          <Box>
                              <Paragraph className="text_jus" size="large">
                              Efectos, transiciones y animaciones son unas de las cosas
                              que puedes expresar en videos y spots</Paragraph>
                          </Box>
                          
                    </Box>
                      {/*video*/}
                     
                     </Box>
                
                
                </Box>  
                 
              </Box>
              {}
              {}
              <Box  background="status-warning"  pad="large" style={{transform:"skewY(-6deg)"}} >
              
                <Box align="center" style={{transform:"skewY(6deg)"}} >
                
                     <Heading  level='1' size="large" >
                        Tu negocio no existe si no esta en internet 
                     </Heading>
                     
                     <Heading  level='2' >
                        con una pagina web, todos te veran   
                     </Heading>
                     

                     <Brush color="white" size="large"/>
                    
                     <Box>
                     
                     {/*web*/}
                     <Box align="center" direction={size=="small"?"column":"row"}>
                         {[[comp_web,comp_seo_media],[comp_marketing]]
                         .map(x=>(
                           <Box>
                                {x.map(Item_=>(
                                 <Item_ size={size}/>
                                ))}
                           </Box>
                         ))}
                     </Box>
                     {/*
                      <Box direction={size=="small"?"column":"row"} align="center">  
                      
                         <Box height="medium" width="medium">
                              <Image
                                fit="contain"
                                src={img_6}
                              />
                          </Box>                    
                          <Box>
                              <Paragraph  size="large">
                              web, SEO
                              </Paragraph>
                          </Box>
                          
                      </Box>*/}
                      {/*web*/}
                     
                     </Box>
                
                
                </Box>  
                 
              </Box>
              {}
              
              
              {}
              <Box background='#62def3' style={{transform:"skewY(-6deg)",marginBottom: "-5em"}}  pad="large" >
                <Box align="center" style={{transform:"skewY(6deg)"}}  >
                     <Heading  level='1' size="large" >
                           Expertos en software
                          
                      </Heading>
                      <Code size="large"/>

                      <Box direction={size=="small"?"column":"row"} align="center">  
                      
                        <Box  background="white" style={{borderRadius:"5em"}} margin="medium" border={{ color: 'white', size: 'large' }}>
                          <Paragraph>
                             
                                <div dangerouslySetInnerHTML={{__html:`
                                

<pre style="color:#000000;"><span style="color:#004a43; ">#</span><span style="color:#004a43; ">include</span><span style="color:#800000; ">&lt;</span><span style="color:#40015a; ">iostream</span><span style="color:#800000; ">&gt;</span>
<span style="color:#800000; font-weight:bold; ">using</span> <span style="color:#800000; font-weight:bold; ">namespace</span> <span style="color:#666616; ">std</span><span style="color:#800080; ">;</span>
<span style="color:#800000; font-weight:bold; ">int</span> <span style="color:#400000; ">main</span><span style="color:#808030; ">(</span><span style="color:#808030; ">)</span><span style="color:#800080; ">{</span>
  <span style="color:#603000; ">cout</span><span style="color:#808030; ">&lt;</span><span style="color:#808030; ">&lt;</span><span style="color:#800000; ">"</span><span style="color:#0000e6; ">hola mundo</span><span style="color:#800000; ">"</span><span style="color:#808030; ">&lt;</span><span style="color:#808030; ">&lt;</span><span style="color:#603000; ">endl</span><span style="color:#800080; ">;</span>
<span style="color:#800080; ">}</span>
</pre>
                                
                                
                                `}}/>
                             
                              </Paragraph>
                          </Box>                    
                          <Box_border_imags imgs={[img_12,img_13,img_14,img_15]}/>
                      </Box>
                      <Box>
                          <Paragraph className="text_jus" size="large" >
                            Especialistas en desarrollo de sistemas, softwares, programas, tutoria y +
                          </Paragraph>
                      </Box>

                </Box>
              </Box>
              {}
              
              {/*pie*/}
              <Box /*className={"header_app"}*/   flex background="dark-1" pad="large"  >
                      
                      <Box>
                        <Box  style={{marginTop:"50px"}} >
                             <Heading  level='1' color="white" size="large" >
                               DGRAFIC
                            </Heading>
                        <Box>
                      
                        
                        <Paragraph>Venezuela / Colombia</Paragraph>
                      </Box>
                      
                      <Box align={size == "small"?"start":"end"}>
                        {/* <Paragraph>contactos:</Paragraph> */}
                        <Box>
                          <Box>
                            <Phone color="white"/>
                            <Box>
                            <Paragraph color="white">+57 313 2824878 / +58 416-0879936</Paragraph>
                            </Box>
                          </Box>
                          
                          <Box>
                           
                            <Box>
                              <Paragraph color="white">Sigenos</Paragraph>
                              
                              <Box direction="row" align="start" >
                              
                                <Box margin="small">
                                 <Anchor target="_new" href="https://www.facebook.com/david.asdasc" primary>
                                    <Facebook color="plain"/>
                                 </Anchor> 
                                </Box>
                                
                                <Box margin="small">
                                 <Anchor target="_new" href="https://www.facebook.com/david.asdasc" primary>
                                     <Twitter color="plain"/> 
                                 </Anchor> 
                                </Box> 
                                
                                <Box margin="small">
                                 <Anchor target="_new" href="https://www.facebook.com/david.asdasc" primary>
                                     <Instagram color="plain"/> 
                                 </Anchor> 
                                </Box> 
                                
                              </Box>
                              
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box> 
                    
                     
                </Box>
              </Box>
              
              
          </Box>
         {(!showSidebar || size !== 'small') ? (
           <Collapsible direction="horizontal" open={showSidebar}>
              <Box
                flex
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
              >
                sidebar
              </Box>
            </Collapsible>
            ): (
           <Layer>
            <Box
               background='light-2'
               tag='header'
               justify='end'
               align='center'
               direction='row'
             >
               <Button
                 icon={<FormClose />}
                 onClick={() => this.setState({ showSidebar: false })}
               />
             </Box>
           
             <Box
               fill
               background='light-2'
               align='center'
               justify='center'
             >
               sidebar
             </Box>
           </Layer>)}
        </Box>
      </Box>
   )}
 </ResponsiveContext.Consumer>
</Grommet>
    );
  }
}

export default App;
