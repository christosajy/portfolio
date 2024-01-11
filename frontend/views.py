#===================================================================================================================
from django.shortcuts import render, redirect
from django.contrib import messages
from django.conf import settings
from django.core.mail import send_mail

def frontindex(request):
    return render(request, 'home.html')

def contact_with_us(request):
    if request.method == 'POST':
        frml = request.POST.get('mailfrom')
        msge = request.POST.get('message')
        Subj = 'USER FEEDBACK'
        send_mail(Subj, msge, frml, [settings.EMAIL_HOST_USER], fail_silently=False)
        messages.success(request, 'Feedback submitted successfully')
        return redirect(frontindex)
    else:
        messages.error(request, 'Feedback sent fail')
        return redirect(frontindex)
