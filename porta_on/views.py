from django.shortcuts import render

# Create your views here.

def dashboard(request):
    return render(request, 'porta_on/pages/dashboard.html', context={
        'name': 'dashboard'
    })

def produtos(request):
    return render(request, 'porta_on/pages/produtos.html', context={
        'name': 'produtos'
    })