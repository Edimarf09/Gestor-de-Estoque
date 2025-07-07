from django.urls import path

from produtos.views import produtos

urlpatterns = [
    path('', produtos)
]
