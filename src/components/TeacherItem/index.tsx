import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                   <header>
                       <img src="https://vignette.wikia.nocookie.net/americandad/images/b/b9/AmericanDad_09_Roger_v1F.jpg/revision/latest/top-crop/width/360/height/360?cb=20101125195058" alt="Roger Smith"/>
                       <div>
                           <strong>Roger Smith</strong>
                           <span>Química</span>
                       </div>
                   </header>

                   <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       <br/><br/>
                       Sunt, est repellat nemo blanditiis, quod delectus, quam modi animi porro dolorem quisquam commodi alias necessitatibus aut labore natus! Repellendus, obcaecati tempore?
                   </p>

                   <footer>
                       <p>
                           Preço/hora 
                           <strong>R$20</strong>
                       </p>
                       <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                       </button>
                   </footer>
               </article>
    )
}

export default TeacherItem