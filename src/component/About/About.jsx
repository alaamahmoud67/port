import React from 'react'
import img2 from "../img/about.png"
import "../About/About.css"
import img13 from "../img/img-3.png"
import icon7 from "../img/icon-4.png"
import icon8 from "../img/icon-5.png"
import icon9 from "../img/icon-6.png"
import { Tab, Tabs } from 'react-bootstrap';
import imgp3 from "../img/img-7.jpg"

export default function About() {
    const [key, setKey] = React.useState('INT Career');

  return (
    <>
    <section className="about-section padding-top oh padding-bottom ">
        <div className="container">
            <div className="section-header margin-olpo position-relative">
                <h2 className="title ">
                    <span className="shape"><span className='abo'>About</span></span> <span>Me</span>
                </h2>
            </div>
            <div className="row ">
                <div className="col-lg-6 px-5 border">
                    <div className="about-content">
                        <p className="header-para text-white">She is a center forward who is very active in the team's offensive actions and has
                             a remarkable eye for goal, as well as 
                             good penalty-taking skills.[2]

Thanks to her characteristics and potential, she is considered among the best Italian and European talents of her generation.[2][3]</p>
                        <div className="about-area">
                            <div className="item wow fadeInUp d-inline-flex justify-content-center align-items-center"data-aos="fade-up" >
                                <div className="icon">
                                <img src={icon9} alt="" />

                                </div>
                                <div className="content">
                                    <h5 className="title"><span>Biography</span></h5>
                                    <p>Club, Nazionale</p>
                                </div>
                            </div>
                            <div  className="item wow fadeInUp d-inline-flex justify-content-center align-items-center "data-aos="fade-up" >
                                <div className="icon">
                                <img src={icon7} alt=""  className=""/>
                                </div>
                                <div className="content">
                                    <h5 className="title"><span>Stats</span></h5>
                                    <p>Presenze e reti nei club,Cronologia presenze e reti in nazionale</p>
                                </div>
                            </div>
                            <div className="item wow fadeInUp d-inline-flex justify-content-center align-items-center" data-aos="fade-up">
                                <div className="icon">
                                <img src={icon8} alt="" />
                                </div>
                                <div className="content">
                                    <h5 className="title"><span>Clubs</span></h5>
                                    <ul>
                                        <li>
                                        Club
                                        </li>
                                        <li>
                                         Nazionale
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInRight d-none d-lg-block border" data-aos="fade-up">
                    <div className="about-thumb position-relative   ">
                        <div className='bg-danger im '>
                        <img src={imgp3} alt="" className=' px-5 w-100 im' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='py-5'>
        <div className='container'>
        <div className="section-header margin-olpo position-relative">
                <h2 className="title ">
                    <span className="shape"><span className='abo'>History</span></span> <span>Me</span>
                </h2>
            </div>
        </div>
    <div className="container mt-4 py-5  align-items-center d-lg-flex">
    
      <Tabs
        id="controlled-tab-example  "
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3  d-lg-block"
      >
        <Tab eventKey="INT Career" title="INT Career" className=' bord'>
          <div className='bg '>
           <div className='zin w-100 h-100 p-5'>
           <h4>Asia Bragonzi has represented Italy at various youth levels in international football.</h4>
            <p>She has been a regular feature in Italy's youth squads, particularly excelling in the Under-19 and Under-23 teams.</p>
            <h4>Italy U19:</h4>
            <p>Bragonzi was part of the Italian U19 national team, where she made a significant impact in several competitions. She has been recognized for her goal-scoring abilities at this level, contributing to Italy's performance in youth tournaments.</p>
            <h4>Italy U23:</h4>
            <p>Bragonzi has also progressed to the Italy U23 squad, continuing her development and representing her country at a higher level. Her performances in the youth ranks have made her a player to watch for potential inclusion in the senior squad.</p>
            <p>As of now, she has not made a full debut for the Italian senior national team but remains a promising talent in Italian football, with the potential to break into the senior squad in the future(
                worldfootball.net</p>
           </div>
          </div>
        </Tab>
       
        <Tab eventKey="Personal Life" title="Personal Life" >
          <div className='bg'>
          <div className='zin p-5 w-100 h-100'>
           <h4>Information about Asia Bragonzi's personal life is relatively limited, as athletes often keep their private lives away from the public eye. However, some insights can be gathered:
           </h4>
            <p>Family Support: Asia has mentioned her family's influence on her football career, particularly her mother, who initially had reservations about her pursuing football but eventually became her biggest supporter Calcio Hellas</p>
            <h4>Passion for Football: She has expressed a deep passion for football, emphasizing that it was the only sport she wanted to pursue despite her mother's attempts to introduce her to other activities
                Calcio Hellas</h4>
            <p>Social Media Presence: Asia is active on social media, where she shares glimpses of her life, training, and moments with teammates. This platform often provides fans with a more personal view of her experiences as a player.</p>
           
           </div>
          </div>
        </Tab>
        <Tab eventKey="Club Career" title="Club Career" >
          <div className='bg'>
          <div className='zin p-5 w-100 h-100'>
           <h4>sia Bragonzi has had a notable club career across several Italian football clubs
           </h4>
            <p>primarily as a forward. Here is an overview:</p>
            <h4>Juventus (2018–2020): Bragonzi started her professional career with Juventus
                Calcio Hellas</h4>
            <p>where she scored five goals in eight appearances, contributing to the team's success.</p>
           <h4>Hellas Verona (2020–2021)</h4>
           <p>After Juventus, she moved to Hellas Verona, where she spent a season to gain more playing time and experience.</p>
           <h4>Sassuolo (2022):</h4>
           <p>She had a brief spell with Sassuolo, gaining further top-flight experience in Serie A.</p>
           <h4>Pomigliano (2023):</h4>
           <p>Before joining Sampdoria, she spent some time with Pomigliano, continuing her progress as an effective striker.</p>
           <h4>Sampdoria (2023):</h4>
           <p>Bragonzi's time at Sampdoria was highlighted by a crucial goal against Juventus late in 2023.</p>
           <h4>Return to Juventus (2024):</h4>
           <p>In early 2024, Bragonzi returned to Juventus, ready to contribute to the team's success once again(
            worldfootball.net</p>
           </div>
          </div>
        </Tab>

      </Tabs>
    </div>
    </section>
    
    </>
  )
}
