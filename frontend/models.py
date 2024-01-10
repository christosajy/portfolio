from django.db import models

# Create your models here.

class Feedbackbox(models.Model):
    Name = models.CharField(max_length=255, null=True)
    Email = models.EmailField(null=True)
    Subject = models.CharField(max_length=255, null=True)
    Message = models.TextField(null=True)