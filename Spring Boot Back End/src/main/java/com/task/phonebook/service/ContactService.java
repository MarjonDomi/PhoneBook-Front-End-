package com.task.phonebook.service;

import com.task.phonebook.entity.Contact;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ContactService {

 List<Contact> getAllContact();
 void saveContact(Contact contact);
 Contact getContactById(long id);
 void deleteContactById(long id);

}
