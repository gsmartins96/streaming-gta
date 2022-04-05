import React, { useState } from "react";
import { ContactContainer, ContactList, Title } from "./styles";

interface ContactProps {
  image?: string;
  socialMediaName?: string;
  socialMediaUrl?: string;
}

const Contact: React.FC<ContactProps> = ({
  image,
  socialMediaName,
  socialMediaUrl,
}) => {
  const [contacts, setContacts] = useState([
    {
      image:
        "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1-2-1536x1536.png",
      socialMediaName: "Facebook",
      socialMediaUrl: "https://www.facebook.com/",
    },
    {
      image:
        "https://www.imagensempng.com.br/wp-content/uploads/2021/02/Logo-Instagram-Png-1024x1024.png",
      socialMediaName: "Instagram",
      socialMediaUrl: "https://www.instagram.com/",
    },
    {
      image:
        "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png",
      socialMediaName: "Twitter",
      socialMediaUrl: "https://www.twitter.com/",
    },
  ]);

  return (
    <>
      <Title>Entre em contato:</Title>
      <ContactContainer>
        <ContactList>
          {contacts.map((contact) => {
            return (
              <>
                <li>
                  <button>
                    <img src={contact.image} alt="logo redes sociais" />
                    <a href={contact.socialMediaUrl}>
                      {contact.socialMediaName}
                    </a>
                  </button>
                </li>
              </>
            );
          })}
        </ContactList>
      </ContactContainer>
    </>
  );
};

export default Contact;
