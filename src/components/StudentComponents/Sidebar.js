import React from 'react'
import './Styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-auto min-vh-100 bg-dark'>
                <ul>
                    <il>
                        <a className='nav-link px=2' href='/learn'>
                            <i className='bi bi-book' /> <span className='ms-1 d-none d-sm-inline'>My Learning</span>

                        </a>
                    </il>
              
                    <il>
                        <a className='nav-link px=2' href='/group'>
                            <i className='bi bi-people' /> <span className='ms-1 d-none d-sm-inline'>My Group</span>

                        </a>
                    </il>
                    <il>
                        <a className='nav-link px=2' href='/discussions'>
                            <i className='bi bi-chat-right-dots' /> <span className='ms-1 d-none d-sm-inline'>Discussions</span>
                        </a>
                    </il>
                    <il>
                        <a className='nav-link px=2' href='/events'>
                            <i className='bi bi-calendar-event' /> <span className='ms-1 d-none d-sm-inline'>Upcoming Events</span>

                        </a>
                    </il>
                </ul>

            </div>

        </div>
      
    </div>
  )
}

export default Sidebar;
