import { useRef } from "react"

const Day17 = () =>{
    
    const inputRef=useRef()
    const displayRef=useRef()
    const homeRef=useRef()
    const aboutRef=useRef()
    const contactRef=useRef()
    const toggleRef=useRef(null)
    const topRef=useRef()


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
    const moveTop=()=>{

        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    }
  return (
    < >

    <div className="bg-purple-800 ">

        <div className="flex justify-center">
            <div  className="bg-white p-5 rounded-3xl w-fit">
            <label htmlFor="content">Enter Text Content :</label>
            <input className="border-2 p-2 m-2 rounded-3xl" type="text" id="content" ref={inputRef} onChange={handleChange}  />
            <p ref={displayRef}></p>
            </div>
        </div>
        
    <div className="flex justify-center">
        <div className="bg-white font-bold rounded-3xl p-2 flex gap-5 w-fit mx-5 my-1 px-5">
         <button  onClick={home}>Home</button>
        <button onClick={about}>About</button>
        <button onClick={contact}>Contact</button>
    </div>
    </div>
    
   
   <section ref={homeRef} >
    <h1 className="text-center text-5xl font-bold">Home</h1>
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
        <h1 className="text-center text-5xl font-bold">About</h1>
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
    <h1 className="text-center text-5xl font-bold">Contact</h1>
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
        <button className="bg-purple-950 rounded-3xl p-3 text-center m-3" onClick={toggle}>Display Content
        </button>
        <p ref={toggleRef}style={{display:"none"}}>This the message</p>
    </div>

    <button className="bg-purple-950 rounded-3xl p-3 m-3" onClick={moveTop} ref={topRef}>Move top</button>

    </div>
    

    </>
  )
}

export default Day17