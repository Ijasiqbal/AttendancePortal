from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import RegisterView, ClassesListCreateView, ClassesRetrieveUpdateDestroyView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='login'),
    path('login/refresh/', TokenRefreshView.as_view(), name='refresh'),
    path('register/', RegisterView.as_view(), name="register"),
    path('classes/', ClassesListCreateView.as_view(), name='classes-list-create'),
    path('classes/<int:pk>/', ClassesRetrieveUpdateDestroyView.as_view(), name='classes-detail'),
]