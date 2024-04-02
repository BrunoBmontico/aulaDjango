from django.urls import path
from django.contrib import admin
from mycontacts import views

urlpatterns = [
    path(r'admin/', admin.site.urls),
    path(r'', views.show, name='homepage'),
    path(r'contact_view/<int:contact_id>/', views.contact_view, name='contact_view'),
    path(r'contact_delete/<int:contact_id>/', views.contact_delete, name='contact_delete'),
    # path(r'contact_edit/<int:contact_id/', views.contact_edit, name='contact_edit'),
    path(r'add/', views.add),
]