from django.urls import path
from frontend import views

urlpatterns = [
    path('frontindex/', views.frontindex, name='frontindex'),
    path('getintouch/', views.getintouch, name='getintouch'),

    path('myform/', views.myform, name='myform'),
    path('adminlogin/', views.adminlogin, name='adminlogin'),
    path('adminlogout/', views.adminlogout, name='adminlogout'),
]
