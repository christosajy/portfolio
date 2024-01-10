from django.shortcuts import render, redirect
from .models import Feedbackbox
from django.contrib import messages
from .utils import *
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User

# Create your views here.

def frontindex(request):
    feed = Feedbackbox.objects.all()
    context = {'feed': feed}
    return render(request, 'home.html', context)

def getintouch(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        mail = request.POST.get('email')
        subj = request.POST.get('subject')
        msge = request.POST.get('message')
        obj = Feedbackbox(Name=name, Email=mail, Subject=subj, Message=msge)
        obj.save()
        messages.success(request, 'Feedback submitted successfully')
        return redirect(frontindex)

def myform(request):
    return render(request, 'login.html')

def adminlogin(request):
    if request.method == 'POST':
        un = request.POST.get('uname')
        pd = request.POST.get('pswd')
        if User.objects.filter(username__contains=un).exists():
            x = authenticate(username=un, password=pd)
            if x is not None:
                request.session['username'] = un
                request.session['password'] = pd
                login(request, x)
                messages.success(request, 'Admin Login Successfull')
                return redirect(frontindex)
            else:
                messages.error(request, 'User not exists')
                return redirect(frontindex)
        else:
            messages.error(request, 'User not exists')
            return redirect(frontindex)    

def adminlogout(request):
    del request.session['username']    
    del request.session['password'] 
    messages.success(request, 'Admin logout successfull')
    return redirect(frontindex)   