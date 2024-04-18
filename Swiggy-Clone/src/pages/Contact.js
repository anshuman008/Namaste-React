const Contact = () =>{
  return  <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl">Contact Us</h1>

     <form >
      <input className="border border-black p-3 m-3" type="text" placeholder="name" />
      <input className="border border-black p-3 m-3" type="text"  placeholder="message" />
      <button className="border border-black p-3 m-3 bg-gray-500" >Submit</button>
     </form>
    </div>
}


export default Contact;

