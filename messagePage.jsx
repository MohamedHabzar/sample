



export default function MessagePage() {
  return (
  <>
 <Navbar/>
      <div className="Mess_Page">
        <div className="mess_left">
          <div className="nav-section">
            <div className="heading">
               <h4>Messages</h4>
            </div>
            <div className="menu">
              <ul>
                 <li><AiOutlineSetting/></li>
                 <li><LuMailPlus/></li>
              </ul>
            </div>
          </div>
          <div className="sloganBox">
            <div className="slogan1">
                <h1>Welcome</h1>
            </div>
            <div className="slogan2">
                <p>Drop a line,share posts and more with private conversations between you and others on X.</p>
            </div>
            <div className="mess_btn">
                <button>Write a Message</button>
            </div>
          </div>
       </div>
       <div className="mess_right">
          <div className="s_mess">
            <div className="s_heading">
              <h1>Select a message</h1>
            </div>
            <div className="s_slogan">
              <p>Choose from your existing conversations,start a new one,or just keep swimming.</p>
            </div>
            <div className="s_btn">
              <button>New Message</button>
            </div>
          </div>
       </div>
      </div>
    </>
  )
}
