from django.contrib.auth.models import User
from rest_framework import generics
from .models import Classes
from .serializers import UserSerializer,ClassesSerializer
from rest_framework.permissions import AllowAny
# Create your views here.
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ClassesListCreateView(generics.ListCreateAPIView):
    queryset = Classes.objects.all()
    serializer_class = ClassesSerializer

class ClassesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Classes.objects.all()
    serializer_class = ClassesSerializer
