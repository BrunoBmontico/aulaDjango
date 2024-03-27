from django.urls import path
from django.contrib import admin
from mycontacts import views

urlpatterns = [
    path(r'admin/', admin.site.urls),
    path(r'', views.show),
    path(r'contact_view/<int:contact_id>/', views.contact_view, name='contact_view'),
    path(r'add/', views.add),
]