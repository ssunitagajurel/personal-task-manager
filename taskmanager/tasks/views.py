from django.shortcuts import render
# Create your views here.

from rest_framework import generics
from .models import Tasks
from .serializers import TaskSerialiser

class TaskListCreateView(generics.ListCreateAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TaskSerialiser

class TaskRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TaskSerialiser


