from django.db import models
import datetime

# Create your models here.

class Tasks(models.Model): 
    task = models.CharField(max_length= 255) 
    priority = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now=True)
    completed = models.BooleanField(default=False)
    modified_at = models.DateTimeField(auto_now = True)


