from django.urls import path
from frontend import views

urlpatterns = [
    path('frontindex/', views.frontindex, name='frontindex'),
    path('contact_with_us/', views.contact_with_us, name='contact_with_us'),
]
