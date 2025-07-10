from django.urls import path
from django.contrib.auth import views as auth_views

from welcome.views import welcome

urlpatterns = [
    path('', welcome)
]
