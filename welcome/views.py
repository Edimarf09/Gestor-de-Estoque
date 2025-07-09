from django.shortcuts import render

# Create your views here.

def welcome(request):
    return render(request, 'welcome/pages/welcome.html', context={
        'name': 'welcome'
    })