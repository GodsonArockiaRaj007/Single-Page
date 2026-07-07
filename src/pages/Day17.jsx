import { useRef } from "react"

const Day17 = () =>{
    
    const inputRef=useRef()
    const displayRef=useRef()
    const homeRef=useRef()
    const aboutRef=useRef()
    const contactRef=useRef()
    const toggleRef=useRef(null)


    const handleChange=()=>{
        displayRef.current.innerHTML=inputRef.current.value
    }

    const home=()=>{
        homeRef.current.scrollIntoView({
            behavior:"smooth"
        })
        
    }
     const about=()=>{
        aboutRef.current.scrollIntoView({
            behavior:"smooth"
        })
        
    }
     const contact=()=>{
        contactRef.current.scrollIntoView({
            behavior:"smooth"
        })
        
    }

    const toggle=()=>{
        
        if(toggleRef.current.style.display== "none")
        {
           toggleRef.current.style.display="block" 
        }
        else
        {
            toggleRef.current.style.display="none"
        }
    }
  return (
    <>
    <div>
        <input type="text" ref={inputRef} onChange={handleChange}  />
        <p ref={displayRef}></p>
    </div>

    <button onClick={home}>Home</button>
    <button onClick={about}>About</button>
    <button onClick={contact}>Contact</button>
   <section ref={homeRef} >
    <h1>Home</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores, dolore maxime nisi nobis ab ad eum fuga quod non iure eveniet sequi reiciendis molestias impedit culpa. Nostrum, maiores sunt.
    Laudantium facilis veritatis accusantium repellendus suscipit? Saepe optio nesciunt id fugit, ea ipsa accusantium nisi reprehenderit eligendi amet eius voluptate blanditiis, unde suscipit recusandae natus nostrum quos harum dignissimos quod.
    Quibusdam reiciendis nihil enim aut ut nisi at tempora vel molestias voluptas ducimus, eaque aliquid numquam ipsum vitae asperiores recusandae. Aut repellendus minima iure totam neque ea maiores inventore facilis.
    Error nostrum inventore iste maiores nesciunt incidunt amet laborum veniam ipsa officia debitis dicta minima ducimus cum consectetur dolores animi, rem possimus ad rerum pariatur. Sit earum asperiores ut consectetur!
    Laborum corporis ducimus necessitatibus ad excepturi architecto, vero pariatur provident! Labore distinctio sint expedita! Tempore quidem, saepe totam impedit, praesentium itaque harum fugiat minima officia minus tenetur, similique optio velit!
    Animi maxime fuga necessitatibus repellendus voluptatum obcaecati maiores culpa, dignissimos hic earum, in eum nam! Et nam, ducimus laborum aperiam neque natus nihil necessitatibus eaque perferendis quia, beatae itaque explicabo.
    Molestiae explicabo commodi nesciunt, repellat vel eaque odio placeat optio beatae inventore esse alias soluta veniam officiis amet iste eum! Mollitia aperiam magni suscipit ratione ut, totam perferendis fugiat facilis!
    Iusto possimus quo, quae dolorem fuga nemo. Unde doloremque in sint provident quidem, vitae blanditiis. Nam asperiores magnam eos. Autem iure repellat id sit. Veniam corporis natus eligendi sint consequuntur.
    Maxime placeat dolorem nisi soluta. Id consectetur labore neque adipisci reprehenderit ex rem quasi alias debitis voluptatibus amet eos harum, provident nesciunt beatae perspiciatis cupiditate ullam temporibus suscipit ducimus quibusdam!
    Quos voluptate repudiandae earum unde aperiam in. Deserunt quidem facilis nisi, accusamus nulla repellat quo voluptates deleniti nihil, at culpa perferendis hic voluptatibus voluptatum magni sint doloremque dicta? Explicabo, velit.

   </section>

    <section ref={aboutRef} >
        <h1>About</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores, dolore maxime nisi nobis ab ad eum fuga quod non iure eveniet sequi reiciendis molestias impedit culpa. Nostrum, maiores sunt.
    Laudantium facilis veritatis accusantium repellendus suscipit? Saepe optio nesciunt id fugit, ea ipsa accusantium nisi reprehenderit eligendi amet eius voluptate blanditiis, unde suscipit recusandae natus nostrum quos harum dignissimos quod.
    Quibusdam reiciendis nihil enim aut ut nisi at tempora vel molestias voluptas ducimus, eaque aliquid numquam ipsum vitae asperiores recusandae. Aut repellendus minima iure totam neque ea maiores inventore facilis.
    Error nostrum inventore iste maiores nesciunt incidunt amet laborum veniam ipsa officia debitis dicta minima ducimus cum consectetur dolores animi, rem possimus ad rerum pariatur. Sit earum asperiores ut consectetur!
    Laborum corporis ducimus necessitatibus ad excepturi architecto, vero pariatur provident! Labore distinctio sint expedita! Tempore quidem, saepe totam impedit, praesentium itaque harum fugiat minima officia minus tenetur, similique optio velit!
    Animi maxime fuga necessitatibus repellendus voluptatum obcaecati maiores culpa, dignissimos hic earum, in eum nam! Et nam, ducimus laborum aperiam neque natus nihil necessitatibus eaque perferendis quia, beatae itaque explicabo.
    Molestiae explicabo commodi nesciunt, repellat vel eaque odio placeat optio beatae inventore esse alias soluta veniam officiis amet iste eum! Mollitia aperiam magni suscipit ratione ut, totam perferendis fugiat facilis!
    Iusto possimus quo, quae dolorem fuga nemo. Unde doloremque in sint provident quidem, vitae blanditiis. Nam asperiores magnam eos. Autem iure repellat id sit. Veniam corporis natus eligendi sint consequuntur.
    Maxime placeat dolorem nisi soluta. Id consectetur labore neque adipisci reprehenderit ex rem quasi alias debitis voluptatibus amet eos harum, provident nesciunt beatae perspiciatis cupiditate ullam temporibus suscipit ducimus quibusdam!
    Quos voluptate repudiandae earum unde aperiam in. Deserunt quidem facilis nisi, accusamus nulla repellat quo voluptates deleniti nihil, at culpa perferendis hic voluptatibus voluptatum magni sint doloremque dicta? Explicabo, velit.

   </section>
   <section ref={contactRef} >
    <h1>Contact</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores, dolore maxime nisi nobis ab ad eum fuga quod non iure eveniet sequi reiciendis molestias impedit culpa. Nostrum, maiores sunt.
    Laudantium facilis veritatis accusantium repellendus suscipit? Saepe optio nesciunt id fugit, ea ipsa accusantium nisi reprehenderit eligendi amet eius voluptate blanditiis, unde suscipit recusandae natus nostrum quos harum dignissimos quod.
    Quibusdam reiciendis nihil enim aut ut nisi at tempora vel molestias voluptas ducimus, eaque aliquid numquam ipsum vitae asperiores recusandae. Aut repellendus minima iure totam neque ea maiores inventore facilis.
    Error nostrum inventore iste maiores nesciunt incidunt amet laborum veniam ipsa officia debitis dicta minima ducimus cum consectetur dolores animi, rem possimus ad rerum pariatur. Sit earum asperiores ut consectetur!
    Laborum corporis ducimus necessitatibus ad excepturi architecto, vero pariatur provident! Labore distinctio sint expedita! Tempore quidem, saepe totam impedit, praesentium itaque harum fugiat minima officia minus tenetur, similique optio velit!
    Animi maxime fuga necessitatibus repellendus voluptatum obcaecati maiores culpa, dignissimos hic earum, in eum nam! Et nam, ducimus laborum aperiam neque natus nihil necessitatibus eaque perferendis quia, beatae itaque explicabo.
    Molestiae explicabo commodi nesciunt, repellat vel eaque odio placeat optio beatae inventore esse alias soluta veniam officiis amet iste eum! Mollitia aperiam magni suscipit ratione ut, totam perferendis fugiat facilis!
    Iusto possimus quo, quae dolorem fuga nemo. Unde doloremque in sint provident quidem, vitae blanditiis. Nam asperiores magnam eos. Autem iure repellat id sit. Veniam corporis natus eligendi sint consequuntur.
    Maxime placeat dolorem nisi soluta. Id consectetur labore neque adipisci reprehenderit ex rem quasi alias debitis voluptatibus amet eos harum, provident nesciunt beatae perspiciatis cupiditate ullam temporibus suscipit ducimus quibusdam!
    Quos voluptate repudiandae earum unde aperiam in. Deserunt quidem facilis nisi, accusamus nulla repellat quo voluptates deleniti nihil, at culpa perferendis hic voluptatibus voluptatum magni sint doloremque dicta? Explicabo, velit.

   </section>
    
    <div>
        <button onClick={toggle}>Click Button
</button>
        <p ref={toggleRef}style={{display:"none"}}>This the message</p>
    </div>

    </>
  )
}

export default Day17