import { contact } from '../../portfolio'
import './Contact.css'
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { useState } from 'react';
import { Alert, IconButton } from '@mui/material';
const Contact = () => {
  const [copy, setCopy] = useState(false);
  const onCopyHandler=()=>{
    navigator.clipboard.writeText('+989909345731');
    setCopy(true);
    setTimeout(()=>{
      setCopy(false);
    } , 3000)
  }

  
  return (
    <>
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact ME</h2>
      <div className='center'>
         <a
                href={`mailto:${contact.email}`}
                aria-label='github'
                className='link link--icon'
              >
                <MailIcon fontSize="large"/>
        </a>
         <a
                href={`mailto:${contact.email}`}
                aria-label='github'
                className='link link--icon'
              >
                <TelegramIcon fontSize="large"/>
        </a>
         <a
                href='https://wa.me/9909345731'
                aria-label='github'
                className='link link--icon'
              >
                <WhatsAppIcon fontSize="large"/>
        </a>

         <a
            onClick={onCopyHandler}
            className='link link--icon'
            style={{cursor : 'pointer'}}
            >
            <PhoneIcon fontSize="large"/>
        </a>
       </div>
    </section>
    {copy ? <Alert className="animateOpen" severity="success" color="info">
        Phone number copied successfully
    </Alert> : null}
    </>
  )
}

export default Contact
