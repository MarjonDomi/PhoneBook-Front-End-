package com.task.phonebook.controller;

import com.task.phonebook.entity.Contact;
import com.task.phonebook.model.ContactModel;
import com.task.phonebook.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000/")
@Controller
public class ContactController {

    @Autowired
    private ContactService contactService;

    @GetMapping("/")
    public String viewHomePage( Model model){
        model.addAttribute("listContacts",contactService.getAllContact());
        return "index";
    }

    @GetMapping("/showNewContactForm")
    public String showNewContactsForm(Model model){
        ContactModel contact = new ContactModel();
        model.addAttribute("contact",contact);
        return "new_contact";
    }

//    @PostMapping("/search")
//    public String doSearchContact(@ModelAttribute("contact") Contact contact, Model model) {
//        contact = contactService.getContactById(id);
//        model.addAttribute("contact", contact);
//        return "index";
//    }

    @PostMapping("/saveContact")
    public String saveContact(@Valid @ModelAttribute("contact") Contact contact, BindingResult result){
        //save contact to database
        if(result.hasErrors()){
            System.out.println("Has Errors/Check if the field is empty");
            return "new_contact";
        }else{
            contactService.saveContact(contact);
        }
        return "redirect:/";
    }

    @GetMapping("/showFormForUpdate/{id}")
    public String showFormForUpdate( @PathVariable (value = "id") long id ,Model model){

        //get contact from the service
          Contact contact = contactService.getContactById(id);

        //set contact as a model attribute to pre-populate the form
        model.addAttribute("contact" , contact);
            contactService.saveContact(contact);
            return "update_contact";
    }

    @GetMapping("/deleteContact/{id}")
    public String deleteContact(@PathVariable (value = "id") long id){

        //call delete contact method
        this.contactService.deleteContactById(id);

        return "redirect:/";
    }
}
