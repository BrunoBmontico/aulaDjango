from django.shortcuts import render, get_object_or_404
from .forms import AddForm
from .models import Contact
from django.http import HttpResponse, HttpResponseRedirect

def show(request):
    """ 
    This function gets all the members in your Database through your Model
    Any further usage please refer to: https://docs.djangoproject.com/el/1.10/ref/models/querysets/
    """
    contact_list = Contact.objects.all()
    return render(request, 'mycontacts/show.html',{'contacts': contact_list})

def contact_view(request, contact_id):
    contact = get_object_or_404(Contact, pk=contact_id)

    return render(request, 'mycontacts/contact_content.html', {'contact': contact})

def contact_delete(request, contact_id):
    contact = get_object_or_404(Contact, pk=contact_id)

    contact.delete()

    return HttpResponseRedirect('/')

def contact_edit(request, contact_id):
    contact = get_object_or_404(Contact, pk=contact_id)

    if request.method == 'POST':

        django_form = AddForm(request.POST)
        if django_form.is_valid():

            edit_name = django_form.data.get('name')
            edit_relation = django_form.data.get('relation')
            edit_phone = django_form.data.get('phone')
            edit_email = django_form.data.get('email')

            contact.name = edit_name
            contact.relation = edit_relation
            contact.phone = edit_phone
            contact.email = edit_email
            contact.save()
            
            return HttpResponseRedirect('/')
        

def add(request):
    """ This function is called to add one contact member to your contact list in your Database """
    if request.method == 'POST':
        
        django_form = AddForm(request.POST)
        if django_form.is_valid():
           
            """ Assign data in Django Form to local variables """
            new_member_name = django_form.data.get("name")
            new_member_relation = django_form.data.get("relation")
            new_member_phone = django_form.data.get('phone')
            new_member_email = django_form.data.get('email')
            
            """ This is how your model connects to database and create a new member """
            Contact.objects.create(
                name =  new_member_name, 
                relation = new_member_relation,
                phone = new_member_phone,
                email = new_member_email, 
                )
                 
            
            return HttpResponseRedirect('/')   
        
        else:
            """ redirect to the same page if django_form goes wrong """
            return render(request, 'mycontacts/add.html')
    else:
        return render(request, 'mycontacts/add.html')